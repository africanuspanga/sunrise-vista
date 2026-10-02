import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { TornEdge } from "./torn-edge"

type PageHeroProps = {
  eyebrow: string
  title: string
  subtitle?: string
  image: string
  imageAlt: string
  crumb: string
  children?: React.ReactNode
  edgeClassName?: string
}

export function PageHero({ eyebrow, title, subtitle, image, imageAlt, crumb, children, edgeClassName = "text-cream" }: PageHeroProps) {
  return (
    <section className="relative isolate edge-clip bg-bark-deep">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-10 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-bark-deep/90 via-bark-deep/60 to-bark-deep/20" />
      <div className="container mx-auto px-4 pb-24 pt-20 md:pb-32 md:pt-28">
        <nav aria-label="Breadcrumb" className="mb-6 flex items-center gap-1.5 text-sm text-white/70">
          <Link href="/" className="hover:text-sun">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-white">{crumb}</span>
        </nav>
        <p className="mb-4 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-sun">
          <span className="h-px w-10 bg-sun/70" />
          {eyebrow}
        </p>
        <h1 className="max-w-3xl font-serif text-4xl leading-[1.05] text-white md:text-6xl">{title}</h1>
        {subtitle && <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/85">{subtitle}</p>}
        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
      <TornEdge className={edgeClassName} />
    </section>
  )
}
