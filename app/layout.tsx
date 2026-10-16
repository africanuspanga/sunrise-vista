import type React from "react"
import type { Metadata } from "next"
import { Fraunces, Plus_Jakarta_Sans } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { ChatWidget } from "@/components/chat/chat-widget"
import { site } from "@/lib/site"

const display = Fraunces({ subsets: ["latin"], variable: "--font-display", display: "swap" })
const body = Plus_Jakarta_Sans({ subsets: ["latin"], variable: "--font-body", display: "swap" })

export const metadata: Metadata = {
  title: {
    default: "Sunrise Vista Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
    template: "%s | Sunrise Vista Safaris",
  },
  description:
    "Experience unforgettable Tanzania safari adventures with Sunrise Vista Safaris. Expert guides, Kilimanjaro climbs, and authentic African wildlife tours across Serengeti, Ngorongoro Crater, and Zanzibar.",
  keywords:
    "Tanzania safari, Serengeti tours, Ngorongoro Crater, Zanzibar holidays, African safari, wildlife tours, Big Five safari, Great Migration, Tanzania travel, safari packages",
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(site.url),
  openGraph: {
    title: "Sunrise Vista Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
    description: "Experience unforgettable Tanzania safari adventures with expert guides and luxury accommodations.",
    url: site.url,
    siteName: site.name,
    images: [{ url: site.logo, width: 640, height: 640, alt: site.name }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sunrise Vista Safaris - Tanzania Safari Tours",
    description: "Experience authentic Tanzania safari adventures with expert guides and luxury accommodations.",
    images: [site.logo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TravelAgency",
  name: site.name,
  description: "Tanzania safari tours and wildlife adventures",
  url: site.url,
  logo: `${site.url}${site.logo}`,
  telephone: site.phoneHref,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sakina",
    addressLocality: "Arusha",
    addressCountry: "Tanzania",
  },
  areaServed: [
    { "@type": "Place", name: "Tanzania" },
    { "@type": "Place", name: "Serengeti National Park" },
    { "@type": "Place", name: "Ngorongoro Crater" },
    { "@type": "Place", name: "Zanzibar" },
  ],
  serviceType: "Safari Tours",
  priceRange: "$$$",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="overflow-x-clip bg-cream text-ink">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
        <ChatWidget />
      </body>
    </html>
  )
}
