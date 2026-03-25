import Navbar from '../components/Navbar'
import CompanyHero from '../components/company/CompanyHero'
import Problem from '../components/company/Problem'
import RealCost from '../components/company/RealCost'
import Solution from '../components/company/Solution'
import Founder from '../components/company/Founder'
import CompanyCTA from '../components/company/CompanyCTA'
import Footer from '../components/Footer'

const companyNavLinks = [
  { label: 'About', href: '#founder' },
  { label: 'Blog', href: '#' },
]

const companyFooterLinks = [
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
        ctaText="Reserve My Free Seat"
        ctaHref="#"
        signInHref=""
        logoHref="/"
      />
      <CompanyHero />
      <Problem />
      <RealCost />
      <Solution />
      <Founder />
      <CompanyCTA />
      <Footer
        links={companyFooterLinks}
        tagline="Do more. Build less. Launch faster."
      />
    </>
  )
}
