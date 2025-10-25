'use client'

import { FaBolt, FaCheckCircle, FaPhone } from 'react-icons/fa'
import Image from 'next/image'

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-secondary via-secondary-light to-accent min-h-screen flex items-center overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 text-primary text-9xl">
          <FaBolt />
        </div>
        <div className="absolute bottom-20 right-10 text-primary text-9xl">
          <FaBolt />
        </div>
      </div>

      <div className="container-custom px-4 md:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white">
            <div className="inline-block bg-primary/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="text-primary font-semibold">⚡ Professional Electricians</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Expert Electrical
              <span className="text-gradient block">Solutions</span>
              For Your Home & Business
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Licensed, insured, and experienced electricians providing top-quality electrical 
              services with 24/7 emergency support. Your safety is our priority.
            </p>

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {[
                'Licensed & Insured',
                '24/7 Emergency Service',
                'Upfront Pricing',
                '100% Satisfaction Guaranteed'
              ].map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <FaCheckCircle className="text-primary text-xl flex-shrink-0" />
                  <span className="text-gray-200">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="btn-primary text-center">
                Get Free Quote
              </a>
              <a href="tel:+1234567890" className="btn-outline border-white text-white hover:bg-white hover:text-secondary text-center flex items-center justify-center gap-2">
                <FaPhone />
                <span>Call Now</span>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-12 border-t border-white/20">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-sm text-gray-300">Years Experience</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-gray-300">Projects Done</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">98%</div>
                <div className="text-sm text-gray-300">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Content - Image */}
          <div className="relative hidden lg:block">
            <div className="relative z-10">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <Image 
                  src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?w=600&h=800&fit=crop" 
                  alt="Professional Electrician" 
                  width={600}
                  height={800}
                  className="rounded-lg shadow-2xl w-full h-[600px] object-cover"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-primary p-4 rounded-lg">
                      <FaBolt className="text-3xl text-secondary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-secondary">24/7</div>
                      <div className="text-sm text-gray-600">Emergency Service</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-6 -left-6 w-72 h-72 bg-accent-light/20 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>

      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
        </svg>
      </div>
    </section>
  )
}
