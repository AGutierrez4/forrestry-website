import Navbar from '../components/Navbar'
import PricingHero from '../components/company/PricingHero'
import FoundersPricing from '../components/company/FoundersPricing'
import WhatsIncluded from '../components/company/WhatsIncluded'
import CostComparison from '../components/company/CostComparison'
import GuaranteeSection from '../components/company/GuaranteeSection'
import FAQ from '../components/FAQ'
import PricingFinalCTA from '../components/company/PricingFinalCTA'
import Footer from '../components/Footer'

const navLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

const footerLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function PricingPage() {
  return (
    <>
      <Navbar
        links={navLinks}
        ctaText="Claim Founders Spot"
        ctaHref="#pricing"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <div className="pt-24">
        <PricingHero />
        <FoundersPricing />
        <WhatsIncluded />
        <CostComparison />
        <GuaranteeSection />
        <FAQ />
        <PricingFinalCTA />
      </div>
      <Footer links={footerLinks} tagline="Stop Building. Start Launching." />
    </>
  )
}
