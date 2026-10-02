import Link from "next/link"
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Youtube } from "lucide-react"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { site, whatsappLink } from "@/lib/site"

const columns = [
  {
    title: "Useful Links",
    links: [
      { href: "/tours", label: "Tours & Safaris" },
      { href: "/accommodations", label: "Accommodation" },
      { href: "/about", label: "About Us" },
      { href: "/#faq", label: "FAQs" },
      { href: "/contact", label: "Contact Us" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { href: "/serengeti", label: "Serengeti" },
      { href: "/safaris/northern-circuit", label: "Northern Circuit" },
      { href: "/safaris/southern-circuit", label: "Southern Circuit" },
      { href: "/zanzibar", label: "Zanzibar" },
    ],
  },
  {
    title: "Safari Styles",
    links: [
      { href: "/tours", label: "Safari & Zanzibar" },
      { href: "/tours", label: "Big Five Safaris" },
      { href: "/serengeti", label: "Great Migration" },
      { href: "/tours", label: "Group & Shared Safaris" },
      { href: "/tours", label: "Short Safaris" },
    ],
  },
]

const socials = [
  { href: site.socials.facebook, label: "Facebook", Icon: Facebook },
  { href: site.socials.instagram, label: "Instagram", Icon: Instagram },
  { href: site.socials.youtube, label: "YouTube", Icon: Youtube },
].filter((s) => s.href)

export function Footer() {
  return (
    <footer>
      {/* Plan-your-safari card overlapping the footer */}
      <div className="relative bg-cream pt-6">
        <div className="container relative z-20 mx-auto -mb-40 px-4">
          <div className="relative overflow-hidden rounded-3xl bg-white shadow-[0_30px_80px_-40px_rgba(43,15,14,0.6)] ring-1 ring-line">
            <div className="grid gap-10 p-8 pb-36 md:grid-cols-[1fr_auto] md:p-12 md:pb-40">
              <div>
                <h2 className="font-serif text-3xl leading-tight text-bark md:text-[2.6rem]">
                  We&apos;re here to help you plan your
                  <span className="block italic text-ember">Perfect Safari Experience</span>
                </h2>
                <div className="mt-7 flex flex-wrap gap-3">
                  <Link href="/contact" className={pill.sun}>
                    Plan Your Safari Today
                  </Link>
                  <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={pill.outlineDark}>
                    <MessageCircle className="h-4 w-4" />
                    Chat on WhatsApp
                  </a>
                </div>
                <ul className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-muted-ink">
                  <li>✦ Private & tailor-made</li>
                  <li>✦ Local Tanzanian guides</li>
                  <li>✦ Transparent pricing</li>
                </ul>
              </div>
              <div className="hidden items-center gap-6 border-l border-line pl-10 md:flex">
                <img src={site.logo} alt={site.name} className="h-40 w-40 rounded-full" />
              </div>
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-36">
              <img
                src="/images/wildlife/zebras-grazing.jpeg"
                alt=""
                className="h-full w-full object-cover object-[50%_60%] opacity-40 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-white via-white/40 to-transparent" />
            </div>
          </div>
        </div>
        <TornEdge className="text-bark-deep" variant={1} />
        <div className="h-24 md:h-28" />
      </div>

      <div className="bg-bark-deep pt-36 text-white/80">
        <div className="container mx-auto px-4">
          {/* Contact strip */}
          <div className="grid gap-6 border-b border-white/10 pb-10 md:grid-cols-[auto_1fr_auto] md:items-center">
            <Link href="/" aria-label={`${site.name} home`}>
              <img src={site.logo} alt={site.name} className="h-20 w-20 rounded-full" />
            </Link>
            <div className="grid gap-5 sm:grid-cols-3">
              <a href={`tel:${site.phoneHref}`} className="flex items-center gap-3 hover:text-sun">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20">
                  <Phone className="h-4 w-4" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs text-white/50">Call anytime</span>
                  {site.phoneDisplay}
                </span>
              </a>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20">
                  <MapPin className="h-4 w-4" />
                </span>
                <span className="text-sm">
                  <span className="block text-xs text-white/50">Visit our office</span>
                  {site.address}
                </span>
              </div>
              <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-sun">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/20">
                  <Mail className="h-4 w-4" />
                </span>
                <span className="break-all text-sm">
                  <span className="block text-xs text-white/50">Send an email</span>
                  {site.email}
                </span>
              </a>
            </div>
            <Link href="/contact" className={`${pill.sun} w-full md:w-auto`}>
              Plan Your Safari Today
            </Link>
          </div>

          {/* Link columns */}
          <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="mb-4 border-b border-white/10 pb-3 font-semibold text-white">{col.title}</h3>
                <ul className="space-y-2.5 text-sm">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <Link href={l.href} className="transition-colors hover:text-sun">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <div>
              <h3 className="mb-4 border-b border-white/10 pb-3 font-semibold text-white">{site.name}</h3>
              <p className="text-sm leading-relaxed">{site.tagline}</p>
              <p className="mt-4 flex items-center gap-2 text-sm">
                <Clock className="h-4 w-4 text-sun" />
                {site.officeHours}
              </p>
              {socials.length > 0 && (
                <div className="mt-5 flex gap-2">
                  {socials.map(({ href, label, Icon }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="grid h-9 w-9 place-items-center rounded-full bg-white/10 transition hover:bg-sun hover:text-bark"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-white/10">
          <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-4 py-6 text-xs text-white/50 md:flex-row">
            <p>
              © {new Date().getFullYear()} <span className="font-semibold text-white/80">{site.name}</span>. All rights
              reserved.
            </p>
            <p>{site.domain}</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
