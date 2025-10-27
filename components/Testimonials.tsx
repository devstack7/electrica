'use client'

import { useState } from 'react'
import { FaStar, FaQuoteLeft } from 'react-icons/fa'
import Image from 'next/image'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: 'John Anderson',
      role: 'Homeowner - Melbourne',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
      rating: 5,
      text: 'J-Amp Group did an amazing job on our new build. Professional, punctual, and the quality of work exceeded our expectations. Highly recommended!'
    },
    {
      id: 2,
      name: 'Sarah Martinez',
      role: 'Business Owner - Melbourne',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Excellent service for our office fit-out. The team was professional, efficient and completed everything on time. Great communication throughout!'
    },
    {
      id: 3,
      name: 'Michael Chen',
      role: 'Property Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Been using J-Amp Group for our renovation projects. Reliable, fair pricing, and excellent workmanship. Our go-to electricians in Melbourne.'
    },
    {
      id: 4,
      name: 'Emily Johnson',
      role: 'Homeowner - Melbourne',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
      rating: 5,
      text: 'From quote to completion, everything was smooth and professional. They handled our home extension electrical work perfectly. Great team!'
    },
    {
      id: 5,
      name: 'David Brown',
      role: 'Homeowner - Melbourne',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Outstanding work on our renovation. The electricians were efficient, clean, and the result is fantastic. Highly professional service!'
    },
    {
      id: 6,
      name: 'Lisa Williams',
      role: 'Homeowner - Melbourne',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
      rating: 5,
      text: 'Had a switchboard upgrade done. The electrician explained everything clearly, worked cleanly, and finished on time. Very satisfied!'
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
            Don&apos;t just take our word for it. Here&apos;s what our satisfied customers have to say 
            about their experience with J-Amp Group.
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
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                <Image 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
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
            <div className="text-4xl font-bold text-primary mb-2">100%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-gray-600">Projects Completed</div>
          </div>
          <div>
            <div className="text-4xl font-bold text-primary mb-2">5+</div>
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
