import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

const includes = [
  'Full Access to Funnel Studio',
  'Brain Dump™ Genius Extraction',
  'Strategic Blueprint Generation',
  '4-Page HTML Funnel Stack Builder',
  '12-Email Sequence Generator',
  'Social Ad Matrix (Cold, Warm, Hot)',
  'Perfect Webinar Script Builder',
  'Built-in Audit Tool',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">Simple Pricing</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight">
              Everything you need{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                to launch
              </span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="max-w-[480px] mx-auto">
            <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 md:p-10">
              {/* Plan name */}
              <div className="text-center mb-8">
                <p className="text-white/60 text-sm font-medium mb-4">Full Access</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-[3.5rem] font-extrabold text-white">$97</span>
                  <span className="text-white/50 text-lg">/mo</span>
                </div>
              </div>

              {/* Includes */}
              <ul className="flex flex-col gap-3 mb-8">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
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
                className="block w-full py-4 rounded-full bg-green text-black font-bold text-lg text-center no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] transition-all"
              >
                Get Access to Funnel Studio
              </a>

              <p className="text-white/40 text-sm mt-4 text-center">
                Cancel anytime. 14-day money-back guarantee.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
