"use client"

import { useMemo, useState } from "react"
import { PageHero } from "@/components/site/page-hero"
import { TourCard } from "@/components/site/tour-card"
import { CtaBand } from "@/components/site/cta-band"
import { allTours, tourCategories, tourInCategory, type TourCategory } from "@/lib/data/tours"
import { cn } from "@/lib/utils"

export default function ToursClient() {
  const [category, setCategory] = useState<TourCategory>("all")
  const tours = useMemo(() => allTours.filter((t) => tourInCategory(t, category)), [category])

  return (
    <>
      <PageHero
        crumb="Tours & Safaris"
        eyebrow="Safari Tours"
        title="Safari Tours Across Tanzania"
        subtitle="Discover some of our most prestigious safari experiences across Tanzania"
        image="/images/wildlife/safari-baobab.jpeg"
        imageAlt="Safari vehicle beside a giant baobab tree"
      />

      <section className="bg-cream py-14 md:py-20">
        <div className="container mx-auto px-4">
          <div className="sticky top-[72px] z-30 -mx-4 bg-cream/95 px-4 py-4 backdrop-blur md:top-[108px]">
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto" role="tablist" aria-label="Filter tours">
              {tourCategories.map((c) => {
                const count = allTours.filter((t) => tourInCategory(t, c.id)).length
                return (
                  <button
                    key={c.id}
                    type="button"
                    role="tab"
                    aria-selected={category === c.id}
                    onClick={() => setCategory(c.id)}
                    className={cn(
                      "flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-sm transition",
                      category === c.id
                        ? "border-bark bg-bark text-white"
                        : "border-line bg-white text-ink hover:border-bark/40",
                    )}
                  >
                    {c.label}
                    <span
                      className={cn(
                        "rounded-full px-1.5 text-xs",
                        category === c.id ? "bg-sun text-bark" : "bg-sand-soft text-muted-ink",
                      )}
                    >
                      {count}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>

          <p className="mb-8 mt-4 text-sm text-muted-ink">
            Showing <span className="font-semibold text-bark">{tours.length}</span> safaris · all prices from, per person
          </p>

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((tour) => (
              <TourCard key={tour.title} {...tour} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Can't find the perfect trip?"
        text="Every safari can be tailored. Tell us your dates, budget and must-sees and we'll design an itinerary around you."
        whatsappMessage="Hi Sunrise Vista! I'd like a tailor-made safari. Here are my dates and ideas:"
      />
    </>
  )
}
