import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Serengeti Safari Tanzania | Great Migration & Big Five | Kachiki Safaris",
  description:
    "Experience the legendary Serengeti National Park with Kachiki Safaris. Witness the Great Migration, spot the Big Five, and explore endless plains with expert guides.",
  keywords:
    "Serengeti safari, Great Migration Tanzania, Big Five Serengeti, Serengeti National Park, wildebeest migration, Tanzania wildlife safari, Serengeti tours",
  openGraph: {
    title: "Serengeti Safari Tanzania | Great Migration & Big Five",
    description: "Experience the legendary Serengeti National Park with expert guides from Kachiki Safaris.",
    url: "https://www.kachikisafaris.com/serengeti",
    siteName: "Kachiki Safaris",
    type: "website",
    images: [
      {
        url: "/serengeti-og.jpg",
        width: 1200,
        height: 630,
        alt: "Serengeti Safari - Great Migration and Wildlife",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serengeti Safari Tanzania",
    description: "Experience the legendary Serengeti National Park with expert guides and witness the Great Migration.",
    images: ["/serengeti-twitter.jpg"],
  },
  alternates: {
    canonical: "/serengeti",
  },
}

export default function SerengetiPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1798674930-612x612.jpg-2ZOtVo1btuswc3jDV50nOmTyaD0XM5.jpeg"
            alt="Hot air balloon over Serengeti plains with wildebeest migration"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">Serengeti National Park</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            Endless plains, the Great Migration, and Africa's Big Five.
          </p>
          <Button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] rounded-full px-8 py-3 text-lg">
            Book Your Serengeti Safari Today
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Introduction</h2>
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <p>
                The Serengeti National Park is Tanzania's most iconic safari destination and one of the Seven Natural
                Wonders of Africa. Covering nearly 15,000 square kilometers, its name comes from the Maasai word
                "Siringet," meaning "endless plains."
              </p>
              <p>
                The Serengeti is home to Africa's greatest wildlife spectacle — the Great Migration, where over 1.5
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
        </div>
      </section>

      {/* Why Visit Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Why Visit Serengeti?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Witness the Great Migration, one of the world's most dramatic wildlife events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Home to the Big Five: lion, leopard, elephant, buffalo, and rhino</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Exceptional predator viewing: lions, cheetahs, and hyenas</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-4 text-gray-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>UNESCO World Heritage Site</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                    <span>Year-round safari destination with diverse habitats</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Safari Experiences Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Safari Experiences in Serengeti</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Game Drives</h3>
                <p className="text-gray-700">
                  Explore the vast plains on morning and evening game drives, perfect for spotting lions, cheetahs,
                  elephants, and giraffes.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Great Migration Viewing</h3>
                <p className="text-gray-700">
                  Depending on the season, witness wildebeest river crossings in the north (July–September) or the
                  calving season in the south (January–March).
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Hot Air Balloon Safari</h3>
                <p className="text-gray-700">
                  Float silently over the plains at sunrise for a breathtaking aerial view of wildlife and landscapes.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Photography Safaris</h3>
                <p className="text-gray-700">
                  The Serengeti offers some of the best wildlife photography opportunities in the world.
                </p>
              </div>
              <div className="bg-amber-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-amber-900 mb-4">Cultural Encounters</h3>
                <p className="text-gray-700">
                  Visit nearby Maasai communities to learn about their traditions and way of life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-amber-900 mb-12 text-center">Experience the Serengeti</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1358063108-612x612.jpg-jyVZiXZ1J9VWk9RnHAfhNvPrDZrEhH.jpeg"
                alt="Great Migration - wildebeest crossing river in massive herds"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1136053333-612x612.jpg-xluM7Glmgb123bBZHxyUpOQGvbhZVP.jpeg"
                alt="Mixed wildlife scene with lion, elephant, zebras and other animals"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1798674930-612x612.jpg-2ZOtVo1btuswc3jDV50nOmTyaD0XM5.jpeg"
                alt="Hot air balloon safari over Serengeti plains at sunrise"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Best Time to Visit Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-amber-900 mb-8 text-center">Best Time to Visit</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600 mb-4">January – March</h3>
                <p className="text-gray-700">
                  Calving season in the southern Serengeti. Thousands of newborn wildebeest and dramatic predator
                  action.
                </p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600 mb-4">June – September</h3>
                <p className="text-gray-700">Famous river crossings at the Mara River in the northern Serengeti.</p>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-bold text-orange-600 mb-4">October – December</h3>
                <p className="text-gray-700">
                  Wildlife spreads across the central Serengeti — excellent for game drives year-round.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-amber-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
            The Serengeti is not just a safari — it's the ultimate African adventure.
          </h2>
          <p className="text-xl mb-8 text-amber-100" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}>
            Join Kachiki Safaris for a journey through the heart of the wild.
          </p>
          <Button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] rounded-full px-8 py-3 text-lg">
            Book Your Serengeti Safari Today
          </Button>
        </div>
      </section>
    </div>
  )
}
