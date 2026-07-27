import AboutHero from '../components/about/AboutHero.jsx'
import OurStory from '../components/about/OurStory.jsx'
import ValuesGrid from '../components/about/ValuesGrid.jsx'
import TeamGrid from '../components/about/TeamGrid.jsx'
import CTASection from '../components/about/CTASection.jsx'

const About = () => {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-14">
      <AboutHero />
      <OurStory />
      <ValuesGrid />
      <TeamGrid />
      <CTASection />
    </main>
  )
}

export default About