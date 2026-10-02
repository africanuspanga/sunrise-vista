import { SectionHeading } from "@/components/site/section-heading"
import { REVIEWS_ARE_SAMPLES, reviews } from "@/lib/data/home"
import { cn } from "@/lib/utils"

type Review = (typeof reviews)[number]

function RatingDots() {
  return (
    <div className="flex gap-1" aria-label="Rated 5 out of 5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className="h-3.5 w-3.5 rounded-full bg-review ring-2 ring-review/25" />
      ))}
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  const initials = review.name
    .split(" ")
    .map((p) => p[0])
    .join("")
  return (
    <figure className="rounded-2xl bg-white p-6 shadow-[0_10px_30px_-22px_rgba(85,32,31,0.5)] ring-1 ring-line">
      <RatingDots />
      <blockquote className="mt-4">
        <p className="font-semibold text-bark">{review.title}</p>
        <p className="mt-2 text-sm leading-relaxed text-muted-ink">“{review.text}”</p>
      </blockquote>
      <figcaption className="mt-5 flex items-center justify-between gap-3 border-t border-line pt-4">
        <div className="flex items-center gap-3">
          <span className="sun-gradient grid h-10 w-10 place-items-center rounded-full text-sm font-semibold text-bark">
            {initials}
          </span>
          <span className="text-sm">
            <span className="block font-semibold text-ink">{review.name}</span>
            <span className="text-xs text-muted-ink">{review.from}</span>
          </span>
        </div>
        <span className="rounded-full bg-sand-soft px-2.5 py-1 text-[11px] text-bark">{review.trip}</span>
      </figcaption>
    </figure>
  )
}

function Column({ items, className, slow }: { items: Review[]; className?: string; slow?: boolean }) {
  return (
    <div className={cn("h-[620px] overflow-hidden", className)}>
      <div className={cn("flex flex-col", slow ? "animate-marquee-up-slow" : "animate-marquee-up")}>
        {[...items, ...items].map((r, i) => (
          <div key={i} aria-hidden={i >= items.length} className="pb-5">
            <ReviewCard review={r} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function Testimonials() {
  const cols = [0, 1, 2].map((c) => reviews.filter((_, i) => i % 3 === c))
  return (
    <section className="relative bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Guests Say"
          subtitle="Stories from travellers who explored Tanzania with Sunrise Vista Safaris."
        />
        {REVIEWS_ARE_SAMPLES && (
          <p className="mx-auto mt-4 w-fit rounded-full border border-dashed border-ember/60 px-3 py-1 text-xs text-ember">
            Sample reviews — replace with real guest reviews before launch
          </p>
        )}
        <div className="marquee-pause fade-y mt-12 grid gap-5 md:grid-cols-3">
          <Column items={reviews} className="md:hidden" />
          <Column items={cols[0]} className="hidden md:block" />
          <Column items={cols[1]} className="hidden md:block" slow />
          <Column items={cols[2]} className="hidden md:block" />
        </div>
      </div>
    </section>
  )
}
