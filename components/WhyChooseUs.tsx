'use client'

import { FaBolt, FaShieldAlt, FaDollarSign, FaHeadset, FaCertificate, FaThumbsUp } from 'react-icons/fa'

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <FaCertificate />,
      title: 'Licensed & Certified',
      description: 'All our electricians are fully licensed, certified, and undergo regular training to stay updated with the latest codes and technologies.'
    },
    {
      icon: <FaShieldAlt />,
      title: 'Fully Insured',
      description: 'We carry comprehensive insurance coverage to protect you, your property, and our team during every project.'
    },
    {
      icon: <FaBolt />,
      title: '24/7 Emergency Service',
      description: 'Electrical emergencies don\'t wait. We\'re available round the clock to handle urgent electrical issues promptly.'
    },
    {
      icon: <FaDollarSign />,
      title: 'Upfront Pricing',
      description: 'No hidden fees or surprises. We provide clear, detailed estimates before starting any work.'
    },
    {
      icon: <FaHeadset />,
      title: 'Excellent Support',
      description: 'Our friendly customer service team is always ready to answer your questions and address your concerns.'
    },
    {
      icon: <FaThumbsUp />,
      title: '100% Satisfaction',
      description: 'We stand behind our work with a satisfaction guarantee. If you\'re not happy, we\'ll make it right.'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-secondary to-accent text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 right-10 text-primary text-9xl"><FaBolt /></div>
        <div className="absolute bottom-10 left-10 text-primary text-9xl"><FaBolt /></div>
      </div>

      <div className="container-custom relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/20 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Why Choose Us</span>
          </div>
          <h2 className="heading-secondary text-white mb-6">
            Why Thousands Choose Electrica
          </h2>
          <p className="text-gray-300 text-lg">
            We're not just another electrical service provider. Here's what sets us apart and 
            makes us the preferred choice for electrical solutions.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 card-hover"
            >
              <div className="bg-primary w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <div className="text-2xl text-secondary">
                  {reason.icon}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
              <p className="text-gray-300 leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-white/20 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Experience the Difference?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Electrica for all their electrical needs. 
            Get your free quote today and see why we're the best in the business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="btn-primary">
              Get Free Quote
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
