import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { SectionHeading } from "@/components/site/section-heading"
import { CtaBand } from "@/components/site/cta-band"
import { DestinationBlock, type Destination } from "@/components/site/destination-block"
import { site } from "@/lib/site"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export const metadata: Metadata = {
  title: "Northern Circuit Safari Tanzania - Serengeti, Ngorongoro, Tarangire",
  description:
    "Explore Tanzania's famous Northern Circuit with Sunrise Vista Safaris. Visit Serengeti, Ngorongoro Crater, Tarangire, and Lake Manyara National Parks with expert guides and luxury accommodations.",
  keywords:
    "Northern Circuit Tanzania, Serengeti safari, Ngorongoro Crater tour, Tarangire National Park, Lake Manyara safari, Big Five Tanzania, Great Migration safari",
  openGraph: {
    title: "Northern Circuit Safari Tanzania | Serengeti, Ngorongoro, Tarangire",
    description: "Explore Tanzania's famous Northern Circuit with expert guides from Sunrise Vista Safaris.",
    url: `${site.url}/safaris/northern-circuit`,
    siteName: site.name,
    type: "website",
  },
  alternates: {
    canonical: "/safaris/northern-circuit",
  },
}

const parks: Destination[] = [
  {
    name: "Ngorongoro Crater",
    tagline: "Step into the world's largest intact volcanic caldera – a haven for wildlife.",
    paragraphs: [
      'Ngorongoro Crater is often called the "Eighth Wonder of the World." This UNESCO World Heritage Site is home to one of the densest concentrations of wildlife anywhere in Africa. The crater floor is a self-contained ecosystem with grassy plains, acacia forests, and freshwater lakes.',
      "Here you can encounter the legendary Big Five — lion, elephant, buffalo, rhino, and leopard — in a single day. It's also one of the best places to see endangered black rhinos up close. With its dramatic landscapes and abundant wildlife, Ngorongoro offers an unforgettable safari experience.",
    ],
    highlights: [
      "UNESCO World Heritage Site",
      "One of the best places to spot the Big Five",
      "Home to over 25,000 large animals",
      "Scenic views from the crater rim",
    ],
    image: `${BLOB}/istockphoto-912964222-612x612.jpg-5cTa2QWncRam7Ct6NRt5zfI5LnwuTi.jpeg`,
    imageAlt: "Wildlife on the Ngorongoro Crater floor",
    cta: "Plan your Ngorongoro Safari",
  },
  {
    name: "Lake Manyara National Park",
    tagline: "Where forests, lakes, and wildlife meet in harmony.",
    paragraphs: [
      "Lake Manyara is a small but incredibly diverse park, set against the dramatic backdrop of the Great Rift Valley. It's famous for its tree-climbing lions, large elephant herds, and shimmering flocks of flamingos that cover the lake.",
      "The park's landscapes change quickly — from lush groundwater forests to open grasslands and hot springs. This diversity makes it one of Tanzania's most scenic parks, perfect for short but rewarding game drives.",
    ],
    highlights: [
      "Famous tree-climbing lions",
      "Huge elephant herds",
      "Seasonal flamingos on the lake",
      "Birdwatching paradise (400+ species)",
    ],
    image: `${BLOB}/istockphoto-1454110954-612x612.jpg-B8dK4EAay1Cx8GbNl8jDAwoF3z5Hox.jpeg`,
    imageAlt: "Tree-climbing lioness in Lake Manyara National Park",
    cta: "Discover Lake Manyara",
  },
  {
    name: "Tarangire National Park",
    tagline: "A land of giants — elephants and ancient baobabs.",
    paragraphs: [
      "Tarangire is known for its iconic landscapes dotted with massive baobab trees and endless savannahs. The park is home to Tanzania's largest elephant population, with herds of hundreds gathering around the Tarangire River during the dry season.",
      "Predators like lions and leopards are frequently seen here, as well as unique species such as fringe-eared oryx and gerenuk. Tarangire is also a bird lover's paradise, boasting over 500 species.",
    ],
    highlights: [
      "Tanzania's largest elephant herds",
      "Iconic baobab landscapes",
      "Seasonal migration of wildebeest and zebra",
      "Superb birdwatching opportunities",
    ],
    image: `${BLOB}/istockphoto-1215494886-612x612.jpg-SfFg26BOdaKUexxTsH8xP8yfNQmoPk.jpeg`,
    imageAlt: "Elephant herd in Tarangire National Park",
    cta: "Experience Tarangire",
  },
  {
    name: "Lake Natron",
    tagline: "A surreal landscape of fire, salt, and flamingos.",
    paragraphs: [
      "Lake Natron is unlike any other destination in Tanzania. This striking soda lake, fed by mineral-rich hot springs, is the world's most important breeding ground for flamingos.",
      "The lake's otherworldly red and pink hues, caused by algae, create a surreal backdrop against the active volcano Ol Doinyo Lengai. Beyond its wildlife, Natron offers adventure — from hiking waterfalls to exploring Maasai villages.",
    ],
    highlights: [
      "World's main flamingo breeding site",
      "Stunning red/pink alkaline lake",
      "Views of Ol Doinyo Lengai volcano",
      "Unique cultural visits with the Maasai",
    ],
    image: `${BLOB}/istockphoto-105495401-612x612.jpg-O5glKqDUE44v2xV4IGdZ1BZAez92jL.jpeg`,
    imageAlt: "Thousands of flamingos at Lake Natron breeding grounds",
    cta: "Explore Lake Natron",
  },
  {
    name: "Arusha National Park",
    tagline: "Diverse landscapes just minutes from Arusha town.",
    paragraphs: [
      "Arusha National Park may be small, but it packs incredible variety. From the lush forests of Mount Meru's slopes to the tranquil Momella Lakes, it offers a refreshing safari close to the city.",
      "The park is home to giraffes, buffalos, zebras, and colobus monkeys. While lions are absent, leopards and hyenas roam the park. Birdlife here is exceptional, making it a favorite for birdwatchers. Adventurous travelers can even trek Mount Meru, Tanzania's second-highest peak.",
    ],
    highlights: [
      "Close to Arusha town (great for day trips)",
      "Home to Mount Meru",
      "Diverse scenery: forests, lakes, craters",
      "Excellent for giraffes, zebras, and monkeys",
    ],
    image: `${BLOB}/istockphoto-156731319-612x612.jpg-27WZIGCVufWk5sXrM0NfgpcbQOfpMG.jpeg`,
    imageAlt: "Impalas in Arusha National Park",
    cta: "Discover Arusha's hidden gem",
  },
]

export default function NorthernCircuitPage() {
  return (
    <>
      <PageHero
        crumb="Northern Circuit"
        eyebrow="Destinations"
        title="Northern Circuit"
        subtitle="Explore Tanzania's most iconic safari destinations"
        image={`${BLOB}/istockphoto-1141711907-612x612.jpg-QkKbxoOPwSVBYuwxqFjG44svWo2Aqj.jpeg`}
        imageAlt="Elephant family in northern Tanzania savanna"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="The parks"
            title="Five icons of the north"
            subtitle="From the legendary Ngorongoro Crater to the elephant paradise of Tarangire, experience the very best of African wilderness."
          />
          <nav className="mt-8 flex flex-wrap justify-center gap-2" aria-label="Jump to park">
            {parks.map((p) => (
              <a
                key={p.name}
                href={`#${p.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="rounded-full border border-line bg-white px-4 py-2 text-sm text-ink transition hover:border-bark hover:bg-sand-soft"
              >
                {p.name}
              </a>
            ))}
          </nav>
          <div className="mt-16 space-y-24 md:space-y-32">
            {parks.map((p, i) => (
              <DestinationBlock key={p.name} d={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        title="Ready to Explore Tanzania's Northern Circuit?"
        text="Discover the iconic wildlife destinations of northern Tanzania with Sunrise Vista Safaris. From the legendary Ngorongoro Crater to the elephant paradise of Tarangire, experience the very best of African wilderness."
        whatsappMessage="Hi Sunrise Vista! I'd like to start planning a Northern Circuit safari."
        secondary={{ href: "/tours", label: "See Northern Circuit Tours" }}
      />
    </>
  )
}
