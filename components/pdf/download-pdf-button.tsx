"use client"

import { useState } from "react"
import { Download, Loader2 } from "lucide-react"
import type { ItineraryDoc } from "@/lib/pdf/itinerary"
import { pill } from "@/components/site/pill"
import { cn } from "@/lib/utils"

type Props = {
  doc: ItineraryDoc | (() => ItineraryDoc)
  label?: string
  variant?: keyof typeof pill | "icon"
  className?: string
}

export function DownloadPdfButton({ doc, label = "Download Itinerary (PDF)", variant = "outlineDark", className }: Props) {
  const [busy, setBusy] = useState(false)
  const [failed, setFailed] = useState(false)

  async function onClick() {
    setBusy(true)
    setFailed(false)
    try {
      const { downloadItineraryPdf } = await import("@/lib/pdf/itinerary")
      await downloadItineraryPdf(typeof doc === "function" ? doc() : doc)
    } catch (err) {
      console.error("PDF generation failed", err)
      setFailed(true)
    } finally {
      setBusy(false)
    }
  }

  const Icon = busy ? Loader2 : Download

  if (variant === "icon") {
    return (
      <button
        type="button"
        onClick={onClick}
        disabled={busy}
        aria-label={label}
        title={failed ? "Download failed — try again" : label}
        className={cn(
          "grid h-11 w-11 shrink-0 place-items-center rounded-full border border-bark/20 bg-white text-bark transition hover:border-bark hover:bg-sand-soft disabled:opacity-60",
          className,
        )}
      >
        <Icon className={cn("h-4 w-4", busy && "animate-spin")} />
      </button>
    )
  }

  return (
    <button type="button" onClick={onClick} disabled={busy} className={cn(pill[variant], className)}>
      <Icon className={cn("h-4 w-4", busy && "animate-spin")} />
      {busy ? "Preparing PDF…" : failed ? "Try again" : label}
    </button>
  )
}
