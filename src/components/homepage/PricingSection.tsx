import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

const includes = [
  'Brain Dump Agent™ — conversational AI intake',
  'Strategic Blueprint generation',
  '4-Page HTML Funnel Stack (squeeze, sales, order, thank you)',
  'Perfect Webinar Builder (60-min script)',
  '60-Second Webinar Hook Script',
  '12-Email Sequence Generator',
  'Social Ad Matrix (cold/warm/hot traffic)',
  'Funnel Video Scripts',
  'Built-in Audit Tool with conversion grades',
  'Content Refinement Bar for iterative editing',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">Start Building</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Everything you need{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                to launch
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              One price. One input. A complete marketing ecosystem.
            </p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="max-w-[480px] mx-auto">
            <div className="relative bg-[#111] border border-green/20 rounded-2xl p-8 md:p-10 shadow-[0_0_40px_rgba(16,185,129,0.04)]">
              {/* Most Popular badge */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-green text-white text-xs font-bold px-4 py-1 rounded-full">
                Most Popular
              </div>

              {/* Plan name */}
              <div className="text-center mb-8 pt-2">
                <h3 className="text-white font-bold text-xl mb-3">Funnel Studio</h3>
                <p className="text-white/50 text-sm mb-4">Complete funnel ecosystem generator</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[3.5rem] font-extrabold text-white">$97</span>
                </div>
                <p className="text-white/40 text-sm mt-1">One-time access</p>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/70">
                    <span className="text-green text-base shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={STRIPE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 rounded-full bg-green text-white font-bold text-base text-center no-underline shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(16,185,129,0.3)] transition-all"
              >
                Get Access to Funnel Studio
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>

              <p className="text-white/40 text-xs mt-5 text-center">
                Trained on frameworks from Brunson, Hormozi, Miller, Sheridan & more
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
