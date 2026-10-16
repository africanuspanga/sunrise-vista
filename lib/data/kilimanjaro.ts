// Kilimanjaro trekking routes — itineraries, inclusions and group pricing.
const img = (name: string) => `/images/kilimanjaro/${name}`

export type KiliDay = {
  day: number
  title: string
  description: string
  altitude?: string
  distance?: string
  time?: string
  image?: string
}

export type KiliPriceTier = { pax: string; price: number }

export type KiliRoute = {
  slug: string
  name: string
  nickname: string
  days: number
  difficulty: "Moderate" | "Moderate–Challenging" | "Challenging" | "Very Challenging"
  accommodation: "Huts" | "Camping"
  summary: string
  overview: string[]
  bestFor: string
  heroImage: string
  cardImage: string
  mapImage?: string
  itinerary: KiliDay[]
  included: string[]
  notIncluded: string[]
  pricing: KiliPriceTier[]
}

const notIncluded = [
  "Personal mountain gear",
  "Meals outside the regular itinerary",
  "Tips for guides and porters",
  "Airfares and airport taxes",
  "Double room supplement for hotel",
  "International visas & medical/travel insurance",
]

const included = (gate: string, days: number, route: string, stay = "Camping accommodation while trekking") => [
  `2 transfers between Moshi and ${gate}`,
  "3 meals per day while trekking (veg / non-veg)",
  `${days} days Kilimanjaro trek on the ${route}`,
  stay,
  "Pre/post nights B&B at Zebra Hotel or equivalent",
  "All park entrance fees and government levies",
  "Professional, licensed mountain guides, cook and porters",
  "Summit certificate",
]

const tiers = (one: number, two: number, three: number, four: number): KiliPriceTier[] => [
  { pax: "1 person", price: one },
  { pax: "2 people", price: two },
  { pax: "3 people", price: three },
  { pax: "4+ people", price: four },
]

export const kiliRoutes: KiliRoute[] = [
  {
    slug: "machame",
    name: "Machame Route",
    nickname: "The Whiskey Route",
    days: 7,
    difficulty: "Moderate–Challenging",
    accommodation: "Camping",
    summary:
      "Steeper and more challenging with excellent acclimatization. The climb-high, sleep-low profile offers spectacular views throughout.",
    overview: [
      "The Machame route is famously known as the Whiskey route. It is steeper and more challenging than Marangu but offers much better acclimatization thanks to its climb-high, sleep-low topography.",
      "It is one of the most popular routes on the mountain for its stunning scenery and excellent success rates — rainforest, moorland, alpine desert and glaciers all in one week.",
    ],
    bestFor: "Fit first-timers who want scenery and a strong summit chance",
    heroImage: img("machame-hut-camps.jpg"),
    cardImage: img("kilimanjaro-sunset-hiker.jpg"),
    mapImage: img("machame-route-map.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Machame Gate to Machame Camp",
        altitude: "1,800m → 3,000m",
        time: "5–7 hours",
        description:
          "After registering at Machame Gate, trek through lush montane rainforest alive with colobus monkeys and birdsong to your first camp at the forest edge.",
        image: img("machame-gate.jpg"),
      },
      {
        day: 2,
        title: "Machame Camp to Shira 2 Camp",
        altitude: "3,000m → 3,850m",
        time: "4–6 hours",
        description:
          "Climb steep ridges out of the forest into giant heather and moorland, arriving on the Shira Plateau with stunning views of Kibo and the plains below.",
        image: img("shira-camp.jpg"),
      },
      {
        day: 3,
        title: "Shira 2 to Lava Tower to Barranco Camp",
        altitude: "3,850m → 4,630m → 3,960m",
        time: "6–8 hours",
        description:
          "The key acclimatization day: climb high to the 4,630m Lava Tower, then descend to sleep in the dramatic Barranco Valley beneath the Breach Wall.",
        image: img("barranco-camp.jpg"),
      },
      {
        day: 4,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3,960m → 3,995m",
        time: "4–5 hours",
        description:
          "Scramble up the famous Barranco Wall — non-technical but thrilling — then traverse valleys and ridges to Karanga Camp, the last water point before the summit.",
        image: img("karanga-camp.jpg"),
      },
      {
        day: 5,
        title: "Karanga Camp to Barafu Camp",
        altitude: "3,995m → 4,673m",
        time: "3–4 hours",
        description:
          "A short climb through stark alpine desert to Barafu base camp. Rest, hydrate and prepare for the midnight summit push with an early dinner.",
        image: img("machame-hut-camps.jpg"),
      },
      {
        day: 6,
        title: "Barafu Camp to Uhuru Peak, then Mweka Camp",
        altitude: "4,673m → 5,895m → 3,100m",
        time: "12–14 hours",
        description:
          "Set off around midnight, reaching Stella Point on the crater rim at dawn and Uhuru Peak — the Roof of Africa — soon after. Celebrate, then descend to Mweka Camp.",
        image: img("uhuru-peak.jpg"),
      },
      {
        day: 7,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3,100m → 1,640m",
        time: "3–4 hours",
        description:
          "A final descent through the rainforest to Mweka Gate, where you collect your summit certificate before transferring back to Moshi to celebrate.",
        image: img("mweka-camp.jpg"),
      },
    ],
    included: included("Machame Gate", 7, "Machame Route"),
    notIncluded,
    pricing: tiers(2589, 2104, 1942, 1862),
  },
  {
    slug: "marangu",
    name: "Marangu Route",
    nickname: "The Coca-Cola Route",
    days: 6,
    difficulty: "Moderate",
    accommodation: "Huts",
    summary:
      "The oldest and most established path, with hut accommodation. Ideal for a classic climb without sleeping in tents.",
    overview: [
      "The Marangu route is the oldest and most established path on Kilimanjaro, and the only route that offers hut accommodation instead of camping — ideal if you want a classic experience without sleeping in tents.",
      "It approaches from the south-east and uses the same path for ascent and descent. While often considered the gentlest gradient, proper acclimatization is still essential, which is why our itinerary includes an extra day at Horombo.",
    ],
    bestFor: "Climbers who prefer beds in huts over tents",
    heroImage: img("horombo-huts.jpg"),
    cardImage: img("kilimanjaro-arms-open.jpg"),
    mapImage: img("marangu-route-map.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Marangu Gate to Mandara Hut",
        altitude: "1,860m → 2,720m",
        time: "4–5 hours",
        description:
          "Begin at Marangu Gate and walk through lush rainforest with moss-draped trees, waterfalls and blue monkeys to the A-frame huts of Mandara.",
        image: img("marangu-gate.jpg"),
      },
      {
        day: 2,
        title: "Mandara Hut to Horombo Hut",
        altitude: "2,720m → 3,720m",
        time: "6–7 hours",
        description:
          "Emerge from the forest onto open moorland dotted with giant groundsels and lobelias, with your first sweeping views of Kibo and Mawenzi.",
        image: img("mandara-huts.jpg"),
      },
      {
        day: 3,
        title: "Acclimatization Day at Horombo Hut",
        altitude: "3,720m → 4,000m → 3,720m",
        time: "3–4 hours",
        description:
          "A vital rest-and-adjust day. Hike up to Zebra Rocks or towards Mawenzi Hut for altitude, then return to Horombo to sleep lower.",
        image: img("horombo-huts.jpg"),
      },
      {
        day: 4,
        title: "Horombo Hut to Kibo Hut",
        altitude: "3,720m → 4,720m",
        time: "6–7 hours",
        description:
          "Cross the lunar landscape of the Saddle between Mawenzi and Kibo to reach Kibo Hut, your base for the summit. Early dinner and rest.",
        image: img("marangu-route-signboard.jpg"),
      },
      {
        day: 5,
        title: "Kibo Hut to Uhuru Peak, then Horombo Hut",
        altitude: "4,720m → 5,895m → 3,720m",
        time: "12–14 hours",
        description:
          "A midnight start up switchbacks to Gilman's Point on the crater rim, then along the rim to Uhuru Peak at sunrise. Descend all the way back to Horombo.",
        image: img("uhuru-peak-sign.jpg"),
      },
      {
        day: 6,
        title: "Horombo Hut to Marangu Gate",
        altitude: "3,720m → 1,860m",
        time: "5–6 hours",
        description:
          "Descend through moorland and forest to Marangu Gate for your certificate ceremony, then transfer back to Moshi.",
        image: img("mandara-huts.jpg"),
      },
    ],
    included: included("Marangu Gate", 6, "Marangu Route", "5 nights accommodation in mountain huts while trekking"),
    notIncluded,
    pricing: tiers(2349, 1864, 1702, 1622),
  },
  {
    slug: "lemosho",
    name: "Lemosho Route",
    nickname: "The Scenic Route",
    days: 8,
    difficulty: "Moderate–Challenging",
    accommodation: "Camping",
    summary:
      "Widely considered the most beautiful route, with a remote wilderness feel and excellent acclimatization over 8 days.",
    overview: [
      "Lemosho is widely considered the most beautiful route on Kilimanjaro. It starts on the western side of the mountain and offers a remote, wilderness feel for the first few days before joining the main trail.",
      "The 8-day duration is perfect for acclimatization, giving excellent summit success rates — the ideal balance of scenery, solitude and success.",
    ],
    bestFor: "Climbers who want the best scenery and acclimatization",
    heroImage: img("shira-1-camp.jpg"),
    cardImage: img("kilimanjaro-porters-sunrise.jpg"),
    mapImage: img("lemosho-route-map.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa (Big Tree) Camp",
        altitude: "2,100m → 2,650m",
        time: "3–4 hours",
        description:
          "Drive to Londorossi Gate on the western slopes, then trek through pristine, rarely-visited rainforest to Mti Mkubwa — 'Big Tree' camp.",
        image: img("londorossi-gate.jpg"),
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        altitude: "2,650m → 3,500m",
        time: "5–6 hours",
        description:
          "Leave the forest for heath and moorland, cresting the Shira Ridge before dropping onto the vast, ancient Shira caldera.",
        image: img("mti-mkubwa-camp.jpg"),
      },
      {
        day: 3,
        title: "Shira 1 to Shira 2 Camp",
        altitude: "3,500m → 3,850m",
        time: "4–5 hours",
        description:
          "An easy crossing of the high Shira Plateau, with Kibo's glaciers growing ever closer. Great acclimatization and big-sky views.",
        image: img("shira-1-camp.jpg"),
      },
      {
        day: 4,
        title: "Shira 2 to Lava Tower to Barranco Camp",
        altitude: "3,850m → 4,630m → 3,960m",
        time: "6–8 hours",
        description:
          "The classic climb-high, sleep-low day: up to the volcanic plug of Lava Tower, then down into the Barranco Valley among giant senecios.",
        image: img("barranco-camp.jpg"),
      },
      {
        day: 5,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3,960m → 3,995m",
        time: "4–5 hours",
        description:
          "Conquer the Barranco Wall, a fun hands-on scramble with huge views, then traverse to Karanga Camp in the afternoon.",
        image: img("karanga-camp.jpg"),
      },
      {
        day: 6,
        title: "Karanga Camp to Barafu Camp",
        altitude: "3,995m → 4,673m",
        time: "3–4 hours",
        description:
          "A short climb through alpine desert to Barafu base camp. Final briefing, gear check, early dinner and rest before the summit night.",
        image: img("shira-2-camp.jpg"),
      },
      {
        day: 7,
        title: "Barafu to Uhuru Peak, then Mweka Camp",
        altitude: "4,673m → 5,895m → 3,100m",
        time: "12–14 hours",
        description:
          "Start around midnight for Stella Point and Uhuru Peak at sunrise — the highest point in Africa. Celebrate, then descend to Mweka Camp.",
        image: img("uhuru-peak.jpg"),
      },
      {
        day: 8,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3,100m → 1,640m",
        time: "3–4 hours",
        description:
          "Descend through the rainforest to Mweka Gate for your summit certificate and a transfer back to Moshi.",
        image: img("mweka-camp.jpg"),
      },
    ],
    included: included("Londorossi Gate", 8, "Lemosho Route"),
    notIncluded,
    pricing: tiers(2829, 2344, 2182, 2102),
  },
  {
    slug: "rongai",
    name: "Rongai Route",
    nickname: "The Northern Approach",
    days: 7,
    difficulty: "Moderate",
    accommodation: "Camping",
    summary:
      "The only route from the north near the Kenyan border. Drier and quieter — the best choice in the rainy season.",
    overview: [
      "The Rongai route is the only path that approaches Kilimanjaro from the north, near the Kenyan border. It is drier and gentler, making it the best choice during the rainy season.",
      "You descend via the Marangu route, so you see both sides of the mountain. The northern approach offers unique perspectives, quiet trails and wildlife-viewing opportunities.",
    ],
    bestFor: "Rainy-season climbs and quieter trails",
    heroImage: img("second-cave.jpg"),
    cardImage: img("kilimanjaro-aerial-crater.jpg"),
    mapImage: img("rongai-route-map.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Rongai Gate to Simba Camp",
        altitude: "1,950m → 2,600m",
        time: "3–4 hours",
        description:
          "Drive around to the northern Rongai Gate and trek through farmland and pine forest into the rainforest edge, camping at Simba Camp.",
        image: img("rongai-gate-sign.jpg"),
      },
      {
        day: 2,
        title: "Simba Camp to Second Cave Camp",
        altitude: "2,600m → 3,450m",
        time: "3–4 hours",
        description:
          "A steady climb onto moorland with growing views of Kibo's snowy dome and the jagged peaks of Mawenzi.",
        image: img("simba-camp.jpg"),
      },
      {
        day: 3,
        title: "Second Cave to Kikelewa Camp",
        altitude: "3,450m → 3,600m",
        time: "3–4 hours",
        description:
          "A scenic wilderness trek across heath towards Mawenzi, arriving at the sheltered Kikelewa Caves.",
        image: img("second-cave.jpg"),
      },
      {
        day: 4,
        title: "Kikelewa Camp to Mawenzi Tarn Camp",
        altitude: "3,600m → 4,330m",
        time: "3–4 hours",
        description:
          "A short, steep climb to the beautiful tarn beneath Mawenzi's spires — a superb acclimatization stop. Optional afternoon hike higher.",
        image: img("mawenzi-tarn-camp.jpg"),
      },
      {
        day: 5,
        title: "Mawenzi Tarn to Kibo Hut",
        altitude: "4,330m → 4,720m",
        time: "5–6 hours",
        description:
          "Cross the high desert Saddle between Mawenzi and Kibo to Kibo Hut. Rest and prepare for the midnight summit attempt.",
        image: img("kikelewa-camp.jpg"),
      },
      {
        day: 6,
        title: "Kibo Hut to Uhuru Peak, then Horombo Hut",
        altitude: "4,720m → 5,895m → 3,720m",
        time: "12–14 hours",
        description:
          "Climb through the night to Gilman's Point and on to Uhuru Peak at sunrise, then descend to Horombo Hut on the Marangu side.",
        image: img("uhuru-peak-rongai.jpg"),
      },
      {
        day: 7,
        title: "Horombo Hut to Marangu Gate",
        altitude: "3,720m → 1,860m",
        time: "5–6 hours",
        description:
          "Final descent through moorland and forest to Marangu Gate, certificates, and transfer back to Moshi.",
        image: img("horombo-hut.jpg"),
      },
    ],
    included: included("Rongai Gate", 7, "Rongai Route"),
    notIncluded,
    pricing: tiers(2589, 2104, 1942, 1862),
  },
  {
    slug: "northern-circuit",
    name: "Northern Circuit",
    nickname: "The Grand Traverse",
    days: 9,
    difficulty: "Moderate",
    accommodation: "Camping",
    summary:
      "The longest route with near 360° views of the mountain and the highest success rate of any route.",
    overview: [
      "This is the ultimate Kilimanjaro experience. As the longest route, it circles the quiet northern slopes and offers nearly 360-degree views of the mountain and the plains of Kenya and Tanzania.",
      "It has the highest success rate of any route because the 9-day pace allows almost anyone to adjust to the altitude — perfect for those wanting the most complete Kilimanjaro experience in pristine wilderness.",
    ],
    bestFor: "Maximum summit success and solitude",
    heroImage: img("third-cave-camp.jpg"),
    cardImage: img("kilimanjaro-uhuru-peak.jpg"),
    mapImage: img("northern-circuit-route.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Londorossi Gate to Mti Mkubwa",
        altitude: "2,100m → 2,650m",
        time: "3–4 hours",
        description:
          "Register at the gate and begin your trek on the western approach through lush montane forest to your first camp.",
        image: img("londorossi-gate.jpg"),
      },
      {
        day: 2,
        title: "Mti Mkubwa to Shira 1 Camp",
        altitude: "2,650m → 3,500m",
        time: "5–6 hours",
        description:
          "Ascend to the Shira Plateau through the moorland zone, watching the vegetation change as you gain altitude.",
        image: img("shira-1-camp.jpg"),
      },
      {
        day: 3,
        title: "Shira 1 to Shira 2 Camp",
        altitude: "3,500m → 3,850m",
        time: "4–5 hours",
        description:
          "Explore the moorland plateau with stunning views, walking across the volcanic caldera with Kibo peak in sight.",
        image: img("shira-2-camp.jpg"),
      },
      {
        day: 4,
        title: "Shira 2 to Moir Hut",
        altitude: "3,850m → 4,200m",
        time: "5–7 hours",
        description:
          "Head north away from the crowds via Lava Tower into remote wilderness, enjoying solitude on this less-travelled section.",
        image: img("shira-camp.jpg"),
      },
      {
        day: 5,
        title: "Moir Hut to Buffalo Camp",
        altitude: "4,200m → 4,020m",
        time: "5–7 hours",
        description:
          "Explore the remote northern slopes with panoramic views of the mountain and the plains stretching into Kenya.",
        image: img("buffalo-camp.jpg"),
      },
      {
        day: 6,
        title: "Buffalo Camp to Third Cave Camp",
        altitude: "4,020m → 3,870m",
        time: "5–6 hours",
        description:
          "Continue along the northern circuit through alpine desert landscape, with dramatic sunsets over the plains.",
        image: img("third-cave-camp.jpg"),
      },
      {
        day: 7,
        title: "Third Cave to School Hut",
        altitude: "3,870m → 4,750m",
        time: "4–5 hours",
        description:
          "The final approach to base camp. Rest and prepare mentally and physically for the summit attempt.",
        image: img("second-cave.jpg"),
      },
      {
        day: 8,
        title: "School Hut to Uhuru Peak, then Mweka Camp",
        altitude: "4,750m → 5,895m → 3,100m",
        time: "12–14 hours",
        description:
          "Summit day! A midnight start to reach Uhuru Peak around sunrise, then descend to Mweka Camp to celebrate.",
        image: img("uhuru-peak-sign.jpg"),
      },
      {
        day: 9,
        title: "Descent to Mweka Gate",
        altitude: "3,100m → 1,640m",
        time: "3–4 hours",
        description:
          "Final descent through rainforest. Receive your summit certificate and celebrate your achievement back in Moshi.",
        image: img("mweka-camp.jpg"),
      },
    ],
    included: included("Londorossi Gate", 9, "Northern Circuit"),
    notIncluded,
    pricing: tiers(3069, 2584, 2422, 2342),
  },
  {
    slug: "umbwe",
    name: "Umbwe Route",
    nickname: "The Double Whiskey Route",
    days: 6,
    difficulty: "Very Challenging",
    accommodation: "Camping",
    summary:
      "The steepest, most direct route for experienced trekkers — steep ridges and scrambling before joining the southern circuit.",
    overview: [
      "Known as the “Double Whiskey” route, Umbwe is for experienced trekkers seeking a serious challenge. It features steep ridges and scrambling through rainforest and moorland before joining the southern circuit near the Barranco Wall.",
      "It is a direct, rapid ascent — one of the shorter options, but with a lower success rate because of the fast altitude gain. The trail is quiet, offering a solitary wilderness experience from pristine rainforest to alpine desert and glaciers.",
    ],
    bestFor: "Experienced, well-acclimatized hikers",
    heroImage: img("barranco-camp.jpg"),
    cardImage: img("umbwe-route.jpg"),
    itinerary: [
      {
        day: 1,
        title: "Umbwe Gate to Umbwe Cave Camp",
        altitude: "1,600m → 2,940m",
        distance: "10 km",
        time: "5–6 hours",
        description:
          "A steep, strenuous trek through rainforest along a narrow ridge between two deep valleys. The trail can be muddy and slippery; you camp near Umbwe Cave, a natural rock shelter.",
        image: img("kilimanjaro-day-hike.jpg"),
      },
      {
        day: 2,
        title: "Umbwe Cave Camp to Barranco Camp",
        altitude: "2,940m → 3,960m",
        distance: "6 km",
        time: "4–5 hours",
        description:
          "Forest thins into giant heather as you climb toward the Great Barranco Wall, with views of the Western Breach and southern ice fields.",
        image: img("barranco-camp.jpg"),
      },
      {
        day: 3,
        title: "Barranco Camp to Karanga Camp",
        altitude: "3,960m → 3,995m",
        distance: "5 km",
        time: "4–5 hours",
        description:
          "Conquer the Barranco Wall — a non-technical but exciting scramble — then descend into the Karanga Valley and climb to Karanga Camp.",
        image: img("karanga-camp.jpg"),
      },
      {
        day: 4,
        title: "Karanga Camp to Barafu Camp",
        altitude: "3,995m → 4,673m",
        distance: "4 km",
        time: "3–4 hours",
        description:
          "A short, steep climb through alpine desert to Barafu base camp. Rest, hydrate and prepare for the midnight summit attempt.",
        image: img("machame-hut-camps.jpg"),
      },
      {
        day: 5,
        title: "Barafu Camp to Uhuru Peak to Mweka Camp",
        altitude: "4,673m → 5,895m → 3,100m",
        distance: "17 km",
        time: "12–14 hours",
        description:
          "Climb through scree and switchbacks to Stella Point (5,756m), then along the crater rim to Uhuru Peak at 5,895m. Celebrate, then descend to Mweka Camp.",
        image: img("uhuru-peak-sign.jpg"),
      },
      {
        day: 6,
        title: "Mweka Camp to Mweka Gate",
        altitude: "3,100m → 1,640m",
        distance: "10 km",
        time: "3–4 hours",
        description:
          "Final descent through beautiful rainforest to Mweka Gate. Collect your certificate and transfer back to Moshi.",
        image: img("mweka-camp.jpg"),
      },
    ],
    included: included("Umbwe/Mweka Gates", 6, "Umbwe Route"),
    notIncluded,
    pricing: tiers(2835, 1660, 1502, 1452),
  },
]

export const kiliFacts = [
  { value: "5,895m", label: "Uhuru Peak (19,341ft)" },
  { value: "6", label: "Routes to the summit" },
  { value: "5 – 9", label: "Days on the mountain" },
  { value: "0", label: "Technical skills needed" },
]

export const kiliFaqs = [
  {
    q: "Do I need climbing experience?",
    a: "No. Kilimanjaro is a trek, not a technical climb. Most able-bodied people aged 10+ can hike it with preparation — we recommend at least a month of regular hiking or cardio training.",
  },
  {
    q: "Which route has the best success rate?",
    a: "Longer routes acclimatize better. The 9-day Northern Circuit and 8-day Lemosho have the highest success rates; Machame is a great 7-day balance.",
  },
  {
    q: "When is the best time to climb?",
    a: "The driest months are January–mid March and June–October. Rongai is the best choice in the rainy seasons as the northern slopes are drier.",
  },
  {
    q: "Can I combine a climb with a safari or Zanzibar?",
    a: "Absolutely — most of our climbers add a 2–5 day safari in the Northern Circuit or a beach break in Zanzibar afterwards. Use our trip builder or message us.",
  },
]

export function kiliRoute(slug: string) {
  return kiliRoutes.find((r) => r.slug === slug)
}

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`
