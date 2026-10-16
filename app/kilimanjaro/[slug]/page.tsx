import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Check, Clock, Gauge, MessageCircle, Mountain, Route, Tent, Users, X } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { KiliRouteCard } from "@/components/kilimanjaro/route-card"
import { DownloadPdfButton } from "@/components/pdf/download-pdf-button"
import { kiliRoute, kiliRoutes, usd } from "@/lib/data/kilimanjaro"
import { kiliRouteDoc } from "@/lib/pdf/docs"
import { bookingLink, site } from "@/lib/site"

type Props = { params: { slug: string } }

export const dynamicParams = false

export function generateStaticParams() {
  return kiliRoutes.map((r) => ({ slug: r.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const r = kiliRoute(params.slug)
  if (!r) return {}
  const title = `${r.name} (${r.days} Days) - ${r.nickname}`
  return {
    title,
    description: `Climb Kilimanjaro via the ${r.name}: ${r.summary} Day-by-day itinerary, prices from ${usd(r.pricing[3].price)} per person, and a downloadable PDF.`,
    alternates: { canonical: `/kilimanjaro/${r.slug}` },
    openGraph: {
      title: `${title} | ${site.name}`,
      description: r.summary,
      url: `${site.url}/kilimanjaro/${r.slug}`,
      siteName: site.name,
      type: "website",
      images: [{ url: r.heroImage }],
    },
  }
}

export default function KiliRoutePage({ params }: Props) {
  const r = kiliRoute(params.slug)
  if (!r) notFound()

  const doc = kiliRouteDoc(r)
  const others = kiliRoutes.filter((o) => o.slug !== r.slug).slice(0, 3)
  const book = bookingLink(`${r.name} (${r.days} days)`, "Kilimanjaro climb")
  const facts = [
    { Icon: Clock, label: "Duration", value: `${r.days} days / ${r.days - 1} nights` },
    { Icon: Gauge, label: "Difficulty", value: r.difficulty },
    { Icon: Tent, label: "Sleeping", value: r.accommodation },
    { Icon: Mountain, label: "Summit", value: "Uhuru Peak 5,895m" },
  ]

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${r.name} — ${r.days} Day Kilimanjaro Climb`,
    description: r.summary,
    touristType: "Trekkers",
    provider: { "@type": "TravelAgency", name: site.name, url: site.url, telephone: site.phoneHref },
    offers: {
      "@type": "Offer",
      price: r.pricing[3].price,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
    },
    itinerary: {
      "@type": "ItemList",
      itemListElement: r.itinerary.map((d) => ({ "@type": "ListItem", position: d.day, name: d.title })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <PageHero
        crumb={r.name}
        eyebrow={`Kilimanjaro · ${r.nickname}`}
        title={`${r.name} · ${r.days} Days`}
        subtitle={r.summary}
        image={r.heroImage}
        imageAlt={`${r.name} on Mount Kilimanjaro`}
      >
        <a href={book} target="_blank" rel="noopener noreferrer" className={pill.sun}>
          Book This Climb
        </a>
        <DownloadPdfButton doc={doc} variant="outlineLight" label="Download PDF" />
      </PageHero>

      {/* Quick facts + price */}
      <section className="bg-cream pt-2">
        <div className="container mx-auto px-4">
          <Link href="/kilimanjaro" className="inline-flex items-center gap-1.5 text-sm text-muted-ink hover:text-ember">
            <ArrowLeft className="h-4 w-4" /> All Kilimanjaro routes
          </Link>
          <dl className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {facts.map(({ Icon, label, value }) => (
              <div key={label} className="flex items-center gap-3 rounded-2xl bg-white p-4 ring-1 ring-line">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-bark text-sun">
                  <Icon className="h-4 w-4" />
                </span>
                <div className="min-w-0">
                  <dt className="text-xs text-muted-ink">{label}</dt>
                  <dd className="text-sm font-semibold leading-snug text-bark">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <section className="bg-cream py-14 md:py-20">
        <div className="container mx-auto grid gap-10 px-4 lg:grid-cols-[1fr_360px] lg:gap-14">
          {/* Main column */}
          <div className="min-w-0">
            <SectionHeading align="left" eyebrow="Overview" title="About the route" />
            {r.overview.map((p) => (
              <p key={p.slice(0, 24)} className="mt-5 leading-relaxed text-ink">
                {p}
              </p>
            ))}
            <p className="mt-5 rounded-xl bg-sand-soft px-4 py-3 text-sm text-bark">
              <span className="font-semibold">Best for:</span> {r.bestFor}
            </p>

            <div className="mt-14 flex flex-wrap items-end justify-between gap-4">
              <SectionHeading align="left" eyebrow="Day by day" title="Itinerary" />
              <DownloadPdfButton doc={doc} label="Download PDF" className="max-sm:w-full" />
            </div>

            <ol className="relative mt-8 space-y-6 before:absolute before:bottom-6 before:left-5 before:top-6 before:w-px before:bg-line md:before:left-6">
              {r.itinerary.map((d) => (
                <li key={d.day} className="relative pl-14 md:pl-16">
                  <span className="absolute left-0 top-0 grid h-10 w-10 place-items-center rounded-full bg-bark font-serif text-base text-sun ring-4 ring-cream md:h-12 md:w-12 md:text-lg">
                    {d.day}
                  </span>
                  <article className="overflow-hidden rounded-2xl bg-white ring-1 ring-line">
                    {d.image && (
                      <img
                        src={d.image}
                        alt={d.title}
                        loading="lazy"
                        className="aspect-[16/8] w-full object-cover"
                      />
                    )}
                    <div className="p-5 md:p-6">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-ember">Day {d.day}</p>
                      <h3 className="mt-1 font-serif text-xl leading-snug text-bark md:text-2xl">{d.title}</h3>
                      {(d.altitude || d.time || d.distance) && (
                        <div className="mt-3 flex flex-wrap gap-2 text-xs">
                          {d.altitude && (
                            <span className="flex items-center gap-1 rounded-full bg-sand-soft px-2.5 py-1 text-bark">
                              <Mountain className="h-3.5 w-3.5" /> {d.altitude}
                            </span>
                          )}
                          {d.distance && (
                            <span className="flex items-center gap-1 rounded-full bg-sand-soft px-2.5 py-1 text-bark">
                              <Route className="h-3.5 w-3.5" /> {d.distance}
                            </span>
                          )}
                          {d.time && (
                            <span className="flex items-center gap-1 rounded-full bg-sand-soft px-2.5 py-1 text-bark">
                              <Clock className="h-3.5 w-3.5" /> {d.time}
                            </span>
                          )}
                        </div>
                      )}
                      <p className="mt-3 text-sm leading-relaxed text-muted-ink md:text-base">{d.description}</p>
                    </div>
                  </article>
                </li>
              ))}
            </ol>

            {r.mapImage && (
              <div className="mt-14">
                <SectionHeading align="left" eyebrow="Route map" title={`${r.name} map`} />
                <img
                  src={r.mapImage}
                  alt={`${r.name} map`}
                  loading="lazy"
                  className="mt-6 w-full rounded-2xl bg-white object-contain ring-1 ring-line"
                />
              </div>
            )}

            <div className="mt-14 grid gap-5 md:grid-cols-2">
              <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <h3 className="flex items-center gap-2 font-serif text-xl text-bark">
                  <Check className="h-5 w-5 text-emerald-600" /> Included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {r.included.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-ink">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-white p-6 ring-1 ring-line">
                <h3 className="flex items-center gap-2 font-serif text-xl text-bark">
                  <X className="h-5 w-5 text-red-600" /> Not included
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {r.notIncluded.map((i) => (
                    <li key={i} className="flex gap-2.5 text-sm text-ink">
                      <X className="mt-0.5 h-4 w-4 shrink-0 text-red-600" />
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-5 rounded-2xl border border-amber/40 bg-sand-soft p-6">
              <h3 className="font-serif text-xl text-bark">Health & preparation</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink">
                Most able-bodied people aged 10+ can hike Kilimanjaro, but preparation and care are essential. We
                recommend at least one month of physical training and waterproof equipment for the rainy season. Your
                guides check your health twice daily on the mountain.
              </p>
            </div>
          </div>

          {/* Sticky pricing sidebar */}
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_50px_-25px_rgba(85,32,31,0.5)] ring-1 ring-line">
              <div className="bg-bark p-6 text-white">
                <p className="text-xs uppercase tracking-[0.2em] text-sun">Group pricing</p>
                <p className="mt-1 font-serif text-2xl">{r.name}</p>
                <p className="text-sm text-white/75">
                  {r.days} days / {r.days - 1} nights
                </p>
              </div>
              <ul className="divide-y divide-line px-6">
                {r.pricing.map((p, i) => (
                  <li key={p.pax} className="flex items-center justify-between gap-3 py-3.5">
                    <span className="flex items-center gap-2 text-sm text-ink">
                      <Users className="h-4 w-4 text-ember" />
                      {p.pax}
                    </span>
                    <span className="text-right">
                      <span className="font-serif text-xl text-bark">{usd(p.price)}</span>
                      {i > 0 && <span className="block text-[11px] text-muted-ink">per person</span>}
                    </span>
                  </li>
                ))}
              </ul>
              <div className="space-y-3 p-6 pt-3">
                <a href={book} target="_blank" rel="noopener noreferrer" className={`${pill.sun} w-full`}>
                  <MessageCircle className="h-4 w-4" />
                  Book on WhatsApp
                </a>
                <DownloadPdfButton doc={doc} className="w-full" />
                <p className="text-center text-xs text-muted-ink">
                  Or call <a href={`tel:${site.phoneHref}`} className="font-semibold text-bark">{site.phoneDisplay}</a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* Other routes */}
      <section className="relative bg-sand-soft py-20 md:py-24">
        <TornEdge side="top" className="text-cream" variant={2} />
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Compare" title="Other Kilimanjaro routes" />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((o) => (
              <KiliRouteCard key={o.slug} route={o} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title={`Ready to climb the ${r.name}?`}
        text="Private departures any day of the year. Add a safari or Zanzibar beach break after your summit and we'll plan it all."
        whatsappMessage={`Hi Sunrise Vista! I'd like to book the ${r.name} (${r.days} days). My dates are:`}
        secondary={{ href: "/trip-builder", label: "Build a Custom Trip" }}
      />
    </>
  )
}
