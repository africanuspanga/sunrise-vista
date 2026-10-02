import { Check } from "lucide-react"
import { whatsappLink } from "@/lib/site"
import { pill } from "./pill"
import { cn } from "@/lib/utils"

export type Destination = {
  name: string
  tagline: string
  paragraphs: string[]
  highlights: string[]
  image: string
  imageAlt: string
  cta: string
}

export function DestinationBlock({ d, index }: { d: Destination; index: number }) {
  const reverse = index % 2 === 1
  return (
    <article id={d.name.toLowerCase().replace(/[^a-z]+/g, "-")} className="scroll-mt-32">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <div className={cn("relative", reverse && "lg:order-2")}>
          <img
            src={d.image}
            alt={d.imageAlt}
            loading={index === 0 ? "eager" : "lazy"}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgba(43,15,14,0.5)]"
          />
          <span className="absolute -top-4 left-6 rounded-full bg-bark px-4 py-2 font-serif text-sm text-sun shadow-lg">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div>
          <h2 className="font-serif text-3xl leading-tight text-bark md:text-[2.6rem]">{d.name}</h2>
          <p className="mt-3 border-l-4 border-ember pl-4 font-serif text-lg italic text-ember">{d.tagline}</p>
          <div className="mt-6 space-y-4 leading-relaxed text-ink">
            {d.paragraphs.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
          <h3 className="mt-8 text-xs font-semibold uppercase tracking-[0.2em] text-muted-ink">Highlights</h3>
          <ul className="mt-3 grid gap-2.5 sm:grid-cols-2">
            {d.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2.5 text-sm text-ink">
                <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun text-bark">
                  <Check className="h-3 w-3" />
                </span>
                {h}
              </li>
            ))}
          </ul>
          <a
            href={whatsappLink(`Hi Sunrise Vista! I'd like to include ${d.name} in my safari. Please send me some options.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(pill.sun, "mt-8")}
          >
            {d.cta}
          </a>
        </div>
      </div>
    </article>
  )
}
