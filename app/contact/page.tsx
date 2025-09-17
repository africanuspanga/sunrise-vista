import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - Kachiki Safaris",
  description: "Ready to plan your Tanzanian adventure? Get in touch with us today.",
}

export default function ContactPage() {
  return <ContactPageClient />
}
