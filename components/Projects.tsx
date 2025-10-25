'use client'

import { useState } from 'react'

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all')

  const categories = ['all', 'residential', 'commercial', 'industrial']

  const projects = [
    {
      id: 1,
      title: 'Modern Home Electrical Installation',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=400&fit=crop',
      description: 'Complete rewiring and smart home installation for luxury residence'
    },
    {
      id: 2,
      title: 'Office Building Lighting Upgrade',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop',
      description: 'LED lighting installation with energy-efficient solutions'
    },
    {
      id: 3,
      title: 'Industrial Panel Replacement',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600&h=400&fit=crop',
      description: 'High-capacity electrical panel upgrade for manufacturing facility'
    },
    {
      id: 4,
      title: 'Residential Pool Electrical',
      category: 'residential',
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=400&fit=crop',
      description: 'Pool lighting and electrical system installation'
    },
    {
      id: 5,
      title: 'Retail Store Electrical Setup',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop',
      description: 'Complete electrical setup for new retail location'
    },
    {
      id: 6,
      title: 'Warehouse Power Distribution',
      category: 'industrial',
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&h=400&fit=crop',
      description: 'Power distribution system for large warehouse facility'
    }
  ]

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-block bg-primary/10 px-4 py-2 rounded-full mb-4">
            <span className="text-primary font-semibold">⚡ Our Projects</span>
          </div>
          <h2 className="heading-secondary mb-6">
            Recent Completed Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Take a look at some of our recent work. We take pride in every project, 
            big or small, delivering quality results that exceed expectations.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-lg font-semibold capitalize transition-all ${
                activeCategory === category
                  ? 'bg-primary text-secondary shadow-lg scale-105'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id}
              className="group relative overflow-hidden rounded-xl shadow-lg card-hover"
            >
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-secondary via-secondary/70 to-transparent opacity-90"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <div className="inline-block bg-primary px-3 py-1 rounded-full text-xs font-semibold text-secondary mb-3 capitalize">
                  {project.category}
                </div>
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-700 mb-6">
            Want to see your project here? Let's make it happen!
          </p>
          <a href="#contact" className="btn-primary">
            Start Your Project
          </a>
        </div>
      </div>
    </section>
  )
}
