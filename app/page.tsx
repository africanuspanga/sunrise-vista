import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, Award, Clock } from "lucide-react"
import type { Metadata } from "next"
import { OptimizedImage } from "@/components/ui/image-optimized"
import { LazySection } from "@/components/performance/lazy-section"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Kachiki Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
  description:
    "Experience authentic Tanzania safari adventures with Kachiki Safaris. Explore Serengeti, Ngorongoro Crater, Tarangire, and Zanzibar. Expert guides, luxury accommodations, and unforgettable wildlife encounters await.",
  keywords:
    "Tanzania safari, Serengeti tours, Ngorongoro Crater, Zanzibar holidays, African safari, wildlife tours, Big Five safari, Great Migration, Tanzania travel",
  openGraph: {
    title: "Kachiki Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
    description:
      "Experience authentic Tanzania safari adventures with Kachiki Safaris. Explore Serengeti, Ngorongoro Crater, Tarangire, and Zanzibar.",
    url: "https://www.kachikisafaris.com",
    siteName: "Kachiki Safaris",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kachiki Safaris - Tanzania Safari Tours",
    description: "Experience authentic Tanzania safari adventures with expert guides and luxury accommodations.",
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-[#473a30] to-[#ec6417] overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-african-leopard.jpg-eNNYy3qVkR8shzkdRn2FsJxxwGRzfw.jpeg"
            alt="African leopard in natural habitat - Kachiki Safaris Tanzania"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1
              className="text-5xl md:text-6xl font-bold mb-6 text-balance text-white"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              Discover Tanzania's Wild Beauty
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-white leading-relaxed"
              style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.8)" }}
            >
              Experience unforgettable safaris across the Serengeti, Zanzibar, and beyond.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] px-8 py-3 text-lg rounded-full font-semibold"
            >
              <Link href="/safaris">Explore Safaris</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] mb-8">About Kachiki Safaris</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  At Kachiki Safaris, we specialize in creating tailor-made adventures across Tanzania's world-famous
                  national parks and tropical islands. With years of local expertise, our team ensures every journey is
                  safe, authentic, and unforgettable.
                </p>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="border-[#f9b804] text-[#f9b804] hover:bg-[#f9b804] hover:text-[#473a30] rounded-full bg-transparent"
                >
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="h-96 rounded-lg overflow-hidden">
                <OptimizedImage
                  src="/images/about-safari.jpeg"
                  alt="Safari vehicle with elephant in natural habitat"
                  width={600}
                  height={400}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <LazySection>
        {/* Featured Tours Section */}
        <section className="py-16 bg-orange-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] mb-4">Featured Safari Tours</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Handpicked experiences showcasing the best of Tanzania's wildlife, landscapes, and culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Tour 1 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/elephant-tusks.jpeg"
                    alt="Northern Tanzania & Zanzibar Tour"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#f9b804] text-[#473a30]">Premium</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">15 Days | Northern Tanzania & Zanzibar</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Ultimate Tanzania experience combining wildlife-rich northern parks with stunning Zanzibar beaches.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>15 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-8 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $3,507</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 15 Days Northern Tanzania & Zanzibar safari tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tour 2 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/lioness-drinking.jpeg"
                    alt="Wildlife & White Beaches Tour"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-green-100 text-green-800">Popular</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">11 Days | Wildlife & White Beaches</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Perfect blend of safari adventure and beach relaxation in northern Tanzania and Zanzibar.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>11 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-8 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $3,161</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 11 Days Wildlife & White Beaches safari tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tour 3 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/rhino-habitat.jpeg"
                    alt="Complete Northern Circuit Tour"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#ec6417] text-white">Adventure</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">13 Days | Complete Northern Circuit</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Ultimate safari experience through the heart of African wilderness and all major northern parks.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>13 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-8 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $3,584</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 13 Days Complete Northern Circuit safari tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tour 4 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/safari-guide-elephants.jpeg"
                    alt="Great Migration Safari"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-purple-100 text-purple-800">Seasonal</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">8 Days | Great Migration Safari</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Witness the spectacular wildebeest migration across the Serengeti plains with expert guides.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>8 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-6 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $2,891</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 8 Days Great Migration Safari tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tour 5 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/giraffes-balloon.jpeg"
                    alt="Balloon Safari Adventure"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-blue-100 text-blue-800">Unique</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">6 Days | Balloon Safari Adventure</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Experience Tanzania from above with hot air balloon safaris over the Serengeti and Ngorongoro.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>6 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-4 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $4,543</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 6 Days Balloon Safari Adventure tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Tour 6 */}
              <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg">
                <div className="relative">
                  <OptimizedImage
                    src="/images/wildlife/tourist-elephants.jpeg"
                    alt="Photography Safari"
                    width={400}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-yellow-100 text-yellow-800">Photography</Badge>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-[#473a30] mb-2">10 Days | Photography Safari</h3>
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Specialized photography safari with professional guides and optimal timing for wildlife shots.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>10 Days</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>2-6 people</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">From $3,410</p>
                      <p className="text-sm text-gray-500">per person</p>
                    </div>
                    <Button
                      asChild
                      className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                    >
                      <a
                        href="https://wa.me/255762756046?text=Hi! I'm interested in booking the 10 Days Photography Safari tour. Please send me more details."
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        BOOK NOW
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button
                asChild
                size="lg"
                className="bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full px-8 font-semibold"
              >
                <Link href="/tours">View All Tours</Link>
              </Button>
            </div>
          </div>
        </section>
      </LazySection>

      {/* Popular Tours Section */}
      {/* Featured Tours Section */}
      {/* ... existing code here ... */}

      {/* Featured Accommodations Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] mb-4">Exceptional Accommodations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From luxury lodges with breathtaking views to authentic bush camps in prime wildlife locations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Accommodation 1 - Africa Safari Arusha */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-orange-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Arusha-oWiGa5uvFCV2LftFBXD0Q91bYBR0KF.webp"
                  alt="Africa Safari Arusha"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-green-500/90 text-white backdrop-blur-sm">Comfort</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Arusha</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Arusha
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Intimate lodge perfect for starting your safari adventure with lush gardens and peaceful environment.
                </p>
              </CardContent>
            </Card>

            {/* Accommodation 2 - Africa Safari Maasai Boma */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-blue-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Maasai-Boma-16-2048x1152.jpg-i71GDcYi0PaCtdkUn02WTn1FKcTvkB.webp"
                  alt="Africa Safari Maasai Boma"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-blue-500/90 text-white backdrop-blur-sm">Cultural</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lake Natron & Serengeti</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Maasai Boma
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Unique traditional round mud houses with authentic Maasai artifacts and cultural experience.
                </p>
              </CardContent>
            </Card>

            {/* Accommodation 3 - Africa Safari Karatu */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-amber-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Karatu-scaled.jpg-4lAWbtqEqu37cpA1PpUbfffe94VVNl.webp"
                  alt="Africa Safari Karatu"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-amber-500/90 text-white backdrop-blur-sm">Luxury</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Ngorongoro Highlands</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Karatu
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Luxury lodge with breathtaking 180-degree views of Ngorongoro Highlands and Lake Eyasi.
                </p>
              </CardContent>
            </Card>

            {/* Accommodation 4 - Africa Safari Rift Valley */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-purple-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Rift%20Valley-vIWq8u5rOChhbRhsA0sq1LCqPixNHd.webp"
                  alt="Africa Safari Rift Valley"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-purple-500/90 text-white backdrop-blur-sm">
                  Rift Valley
                </Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Mayoka Village</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Rift Valley
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Prime location between Tarangire and Lake Manyara with stunning Rift Valley views and luxury glamping.
                </p>
              </CardContent>
            </Card>

            {/* Accommodation 5 - Africa Safari Manyara Escarpment */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-red-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Manyara%20Escarpment-hD8CvLM7uQjFteVjI5NF5otXIkhgf2.webp"
                  alt="Africa Safari Manyara Escarpment"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-red-500/90 text-white backdrop-blur-sm">Escarpment</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Lake Manyara Escarpment</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Manyara Escarpment
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Perched on dramatic cliff with panoramic views, featuring safari tents and infinity pool.
                </p>
              </CardContent>
            </Card>

            {/* Accommodation 6 - Africa Safari Serengeti Ikoma */}
            <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-0 shadow-lg bg-gradient-to-br from-white to-teal-50/30">
              <div className="relative overflow-hidden">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Serengeti-Ikoma-21-2048x1152.jpg-fba22LIUkYRfnsGmUmrhhMRkC1CoZX.webp"
                  alt="Africa Safari Serengeti Ikoma"
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Badge className="absolute top-4 left-4 bg-teal-500/90 text-white backdrop-blur-sm">Serengeti</Badge>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <MapPin className="w-4 h-4" />
                  <span>Serengeti Ecosystem</span>
                </div>
                <h3 className="text-xl font-bold text-[#473a30] mb-3 group-hover:text-[#ec6417] transition-colors">
                  Africa Safari Serengeti Ikoma
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Located within Serengeti ecosystem near Grumeti River, perfect for witnessing the Great Migration.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-[#473a30] hover:bg-[#ec6417] text-white rounded-full px-8 font-semibold"
            >
              <Link href="/accommodations">View All Accommodations</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Destinations Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] mb-4">Popular Destinations</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover Tanzania's most iconic safari destinations in the Northern Circuit
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Ngorongoro Crater */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-amber-400 to-orange-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-912964222-612x612.jpg-5cTa2QWncRam7Ct6NRt5zfI5LnwuTi.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Ngorongoro Crater</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  UNESCO World Heritage Site with the world's largest intact volcanic caldera and densest wildlife
                  concentration.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-[#ec6417] text-white">Big Five</Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/safaris/northern-circuit">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Lake Manyara */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1454110954-612x612.jpg-B8dK4EAay1Cx8GbNl8jDAwoF3z5Hox.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Lake Manyara National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Famous for tree-climbing lions, large elephant herds, and spectacular flamingo flocks on the lake.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Tree Lions
                  </Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/safaris/northern-circuit">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Tarangire */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-1215494886-612x612.jpg-SfFg26BOdaKUexxTsH8xP8yfNQmoPk.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Tarangire National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Land of giants with massive baobab trees and Tanzania's largest elephant population.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="border-orange-500 text-orange-600">
                    Elephants
                  </Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/safaris/northern-circuit">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Lake Natron */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-pink-400 to-red-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-105495401-612x612.jpg-O5glKqDUE44v2xV4IGdZ1BZAez92jL.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Lake Natron</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Surreal alkaline lake with red-pink hues, world's main flamingo breeding site near active volcano.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="border-pink-500 text-pink-600">
                    Flamingos
                  </Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/safaris/northern-circuit">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Arusha National Park */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-green-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-156731319-612x612.jpg-27WZIGCVufWk5sXrM0NfgpcbQOfpMG.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Arusha National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Diverse landscapes from Mount Meru's slopes to Momella Lakes, perfect for day trips from Arusha.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Mount Meru
                  </Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/safaris/northern-circuit">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Serengeti */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-yellow-400 to-orange-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-zebras-grazing-tsavo-east-national-park-kenya-africa.jpg-Jzwsnc0NAHIimdxoBGBLJwi0rdWdMo.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#473a30] mb-3">Serengeti National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Endless plains hosting the Great Migration and home to Africa's Big Five in their natural habitat.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <Badge className="bg-[#f9b804] text-[#473a30]">Migration</Badge>
                </div>
                <Button
                  asChild
                  className="w-full bg-[#f9b804] hover:bg-[#e6a503] text-[#473a30] rounded-full font-semibold"
                >
                  <Link href="/serengeti">Explore Destination</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-gradient-to-r from-[#473a30] to-[#ec6417] relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-shot-group-african-wildebeests-grassy-plain.jpg-uf6AbRr9jL8BbvTcnSthycswitrDqQ.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative container mx-auto px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            We are your gateway to Tanzania's incredible wildlife and landscapes.
          </h2>
          <p className="text-xl mb-8 text-amber-100 leading-relaxed">
            With decades of experience and deep local knowledge, Kachiki Safaris creates unforgettable adventures that
            connect you with the heart of East Africa's natural wonders.
          </p>
          <Button asChild size="lg" className="bg-[#473a30] hover:bg-[#ec6417] text-white rounded-full font-semibold">
            <Link href="/about">More about us</Link>
          </Button>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] text-center mb-12">
            Why Travel With Kachiki Safaris?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-[#ec6417]" />
              </div>
              <h3 className="text-xl font-bold text-[#473a30] mb-3">Trusted Guides</h3>
              <p className="text-gray-600">Experienced, professional safari guides.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-[#ec6417]" />
              </div>
              <h3 className="text-xl font-bold text-[#473a30] mb-3">Tailor-Made Tours</h3>
              <p className="text-gray-600">Customized to your interests & budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-[#ec6417]" />
              </div>
              <h3 className="text-xl font-bold text-[#473a30] mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Tanzania's parks and culture.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-[#ec6417]" />
              </div>
              <h3 className="text-xl font-bold text-[#473a30] mb-3">Memorable Journeys</h3>
              <p className="text-gray-600">Focus on comfort, safety, and unique experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] text-center mb-12">What Our Clients Say</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 mr-3 rounded overflow-hidden">
                    <svg viewBox="0 0 22 16" className="w-full h-full">
                      <rect width="22" height="16" fill="#ef2b2d" />
                      <rect x="6" y="0" width="3" height="16" fill="#fff" />
                      <rect x="0" y="6.5" width="22" height="3" fill="#fff" />
                      <rect x="7" y="0" width="1" height="16" fill="#002868" />
                      <rect x="0" y="7.5" width="22" height="1" fill="#002868" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#473a30]">Erik Hansen</h3>
                    <p className="text-sm text-gray-500">Norway</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Absolutely unforgettable safari! The Serengeti was beyond our dreams. Kachiki Safaris made everything
                  perfect from start to finish."
                </p>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 mr-3 rounded overflow-hidden">
                    <svg viewBox="0 0 19 10" className="w-full h-full">
                      <rect width="19" height="10" fill="#B22234" />
                      <rect y="0.77" width="19" height="0.77" fill="#fff" />
                      <rect y="2.31" width="19" height="0.77" fill="#fff" />
                      <rect y="3.85" width="19" height="0.77" fill="#fff" />
                      <rect y="5.38" width="19" height="0.77" fill="#fff" />
                      <rect y="6.92" width="19" height="0.77" fill="#fff" />
                      <rect y="8.46" width="19" height="0.77" fill="#fff" />
                      <rect width="7.6" height="5.38" fill="#3C3B6E" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#473a30]">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Professional guides and amazing organization. Saw lions, elephants, and even rhinos up close. Highly
                  recommend Kachiki Safaris!"
                </p>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 mr-3 rounded overflow-hidden">
                    <svg viewBox="0 0 3 2" className="w-full h-full">
                      <rect width="3" height="2" fill="#fff" />
                      <circle cx="1.5" cy="1" r="0.6" fill="#bc002d" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#473a30]">Hiroshi Tanaka</h3>
                    <p className="text-sm text-gray-500">Japan</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "The wildlife photography opportunities were incredible. Our guide knew exactly where to find the Big
                  Five. Perfect trip!"
                </p>
              </div>
            </Card>

            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-8 mr-3 rounded overflow-hidden">
                    <svg viewBox="0 0 5 3" className="w-full h-full">
                      <rect width="5" height="1" fill="#000" />
                      <rect y="1" width="5" height="1" fill="#dd0000" />
                      <rect y="2" width="5" height="1" fill="#ffce00" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-[#473a30]">Anna Mueller</h3>
                    <p className="text-sm text-gray-500">Germany</p>
                  </div>
                </div>
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-green-500 text-green-500" />
                  ))}
                </div>
                <p className="text-gray-600 italic">
                  "Best experience of my life! The combination of safari and Zanzibar was perfect. Thank you Kachiki
                  Safaris for the memories."
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Big 5 Section */}
      <section className="py-16 bg-gradient-to-r from-[#ec6417] to-[#f9b804]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2
              className="text-3xl md:text-4xl font-bold mb-4"
              style={{ color: "#473a30", textShadow: "2px 2px 4px rgba(255,255,255,0.8)" }}
            >
              Experience Africa's Big Five
            </h2>
            <p className="text-xl" style={{ color: "#3e372b", textShadow: "1px 1px 2px rgba(255,255,255,0.8)" }}>
              Lion, Leopard, Elephant, Buffalo, and Rhino - witness these magnificent creatures in their natural
              habitat.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-468200710-612x612.jpg-sfNOaEba068X5EG3ZRLNPYKZmUffrN.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Lion
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-leopard-sitting-tree-looking-around-jungle.jpg-ZOqHQ0mPlvXJT1otR7BCuRTjVnHTJ1.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Leopard
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-cute-elephant-walking-dry-grass-wilderness.jpg-tLLzL8CxKaY9Uhccm6538ZHIRQKjdl.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Elephant
                  </h3>
                </div>
              </div>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 border-2 rounded-2xl overflow-hidden shadow-xl">
              <div
                className="h-48 bg-cover bg-center relative"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rhino-savannah-national-park-africa.jpg-NlswAiyfe9GsmKhphQQTKZpjorvZiF.jpeg')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="absolute bottom-4 left-4 bg-black/80 px-4 py-2 rounded-lg shadow-lg">
                  <h3 className="text-xl font-bold text-white" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
                    Rhino
                  </h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section - updating text color to white */}
      <section className="py-16 bg-gray-100 relative">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#473a30] mb-6">
            Ready to start your Tanzanian adventure?
          </h2>
          <Button asChild size="lg" className="bg-[#473a30] hover:bg-[#ec6417] text-white rounded-full font-semibold">
            <Link href="/contact">Plan Your Safari Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
