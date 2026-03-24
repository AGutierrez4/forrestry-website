import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import Pricing from '../components/Pricing'
import Community from '../components/Community'
import FinalCTA from '../components/FinalCTA'
import Footer from '../components/Footer'

const funnelStudioNavLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Community', href: '#community' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Home() {
  return (
    <>
      <Navbar
        links={funnelStudioNavLinks}
        ctaText="Join Beta →"
        ctaHref="https://app.funnelstudio.forrestry.ai"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/funnel-studio"
      />
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
