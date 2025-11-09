import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import FeaturedProjects from '@/components/FeaturedProjects'
import About from '@/components/About'
import Services from '@/components/Services'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <Navigation />
        <Hero />
        <FeaturedProjects />
        <About />
        <Services />
      </div>
      <Footer />
    </main>
  )
}

