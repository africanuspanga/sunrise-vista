// Single source of truth for brand + contact details.
// TODO(client): the phone / WhatsApp / address / social values below are PLACEHOLDERS.
// Replace them with Sunrise Vista Safaris' real details before launch — every page reads from here.
export const site = {
  name: "Sunrise Vista Safaris",
  shortName: "Sunrise Vista",
  tagline: "Tailor-made Tanzania safaris, from first light to last.",
  url: "https://www.sunrisevistasafaris.com",
  domain: "sunrisevistasafaris.com",
  logo: "/images/sunrise-vista-logo.png",

  email: "info@sunrisevistasafaris.com",
  phoneDisplay: "+255 700 000 000", // PLACEHOLDER
  phoneHref: "+255700000000", // PLACEHOLDER
  whatsappNumber: "255700000000", // PLACEHOLDER (international format, no +)
  address: "Arusha, Tanzania", // PLACEHOLDER — add street/building when known
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

export function bookingLink(item: string, kind: "safari tour" | "accommodation" = "safari tour") {
  return whatsappLink(`Hi Sunrise Vista! I'm interested in booking the ${item} ${kind}. Please send me more details.`)
}
