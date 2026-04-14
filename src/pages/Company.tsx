import Navbar from '../components/Navbar'
import CompanyHero from '../components/company/CompanyHero'
import StudioBento from '../components/company/StudioBento'
import EfficiencyTable from '../components/company/EfficiencyTable'
import Benefits from '../components/company/Benefits'
import Problem from '../components/company/Problem'
import Founder from '../components/company/Founder'
import FoundersPricing from '../components/company/FoundersPricing'
import CompanyCTA from '../components/company/CompanyCTA'
import Footer from '../components/Footer'

const companyNavLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

const companyFooterLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function Company() {
  return (
    <>
      <Navbar
        links={companyNavLinks}
        ctaText="Claim Founders Spot"
        ctaHref="/pricing#pricing"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <CompanyHero />
      <StudioBento />
      <EfficiencyTable />
      <Benefits />
      <Problem />
      <Founder />
      <FoundersPricing />
      <CompanyCTA />
      <Footer
        links={companyFooterLinks}
        tagline="Your funnel. Finally finished."
      />
    </>
  )
}
