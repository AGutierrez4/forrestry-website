import Navbar from '../components/Navbar'
import FoundersPricing from '../components/company/FoundersPricing'
import FAQ from '../components/FAQ'
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
        <FoundersPricing />
        <FAQ />
      </div>
      <Footer links={footerLinks} tagline="Your funnel. Finally finished." />
    </>
  )
}
