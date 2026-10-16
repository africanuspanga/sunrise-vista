import type { MetadataRoute } from "next"
import { site } from "@/lib/site"
import { kiliRoutes } from "@/lib/data/kilimanjaro"

export const dynamic = "force-static"

const routes = [
  "",
  "/tours",
  "/kilimanjaro",
  ...kiliRoutes.map((r) => `/kilimanjaro/${r.slug}`),
  "/trip-builder",
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
