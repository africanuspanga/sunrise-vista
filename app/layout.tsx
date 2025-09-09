import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Kachiki Safaris - Discover Tanzania's Wild Beauty",
  description:
    "Experience unforgettable safaris across the Serengeti, Zanzibar, and beyond with Kachiki Safaris. Expert guides, tailor-made tours, and authentic African adventures.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  )
}
