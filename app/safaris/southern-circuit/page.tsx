import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Southern Circuit Safari Tanzania | Mikumi, Ruaha & Nyerere | Kachiki Safaris",
  description:
    "Explore Tanzania's hidden safari gems in the Southern Circuit. Discover Mikumi, Ruaha, Nyerere (Selous), and Saadani National Parks with Kachiki Safaris expert guides.",
  keywords:
    "Southern Circuit Tanzania, Mikumi National Park, Ruaha safari, Nyerere National Park, Selous Game Reserve, Saadani National Park, southern Tanzania safari",
  openGraph: {
    title: "Southern Circuit Safari Tanzania | Mikumi, Ruaha & Nyerere",
    description:
      "Explore Tanzania's hidden safari gems in the Southern Circuit with expert guides from Kachiki Safaris.",
    url: "https://www.kachikisafaris.com/safaris/southern-circuit",
    siteName: "Kachiki Safaris",
    type: "website",
  },
}

export default function SouthernCircuitPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-186308946-612x612.jpg-EdcLO5WREjOe17Gz33KUJw0nY7m8Va.jpeg"
            alt="Southern Circuit Safari"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-shadow-lg">Southern Circuit</h1>
          <p className="text-xl md:text-2xl mb-8 text-shadow">
            Discover Tanzania's hidden safari gems in the remote south
          </p>
        </div>
      </section>

      {/* Mikumi National Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Mikumi National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">An accessible safari gem in southern Tanzania.</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Mikumi is often described as a "mini Serengeti," thanks to its wide open plains and rich wildlife.
                  Located just a few hours' drive from Dar es Salaam, it's one of Tanzania's most accessible safari
                  destinations.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The park is home to lions, elephants, giraffes, hippos, and large herds of zebra and wildebeest. Its
                  relatively compact size makes game viewing easy and rewarding, especially for first-time safari-goers.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Only 4–5 hours from Dar es Salaam
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Lions, elephants, giraffes, hippos
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Landscapes similar to Serengeti
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Great for shorter safari trips
                    </li>
                  </ul>
                </div>

                <p className="text-[#473a30] font-medium mb-4">
                  Make Mikumi part of your adventure with Kachiki Safaris.
                </p>
                <button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Explore Mikumi
                </button>
              </div>
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1035682726-612x612.jpg-QHtxclNms1WNzYB1zhnmuzjNLebbEV.jpeg"
                  alt="Elephants in Mikumi National Park"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nyerere National Park */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2175769062-612x612.jpg-5hfszIyoNtxO1nF88Kf91f60mdJ4VU.jpeg"
                  alt="Giraffe and impalas in Nyerere National Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Nyerere National Park (Selous)</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">Africa's wildest and largest game reserve.</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Formerly known as Selous, Nyerere National Park is one of Africa's largest protected areas. It's a
                  remote, untouched wilderness offering an authentic safari experience far from the crowds.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  The park is famous for boat safaris on the Rufiji River, where you can spot hippos, crocodiles, and
                  elephants coming to drink. It's also home to rare wild dogs and a rich variety of bird species.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>One of the largest reserves in
                      Africa
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Unique boat safaris on Rufiji
                      River
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Home to wild dogs
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Remote and uncrowded safari
                      experience
                    </li>
                  </ul>
                </div>

                <p className="text-[#473a30] font-medium mb-4">
                  Explore the wild heart of Nyerere with Kachiki Safaris.
                </p>
                <button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Discover Nyerere
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ruaha National Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Ruaha National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">Tanzania's best-kept safari secret.</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ruaha is Tanzania's largest national park, but also one of its least visited, making it a hidden gem.
                  Its rugged landscapes and remote setting offer a truly wild experience.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ruaha is known for its predators, especially large prides of lions and impressive populations of
                  leopards and cheetahs. The park is also home to huge elephant herds, kudu, sable antelope, and over
                  500 bird species.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Tanzania's largest national park
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Excellent big cat sightings
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Remote and uncrowded
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Huge elephant populations
                    </li>
                  </ul>
                </div>

                <p className="text-[#473a30] font-medium mb-4">Venture into Ruaha's wilderness with Kachiki Safaris.</p>
                <button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Venture to Ruaha
                </button>
              </div>
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-2226152096-612x612.jpg-Cj4weehuOSL2x3SyCjKkTHhdWBVDJh.jpeg"
                  alt="Hippos in Ruaha National Park"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Saadani National Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg h-80 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-186308946-612x612.jpg-EdcLO5WREjOe17Gz33KUJw0nY7m8Va.jpeg"
                  alt="Beach at Saadani National Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Saadani National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">Where the bush meets the beach.</p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Saadani is Tanzania's only national park located on the Indian Ocean. It's the perfect combination of
                  wildlife and coastal beauty.
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Here you can watch elephants roam near the beach, spot hippos in the Wami River, and relax on
                  unspoiled sandy shores. Saadani is an ideal destination for travelers looking to mix safari with beach
                  time.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Tanzania's only coastal national
                      park
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Wildlife viewing + beach
                      relaxation
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Hippos and crocodiles in the Wami
                      River
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Elephants and giraffes near the
                      coast
                    </li>
                  </ul>
                </div>

                <p className="text-[#473a30] font-medium mb-4">
                  Experience Africa's unique bush-to-beach safari with Kachiki Safaris.
                </p>
                <button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-8 py-3 rounded-lg font-semibold transition-colors">
                  Experience Saadani
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6 text-[#473a30]">Ready to Explore Tanzania's Southern Circuit?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-700">
            Discover the hidden gems of southern Tanzania with Kachiki Safaris. From accessible Mikumi to remote Ruaha,
            experience authentic African wilderness.
          </p>
          <button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-12 py-4 rounded-lg font-semibold text-lg transition-colors">
            Plan Your Southern Safari
          </button>
        </div>
      </section>
    </div>
  )
}
