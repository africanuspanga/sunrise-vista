"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowUpRight, ChevronDown, Mail, Menu, Phone, X } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { pill } from "@/components/site/pill"
import { site } from "@/lib/site"
import { cn } from "@/lib/utils"

const destinationLinks = [
  { href: "/safaris/northern-circuit", label: "Northern Circuit", note: "Ngorongoro, Tarangire, Manyara, Natron" },
  { href: "/serengeti", label: "Serengeti", note: "The Great Migration & Big Five" },
  { href: "/safaris/southern-circuit", label: "Southern Circuit", note: "Nyerere, Ruaha, Mikumi, Saadani" },
  { href: "/zanzibar", label: "Zanzibar", note: "Beaches, Stone Town & spice tours" },
]

const leftLinks = [
  { href: "/tours", label: "Tours & Safaris" },
  { href: "/kilimanjaro", label: "Kilimanjaro" },
]
const rightLinks = [
  { href: "/trip-builder", label: "Trip Builder" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => setOpen(false), [pathname])
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname?.startsWith(href))
  const destinationsActive = destinationLinks.some((l) => isActive(l.href))

  const navLink = (href: string, label: string) => (
    <Link
      key={href}
      href={href}
      className={cn(
        "relative py-2 text-sm font-medium text-ink transition-colors hover:text-ember",
        isActive(href) && "text-bark after:absolute after:-bottom-0.5 after:left-1/2 after:h-1.5 after:w-1.5 after:-translate-x-1/2 after:rounded-full after:bg-ember",
      )}
    >
      {label}
    </Link>
  )

  return (
    <header className="sticky top-0 z-50">
      {/* Utility bar */}
      <div className="hidden bg-bark-deep text-white/80 md:block">
        <div className="container mx-auto flex h-9 items-center justify-between px-4 text-xs">
          <div className="flex items-center gap-6">
            <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2 hover:text-sun">
              <Phone className="h-3.5 w-3.5" />
              {site.phoneDisplay}
            </a>
            <a href={`mailto:${site.email}`} className="flex items-center gap-2 hover:text-sun">
              <Mail className="h-3.5 w-3.5" />
              {site.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <Link href="/about" className="hover:text-sun">
              About Us
            </Link>
            <Link href="/#faq" className="hover:text-sun">
              FAQs
            </Link>
            <Link href="/contact" className="hover:text-sun">
              Contact
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={cn(
          "relative border-b border-line/70 bg-cream/95 backdrop-blur transition-shadow",
          scrolled && "shadow-[0_8px_30px_-18px_rgba(43,15,14,0.5)]",
        )}
      >
        <div className="container mx-auto flex h-[72px] items-center justify-between px-4">
          {/* Mobile logo */}
          <Link href="/" className="flex items-center gap-3 lg:hidden" aria-label={`${site.name} home`}>
            <img src={site.logo} alt="" className="h-12 w-12 rounded-full" />
            <span className="font-serif text-lg leading-tight text-bark">{site.shortName}</span>
          </Link>

          {/* Desktop left */}
          <nav className="hidden flex-1 items-center gap-8 lg:flex" aria-label="Primary">
            <DropdownMenu modal={false}>
              <DropdownMenuTrigger
                className={cn(
                  "flex items-center gap-1 py-2 text-sm font-medium text-ink outline-none transition-colors hover:text-ember data-[state=open]:text-ember",
                  destinationsActive && "text-bark",
                )}
              >
                Destinations
                <ChevronDown className="h-4 w-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="start"
                sideOffset={22}
                className="w-[560px] rounded-2xl border-line bg-cream p-0 shadow-[0_30px_60px_-30px_rgba(43,15,14,0.55)]"
              >
                <div className="grid grid-cols-[1fr_200px]">
                  <div className="grid gap-1 p-4">
                    {destinationLinks.map((l) => (
                      <DropdownMenuItem key={l.href} asChild className="cursor-pointer rounded-xl p-3 focus:bg-sand-soft">
                        <Link href={l.href} className="flex flex-col items-start gap-0.5">
                          <span className="font-serif text-base text-bark">{l.label}</span>
                          <span className="text-xs text-muted-ink">{l.note}</span>
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </div>
                  <DropdownMenuItem asChild className="m-3 cursor-pointer overflow-hidden rounded-xl p-0 focus:bg-transparent">
                    <Link href="/tours" className="relative flex min-h-[220px] flex-col justify-end">
                      <img
                        src="/images/wildlife/giraffes-balloon.jpeg"
                        alt=""
                        className="absolute inset-0 h-full w-full object-cover"
                      />
                      <span className="absolute inset-0 bg-gradient-to-t from-bark-deep/90 to-transparent" />
                      <span className="relative flex items-center gap-1.5 p-4 font-serif text-lg text-white">
                        All safari tours
                        <ArrowUpRight className="h-4 w-4 text-sun" />
                      </span>
                    </Link>
                  </DropdownMenuItem>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
            {leftLinks.map((l) => navLink(l.href, l.label))}
          </nav>

          {/* Center badge logo */}
          <Link
            href="/"
            aria-label={`${site.name} home`}
            className={cn(
              "absolute left-1/2 top-2 hidden -translate-x-1/2 rounded-full bg-cream p-1.5 shadow-[0_12px_30px_-12px_rgba(43,15,14,0.55)] ring-1 ring-line transition-all duration-300 lg:block",
              scrolled ? "h-[64px] w-[64px] p-1 top-1" : "h-[104px] w-[104px]",
            )}
          >
            <img src={site.logo} alt={site.name} className="h-full w-full rounded-full" />
          </Link>

          {/* Desktop right */}
          <div className="hidden flex-1 items-center justify-end gap-8 lg:flex">
            {rightLinks.map((l) => navLink(l.href, l.label))}
            <Link href="/contact" className={cn(pill.sun, "px-5 py-2.5")}>
              Enquire Now
            </Link>
          </div>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-full text-bark hover:bg-sand-soft lg:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile panel */}
        {open && (
          <div className="max-h-[calc(100vh-72px)] overflow-y-auto border-t border-line bg-cream lg:hidden">
            <nav className="container mx-auto flex flex-col px-4 py-4" aria-label="Mobile">
              <Link href="/" className="border-b border-line/70 py-3 font-medium text-ink">
                Home
              </Link>
              <p className="pb-1 pt-4 text-xs font-semibold uppercase tracking-[0.2em] text-ember">Destinations</p>
              {destinationLinks.map((l) => (
                <Link key={l.href} href={l.href} className="py-2.5 pl-3 text-ink">
                  {l.label}
                </Link>
              ))}
              {[...leftLinks, ...rightLinks].map((l) => (
                <Link key={l.href} href={l.href} className="border-b border-line/70 py-3 font-medium text-ink">
                  {l.label}
                </Link>
              ))}
              <Link href="/#faq" className="border-b border-line/70 py-3 font-medium text-ink">
                FAQs
              </Link>
              <Link href="/trip-builder" className={cn(pill.sun, "mt-5 w-full")}>
                Build Your Custom Trip
              </Link>
              <div className="mt-5 space-y-2 text-sm text-muted-ink">
                <a href={`tel:${site.phoneHref}`} className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-ember" /> {site.phoneDisplay}
                </a>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-ember" /> {site.email}
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
