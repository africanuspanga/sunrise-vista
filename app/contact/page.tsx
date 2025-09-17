"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    safariDate: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-orange-50">
      {/* Hero Section */}
      <section className="relative h-[300px] bg-gradient-to-r from-[#473a30] to-[#ec6417] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/closeup-shot-obstinacy-buffalo-green-field-sunny-day.jpg-FLHGNDqlrqMg76NQVFzSXnI5FF4gqK.jpeg')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#473a30] to-[#ec6417] opacity-60" />
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Contact Us</h1>
            <p className="text-xl text-orange-100 leading-relaxed">
              Ready to plan your Tanzanian adventure? Get in touch with us today.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl text-[#473a30]">Send us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="safariDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Safari Date
                    </label>
                    <Input
                      id="safariDate"
                      name="safariDate"
                      type="date"
                      value={formData.safariDate}
                      onChange={handleChange}
                      className="w-full"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell us about your dream safari..."
                      className="w-full"
                    />
                  </div>

                  <Button type="submit" className="w-full bg-[#ec6417] hover:bg-[#f9b804] text-white rounded-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold text-[#473a30] mb-6">Get in Touch</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 text-[#ec6417] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Address</h4>
                        <p className="text-gray-600">Arusha, Tanzania</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 text-[#ec6417] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Phone</h4>
                        <p className="text-gray-600">+255 762 756 046</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-[#ec6417] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">Email</h4>
                        <p className="text-gray-600">info@kachikisafaris.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <MessageCircle className="w-6 h-6 text-[#ec6417] mt-1" />
                      <div>
                        <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                        <p className="text-gray-600">+255 762 756 046</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Map Placeholder */}
              <Card className="bg-white shadow-lg">
                <CardContent className="p-0">
                  <div
                    className="h-64 bg-cover bg-center rounded-lg"
                    style={{
                      backgroundImage: `url('https://hebbkx1anhila5yf.public.blob.vercel-storage.com/beautiful-shot-african-wildebeest-grassy-plain.jpg-66iUav11tpJEXg4lA4o4fYvI7n8rYJ.jpeg')`,
                    }}
                  />
                </CardContent>
              </Card>

              {/* Quick Contact */}
              <Card className="bg-gradient-to-r from-[#ec6417] to-[#f9b804] text-white shadow-lg">
                <CardContent className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Need Immediate Assistance?</h3>
                  <p className="mb-6">Contact us directly via WhatsApp for quick responses</p>
                  <Button asChild className="bg-white text-[#ec6417] hover:bg-gray-100 rounded-full">
                    <a href="https://wa.me/255762756046" target="_blank" rel="noopener noreferrer">
                      Chat on WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
