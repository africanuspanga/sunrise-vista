// Client-side branded itinerary PDF. Loaded lazily (jsPDF is ~300KB) only when a visitor clicks download.
import { site } from "@/lib/site"

export type ItineraryDoc = {
  filename: string
  eyebrow: string
  title: string
  subtitle?: string
  heroImage?: string
  meta?: { label: string; value: string }[]
  overview?: string[]
  highlights?: string[]
  days?: { day: number | string; title: string; description: string; altitude?: string; time?: string }[]
  pricing?: { label: string; value: string }[]
  pricingNote?: string
  included?: string[]
  notIncluded?: string[]
  notes?: string[]
}

const C = {
  bark: [85, 32, 31] as const,
  barkDeep: [43, 15, 14] as const,
  sun: [246, 195, 67] as const,
  ember: [239, 125, 45] as const,
  ink: [58, 36, 33] as const,
  muted: [118, 91, 85] as const,
  line: [234, 217, 196] as const,
  sand: [253, 242, 214] as const,
}

async function toDataUrl(src: string): Promise<{ data: string; w: number; h: number } | null> {
  try {
    const res = await fetch(src)
    if (!res.ok) return null
    const blob = await res.blob()
    const bitmap = await createImageBitmap(blob)
    // Re-encode through a canvas so any source format (png/webp/avif) becomes a compact JPEG.
    const scale = Math.min(1, 1400 / bitmap.width)
    const canvas = document.createElement("canvas")
    canvas.width = Math.round(bitmap.width * scale)
    canvas.height = Math.round(bitmap.height * scale)
    const ctx = canvas.getContext("2d")
    if (!ctx) return null
    ctx.fillStyle = "#ffffff"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    ctx.drawImage(bitmap, 0, 0, canvas.width, canvas.height)
    return { data: canvas.toDataURL("image/jpeg", 0.82), w: canvas.width, h: canvas.height }
  } catch {
    return null
  }
}

// The built-in Helvetica only covers WinAnsi; swap characters it can't draw.
const pdfText = (t: string) =>
  t
    .replace(/\s*→\s*/g, " to ")
    .replace(/[\u{1F300}-\u{1FAFF}\u{2600}-\u{27BF}]/gu, "")
    .replace(/[^\x00-\xFF\u2013\u2014\u2018\u2019\u201C\u201D\u2022\u2026\u20AC]/g, "")

function cleanDoc(doc: ItineraryDoc): ItineraryDoc {
  const c = (v: unknown): unknown =>
    typeof v === "string" ? pdfText(v) : Array.isArray(v) ? v.map(c) : v && typeof v === "object" ? Object.fromEntries(Object.entries(v).map(([k, x]) => [k, k === "heroImage" || k === "filename" ? x : c(x)])) : v
  return c(doc) as ItineraryDoc
}

export async function downloadItineraryPdf(input: ItineraryDoc) {
  const doc = cleanDoc(input)
  const { jsPDF } = await import("jspdf")
  const pdf = new jsPDF({ unit: "mm", format: "a4" })
  const W = pdf.internal.pageSize.getWidth()
  const H = pdf.internal.pageSize.getHeight()
  const M = 16
  const contentW = W - M * 2
  const footerH = 16
  let y = 0

  const [logo, hero] = await Promise.all([
    toDataUrl(site.logo),
    doc.heroImage ? toDataUrl(doc.heroImage) : Promise.resolve(null),
  ])

  const setColor = (c: readonly number[]) => pdf.setTextColor(c[0], c[1], c[2])
  const fill = (c: readonly number[]) => pdf.setFillColor(c[0], c[1], c[2])
  const draw = (c: readonly number[]) => pdf.setDrawColor(c[0], c[1], c[2])

  const ensure = (needed: number) => {
    if (y + needed > H - footerH - 6) {
      pdf.addPage()
      y = M + 4
    }
  }

  const paragraph = (text: string, size = 10, color: readonly number[] = C.ink, indent = 0, lineH = 5) => {
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(size)
    setColor(color)
    const lines = pdf.splitTextToSize(text, contentW - indent) as string[]
    for (const line of lines) {
      ensure(lineH)
      pdf.text(line, M + indent, y)
      y += lineH
    }
  }

  const heading = (text: string) => {
    ensure(16)
    y += 4
    pdf.setFont("helvetica", "bold")
    pdf.setFontSize(13)
    setColor(C.bark)
    pdf.text(text, M, y)
    y += 2.5
    fill(C.ember)
    pdf.rect(M, y, 14, 0.9, "F")
    y += 6
  }

  const bullets = (items: string[], mark: string, color: readonly number[]) => {
    for (const item of items) {
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10)
      const lines = pdf.splitTextToSize(item, contentW - 7) as string[]
      ensure(lines.length * 5 + 1)
      pdf.setFont("helvetica", "bold")
      setColor(color)
      pdf.text(mark, M + 1, y)
      pdf.setFont("helvetica", "normal")
      setColor(C.ink)
      lines.forEach((l, i) => pdf.text(l, M + 7, y + i * 5))
      y += lines.length * 5 + 1
    }
  }

  // ── Cover band ─────────────────────────────────────────
  const bandH = hero ? 92 : 58
  fill(C.barkDeep)
  pdf.rect(0, 0, W, bandH, "F")
  if (hero) {
    const ratio = hero.h / hero.w
    const imgH = Math.max(bandH, W * ratio)
    pdf.addImage(hero.data, "JPEG", 0, (bandH - imgH) / 2, W, imgH)
    // Darken the photo so white text stays legible (GState opacity).
    const GState = (pdf as unknown as { GState: new (o: { opacity: number }) => unknown }).GState
    pdf.setGState(new GState({ opacity: 0.62 }) as never)
    fill(C.barkDeep)
    pdf.rect(0, 0, W, bandH, "F")
    pdf.setGState(new GState({ opacity: 1 }) as never)
    // Clear anything that overflowed the band.
    pdf.setFillColor(255, 255, 255)
    pdf.rect(0, bandH, W, H - bandH, "F")
  }
  if (logo) pdf.addImage(logo.data, "JPEG", M, 10, 18, 18)
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(11)
  pdf.setTextColor(255, 255, 255)
  pdf.text(site.name.toUpperCase(), M + 22, 17.5)
  pdf.setFont("helvetica", "normal")
  pdf.setFontSize(8.5)
  setColor(C.sun)
  pdf.text(pdfText(site.tagline), M + 22, 22.5)

  pdf.setFontSize(22)
  const titleLines = (pdf.splitTextToSize(doc.title, contentW) as string[]).slice(0, 2)
  pdf.setFontSize(10.5)
  const subLines = doc.subtitle ? (pdf.splitTextToSize(doc.subtitle, contentW) as string[]).slice(0, 2) : []
  let ty = bandH - 7 - subLines.length * 5 - (subLines.length ? 2 : 0) - (titleLines.length - 1) * 9
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(8.5)
  setColor(C.sun)
  pdf.text(doc.eyebrow.toUpperCase(), M, ty - 9)
  pdf.setFontSize(22)
  pdf.setTextColor(255, 255, 255)
  pdf.text(titleLines, M, ty, { lineHeightFactor: 1.15 })
  ty += (titleLines.length - 1) * 9 + 7
  if (subLines.length) {
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(10.5)
    pdf.setTextColor(255, 236, 200)
    pdf.text(subLines, M, ty, { lineHeightFactor: 1.35 })
  }
  y = bandH + 10

  // ── Meta chips ─────────────────────────────────────────
  if (doc.meta?.length) {
    const cols = Math.min(doc.meta.length, 4)
    const cw = contentW / cols
    const rows = Math.ceil(doc.meta.length / cols)
    const rowH = 18
    fill(C.sand)
    pdf.roundedRect(M, y - 5, contentW, rows * rowH + 1, 2, 2, "F")
    doc.meta.forEach((m, i) => {
      const cx = M + 4 + (i % cols) * cw
      const cy = y + Math.floor(i / cols) * rowH
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(7.5)
      setColor(C.muted)
      pdf.text(m.label.toUpperCase(), cx, cy)
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(9.5)
      setColor(C.bark)
      pdf.text((pdf.splitTextToSize(m.value, cw - 6) as string[]).slice(0, 2), cx, cy + 5, { lineHeightFactor: 1.2 })
    })
    y += rows * rowH + 5
  }

  if (doc.overview?.length) {
    heading("Overview")
    doc.overview.forEach((p) => {
      paragraph(p)
      y += 2
    })
  }

  if (doc.highlights?.length) {
    heading("Highlights")
    bullets(doc.highlights, "•", C.ember)
  }

  if (doc.days?.length) {
    heading("Day-by-day itinerary")
    for (const d of doc.days) {
      pdf.setFontSize(10)
      const descLines = pdf.splitTextToSize(d.description, contentW - 14) as string[]
      const metaLine = [d.altitude, d.time].filter(Boolean).join("   ·   ")
      const blockH = 7 + (metaLine ? 5 : 0) + descLines.length * 4.8 + 4
      ensure(Math.min(blockH, 40))
      fill(C.bark)
      pdf.circle(M + 4, y - 1.4, 4, "F")
      pdf.setFont("helvetica", "bold")
      pdf.setFontSize(9)
      setColor(C.sun)
      pdf.text(String(d.day), M + 4, y + 0.2, { align: "center" })
      pdf.setFontSize(11)
      setColor(C.bark)
      const tl = pdf.splitTextToSize(`Day ${d.day} — ${d.title}`, contentW - 14) as string[]
      pdf.text(tl, M + 12, y)
      y += tl.length * 5 + 0.5
      if (metaLine) {
        pdf.setFont("helvetica", "normal")
        pdf.setFontSize(8.5)
        setColor(C.ember)
        pdf.text(metaLine, M + 12, y)
        y += 5
      }
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10)
      setColor(C.ink)
      for (const l of descLines) {
        ensure(5)
        pdf.text(l, M + 12, y)
        y += 4.8
      }
      draw(C.line)
      pdf.setLineWidth(0.2)
      y += 1.5
      pdf.line(M + 12, y, W - M, y)
      y += 6
    }
  }

  if (doc.pricing?.length) {
    heading("Pricing (USD)")
    for (const p of doc.pricing) {
      ensure(9)
      pdf.setFont("helvetica", "normal")
      pdf.setFontSize(10.5)
      setColor(C.ink)
      pdf.text(p.label, M + 2, y)
      pdf.setFont("helvetica", "bold")
      setColor(C.bark)
      pdf.text(p.value, W - M - 2, y, { align: "right" })
      draw(C.line)
      pdf.setLineWidth(0.2)
      pdf.line(M, y + 3, W - M, y + 3)
      y += 8.5
    }
    if (doc.pricingNote) {
      y += 1
      paragraph(doc.pricingNote, 8.5, C.muted, 0, 4.4)
    }
  }

  if (doc.included?.length) {
    heading("What's included")
    bullets(doc.included, "+", [0, 140, 90])
  }
  if (doc.notIncluded?.length) {
    heading("Not included")
    bullets(doc.notIncluded, "–", [190, 60, 50])
  }
  if (doc.notes?.length) {
    heading("Good to know")
    bullets(doc.notes, "•", C.ember)
  }

  // ── Booking box ────────────────────────────────────────
  ensure(34)
  y += 4
  fill(C.barkDeep)
  pdf.roundedRect(M, y, contentW, 28, 3, 3, "F")
  pdf.setFont("helvetica", "bold")
  pdf.setFontSize(13)
  pdf.setTextColor(255, 255, 255)
  pdf.text("Ready to book or tailor this trip?", M + 7, y + 10)
  pdf.setFont("helvetica", "normal")
  pdf.setFontSize(9.5)
  setColor(C.sun)
  pdf.text(`WhatsApp / Call: ${site.phoneDisplay}     Email: ${site.email}`, M + 7, y + 17)
  pdf.setTextColor(255, 236, 200)
  pdf.text(`${site.address}  ·  ${site.url.replace("https://", "")}`, M + 7, y + 22.5)
  y += 34

  // ── Footer on every page ───────────────────────────────
  const pages = pdf.getNumberOfPages()
  for (let i = 1; i <= pages; i++) {
    pdf.setPage(i)
    draw(C.line)
    pdf.setLineWidth(0.3)
    pdf.line(M, H - footerH + 2, W - M, H - footerH + 2)
    pdf.setFont("helvetica", "normal")
    pdf.setFontSize(7.5)
    setColor(C.muted)
    pdf.text(`${site.name}  ·  ${site.phoneDisplay}  ·  ${site.email}`, M, H - 8)
    pdf.text(`Page ${i} of ${pages}`, W - M, H - 8, { align: "right" })
  }

  pdf.save(doc.filename.endsWith(".pdf") ? doc.filename : `${doc.filename}.pdf`)
}
