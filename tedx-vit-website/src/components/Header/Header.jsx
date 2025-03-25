"use client"

import { useState, useEffect } from "react"
import "./Header.css"

const Header = () => {
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
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <a href="/" className="logo">
          <img src="https://upload.wikimedia.org/wikipedia/commons/a/aa/TED_three_letter_logo.svg" alt="TEDx VIT Logo" />
          <h1>XVIT</h1>       
        </a>
       
        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="nav-link">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary contact-btn">
            Contact Us
          </a>
        </nav>

        {/* Mobile Menu Button */} 
        <button
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          {isMenuOpen ? (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 6H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M3 18H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`mobile-nav ${isMenuOpen ? "open" : ""}`}>
        <div className="container mobile-nav-container">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="mobile-nav-link" onClick={() => setIsMenuOpen(false)}>
              {item.name}
            </a>
          ))}
          <a href="#contact" className="btn btn-primary mobile-contact-btn" onClick={() => setIsMenuOpen(false)}>
            Contact Us
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

