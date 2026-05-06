import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL, ECOSYSTEM_ANCHOR } from './constants'

export default function HomepageHero() {
  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-[#09090B] pt-24 pb-16">
      {/* Subtle glow effects */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-green/[0.05] rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-purple/[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div>
            <FadeUp>
              <h1 className="text-[clamp(2.5rem,5vw,4.25rem)] font-extrabold leading-[1.08] mb-6">
                <span className="text-white">Build Your Business on a Clear Path.</span>
                <br />
                <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                  Not a Pile of Disconnected Tools.
                </span>
              </h1>
            </FadeUp>

            <FadeUp delay={0.1}>
              <p className="text-[1.125rem] text-white/70 mb-8 max-w-[540px] leading-relaxed">
                Forrestry.ai is the growth ecosystem for entrepreneurs who are tired of the
                overwhelm. Enterprise-grade strategy and connected tools to move from "stuck"
                to "launched" with total confidence.
              </p>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="flex flex-col sm:flex-row items-start gap-4">
                <a
                  href={STRIPE_CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] hover:scale-[1.02] transition-all"
                >
                  Get Access to Funnel Studio
                </a>
                <a
                  href={ECOSYSTEM_ANCHOR}
                  className="inline-flex items-center gap-2 text-white/70 text-base no-underline hover:text-green transition-colors font-medium py-4"
                >
                  See How the Ecosystem Works
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                    <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </FadeUp>
          </div>

          {/* Right: Product screenshots */}
          <FadeUp delay={0.3}>
            <div className="relative">
              {/* Main screenshot: Brain Dump Chat */}
              <div className="rounded-2xl overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.5)] border border-white/10">
                <img
                  src="/Brain Dump.jpg"
                  alt="Funnel Studio Brain Dump Agent interface"
                  className="w-full h-auto block"
                  loading="eager"
                />
              </div>
              {/* Overlapping secondary screenshot */}
              <div className="absolute -bottom-6 -left-6 w-[45%] rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.6)] border border-white/10 hidden lg:block">
                <img
                  src="/Strategic Blueprint.jpg"
                  alt="Strategic Blueprint interface"
                  className="w-full h-auto block"
                  loading="lazy"
                />
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
