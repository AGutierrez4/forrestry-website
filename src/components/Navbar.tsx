import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavLink {
  label: string
  href: string
}

interface NavbarProps {
  links?: NavLink[]
  ctaText?: string
  ctaHref?: string
  signInHref?: string
  logoHref?: string
}

const defaultLinks: NavLink[] = [
  { label: 'Product', href: '#product' },
  { label: 'Community', href: '#community' },
  { label: 'Pricing', href: '#pricing' },
]

export default function Navbar({
  links = defaultLinks,
  ctaText = 'Join Beta →',
  ctaHref = 'https://app.funnelstudio.forrestry.ai',
  signInHref = 'https://app.funnelstudio.forrestry.ai',
  logoHref = '/',
}: NavbarProps) {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled
          ? 'bg-[#0B1C10]/85 backdrop-blur-xl border-b border-white/[0.06]'
          : ''
      }`}
    >
      <div className="max-w-[1400px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href={logoHref} className="flex items-center gap-2 no-underline">
          <img
            src="/logo.png"
            alt="Forrestry.ai"
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="text-green font-bold text-lg">forrestry.ai</span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-text no-underline text-[0.95rem] hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-4">
          {signInHref && (
            <a
              href={signInHref}
              className="text-text no-underline text-[0.95rem] hover:text-green transition-colors"
            >
              Sign In
            </a>
          )}
          <a
            href={ctaHref}
            className="bg-green text-black px-6 py-2.5 rounded-full font-semibold text-[0.95rem] no-underline hover:bg-green/90 hover:scale-105 transition-all"
          >
            {ctaText}
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden text-text p-2 bg-transparent border-none cursor-pointer"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-4 pt-4 pb-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMobile}
              className="text-text no-underline py-2 text-base hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
          {signInHref && (
            <a
              href={signInHref}
              onClick={closeMobile}
              className="text-text no-underline py-2 text-base hover:text-green transition-colors"
            >
              Sign In
            </a>
          )}
          <a
            href={ctaHref}
            onClick={closeMobile}
            className="bg-green text-black px-6 py-2.5 rounded-full font-semibold text-base no-underline text-center hover:bg-green/90 transition-all"
          >
            {ctaText}
          </a>
        </div>
      )}
    </nav>
  )
}
