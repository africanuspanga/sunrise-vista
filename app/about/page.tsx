import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, MapPin, Heart } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-r from-[#473a30] to-[#ec6417] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-458681357-612x612.jpg-ZO4bE4Lo71RYSgbVsOKG8WwZszoKkv.jpeg')`,
          }}
        />
        {/* Made overlay much darker for better text contrast */}
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            {/* Added strong text shadow for better contrast */}
            <h1
              className="text-4xl md:text-5xl font-bold mb-6 text-balance"
              style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
            >
              About Kachiki Safaris
            </h1>
            {/* Made text explicitly white with strong shadow */}
            <p className="text-xl text-white leading-relaxed" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}>
              Your trusted partner for authentic Tanzanian adventures
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-12">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/istockphoto-697396414-612x612.jpg-Y4Hd02YnoBBrw17MTTnpQa1G4zh124.jpeg"
                alt="Cultural experience with Maasai people"
                className="w-full h-64 object-cover rounded-2xl shadow-lg"
              />
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Kachiki Safaris was founded with a passion for showcasing Tanzania's incredible wildlife, landscapes,
                and culture. Based in Arusha – the gateway to Tanzania's national parks – we design personalized tours
                that go beyond the ordinary.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Whether you dream of witnessing the Great Migration, exploring the vast Ngorongoro Crater, or unwinding
                on Zanzibar's pristine beaches, our team ensures every detail is carefully planned. With experienced
                guides, comfortable vehicles, and local knowledge, we promise a safari experience you'll never forget.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed mb-12">
                Our commitment goes beyond just showing you Tanzania's natural wonders. We believe in responsible
                tourism that benefits local communities and contributes to wildlife conservation. When you travel with
                us, you're not just a tourist – you're part of a larger mission to protect and preserve Africa's
                incredible heritage for future generations.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Heart className="w-6 h-6 text-[#ec6417]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#473a30] mb-3">Our Mission</h3>
                  <p className="text-gray-700">
                    To create unforgettable safari experiences while supporting local communities and wildlife
                    conservation efforts across Tanzania.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-orange-50 border-orange-200">
                <CardContent className="p-8">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4">
                    <Award className="w-6 h-6 text-[#ec6417]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#473a30] mb-3">Our Vision</h3>
                  <p className="text-gray-700">
                    To be Tanzania's leading safari company, known for exceptional service, authentic experiences, and
                    positive impact on wildlife and communities.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Team Section */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#473a30] mb-8">Why Choose Us</h2>
              <div className="grid md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-[#ec6417]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#473a30] mb-2">Expert Guides</h3>
                  <p className="text-gray-600 text-sm">Professional, knowledgeable guides with years of experience</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-[#ec6417]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#473a30] mb-2">Local Knowledge</h3>
                  <p className="text-gray-600 text-sm">Deep understanding of Tanzania's parks, culture, and wildlife</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-[#ec6417]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#473a30] mb-2">Personalized Service</h3>
                  <p className="text-gray-600 text-sm">Tailor-made itineraries designed around your interests</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-[#ec6417]" />
                  </div>
                  <h3 className="text-lg font-bold text-[#473a30] mb-2">Responsible Tourism</h3>
                  <p className="text-gray-600 text-sm">Supporting conservation and local communities</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <Button
                asChild
                size="lg"
                className="bg-[#ec6417] hover:bg-[#f9b804] text-white px-8 py-3 text-lg rounded-full"
              >
                <Link href="/contact">Start Planning Your Safari</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
