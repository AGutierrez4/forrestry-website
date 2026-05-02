import FadeUp from '../FadeUp'

const steps = [
  {
    num: '1',
    text: 'Sign up and get instant access to Funnel Studio.',
  },
  {
    num: '2',
    text: 'Run your first Brain Dump. Generate your Strategic Blueprint.',
  },
  {
    num: '3',
    text: 'Build your webinar script, email sequences, and ad copy.',
  },
  {
    num: '4',
    text: 'If it\'s not for you, email us within 14 days for a full refund.',
  },
]

export default function GuaranteeSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[700px] mx-auto">
        <FadeUp>
          <div className="bg-card-bg border border-card-border rounded-2xl p-8 md:p-10">
            <div className="text-center mb-8">
              <span className="text-4xl mb-4 block">🛡</span>
              <h2 className="text-[clamp(1.5rem,3vw,2rem)] font-bold text-text mb-3">
                14-Day Money-Back Guarantee
              </h2>
              <p className="text-muted text-base leading-relaxed max-w-[500px] mx-auto">
                Try Funnel Studio with zero risk. Here's exactly how it works.
              </p>
            </div>

            <div className="flex flex-col gap-4 mb-8">
              {steps.map((step) => (
                <div key={step.num} className="flex items-start gap-4">
                  <span className="w-7 h-7 rounded-full bg-green/15 text-green text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {step.num}
                  </span>
                  <p className="text-text text-sm leading-relaxed">{step.text}</p>
                </div>
              ))}
            </div>

            <div className="border-t border-card-border pt-6">
              <h3 className="text-text font-semibold text-sm mb-2">Cancellation</h3>
              <p className="text-muted text-sm leading-relaxed">
                Cancel anytime from your account. No contracts. No penalties. No
                "retention specialists." If you cancel and come back later, you'll
                be at the current price, not the founding rate.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
