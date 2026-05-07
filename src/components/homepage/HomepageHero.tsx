import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'
import { Zap, Clock, Layers, Sparkles } from 'lucide-react'

const subHeroCards = [
  { icon: Clock, text: 'Launch in days, not months' },
  { icon: Layers, text: 'Proven frameworks built in' },
  { icon: Sparkles, text: 'One input, full ecosystem' },
]

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
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-green/[0.08] border border-green/20 mb-6">
              <Zap size={14} className="text-green" />
              <span className="text-xs font-semibold text-green uppercase tracking-wider">
                The Business Growth Ecosystem for Entrepreneurs
              </span>
            </div>
          </FadeUp>

          <FadeUp delay={0.05}>
            <h1 className="text-[clamp(2.25rem,5vw,3.75rem)] font-extrabold leading-[1.08] tracking-tight text-white mb-6">
              Stop guessing.
              <br />
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                Start launching.
              </span>
            </h1>
          </FadeUp>

          <FadeUp delay={0.1}>
            <p className="text-lg sm:text-xl text-white/60 leading-relaxed max-w-2xl mx-auto mb-8">
              Forrestry.ai turns one conversation into a complete marketing ecosystem:
              funnel pages, webinar scripts, email sequences, and ad copy. All connected,
              all consistent, all ready to launch.
            </p>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href={STRIPE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-green text-white font-bold text-base no-underline shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] hover:scale-[1.02] transition-all"
              >
                Get Access to Funnel Studio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="ml-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 text-white/70 text-base no-underline hover:text-green transition-colors font-medium py-4"
              >
                See How It Works
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="mt-0.5">
                  <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </FadeUp>
        </div>

        {/* Sub-hero cards */}
        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-14">
            {subHeroCards.map((card) => (
              <div
                key={card.text}
                className="flex items-center gap-2.5 px-5 py-3 rounded-full bg-white/[0.04] border border-white/[0.08] text-white/70 text-sm"
              >
                <card.icon size={16} className="text-green shrink-0" />
                {card.text}
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
