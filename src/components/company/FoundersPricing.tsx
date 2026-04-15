import FadeUp from '../FadeUp'

export default function FoundersPricing() {
  return (
    <section id="pricing" className="py-24 px-6">
      <div className="max-w-[600px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Founders Pricing
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Lock in the founding rate before it is gone.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="relative rounded-2xl border border-green/40 bg-card-bg p-8 shadow-[0_0_60px_rgba(74,222,128,0.1)]">
            {/* Founders badge */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green text-black px-5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap">
              Founding Member — Limited to 100 Spots
            </div>

            <div className="text-center mt-4 mb-6">
              <p className="text-muted text-sm line-through mb-1">$149/mo</p>
              <div className="flex items-baseline justify-center gap-2">
                <span className="text-[3rem] font-extrabold text-text">$79</span>
                <span className="text-muted text-lg">/mo</span>
              </div>
              <p className="text-green text-sm font-semibold mt-1">
                47% off — Founding Members Only
              </p>
            </div>

            <ul className="flex flex-col gap-3 mb-8">
              {[
                'Unlimited funnels',
                'AI copywriting from your Brain Dump™',
                'Perfect Webinar script builder',
                'Email sequence generator',
                'Social ad copy (Cold, Warm, Hot)',
                '60-Second Hook scripts',
                'Strategic Blueprint',
                'Priority support',
                '2-year founding rate',
              ].map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-sm text-text">
                  <span className="text-green shrink-0 mt-0.5">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00"
              className="block w-full py-4 rounded-xl bg-green text-black font-bold text-lg text-center no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
            >
              Claim Your Founders Spot
            </a>

            <p className="text-muted text-xs text-center mt-4">
              Cancel anytime. 2-year price lock guarantee.
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
            <span className="text-green text-xl shrink-0">🛡</span>
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
