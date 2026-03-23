import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Community from '../components/Community'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <SocialProof />
      <HowItWorks />
      <Pricing />
      <Community />
      <FinalCTA />
      <Footer />
    </>
  )
}
