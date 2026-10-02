import type { Metadata } from "next"
import { Binoculars, Camera, Check, Users, Wind } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { site, whatsappLink } from "@/lib/site"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"
const BOOK = whatsappLink("Hi Sunrise Vista! I'd like to book a Serengeti safari. Please send me some options.")

export const metadata: Metadata = {
  title: "Serengeti Safari Tanzania - Great Migration & Big Five",
  description:
    "Experience the legendary Serengeti National Park with Sunrise Vista Safaris. Witness the Great Migration, spot the Big Five, and explore endless plains with expert guides.",
  keywords:
    "Serengeti safari, Great Migration Tanzania, Big Five Serengeti, Serengeti National Park, wildebeest migration, Tanzania wildlife safari, Serengeti tours",
  openGraph: {
    title: "Serengeti Safari Tanzania | Great Migration & Big Five",
    description: "Experience the legendary Serengeti National Park with expert guides from Sunrise Vista Safaris.",
    url: `${site.url}/serengeti`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/serengeti",
  },
}

const reasons = [
  "Witness the Great Migration, one of the world's most dramatic wildlife events",
  "Home to the Big Five: lion, leopard, elephant, buffalo, and rhino",
  "Exceptional predator viewing: lions, cheetahs, and hyenas",
  "UNESCO World Heritage Site",
  "Year-round safari destination with diverse habitats",
]

const experiences = [
  {
    Icon: Binoculars,
    title: "Game Drives",
    text: "Explore the vast plains on morning and evening game drives, perfect for spotting lions, cheetahs, elephants, and giraffes.",
  },
  {
    Icon: Users,
    title: "Great Migration Viewing",
    text: "Depending on the season, witness wildebeest river crossings in the north (July–September) or the calving season in the south (January–March).",
  },
  {
    Icon: Wind,
    title: "Hot Air Balloon Safari",
    text: "Float silently over the plains at sunrise for a breathtaking aerial view of wildlife and landscapes.",
  },
  {
    Icon: Camera,
    title: "Photography Safaris",
    text: "The Serengeti offers some of the best wildlife photography opportunities in the world.",
  },
  {
    Icon: Users,
    title: "Cultural Encounters",
    text: "Visit nearby Maasai communities to learn about their traditions and way of life.",
  },
]

const gallery = [
  { src: `${BLOB}/istockphoto-1358063108-612x612.jpg-jyVZiXZ1J9VWk9RnHAfhNvPrDZrEhH.jpeg`, alt: "Great Migration - wildebeest crossing river in massive herds" },
  { src: `${BLOB}/istockphoto-1136053333-612x612.jpg-xluM7Glmgb123bBZHxyUpOQGvbhZVP.jpeg`, alt: "Mixed wildlife scene with lion, elephant, zebras and other animals" },
  { src: `${BLOB}/istockphoto-1798674930-612x612.jpg-2ZOtVo1btuswc3jDV50nOmTyaD0XM5.jpeg`, alt: "Hot air balloon safari over Serengeti plains at sunrise" },
]

const seasons = [
  {
    months: "January – March",
    text: "Calving season in the southern Serengeti. Thousands of newborn wildebeest and dramatic predator action.",
  },
  { months: "June – September", text: "Famous river crossings at the Mara River in the northern Serengeti." },
  {
    months: "October – December",
    text: "Wildlife spreads across the central Serengeti — excellent for game drives year-round.",
  },
]

export default function SerengetiPage() {
  return (
    <>
      <PageHero
        crumb="Serengeti"
        eyebrow="Serengeti National Park"
        title="Endless plains, the Great Migration & the Big Five"
        image={`${BLOB}/istockphoto-1798674930-612x612.jpg-2ZOtVo1btuswc3jDV50nOmTyaD0XM5.jpeg`}
        imageAlt="Hot air balloon over Serengeti plains with wildebeest migration"
      >
        <a href={BOOK} target="_blank" rel="noopener noreferrer" className={pill.sun}>
          Book Your Serengeti Safari Today
        </a>
      </PageHero>

      {/* Introduction */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto grid gap-14 px-4 lg:grid-cols-[1.2fr_1fr]">
          <div>
            <SectionHeading align="left" eyebrow="Introduction" title={'"Siringet" — the endless plains'} />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
              <p>
                The Serengeti National Park is Tanzania&apos;s most iconic safari destination and one of the Seven
                Natural Wonders of Africa. Covering nearly 15,000 square kilometers, its name comes from the Maasai word
                &ldquo;Siringet,&rdquo; meaning &ldquo;endless plains.&rdquo;
              </p>
              <p>
                The Serengeti is home to Africa&apos;s greatest wildlife spectacle — the Great Migration, where over 1.5
                million wildebeest and hundreds of thousands of zebras and gazelles move in search of fresh grazing.
                Alongside this, the park offers year-round game viewing with an extraordinary density of wildlife.
              </p>
              <p>
                Whether you dream of witnessing lions hunting on the savannah, elephants wandering through acacia
                woodlands, or giraffes silhouetted against a glowing sunset, the Serengeti promises an unforgettable
                experience.
              </p>
            </div>
          </div>
          <div className="self-center rounded-3xl bg-bark p-8 text-white md:p-10">
            <h2 className="font-serif text-2xl">Why Visit Serengeti?</h2>
            <ul className="mt-6 space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3 text-white/90">
                  <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sun text-bark">
                    <Check className="h-3 w-3" />
                  </span>
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="relative bg-sand-soft py-24">
        <TornEdge side="top" className="text-cream" />
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Things to do" title="Safari Experiences in Serengeti" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {experiences.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-7 ring-1 ring-line">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-bark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">{text}</p>
              </div>
            ))}
            <a
              href={BOOK}
              target="_blank"
              rel="noopener noreferrer"
              className="sun-gradient flex flex-col justify-between rounded-2xl p-7 text-bark transition hover:-translate-y-1"
            >
              <span className="font-serif text-2xl">Build your Serengeti itinerary</span>
              <span className="mt-6 text-sm font-semibold">Chat with us on WhatsApp →</span>
            </a>
          </div>
        </div>
        <TornEdge className="text-cream" />
      </section>

      {/* Gallery */}
      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Gallery" title="Experience the Serengeti" />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {gallery.map((g, i) => (
              <img
                key={g.src}
                src={g.src}
                alt={g.alt}
                loading="lazy"
                className={`h-72 w-full rounded-2xl object-cover ${i === 1 ? "md:mt-10" : ""}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Best time */}
      <section className="bg-cream pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="When to go" title="Best Time to Visit" />
          <ol className="mt-12 grid gap-6 md:grid-cols-3">
            {seasons.map((s, i) => (
              <li key={s.months} className="relative rounded-2xl border border-line bg-white p-7">
                <span className="font-serif text-5xl text-sand">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="mt-2 font-serif text-xl text-ember">{s.months}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        title="The Serengeti is not just a safari — it's the ultimate African adventure."
        text="Join Sunrise Vista Safaris for a journey through the heart of the wild."
        whatsappMessage="Hi Sunrise Vista! I'd like to book a Serengeti safari. Please send me some options."
        secondary={{ href: "/tours", label: "See Serengeti Tours" }}
      />
    </>
  )
}
