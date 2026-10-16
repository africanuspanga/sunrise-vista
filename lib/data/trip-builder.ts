// Options and planning logic for the custom trip builder.
import { kiliRoutes } from "./kilimanjaro"

export type Experience = "safari" | "kilimanjaro" | "zanzibar" | "culture"
export type Comfort = "budget" | "midrange" | "luxury"

export const experiences: { id: Experience; label: string; note: string; image: string }[] = [
  { id: "safari", label: "Wildlife Safari", note: "Big Five, Great Migration", image: "/images/wildlife/lion-pride.jpeg" },
  { id: "kilimanjaro", label: "Kilimanjaro Climb", note: "Summit Africa's highest peak", image: "/images/kilimanjaro/kilimanjaro-uhuru-peak.jpg" },
  { id: "zanzibar", label: "Zanzibar Beach", note: "White sand & Stone Town", image: "/images/accommodations/zanzibar-bay-resort.webp" },
  { id: "culture", label: "Culture & Villages", note: "Maasai, coffee farms, markets", image: "/images/about-safari.jpeg" },
]

export type Park = { id: string; label: string; circuit: "north" | "south"; nights: number; blurb: string }

export const parks: Park[] = [
  { id: "serengeti", label: "Serengeti", circuit: "north", nights: 2, blurb: "Full-day game drives across the endless plains in search of big cats and the Great Migration." },
  { id: "ngorongoro", label: "Ngorongoro Crater", circuit: "north", nights: 1, blurb: "Descend 600m into the crater floor — one of the best places in Africa to see black rhino." },
  { id: "tarangire", label: "Tarangire", circuit: "north", nights: 1, blurb: "Giant baobabs and some of the largest elephant herds in Tanzania." },
  { id: "manyara", label: "Lake Manyara", circuit: "north", nights: 1, blurb: "Groundwater forest, flamingo-lined shores and famous tree-climbing lions." },
  { id: "natron", label: "Lake Natron", circuit: "north", nights: 1, blurb: "Otherworldly soda lake, flamingos and waterfall walks beneath Ol Doinyo Lengai." },
  { id: "arusha", label: "Arusha National Park", circuit: "north", nights: 1, blurb: "Walking safari, canoeing and colobus monkeys in the shadow of Mount Meru." },
  { id: "nyerere", label: "Nyerere (Selous)", circuit: "south", nights: 2, blurb: "Boat safaris on the Rufiji River and wild dog country in Africa's largest reserve." },
  { id: "ruaha", label: "Ruaha", circuit: "south", nights: 2, blurb: "Remote, untouched wilderness with huge lion prides and baobab-studded valleys." },
  { id: "mikumi", label: "Mikumi", circuit: "south", nights: 1, blurb: "Open floodplains teeming with zebra, giraffe, buffalo and lions." },
]

export const comfortLevels: { id: Comfort; label: string; note: string; safariPerDay: number; beachPerNight: number }[] = [
  { id: "budget", label: "Budget", note: "Comfortable camps & lodges", safariPerDay: 240, beachPerNight: 110 },
  { id: "midrange", label: "Mid-range", note: "Quality lodges & tented camps", safariPerDay: 340, beachPerNight: 190 },
  { id: "luxury", label: "Luxury", note: "Top lodges, private touches", safariPerDay: 620, beachPerNight: 420 },
]

export const interests = [
  "Big Five",
  "Great Migration",
  "Photography",
  "Bird watching",
  "Hot-air balloon",
  "Walking safari",
  "Honeymoon",
  "Family friendly",
  "Snorkelling & diving",
  "Spice & Stone Town tour",
  "Maasai village visit",
  "Coffee farm tour",
]

export const months = [
  "Flexible",
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
]

export type TripInput = {
  experiences: Experience[]
  parks: string[]
  kiliRoute: string
  days: number
  month: string
  startDate: string
  adults: number
  children: number
  comfort: Comfort
  interests: string[]
  notes: string
  name: string
  email: string
  phone: string
  country: string
}

export const defaultTrip: TripInput = {
  experiences: ["safari"],
  parks: ["serengeti", "ngorongoro", "tarangire"],
  kiliRoute: "machame",
  days: 8,
  month: "Flexible",
  startDate: "",
  adults: 2,
  children: 0,
  comfort: "midrange",
  interests: [],
  notes: "",
  name: "",
  email: "",
  phone: "",
  country: "",
}

export type PlanDay = { day: number; title: string; description: string }

/** Minimum sensible trip length for the chosen experiences. */
export function minDays(t: TripInput) {
  let d = 2 // arrival + departure
  if (t.experiences.includes("kilimanjaro")) d += kiliRoutes.find((r) => r.slug === t.kiliRoute)?.days ?? 7
  if (t.experiences.includes("safari")) d += Math.max(2, Math.min(t.parks.length, 3))
  if (t.experiences.includes("zanzibar")) d += 3
  if (t.experiences.includes("culture")) d += 1
  return d
}

/** Draft day-by-day plan the team refines into a final itinerary. */
export function buildPlan(t: TripInput): PlanDay[] {
  const out: { title: string; description: string }[] = []
  const has = (e: Experience) => t.experiences.includes(e)
  const route = kiliRoutes.find((r) => r.slug === t.kiliRoute)
  const total = Math.max(t.days, 2)

  const beachOnly = has("zanzibar") && !has("safari") && !has("kilimanjaro")

  out.push(
    beachOnly
      ? {
          title: "Arrival in Zanzibar",
          description:
            "Karibu Zanzibar! Meet-and-greet at Abeid Amani Karume Airport and private transfer to your beach hotel to unwind.",
        }
      : {
          title: "Arrival in Arusha",
          description:
            "Welcome to Tanzania! Meet-and-greet at Kilimanjaro International Airport and private transfer to your hotel in Arusha for a briefing and a relaxed first night.",
        },
  )

  if (has("kilimanjaro") && route) {
    route.itinerary.forEach((d) => out.push({ title: `Kilimanjaro — ${d.title}`, description: d.description }))
  }

  let beachDays = has("zanzibar") ? (has("safari") || has("kilimanjaro") ? Math.max(3, Math.round(total * 0.3)) : total - 2) : 0
  const cultureDays = has("culture") ? 1 : 0
  let safariDays = has("safari") ? Math.max(0, total - out.length - beachDays - cultureDays - 1) : 0
  // If the trip is short, take time from the beach first so the safari keeps at least two days.
  if (has("safari") && safariDays < 2 && beachDays > 2) {
    const take = Math.min(2 - safariDays, beachDays - 2)
    safariDays += take
    beachDays -= take
  }

  if (cultureDays) {
    out.push({
      title: "Culture day — Maasai village & coffee farm",
      description:
        "Visit a Maasai boma to learn about traditions, then tour a family coffee farm on the slopes of Mount Meru, from bean to cup.",
    })
  }

  if (safariDays > 0) {
    const chosen = parks.filter((p) => t.parks.includes(p.id))
    const list = chosen.length ? chosen : parks.filter((p) => ["tarangire", "serengeti", "ngorongoro"].includes(p.id))
    // Spread the safari days over the parks, giving the Serengeti / southern giants extra days first.
    const alloc = list.map(() => 1)
    let remaining = safariDays - list.length
    const order = [...list.keys()].sort((a, b) => list[b].nights - list[a].nights)
    let i = 0
    while (remaining > 0 && order.length) {
      alloc[order[i % order.length]]++
      remaining--
      i++
    }
    let used = 0
    list.forEach((p, idx) => {
      for (let n = 0; n < alloc[idx] && used < safariDays; n++, used++) {
        out.push({
          title: n === 0 ? `Safari — ${p.label}` : `Safari — ${p.label} (day ${n + 1})`,
          description: n === 0 ? p.blurb : `Another full day exploring ${p.label} with picnic lunch and sunset game drive.`,
        })
      }
    })
  }

  if (beachDays > 0) {
    for (let n = 0; n < beachDays; n++) {
      out.push(
        n === 0 && !beachOnly
          ? {
              title: "Fly to Zanzibar",
              description:
                "Short scenic flight to Zanzibar and transfer to your beach hotel. Afternoon at leisure on the white sand.",
            }
          : n === (beachOnly ? 0 : 1)
            ? {
                title: "Zanzibar — Stone Town & spice tour",
                description:
                  "Guided walk through UNESCO-listed Stone Town's alleys and markets, then a fragrant tour of a spice farm.",
              }
            : {
                title: "Zanzibar — beach day",
                description: "Free day to swim, snorkel at Mnemba, take a dhow sunset cruise or simply relax.",
              },
      )
    }
  }

  // Pad short plans with flexible days so the total matches what the traveller chose.
  while (out.length < total - 1) {
    out.push({
      title: "Flexible day",
      description: "A free day to rest or add an activity — our team will suggest the best option for your interests.",
    })
  }
  out.push({
    title: "Departure",
    description: "Breakfast and transfer to the airport for your onward flight, with memories to last a lifetime. Kwaheri!",
  })

  return out.map((d, i) => ({ day: i + 1, ...d }))
}

/** Indicative per-person price range in USD. */
export function estimate(t: TripInput) {
  const comfort = comfortLevels.find((c) => c.id === t.comfort) ?? comfortLevels[1]
  const plan = buildPlan(t)
  const travellers = Math.max(1, t.adults + t.children)
  let pp = 0

  if (t.experiences.includes("kilimanjaro")) {
    const route = kiliRoutes.find((r) => r.slug === t.kiliRoute)
    if (route) {
      const tier = route.pricing[Math.min(travellers, 4) - 1]
      pp += tier.price
    }
  }
  const safariDays = plan.filter((d) => d.title.startsWith("Safari") || d.title.startsWith("Culture")).length
  const beachDays = plan.filter((d) => d.title.startsWith("Zanzibar") || d.title === "Fly to Zanzibar").length
  // Private vehicle costs are shared, so solo travellers pay more per day.
  const groupFactor = travellers === 1 ? 1.5 : travellers === 2 ? 1 : travellers <= 4 ? 0.88 : 0.8
  pp += safariDays * comfort.safariPerDay * groupFactor
  pp += beachDays * comfort.beachPerNight
  const flies = t.experiences.includes("zanzibar") && (t.experiences.includes("safari") || t.experiences.includes("kilimanjaro"))
  pp += flies ? 180 : 0 // domestic flight to Zanzibar
  pp += 120 // arrival hotel, transfers

  const round = (n: number) => Math.round(n / 50) * 50
  return { low: round(pp * 0.92), high: round(pp * 1.12), travellers }
}
