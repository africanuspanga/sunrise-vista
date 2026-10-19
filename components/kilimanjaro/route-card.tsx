import Link from "next/link"
import { ArrowRight, Clock, Gauge, Tent } from "lucide-react"
import { type KiliRoute } from "@/lib/data/kilimanjaro"
import { pill } from "@/components/site/pill"
import { cn } from "@/lib/utils"

export function KiliRouteCard({ route, className }: { route: KiliRoute; className?: string }) {
  return (
    <article
      className={cn(
        "group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-20px_rgba(85,32,31,0.35)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(85,32,31,0.45)]",
        className,
      )}
    >
      <Link href={`/kilimanjaro/${route.slug}`} className="relative block aspect-[16/10] overflow-hidden">
        <img
          src={route.cardImage}
          alt={`${route.name} on Mount Kilimanjaro`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-semibold text-bark">
          {route.days} Days
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">{route.nickname}</p>
        <h3 className="mt-1.5 font-serif text-2xl leading-snug text-bark">
          <Link href={`/kilimanjaro/${route.slug}`}>{route.name}</Link>
        </h3>
        <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1.5 text-sm text-muted-ink">
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-ember" />
            {route.days}D / {route.days - 1}N
          </span>
          <span className="flex items-center gap-1.5">
            <Gauge className="h-4 w-4 text-ember" />
            {route.difficulty}
          </span>
          <span className="flex items-center gap-1.5">
            <Tent className="h-4 w-4 text-ember" />
            {route.accommodation}
          </span>
        </div>
        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-ink">{route.summary}</p>
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-ink">Price</p>
            <p className="font-serif text-lg text-bark">On request</p>
          </div>
          <Link href={`/kilimanjaro/${route.slug}`} className={`${pill.sun} px-5 py-2.5`}>
            View Route
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  )
}
