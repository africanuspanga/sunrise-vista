import Link from "next/link"
import type { Metadata } from "next"
import { ArrowUpRight, Award, Heart, Leaf, MapPin, Star, Users } from "lucide-react"
import { Hero } from "@/components/home/hero"
import { PopularTours } from "@/components/home/popular-tours"
import { Testimonials } from "@/components/home/testimonials"
import { Faq } from "@/components/home/faq"
import { ScrollRow } from "@/components/site/scroll-row"
import { SectionHeading } from "@/components/site/section-heading"
import { SunRings } from "@/components/site/sun-rings"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { featuredAccommodations } from "@/lib/data/accommodations"
import { bigFive, destinations, experiences, partners } from "@/lib/data/home"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: { absolute: "Sunrise Vista Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar" },
  description:
    "Experience authentic Tanzania safari adventures with Sunrise Vista Safaris. Explore Serengeti, Ngorongoro Crater, Tarangire, and Zanzibar. Expert guides, luxury accommodations, and unforgettable wildlife encounters await.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sunrise Vista Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
    description:
      "Experience authentic Tanzania safari adventures with Sunrise Vista Safaris. Explore Serengeti, Ngorongoro Crater, Tarangire, and Zanzibar.",
    url: site.url,
    siteName: site.name,
    type: "website",
  },
}

const reasons = [
  { Icon: Users, title: "Trusted Guides", text: "Experienced, professional safari guides." },
  { Icon: Star, title: "Tailor-Made Tours", text: "Customized to your interests & budget." },
  { Icon: Award, title: "Memorable Journeys", text: "Focus on comfort, safety, and unique experiences." },
  { Icon: MapPin, title: "Local Expertise", text: "Deep knowledge of Tanzania's parks and culture." },
  { Icon: Heart, title: "Personalized Service", text: "Tailor-made itineraries designed around your interests." },
  { Icon: Leaf, title: "Responsible Tourism", text: "Supporting conservation and local communities." },
]

function ReasonItem({ Icon, title, text, side }: (typeof reasons)[number] & { side: "left" | "right" }) {
  return (
    <div className={`flex items-start gap-4 ${side === "left" ? "lg:flex-row-reverse lg:text-right" : ""}`}>
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-bark text-sun shadow-lg">
        <Icon className="h-5 w-5" />
      </span>
      <div>
        <h3 className="font-serif text-xl text-bark">{title}</h3>
        <p className="mt-1 text-sm text-muted-ink">{text}</p>
      </div>
    </div>
  )
}

export default function HomePage() {
  return (
    <>
      <Hero />

      {/* Destinations */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Explore"
            title="Tanzania's Iconic Destinations"
            subtitle="From the endless plains of the Serengeti to the spice island of Zanzibar — discover where your adventure begins."
          />
          <ScrollRow arrowsPosition="bottom" className="mt-12">
            {destinations.map((d) => (
              <Link
                key={d.name}
                href={d.href}
                className="group relative isolate flex h-[400px] w-[78%] shrink-0 snap-start flex-col justify-end overflow-hidden rounded-2xl p-6 text-white sm:w-[46%] lg:w-[calc(25%-15px)]"
              >
                <img
                  src={d.image}
                  alt={d.name}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-deep/90 via-bark-deep/20 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-bark-deep/55 px-3 py-1 text-xs backdrop-blur">
                  {d.tag}
                </span>
                <p className="max-h-0 overflow-hidden text-sm text-white/85 opacity-0 transition-all duration-500 group-hover:mb-3 group-hover:max-h-28 group-hover:opacity-100">
                  {d.blurb}
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="font-serif text-2xl uppercase tracking-wide">{d.name}</h3>
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-white/50 transition group-hover:border-sun group-hover:bg-sun group-hover:text-bark">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            ))}
          </ScrollRow>
        </div>
      </section>

      {/* Safari experiences */}
      <section className="relative bg-sand-soft py-24 md:py-28">
        <TornEdge side="top" className="text-cream" variant={1} />
        <div className="container mx-auto px-4">
          <ScrollRow
            header={
              <SectionHeading
                align="left"
                eyebrow="Categories"
                title="Safari Experiences"
                subtitle="With a wide variety of journeys available, choose the type of safari that matches your style."
              />
            }
          >
            {experiences.map((e) => (
              <Link key={e.name} href={e.href} className="group w-[200px] shrink-0 snap-start md:w-[230px]">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={e.image}
                    alt={e.name}
                    loading="lazy"
                    className="aspect-[4/5] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                </div>
                <p className="relative z-10 mx-auto -mt-6 w-[85%] rounded-xl bg-white px-3 py-3 text-center text-sm font-semibold text-bark shadow-[0_10px_30px_-15px_rgba(85,32,31,0.5)] transition group-hover:bg-sun">
                  {e.name}
                </p>
              </Link>
            ))}
          </ScrollRow>
        </div>
        <TornEdge className="text-cream" variant={2} />
      </section>

      <PopularTours />

      {/* Why Sunrise Vista */}
      <section className="relative edge-clip bg-gradient-to-b from-cream via-sand-soft to-sand-soft pt-20 md:pt-28">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Why go" title={<>With Sunrise Vista Safaris?</>} />
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_380px_1fr]">
            <div className="space-y-10">
              {reasons.slice(0, 3).map((r) => (
                <ReasonItem key={r.title} {...r} side="left" />
              ))}
            </div>
            <div className="relative mx-auto grid aspect-square w-full max-w-[380px] place-items-center">
              <SunRings className="absolute inset-0 h-full w-full" />
              <div className="relative w-[64%] text-center">
                <p className="text-sm leading-relaxed text-ink">
                  We are your gateway to Tanzania&apos;s incredible wildlife and landscapes.
                </p>
                <Link href="/contact" className={`${pill.sun} mt-5 px-5 py-2.5`}>
                  Plan Your Safari
                </Link>
              </div>
            </div>
            <div className="space-y-10">
              {reasons.slice(3).map((r) => (
                <ReasonItem key={r.title} {...r} side="right" />
              ))}
            </div>
          </div>
        </div>
        <div className="relative mt-10 h-56 md:h-80">
          <img
            src="/images/wildlife/elephants-waterhole.jpeg"
            alt="Elephant herd at a waterhole"
            loading="lazy"
            className="h-full w-full object-cover object-[50%_65%]"
          />
          <div className="absolute inset-x-0 -top-1 h-2/3 bg-gradient-to-b from-sand-soft to-transparent" />
          <TornEdge className="text-cream" />
        </div>
      </section>

      {/* Accommodation */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <ScrollRow
            header={
              <SectionHeading
                align="left"
                eyebrow="Stay in comfort"
                title="Surrounded by the Wild"
                subtitle="From luxury lodges with breathtaking views to authentic bush camps in prime wildlife locations."
              />
            }
          >
            {featuredAccommodations.map((a) => (
              <article
                key={a.name}
                className="group w-[280px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-22px_rgba(85,32,31,0.45)] ring-1 ring-line md:w-[300px]"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={a.image}
                    alt={a.name}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <span className="absolute left-3 top-3 rounded-full bg-bark px-3 py-1 text-xs font-medium text-sun">
                    {a.tag}
                  </span>
                </div>
                <div className="p-5">
                  <p className="flex items-center gap-1.5 text-xs text-muted-ink">
                    <MapPin className="h-3.5 w-3.5 text-ember" />
                    {a.area}
                  </p>
                  <h3 className="mt-2 font-serif text-lg text-bark">{a.name}</h3>
                  <p className="mt-1.5 line-clamp-2 text-sm text-muted-ink">{a.summary}</p>
                </div>
              </article>
            ))}
          </ScrollRow>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link href="/contact" className={pill.sun}>
              Start Planning
            </Link>
            <Link href="/accommodations" className={pill.outlineDark}>
              View All Accommodation
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Our trusted"
            title="Partners & Affiliations"
            subtitle="We operate within Tanzania's protected areas and work alongside the authorities that safeguard them."
          />
        </div>
        <div className="mt-12 grid grid-cols-2 border-y border-dashed border-line md:grid-cols-4">
          {partners.map((p, i) => (
            <div
              key={p.short}
              className={`flex flex-col items-center justify-center gap-1 px-4 py-10 text-center ${i > 0 ? "border-l border-dashed border-line" : ""} ${i === 2 ? "max-md:border-l-0 max-md:border-t" : ""} ${i === 3 ? "max-md:border-t" : ""}`}
            >
              <span className="font-serif text-3xl tracking-wide text-bark/80">{p.short}</span>
              <span className="text-xs text-muted-ink">{p.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* About */}
      <section className="relative edge-clip bg-sand py-24 md:py-32">
        <TornEdge side="top" className="text-cream" variant={2} />
        <div className="container mx-auto grid items-center gap-14 px-4 lg:grid-cols-2">
          <div>
            <SectionHeading align="left" eyebrow="About" title={site.name} />
            <p className="mt-6 border-l-4 border-ember pl-4 font-serif text-xl text-bark">
              Your trusted partner for authentic Tanzanian adventures.
            </p>
            <p className="mt-6 leading-relaxed text-ink">
              At Sunrise Vista Safaris, we specialize in creating tailor-made adventures across Tanzania&apos;s
              world-famous national parks and tropical islands. With years of local expertise, our team ensures every
              journey is safe, authentic, and unforgettable.
            </p>
            <p className="mt-4 leading-relaxed text-ink">
              Based in Arusha – the gateway to Tanzania&apos;s national parks – we design personalized tours that go
              beyond the ordinary.
            </p>
            <Link href="/about" className={`${pill.outlineDark} mt-8`}>
              Learn More About Us
            </Link>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[480px]">
            <SunRings className="absolute inset-0 h-full w-full md:-inset-6 md:h-[calc(100%+3rem)] md:w-[calc(100%+3rem)]" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-697396414-612x612.jpg-Y4Hd02YnoBBrw17MTTnpQa1G4zh124.jpeg"
              alt="Cultural experience with Maasai people"
              loading="lazy"
              className="absolute inset-[9%] h-[82%] w-[82%] rounded-full object-cover shadow-2xl"
            />
            <img
              src={site.logo}
              alt=""
              className="absolute -bottom-2 left-2 h-28 w-28 rounded-full shadow-xl ring-4 ring-sand md:h-32 md:w-32"
            />
          </div>
        </div>
        <TornEdge className="text-cream" />
      </section>

      <Testimonials />

      {/* Big Five */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Wildlife"
            title="Experience Africa's Big Five"
            subtitle="Lion, Leopard, Elephant, Buffalo, and Rhino - witness these magnificent creatures in their natural habitat."
          />
          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-5">
            {bigFive.map((a, i) => (
              <div
                key={a.name}
                className={`group relative isolate flex aspect-[3/4] items-end overflow-hidden rounded-2xl p-4 ${i === 4 ? "col-span-2 aspect-[16/9] md:col-span-1 md:aspect-[3/4]" : ""}`}
              >
                <img
                  src={a.image}
                  alt={a.name}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-deep/85 to-transparent" />
                <h3 className="font-serif text-2xl text-white">{a.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative isolate edge-clip bg-cream pt-6">
        <div className="container relative z-10 mx-auto px-4">
          <h2 className="max-w-xl font-serif text-3xl leading-tight text-bark md:text-5xl">
            Ready to start your Tanzanian adventure?
          </h2>
          <p className="mt-4 text-muted-ink">Tell us your dream safari, and we&apos;ll make it real.</p>
          <Link href="/contact" className={`${pill.sun} mt-6`}>
            Plan Your Safari Today
          </Link>
        </div>
        <div className="relative -mt-10 h-72 md:-mt-24 md:h-[460px]">
          <img
            src="/images/wildlife/safari-zebras.jpeg"
            alt="Safari vehicle among zebras on the plains at golden hour"
            loading="lazy"
            className="h-full w-full object-cover object-[50%_70%]"
          />
          <div className="absolute inset-x-0 -top-1 h-1/2 bg-gradient-to-b from-cream to-transparent" />
          <TornEdge className="text-cream" variant={1} />
        </div>
      </section>

      <Faq />
    </>
  )
}
