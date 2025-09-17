"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src="/images/kachiki-logo.png"
              alt="Kachiki Safaris"
              width={160}
              height={80}
              className="h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
              About
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
                <span>Safaris</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-48">
                <DropdownMenuItem asChild>
                  <Link href="/safaris/northern-circuit" className="w-full">
                    Northern Circuit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/safaris/southern-circuit" className="w-full">
                    Southern Circuit
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/serengeti" className="w-full">
                    Serengeti
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/zanzibar" className="w-full">
                    Zanzibar
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/tours" className="text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
              Tours
            </Link>
            <Link href="/accommodations" className="text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
              Accommodations
            </Link>
            <Link href="/contact" className="text-[#473a30] hover:text-[#ec6417] font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] font-semibold rounded-full">
              <Link href="/contact">Book Safari</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-[#473a30]" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-[#473a30] hover:text-[#ec6417] font-medium">
                Home
              </Link>
              <Link href="/about" className="text-[#473a30] hover:text-[#ec6417] font-medium">
                About
              </Link>
              <div className="text-[#473a30] font-medium">Safaris</div>
              <Link href="/safaris/northern-circuit" className="text-[#473a30] hover:text-[#ec6417] font-medium pl-4">
                Northern Circuit
              </Link>
              <Link href="/safaris/southern-circuit" className="text-[#473a30] hover:text-[#ec6417] font-medium pl-4">
                Southern Circuit
              </Link>
              <Link href="/serengeti" className="text-[#473a30] hover:text-[#ec6417] font-medium pl-4">
                Serengeti
              </Link>
              <Link href="/zanzibar" className="text-[#473a30] hover:text-[#ec6417] font-medium pl-4">
                Zanzibar
              </Link>
              <Link href="/tours" className="text-[#473a30] hover:text-[#ec6417] font-medium">
                Tours
              </Link>
              <Link href="/accommodations" className="text-[#473a30] hover:text-[#ec6417] font-medium">
                Accommodations
              </Link>
              <Link href="/contact" className="text-[#473a30] hover:text-[#ec6417] font-medium">
                Contact
              </Link>
              <Button
                asChild
                className="bg-[#f9b804] hover:bg-[#ec6417] text-[#473a30] font-semibold rounded-full w-fit"
              >
                <Link href="/contact">Book Safari</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
