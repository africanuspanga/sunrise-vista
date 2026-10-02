import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { pill } from "@/components/site/pill"
import { site, whatsappLink } from "@/lib/site"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export const metadata: Metadata = {
  title: "Zanzibar Tours & Beach Holidays",
  description:
    "Discover Zanzibar's pristine beaches, Stone Town heritage, and spice tours. Book your perfect island getaway with Sunrise Vista Safaris - Prison Island, Jozani Forest, and sunset dhow cruises.",
  alternates: { canonical: "/zanzibar" },
  openGraph: {
    title: "Zanzibar Tours & Beach Holidays | Sunrise Vista Safaris",
    url: `${site.url}/zanzibar`,
    siteName: site.name,
    type: "website",
  },
}

const tours = [
  {
    name: "Prison Island",
    text: "Visit the historic Prison Island and meet the giant Aldabra tortoises. Enjoy snorkeling in crystal clear waters and learn about the island's fascinating history.",
    image: `${BLOB}/dd.jpg-BPXiP5AYHBLL2qysabuk8ZiLN3mTI0.jpeg`,
    alt: "Aerial view of Prison Island with crystal clear turquoise waters",
  },
  {
    name: "Jozani Forest",
    text: "Explore Zanzibar's indigenous forest and encounter the rare Red Colobus monkeys. Walk through mangrove boardwalks and discover unique flora and fauna.",
    image: `${BLOB}/zanzibar-jozani-forest-tour-spice-farm-tour-with-lunch-3828448.jpg-BIOipcznnC9IQ9ao2fY3vclGlNIKgA.jpeg`,
    alt: "Tourists walking through lush Jozani Forest with twisted tree branches",
  },
  {
    name: "Sunset Dhow Cruise",
    text: "Sail on a traditional dhow boat while watching the spectacular Zanzibar sunset. Enjoy refreshments and the gentle ocean breeze on this romantic cruise.",
    image: `${BLOB}/Screenshot%202025-08-21%20at%2002.50.59-BKqyiKzIBNGjNr2xR6qRRD2d2iUSq4.png`,
    alt: "Traditional dhow sailboat silhouetted against beautiful orange sunset",
  },
  {
    name: "Stone Town",
    text: "Explore the UNESCO World Heritage site of Stone Town. Discover the spice markets, historic buildings, and learn about Zanzibar's rich cultural heritage.",
    image: `${BLOB}/istockphoto-488046711-612x612.jpg-WN0cFDYaSi3GD6DIEX36gWwgytV620.jpeg`,
    alt: "Historic Stone Town street with traditional Zanzibari architecture and colorful doors",
  },
  {
    name: "Nungwi",
    text: "Relax on the pristine white sand beaches of Nungwi. Enjoy swimming, snorkeling, and watching traditional dhow boats being built by local craftsmen.",
    image: `${BLOB}/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png`,
    alt: "Pristine white sand beach at Nungwi with turquoise waters and palm trees",
  },
  {
    name: "Spice Tour",
    text: 'Discover why Zanzibar is called the "Spice Island." Visit spice plantations and learn about cardamom, cinnamon, nutmeg, and other exotic spices.',
    image: `${BLOB}/istockphoto-525612597-612x612.jpg-hQTzXyLKA74M2g7lwPLzV8athjhm5U.jpeg`,
    alt: "Colorful array of exotic spices and herbs in traditional bowls",
  },
]

export default function ZanzibarPage() {
  return (
    <>
      <PageHero
        crumb="Zanzibar"
        eyebrow="The Spice Island"
        title="Zanzibar"
        subtitle="Discover the spice island's pristine beaches and rich cultural heritage"
        image={`${BLOB}/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png`}
        imageAlt="Beautiful Zanzibar beach with turquoise waters and white sand"
      >
        <a
          href={whatsappLink("Hi Sunrise Vista! I'd like to add Zanzibar to my trip.")}
          target="_blank"
          rel="noopener noreferrer"
          className={pill.sun}
        >
          Book Your Zanzibar Adventure
        </a>
      </PageHero>

      <section className="bg-cream py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Island experiences"
            title="Zanzibar Tours"
            subtitle="The perfect way to end your safari — mix culture, ocean and pure relaxation."
          />
          <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {tours.map((t) => (
              <article
                key={t.name}
                className="group overflow-hidden rounded-2xl bg-white shadow-[0_10px_40px_-22px_rgba(85,32,31,0.45)] ring-1 ring-line"
              >
                <div className="overflow-hidden">
                  <img
                    src={t.image}
                    alt={t.alt}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-bark">{t.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-ink">{t.text}</p>
                  <a
                    href={whatsappLink(`Hi Sunrise Vista! I'm interested in the Zanzibar ${t.name} experience.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex text-sm font-semibold text-ember hover:text-bark"
                  >
                    Enquire about this tour →
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Experience the Magic of Zanzibar"
        text="From pristine beaches to rich cultural heritage, Zanzibar offers unforgettable experiences."
        whatsappMessage="Hi Sunrise Vista! I'd like to add Zanzibar to my trip."
        secondary={{ href: "/tours", label: "See Safari & Beach Tours" }}
      />
    </>
  )
}
