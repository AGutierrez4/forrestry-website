import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

const includes = [
  'Full Access to Funnel Studio',
  'Brain Dump™ Genius Extraction',
  'Strategic Blueprint Generation',
  'The 4-Page HTML Funnel Stack Builder',
  'Full Conversion Asset Suite (Emails, Ads, Scripts)',
]

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 px-6 bg-[#09090B]">
      <div className="max-w-[600px] mx-auto">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white text-center mb-14">
            One Mission. One Ecosystem. One Clear Price.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-[#111] border border-white/[0.08] rounded-2xl p-8 md:p-10 text-center">
            {/* Price */}
            <div className="mb-8">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-[3.5rem] font-extrabold text-white">$97</span>
                <span className="text-white/50 text-lg">/mo</span>
              </div>
            </div>

            {/* Includes */}
            <ul className="flex flex-col gap-3 text-left max-w-[380px] mx-auto mb-8">
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

            <p className="text-white/50 text-sm mt-4">
              Cancel anytime. 14-day money-back guarantee.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
