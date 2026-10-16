"use client"

import { useCallback, useEffect, useState } from "react"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Compass, Map, Sunrise } from "lucide-react"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { heroSlides } from "@/lib/data/home"
import { cn } from "@/lib/utils"

const trust = [
  { Icon: Sunrise, label: "Private, tailor-made itineraries" },
  { Icon: Compass, label: "Expert local Tanzanian guides" },
  { Icon: Map, label: "Safari & Zanzibar specialists" },
]

export function Hero() {
  const [index, setIndex] = useState(0)
  const go = useCallback((dir: number) => setIndex((i) => (i + dir + heroSlides.length) % heroSlides.length), [])

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    const id = setInterval(() => go(1), 7000)
    return () => clearInterval(id)
  }, [go, index])

  return (
    <section className="relative isolate edge-clip bg-bark-deep">
      <div className="absolute inset-0 -z-20 overflow-hidden">
        {heroSlides.map((slide, i) => (
          <img
            key={slide.image}
            src={slide.image}
            alt={i === index ? slide.alt : ""}
            aria-hidden={i !== index}
            fetchPriority={i === 0 ? "high" : "low"}
            className={cn(
              "absolute inset-0 h-full w-full object-cover transition-[opacity,transform] duration-[1600ms] ease-out",
              i === index ? "scale-100 opacity-100" : "scale-105 opacity-0",
            )}
          />
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark-deep/90 via-bark-deep/55 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-1/2 bg-gradient-to-t from-bark-deep/80 to-transparent" />

      <div className="container mx-auto flex min-h-[640px] flex-col px-4 pb-20 pt-20 md:min-h-[calc(100svh-108px)] md:pb-24 md:pt-32">
        <div className="my-auto max-w-2xl">
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.25em] text-sun">
            <span className="h-px w-12 bg-ember" />
            Tanzania safaris, sunrise to sunset
          </p>
          <h1 className="font-serif text-5xl leading-[1.02] text-white md:text-7xl">
            Wake Up to the Wild Heart of <span className="italic text-sun">Tanzania</span>
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/85">
            Experience unforgettable safaris across the Serengeti, Zanzibar, and beyond — tailor-made by local experts
            who know every track.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="/contact" className={pill.sun}>
              Plan Your Safari
            </Link>
            <Link href="/tours" className={pill.outlineLight}>
              Explore Tours
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-white/15 pt-6 md:flex-row md:items-center md:justify-between">
          <ul className="grid gap-4 text-sm text-white/90 sm:grid-cols-3 md:gap-10">
            {trust.map(({ Icon, label }) => (
              <li key={label} className="flex items-center gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-white/10 text-sun ring-1 ring-white/20">
                  <Icon className="h-4 w-4" />
                </span>
                {label}
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4">
            <div className="flex">
              {heroSlides.map((s, i) => (
                <button
                  key={s.image}
                  type="button"
                  onClick={() => setIndex(i)}
                  aria-label={`Show slide ${i + 1}`}
                  aria-current={i === index}
                  className="grid h-11 min-w-[28px] place-items-center px-1"
                >
                  <span className={cn("h-2 rounded-full transition-all", i === index ? "w-7 bg-sun" : "w-2 bg-white/50")} />
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous slide"
              className="grid h-10 w-10 place-items-center rounded-full border border-white/40 text-white hover:bg-white hover:text-bark"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next slide"
              className="grid h-10 w-10 place-items-center rounded-full bg-sun text-bark hover:bg-amber"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      <TornEdge className="text-cream" />
    </section>
  )
}
