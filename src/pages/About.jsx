import Navbar from '../components/layout/Navbar.jsx'
import Footer from '../components/layout/Footer.jsx'
import AboutHero from '../components/about/AboutHero.jsx'
import OurStory from '../components/about/OurStory.jsx'
import ValuesGrid from '../components/about/ValuesGrid.jsx'
import TeamGrid from '../components/about/TeamGrid.jsx'
import CTASection from '../components/about/CTASection.jsx'

const About = () => {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />

      <main className="max-w-5xl mx-auto px-6 py-12 space-y-14">
        <AboutHero />
        <OurStory />
        <ValuesGrid />
        <TeamGrid />
        <CTASection />
      </main>

      <Footer />
    </div>
  )
}

export default About