"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Departments", href: "#departments" },
    { name: "Board", href: "#board" },
    { name: "Events", href: "#events" },
    { name: "Blog", href: "#blog" },
    { name: "Gallery", href: "#gallery" },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-5 flex justify-between items-center">
        <Link href="/" className="flex items-center relative z-10">
          <Image src="/tedx-vit-logo.png" alt="TEDx VIT Logo" width={130} height={45} className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-[#e62b1e] font-medium transition-colors text-sm tracking-wide"
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="#contact"
            className="bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-6 py-2.5 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 text-sm font-medium"
          >
            Contact Us
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-gray-800 z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 bg-white z-10 pt-20"
          >
            <div className="container mx-auto px-5 py-8 flex flex-col space-y-6">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-800 hover:text-[#e62b1e] font-medium transition-colors py-3 text-lg border-b border-gray-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Link
                href="#contact"
                className="bg-gradient-to-r from-[#e62b1e] to-[#d42a1c] text-white px-6 py-3 rounded-full hover:shadow-lg hover:shadow-red-500/20 transition-all duration-300 text-center font-medium mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

