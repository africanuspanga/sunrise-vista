"use client"

import { useEffect, useMemo, useState } from "react"
import { ArrowLeft, ArrowRight, Check, Mail, MessageCircle, Minus, Plus, Sparkles } from "lucide-react"
import { DownloadPdfButton } from "@/components/pdf/download-pdf-button"
import { pill } from "@/components/site/pill"
import { kiliRoutes, usd } from "@/lib/data/kilimanjaro"
import {
  buildPlan,
  comfortLevels,
  defaultTrip,
  estimate,
  experiences,
  interests,
  minDays,
  months,
  parks,
  type Experience,
  type TripInput,
} from "@/lib/data/trip-builder"
import type { ItineraryDoc } from "@/lib/pdf/itinerary"
import { site, whatsappLink } from "@/lib/site"
import { cn } from "@/lib/utils"

const steps = ["Experiences", "Dates & group", "Style", "Your details"] as const

const fieldClass =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-base text-ink outline-none transition placeholder:text-muted-ink/70 focus:border-amber focus:ring-2 focus:ring-amber/30 md:text-sm"

function Chip({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={cn(
        "flex min-h-[44px] items-center gap-1.5 rounded-full border px-4 py-2 text-sm transition",
        active ? "border-bark bg-bark text-white" : "border-line bg-white text-ink hover:border-bark/40",
      )}
    >
      {active && <Check className="h-3.5 w-3.5 text-sun" />}
      {children}
    </button>
  )
}

function Stepper({ label, value, min, max, onChange }: { label: string; value: number; min: number; max: number; onChange: (n: number) => void }) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-line bg-white px-4 py-2.5">
      <span className="text-sm font-medium text-ink">{label}</span>
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => onChange(Math.max(min, value - 1))}
          disabled={value <= min}
          aria-label={`Fewer ${label.toLowerCase()}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-bark disabled:opacity-40"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="w-6 text-center font-serif text-xl tabular-nums text-bark" aria-live="polite">
          {value}
        </span>
        <button
          type="button"
          onClick={() => onChange(Math.min(max, value + 1))}
          disabled={value >= max}
          aria-label={`More ${label.toLowerCase()}`}
          className="grid h-10 w-10 place-items-center rounded-full border border-line text-bark disabled:opacity-40"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
    </div>
  )
}

export default function TripBuilderClient() {
  const [trip, setTrip] = useState<TripInput>(defaultTrip)
  const [step, setStep] = useState(0)
  const [touched, setTouched] = useState(false)

  // Allow deep links like /trip-builder/?type=kilimanjaro&route=lemosho
  useEffect(() => {
    const q = new URLSearchParams(window.location.search)
    const type = q.get("type") as Experience | null
    const route = q.get("route")
    if (type && experiences.some((e) => e.id === type)) {
      setTrip((t) => {
        const next = { ...t, experiences: [type] }
        if (route && kiliRoutes.some((r) => r.slug === route)) next.kiliRoute = route
        return { ...next, days: Math.max(next.days, minDays(next)) }
      })
    }
  }, [])

  const set = <K extends keyof TripInput>(key: K, value: TripInput[K]) => setTrip((t) => ({ ...t, [key]: value }))
  const toggle = <K extends "experiences" | "parks" | "interests">(key: K, id: string) =>
    setTrip((t) => {
      const list = t[key] as string[]
      const next = list.includes(id) ? list.filter((x) => x !== id) : [...list, id]
      const updated = { ...t, [key]: next } as TripInput
      return key === "experiences" ? { ...updated, days: Math.max(updated.days, minDays(updated)) } : updated
    })

  const plan = useMemo(() => buildPlan(trip), [trip])
  const price = useMemo(() => estimate(trip), [trip])
  const min = minDays(trip)
  const has = (e: Experience) => trip.experiences.includes(e)
  const route = kiliRoutes.find((r) => r.slug === trip.kiliRoute)
  const comfort = comfortLevels.find((c) => c.id === trip.comfort)!

  const stepValid = [
    trip.experiences.length > 0 && (!has("safari") || trip.parks.length > 0),
    trip.adults >= 1 && trip.days >= 2,
    true,
    trip.name.trim().length > 1 && /\S+@\S+\.\S+/.test(trip.email),
  ]

  const summaryLines = [
    `Experiences: ${trip.experiences.map((e) => experiences.find((x) => x.id === e)?.label).join(", ") || "—"}`,
    has("safari") ? `Parks: ${trip.parks.map((p) => parks.find((x) => x.id === p)?.label).join(", ")}` : "",
    has("kilimanjaro") && route ? `Kilimanjaro: ${route.name} (${route.days} days)` : "",
    `Length: ${trip.days} days · ${trip.startDate ? `Start ${trip.startDate}` : `Month: ${trip.month}`}`,
    `Travellers: ${trip.adults} adult${trip.adults > 1 ? "s" : ""}${trip.children ? `, ${trip.children} child${trip.children > 1 ? "ren" : ""}` : ""}`,
    `Style: ${comfort.label}`,
    trip.interests.length ? `Interests: ${trip.interests.join(", ")}` : "",
    `Indicative budget: ${usd(price.low)} – ${usd(price.high)} per person`,
    trip.notes ? `Notes: ${trip.notes}` : "",
  ].filter(Boolean)

  const contactLines = [
    `Name: ${trip.name}`,
    `Email: ${trip.email}`,
    trip.phone ? `Phone: ${trip.phone}` : "",
    trip.country ? `Country: ${trip.country}` : "",
  ].filter(Boolean)

  const message = `Hi Sunrise Vista! I built a custom trip on your website:\n\n${summaryLines.join("\n")}\n\n${contactLines.join("\n")}\n\nPlease send me a tailored quote.`

  const pdfDoc = (): ItineraryDoc => ({
    filename: `sunrise-vista-custom-trip-${trip.days}-days`,
    eyebrow: "Your custom trip — draft itinerary",
    title: `${trip.days}-Day Tanzania Adventure`,
    subtitle: `Prepared for ${trip.name || "you"} · ${comfort.label} style`,
    heroImage: has("kilimanjaro") ? "/images/kilimanjaro/barranco-camp.jpg" : has("safari") ? "/images/wildlife/lion-pride.jpeg" : "/images/wildlife/african-sunset.jpeg",
    meta: [
      { label: "Duration", value: `${trip.days} days` },
      { label: "Travellers", value: `${trip.adults + trip.children} people` },
      { label: "When", value: trip.startDate || trip.month },
      { label: "Estimate pp", value: `${usd(price.low)}–${usd(price.high)}` },
    ],
    overview: [
      "This draft itinerary was created with the Sunrise Vista trip builder. Our team will refine the routing, lodges and timings around your dates and send a final, fixed quote.",
    ],
    highlights: summaryLines,
    days: plan,
    notes: [
      "Prices shown are indicative per-person estimates in USD and exclude international flights, visas, insurance and tips.",
      "Everything is customisable — swap parks, change lodges or add extra nights.",
    ],
  })

  const next = () => {
    setTouched(true)
    if (!stepValid[step]) return
    setTouched(false)
    setStep((s) => Math.min(steps.length - 1, s + 1))
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }
  const back = () => {
    setStep((s) => Math.max(0, s - 1))
    document.getElementById("builder")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <section id="builder" className="scroll-mt-24 bg-cream pb-20 pt-6 md:pb-28">
      <div className="container mx-auto px-4">
        {/* Progress */}
        <ol className="mx-auto mb-8 grid max-w-3xl grid-cols-4 gap-2" aria-label="Progress">
          {steps.map((s, i) => (
            <li key={s}>
              <button
                type="button"
                onClick={() => i < step && setStep(i)}
                disabled={i > step}
                className="w-full text-left"
                aria-current={i === step ? "step" : undefined}
              >
                <span className={cn("block h-1.5 rounded-full", i <= step ? "bg-ember" : "bg-line")} />
                <span
                  className={cn(
                    "mt-2 block text-[11px] font-semibold uppercase tracking-wider sm:text-xs",
                    i === step ? "text-bark" : "text-muted-ink",
                  )}
                >
                  {i + 1}. <span className={cn(i !== step && "max-sm:hidden")}>{s}</span>
                </span>
              </button>
            </li>
          ))}
        </ol>

        <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
          <div className="min-w-0 rounded-3xl bg-white p-5 shadow-[0_20px_60px_-35px_rgba(85,32,31,0.5)] ring-1 ring-line sm:p-8">
            {step === 0 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-bark md:text-3xl">What would you love to do?</h2>
                  <p className="mt-1 text-sm text-muted-ink">Pick one or combine several.</p>
                  <div className="mt-5 grid grid-cols-2 gap-3">
                    {experiences.map((e) => {
                      const active = has(e.id)
                      return (
                        <button
                          key={e.id}
                          type="button"
                          aria-pressed={active}
                          onClick={() => toggle("experiences", e.id)}
                          className={cn(
                            "group relative isolate flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-2xl p-3 text-left text-white ring-2 transition sm:aspect-[16/10] sm:p-4",
                            active ? "ring-ember" : "ring-transparent",
                          )}
                        >
                          <img src={e.image} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                          <span className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-deep/90 via-bark-deep/30 to-transparent" />
                          <span
                            className={cn(
                              "absolute right-2.5 top-2.5 grid h-7 w-7 place-items-center rounded-full border-2 transition",
                              active ? "border-sun bg-sun text-bark" : "border-white/80 bg-black/20",
                            )}
                          >
                            {active && <Check className="h-4 w-4" />}
                          </span>
                          <span className="font-serif text-base leading-tight sm:text-xl">{e.label}</span>
                          <span className="mt-0.5 text-[11px] text-white/80 sm:text-xs">{e.note}</span>
                        </button>
                      )
                    })}
                  </div>
                  {touched && !trip.experiences.length && (
                    <p className="mt-3 text-sm text-red-700">Choose at least one experience.</p>
                  )}
                </div>

                {has("safari") && (
                  <div>
                    <h3 className="font-serif text-xl text-bark">Which parks interest you?</h3>
                    <p className="mt-1 text-sm text-muted-ink">Northern parks combine easily; southern parks suit a second visit or a quieter trip.</p>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ember">Northern circuit</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {parks.filter((p) => p.circuit === "north").map((p) => (
                        <Chip key={p.id} active={trip.parks.includes(p.id)} onClick={() => toggle("parks", p.id)}>
                          {p.label}
                        </Chip>
                      ))}
                    </div>
                    <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-ember">Southern circuit</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {parks.filter((p) => p.circuit === "south").map((p) => (
                        <Chip key={p.id} active={trip.parks.includes(p.id)} onClick={() => toggle("parks", p.id)}>
                          {p.label}
                        </Chip>
                      ))}
                    </div>
                    {touched && !trip.parks.length && <p className="mt-3 text-sm text-red-700">Choose at least one park.</p>}
                  </div>
                )}

                {has("kilimanjaro") && (
                  <div>
                    <h3 className="font-serif text-xl text-bark">Choose your Kilimanjaro route</h3>
                    <div className="mt-4 grid gap-2 sm:grid-cols-2">
                      {kiliRoutes.map((r) => (
                        <button
                          key={r.slug}
                          type="button"
                          aria-pressed={trip.kiliRoute === r.slug}
                          onClick={() =>
                            setTrip((t) => {
                              const n = { ...t, kiliRoute: r.slug }
                              return { ...n, days: Math.max(n.days, minDays(n)) }
                            })
                          }
                          className={cn(
                            "flex items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left transition",
                            trip.kiliRoute === r.slug ? "border-bark bg-sand-soft" : "border-line bg-white hover:border-bark/40",
                          )}
                        >
                          <span>
                            <span className="block font-semibold text-bark">{r.name}</span>
                            <span className="text-xs text-muted-ink">
                              {r.days} days · {r.difficulty}
                            </span>
                          </span>
                          <span className="text-right text-xs text-muted-ink">
                            from
                            <span className="block font-serif text-base text-bark">{usd(r.pricing[3].price)}</span>
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-bark md:text-3xl">When & how long?</h2>
                  <div className="mt-5 rounded-2xl bg-sand-soft p-5">
                    <div className="flex items-baseline justify-between">
                      <label htmlFor="days" className="text-sm font-medium text-ink">
                        Trip length
                      </label>
                      <span className="font-serif text-3xl text-bark">
                        {trip.days} <span className="text-base">days</span>
                      </span>
                    </div>
                    <input
                      id="days"
                      type="range"
                      min={2}
                      max={24}
                      value={trip.days}
                      onChange={(e) => set("days", Number(e.target.value))}
                      className="mt-4 h-2 w-full cursor-pointer accent-[var(--sv-ember)]"
                    />
                    <div className="mt-1 flex justify-between text-xs text-muted-ink">
                      <span>2</span>
                      <span>24 days</span>
                    </div>
                    {trip.days < min && (
                      <p className="mt-3 rounded-lg bg-white px-3 py-2 text-sm text-bark">
                        Tip: we recommend at least <strong>{min} days</strong> for what you&apos;ve chosen.{" "}
                        <button type="button" onClick={() => set("days", min)} className="font-semibold text-ember underline">
                          Use {min} days
                        </button>
                      </p>
                    )}
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="month" className="mb-1.5 block text-sm font-medium text-ink">
                      Travel month
                    </label>
                    <select id="month" value={trip.month} onChange={(e) => set("month", e.target.value)} className={fieldClass}>
                      {months.map((m) => (
                        <option key={m}>{m}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="start" className="mb-1.5 block text-sm font-medium text-ink">
                      Exact start date <span className="text-muted-ink">(optional)</span>
                    </label>
                    <input
                      id="start"
                      type="date"
                      value={trip.startDate}
                      onChange={(e) => set("startDate", e.target.value)}
                      className={fieldClass}
                    />
                  </div>
                </div>
                <div>
                  <h3 className="mb-3 font-serif text-xl text-bark">Who&apos;s travelling?</h3>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <Stepper label="Adults" value={trip.adults} min={1} max={20} onChange={(n) => set("adults", n)} />
                    <Stepper label="Children" value={trip.children} min={0} max={10} onChange={(n) => set("children", n)} />
                  </div>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-bark md:text-3xl">Your travel style</h2>
                  <div className="mt-5 grid gap-3 sm:grid-cols-3">
                    {comfortLevels.map((c) => (
                      <button
                        key={c.id}
                        type="button"
                        aria-pressed={trip.comfort === c.id}
                        onClick={() => set("comfort", c.id)}
                        className={cn(
                          "rounded-2xl border p-4 text-left transition",
                          trip.comfort === c.id ? "border-bark bg-sand-soft" : "border-line bg-white hover:border-bark/40",
                        )}
                      >
                        <span className="flex items-center justify-between font-serif text-lg text-bark">
                          {c.label}
                          {trip.comfort === c.id && <Check className="h-4 w-4 text-ember" />}
                        </span>
                        <span className="mt-1 block text-xs text-muted-ink">{c.note}</span>
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif text-xl text-bark">Anything special?</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {interests.map((i) => (
                      <Chip key={i} active={trip.interests.includes(i)} onClick={() => toggle("interests", i)}>
                        {i}
                      </Chip>
                    ))}
                  </div>
                </div>
                <div>
                  <label htmlFor="notes" className="mb-1.5 block text-sm font-medium text-ink">
                    Notes for our team <span className="text-muted-ink">(optional)</span>
                  </label>
                  <textarea
                    id="notes"
                    rows={4}
                    value={trip.notes}
                    onChange={(e) => set("notes", e.target.value)}
                    placeholder="Celebrations, dietary needs, must-see animals, budget limits…"
                    className={fieldClass}
                  />
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="space-y-8">
                <div>
                  <h2 className="font-serif text-2xl text-bark md:text-3xl">Where should we send your plan?</h2>
                  <p className="mt-1 text-sm text-muted-ink">We reply within 24 hours with a tailored quote — no obligation.</p>
                  <div className="mt-5 grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-1.5 block text-sm font-medium text-ink">
                        Full name *
                      </label>
                      <input id="name" autoComplete="name" value={trip.name} onChange={(e) => set("name", e.target.value)} className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-1.5 block text-sm font-medium text-ink">
                        Email *
                      </label>
                      <input
                        id="email"
                        type="email"
                        inputMode="email"
                        autoComplete="email"
                        value={trip.email}
                        onChange={(e) => set("email", e.target.value)}
                        className={fieldClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="mb-1.5 block text-sm font-medium text-ink">
                        Phone / WhatsApp
                      </label>
                      <input id="phone" type="tel" inputMode="tel" autoComplete="tel" value={trip.phone} onChange={(e) => set("phone", e.target.value)} className={fieldClass} />
                    </div>
                    <div>
                      <label htmlFor="country" className="mb-1.5 block text-sm font-medium text-ink">
                        Country
                      </label>
                      <input id="country" autoComplete="country-name" value={trip.country} onChange={(e) => set("country", e.target.value)} className={fieldClass} />
                    </div>
                  </div>
                  {touched && !stepValid[3] && (
                    <p className="mt-3 text-sm text-red-700">Please add your name and a valid email address.</p>
                  )}
                </div>

                <div>
                  <h3 className="font-serif text-xl text-bark">Your draft itinerary</h3>
                  <ol className="mt-4 space-y-3">
                    {plan.map((d) => (
                      <li key={d.day} className="flex gap-3">
                        <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-bark text-xs font-semibold text-sun">
                          {d.day}
                        </span>
                        <div className="min-w-0">
                          <p className="font-semibold leading-snug text-bark">{d.title}</p>
                          <p className="text-sm leading-relaxed text-muted-ink">{d.description}</p>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>

                <div className="grid gap-3 sm:grid-cols-2">
                  <a
                    href={stepValid[3] ? whatsappLink(message) : undefined}
                    onClick={(e) => {
                      if (!stepValid[3]) {
                        e.preventDefault()
                        setTouched(true)
                      }
                    }}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(pill.sun, "w-full")}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send via WhatsApp
                  </a>
                  <a
                    href={
                      stepValid[3]
                        ? `mailto:${site.email}?subject=${encodeURIComponent(`Custom trip request — ${trip.name}`)}&body=${encodeURIComponent(message)}`
                        : undefined
                    }
                    onClick={(e) => {
                      if (!stepValid[3]) {
                        e.preventDefault()
                        setTouched(true)
                      }
                    }}
                    className={cn(pill.bark, "w-full")}
                  >
                    <Mail className="h-4 w-4" />
                    Send via Email
                  </a>
                  <DownloadPdfButton doc={pdfDoc} label="Download my itinerary (PDF)" className="w-full sm:col-span-2" />
                </div>
              </div>
            )}

            {/* Nav */}
            <div className="mt-10 flex items-center justify-between gap-3 border-t border-line pt-6">
              <button type="button" onClick={back} disabled={step === 0} className={cn(pill.outlineDark, "px-5 disabled:invisible")}>
                <ArrowLeft className="h-4 w-4" /> Back
              </button>
              {step < steps.length - 1 && (
                <button type="button" onClick={next} className={cn(pill.sun, "px-6")}>
                  Continue <ArrowRight className="h-4 w-4" />
                </button>
              )}
            </div>
          </div>

          {/* Summary */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-3xl bg-bark-deep text-white shadow-[0_30px_60px_-30px_rgba(43,15,14,0.7)]">
              <div className="p-6">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-sun">
                  <Sparkles className="h-4 w-4" /> Your trip so far
                </p>
                <p className="mt-3 font-serif text-3xl">
                  {trip.days} days · {trip.adults + trip.children} traveller{trip.adults + trip.children > 1 ? "s" : ""}
                </p>
                <ul className="mt-4 space-y-2 text-sm text-white/80">
                  {summaryLines.filter((l) => !l.startsWith("Indicative") && !l.startsWith("Notes")).map((l) => (
                    <li key={l} className="flex gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-sun" />
                      <span className="min-w-0 break-words">{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="border-t border-white/10 bg-white/5 p-6">
                <p className="text-xs uppercase tracking-wider text-white/60">Indicative price per person</p>
                <p className="mt-1 font-serif text-3xl text-sun">
                  {usd(price.low)} – {usd(price.high)}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-white/60">
                  Estimate only, excluding international flights. Your final quote depends on season and lodge availability.
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  )
}
