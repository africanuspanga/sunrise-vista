import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Users, MapPin, Award } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-gradient-to-r from-amber-900 to-orange-800 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-african-leopard.jpg-eNNYy3qVkR8shzkdRn2FsJxxwGRzfw.jpeg')`,
          }}
        />
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
              className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
            >
              <Link href="/safaris">Explore Safaris</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-8">About Kachiki Safaris</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              At Kachiki Safaris, we specialize in creating tailor-made adventures across Tanzania's world-famous
              national parks and tropical islands. With years of local expertise, our team ensures every journey is
              safe, authentic, and unforgettable.
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-500 text-orange-600 hover:bg-orange-50 rounded-full bg-transparent"
            >
              <Link href="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Tours Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-4">Our Popular Tours</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our multi-faceted approach ensures conservation strategies work for wildlife and people.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Serengeti Card */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-orange-400 to-amber-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/group-zebras-grazing-tsavo-east-national-park-kenya-africa.jpg-Jzwsnc0NAHIimdxoBGBLJwi0rdWdMo.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Serengeti National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Witness the Great Migration and Africa's Big Five in the endless plains.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-amber-900">From $1,000</span>
                  <Badge className="bg-orange-500 text-white">Popular</Badge>
                </div>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">
                  <Link href="/serengeti">View Tour</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Mikumi Card */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute-massai-giraffe-tsavo-east-national-park-kenya-africa.jpg-tK4uXgfmLiHXPAL0bNHDjRrlHg6F0Y.jpeg')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Mikumi National Park</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  A hidden gem in southern Tanzania, perfect for an off-the-beaten-path safari.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-amber-900">From $1,000</span>
                  <Badge variant="outline" className="border-green-500 text-green-600">
                    Hidden Gem
                  </Badge>
                </div>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">
                  <Link href="/safaris/southern-circuit/mikumi">View Tour</Link>
                </Button>
              </CardContent>
            </Card>

            {/* Zanzibar Card */}
            <Card className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 bg-gradient-to-br from-blue-400 to-cyan-500 relative">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png')`,
                  }}
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-amber-900 mb-3">Zanzibar Island</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  Relax on pristine beaches after your safari adventure.
                </p>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-2xl font-bold text-amber-900">From $1,000</span>
                  <Badge variant="outline" className="border-blue-500 text-blue-600">
                    Beach
                  </Badge>
                </div>
                <Button asChild className="w-full bg-orange-500 hover:bg-orange-600 rounded-full">
                  <Link href="/zanzibar">View Tour</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="py-16 bg-gradient-to-r from-amber-800 to-orange-700 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-shot-group-african-wildebeests-grassy-plain.jpg-uf6AbRr9jL8BbvTcnSthycswitrDqQ.jpeg')`,
          }}
        />
        <div className="relative container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              We are your gateway to Tanzania's incredible wildlife and landscapes.
            </h2>
            <p className="text-xl mb-8 text-amber-100 leading-relaxed">
              With decades of experience and deep local knowledge, Kachiki Safaris creates unforgettable adventures that
              connect you with the heart of East Africa's natural wonders.
            </p>
            <Button asChild size="lg" className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/about">More about us</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Travel With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-12">
            Why Travel With Kachiki Safaris?
          </h2>
          <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Trusted Guides</h3>
              <p className="text-gray-600">Experienced, professional safari guides.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Tailor-Made Tours</h3>
              <p className="text-gray-600">Customized to your interests & budget.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Local Expertise</h3>
              <p className="text-gray-600">Deep knowledge of Tanzania's parks and culture.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-xl font-bold text-amber-900 mb-3">Memorable Journeys</h3>
              <p className="text-gray-600">Focus on comfort, safety, and unique experiences.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 text-center mb-12">Client Testimonials</h2>
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
                    <h3 className="font-bold text-amber-900">Erik Hansen</h3>
                    <p className="text-sm text-gray-500">Norway</p>
                  </div>
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
                    <h3 className="font-bold text-amber-900">Sarah Johnson</h3>
                    <p className="text-sm text-gray-500">United States</p>
                  </div>
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
                    <h3 className="font-bold text-amber-900">Hiroshi Tanaka</h3>
                    <p className="text-sm text-gray-500">Japan</p>
                  </div>
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
                    <h3 className="font-bold text-amber-900">Anna Mueller</h3>
                    <p className="text-sm text-gray-500">Germany</p>
                  </div>
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
      <section className="py-16 bg-gradient-to-r from-orange-400 to-amber-500">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Experience Africa's Big Five</h2>
            <p className="text-xl text-orange-100">
              Lion, Leopard, Elephant, Buffalo, and Rhino - witness these magnificent creatures in their natural
              habitat.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="bg-black/20 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative object-cover"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-468200710-612x612.jpg-sfNOaEba068X5EG3ZRLNPYKZmUffrN.jpeg')`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Lion</h3>
                </div>
              </div>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative object-cover"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/african-leopard-sitting-tree-looking-around-jungle.jpg-ZOqHQ0mPlvXJT1otR7BCuRTjVnHTJ1.jpeg')`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Leopard</h3>
                </div>
              </div>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative object-cover"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-cute-elephant-walking-dry-grass-wilderness.jpg-tLLzL8CxKaY9Uhccm6538ZHIRQKjdl.jpeg')`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Elephant</h3>
                </div>
              </div>
            </Card>

            <Card className="bg-black/20 backdrop-blur-sm border-0 rounded-2xl overflow-hidden">
              <div
                className="h-48 bg-cover bg-center relative object-cover"
                style={{
                  backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/rhino-savannah-national-park-africa.jpg-NlswAiyfe9GsmKhphQQTKZpjorvZiF.jpeg')`,
                }}
              >
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-white">Rhino</h3>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-amber-900 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cute-massai-giraffe-tsavo-east-national-park-kenya-africa%20%281%29.jpg-MDYQk1BA1wilBMvfuYHpZDdBF7MvW8.jpeg')`,
          }}
        />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to start your Tanzanian adventure?</h2>
          <Button
            asChild
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg rounded-full"
          >
            <Link href="/contact">Plan Your Safari Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
