"use client"

import type React from "react"
import { useState } from "react"
import { Clock, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PageHero } from "@/components/site/page-hero"
import { pill } from "@/components/site/pill"
import { site, whatsappLink } from "@/lib/site"

const fieldClass =
  "h-12 rounded-xl border-line bg-cream/60 px-4 text-ink placeholder:text-muted-ink/70 focus-visible:border-amber focus-visible:ring-amber/30"

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    safariDate: "",
  })

  // The site is a static export with no backend, so enquiries are handed to the visitor's
  // email app (or WhatsApp) pre-filled, instead of being silently dropped.
  const composeMessage = () => {
    const lines = [`Name: ${formData.name}`, `Email: ${formData.email}`]
    if (formData.safariDate) lines.push(`Preferred safari date: ${formData.safariDate}`)
    return [...lines, "", formData.message].join("\n")
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const subject = `Safari enquiry from ${formData.name}`
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(composeMessage())}`
  }

  const handleWhatsApp = (e: React.MouseEvent) => {
    const form = (e.currentTarget as HTMLButtonElement).form
    if (form && !form.reportValidity()) return
    window.open(whatsappLink(`Hi Sunrise Vista! ${composeMessage()}`), "_blank", "noopener")
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const contacts = [
    { Icon: MapPin, label: "Address", value: site.address },
    { Icon: Phone, label: "Phone", value: site.phoneDisplay, href: `tel:${site.phoneHref}` },
    { Icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
    { Icon: MessageCircle, label: "WhatsApp", value: site.phoneDisplay, href: whatsappLink() },
    { Icon: Clock, label: "Office hours", value: site.officeHours },
  ]

  return (
    <>
      <PageHero
        crumb="Contact"
        eyebrow="Contact us"
        title="Let's Plan Your Safari"
        subtitle="Ready to plan your Tanzanian adventure? Get in touch with us today."
        image="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-obstinacy-buffalo-green-field-sunny-day.jpg-FLHGNDqlrqMg76NQVFzSXnI5FF4gqK.jpeg"
        imageAlt="Cape buffalo in a green field"
      />

      <section className="bg-cream py-16 md:py-24">
        <div className="container mx-auto grid gap-8 px-4 lg:grid-cols-[1.3fr_1fr]">
          {/* Form */}
          <div className="rounded-3xl bg-white p-7 shadow-[0_30px_60px_-40px_rgba(43,15,14,0.5)] ring-1 ring-line md:p-10">
            <h2 className="font-serif text-3xl text-bark">Send us a Message</h2>
            <p className="mt-2 text-sm text-muted-ink">
              Tell us about your dream safari — we usually reply within one business day.
            </p>
            <form onSubmit={handleSubmit} className="mt-8 grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-medium text-ink">
                  Full Name
                </label>
                <Input id="name" name="name" type="text" required autoComplete="name" value={formData.name} onChange={handleChange} className={fieldClass} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-medium text-ink">
                  Email Address
                </label>
                <Input id="email" name="email" type="email" required autoComplete="email" value={formData.email} onChange={handleChange} className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="safariDate" className="mb-2 block text-sm font-medium text-ink">
                  Preferred Safari Date
                </label>
                <Input id="safariDate" name="safariDate" type="date" value={formData.safariDate} onChange={handleChange} className={fieldClass} />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="mb-2 block text-sm font-medium text-ink">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your dream safari..."
                  className={`${fieldClass} h-auto py-3`}
                />
              </div>
              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <button type="submit" className={pill.sun}>
                  <Send className="h-4 w-4" />
                  Send Message
                </button>
                <button type="button" onClick={handleWhatsApp} className={pill.outlineDark}>
                  <MessageCircle className="h-4 w-4" />
                  Send via WhatsApp
                </button>
              </div>
            </form>
          </div>

          {/* Details */}
          <div className="flex flex-col gap-6">
            <div className="rounded-3xl bg-bark p-8 text-white">
              <h2 className="font-serif text-2xl">Get in Touch</h2>
              <ul className="mt-6 space-y-5">
                {contacts.map(({ Icon, label, value, href }) => (
                  <li key={label} className="flex items-start gap-4">
                    <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-white/10 text-sun">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span>
                      <span className="block text-xs uppercase tracking-wider text-white/55">{label}</span>
                      {href ? (
                        <a href={href} className="break-all hover:text-sun" target={href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer">
                          {value}
                        </a>
                      ) : (
                        value
                      )}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative isolate overflow-hidden rounded-3xl p-8 text-white">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-shot-african-wildebeest-grassy-plain.jpg-66iUav11tpJEXg4lA4o4fYvI7n8rYJ.jpeg"
                alt=""
                className="absolute inset-0 -z-10 h-full w-full object-cover"
              />
              <div className="absolute inset-0 -z-10 bg-gradient-to-t from-bark-deep/95 to-bark-deep/40" />
              <h3 className="font-serif text-2xl">Need Immediate Assistance?</h3>
              <p className="mt-2 text-white/85">Contact us directly via WhatsApp for quick responses</p>
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={`${pill.sun} mt-6`}>
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
