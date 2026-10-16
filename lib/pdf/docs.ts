// Builders that turn site data into printable itinerary documents.
import type { ItineraryDoc } from "./itinerary"
import { type KiliRoute, usd } from "@/lib/data/kilimanjaro"
import { type Tour, tourDays, tourPrice } from "@/lib/data/tours"

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")

export function kiliRouteDoc(r: KiliRoute): ItineraryDoc {
  return {
    filename: `sunrise-vista-kilimanjaro-${r.slug}-${r.days}-days`,
    eyebrow: "Kilimanjaro trekking itinerary",
    title: `${r.name} · ${r.days} Days`,
    subtitle: `${r.nickname} — ${r.summary}`,
    heroImage: r.heroImage,
    meta: [
      { label: "Duration", value: `${r.days} days / ${r.days - 1} nights` },
      { label: "Difficulty", value: r.difficulty },
      { label: "Accommodation", value: r.accommodation },
      { label: "From", value: `${usd(r.pricing[r.pricing.length - 1].price)} pp` },
    ],
    overview: r.overview,
    days: r.itinerary,
    pricing: r.pricing.map((p, i) => ({ label: p.pax, value: i === 0 ? usd(p.price) : `${usd(p.price)} per person` })),
    pricingNote: "Prices are per person in USD and include park fees. Private departures any day of the year.",
    included: r.included,
    notIncluded: r.notIncluded,
    notes: [
      "Most able-bodied people aged 10+ can climb with preparation — we recommend at least one month of physical training.",
      "Bring waterproof gear, especially in the rainy seasons (April–May and November).",
      "Pre-climb briefing and gear check are held in Moshi the evening before you start.",
    ],
  }
}

export function tourDoc(t: Tour): ItineraryDoc {
  const [lead, ...rest] = t.title.split(" | ")
  const name = rest.length ? rest.join(" · ") : t.title
  const days = tourDays(t)
  return {
    filename: `sunrise-vista-${slugify(t.title)}`,
    eyebrow: "Safari itinerary",
    title: name,
    subtitle: `${lead} · ${t.location}`,
    heroImage: t.image,
    meta: [
      { label: "Duration", value: rest.length ? lead : `${days} day${days > 1 ? "s" : ""}` },
      { label: "Region", value: t.location },
      { label: "Price from", value: `${tourPrice(t)} pp` },
      { label: "Departures", value: "Private, daily" },
    ],
    overview: [t.description],
    highlights: t.highlights,
    notes: [
      "Every itinerary can be tailored — add days, change lodges or combine with Kilimanjaro or Zanzibar.",
      "Final pricing depends on season, group size and accommodation level — full inclusions are confirmed in your quote.",
      "A detailed day-by-day plan is shared when you enquire via WhatsApp or email.",
    ],
  }
}
