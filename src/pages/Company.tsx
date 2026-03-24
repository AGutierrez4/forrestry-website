import Navbar from '../components/Navbar'
import CompanyHero from '../components/company/CompanyHero'
import Problem from '../components/company/Problem'
import Products from '../components/company/Products'
import HowItWorksCompany from '../components/company/HowItWorksCompany'
import Founder from '../components/company/Founder'
import CompanyCTA from '../components/company/CompanyCTA'
import Footer from '../components/Footer'

const companyNavLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#founder' },
  { label: 'Blog', href: '#' },
]

const companyFooterLinks = [
  { label: 'Products', href: '#products' },
  { label: 'About', href: '#founder' },
  { label: 'Blog', href: '#' },
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
]

export default function Company() {
  return (
    <>
      <Navbar
        links={companyNavLinks}
        ctaText="Launch Your Funnel →"
        ctaHref="https://app.funnelstudio.forrestry.ai"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <CompanyHero />
      <Problem />
      <Products />
      <HowItWorksCompany />
      <Founder />
      <CompanyCTA />
      <Footer
        links={companyFooterLinks}
        tagline="Do more. Build less. Launch faster."
      />
    </>
  )
}
