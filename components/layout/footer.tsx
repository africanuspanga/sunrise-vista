import Link from "next/link"
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black text-white">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-10">
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
              <a
                href="https://www.facebook.com/kachikisafaris/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white cursor-pointer transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <Twitter className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Instagram className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
              <Youtube className="w-5 h-5 text-gray-400 hover:text-white cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/tours" className="text-gray-300 hover:text-white transition-colors">
                  Safari Tours
                </Link>
              </li>
              <li>
                <Link href="/accommodations" className="text-gray-300 hover:text-white transition-colors">
                  Accommodations
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

          <div>
            <h4 className="text-lg font-bold mb-4">Safari Circuits</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/safaris/northern-circuit" className="text-gray-300 hover:text-white transition-colors">
                  Northern Circuit
                </Link>
              </li>
              <li>
                <Link href="/safaris/southern-circuit" className="text-gray-300 hover:text-white transition-colors">
                  Southern Circuit
                </Link>
              </li>
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
