import FadeUp from '../FadeUp'
import { Shield } from 'lucide-react'

export default function FoundersPricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-[600px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Start Building
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Everything you need to launch.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative rounded-2xl border border-green/40 bg-card-bg p-8 shadow-[0_0_60px_rgba(16,185,129,0.1)]">
            {/* Badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green text-white px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
              Most Popular
            </div>

            <div className="text-center mt-4 mb-6">
              <div className="text-2xl mb-2">
                <span className="font-black text-white">funnel</span><span className="font-light text-[#818cf8]">studio</span>
              </div>
              <p className="text-muted text-sm mb-3">Complete funnel ecosystem generator</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-[3rem] font-extrabold text-text">$97</span>
              </div>
              <p className="text-muted text-sm mt-1">
                One-time access
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {[
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
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text">
                  <span className="text-green shrink-0 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/fZu28s3GX5zZaUk3HwfrW02"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-green text-white font-bold text-lg text-center no-underline shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all"
            >
              Get Access to Funnel Studio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            <p className="text-muted text-xs text-center mt-4">
              Cancel anytime. 14-day money-back guarantee.
            </p>
          </div>
        </FadeUp>

        {/* Trust badges */}
        <FadeUp delay={0.25}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-muted text-xs">
            <div className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>14-Day Money-Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>Secure Stripe Checkout</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>Cancel Anytime</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green">✓</span>
              <span>Instant Access</span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <div className="mt-8 bg-card-bg border border-card-border rounded-xl p-5 flex items-start gap-3">
            <Shield size={20} className="text-green shrink-0 mt-0.5" />
            <p className="text-muted text-sm leading-relaxed">
              <span className="text-text font-semibold">14-Day Money-Back Guarantee.</span>{' '}
              Try Funnel Studio™. If it is not for you, email us within 14 days for a full refund.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
