'use client'

import { FaCheck, FaBolt } from 'react-icons/fa'

export default function Pricing() {
  const plans = [
    {
      name: 'Basic Service',
      price: '$89',
      period: 'per hour',
      description: 'Perfect for small repairs and basic electrical work',
      features: [
        'Licensed Electrician',
        'Basic Repairs',
        'Outlet Installation',
        'Switch Replacement',
        'Light Fixture Installation',
        'Basic Troubleshooting'
      ],
      popular: false
    },
    {
      name: 'Standard Service',
      price: '$129',
      period: 'per hour',
      description: 'Ideal for medium-sized projects and upgrades',
      features: [
        'All Basic Features',
        'Panel Upgrades',
        'Circuit Installation',
        'GFCI Installation',
        'Dedicated Circuits',
        'Smart Home Setup',
        'Priority Scheduling',
        'Free Inspection'
      ],
      popular: true
    },
    {
      name: 'Premium Service',
      price: 'Custom',
      period: 'quote',
      description: 'Comprehensive solutions for large projects',
      features: [
        'All Standard Features',
        'Complete Rewiring',
        'Commercial Projects',
        'Industrial Solutions',
        'Project Management',
        '24/7 Priority Support',
        'Extended Warranty',
        'Free Consultations'
      ],
      popular: false
    }
  ]

  return (
    <section id="pricing" className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Pricing</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Transparent & Competitive Pricing
          </h2>
          <p className="text-gray-600 text-lg">
            No hidden fees, no surprises. Choose the service level that fits your needs. 
            All prices include professional service and guaranteed quality work.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg p-8 ${
                plan.popular ? 'ring-4 ring-primary transform lg:scale-105' : ''
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-secondary mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-6">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-5xl font-bold text-secondary">{plan.price}</span>
                  {plan.price !== 'Custom' && <span className="text-gray-600">+</span>}
                </div>
                <div className="text-gray-500">{plan.period}</div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <FaCheck className="text-primary mt-1 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              <a 
                href="#contact" 
                className={`block text-center py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-primary text-white hover:bg-primary-dark shadow-lg'
                    : 'bg-secondary text-white hover:bg-primary'
                }`}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <FaBolt className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="font-bold text-secondary mb-2">Emergency Service</h4>
              <p className="text-gray-600">24/7 emergency rates apply. Call for immediate assistance.</p>
            </div>
            <div>
              <FaBolt className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="font-bold text-secondary mb-2">Free Estimates</h4>
              <p className="text-gray-600">Get a detailed quote before we start any work.</p>
            </div>
            <div>
              <FaBolt className="text-4xl text-primary mx-auto mb-4" />
              <h4 className="font-bold text-secondary mb-2">Flexible Payment</h4>
              <p className="text-gray-600">Multiple payment options available for your convenience.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
