import type { Metadata } from "next"
import { PageHero } from "@/components/site/page-hero"
import { site } from "@/lib/site"
import TripBuilderClient from "./TripBuilderClient"

export const metadata: Metadata = {
  title: "Custom Trip Builder - Design Your Tanzania Safari",
  description:
    "Build your own Tanzania trip in minutes: combine safaris, Kilimanjaro and Zanzibar, download your draft itinerary as a PDF and send it to our team.",
  alternates: { canonical: "/trip-builder" },
  openGraph: {
    title: "Custom Trip Builder | Sunrise Vista Safaris",
    description: "Design your own safari, Kilimanjaro climb or Zanzibar escape and get a tailored quote.",
    url: `${site.url}/trip-builder`,
    siteName: site.name,
    type: "website",
  },
}

export default function TripBuilderPage() {
  return (
    <>
      <PageHero
        crumb="Trip Builder"
        eyebrow="Tailor-made in minutes"
        title="Build Your Custom Trip"
        subtitle="Mix safaris, Kilimanjaro and Zanzibar, choose your style and get an instant draft itinerary — then send it to us for a quote."
        image="/images/wildlife/safari-vehicle-elephant.jpeg"
        imageAlt="Safari vehicle beside an elephant"
      />
      <TripBuilderClient />
    </>
  )
}
