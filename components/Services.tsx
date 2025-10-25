'use client'

import { FaBolt, FaHome, FaBuilding, FaTools, FaLightbulb, FaShieldAlt, FaPlug, FaCog, FaWrench } from 'react-icons/fa'

export default function Services() {
  const services = [
    {
      icon: <FaHome />,
      title: 'Residential Electrical',
      description: 'Complete electrical services for your home including installations, repairs, and upgrades.',
      features: ['Wiring & Rewiring', 'Panel Upgrades', 'Outlet Installation', 'Home Automation']
    },
    {
      icon: <FaBuilding />,
      title: 'Commercial Electrical',
      description: 'Professional electrical solutions for businesses and commercial properties.',
      features: ['Office Wiring', 'Emergency Lighting', 'Power Distribution', 'Maintenance']
    },
    {
      icon: <FaLightbulb />,
      title: 'Lighting Installation',
      description: 'Expert lighting design and installation for indoor and outdoor spaces.',
      features: ['LED Lighting', 'Landscape Lighting', 'Smart Lighting', 'Fixtures']
    },
    {
      icon: <FaShieldAlt />,
      title: 'Electrical Safety',
      description: 'Comprehensive safety inspections and testing to protect your property.',
      features: ['Safety Inspections', 'Code Compliance', 'GFCI Installation', 'Surge Protection']
    },
    {
      icon: <FaPlug />,
      title: 'Panel & Circuits',
      description: 'Electrical panel upgrades and circuit installation for increased capacity.',
      features: ['Panel Replacement', 'Circuit Addition', 'Breaker Repair', 'Load Balancing']
    },
    {
      icon: <FaCog />,
      title: 'Maintenance & Repair',
      description: '24/7 emergency repairs and scheduled maintenance services.',
      features: ['Emergency Repairs', 'Troubleshooting', 'Preventive Maintenance', 'System Testing']
    }
  ]

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Our Services</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Professional Electrical Services
          </h2>
          <p className="text-gray-600 text-lg">
            We provide comprehensive electrical solutions for residential and commercial properties. 
            Our licensed electricians deliver quality workmanship with guaranteed satisfaction.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg card-hover group"
            >
              {/* Icon */}
              <div className="bg-primary/10 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <div className="text-3xl text-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-secondary mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-gray-700">
                    <FaBolt className="text-primary text-sm" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a 
                href="#contact" 
                className="inline-block mt-6 text-primary font-semibold hover:text-primary-dark transition group-hover:translate-x-2 duration-300"
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Don&apos;t see what you&apos;re looking for? We handle all electrical needs!
          </p>
          <a href="#contact" className="btn-primary">
            Request Custom Service
          </a>
        </div>
      </div>
    </section>
  )
}
