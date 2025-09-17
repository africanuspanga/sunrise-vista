"use client"

import { Button } from "@/components/ui/button"
import { MapPin } from "lucide-react"

const allTours = [
  {
    title: "15 Days | Northern Tanzania & Zanzibar",
    location: "Northern Tanzania & Zanzibar",
    description:
      "This tour is for the ultimate Tanzania experience. It's perfect if you want to see all the highlights, from the wildlife-rich northern parks to the stunning beaches of Zanzibar, all in one comprehensive 15-day journey.",
    highlights: ["Arusha National Park", "Boat Safari", "Game Drive", "Lake Manyara National Park", "Lake Natron"],
    price: "From €2,972 per person",
    image: "/images/wildlife/elephant-tusks.jpeg", // Unique image for this tour
  },
  {
    title: "11 Days | Wildlife & White Beaches",
    location: "Northern Tanzania & Zanzibar",
    description:
      "Enjoy the best of both worlds with this combined safari and beach holiday. You'll spend time exploring the famous national parks of Northern Tanzania before heading to the vast, white sands of Zanzibar for some relaxation.",
    highlights: [
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Relax Days",
      "Serengeti National Park",
      "Tarangire National Park",
      "Zanzibar",
    ],
    price: "From €2,679 per person",
    image: "/images/wildlife/lioness-drinking.jpeg", // Unique image for this tour
  },
  {
    title: "11 Days | Wilderness & Paradise",
    location: "Northern Tanzania & Zanzibar",
    description:
      "Step off the plane and feel the magic of Tanzania. This tour is designed for you to experience what the country is truly known for: its incredible wilderness and stunning natural beauty.",
    highlights: [
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Relax Days",
      "Tarangire National Park",
      "Zanzibar",
    ],
    price: "From €2,112 per person",
    image: "/images/wildlife/zebras-grazing.jpeg", // Unique image for this tour
  },
  {
    title: "10 Days | Northern Tanzania & Zanzibar",
    location: "Northern Tanzania & Zanzibar",
    description:
      "Experience an impressive 10-day tour that showcases the unique diversity of Tanzania. From exhilarating safari drives to unwinding on the coast, this trip offers a blend of adventure and relaxation.",
    highlights: [
      "Domestic Flight",
      "Ngorongoro Crater",
      "Relax Days",
      "Serengeti National Park",
      "Tarangire National Park",
      "Zanzibar",
    ],
    price: "From €2,233 per person",
    image: "/images/wildlife/rhino-habitat.jpeg", // Unique image for this tour
  },
  {
    title: "8 Days | Northern Tanzania & Zanzibar",
    location: "Northern Tanzania & Zanzibar",
    description:
      "This is a shorter yet extraordinary tour that captures the essence of Tanzania's diversity. It's a great option if you have less time but still want to see the key highlights of the region.",
    highlights: [
      "Ngorongoro Crater",
      "Relax Days",
      "Serengeti National Park",
      "Stone Town",
      "Tarangire National Park",
      "Zanzibar",
    ],
    price: "From €2,218 per person",
    image: "/images/wildlife/elephant-mountains.jpeg", // Unique image for this tour
  },
  {
    title: "8 Days | Zanzibar & Serengeti NP",
    location: "Zanzibar & Serengeti",
    description:
      "An unforgettable eight-day trip that mixes the rich culture of Stone Town in Zanzibar with the thrilling wildlife of Serengeti National Park. It's a perfect blend of culture and adventure.",
    highlights: [
      "Domestic Flight",
      "Night Game Drive",
      "Relax Days",
      "Serengeti National Park",
      "Walking Safari",
      "Zanzibar",
    ],
    price: "From €2,137 per person",
    image: "/images/wildlife/leopard-tree.png", // Unique image for this tour
  },
  {
    title: "10 Days | National Parks in Northern Tanzania & Zanzibar",
    location: "Northern Tanzania & Zanzibar",
    description:
      "Discover the enchanting customs and traditions of Tanzania on this inspiring tour. You'll visit several of the country's national parks before concluding your trip on the beautiful island of Zanzibar.",
    highlights: ["Lake Manyara National Park", "Ngorongoro Crater", "Relax Days", "Stone Town", "Zanzibar"],
    price: "From €1,689 per person",
    image: "/images/wildlife/cheetah-cub.png", // Unique image for this tour
  },
  {
    title: "8 Days | Zanzibar & Lake Manyara",
    location: "Zanzibar & Lake Manyara",
    description:
      "This fascinating tour starts in the historic town of Stone Town, where you can explore its narrow streets and rich history, before continuing on to the natural beauty of Lake Manyara.",
    highlights: ["Lake Manyara National Park", "Ngorongoro Crater", "Relax Days", "Stone Town", "Zanzibar"],
    price: "From €1,671 per person",
    image: "/images/wildlife/lion-pride.jpeg", // Unique image for this tour
  },
  {
    title: "13 Days | Complete Northern Circuit",
    location: "Northern Tanzania",
    description:
      "This is the ultimate safari tour for anyone who wants to see the best of the Northern Circuit. The trip is designed to take you through the heart of the African wilderness, promising an unforgettable adventure.",
    highlights: [
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Serengeti National Park",
      "Tarangire National Park",
      "Walking Safari",
    ],
    price: "From €3,037 per person",
    image: "/images/wildlife/lion-rock.jpeg", // Unique image for this tour
  },
  {
    title: "12 Days | Complete Northern Circuit",
    location: "Northern Tanzania",
    description:
      "Embark on an enchanting safari adventure through the diverse landscapes and vibrant cultures of Northern Tanzania. This tour is perfect for experiencing the rich traditions and incredible wildlife of the region.",
    highlights: [
      "Maasai Boma",
      "Ngorongoro Crater",
      "Night Game Drive",
      "Pololeti Game Reserve",
      "Serengeti National Park",
      "Tarangire National Park",
    ],
    price: "From €2,980 per person",
    image: "/images/wildlife/bat-eared-foxes.webp", // Unique image for this tour
  },
  {
    title: "14 Days | The Best of the Northern Circuit & Zanzibar",
    location: "Northern Tanzania & Zanzibar",
    description:
      "This unique safari experience takes you through some of Africa's most beautiful game parks and concludes with a well-deserved break in Zanzibar. It's the ideal package for those who want a bit of everything.",
    highlights: [
      "Domestic Flight",
      "Lake Manyara National Park",
      "Lake Natron",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Serengeti National Park",
    ],
    price: "From €2,865 per person",
    image: "/images/wildlife/safari-guide-elephants.jpeg",
  },
  {
    title: "11 Days | Complete Northern Circuit",
    location: "Northern Tanzania",
    description:
      "Home to some of the most beautiful game parks in Africa, Northern Tanzania offers an enchanting safari experience on this tour. You'll get to see a wide variety of wildlife and landscapes.",
    highlights: [
      "Lake Manyara National Park",
      "Lake Natron",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Serengeti National Park",
      "Tarangire National Park",
    ],
    price: "From €2,345 per person",
    image: "/images/wildlife/rhino-sunset.jpeg",
  },
  {
    title: "11 Days | Endless Plains",
    location: "Northern Tanzania",
    description:
      "Serengeti National Park is on everyone's bucket list, and this tour is your chance to see and experience it with your own eyes. This trip is focused on a deep dive into the endless plains and their inhabitants.",
    highlights: [
      "Arusha National Park",
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Serengeti National Park",
      "Tarangire National Park",
    ],
    price: "From €2,323 per person",
    image: "/images/wildlife/giraffes-balloon.jpeg",
  },
  {
    title: "11 Days | Crazy Tanzania",
    location: "Northern Tanzania",
    description:
      "The name of this package lives up to the experience! During this 11-day safari, you'll visit multiple national parks and have an incredible adventure filled with thrilling moments and diverse scenery.",
    highlights: [
      "Arusha National Park",
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Serengeti National Park",
      "Tarangire National Park",
    ],
    price: "From €2,221 per person",
    image: "/images/wildlife/tourist-elephants.jpeg",
  },
  {
    title: "11 Days | Tanzania Classics",
    location: "Northern Tanzania",
    description:
      "This safari promises to be an unforgettable adventure. From the world-famous Serengeti to other classic Northern Tanzania destinations, this tour hits all the right notes for a classic safari.",
    highlights: [
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Serengeti National Park",
      "Tarangire National Park",
    ],
    price: "From €2,470 per person",
    image: "/images/wildlife/elephant-herd-savanna.jpeg",
  },
  {
    title: "11 Days | Lake Hopping",
    location: "Northern Tanzania",
    description:
      "Tanzania has many impressive lakes with breathtaking nature and many animal species. This tour focuses on visiting these beautiful lakes and the parks that surround them.",
    highlights: [
      "Lake Natron",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Arusha National Park",
      "Game Drive",
      "Lake Manyara National Park",
    ],
    price: "From €2,281 per person",
    image: "/images/wildlife/wildebeest-migration.jpeg",
  },
  {
    title: "10 Days | Highlights Noord-Tanzania",
    location: "Northern Tanzania",
    description:
      "Join an extraordinary safari through the diverse regions of Northern Tanzania. This trip focuses on hitting the major highlights, ensuring you don't miss any of the must-see spots.",
    highlights: [
      "Serengeti National Park",
      "Tarangire National Park",
      "Walking Safari",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Night Game Drive",
    ],
    price: "From €2,415 per person",
    image: "/images/wildlife/lion-feeding.jpeg",
  },
  {
    title: "9 Days | Highlights Noord-Tanzania",
    location: "Northern Tanzania",
    description:
      "Embark on a great safari through Northern Tanzania, where the wild heart of Africa beats. This trip is designed to give you a powerful taste of the wilderness and its most iconic locations.",
    highlights: [
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
      "Serengeti National Park",
      "Domestic Flight",
      "Game Drive",
      "Lake Natron",
    ],
    price: "From €2,450 per person",
    image: "/images/wildlife/tourist-giraffe.jpeg",
  },
  {
    title: "8 Days | Compleet Noordelijk Circuit",
    location: "Northern Tanzania",
    description:
      "With this unforgettable safari, you'll discover the diverse landscapes and iconic destinations of Northern Tanzania. It's a comprehensive tour that packs a lot of adventure into just eight days.",
    highlights: [
      "Safari Jeep with Pop-up Roof",
      "Serengeti National Park",
      "Tarangire National Park",
      "Lake Natron",
      "Ngorongoro Crater",
      "Pololeti Game Reserve",
    ],
    price: "From €2,345 per person",
    image: "/images/wildlife/cheetah-family.jpeg",
  },
  {
    title: "7 Days | Compleet Noordelijk Circuit",
    location: "Northern Tanzania",
    description:
      "Join this enchanting safari adventure through the raw and beautiful landscapes of Northern Tanzania. The trip is designed to showcase the authentic beauty of the region in a shorter time frame.",
    highlights: [
      "Ngorongoro Crater",
      "Serengeti National Park",
      "Tarangire National Park",
      "Lake Manyara National Park",
      "Lake Natron",
      "Maasai Boma",
    ],
    price: "From €1,788 per person",
    image: "/images/wildlife/safari-vehicle-elephant.jpeg",
  },
  {
    title: "6 Days | Highlights Noord-Tanzania",
    location: "Northern Tanzania",
    description:
      "This six-day safari adventure lets you discover the best of the northern parks in a single tour. You'll be amazed by the incredible sights and sounds of the wild.",
    highlights: [
      "Tarangire National Park",
      "Walking Safari",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
      "Serengeti National Park",
    ],
    price: "From €1,550 per person",
    image: "/images/wildlife/hippos-water.jpeg",
  },
  {
    title: "5 Days | Highlights van Noord-Tanzania",
    location: "Northern Tanzania",
    description:
      "This safari trip lets you experience all the highlights of Northern Tanzania in just five days. If you're ready for an action-packed, short trip, this one's for you.",
    highlights: [
      "Serengeti National Park",
      "Tarangire National Park",
      "Game Drive",
      "Ngorongoro Crater",
      "Safari Jeep with Pop-up Roof",
    ],
    price: "From €1,497 per person",
    image: "/images/wildlife/buffalo-bird.jpeg",
  },
  {
    title: "4 Days | Cultuur & Safari",
    location: "Northern Tanzania",
    description:
      "Discover the treasures of Northern Tanzania during this four-day tour. Don't forget your binoculars and camera as you'll be immersed in both the culture and the wildlife of the region.",
    highlights: [
      "Ngorongoro Crater",
      "Safari Jeep with Pop-up Roof",
      "Tarangire National Park",
      "Game Drive",
      "Lake Manyara National Park",
      "Maasai Boma",
    ],
    price: "From €837 per person",
    image: "/images/wildlife/wildebeest-crossing.jpeg",
  },
  {
    title: "4 Days | De Serengeti Ervaring",
    location: "Serengeti National Park",
    description:
      "Prepare for an unforgettable journey to the heart of Serengeti National Park. Every moment of this tour promises an incredible experience, from spotting wildlife to enjoying the vast landscapes.",
    highlights: [
      "Serengeti National Park",
      "Walking Safari",
      "Domestic Flight",
      "Game Drive",
      "Safari Jeep with Pop-up Roof",
    ],
    price: "From €1,810 per person",
    image: "/images/wildlife/safari-zebras.jpeg",
  },
  {
    title: "4 Days | Classic Drive Serengeti",
    location: "Northern Tanzania",
    description:
      "Are you ready for an extraordinary journey through the wild landscapes of Northern Tanzania? This tour is a classic safari drive through some of the best parks in the region.",
    highlights: [
      "Serengeti National Park",
      "Tarangire National Park",
      "Game Drive",
      "Ngorongoro Crater",
      "Safari Jeep with Pop-up Roof",
    ],
    price: "From €1,240 per person",
    image: "/images/wildlife/african-sunset.jpeg",
  },
  {
    title: "6 Days | Serengeti en meer | Shared Safari",
    location: "Northern Tanzania",
    description:
      "If you dream of seeing elephants, lions, giraffes, and maybe even a leopard, this shared safari is for you. Travel with a group and experience the thrill of the wild together.",
    highlights: [
      "Serengeti National Park",
      "Tarangire National Park",
      "Game Drive",
      "Ngorongoro Crater",
      "Safari Jeep with Pop-up Roof",
    ],
    price: "From €1,550 per person",
    image: "/images/wildlife/zebras-closeup.jpeg",
  },
  {
    title: "4 Days | Noord Tanzania | Shared Safari",
    location: "Northern Tanzania",
    description:
      "This shared safari is perfect for those who have a long-held dream of spotting incredible wildlife. Join a group and explore the best of Northern Tanzania.",
    highlights: [
      "Safari Jeep with Pop-up Roof",
      "Tarangire National Park",
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
    ],
    price: "From €895 per person",
    image: "/images/wildlife/giraffe-portrait.jpeg",
  },
  {
    title: "3 Days | Classic Drive Safari",
    location: "Northern Tanzania",
    description:
      "Discover three unique wildlife parks in Northern Tanzania in just three days. Start your adventure at Tarangire National Park and see what the region has to offer in a short, action-packed trip.",
    highlights: [
      "Safari Jeep with Pop-up Roof",
      "Tarangire National Park",
      "Game Drive",
      "Lake Manyara National Park",
      "Ngorongoro Crater",
    ],
    price: "From €617 per person",
    image: "/images/wildlife/colorful-bird.jpeg",
  },
  {
    title: "2 Days | Tarangire & Ngorongoro Krater",
    location: "Northern Tanzania",
    description:
      "Experience an exciting two-day safari adventure in Tarangire National Park and the famous Ngorongoro Crater. It's the perfect option for a quick, impactful safari trip.",
    highlights: ["Tarangire National Park", "Game Drive", "Ngorongoro Crater", "Safari Jeep with Pop-up Roof"],
    price: "From €427 per person",
    image: "/images/wildlife/aerial-landscape.jpeg",
  },
  {
    title: "13 Days | Zanzibar & Selous Game Reserve",
    location: "Zanzibar & Selous",
    description:
      "Are you ready for this impressive 13-day tour? This is a favorite package that combines the beaches of Zanzibar with the incredible wildlife of Selous Game Reserve.",
    highlights: [
      "Selous Game Reserve/Nyerere National Park",
      "Stone Town",
      "Zanzibar",
      "Boat Safari",
      "Bush Walk",
      "Game Drive",
    ],
    price: "From €1,920 per person",
    image: "/images/wildlife/elephants-waterhole.jpeg",
  },
  {
    title: "10 Days | Zanzibar & Selous Game Reserve",
    location: "Zanzibar & Selous",
    description:
      "During this 10-day dream holiday, you will have unforgettable experiences that you'll cherish forever. The tour expertly blends a relaxing beach getaway with a thrilling safari.",
    highlights: [
      "Domestic Flight",
      "Boat Safari",
      "Bush Walk",
      "Game Drive",
      "Selous Game Reserve/Nyerere National Park",
      "Stone Town",
    ],
    price: "From €1,582 per person",
    image: "/images/wildlife/lion-grassland.jpeg",
  },
  {
    title: "7 Days | Zanzibar & Selous Game Reserve",
    location: "Zanzibar & Selous",
    description:
      "Embark on an unforgettable tour that starts in the historic Stone Town, continues through the amazing Selous Game Reserve, and ends with some well-deserved relaxation on the beaches of Zanzibar.",
    highlights: [
      "Domestic Flight",
      "Game Drive",
      "Selous Game Reserve/Nyerere National Park",
      "Stone Town",
      "Zanzibar",
    ],
    price: "From €1,192 per person",
    image: "/images/wildlife/safari-guide-vehicle.jpeg",
  },
  {
    title: "4 Days in Selous Game Reserve",
    location: "Selous Game Reserve",
    description:
      "This captivating safari trip promises a thrilling encounter with wild animals and unforgettable experiences in the Selous Game Reserve. It's an ideal short getaway for nature lovers.",
    highlights: [
      "Domestic Flight",
      "Boat Safari",
      "Bush Walk",
      "Game Drive",
      "Selous Game Reserve/Nyerere National Park",
    ],
    price: "From €1,126 per person",
    image: "/images/wildlife/safari-salt-lake.jpeg",
  },
  {
    title: "3 Days in Selous Game Reserve",
    location: "Selous Game Reserve",
    description:
      "This short but extraordinary 3-day safari in Selous Game Reserve/Nyerere National Park is a perfect way to experience the wild in a limited amount of time.",
    highlights: [
      "Domestic Flight",
      "Boat Safari",
      "Bush Walk",
      "Game Drive",
      "Selous Game Reserve/Nyerere National Park",
    ],
    price: "From €897 per person",
    image: "/images/wildlife/elephant-encounter.jpeg",
  },
  {
    title: "2 Days in Selous Game Reserve",
    location: "Selous Game Reserve",
    description:
      "Experience an unforgettable two-day safari adventure in the Selous Game Reserve/Nyerere National Park. This tour is packed with activities to make the most of your short stay.",
    highlights: ["Domestic Flight", "Game Drive", "Open Safari Jeep", "Selous Game Reserve/Nyerere National Park"],
    price: "From €729 per person",
    image: "/images/wildlife/lioness-tree.jpeg",
  },
  {
    title: "Day safari in Selous Game Reserve",
    location: "Selous Game Reserve",
    description:
      "Want to enhance your stay in Zanzibar with a true Tanzanian safari experience? Book this day trip for a thrilling encounter with the wild and a break from the beach.",
    highlights: ["Domestic Flight", "Game Drive", "Open Safari Jeep", "Selous Game Reserve/Nyerere National Park"],
    price: "From €557 per person",
    image: "/images/wildlife/safari-baobab.jpeg",
  },
  {
    title: "9 Days | Group Tour February/March 2026 | Northern Tanzania",
    location: "Northern Tanzania",
    description:
      "Would you like to go on a safari in Tanzania and share this experience with others? This group tour is a fantastic way to meet new people and explore the wilderness together.",
    highlights: [
      "Ngorongoro Crater",
      "Night Game Drive",
      "Serengeti National Park",
      "Stone Town",
      "Tarangire National Park",
    ],
    price: "From €3,650 per person",
    image: "/images/wildlife/baboons-road.jpeg",
  },
  {
    title: "9 Days | Group Tour February 2026 | Northern Tanzania",
    location: "Northern Tanzania",
    description:
      "This shared safari experience is perfect if you want to be part of a group while exploring the incredible national parks of Northern Tanzania.",
    highlights: [
      "Ngorongoro Crater",
      "Night Game Drive",
      "Serengeti National Park",
      "Stone Town",
      "Tarangire National Park",
    ],
    price: "From €4,095 per person",
    image: "/images/wildlife/lion-grassland.jpeg",
  },
]

export default function ToursClient() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#473a30] to-[#ec6417] text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">Safari Tours</h1>
            <p className="text-xl md:text-2xl mb-8 text-balance leading-relaxed">
              Discover some of our most prestigious safari experiences across Tanzania
            </p>
          </div>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            {allTours.map((tour, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image Container - Now with unique images only */}
                <div className="w-full lg:w-1/2">
                  <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200">
                    {tour.image ? (
                      <img
                        src={tour.image || "/placeholder.svg"}
                        alt={`${tour.title} - Wildlife Safari`}
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full bg-gray-100 flex items-center justify-center">
                        <span className="text-gray-400">Image coming soon</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <div>
                    <h2 className="text-3xl font-bold text-[#473a30] mb-2">{tour.title}</h2>
                    <div className="flex items-center text-[#f9b804] mb-4">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span className="text-sm">{tour.location}</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{tour.description}</p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-[#473a30] mb-3">Tour Highlights</h3>
                    <div className="grid grid-cols-1 gap-2">
                      {tour.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center">
                          <div className="w-2 h-2 bg-[#f9b804] rounded-full mr-3"></div>
                          <span className="text-gray-700">{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4">
                    <div>
                      <p className="text-2xl font-bold text-[#473a30]">{tour.price}</p>
                    </div>
                    <Button
                      className="bg-[#f9b804] hover:bg-[#ec6417] text-white px-8 py-3 rounded-full font-semibold"
                      onClick={() => window.open("https://wa.me/255123456789", "_blank")}
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
