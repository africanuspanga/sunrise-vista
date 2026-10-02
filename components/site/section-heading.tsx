import { cn } from "@/lib/utils"

type SectionHeadingProps = {
  eyebrow: string
  title: React.ReactNode
  subtitle?: React.ReactNode
  align?: "center" | "left"
  tone?: "dark" | "light"
  className?: string
  as?: "h1" | "h2"
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className,
  as: Tag = "h2",
}: SectionHeadingProps) {
  const center = align === "center"
  const light = tone === "light"
  return (
    <div className={cn(center ? "mx-auto max-w-2xl text-center" : "max-w-2xl", className)}>
      <p
        className={cn(
          "mb-3 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em]",
          center && "justify-center",
          light ? "text-sun" : "text-ember",
        )}
      >
        {center && <span className={cn("h-px w-10", light ? "bg-sun/70" : "bg-bark/40")} />}
        {eyebrow}
        <span className={cn("h-px w-10", light ? "bg-sun/70" : "bg-bark/40")} />
      </p>
      <Tag
        className={cn(
          "font-serif text-3xl leading-tight md:text-[2.75rem]",
          light ? "text-white" : "text-bark",
        )}
      >
        {title}
      </Tag>
      {subtitle && (
        <p className={cn("mt-4 text-base leading-relaxed md:text-lg", light ? "text-white/85" : "text-muted-ink")}>
          {subtitle}
        </p>
      )}
    </div>
  )
}
