import FadeUp from './FadeUp'

const checklist = [
  'Full Funnel Studio access',
  'AI copywriting engine',
  'Webinar script builder',
  'Email sequence generator',
  'Ad copy writer',
  'Community access',
  '14-Day Money-Back Guarantee',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-[120px] px-6 bg-bg-section-a">
      <div className="max-w-[700px] mx-auto text-center">
        <FadeUp>
          <p className="eyebrow mb-4">FOUNDING MEMBER PRICING</p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text mb-8">
            Lock in the founding rate.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 md:p-12">
            {/* Price display */}
            <div className="mb-6">
              <span className="text-[16px] text-muted line-through opacity-50">$97/mo</span>
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-[48px] font-extrabold text-text">$47</span>
                <span className="text-muted text-lg">/mo</span>
              </div>
              <span className="inline-block mt-2 bg-[rgba(74,222,128,0.15)] text-green text-sm font-semibold rounded px-2.5 py-1">
                52% off
              </span>
            </div>

            {/* Progress bar */}
            <div className="max-w-[400px] mx-auto mb-8">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-green font-semibold">23 of 100 spots claimed</span>
                <span className="text-muted">77 remaining</span>
              </div>
              <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
                <div className="h-full w-[23%] bg-gradient-to-r from-green-bright to-purple rounded-full" />
              </div>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 text-left max-w-[360px] mx-auto mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text">
                  <span className="text-green text-[16px] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://app.forrestry.ai/register"
              className="inline-block w-full max-w-[400px] px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
            >
              Claim Your Founding Member Access →
            </a>

            {/* Trust badges */}
            <p className="text-muted text-[13px]">
              Cancel anytime · No credit card required · 14-day money-back guarantee
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
