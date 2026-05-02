import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import SocialProof from '../components/SocialProof'
import HowItWorks from '../components/HowItWorks'
import ComparisonTable from '../components/ComparisonTable'
import BenefitCards from '../components/BenefitCards'
import FounderStory from '../components/FounderStory'
import Pricing from '../components/Pricing'
import Community from '../components/Community'
import FAQ from '../components/FAQ'
import Footer from '../components/Footer'

const funnelStudioNavLinks = [
  { label: 'Product', href: '#product' },
  { label: 'Community', href: '#community' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
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
      <ComparisonTable />
      <BenefitCards />
      <FounderStory />
      <Pricing />
      <Community />
      <FAQ />
      <Footer tagline="Stop Building. Start Launching." />
    </>
  )
}
