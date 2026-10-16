// Single source of truth for brand + contact details.
// Every page reads contact details from here.
export const site = {
  name: "Sunrise Vista Safaris",
  shortName: "Sunrise Vista",
  tagline: "Tailor-made Tanzania safaris, from first light to last.",
  url: "https://www.sunrisevistasafaris.com",
  domain: "sunrisevistasafaris.com",
  logo: "/images/sunrise-vista-logo.png",

  email: "info@sunrisevistasafaris.com",
  phoneDisplay: "+255 797 576 552",
  phoneHref: "+255797576552",
  whatsappNumber: "255797576552", // international format, no +
  address: "Sakina, Arusha, Tanzania",
  officeHours: "Mon – Sat, 8:00 – 18:00 EAT",

  socials: {
    facebook: "", // e.g. https://www.facebook.com/sunrisevistasafaris
    instagram: "",
    tiktok: "",
    youtube: "",
  },
} as const

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${site.whatsappNumber}`
  return message ? `${base}?text=${encodeURIComponent(message)}` : base
}

export function bookingLink(item: string, kind: "safari tour" | "Kilimanjaro climb" = "safari tour") {
  return whatsappLink(`Hi Sunrise Vista! I'm interested in booking the ${item} ${kind}. Please send me more details.`)
}
