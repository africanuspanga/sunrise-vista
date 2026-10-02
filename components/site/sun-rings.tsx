import { cn } from "@/lib/utils"

/** Concentric dotted rings in the logo's sunrise colours — echoes the round badge. */
export function SunRings({ className, light = false }: { className?: string; light?: boolean }) {
  const rings = [
    {
      r: 48,
      dash: "0.6 2.6",
      color: light ? "#ffffff" : "var(--sv-bark)",
      width: 1.6,
    },
    { r: 44, dash: "0.01 2.2", color: "var(--sv-ember)", width: 2.2 },
    { r: 40.5, dash: "0.01 2", color: "var(--sv-amber)", width: 2 },
    {
      r: 37.2,
      dash: "0.01 1.8",
      color: light ? "#ffffff" : "var(--sv-sun)",
      width: 1.8,
    },
  ]
  return (
    // Rotate an inner group (not the <svg>) so the spinning box never adds scrollable overflow.
    <svg viewBox="0 0 100 100" aria-hidden className={cn("overflow-hidden", className)}>
      <g className="animate-spin-slow" style={{ transformOrigin: "50px 50px" }}>
        {rings.map((ring) => (
          <circle
            key={ring.r}
            cx="50"
            cy="50"
            r={ring.r}
            fill="none"
            stroke={ring.color}
            strokeWidth={ring.width}
            strokeDasharray={ring.dash}
            strokeLinecap="round"
          />
        ))}
      </g>
    </svg>
  )
}
