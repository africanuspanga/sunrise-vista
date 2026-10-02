import { Clock, MapPin, Users } from "lucide-react"
import { bookingLink } from "@/lib/site"
import { tourPrice } from "@/lib/data/tours"
import { pill } from "./pill"

type TourCardProps = {
  title: string
  description: string
  price: string
  image: string
  tag?: string
  days?: string
  group?: string
  location?: string
  highlights?: string[]
}

export function TourCard({ title, description, price, image, tag, days, group, location, highlights }: TourCardProps) {
  // "15 Days | Northern Tanzania & Zanzibar" -> heading "Northern Tanzania & Zanzibar", duration "15 Days"
  const [lead, ...rest] = title.split(" | ")
  const heading = rest.length ? rest.join(" · ") : title
  const duration = days ?? (rest.length ? lead : undefined)

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-20px_rgba(85,32,31,0.35)] ring-1 ring-line transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(85,32,31,0.45)]">
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={image}
          alt={heading}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
        />
        {tag && (
          <span className="absolute left-4 top-4 rounded-full bg-sun px-3 py-1 text-xs font-semibold text-bark">
            {tag}
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-ink">
          {duration && (
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-ember" />
              {duration}
            </span>
          )}
          {group && (
            <span className="flex items-center gap-1.5">
              <Users className="h-4 w-4 text-ember" />
              {group}
            </span>
          )}
          {location && (
            <span className="flex items-center gap-1.5">
              <MapPin className="h-4 w-4 text-ember" />
              {location}
            </span>
          )}
        </div>
        <h3 className="font-serif text-xl leading-snug text-bark">{heading}</h3>
        <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-ink">{description}</p>
        {highlights && highlights.length > 0 && (
          <ul className="mt-4 flex flex-wrap gap-1.5">
            {highlights.slice(0, 4).map((h) => (
              <li key={h} className="rounded-full bg-sand-soft px-2.5 py-1 text-xs text-bark">
                {h}
              </li>
            ))}
            {highlights.length > 4 && (
              <li className="rounded-full px-2 py-1 text-xs text-muted-ink">+{highlights.length - 4} more</li>
            )}
          </ul>
        )}
        <div className="mt-auto flex items-end justify-between gap-4 pt-6">
          <div>
            <p className="text-xs uppercase tracking-wider text-muted-ink">Starting from</p>
            <p className="font-serif text-2xl text-bark">{tourPrice({ price })}</p>
            <p className="text-xs text-muted-ink">per person</p>
          </div>
          <a href={bookingLink(title)} target="_blank" rel="noopener noreferrer" className={`${pill.sun} px-5 py-2.5`}>
            Book Now
          </a>
        </div>
      </div>
    </article>
  )
}
