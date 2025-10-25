'use client'

import { useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Electrica did an amazing job rewiring our entire home. Professional, punctual, and the quality of work exceeded our expectations. Highly recommended!'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Business Owner',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'We needed emergency electrical work at our restaurant, and they responded within an hour. Fixed the issue quickly and professionally. True lifesavers!'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Property Manager',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Been using Electrica for all our properties for years. Reliable, fair pricing, and excellent workmanship. Our go-to electricians for everything.'
    },
    {
      id: 4,
      name: 'Emily Johnson',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'From the quote to completion, everything was smooth and professional. They installed our smart home system perfectly. Great team!'
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'Office Manager',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Upgraded our office lighting to LED. The team was efficient, clean, and the result is fantastic. Much better lighting and lower bills!'
    },
    {
      id: 6,
      name: 'Lisa Williams',
      role: 'Homeowner',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Had an electrical panel upgrade done. The electrician explained everything clearly, worked cleanly, and finished on time. Very satisfied!'
    }
  ]

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Testimonials</span>
          </div>
          <h2 className="heading-secondary mb-6">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg">
            Don't just take our word for it. Here's what our satisfied customers have to say 
            about their experience with Electrica.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id}
              className="bg-white p-8 rounded-xl shadow-lg card-hover relative"
            >
              <FaQuoteLeft className="text-4xl text-primary/20 absolute top-4 right-4" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <FaStar key={i} className="text-primary text-lg" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-primary mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5000+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">15+</div>
            <div className="text-gray-600">Years Experience</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-gray-600">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  )
}
