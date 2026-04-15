const plans = [
  {
    name: 'Starter',
    desc: 'Everything you need to launch your first funnel and start generating revenue.',
    price: '$97',
    period: '/month',
    note: 'cancel anytime',
    cta: 'Get Started',
    ctaHref: 'https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00',
    ctaStyle: 'outline' as const,
    featured: false,
    features: [
      '3 funnels',
      'AI copywriting',
      'Basic analytics',
      'Email support',
      'Community Access',
      '14-Day Money-Back Guarantee',
    ],
  },
  {
    name: 'Pro',
    desc: 'For serious launchers who want unlimited power and priority access to every feature.',
    price: '$147',
    period: '/month',
    note: null,
    savings: 'Most popular plan',
    cta: 'Get Started',
    ctaHref: 'https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00',
    ctaStyle: 'primary' as const,
    featured: true,
    features: [
      'Unlimited funnels',
      'AI copywriting',
      'Advanced analytics',
      'Priority support',
      'Custom domains',
      '14-Day Money-Back Guarantee',
    ],
  },
  {
    name: 'Annual',
    desc: 'Lock in the best rate. Get everything in Pro plus dedicated onboarding and SLA support.',
    price: '$997',
    period: '/year',
    note: null,
    savings: 'Save over $767 vs monthly Pro',
    cta: 'Get Started',
    ctaHref: 'https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00',
    ctaStyle: 'outline' as const,
    featured: false,
    features: [
      'Everything in Pro',
      '2 months free',
      'Dedicated onboarding',
      'SLA support',
      'Priority Feature Access',
      '14-Day Money-Back Guarantee',
    ],
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 px-6 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-green text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
            PRICING
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
            Simple. Transparent. Built for launchers.
          </h2>
          <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
            No hidden fees. No feature gates. Just the tools you need to go from idea to
            revenue — fast.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1100px] mx-auto mb-12">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-xl p-8 border backdrop-blur-sm transition-all ${
                plan.featured
                  ? 'border-green shadow-[0_0_40px_rgba(74,222,128,0.15)] bg-card-bg md:scale-105'
                  : 'border-card-border bg-card-bg'
              }`}
            >
              {plan.featured && (
                <>
                  <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-purple/10 rounded-xl pointer-events-none" />
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-green-bright to-purple text-black px-4 py-1 rounded-full text-xs font-bold whitespace-nowrap">
                    ⚡ Most Popular
                  </div>
                </>
              )}
              <div className="relative">
                <h3 className="text-2xl font-bold text-text mb-2">{plan.name}</h3>
                <p className="text-muted text-sm mb-6 leading-relaxed">{plan.desc}</p>
                <div className="mb-6">
                  <span className="text-[2.5rem] font-extrabold text-text">{plan.price}</span>
                  <span className="text-muted text-base">{plan.period}</span>
                  {'savings' in plan && plan.savings && (
                    <p className="text-green text-sm mt-1">{plan.savings}</p>
                  )}
                  {plan.note && <p className="text-muted text-sm mt-1">{plan.note}</p>}
                </div>
                <a
                  href={plan.ctaHref}
                  className={`block w-full py-3 rounded-full font-semibold text-base text-center no-underline transition-all mb-8 ${
                    plan.ctaStyle === 'primary'
                      ? 'bg-green text-black hover:bg-green/90 hover:scale-105'
                      : 'bg-transparent text-green border border-green hover:bg-green/10'
                  }`}
                >
                  {plan.cta}
                </a>
                <ul className="flex flex-col gap-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-text">
                      <span className="text-green shrink-0 mt-0.5">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="max-w-[900px] mx-auto bg-card-bg border border-card-border rounded-xl p-6 flex items-start gap-4">
          <span className="text-green text-2xl shrink-0">🛡</span>
          <p className="text-muted leading-relaxed">
            All plans include a{' '}
            <strong className="text-text">14-Day Money-Back Guarantee</strong>.
            Try Funnel Studio™. If it is not for you, email us within 14 days for a full refund.
          </p>
        </div>
      </div>
    </section>
  )
}
