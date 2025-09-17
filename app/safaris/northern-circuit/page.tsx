import { WhatsAppFloat } from "@/components/whatsapp-float"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Northern Circuit Safari Tanzania | Ngorongoro Crater & Serengeti | Kachiki Safaris",
  description:
    "Explore Tanzania's Northern Circuit - Ngorongoro Crater, Lake Manyara, Tarangire, and more. Experience the Big Five and Great Migration with Kachiki Safaris expert guides.",
}

export default function NorthernCircuitPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      <WhatsAppFloat />

      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0 bg-black/60">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1141711907-612x612.jpg-QkKbxoOPwSVBYuwxqFjG44svWo2Aqj.jpeg"
            alt="Elephant family in northern Tanzania savanna"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 text-shadow-lg">
            Northern Circuit
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 text-shadow px-4">
            Explore Tanzania's most iconic safari destinations
          </p>
        </div>
      </section>

      {/* Ngorongoro Crater */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Ngorongoro Crater</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">
                  "Step into the world's largest intact volcanic caldera – a haven for wildlife."
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Ngorongoro Crater is often called the "Eighth Wonder of the World." This UNESCO World Heritage Site is
                  home to one of the densest concentrations of wildlife anywhere in Africa. The crater floor is a
                  self-contained ecosystem with grassy plains, acacia forests, and freshwater lakes.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Here you can encounter the legendary Big Five — lion, elephant, buffalo, rhino, and leopard — in a
                  single day. It's also one of the best places to see endangered black rhinos up close. With its
                  dramatic landscapes and abundant wildlife, Ngorongoro offers an unforgettable safari experience.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>UNESCO World Heritage Site
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>One of the best places to spot the
                      Big Five
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Home to over 25,000 large animals
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Scenic views from the crater rim
                    </li>
                  </ul>
                </div>

                <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-3">
                  Plan your Ngorongoro Safari with Kachiki Safaris today
                </Button>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-912964222-612x612.jpg-5cTa2QWncRam7Ct6NRt5zfI5LnwuTi.jpeg"
                  alt="Wildlife at Lake Manyara with crater rim views"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Manyara National Park */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1454110954-612x612.jpg-B8dK4EAay1Cx8GbNl8jDAwoF3z5Hox.jpeg"
                  alt="Tree-climbing lioness in Lake Manyara National Park"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Lake Manyara National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">
                  "Where forests, lakes, and wildlife meet in harmony."
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lake Manyara is a small but incredibly diverse park, set against the dramatic backdrop of the Great
                  Rift Valley. It's famous for its tree-climbing lions, large elephant herds, and shimmering flocks of
                  flamingos that cover the lake.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  The park's landscapes change quickly — from lush groundwater forests to open grasslands and hot
                  springs. This diversity makes it one of Tanzania's most scenic parks, perfect for short but rewarding
                  game drives.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Famous tree-climbing lions
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Huge elephant herds
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Seasonal flamingos on the lake
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Birdwatching paradise (400+
                      species)
                    </li>
                  </ul>
                </div>

                <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-3">
                  Discover the magic of Lake Manyara with Kachiki Safaris
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tarangire National Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Tarangire National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">
                  "A land of giants — elephants and ancient baobabs."
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Tarangire is known for its iconic landscapes dotted with massive baobab trees and endless savannahs.
                  The park is home to Tanzania's largest elephant population, with herds of hundreds gathering around
                  the Tarangire River during the dry season.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  Predators like lions and leopards are frequently seen here, as well as unique species such as
                  fringe-eared oryx and gerenuk. Tarangire is also a bird lover's paradise, boasting over 500 species.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Tanzania's largest elephant herds
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Iconic baobab landscapes
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Seasonal migration of wildebeest
                      and zebra
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Superb birdwatching opportunities
                    </li>
                  </ul>
                </div>

                <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-3">
                  Experience Tarangire's wild beauty with Kachiki Safaris
                </Button>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1215494886-612x612.jpg-SfFg26BOdaKUexxTsH8xP8yfNQmoPk.jpeg"
                  alt="Elephant herd in Tarangire National Park"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lake Natron */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-105495401-612x612.jpg-O5glKqDUE44v2xV4IGdZ1BZAez92jL.jpeg"
                  alt="Thousands of flamingos at Lake Natron breeding grounds"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Lake Natron</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">
                  "A surreal landscape of fire, salt, and flamingos."
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Lake Natron is unlike any other destination in Tanzania. This striking soda lake, fed by mineral-rich
                  hot springs, is the world's most important breeding ground for flamingos.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  The lake's otherworldly red and pink hues, caused by algae, create a surreal backdrop against the
                  active volcano Ol Doinyo Lengai. Beyond its wildlife, Natron offers adventure — from hiking waterfalls
                  to exploring Maasai villages.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>World's main flamingo breeding
                      site
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Stunning red/pink alkaline lake
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Views of Ol Doinyo Lengai volcano
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Unique cultural visits with the
                      Maasai
                    </li>
                  </ul>
                </div>

                <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-3">
                  Explore the wonders of Lake Natron with Kachiki Safaris
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Arusha National Park */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-[#473a30] mb-4">Arusha National Park</h2>
                <p className="text-xl text-[#ec6417] mb-6 italic">
                  "Diverse landscapes just minutes from Arusha town."
                </p>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  Arusha National Park may be small, but it packs incredible variety. From the lush forests of Mount
                  Meru's slopes to the tranquil Momella Lakes, it offers a refreshing safari close to the city.
                </p>
                <p className="text-gray-700 mb-8 leading-relaxed">
                  The park is home to giraffes, buffalos, zebras, and colobus monkeys. While lions are absent, leopards
                  and hyenas roam the park. Birdlife here is exceptional, making it a favorite for birdwatchers.
                  Adventurous travelers can even trek Mount Meru, Tanzania's second-highest peak.
                </p>

                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-[#473a30] mb-4">Highlights:</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Close to Arusha town (great for
                      day trips)
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Home to Mount Meru
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Diverse scenery: forests, lakes,
                      craters
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-[#ec6417] rounded-full mr-3"></span>Excellent for giraffes, zebras,
                      and monkeys
                    </li>
                  </ul>
                </div>

                <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-4 text-lg">
                  Discover Arusha's hidden gem with Kachiki Safaris
                </Button>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-156731319-612x612.jpg-27WZIGCVufWk5sXrM0NfgpcbQOfpMG.jpeg"
                  alt="Impalas in Arusha National Park"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Explore CTA section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#473a30] mb-4 md:mb-6 px-4">
              Ready to Explore Tanzania's Northern Circuit?
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-700 mb-6 md:mb-8 px-4">
              Discover the iconic wildlife destinations of northern Tanzania with Kachiki Safaris. From the legendary
              Ngorongoro Crater to the elephant paradise of Tarangire, experience the very best of African wilderness.
            </p>
            <Button className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg">
              Start Your Northern Circuit Adventure
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
