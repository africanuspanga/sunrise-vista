import { buildSystemPrompt } from "@/lib/ai/knowledge"

export const dynamic = "force-dynamic"
export const maxDuration = 60

type Msg = { role: "user" | "assistant"; content: string }

const MAX_MESSAGES = 16
const MAX_CHARS = 2000
const SYSTEM_PROMPT = buildSystemPrompt()

const json = (body: unknown, init: ResponseInit) =>
  new Response(JSON.stringify(body), { ...init, headers: { "Content-Type": "application/json" } })

function sanitize(input: unknown): Msg[] | null {
  if (!Array.isArray(input)) return null
  const msgs = input
    .filter(
      (m): m is Msg =>
        !!m &&
        typeof m === "object" &&
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .map((m) => ({ role: m.role, content: m.content.slice(0, MAX_CHARS) }))
    .slice(-MAX_MESSAGES)
  if (!msgs.length || msgs[msgs.length - 1].role !== "user") return null
  return msgs
}

export async function POST(req: Request) {
  const apiKey = process.env.MOONSHOT_API_KEY
  if (!apiKey) return json({ error: "Chat is not configured" }, { status: 503 })

  let messages: Msg[] | null = null
  try {
    messages = sanitize((await req.json())?.messages)
  } catch {
    // fall through
  }
  if (!messages) return json({ error: "Invalid request" }, { status: 400 })

  const baseUrl = process.env.MOONSHOT_BASE_URL || "https://api.moonshot.ai/v1"
  const model = process.env.MOONSHOT_MODEL || "kimi-k2.6"

  const upstream = await fetch(`${baseUrl}/chat/completions`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
    body: JSON.stringify({
      model,
      messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      max_tokens: 1200,
      stream: true,
    }),
    signal: req.signal,
  }).catch((err) => {
    console.error("Moonshot request failed", err)
    return null
  })

  if (!upstream || !upstream.ok || !upstream.body) {
    const detail = upstream ? await upstream.text().catch(() => "") : ""
    console.error("Moonshot API error", upstream?.status, detail.slice(0, 300))
    return json({ error: "The assistant is unavailable right now" }, { status: 502 })
  }

  // Convert the OpenAI-compatible SSE stream into a plain text stream of answer tokens.
  const decoder = new TextDecoder()
  const encoder = new TextEncoder()
  let buffer = ""
  const stream = upstream.body.pipeThrough(
    new TransformStream<Uint8Array, Uint8Array>({
      transform(chunk, controller) {
        buffer += decoder.decode(chunk, { stream: true })
        const lines = buffer.split("\n")
        buffer = lines.pop() ?? ""
        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed.startsWith("data:")) continue
          const data = trimmed.slice(5).trim()
          if (!data || data === "[DONE]") continue
          try {
            const text = JSON.parse(data)?.choices?.[0]?.delta?.content
            if (typeof text === "string" && text) controller.enqueue(encoder.encode(text))
          } catch {
            // ignore keep-alives / partial frames
          }
        }
      },
    }),
  )

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "no-store", "X-Accel-Buffering": "no" },
  })
}
