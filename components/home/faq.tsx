"use client"

import * as Accordion from "@radix-ui/react-accordion"
import Link from "next/link"
import { Plus } from "lucide-react"
import { SectionHeading } from "@/components/site/section-heading"
import { TornEdge } from "@/components/site/torn-edge"
import { pill } from "@/components/site/pill"
import { faqs } from "@/lib/data/home"

export function Faq() {
  return (
    <section id="faq" className="relative scroll-mt-28 bg-sand-soft py-24 md:py-32">
      <TornEdge side="top" className="text-cream" variant={2} />
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="FAQs"
          title="Frequently Asked Questions"
          subtitle="Quick answers to common questions about planning your Tanzania safari with us."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[380px_1fr]">
          <div className="relative isolate flex min-h-[360px] flex-col justify-end overflow-hidden rounded-3xl p-8 text-white">
            <img
              src="/images/wildlife/safari-guide-vehicle.jpeg"
              alt="Safari guide and guests in an open game-drive vehicle"
              className="absolute inset-0 -z-10 h-full w-full object-cover"
            />
            <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-deep/95 via-bark-deep/40 to-transparent" />
            <h3 className="font-serif text-2xl">Didn&apos;t find your answer?</h3>
            <p className="mt-2 text-sm text-white/85">
              Our team is happy to answer anything about planning your safari — just ask.
            </p>
            <Link href="/contact" className={`${pill.sun} mt-5 w-fit`}>
              Contact Us
            </Link>
          </div>

          <Accordion.Root type="single" collapsible defaultValue="item-0" className="flex flex-col gap-3">
            {faqs.map((f, i) => (
              <Accordion.Item
                key={f.q}
                value={`item-${i}`}
                className="rounded-2xl border border-transparent bg-transparent transition data-[state=open]:border-line data-[state=open]:bg-white data-[state=open]:shadow-[0_10px_30px_-20px_rgba(85,32,31,0.4)]"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="group flex w-full items-center gap-5 border-b border-bark/10 px-5 py-4 text-left group-data-[state=open]:border-transparent data-[state=open]:border-transparent">
                    <span className="text-sm tabular-nums text-muted-ink">{String(i + 1).padStart(2, "0")}</span>
                    <span className="flex-1 font-medium text-bark">{f.q}</span>
                    <Plus className="h-5 w-5 shrink-0 text-bark transition-transform duration-300 group-data-[state=open]:rotate-45" />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                  <p className="pb-5 pl-[3.6rem] pr-12 text-sm leading-relaxed text-muted-ink">{f.a}</p>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </div>
      </div>
      <TornEdge className="text-cream" />
    </section>
  )
}
