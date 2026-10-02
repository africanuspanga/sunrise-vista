import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { DestinationBlock, type Destination } from "@/components/site/destination-block"
import { site } from "@/lib/site"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export const metadata: Metadata = {
  title: "Southern Circuit Safari Tanzania - Mikumi, Ruaha & Nyerere",
  description:
    "Explore Tanzania's hidden safari gems in the Southern Circuit. Discover Mikumi, Ruaha, Nyerere (Selous), and Saadani National Parks with Sunrise Vista Safaris expert guides.",
  keywords:
    "Southern Circuit Tanzania, Mikumi National Park, Ruaha safari, Nyerere National Park, Selous Game Reserve, Saadani National Park, southern Tanzania safari",
  alternates: { canonical: "/safaris/southern-circuit" },
  openGraph: {
    title: "Southern Circuit Safari Tanzania | Mikumi, Ruaha & Nyerere",
    description:
      "Explore Tanzania's hidden safari gems in the Southern Circuit with expert guides from Sunrise Vista Safaris.",
    url: `${site.url}/safaris/southern-circuit`,
    siteName: site.name,
    type: "website",
  },
}

const parks: Destination[] = [
  {
    name: "Mikumi National Park",
    tagline: "An accessible safari gem in southern Tanzania.",
    paragraphs: [
      'Mikumi is often described as a "mini Serengeti," thanks to its wide open plains and rich wildlife. Located just a few hours\' drive from Dar es Salaam, it\'s one of Tanzania\'s most accessible safari destinations.',
      "The park is home to lions, elephants, giraffes, hippos, and large herds of zebra and wildebeest. Its relatively compact size makes game viewing easy and rewarding, especially for first-time safari-goers.",
    ],
    highlights: [
      "Only 4–5 hours from Dar es Salaam",
      "Lions, elephants, giraffes, hippos",
      "Landscapes similar to Serengeti",
      "Great for shorter safari trips",
    ],
    image: `${BLOB}/istockphoto-1035682726-612x612.jpg-QHtxclNms1WNzYB1zhnmuzjNLebbEV.jpeg`,
    imageAlt: "Elephants in Mikumi National Park",
    cta: "Explore Mikumi",
  },
  {
    name: "Nyerere National Park (Selous)",
    tagline: "Africa's wildest and largest game reserve.",
    paragraphs: [
      "Formerly known as Selous, Nyerere National Park is one of Africa's largest protected areas. It's a remote, untouched wilderness offering an authentic safari experience far from the crowds.",
      "The park is famous for boat safaris on the Rufiji River, where you can spot hippos, crocodiles, and elephants coming to drink. It's also home to rare wild dogs and a rich variety of bird species.",
    ],
    highlights: [
      "One of the largest reserves in Africa",
      "Unique boat safaris on Rufiji River",
      "Home to wild dogs",
      "Remote and uncrowded safari experience",
    ],
    image: `${BLOB}/istockphoto-2175769062-612x612.jpg-5hfszIyoNtxO1nF88Kf91f60mdJ4VU.jpeg`,
    imageAlt: "Giraffe and impalas in Nyerere National Park",
    cta: "Discover Nyerere",
  },
  {
    name: "Ruaha National Park",
    tagline: "Tanzania's best-kept safari secret.",
    paragraphs: [
      "Ruaha is Tanzania's largest national park, but also one of its least visited, making it a hidden gem. Its rugged landscapes and remote setting offer a truly wild experience.",
      "Ruaha is known for its predators, especially large prides of lions and impressive populations of leopards and cheetahs. The park is also home to huge elephant herds, kudu, sable antelope, and over 500 bird species.",
    ],
    highlights: [
      "Tanzania's largest national park",
      "Excellent big cat sightings",
      "Remote and uncrowded",
      "Huge elephant populations",
    ],
    image: `${BLOB}/istockphoto-2226152096-612x612.jpg-Cj4weehuOSL2x3SyCjKkTHhdWBVDJh.jpeg`,
    imageAlt: "Hippos in Ruaha National Park",
    cta: "Venture to Ruaha",
  },
  {
    name: "Saadani National Park",
    tagline: "Where the bush meets the beach.",
    paragraphs: [
      "Saadani is Tanzania's only national park located on the Indian Ocean. It's the perfect combination of wildlife and coastal beauty.",
      "Here you can watch elephants roam near the beach, spot hippos in the Wami River, and relax on unspoiled sandy shores. Saadani is an ideal destination for travelers looking to mix safari with beach time.",
    ],
    highlights: [
      "Tanzania's only coastal national park",
      "Wildlife viewing + beach relaxation",
      "Hippos and crocodiles in the Wami River",
      "Elephants and giraffes near the coast",
    ],
    image: `${BLOB}/istockphoto-186308946-612x612.jpg-EdcLO5WREjOe17Gz33KUJw0nY7m8Va.jpeg`,
    imageAlt: "Beach at Saadani National Park",
    cta: "Experience Saadani",
  },
]

export default function SouthernCircuitPage() {
  return (
    <>
      <PageHero
        crumb="Southern Circuit"
        eyebrow="Destinations"
        title="Southern Circuit"
        subtitle="Discover Tanzania's hidden safari gems in the remote south"
        image={`${BLOB}/istockphoto-186308946-612x612.jpg-EdcLO5WREjOe17Gz33KUJw0nY7m8Va.jpeg`}
        imageAlt="Southern Tanzania coastline and bush"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Off the beaten path"
            title="Wild, remote & uncrowded"
            subtitle="From accessible Mikumi to remote Ruaha, experience authentic African wilderness."
          />
          <div className="mt-16 space-y-24 md:space-y-32">
            {parks.map((p, i) => (
              <DestinationBlock key={p.name} d={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Explore Tanzania's Southern Circuit?"
        text="Discover the hidden gems of southern Tanzania with Sunrise Vista Safaris. From accessible Mikumi to remote Ruaha, experience authentic African wilderness."
        whatsappMessage="Hi Sunrise Vista! I'd like to plan a Southern Circuit safari."
        secondary={{ href: "/tours", label: "See Southern Safaris" }}
      />
    </>
  )
}
