'use client'

import { FaBolt, FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white">
      {/* Main Footer */}
      <div className="container-custom px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-primary p-2 rounded-lg">
                <FaBolt className="text-2xl text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">ELECTRICA</h3>
                <p className="text-xs text-gray-400">Electrical Services</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Professional electrical services for residential and commercial properties. 
              Licensed, insured, and committed to excellence.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaFacebook />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaTwitter />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaInstagram />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-primary transition">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-primary transition">Services</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-primary transition">About Us</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-primary transition">Projects</a></li>
              <li><a href="#team" className="text-gray-400 hover:text-primary transition">Our Team</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-primary transition">Pricing</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-primary transition">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xl font-bold mb-6">Our Services</h4>
            <ul className="space-y-3">
              <li className="text-gray-400">Residential Electrical</li>
              <li className="text-gray-400">Commercial Electrical</li>
              <li className="text-gray-400">Lighting Installation</li>
              <li className="text-gray-400">Electrical Safety</li>
              <li className="text-gray-400">Panel & Circuits</li>
              <li className="text-gray-400">Emergency Repairs</li>
              <li className="text-gray-400">Maintenance Services</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1 flex-shrink-0" />
                <span className="text-gray-400">123 Electric Avenue<br />New York, NY 10001</span>
              </li>
              <li className="flex items-start gap-3">
                <FaPhone className="text-primary mt-1 flex-shrink-0" />
                <div className="text-gray-400">
                  <a href="tel:+1234567890" className="hover:text-primary transition block">+1 (234) 567-890</a>
                  <span className="text-sm text-primary">24/7 Available</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <FaEnvelope className="text-primary mt-1 flex-shrink-0" />
                <a href="mailto:info@electrica.com" className="text-gray-400 hover:text-primary transition">
                  info@electrica.com
                </a>
              </li>
            </ul>

            {/* Certifications */}
            <div className="mt-6 p-4 bg-white/5 rounded-lg">
              <p className="text-sm text-gray-400 mb-2">Certified & Licensed</p>
              <div className="flex gap-2">
                <span className="bg-primary text-secondary text-xs px-2 py-1 rounded font-semibold">Licensed</span>
                <span className="bg-primary text-secondary text-xs px-2 py-1 rounded font-semibold">Insured</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-white/10">
        <div className="container-custom px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} Electrica Services. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-primary transition">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-primary transition">Sitemap</a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 bg-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-dark transition-all hover:scale-110 z-40"
      >
        <span className="text-secondary text-2xl font-bold">↑</span>
      </button>
    </footer>
  )
}
