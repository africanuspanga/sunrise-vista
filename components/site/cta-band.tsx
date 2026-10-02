import Link from "next/link"
import { MessageCircle } from "lucide-react"
import { TornEdge } from "./torn-edge"
import { pill } from "./pill"
import { whatsappLink } from "@/lib/site"

type CtaBandProps = {
  title: string
  text: string
  whatsappMessage?: string
  secondary?: { href: string; label: string }
}

/** Sand-coloured call-to-action band used at the end of inner pages. */
export function CtaBand({ title, text, whatsappMessage, secondary }: CtaBandProps) {
  return (
    <section className="relative bg-sand py-20 md:py-24">
      <TornEdge side="top" className="text-cream" variant={2} />
      <div className="container mx-auto max-w-3xl px-4 text-center">
        <h2 className="font-serif text-3xl leading-tight text-bark md:text-[2.6rem]">{title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-ink">{text}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href={whatsappLink(whatsappMessage)} target="_blank" rel="noopener noreferrer" className={pill.bark}>
            <MessageCircle className="h-4 w-4" />
            Plan on WhatsApp
          </a>
          {secondary ? (
            <Link href={secondary.href} className={pill.outlineDark}>
              {secondary.label}
            </Link>
          ) : (
            <Link href="/contact" className={pill.outlineDark}>
              Send an Enquiry
            </Link>
          )}
        </div>
      </div>
      <TornEdge className="text-cream" />
    </section>
  )
}
