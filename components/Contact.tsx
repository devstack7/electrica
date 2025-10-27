'use client'

import { useState } from 'react'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaPaperPlane } from 'react-icons/fa'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', service: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Contact Us</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Get In Touch With Us
          </h2>
          <p className="text-gray-600 text-lg">
            Ready to get started? Have questions? Contact us today and let&apos;s discuss 
            how we can help with your electrical needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold text-secondary mb-6">Contact Information</h3>
            <p className="text-gray-600 mb-8">
              We&apos;re here to help! Reach out to us through any of the following channels, 
              and we&apos;ll respond as quickly as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary p-4 rounded-lg flex-shrink-0">
                  <FaMapMarkerAlt className="text-2xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Our Location</h4>
                  <p className="text-gray-600">Melbourne, Victoria<br />Australia</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-4 rounded-lg flex-shrink-0">
                  <FaPhone className="text-2xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Phone Number</h4>
                  <p className="text-gray-600">
                    Main: <a href="tel:0482441022" className="hover:text-primary transition">0482 441 022</a><br />
                    Available: 7 Days a Week
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-4 rounded-lg flex-shrink-0">
                  <FaEnvelope className="text-2xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Email Address</h4>
                  <p className="text-gray-600">
                    <a href="mailto:info@j-ampgroup.com.au" className="hover:text-primary transition">info@j-ampgroup.com.au</a><br />
                    <a href="mailto:quotes@j-ampgroup.com.au" className="hover:text-primary transition">quotes@j-ampgroup.com.au</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary p-4 rounded-lg flex-shrink-0">
                  <FaClock className="text-2xl text-secondary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Business Hours</h4>
                  <p className="text-gray-600">
                    Mon - Fri: 7:00 AM - 5:00 PM<br />
                    Sat: 8:00 AM - 2:00 PM<br />
                    <span className="text-primary font-semibold">Emergency Service Available</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-8 bg-gray-300 rounded-xl h-64 flex items-center justify-center">
              <p className="text-gray-600">Map Integration Here</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold text-secondary mb-6">Send Us A Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-secondary mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-secondary mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-secondary mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                  placeholder="+1 (234) 567-890"
                />
              </div>

              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-secondary mb-2">
                  Service Needed
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition"
                >
                  <option value="">Select a service</option>
                  <option value="residential">Residential Electrical</option>
                  <option value="commercial">Commercial Electrical</option>
                  <option value="lighting">Lighting Installation</option>
                  <option value="safety">Electrical Safety</option>
                  <option value="panel">Panel & Circuits</option>
                  <option value="maintenance">Maintenance & Repair</option>
                  <option value="emergency">Emergency Service</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-secondary mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition resize-none"
                  placeholder="Tell us about your project..."
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary flex items-center justify-center gap-2">
                <FaPaperPlane />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
