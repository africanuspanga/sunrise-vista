"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-amber-900">KACHIKI SAFARIS</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-900 hover:text-orange-600 font-medium transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-amber-900 hover:text-orange-600 font-medium transition-colors">
              About
            </Link>

            {/* Safaris Dropdown */}
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center space-x-1 text-amber-900 hover:text-orange-600 font-medium transition-colors">
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
              </DropdownMenuContent>
            </DropdownMenu>

            <Link href="/serengeti" className="text-amber-900 hover:text-orange-600 font-medium transition-colors">
              Serengeti
            </Link>
            <Link href="/zanzibar" className="text-amber-900 hover:text-orange-600 font-medium transition-colors">
              Zanzibar
            </Link>
            <Link href="/contact" className="text-amber-900 hover:text-orange-600 font-medium transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full">
              <Link href="/contact">Book Safari</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-amber-200">
            <nav className="flex flex-col space-y-4">
              <Link href="/" className="text-amber-900 hover:text-orange-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-amber-900 hover:text-orange-600 font-medium">
                About
              </Link>
              <Link href="/safaris/northern-circuit" className="text-amber-900 hover:text-orange-600 font-medium pl-4">
                Northern Circuit
              </Link>
              <Link href="/safaris/southern-circuit" className="text-amber-900 hover:text-orange-600 font-medium pl-4">
                Southern Circuit
              </Link>
              <Link href="/serengeti" className="text-amber-900 hover:text-orange-600 font-medium">
                Serengeti
              </Link>
              <Link href="/zanzibar" className="text-amber-900 hover:text-orange-600 font-medium">
                Zanzibar
              </Link>
              <Link href="/contact" className="text-amber-900 hover:text-orange-600 font-medium">
                Contact
              </Link>
              <Button asChild className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-fit">
                <Link href="/contact">Book Safari</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
