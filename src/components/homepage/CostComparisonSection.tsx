import FadeUp from '../FadeUp'

const comparisons = [
  {
    label: 'Freelance Copywriter',
    cost: '$3,000–$8,000',
    detail: 'Per funnel. 2–4 week turnaround. Revisions extra.',
  },
  {
    label: 'Marketing Agency',
    cost: '$5,000–$15,000',
    detail: 'Per month retainer. 60–90 day onboarding. Lock-in contracts.',
  },
  {
    label: 'Funnel Studio',
    cost: '$97/mo',
    detail: 'Complete ecosystem. Instant output. Cancel anytime.',
    highlight: true,
  },
]

export default function CostComparisonSection() {
  return (
    <section className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Real Cost</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight">
              A blueprint to{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                build results
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[900px] mx-auto">
          {comparisons.map((item, i) => (
            <FadeUp key={item.label} delay={i * 0.08}>
              <div
                className={`rounded-xl p-6 text-center h-full flex flex-col justify-between ${
                  item.highlight
                    ? 'bg-[#111] border-2 border-green/30 shadow-[0_0_40px_rgba(74,222,128,0.06)]'
                    : 'bg-[#111] border border-white/[0.06]'
                }`}
              >
                <div>
                  <p className="text-white/50 text-xs font-medium uppercase tracking-wider mb-3">
                    {item.label}
                  </p>
                  <p className={`text-2xl sm:text-3xl font-extrabold mb-3 ${
                    item.highlight ? 'text-green' : 'text-white'
                  }`}>
                    {item.cost}
                  </p>
                  <p className="text-white/50 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
