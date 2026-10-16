"use client"

import { Fragment, useEffect, useRef, useState } from "react"
import { Loader2, MessageCircle, SendHorizontal, Sparkles, X } from "lucide-react"
import { site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

type Msg = { role: "user" | "assistant"; content: string }

const GREETING: Msg = {
  role: "assistant",
  content:
    "Jambo! 👋 I'm Vista, the Sunrise Vista AI assistant. Ask me about safaris, Kilimanjaro routes, Zanzibar, prices or the best time to travel.",
}

const SUGGESTIONS = [
  "Which Kilimanjaro route is best for beginners?",
  "Plan a 7-day safari + Zanzibar",
  "When is the Great Migration?",
  "How much is the Machame route for 2 people?",
]

/** Renders **bold**, bullet lines and bare URLs — enough for chat answers without a markdown dependency. */
function RichText({ text }: { text: string }) {
  const inline = (line: string, key: string) =>
    line.split(/(\*\*[^*]+\*\*|https?:\/\/[^\s)]+)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**")) return <strong key={`${key}-${i}`}>{part.slice(2, -2)}</strong>
      if (/^https?:\/\//.test(part)) {
        const clean = part.replace(/[.,;:]+$/, "")
        const display = clean.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")
        return (
          <Fragment key={`${key}-${i}`}>
            <a href={clean} className="break-words font-medium text-ember underline underline-offset-2">
              {display}
            </a>
            {part.slice(clean.length)}
          </Fragment>
        )
      }
      return <Fragment key={`${key}-${i}`}>{part}</Fragment>
    })

  const lines = text.split("\n")
  return (
    <>
      {lines.map((raw, i) => {
        const line = raw.replace(/^#{1,6}\s+/, "")
        const bullet = line.match(/^\s*(?:[-*•]|\d+\.)\s+(.*)$/)
        if (!line.trim()) return <div key={i} className="h-2" />
        if (bullet)
          return (
            <div key={i} className="flex gap-2 pl-1">
              <span className="text-ember">•</span>
              <span>{inline(bullet[1], `l${i}`)}</span>
            </div>
          )
        return <p key={i}>{inline(line, `l${i}`)}</p>
      })}
    </>
  )
}

export function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState<Msg[]>([GREETING])
  const [input, setInput] = useState("")
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const abortRef = useRef<AbortController | null>(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, busy])

  useEffect(() => {
    if (!open) return
    const t = setTimeout(() => inputRef.current?.focus(), 150)
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    window.addEventListener("keydown", onKey)
    // Lock background scroll on phones while the full-screen sheet is open.
    const mobile = window.matchMedia("(max-width: 639px)").matches
    if (mobile) document.body.style.overflow = "hidden"
    return () => {
      clearTimeout(t)
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open])

  useEffect(() => () => abortRef.current?.abort(), [])

  async function send(text: string, base: Msg[] = messages) {
    const content = text.trim()
    if (!content || busy) return
    const history = [...base, { role: "user" as const, content }]
    setMessages([...history, { role: "assistant", content: "" }])
    setInput("")
    setBusy(true)
    setError(false)

    const controller = new AbortController()
    abortRef.current = controller
    try {
      const res = await fetch("/api/chat/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: history.filter((m) => m !== GREETING) }),
        signal: controller.signal,
      })
      if (!res.ok || !res.body) throw new Error(`HTTP ${res.status}`)
      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let answer = ""
      for (;;) {
        const { done, value } = await reader.read()
        if (done) break
        answer += decoder.decode(value, { stream: true })
        setMessages([...history, { role: "assistant", content: answer }])
      }
      if (!answer.trim()) throw new Error("Empty answer")
    } catch (err) {
      if ((err as Error).name === "AbortError") return
      setError(true)
      setMessages([
        ...history,
        {
          role: "assistant",
          content: `Sorry — I couldn't connect just now. Our team can help you straight away on WhatsApp at ${site.phoneDisplay}.`,
        },
      ])
    } finally {
      setBusy(false)
    }
  }

  const lastUser = [...messages].reverse().find((m) => m.role === "user")?.content
  const showSuggestions = messages.length === 1

  return (
    <>
      {/* Launcher — sits above the WhatsApp button */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="vista-chat"
        aria-label={open ? "Close AI assistant" : "Open AI travel assistant"}
        className={cn(
          "fixed bottom-[4.75rem] right-4 z-40 grid h-[52px] w-[52px] place-items-center rounded-full bg-bark text-sm font-semibold text-white shadow-[0_12px_30px_-10px_rgba(43,15,14,0.6)] ring-2 ring-sun/40 transition hover:bg-bark-deep sm:flex sm:h-auto sm:w-auto sm:items-center sm:gap-2 sm:py-3 sm:pl-3.5 sm:pr-4 md:bottom-[6.5rem] md:right-6",
          open && "max-sm:hidden",
        )}
      >
        {open ? <X className="h-5 w-5 text-sun" /> : <Sparkles className="h-5 w-5 text-sun" />}
        <span className="hidden sm:inline">{open ? "Close" : "Ask Vista AI"}</span>
      </button>

      {open && (
        <div
          id="vista-chat"
          role="dialog"
          aria-label="Sunrise Vista AI travel assistant"
          className="fixed inset-0 z-[60] flex flex-col bg-cream sm:inset-auto sm:bottom-[9.5rem] sm:right-6 sm:h-[min(600px,calc(100vh-12rem))] sm:w-[400px] sm:overflow-hidden sm:rounded-3xl sm:shadow-[0_30px_80px_-30px_rgba(43,15,14,0.7)] sm:ring-1 sm:ring-line"
        >
          <header className="flex items-center gap-3 bg-bark px-4 py-3 pt-[max(0.75rem,env(safe-area-inset-top))] text-white">
            <img src={site.logo} alt="" className="h-10 w-10 rounded-full ring-2 ring-sun/60" />
            <div className="min-w-0 flex-1">
              <p className="font-serif text-lg leading-tight">Vista · AI Travel Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-white/70">
                <span className="h-2 w-2 rounded-full bg-emerald-400" /> Online · replies instantly
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="grid h-10 w-10 place-items-center rounded-full hover:bg-white/10"
            >
              <X className="h-5 w-5" />
            </button>
          </header>

          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto overscroll-contain px-4 py-4" aria-live="polite">
            {messages.map((m, i) => (
              <div key={i} className={cn("flex", m.role === "user" ? "justify-end" : "justify-start")}>
                <div
                  className={cn(
                    "max-w-[85%] space-y-1 rounded-2xl px-3.5 py-2.5 text-[15px] leading-relaxed sm:text-sm",
                    m.role === "user"
                      ? "rounded-br-md bg-bark text-white"
                      : "rounded-bl-md bg-white text-ink ring-1 ring-line",
                  )}
                >
                  {m.content ? (
                    m.role === "assistant" ? <RichText text={m.content} /> : <p className="whitespace-pre-wrap">{m.content}</p>
                  ) : (
                    <span className="flex items-center gap-2 text-muted-ink">
                      <Loader2 className="h-4 w-4 animate-spin" /> Thinking…
                    </span>
                  )}
                </div>
              </div>
            ))}

            {showSuggestions && (
              <div className="flex flex-wrap gap-2 pt-1">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => send(s)}
                    className="rounded-full border border-bark/20 bg-white px-3 py-2 text-left text-sm text-bark transition hover:border-bark hover:bg-sand-soft sm:text-xs"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {error && (
              <div className="flex flex-wrap gap-2">
                {lastUser && (
                  <button
                    type="button"
                    onClick={() => send(lastUser, messages.slice(0, -2))}
                    className="rounded-full border border-bark/20 bg-white px-3 py-2 text-sm text-bark"
                  >
                    Try again
                  </button>
                )}
                <a
                  href={whatsappLink(lastUser ? `Hi Sunrise Vista! ${lastUser}` : undefined)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-2 text-sm font-semibold text-white"
                >
                  <MessageCircle className="h-4 w-4" /> Continue on WhatsApp
                </a>
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="border-t border-line bg-white px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3"
          >
            <div className="flex items-end gap-2">
              <label htmlFor="vista-chat-input" className="sr-only">
                Your message
              </label>
              <textarea
                id="vista-chat-input"
                ref={inputRef}
                rows={1}
                value={input}
                maxLength={2000}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault()
                    send(input)
                  }
                }}
                placeholder="Ask about safaris, Kilimanjaro…"
                className="max-h-32 min-h-[44px] flex-1 resize-none rounded-2xl border border-line bg-cream px-4 py-2.5 text-base text-ink outline-none placeholder:text-muted-ink focus:border-amber sm:text-sm"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send message"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sun text-bark transition hover:bg-amber disabled:opacity-50"
              >
                {busy ? <Loader2 className="h-5 w-5 animate-spin" /> : <SendHorizontal className="h-5 w-5" />}
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-muted-ink">
              AI answers may be imperfect — our team confirms all bookings.
            </p>
          </form>
        </div>
      )}
    </>
  )
}
