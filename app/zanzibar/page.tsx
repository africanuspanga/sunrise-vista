import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Zanzibar Tours & Beach Holidays | Kachiki Safaris Tanzania",
  description:
    "Discover Zanzibar's pristine beaches, Stone Town heritage, and spice tours. Book your perfect island getaway with Kachiki Safaris - Prison Island, Jozani Forest, and sunset dhow cruises.",
}

export default function ZanzibarPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png"
            alt="Beautiful Zanzibar beach with turquoise waters and white sand"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">
            Zanzibar
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-shadow px-4">
            Discover the spice island's pristine beaches and rich cultural heritage
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-amber-900 mb-8 md:mb-12 text-center">Zanzibar Tours</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
            {/* Prison Island Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dd.jpg-BPXiP5AYHBLL2qysabuk8ZiLN3mTI0.jpeg"
                  alt="Aerial view of Prison Island with crystal clear turquoise waters"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Prison Island</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Visit the historic Prison Island and meet the giant Aldabra tortoises. Enjoy snorkeling in crystal
                  clear waters and learn about the island's fascinating history.
                </p>
              </div>
            </div>

            {/* Jozani Forest Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/zanzibar-jozani-forest-tour-spice-farm-tour-with-lunch-3828448.jpg-BIOipcznnC9IQ9ao2fY3vclGlNIKgA.jpeg"
                  alt="Tourists walking through lush Jozani Forest with twisted tree branches"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Jozani Forest</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Explore Zanzibar's indigenous forest and encounter the rare Red Colobus monkeys. Walk through mangrove
                  boardwalks and discover unique flora and fauna.
                </p>
              </div>
            </div>

            {/* Sunset Dhow Cruise */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-21%20at%2002.50.59-BKqyiKzIBNGjNr2xR6qRRD2d2iUSq4.png"
                  alt="Traditional dhow sailboat silhouetted against beautiful orange sunset"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Sunset Dhow Cruise</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Sail on a traditional dhow boat while watching the spectacular Zanzibar sunset. Enjoy refreshments and
                  the gentle ocean breeze on this romantic cruise.
                </p>
              </div>
            </div>

            {/* Stone Town Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-488046711-612x612.jpg-WN0cFDYaSi3GD6DIEX36gWwgytV620.jpeg"
                  alt="Historic Stone Town street with traditional Zanzibari architecture and colorful doors"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Stone Town</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Explore the UNESCO World Heritage site of Stone Town. Discover the spice markets, historic buildings,
                  and learn about Zanzibar's rich cultural heritage.
                </p>
              </div>
            </div>

            {/* Nungwi Beach */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png"
                  alt="Pristine white sand beach at Nungwi with turquoise waters and palm trees"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Nungwi</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Relax on the pristine white sand beaches of Nungwi. Enjoy swimming, snorkeling, and watching
                  traditional dhow boats being built by local craftsmen.
                </p>
              </div>
            </div>

            {/* Spice Tour */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-40 sm:h-48 overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-525612597-612x612.jpg-hQTzXyLKA74M2g7lwPLzV8athjhm5U.jpeg"
                  alt="Colorful array of exotic spices and herbs in traditional bowls"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-bold text-amber-900 mb-3">Spice Tour</h3>
                <p className="text-sm md:text-base text-gray-700 mb-4">
                  Discover why Zanzibar is called the "Spice Island." Visit spice plantations and learn about cardamom,
                  cinnamon, nutmeg, and other exotic spices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 md:py-16 bg-amber-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative container mx-auto px-4 text-center">
          <h2
            className="text-2xl md:text-3xl font-bold mb-4 md:mb-6"
            style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
          >
            Experience the Magic of Zanzibar
          </h2>
          <p
            className="text-lg md:text-xl mb-6 md:mb-8 text-amber-100 px-4"
            style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
          >
            From pristine beaches to rich cultural heritage, Zanzibar offers unforgettable experiences.
          </p>
          <Button className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg">
            Book Your Zanzibar Adventure
          </Button>
        </div>
      </section>
    </div>
  )
}
