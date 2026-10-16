import type { Metadata } from "next"
import Link from "next/link"
import { Check, Mountain } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { KiliRouteCard } from "@/components/kilimanjaro/route-card"
import { kiliFacts, kiliFaqs, kiliRoutes, usd } from "@/lib/data/kilimanjaro"
import { site, whatsappLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Kilimanjaro Trekking - Climb Africa's Highest Peak",
  description:
    "Climb Mount Kilimanjaro (5,895m) with Sunrise Vista Safaris. Compare the Machame, Marangu, Lemosho, Rongai, Northern Circuit and Umbwe routes — day-by-day itineraries, group pricing and downloadable PDFs.",
  keywords:
    "Kilimanjaro trekking, climb Kilimanjaro, Machame route, Marangu route, Lemosho route, Rongai route, Northern Circuit, Umbwe route, Uhuru Peak, Kilimanjaro prices",
  alternates: { canonical: "/kilimanjaro" },
  openGraph: {
    title: "Kilimanjaro Trekking | Sunrise Vista Safaris",
    description: "Six routes to the Roof of Africa with expert local guides, from 6 to 9 days.",
    url: `${site.url}/kilimanjaro`,
    siteName: site.name,
    type: "website",
    images: [{ url: "/images/kilimanjaro/uhuru-peak.jpg" }],
  },
}

const prep = [
  "No technical climbing skills needed — it's a high-altitude trek",
  "Most able-bodied people aged 10+ can summit with preparation",
  "We recommend at least 1 month of hiking or cardio training",
  "Longer routes = better acclimatization and higher success",
  "Waterproof gear is essential, especially in rainy seasons",
  "Licensed guides monitor your health daily on the mountain",
]

export default function KilimanjaroPage() {
  const sorted = [...kiliRoutes].sort((a, b) => a.days - b.days)
  return (
    <>
      <PageHero
        crumb="Kilimanjaro Trekking"
        eyebrow="Roof of Africa · 5,895m"
        title="Climb Mount Kilimanjaro"
        subtitle="Six routes to Uhuru Peak, guided by experienced local mountain crews. Choose your path, download the itinerary, and we'll handle the rest."
        image="/images/kilimanjaro/uhuru-peak.jpg"
        imageAlt="Climbers at Uhuru Peak on Mount Kilimanjaro"
      >
        <a href="#routes" className={pill.sun}>
          Compare Routes
        </a>
        <a
          href={whatsappLink("Hi Sunrise Vista! I'd like to climb Kilimanjaro. Which route do you recommend?")}
          target="_blank"
          rel="noopener noreferrer"
          className={pill.outlineLight}
        >
          Ask a Mountain Expert
        </a>
      </PageHero>

      {/* Facts */}
      <section className="bg-cream pt-4">
        <div className="container mx-auto px-4">
          <dl className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
            {kiliFacts.map((f) => (
              <div key={f.label} className="rounded-2xl bg-white p-4 text-center ring-1 ring-line md:p-6">
                <dt className="sr-only">{f.label}</dt>
                <dd className="font-serif text-3xl text-bark md:text-4xl">{f.value}</dd>
                <dd className="mt-1 text-xs text-muted-ink md:text-sm">{f.label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto grid items-center gap-10 px-4 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading align="left" eyebrow="The mountain" title="Reach the Roof of Africa" />
            <p className="mt-6 leading-relaxed text-ink">
              Mount Kilimanjaro stands at 5,895 metres — the highest peak in Africa and the world&apos;s tallest
              free-standing mountain. This dormant volcano is one of the most accessible high-altitude climbs on earth,
              requiring no technical climbing skills.
            </p>
            <p className="mt-4 leading-relaxed text-ink">
              From our base in Arusha we run private climbs on every major route, with carefully paced itineraries,
              quality camping equipment, three hot meals a day and guides who put your safety first.
            </p>
            <ul className="mt-6 grid gap-2.5 sm:grid-cols-2">
              {prep.map((p) => (
                <li key={p} className="flex items-start gap-2.5 text-sm text-ink">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-3 md:gap-4">
            <img
              src="/images/kilimanjaro/barranco-camp.jpg"
              alt="Barranco Camp beneath Kibo"
              loading="lazy"
              className="aspect-[3/4] w-full rounded-2xl object-cover"
            />
            <div className="grid gap-3 md:gap-4">
              <img
                src="/images/kilimanjaro/kilimanjaro-porters-sunrise.jpg"
                alt="Porters on Kilimanjaro at sunrise"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
              <img
                src="/images/kilimanjaro/uhuru-peak-sign.jpg"
                alt="The Uhuru Peak summit sign"
                loading="lazy"
                className="aspect-square w-full rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Routes */}
      <section id="routes" className="relative scroll-mt-24 bg-sand-soft py-20 md:py-28">
        <TornEdge side="top" className="text-cream" variant={1} />
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Choose your route"
            title="Kilimanjaro Routes & Prices"
            subtitle="Each route offers a different experience and difficulty. Every itinerary includes park fees, guides, porters, meals and hotel nights before and after your climb."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
            {sorted.map((r) => (
              <KiliRouteCard key={r.slug} route={r} />
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-14 overflow-hidden rounded-2xl bg-white ring-1 ring-line">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] text-left text-sm">
                <thead className="bg-bark text-white">
                  <tr>
                    <th className="px-4 py-3 font-semibold">Route</th>
                    <th className="px-4 py-3 font-semibold">Days</th>
                    <th className="px-4 py-3 font-semibold">Difficulty</th>
                    <th className="px-4 py-3 font-semibold">Sleeping</th>
                    <th className="px-4 py-3 font-semibold">Solo</th>
                    <th className="px-4 py-3 font-semibold">4+ people</th>
                  </tr>
                </thead>
                <tbody>
                  {sorted.map((r, i) => (
                    <tr key={r.slug} className={i % 2 ? "bg-sand-soft/50" : ""}>
                      <td className="px-4 py-3">
                        <Link href={`/kilimanjaro/${r.slug}`} className="font-semibold text-bark hover:text-ember">
                          {r.name}
                        </Link>
                      </td>
                      <td className="px-4 py-3">{r.days}</td>
                      <td className="px-4 py-3">{r.difficulty}</td>
                      <td className="px-4 py-3">{r.accommodation}</td>
                      <td className="px-4 py-3">{usd(r.pricing[0].price)}</td>
                      <td className="px-4 py-3 font-semibold text-bark">{usd(r.pricing[3].price)} pp</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-3 text-center text-xs text-muted-ink">Swipe the table sideways on mobile · prices per person in USD</p>
        </div>
        <TornEdge className="text-cream" variant={2} />
      </section>

      {/* FAQ */}
      <section className="bg-cream py-20 md:py-24">
        <div className="container mx-auto max-w-4xl px-4">
          <SectionHeading eyebrow="Good to know" title="Kilimanjaro FAQs" />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {kiliFaqs.map((f) => (
              <div key={f.q} className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <h3 className="flex items-start gap-2 font-serif text-lg text-bark">
                  <Mountain className="mt-1 h-4 w-4 shrink-0 text-ember" />
                  {f.q}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">{f.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Not sure which route is right for you?"
        text="Tell us your fitness, dates and budget and we'll recommend the best route — or combine your climb with a safari and Zanzibar."
        whatsappMessage="Hi Sunrise Vista! I'd like help choosing a Kilimanjaro route."
        secondary={{ href: "/trip-builder", label: "Build a Custom Trip" }}
      />
    </>
  )
}
