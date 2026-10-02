import type { Metadata } from "next"
import { MapPin } from "lucide-react"
import { PageHero } from "@/components/site/page-hero"
import { CtaBand } from "@/components/site/cta-band"
import { pill } from "@/components/site/pill"
import { accommodations } from "@/lib/data/accommodations"
import { bookingLink } from "@/lib/site"

export const metadata: Metadata = {
  title: "Safari Accommodations Tanzania - Luxury Lodges & Camps",
  description:
    "Discover our handpicked safari accommodations across Tanzania. From luxury lodges with stunning views to authentic bush camps and Zanzibar beach resorts. Experience comfort in the heart of African wilderness with Sunrise Vista Safaris.",
  alternates: { canonical: "/accommodations" },
}

export default function AccommodationsPage() {
  return (
    <>
      <PageHero
        crumb="Accommodation"
        eyebrow="Stay in comfort"
        title="Featured Accommodations"
        subtitle="Discover some of our most prestigious safari lodges and beach resorts across Tanzania"
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Karatu-scaled.jpg-4lAWbtqEqu37cpA1PpUbfffe94VVNl.webp"
        imageAlt="Lodge terrace overlooking the Ngorongoro Highlands"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto space-y-20 px-4 md:space-y-28">
          {accommodations.map((a, index) => (
            <article
              key={a.id}
              className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="relative">
                <img
                  src={a.image}
                  alt={a.name}
                  loading={index < 2 ? "eager" : "lazy"}
                  className="aspect-[4/3] w-full rounded-3xl object-cover shadow-[0_30px_60px_-30px_rgba(43,15,14,0.5)]"
                />
                <span className="absolute -bottom-5 left-6 rounded-full bg-sun px-4 py-2 font-serif text-sm text-bark shadow-lg">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm font-medium text-ember">
                  <MapPin className="h-4 w-4" />
                  {a.location}
                </p>
                <h2 className="mt-3 font-serif text-3xl leading-tight text-bark md:text-4xl">{a.name}</h2>
                <p className="mt-5 leading-relaxed text-ink">{a.description}</p>
                <div className="mt-8 border-t border-line pt-6">
                  <a
                    href={bookingLink(a.name, "accommodation")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={pill.sun}
                  >
                    Book Stay
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <CtaBand
        title="Ready to Experience Tanzania in Comfort?"
        text="Let us match you with the perfect accommodation for your safari adventure. From luxury lodges to authentic bush camps and pristine beach resorts, we have the ideal base for your Tanzanian journey."
        whatsappMessage="Hi Sunrise Vista! I'd like to plan my accommodation stay in Tanzania. Please help me choose the perfect lodge or resort."
        secondary={{ href: "/tours", label: "View Safari Tours" }}
      />
    </>
  )
}
