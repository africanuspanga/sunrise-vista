"use client"

import { useRef } from "react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

type ScrollRowProps = {
  children: React.ReactNode
  /** Rendered next to the arrows (e.g. a left-aligned heading). */
  header?: React.ReactNode
  arrowsPosition?: "top" | "bottom"
  className?: string
}

/** Horizontally scrolling, snap-aligned row with prev/next arrows. */
export function ScrollRow({ children, header, arrowsPosition = "top", className }: ScrollRowProps) {
  const ref = useRef<HTMLDivElement>(null)

  const scroll = (dir: 1 | -1) => {
    const el = ref.current
    if (!el) return
    el.scrollBy({ left: dir * Math.max(el.clientWidth * 0.8, 280), behavior: "smooth" })
  }

  const arrows = (
    <div className="flex shrink-0 gap-2">
      <button
        type="button"
        onClick={() => scroll(-1)}
        aria-label="Scroll left"
        className="grid h-11 w-11 place-items-center rounded-full border border-bark/20 bg-white text-bark transition hover:border-bark hover:bg-sun"
      >
        <ArrowLeft className="h-4 w-4" />
      </button>
      <button
        type="button"
        onClick={() => scroll(1)}
        aria-label="Scroll right"
        className="grid h-11 w-11 place-items-center rounded-full bg-bark text-white transition hover:bg-ember"
      >
        <ArrowRight className="h-4 w-4" />
      </button>
    </div>
  )

  return (
    <div className={className}>
      {arrowsPosition === "top" && (
        <div className="mb-8 flex items-end justify-between gap-6">
          <div className="min-w-0 flex-1">{header}</div>
          {arrows}
        </div>
      )}
      <div
        ref={ref}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth px-4 pb-6 pt-1"
      >
        {children}
      </div>
      {arrowsPosition === "bottom" && <div className={cn("mt-4 flex justify-center")}>{arrows}</div>}
    </div>
  )
}
