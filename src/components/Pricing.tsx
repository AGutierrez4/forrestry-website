import FadeUp from './FadeUp'

const checklist = [
  'Full Funnel Studio access',
  'Brain Dump Agent™ conversational AI intake',
  'Strategic Blueprint generation',
  '4-Page HTML Funnel Stack',
  'Perfect Webinar Builder (60-min script)',
  '60-Second Webinar Hook Script',
  '12-Email Sequence Generator',
  'Social Ad Matrix (cold/warm/hot traffic)',
  'Built-in Audit Tool with conversion grades',
  'Content Refinement Bar for iterative editing',
  '14-Day Money-Back Guarantee',
]

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-[120px] px-6 bg-bg-section-a">
      <div className="max-w-[700px] mx-auto text-center">
        <FadeUp>
          <p className="eyebrow mb-4">START BUILDING</p>
          <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text mb-8">
            Everything you need to launch.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 md:p-12">
            {/* Price display */}
            <div className="mb-6">
              <div className="flex items-center justify-center gap-3 mt-2">
                <span className="text-[48px] font-extrabold text-text">$97</span>
              </div>
              <p className="text-muted text-sm mt-2">One-time access</p>
            </div>

            {/* Checklist */}
            <ul className="flex flex-col gap-3 text-left max-w-[400px] mx-auto mb-8">
              {checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-text">
                  <span className="text-green text-[16px] shrink-0 mt-0.5">✓</span>
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <a
              href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full max-w-[400px] px-10 py-4 rounded-xl bg-green text-white font-bold text-lg no-underline shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all mb-4"
            >
              Get Access to Funnel Studio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>

            {/* Trust badges */}
            <p className="text-muted text-[13px]">
              Cancel anytime. 14-day money-back guarantee.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
