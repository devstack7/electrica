'use client'

import { useState } from 'react'
import { FaPlus, FaMinus } from 'react-icons/fa'

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'Are your electricians licensed and insured?',
      answer: 'Yes, all our electricians are fully licensed, certified, and insured. We carry comprehensive liability insurance and workers compensation to protect you and your property.'
    },
    {
      question: 'Do you offer emergency electrical services?',
      answer: 'Absolutely! We provide 24/7 emergency electrical services. If you have an electrical emergency, call us immediately and we&apos;ll dispatch a licensed electrician to your location as quickly as possible.'
    },
    {
      question: 'How do you determine pricing for electrical work?',
      answer: 'We provide upfront, transparent pricing with no hidden fees. For most jobs, we can provide an estimate over the phone or via email. For larger projects, we offer free on-site consultations to provide accurate quotes.'
    },
    {
      question: 'What areas do you service?',
      answer: 'We service all areas within a 50-mile radius of our main office. Contact us to confirm if we service your specific location.'
    },
    {
      question: 'Do you guarantee your work?',
      answer: 'Yes, we stand behind all our work with a comprehensive satisfaction guarantee. If there are any issues with our workmanship, we&apos;ll make it right at no additional cost to you.'
    },
    {
      question: 'How quickly can you respond to a service request?',
      answer: 'For emergency services, we typically respond within 1-2 hours. For non-emergency work, we can usually schedule within 1-3 business days, depending on the scope of the project.'
    },
    {
      question: 'Do you handle both residential and commercial projects?',
      answer: 'Yes, we have experience with both residential and commercial electrical work. Our team is equipped to handle projects of all sizes, from small home repairs to large commercial installations.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept cash, checks, all major credit cards, and digital payment methods. For larger projects, we can also arrange flexible payment plans.'
    }
  ]

  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ FAQ</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600 text-lg">
            Have questions? We&apos;ve got answers! Browse through our most commonly asked questions 
            to learn more about our services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                className="w-full px-6 py-5 flex justify-between items-center text-left hover:bg-gray-100 transition-colors"
              >
                <span className="text-lg font-semibold text-secondary pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 w-8 h-8 rounded-full bg-primary flex items-center justify-center transition-transform ${
                  activeIndex === index ? 'rotate-180' : ''
                }`}>
                  {activeIndex === index ? (
                    <FaMinus className="text-secondary" />
                  ) : (
                    <FaPlus className="text-secondary" />
                  )}
                </div>
              </button>
              
              {activeIndex === index && (
                <div className="px-6 pb-5">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center bg-gradient-to-r from-secondary to-accent rounded-2xl p-12 text-white">
          <h3 className="text-3xl font-bold mb-4">Still Have Questions?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Can&apos;t find the answer you&apos;re looking for? Our friendly team is here to help! 
            Reach out and we&apos;ll get back to you as soon as possible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Contact Us
            </a>
            <a href="tel:+1234567890" className="btn-outline border-white text-white hover:bg-white hover:text-secondary">
              Call: +1 (234) 567-890
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
