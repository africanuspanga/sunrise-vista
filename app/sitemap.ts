import type { MetadataRoute } from "next"
import { site } from "@/lib/site"

export const dynamic = "force-static"

const routes = [
  "",
  "/tours",
  "/accommodations",
  "/serengeti",
  "/safaris/northern-circuit",
  "/safaris/southern-circuit",
  "/zanzibar",
  "/about",
  "/contact",
]

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `${site.url}${route}/`,
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }))
}
