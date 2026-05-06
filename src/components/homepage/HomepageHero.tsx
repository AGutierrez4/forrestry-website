import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

export default function HomepageHero() {
  return (
    <section className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden bg-[#09090B]">
      {/* Hero gradient glow */}
      <div className="absolute inset-0 hero-gradient" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-green/[0.04] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        {/* Centered copy */}
        <div className="max-w-3xl mx-auto text-center">
          <FadeUp>
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-5">
              The Entrepreneurial Growth Ecosystem
            </p>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              Stop guessing.{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                Start launching.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Forrestry.ai connects strategy, funnels, and content into one ecosystem.
              One conversation builds your Strategic Blueprint. That blueprint powers
              every funnel page, email, ad, and script you need to launch.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={STRIPE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] hover:scale-[1.02] transition-all"
              >
                Get Access to Funnel Studio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Screenshot below hero text */}
        <FadeUp delay={0.25}>
          <div className="mt-16 max-w-[1000px] mx-auto">
            <div className="rounded-xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/[0.08] bg-[#111]">
              <img
                src="/Brain Dump.jpg"
                alt="Funnel Studio Brain Dump Agent interface"
                className="w-full h-auto block"
                loading="eager"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
