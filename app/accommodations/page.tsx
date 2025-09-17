import type { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Safari Accommodations Tanzania | Luxury Lodges & Camps | Kachiki Safaris",
  description:
    "Discover our handpicked safari accommodations across Tanzania. From luxury lodges with stunning views to authentic bush camps and Zanzibar beach resorts. Experience comfort in the heart of African wilderness with Kachiki Safaris.",
}

const accommodations = [
  {
    id: 1,
    name: "Africa Safari Arusha",
    location: "Arusha, Tanzania",
    description:
      "Africa Safari Arusha is an intimate lodge located just outside the city center, perfect for starting or ending your safari adventure in Northern Tanzania. The property features a mix of standard and luxury rooms set within lush gardens, with a swimming pool and an open-air restaurant. It serves as an ideal base for exploring famous landscapes like the Serengeti, Ngorongoro Crater, and Tarangire National Park, offering a peaceful haven before or after your wildlife excursions.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Arusha-oWiGa5uvFCV2LftFBXD0Q91bYBR0KF.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Arusha accommodation. Please send me more details.",
  },
  {
    id: 2,
    name: "Africa Safari Rift Valley",
    location: "Mayoka Village, Tanzania",
    description:
      "This lodge is located in the village of Mayoka, offering a prime spot between Tarangire and Lake Manyara National Parks. It is a unique retreat for relaxation, boasting stunning views of the Great Rift Valley and Lake Manyara. The accommodation includes safari tents and luxury glamping options, with the latter featuring an outdoor shower for a unique experience under the open sky. Guests can enjoy a swimming pool and a restaurant seamlessly integrated into the landscape.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Rift%20Valley-vIWq8u5rOChhbRhsA0sq1LCqPixNHd.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Rift Valley accommodation. Please send me more details.",
  },
  {
    id: 3,
    name: "Africa Safari Manyara Escarpment",
    location: "Lake Manyara Escarpment, Tanzania",
    description:
      "Perched on the dramatic escarpment cliff, this lodge provides breathtaking panoramic views of the surrounding landscape. The property features 42 canvas 'safari cabin' tents, including Comfort, Luxury, and Premium glamping options. The lodge offers a range of facilities including a restaurant, bar, a spa, and an infinity swimming pool that blends into the wilderness. Its location near Mto wa Mbu is ideal for exploring Lake Manyara National Park, Tarangire, and the Ngorongoro Crater.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Manyara%20Escarpment-hD8CvLM7uQjFteVjI5NF5otXIkhgf2.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Manyara Escarpment accommodation. Please send me more details.",
  },
  {
    id: 4,
    name: "Africa Safari Karatu",
    location: "Ngorongoro Conservation Area, Tanzania",
    description:
      "Africa Safari Karatu is a luxury safari lodge located on the edge of the Ngorongoro Conservation Area. The lodge is perched on a hill, providing breathtaking 180-degree views of the Ngorongoro Highlands and Lake Eyasi. Accommodations are available in Safari Comfort and Luxury Bungalows, each with its own private balcony to take in the stunning vistas. The lodge's convenient location makes it an excellent base for accessing both the world-famous Ngorongoro Crater, a World Heritage Site, and Lake Manyara National Park.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Karatu-scaled.jpg-4lAWbtqEqu37cpA1PpUbfffe94VVNl.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Karatu accommodation. Please send me more details.",
  },
  {
    id: 5,
    name: "Africa Safari Maasai Boma",
    location: "Between Lake Natron & Serengeti, Tanzania",
    description:
      "This truly unique accommodation is a tribute to Maasai culture, with Safari Comfort Bungalows designed as traditional round mud houses with thatched roofs. Each bungalow is decorated with authentic Maasai artifacts. Situated between Lake Natron and the Serengeti National Park, it's an ideal stopover for those traveling between the two areas. The camp offers a chance to experience the Maasai way of life and is located just 15 minutes from the Serengeti's Klein's Gate, making it a great place to witness the Great Migration.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Maasai-Boma-16-2048x1152.jpg-i71GDcYi0PaCtdkUn02WTn1FKcTvkB.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Maasai Boma accommodation. Please send me more details.",
  },
  {
    id: 6,
    name: "Africa Safari Serengeti Ikoma",
    location: "Serengeti Ecosystem, Tanzania",
    description:
      "Located within the Serengeti ecosystem, this camp offers a comfortable safari experience just outside the National Park boundary. Due to its proximity to the Grumeti River, the camp's backyard is teeming with animals, and guests can witness the Great Migration for several months of the year. The accommodations consist of canvas 'safari cabin' tents with permanent bathrooms and private patios. Facilities include a swimming pool, a bar, and a restaurant with free Wi-Fi. Night game drives and walking safaris are available.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-Serengeti-Ikoma-21-2048x1152.jpg-fba22LIUkYRfnsGmUmrhhMRkC1CoZX.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Serengeti Ikoma accommodation. Please send me more details.",
  },
  {
    id: 7,
    name: "Africa Safari South Serengeti",
    location: "Ngorongoro Conservation Area, Tanzania",
    description:
      "Africa Safari South Serengeti is a comfortable mid-range tented camp located within the Ngorongoro Conservation Area, near Lake Ndutu. The camp consists of comfortable en-suite tents on raised platforms, offering incredible views of the plains and roaming wildlife. This area is particularly famous as the calving season hotspot for the Great Migration, making it perfect for game viewing. The camp provides a dining tent, a cracking fireplace pit for sharing stories, and offers activities such as hot air balloon rides and game drives.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa-Safari-South-Serengeti-16.jpg-szJjEE0pO8uRyOuRgDPUTqufaANe2h.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari South Serengeti accommodation. Please send me more details.",
  },
  {
    id: 8,
    name: "Africa Safari Serengeti Kusini",
    location: "South Serengeti National Park, Tanzania",
    description:
      "Situated in the southern part of the Serengeti National Park, this bush camp is a secluded hideaway in the corridor of the famous wildebeest migration. The Kusini Plains captivate guests with expansive savannahs and rich wildlife, including lions, cheetahs, giraffes, and elephants. Accommodations include luxury glamping tents and family safari tents, all with stunning views over the valley, offering a good chance to spot wildlife right from your bed. The camp is strategically located to witness the beginning of the annual wildebeest migration.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Africa%20Safari%20Serengeti%20Kusini-CCfZljhPo6OmYjRlzXckxIvlXRpfFD.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Serengeti Kusini accommodation. Please send me more details.",
  },
  {
    id: 9,
    name: "Africa Safari Lake Natron",
    location: "Lake Natron, Tanzania",
    description:
      "This luxury safari lodge is located on the edge of the highly alkaline Lake Natron. The grounds are spacious and offer a range of accommodation options from simple safari tents to luxury glamping. The lodge boasts a swimming pool with stunning views of the neighboring active volcano, Mount Ol Doinyo Lengai. It is a perfect base for exploring the dramatic volcanic terrain, taking flamingo lake walks, and visiting the beautiful Engare Sero waterfalls. The lodge's location and unique landscape make it a truly unforgettable experience.",
    image: "/images/accommodations/africa-safari-lake-natron.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Lake Natron accommodation. Please send me more details.",
  },
  {
    id: 10,
    name: "Africa Safari Selous",
    location: "Nyerere National Park, Tanzania",
    description:
      "Africa Safari Selous offers a unique safari experience just outside the Nyerere National Park (formerly Selous Game Reserve). The lodge is spacious and environmentally respectful, with a restaurant overlooking a waterhole where animals come to drink. The lodge offers various budget-friendly accommodations, including safari tents and Pool Bungalows, catering to every traveler. Its prime location near the Rufiji River and a short flight from Zanzibar or Dar es Salaam makes it easily accessible.",
    image: "/images/accommodations/africa-safari-selous.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Selous accommodation. Please send me more details.",
  },
  {
    id: 11,
    name: "Africa Safari Nyerere",
    location: "Nyerere National Park, Tanzania",
    description:
      "A boutique lodge located near the border of Nyerere National Park, this property offers a tranquil retreat. It features 13 spacious bungalows, including family accommodations, each with a private plunge pool and a rooftop terrace with breathtaking views. The lodge provides luxurious amenities, including a restaurant, bar, and spa. Guests can fully immerse themselves in nature through a variety of activities like vehicle safaris, river cruises, and guided walks, offering a high-end experience in one of Tanzania's most pristine national parks.",
    image: "/images/accommodations/africa-safari-nyerere.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Africa Safari Nyerere accommodation. Please send me more details.",
  },
  {
    id: 12,
    name: "Shaba Boutique Hotel",
    location: "Stone Town, Zanzibar",
    description:
      "Shaba Boutique Hotel is a charming bed and breakfast nestled in the heart of Stone Town's car-free old city center in Zanzibar. It's conveniently located just a two-minute walk from the beach and ferry terminal. The hotel is a unique base for exploring the city's rich culture and history, with all main attractions within a short stroll. Housed in an authentic trader's building, each room has a unique character. It's an ideal choice for a comfortable and memorable stay before or after your Zanzibar island adventures.",
    image: "/images/accommodations/shaba-boutique-hotel.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Shaba Boutique Hotel accommodation. Please send me more details.",
  },
  {
    id: 13,
    name: "Dream of Zanzibar",
    location: "Uroa, Zanzibar East Coast",
    description:
      "This boutique-style luxury resort is located on the stunning white sands of Uroa along Zanzibar's east coast. Dream of Zanzibar operates on a premium all-inclusive meal plan, which includes meals, drinks, cocktails, and a variety of other services. The resort's amenities feature a spa, wellness center, gym, and multiple restaurants and bars. It is positioned perfectly for a relaxing beach holiday after a safari, with rooms ranging from standard to deluxe suites, all designed for ultimate comfort.",
    image: "/images/accommodations/dream-of-zanzibar.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Dream of Zanzibar accommodation. Please send me more details.",
  },
  {
    id: 14,
    name: "Paradise Beach Resort",
    location: "Marumbi, Zanzibar East Coast",
    description:
      "A 4-star resort located directly on the ocean near the village of Marumbi, on Zanzibar's east coast, this is an ideal coastal getaway for all types of travelers, especially families. The resort features a Kids Club, an extensive playground, a children's pool, and a dedicated kids buffet. It also boasts a large swimming pool, an extended jetty with a bar, a dive center, and a spa. Guests can enjoy the facilities of the adjacent Zanzibar Bay Resort, offering a wide choice of dining and entertainment options.",
    image: "/images/accommodations/paradise-beach-resort.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Paradise Beach Resort accommodation. Please send me more details.",
  },
  {
    id: 15,
    name: "Zanzibar Bay Resort",
    location: "Marumbi, Zanzibar East Coast",
    description:
      "Discover 'relaxed luxury' at this beachfront resort, located in Marumbi on Zanzibar's east coast. The resort features two large infinity pools, a tropical island pool bar, and a magnificent jetty that extends over the Indian Ocean. Its spacious rooms feature rustic, authentic wooden furniture. Being next to Paradise Beach Resort, guests have access to a total of three pools, multiple restaurants, and bars, a spa, and a gym. The resort's location is a perfect starting point for exploring the rest of the scenic island.",
    image: "/images/accommodations/zanzibar-bay-resort.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Zanzibar Bay Resort accommodation. Please send me more details.",
  },
  {
    id: 16,
    name: "Reef Beach Resort",
    location: "Jambiani-Makunduchi, Zanzibar",
    description:
      "Reef & Beach Resort is a four-star hotel situated on Zanzibar's southeast coast, between the villages of Jambiani and Makunduchi. It offers a unique experience with three fantastic pools, one of which is a sprawling 1200 square meters in a tropical mangrove setting. The resort has 149 rooms and bungalows furnished in an authentic African style. Guests can enjoy fresh meals, including romantic lobster dinners on the beach, and indulge in holistic spa treatments at the on-site wellness center.",
    image: "/images/accommodations/reef-beach-resort.webp",
    whatsappLink:
      "https://wa.me/255762756046?text=Hi! I'm interested in booking Reef Beach Resort accommodation. Please send me more details.",
  },
]

export default function AccommodationsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-20" style={{ backgroundColor: "#473a30" }}>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-white">Featured Accommodations</h1>
            <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed text-white/90">
              Discover some of our most prestigious safari lodges and beach resorts across Tanzania
            </p>
          </div>
        </div>
      </section>

      {/* Accommodations Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-24">
            {accommodations.map((accommodation, index) => (
              <div
                key={accommodation.id}
                className={`flex flex-col ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                } gap-12 items-center`}
              >
                <div className="lg:w-1/2">
                  <img
                    src={accommodation.image || "/placeholder.svg"}
                    alt={accommodation.name}
                    className="w-full h-96 lg:h-[500px] object-cover rounded-2xl shadow-lg"
                  />
                </div>

                <div className="lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl lg:text-4xl font-bold mb-3" style={{ color: "#473a30" }}>
                      {accommodation.name}
                    </h2>
                    <div className="flex items-center gap-2 mb-4" style={{ color: "#f9b804" }}>
                      <MapPin className="w-5 h-5" />
                      <span className="text-lg">{accommodation.location}</span>
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed">{accommodation.description}</p>
                  </div>

                  <div className="flex justify-end pt-6 border-t border-gray-200">
                    <Button
                      asChild
                      className="px-8 py-3 text-lg font-semibold rounded-full bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] transition-opacity"
                    >
                      <Link href={accommodation.whatsappLink} target="_blank">
                        BOOK STAY
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16" style={{ backgroundColor: "#ec6417" }}>
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to Experience Tanzania in Comfort?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-balance text-white/90">
            Let us match you with the perfect accommodation for your safari adventure. From luxury lodges to authentic
            bush camps and pristine beach resorts, we have the ideal base for your Tanzanian journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] rounded-full px-8">
              <Link
                href="https://wa.me/255762756046?text=Hi! I'd like to plan my accommodation stay in Tanzania. Please help me choose the perfect lodge or resort."
                target="_blank"
              >
                Plan Your Stay
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#f9b804] text-[#f9b804] hover:bg-[#f9b804] hover:text-[#473a30] rounded-full px-8 bg-transparent"
            >
              <Link href="/tours">View Safari Tours</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
