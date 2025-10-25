import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Services from '@/components/Services'
import About from '@/components/About'
import WhyChooseUs from '@/components/WhyChooseUs'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import Team from '@/components/Team'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Projects />
      <Testimonials />
      <Team />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  )
}
