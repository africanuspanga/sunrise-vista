import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kachiki Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
  description:
    "Experience unforgettable Tanzania safari adventures with Kachiki Safaris. Expert guides, luxury accommodations, and authentic African wildlife tours across Serengeti, Ngorongoro Crater, and Zanzibar.",
  keywords:
    "Tanzania safari, Serengeti tours, Ngorongoro Crater, Zanzibar holidays, African safari, wildlife tours, Big Five safari, Great Migration, Tanzania travel, safari packages",
  authors: [{ name: "Kachiki Safaris" }],
  creator: "Kachiki Safaris",
  publisher: "Kachiki Safaris",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.kachikisafaris.com"),
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Kachiki Safaris - Tanzania Safari Tours | Serengeti, Ngorongoro & Zanzibar",
    description: "Experience unforgettable Tanzania safari adventures with expert guides and luxury accommodations.",
    url: "https://www.kachikisafaris.com",
    siteName: "Kachiki Safaris",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Kachiki Safaris - Tanzania Wildlife Safari Tours",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kachiki Safaris - Tanzania Safari Tours",
    description: "Experience authentic Tanzania safari adventures with expert guides and luxury accommodations.",
    images: ["/twitter-image.jpg"],
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
  verification: {
    google: "your-google-verification-code",
    // Add other verification codes as needed
  },
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://www.kachikisafaris.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "TravelAgency",
              name: "Kachiki Safaris",
              description: "Tanzania safari tours and wildlife adventures",
              url: "https://www.kachikisafaris.com",
              telephone: "+255762756046",
              email: "info@kachikisafaris.com",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Arusha",
                addressCountry: "Tanzania",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-3.3869",
                longitude: "36.6830",
              },
              sameAs: ["https://wa.me/255762756046"],
              areaServed: [
                {
                  "@type": "Place",
                  name: "Tanzania",
                },
                {
                  "@type": "Place",
                  name: "Serengeti National Park",
                },
                {
                  "@type": "Place",
                  name: "Ngorongoro Crater",
                },
                {
                  "@type": "Place",
                  name: "Zanzibar",
                },
              ],
              serviceType: "Safari Tours",
              priceRange: "$$$",
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
