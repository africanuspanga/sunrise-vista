import type { Tour } from "./tours"

const BLOB = "https://hebbkx1anhila5yf.public.blob.vercel-storage.com"

export const heroSlides = [
  { image: "/images/wildlife/african-sunset.jpeg", alt: "Acacia trees silhouetted against a Tanzanian sunrise" },
  {
    image: `${BLOB}/closeup-shot-african-leopard.jpg-eNNYy3qVkR8shzkdRn2FsJxxwGRzfw.jpeg`,
    alt: "African leopard in natural habitat, Tanzania",
  },
  { image: "/images/wildlife/lion-grassland.jpeg", alt: "Male lion in golden grassland at dawn" },
]

// Homepage "Popular Safaris & Tours" — titles and copy carried over unchanged.
export type FeaturedTour = Pick<Tour, "title" | "description" | "image"> & {
  tag: string
  days: string
  group: string
}

export const featuredTours: FeaturedTour[] = [
  {
    title: "15 Days | Northern Tanzania & Zanzibar",
    description: "Ultimate Tanzania experience combining wildlife-rich northern parks with stunning Zanzibar beaches.",
    image: "/images/wildlife/elephant-tusks.jpeg",
    tag: "Premium",
    days: "15 Days",
    group: "2-8 people",
  },
  {
    title: "11 Days | Wildlife & White Beaches",
    description: "Perfect blend of safari adventure and beach relaxation in northern Tanzania and Zanzibar.",
    image: "/images/wildlife/lioness-drinking.jpeg",
    tag: "Popular",
    days: "11 Days",
    group: "2-8 people",
  },
  {
    title: "13 Days | Complete Northern Circuit",
    description: "Ultimate safari experience through the heart of African wilderness and all major northern parks.",
    image: "/images/wildlife/rhino-habitat.jpeg",
    tag: "Adventure",
    days: "13 Days",
    group: "2-8 people",
  },
  {
    title: "8 Days | Great Migration Safari",
    description: "Witness the spectacular wildebeest migration across the Serengeti plains with expert guides.",
    image: "/images/wildlife/safari-guide-elephants.jpeg",
    tag: "Seasonal",
    days: "8 Days",
    group: "2-6 people",
  },
  {
    title: "6 Days | Balloon Safari Adventure",
    description: "Experience Tanzania from above with hot air balloon safaris over the Serengeti and Ngorongoro.",
    image: "/images/wildlife/giraffes-balloon.jpeg",
    tag: "Unique",
    days: "6 Days",
    group: "2-4 people",
  },
  {
    title: "10 Days | Photography Safari",
    description: "Specialized photography safari with professional guides and optimal timing for wildlife shots.",
    image: "/images/wildlife/tourist-elephants.jpeg",
    tag: "Photography",
    days: "10 Days",
    group: "2-6 people",
  },
]

export const destinations = [
  {
    name: "Serengeti",
    blurb: "Endless plains hosting the Great Migration and home to Africa's Big Five in their natural habitat.",
    tag: "Migration",
    href: "/serengeti",
    image: `${BLOB}/group-zebras-grazing-tsavo-east-national-park-kenya-africa.jpg-Jzwsnc0NAHIimdxoBGBLJwi0rdWdMo.jpeg`,
  },
  {
    name: "Ngorongoro",
    blurb: "UNESCO World Heritage Site with the world's largest intact volcanic caldera and densest wildlife concentration.",
    tag: "Big Five",
    href: "/safaris/northern-circuit",
    image: `${BLOB}/istockphoto-912964222-612x612.jpg-5cTa2QWncRam7Ct6NRt5zfI5LnwuTi.jpeg`,
  },
  {
    name: "Tarangire",
    blurb: "Land of giants with massive baobab trees and Tanzania's largest elephant population.",
    tag: "Elephants",
    href: "/safaris/northern-circuit",
    image: `${BLOB}/istockphoto-1215494886-612x612.jpg-SfFg26BOdaKUexxTsH8xP8yfNQmoPk.jpeg`,
  },
  {
    name: "Zanzibar",
    blurb: "Pristine beaches, Stone Town heritage and spice tours — the perfect end to your safari.",
    tag: "Beach",
    href: "/zanzibar",
    image: `${BLOB}/Screenshot%202025-08-25%20at%2012.01.20-LUghMIz0I6vS6hIEGLM989Q8ra5pcN.png`,
  },
  {
    name: "Lake Manyara",
    blurb: "Famous for tree-climbing lions, large elephant herds, and spectacular flamingo flocks on the lake.",
    tag: "Tree Lions",
    href: "/safaris/northern-circuit",
    image: `${BLOB}/istockphoto-1454110954-612x612.jpg-B8dK4EAay1Cx8GbNl8jDAwoF3z5Hox.jpeg`,
  },
  {
    name: "Lake Natron",
    blurb: "Surreal alkaline lake with red-pink hues, world's main flamingo breeding site near active volcano.",
    tag: "Flamingos",
    href: "/safaris/northern-circuit",
    image: `${BLOB}/istockphoto-105495401-612x612.jpg-O5glKqDUE44v2xV4IGdZ1BZAez92jL.jpeg`,
  },
  {
    name: "Arusha NP",
    blurb: "Diverse landscapes from Mount Meru's slopes to Momella Lakes, perfect for day trips from Arusha.",
    tag: "Mount Meru",
    href: "/safaris/northern-circuit",
    image: `${BLOB}/istockphoto-156731319-612x612.jpg-27WZIGCVufWk5sXrM0NfgpcbQOfpMG.jpeg`,
  },
  {
    name: "Southern Circuit",
    blurb: "Mikumi, Ruaha, Nyerere and Saadani — Tanzania's remote, uncrowded wilderness.",
    tag: "Off the beaten path",
    href: "/safaris/southern-circuit",
    image: `${BLOB}/istockphoto-1035682726-612x612.jpg-QHtxclNms1WNzYB1zhnmuzjNLebbEV.jpeg`,
  },
]

export const experiences = [
  { name: "Big Five Safaris", image: "/images/wildlife/lion-pride.jpeg", href: "/tours" },
  { name: "Great Migration", image: "/images/wildlife/wildebeest-crossing.jpeg", href: "/serengeti" },
  { name: "Balloon Safaris", image: "/images/wildlife/giraffes-balloon.jpeg", href: "/tours" },
  { name: "Safari & Beach", image: `${BLOB}/dd.jpg-BPXiP5AYHBLL2qysabuk8ZiLN3mTI0.jpeg`, href: "/zanzibar" },
  { name: "Photography Safaris", image: "/images/wildlife/leopard-tree.png", href: "/tours" },
  { name: "Cultural Encounters", image: `${BLOB}/istockphoto-697396414-612x612.jpg-Y4Hd02YnoBBrw17MTTnpQa1G4zh124.jpeg`, href: "/about" },
  { name: "Boat & Walking Safaris", image: "/images/wildlife/hippos-water.jpeg", href: "/safaris/southern-circuit" },
  { name: "Shared Group Safaris", image: "/images/wildlife/safari-vehicle-elephant.jpeg", href: "/tours" },
]

export const bigFive = [
  { name: "Lion", image: `${BLOB}/istockphoto-468200710-612x612.jpg-sfNOaEba068X5EG3ZRLNPYKZmUffrN.jpeg` },
  { name: "Leopard", image: `${BLOB}/african-leopard-sitting-tree-looking-around-jungle.jpg-ZOqHQ0mPlvXJT1otR7BCuRTjVnHTJ1.jpeg` },
  { name: "Elephant", image: `${BLOB}/closeup-shot-cute-elephant-walking-dry-grass-wilderness.jpg-tLLzL8CxKaY9Uhccm6538ZHIRQKjdl.jpeg` },
  { name: "Buffalo", image: "/images/wildlife/buffalo-bird.jpeg" },
  { name: "Rhino", image: `${BLOB}/rhino-savannah-national-park-africa.jpg-NlswAiyfe9GsmKhphQQTKZpjorvZiF.jpeg` },
]

export const faqs = [
  {
    q: "What types of safaris do you offer?",
    a: "Private tailor-made safaris, shared group safaris, safari & Zanzibar beach combinations, hot air balloon safaris, photography safaris, and walking and boat safaris in the south. Every itinerary can be adjusted to your interests, dates and budget.",
  },
  {
    q: "Which destinations do you cover?",
    a: "The Northern Circuit (Serengeti, Ngorongoro Crater, Tarangire, Lake Manyara, Lake Natron and Arusha National Park), the Southern Circuit (Nyerere/Selous, Ruaha, Mikumi and Saadani) and the island of Zanzibar.",
  },
  {
    q: "What kind of accommodation can I expect?",
    a: "We work with handpicked lodges, tented camps and luxury glamping across the parks, plus beach resorts and boutique hotels in Zanzibar — from comfortable mid-range to premium luxury, matched to your style.",
  },
  {
    q: "Do I need a visa to visit Tanzania?",
    a: "Most visitors need a visa. We recommend applying for an e-visa through the official Tanzania Immigration portal well before you travel. Requirements differ by nationality, so always check the latest rules for your passport — we're happy to point you in the right direction.",
  },
  {
    q: "Do I need vaccinations before travelling?",
    a: "A yellow fever certificate is required if you arrive from, or transit through, a country with risk of yellow fever. Malaria prevention is strongly recommended for safari areas and Zanzibar. Please consult a travel clinic 6–8 weeks before departure for advice specific to you.",
  },
  {
    q: "What currency is used, and can I pay by card?",
    a: "The local currency is the Tanzanian Shilling (TZS), but US dollars are widely accepted in tourism — bring newer, undamaged notes. Cards are accepted at many lodges and hotels (sometimes with a surcharge), but carry some cash for tips and small purchases.",
  },
  {
    q: "When is the best time to go on safari?",
    a: "Tanzania is a year-round destination. June to October (dry season) offers excellent game viewing and the Mara River crossings; January to March is calving season in the southern Serengeti. Tell us what you'd love to see and we'll recommend the ideal dates.",
  },
]

// Organisations we operate alongside. Only list memberships/awards the company actually holds.
// TODO(client): add TATO membership, TripAdvisor, etc. here once confirmed.
export const partners = [
  { name: "Tanzania National Parks", short: "TANAPA" },
  { name: "Ngorongoro Conservation Area Authority", short: "NCAA" },
  { name: "Tanzania Tourist Board", short: "TTB" },
  { name: "Zanzibar Commission for Tourism", short: "ZCT" },
]

// ⚠️ SAMPLE CONTENT — these are placeholder reviews written for the design.
// Replace with real Sunrise Vista guest reviews and set REVIEWS_ARE_SAMPLES = false before launch.
export const REVIEWS_ARE_SAMPLES = true

export const reviews = [
  {
    title: "A dream safari from start to finish",
    text: "Every detail was taken care of. Our guide had an incredible eye for wildlife — we saw lions on our very first morning in the Serengeti and a leopard in a sausage tree the next day.",
    name: "Erik H.",
    from: "Norway",
    trip: "Serengeti & Ngorongoro",
  },
  {
    title: "Ngorongoro was unreal",
    text: "Descending into the crater at sunrise is something we'll never forget. Rhinos, elephants and hundreds of zebras in one morning. Thank you for the flawless planning!",
    name: "Sarah J.",
    from: "United States",
    trip: "Northern Circuit",
  },
  {
    title: "Perfect mix of safari and beach",
    text: "Six days in the parks, then Zanzibar to unwind. The lodges were beautiful and the transfers were seamless. Exactly the honeymoon we were hoping for.",
    name: "Anna M.",
    from: "Germany",
    trip: "Safari & Zanzibar",
  },
  {
    title: "A photographer's paradise",
    text: "Our guide knew exactly where to position the vehicle for the best light. I came home with the best wildlife images I have ever taken.",
    name: "Hiroshi T.",
    from: "Japan",
    trip: "Photography Safari",
  },
  {
    title: "Great with kids",
    text: "Travelling with two children can be stressful, but the team made it easy. Patient guides, safe vehicles and comfortable family tents.",
    name: "Claire D.",
    from: "France",
    trip: "Family Safari",
  },
  {
    title: "Tarangire's elephants stole the show",
    text: "Hundreds of elephants around the river and baobabs everywhere. Professional, friendly and genuinely passionate about Tanzania.",
    name: "Mark W.",
    from: "United Kingdom",
    trip: "Tarangire & Manyara",
  },
  {
    title: "Balloon over the Serengeti",
    text: "Floating over the plains at sunrise was the highlight of our lives. Champagne breakfast in the bush afterwards was the cherry on top.",
    name: "Lucia R.",
    from: "Italy",
    trip: "Balloon Safari",
  },
  {
    title: "Honest and well organised",
    text: "Clear pricing, quick replies on WhatsApp and no surprises on the ground. We already recommended Sunrise Vista to friends.",
    name: "Daan V.",
    from: "Netherlands",
    trip: "Classic Drive Safari",
  },
  {
    title: "Off the beaten path in Nyerere",
    text: "The boat safari on the Rufiji River was magical — hippos, crocodiles and elephants drinking at the water's edge with no other vehicles around.",
    name: "Priya S.",
    from: "Australia",
    trip: "Southern Circuit",
  },
]
