import Navbar from '../components/Navbar'
import CompanyHero from '../components/company/CompanyHero'
import StudioBento from '../components/company/StudioBento'
import EfficiencyTable from '../components/company/EfficiencyTable'
import Benefits from '../components/company/Benefits'
import Problem from '../components/company/Problem'
import Founder from '../components/company/Founder'
import Objections from '../components/company/Objections'
import FoundersPricing from '../components/company/FoundersPricing'
import CompanyCTA from '../components/company/CompanyCTA'
import Footer from '../components/Footer'
import LazySection from '../components/LazySection'

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
        ctaHref="https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <main>
        <CompanyHero />
        <StudioBento />
        <EfficiencyTable />
        <LazySection minHeight={500}>
          <Benefits />
        </LazySection>
        <LazySection minHeight={600}>
          <Problem />
        </LazySection>
        <LazySection minHeight={500}>
          <Founder />
        </LazySection>
        <LazySection minHeight={400}>
          <Objections />
        </LazySection>
        <FoundersPricing />
        <CompanyCTA />
      </main>
      <Footer
        links={companyFooterLinks}
        tagline="Your funnel. Finally finished."
      />
    </>
  )
}
