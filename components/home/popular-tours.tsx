"use client"

import { useState } from "react"
import Link from "next/link"
import { SectionHeading } from "@/components/site/section-heading"
import { TourCard } from "@/components/site/tour-card"
import { pill } from "@/components/site/pill"
import { featuredTours } from "@/lib/data/home"
import { allTours, tourCategories, tourInCategory, type TourCategory } from "@/lib/data/tours"
import { cn } from "@/lib/utils"

export function PopularTours() {
  const [category, setCategory] = useState<TourCategory>("all")

  return (
    <section className="bg-cream py-20 md:py-28">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our most loved"
          title="Popular Safaris & Tours"
          subtitle="Handpicked experiences showcasing the best of Tanzania's wildlife, landscapes, and culture"
        />

        <div className="no-scrollbar -mx-4 mt-8 flex gap-2 overflow-x-auto px-4 md:justify-center" role="tablist">
          {tourCategories.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={category === c.id}
              onClick={() => setCategory(c.id)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                category === c.id
                  ? "border-bark bg-bark text-white"
                  : "border-line bg-white text-ink hover:border-bark/40",
              )}
            >
              {c.id === "all" ? "Featured" : c.label}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {category === "all"
            ? featuredTours.map((t) => <TourCard key={t.title} {...t} />)
            : allTours
                .filter((t) => tourInCategory(t, category))
                .slice(0, 6)
                .map((t) => <TourCard key={t.title} {...t} />)}
        </div>

        <div className="mt-12 text-center">
          <Link href="/tours" className={pill.sun}>
            View All Safaris
          </Link>
        </div>
      </div>
    </section>
  )
}
