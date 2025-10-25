'use client'

import { FaAward, FaUsers, FaClock, FaCheckCircle } from 'react-icons/fa'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <Image 
                src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&h=500&fit=crop" 
                alt="Electrician working" 
                width={400}
                height={500}
                className="rounded-lg shadow-lg h-[400px] object-cover"
              />
              <Image 
                src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=400&h=500&fit=crop" 
                alt="Electrical panel" 
                width={400}
                height={500}
                className="rounded-lg shadow-lg h-[400px] object-cover mt-12"
              />
            </div>
            
            {/* Experience Badge */}
            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-primary p-6 rounded-xl shadow-2xl">
              <div className="text-center">
                <div className="text-4xl font-bold text-secondary">15+</div>
                <div className="text-sm text-secondary font-semibold">Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
              <span className="text-primary font-semibold">⚡ About Us</span>
            </div>
            
            <h2 className="heading-secondary mb-6">
              Your Trusted Electrical Service Provider
            </h2>
            
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              With over 15 years of experience, Electrica has been providing top-quality 
              electrical services to residential and commercial clients. Our team of licensed, 
              certified electricians is committed to delivering safe, reliable, and efficient solutions.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              We pride ourselves on our professionalism, attention to detail, and customer 
              satisfaction. From simple repairs to complex installations, we handle every 
              project with the same level of expertise and care.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <FaAward className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Certified Experts</h4>
                  <p className="text-sm text-gray-600">Licensed & insured professionals</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <FaClock className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">24/7 Available</h4>
                  <p className="text-sm text-gray-600">Emergency service anytime</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <FaUsers className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">5000+ Clients</h4>
                  <p className="text-sm text-gray-600">Trusted by thousands</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="bg-primary/10 p-3 rounded-lg flex-shrink-0">
                  <FaCheckCircle className="text-2xl text-primary" />
                </div>
                <div>
                  <h4 className="font-bold text-secondary mb-1">Quality Guaranteed</h4>
                  <p className="text-sm text-gray-600">100% satisfaction promise</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn-primary">
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
