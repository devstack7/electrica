'use client'

import { FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa'
import Image from 'next/image'

export default function Team() {
  const team = [
    {
      name: 'James Wilson',
      role: 'Lead Electrician',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
      bio: 'Specialising in custom builds and renovations throughout Melbourne',
      linkedin: '#',
      twitter: '#',
      email: 'james@j-ampgroup.com.au'
    },
    {
      name: 'Robert Davis',
      role: 'Senior Electrician',
      image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop',
      bio: 'Expert in electrical fit-outs and commercial projects',
      linkedin: '#',
      twitter: '#',
      email: 'robert@j-ampgroup.com.au'
    },
    {
      name: 'Thomas Miller',
      role: 'Licensed Electrician',
      image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
      bio: 'Specialist in smart home installations and energy-efficient solutions',
      linkedin: '#',
      twitter: '#',
      email: 'thomas@j-ampgroup.com.au'
    },
    {
      name: 'Jennifer Taylor',
      role: 'Project Manager',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
      bio: 'Coordinates renovation and extension projects with precision',
      linkedin: '#',
      twitter: '#',
      email: 'jennifer@j-ampgroup.com.au'
    }
  ]

  return (
    <section id="team" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Our Team</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg">
            Our team of licensed, certified electricians brings years of experience and 
            dedication to every project. Get to know the professionals who&apos;ll be working on your property.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg card-hover"
            >
              <div className="relative overflow-hidden">
                <Image 
                  src={member.image} 
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/50 to-transparent"></div>
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-semibold mb-3">{member.role}</p>
                  <p className="text-sm text-gray-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.bio}
                  </p>
                  
                  {/* Social Links */}
                  <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <a 
                      href={member.linkedin} 
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition"
                    >
                      <FaLinkedin className="text-sm" />
                    </a>
                    <a 
                      href={member.twitter} 
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition"
                    >
                      <FaTwitter className="text-sm" />
                    </a>
                    <a 
                      href={`mailto:${member.email}`} 
                      className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-primary transition"
                    >
                      <FaEnvelope className="text-sm" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-secondary to-black rounded-2xl p-12 text-center text-white border-2 border-primary/30">
          <h3 className="text-3xl font-bold mb-4">Join Our Growing Team!</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We&apos;re always looking for skilled electricians to join our team. 
            If you&apos;re passionate about quality work and customer service, we&apos;d love to hear from you.
          </p>
          <a href="mailto:careers@j-ampgroup.com.au" className="btn-primary">
            View Open Positions
          </a>
        </div>
      </div>
    </section>
  )
}
