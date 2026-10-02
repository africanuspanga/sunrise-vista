import Link from "next/link"
import type { Metadata } from "next"
import { Award, Heart, MapPin, Users } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { SunRings } from "@/components/site/sun-rings"
import { CtaBand } from "@/components/site/cta-band"
import { pill } from "@/components/site/pill"
import { site } from "@/lib/site"

export const metadata: Metadata = {
  title: "About Us - Your Trusted Tanzania Safari Partner",
  description:
    "Learn about Sunrise Vista Safaris, your trusted partner for authentic Tanzanian adventures. Based in Arusha with expert guides, we specialize in responsible tourism and wildlife conservation.",
  keywords:
    "about Sunrise Vista Safaris, Tanzania safari company, Arusha safari guides, responsible tourism Tanzania, wildlife conservation",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Sunrise Vista Safaris - Your Trusted Tanzania Safari Partner",
    description:
      "Learn about Sunrise Vista Safaris, your trusted partner for authentic Tanzanian adventures with expert guides and responsible tourism practices.",
    url: `${site.url}/about`,
    siteName: site.name,
    type: "website",
  },
}

const values = [
  {
    Icon: Heart,
    title: "Our Mission",
    text: "To create unforgettable safari experiences while supporting local communities and wildlife conservation efforts across Tanzania.",
  },
  {
    Icon: Award,
    title: "Our Vision",
    text: "To be Tanzania's leading safari company, known for exceptional service, authentic experiences, and positive impact on wildlife and communities.",
  },
]

const reasons = [
  { Icon: Users, title: "Expert Guides", text: "Professional, knowledgeable guides with years of experience" },
  { Icon: MapPin, title: "Local Knowledge", text: "Deep understanding of Tanzania's parks, culture, and wildlife" },
  { Icon: Award, title: "Personalized Service", text: "Tailor-made itineraries designed around your interests" },
  { Icon: Heart, title: "Responsible Tourism", text: "Supporting conservation and local communities" },
]

export default function AboutPage() {
  return (
    <>
      <PageHero
        crumb="About Us"
        eyebrow="About us"
        title="About Sunrise Vista Safaris"
        subtitle="Your trusted partner for authentic Tanzanian adventures"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-458681357-612x612.jpg-ZO4bE4Lo71RYSgbVsOKG8WwZszoKkv.jpeg"
        imageAlt="Guests on a guided walking safari"
      />

      {/* Story */}
      <section className="overflow-x-clip bg-cream py-20 md:py-28">
        <div className="container mx-auto grid items-center gap-14 px-4 lg:grid-cols-[1fr_460px]">
          <div>
            <SectionHeading align="left" eyebrow="Our story" title="Born at first light in Arusha" />
            <div className="mt-8 space-y-5 text-lg leading-relaxed text-ink">
              <p>
                Sunrise Vista Safaris was founded with a passion for showcasing Tanzania&apos;s incredible wildlife,
                landscapes, and culture. Based in Arusha – the gateway to Tanzania&apos;s national parks – we design
                personalized tours that go beyond the ordinary.
              </p>
              <p>
                Whether you dream of witnessing the Great Migration, exploring the vast Ngorongoro Crater, or unwinding
                on Zanzibar&apos;s pristine beaches, our team ensures every detail is carefully planned. With
                experienced guides, comfortable vehicles, and local knowledge, we promise a safari experience
                you&apos;ll never forget.
              </p>
              <p>
                Our commitment goes beyond just showing you Tanzania&apos;s natural wonders. We believe in responsible
                tourism that benefits local communities and contributes to wildlife conservation. When you travel with
                us, you&apos;re not just a tourist – you&apos;re part of a larger mission to protect and preserve
                Africa&apos;s incredible heritage for future generations.
              </p>
            </div>
          </div>
          <div className="relative mx-auto aspect-square w-full max-w-[460px]">
            <SunRings className="absolute -inset-5 h-[calc(100%+2.5rem)] w-[calc(100%+2.5rem)]" />
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-697396414-612x612.jpg-Y4Hd02YnoBBrw17MTTnpQa1G4zh124.jpeg"
              alt="Cultural experience with Maasai people"
              className="absolute inset-[9%] h-[82%] w-[82%] rounded-full object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Mission & vision */}
      <section className="bg-cream pb-20 md:pb-28">
        <div className="container mx-auto grid gap-6 px-4 md:grid-cols-2">
          {values.map(({ Icon, title, text }) => (
            <div key={title} className="relative overflow-hidden rounded-3xl bg-bark p-10 text-white">
              <div className="sun-gradient absolute -right-16 -top-16 h-48 w-48 rounded-full opacity-90" />
              <span className="relative grid h-12 w-12 place-items-center rounded-full bg-white/10 text-sun ring-1 ring-white/20">
                <Icon className="h-5 w-5" />
              </span>
              <h2 className="relative mt-6 font-serif text-3xl">{title}</h2>
              <p className="relative mt-3 max-w-md leading-relaxed text-white/85">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why choose us */}
      <section className="bg-cream pb-24">
        <div className="container mx-auto px-4">
          <SectionHeading eyebrow="Why choose us" title="Travel with people who know the land" />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map(({ Icon, title, text }) => (
              <div key={title} className="rounded-2xl bg-white p-7 ring-1 ring-line">
                <span className="grid h-12 w-12 place-items-center rounded-full bg-sand text-ember">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl text-bark">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-ink">{text}</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link href="/contact" className={pill.sun}>
              Start Planning Your Safari
            </Link>
          </div>
        </div>
      </section>

      <CtaBand
        title="Let's plan your Tanzanian adventure"
        text="Share your dream trip with us and our Arusha-based team will craft a safari that's uniquely yours."
        secondary={{ href: "/tours", label: "Browse Safari Tours" }}
      />
    </>
  )
}
