import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="bg-orange-500 border-b border-orange-600">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4 text-white">Stay in Touch</h3>
            <p className="text-white mb-6">Get the latest safari updates and travel tips delivered to your inbox.</p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500"
              />
              <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6">Subscribe</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">K</span>
              </div>
              <span className="text-lg font-bold">KACHIKI SAFARIS</span>
            </div>
            <p className="text-gray-300 mb-4">
              Creating unforgettable safari experiences across Tanzania's most spectacular destinations.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/safaris" className="text-gray-300 hover:text-white transition-colors">
                  Our Safaris
                </Link>
              </li>
              <li>
                <Link href="/serengeti" className="text-gray-300 hover:text-white transition-colors">
                  Serengeti
                </Link>
              </li>
              <li>
                <Link href="/zanzibar" className="text-gray-300 hover:text-white transition-colors">
                  Zanzibar
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-lg font-bold mb-4">Destinations</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/safaris/northern-circuit/ngorongoro"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ngorongoro Crater
                </Link>
              </li>
              <li>
                <Link
                  href="/safaris/northern-circuit/tarangire"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Tarangire
                </Link>
              </li>
              <li>
                <Link
                  href="/safaris/southern-circuit/mikumi"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Mikumi
                </Link>
              </li>
              <li>
                <Link
                  href="/safaris/southern-circuit/ruaha"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Ruaha
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p>Arusha, Tanzania</p>
              <p>Phone: +255 762 756 046</p>
              <p>Email: info@kachikisafaris.com</p>
              <p>WhatsApp: +255 762 756 046</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© 2024 Kachiki Safaris. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
