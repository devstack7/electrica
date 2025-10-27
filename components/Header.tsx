'use client'

import { useState, useEffect } from 'react'
import { FaPhone, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Team', href: '#team' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-white py-2 px-4 md:px-8 hidden md:block border-b border-primary/20">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex gap-6">
            <a href="tel:0482441022" className="flex items-center gap-2 hover:text-primary transition">
              <FaPhone className="text-primary" />
              <span>0482 441 022</span>
            </a>
            <a href="mailto:info@j-ampgroup.com.au" className="flex items-center gap-2 hover:text-primary transition">
              <FaEnvelope className="text-primary" />
              <span>info@j-ampgroup.com.au</span>
            </a>
          </div>
          <div className="text-primary font-semibold">
            24/7 Emergency Service Available
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-white'
        }`}
      >
        <nav className="container-custom py-4 px-4 md:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <a href="#home" className="flex items-center gap-3 group">
              <div className="relative w-12 h-12 group-hover:scale-110 transition-transform">
                <Image 
                  src="/images/j-amp-logo.png" 
                  alt="J-Amp Group Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-secondary">J-AMP GROUP</h1>
                <p className="text-xs text-gray-600">Electrical Services</p>
              </div>
            </a>

            {/* Desktop Navigation */}
            <ul className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-primary font-medium transition-colors relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="#contact" className="btn-primary">
                Get A Quote
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-2xl text-secondary"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 pb-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-gray-700 hover:text-primary font-medium transition-colors block py-2"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li>
                  <a href="#contact" className="btn-primary block text-center">
                    Get A Quote
                  </a>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  )
}
