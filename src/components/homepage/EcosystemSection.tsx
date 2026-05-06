import FadeUp from '../FadeUp'
import { FUNNEL_STUDIO_URL, STRIPE_CHECKOUT_URL, ECOSYSTEM_ANCHOR } from './constants'
import { Zap, MessageCircle, Globe } from 'lucide-react'

const funnelStudioFeatures = [
  '4-Page Funnel Stack',
  'Perfect Webinar Builder',
  'Email Sequence Generator',
  'Social Ad Matrix',
]

const ayaFeatures = [
  'Customer Question Research',
  'Content Matrix',
  'Long-Form Blog Generation',
  'Authority Building',
]

const brandStoryFeatures = [
  'Brand Identity Builder',
  'Website Generation',
  'Story Framework',
  'Credibility Signals',
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 relative overflow-hidden bg-[rgba(16,185,129,0.03)] border-y border-green/10">
      {/* Green ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-green/[0.03] rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Ecosystem</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Three connected engines{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                for business growth
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Forrestry.ai isn't just another tool. It's an ecosystem where every component
              shares your strategy, your voice, and your story.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Funnel Studio — Live */}
          <FadeUp delay={0}>
            <div className="relative bg-[#111] border border-green/30 rounded-2xl p-8 shadow-[0_0_40px_rgba(16,185,129,0.06)] h-full flex flex-col">
              <div className="absolute -top-3 left-6 bg-green text-black text-xs font-bold px-3 py-1 rounded-full">
                LIVE
              </div>
              <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                <Zap size={22} className="text-green" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Funnel Studio</h3>
              <span className="text-xs font-bold tracking-wider uppercase text-green mb-3">
                The Launch Engine
              </span>
              <p className="text-white/60 text-sm leading-relaxed mb-5 flex-1">
                One Brain Dump™ conversation generates your complete funnel ecosystem:
                4-page HTML funnel stack, 60-minute webinar scripts, 12-email sequences,
                social ad matrix, and viral hook scripts.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {funnelStudioFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                    <span className="text-green text-sm">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-white/40 text-xs mb-3">Available Now — $97</p>
              <a
                href={FUNNEL_STUDIO_URL}
                className="inline-block w-full text-center px-6 py-3 rounded-full bg-green text-black font-semibold text-sm no-underline hover:bg-green/90 transition-all"
              >
                Learn More
              </a>
            </div>
          </FadeUp>

          {/* Answer Your Audience — Coming Soon */}
          <FadeUp delay={0.1}>
            <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 h-full flex flex-col opacity-70">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5">
                <MessageCircle size={22} className="text-white/40" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">Answer Your Audience</h3>
              <span className="text-xs font-bold tracking-wider uppercase text-white/40 mb-3">
                The Authority Engine
              </span>
              <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                Research what your audience is actually asking, then generate 1,500–2,500 word
                blog posts that establish you as the go-to authority in your space. Built on
                Marcus Sheridan's "Big 5" framework.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {ayaFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                    <span className="text-white/30 text-sm">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-white/30 text-xs font-medium">Coming Soon</p>
            </div>
          </FadeUp>

          {/* BrandStory — Coming Soon */}
          <FadeUp delay={0.2}>
            <div className="bg-[#111] border border-white/[0.06] rounded-2xl p-8 h-full flex flex-col opacity-70">
              <div className="w-12 h-12 rounded-xl bg-white/[0.04] flex items-center justify-center mb-5">
                <Globe size={22} className="text-white/40" />
              </div>
              <h3 className="text-white font-bold text-xl mb-1">BrandStory</h3>
              <span className="text-xs font-bold tracking-wider uppercase text-white/40 mb-3">
                The Identity Engine
              </span>
              <p className="text-white/50 text-sm leading-relaxed mb-5 flex-1">
                Build a brand-consistent website that tells your story and establishes instant
                credibility. When prospects research you, this is what they'll find.
              </p>
              <ul className="flex flex-col gap-2 mb-6">
                {brandStoryFeatures.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/40">
                    <span className="text-white/30 text-sm">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
              <p className="text-white/30 text-xs font-medium">Coming Soon</p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
