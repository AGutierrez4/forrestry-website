import { useState, useEffect, useRef } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { STRIPE_CHECKOUT_URL, FUNNEL_STUDIO_URL, ECOSYSTEM_ANCHOR } from './constants'

export default function HomepageNavbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const closeMobile = () => setMobileOpen(false)

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4 ${
        scrolled || mobileOpen
          ? 'bg-[#09090B]/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center no-underline">
          <img
            src="/logo.png"
            alt="forrestry.ai"
            height={32}
            className="h-8 w-auto object-contain transition-all"
          />
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {/* Products dropdown */}
          <div ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="flex items-center gap-1 text-[0.95rem] font-medium no-underline bg-transparent border-none cursor-pointer transition-colors text-white/80 hover:text-green"
              aria-expanded={dropdownOpen}
              aria-haspopup="true"
            >
              Products
              <ChevronDown size={16} className={`transition-transform ${dropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {dropdownOpen && (
              <div
                role="menu"
                className="absolute top-full left-0 mt-2 w-64 bg-[#111] rounded-xl shadow-lg border border-white/[0.08] py-2 z-50"
              >
                <a
                  href={FUNNEL_STUDIO_URL}
                  role="menuitem"
                  className="block px-4 py-3 text-white no-underline hover:bg-white/[0.04] transition-colors"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="font-semibold text-sm">Funnel Studio</span>
                  <span className="block text-xs text-white/50 mt-0.5">The Conversion Engine</span>
                </a>
                <a
                  href={ECOSYSTEM_ANCHOR}
                  role="menuitem"
                  className="block px-4 py-3 text-white no-underline hover:bg-white/[0.04] transition-colors opacity-60"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="font-semibold text-sm">Answer Your Audience</span>
                  <span className="block text-xs text-white/50 mt-0.5">Coming Soon</span>
                </a>
                <a
                  href={ECOSYSTEM_ANCHOR}
                  role="menuitem"
                  className="block px-4 py-3 text-white no-underline hover:bg-white/[0.04] transition-colors opacity-60"
                  onClick={() => setDropdownOpen(false)}
                >
                  <span className="font-semibold text-sm">BrandStory</span>
                  <span className="block text-xs text-white/50 mt-0.5">Coming Soon</span>
                </a>
              </div>
            )}
          </div>

          <a
            href="/pricing"
            className="text-[0.95rem] font-medium no-underline transition-colors text-white/80 hover:text-green"
          >
            Pricing
          </a>
          <a
            href="/about"
            className="text-[0.95rem] font-medium no-underline transition-colors text-white/80 hover:text-green"
          >
            About
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href={STRIPE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green text-black px-6 py-2.5 rounded-full font-semibold text-[0.9rem] no-underline hover:bg-green/90 hover:scale-105 transition-all"
          >
            Get Access to Funnel Studio
          </a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 bg-transparent border-none cursor-pointer text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden flex flex-col gap-2 pt-4 pb-6 bg-[#111] rounded-b-xl border-t border-white/[0.06]">
          <a
            href={FUNNEL_STUDIO_URL}
            onClick={closeMobile}
            className="text-white no-underline py-2 px-2 text-base font-medium hover:text-green transition-colors"
          >
            Funnel Studio
          </a>
          <a
            href={ECOSYSTEM_ANCHOR}
            onClick={closeMobile}
            className="text-white/50 no-underline py-2 px-2 text-sm hover:text-green transition-colors"
          >
            Answer Your Audience (Coming Soon)
          </a>
          <a
            href={ECOSYSTEM_ANCHOR}
            onClick={closeMobile}
            className="text-white/50 no-underline py-2 px-2 text-sm hover:text-green transition-colors"
          >
            BrandStory (Coming Soon)
          </a>
          <hr className="border-white/[0.06] my-2" />
          <a
            href="/pricing"
            onClick={closeMobile}
            className="text-white no-underline py-2 px-2 text-base font-medium hover:text-green transition-colors"
          >
            Pricing
          </a>
          <a
            href="/about"
            onClick={closeMobile}
            className="text-white no-underline py-2 px-2 text-base font-medium hover:text-green transition-colors"
          >
            About
          </a>
          <a
            href={STRIPE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="bg-green text-black px-6 py-3 rounded-full font-semibold text-base no-underline text-center hover:bg-green/90 transition-all mt-2"
          >
            Get Access to Funnel Studio
          </a>
        </div>
      )}
    </nav>
  )
}
