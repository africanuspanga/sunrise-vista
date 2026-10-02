import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Ready to plan your Tanzanian adventure? Get in touch with Sunrise Vista Safaris today.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return <ContactPageClient />
}
