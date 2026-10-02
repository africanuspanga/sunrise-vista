import type { Metadata } from "next"
import ToursClient from "./ToursClient"

export const metadata: Metadata = {
  title: "Tanzania Safari Tours - Northern Circuit & Zanzibar Packages",
  description:
    "Discover our comprehensive Tanzania safari tour packages. From 2-day adventures to 15-day complete experiences including Northern Circuit, Serengeti, Ngorongoro Crater, and Zanzibar beach holidays. Expert guides, luxury accommodations, and unforgettable wildlife encounters.",
  alternates: { canonical: "/tours" },
}

export default function ToursPage() {
  return <ToursClient />
}
