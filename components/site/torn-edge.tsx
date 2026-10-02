import { cn } from "@/lib/utils"

// Deterministic "torn paper" silhouette so server and client render identical markup.
function tornPath(seed: number, width = 1440, height = 32) {
  let s = seed
  const rand = () => {
    s = (s * 9301 + 49297) % 233280
    return s / 233280
  }
  const points: string[] = []
  for (let x = 0; x <= width; x += 12 + Math.round(rand() * 22)) {
    const y = 6 + rand() * (height - 14) + (rand() > 0.85 ? 4 : 0)
    points.push(`${x},${y.toFixed(1)}`)
  }
  points.push(`${width},${(height / 2).toFixed(1)}`)
  return `M0,${height} L0,${height / 2} L${points.join(" L")} L${width},${height} Z`
}

const paths = [tornPath(7), tornPath(23), tornPath(91)]

type TornEdgeProps = {
  /** Which edge of the parent section this sits on. */
  side?: "top" | "bottom"
  /** Text color class = fill color, e.g. "text-cream". Should match the neighbouring section. */
  className?: string
  variant?: 0 | 1 | 2
}

/** Absolutely positioned torn-paper edge. Parent needs `relative`. */
export function TornEdge({ side = "bottom", className, variant = 0 }: TornEdgeProps) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1440 32"
      preserveAspectRatio="none"
      className={cn(
        "pointer-events-none absolute inset-x-0 z-10 h-5 w-full md:h-8",
        side === "bottom" ? "-bottom-[2px]" : "-top-[2px] rotate-180",
        className,
      )}
    >
      <path d={paths[variant]} fill="currentColor" />
    </svg>
  )
}
