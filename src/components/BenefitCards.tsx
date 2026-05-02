import FadeUp from './FadeUp'

interface BenefitCardData {
  icon: string
  headline: string
  description: string
}

const benefits: BenefitCardData[] = [
  {
    icon: '🚀',
    headline: 'Launch in days, not months',
    description:
      'Stop waiting for the perfect funnel. Brain Dump your idea, and Funnel Studio builds the copy, the pages, and the sequences. You launch while others are still outlining.',
  },
  {
    icon: '💬',
    headline: 'Every piece speaks the same language',
    description:
      'Your webinar script, your emails, your ads — they all come from one strategic conversation. No Frankenstein funnels. No messaging drift.',
  },
  {
    icon: '📈',
    headline: 'Built on frameworks that convert',
    description:
      'The Perfect Webinar. Hook-Story-Offer. Soap Opera Sequences. These are not templates. They are proven structures baked into every output.',
  },
]

export default function BenefitCards() {
  return (
    <section className="py-16 md:py-[120px] px-6 bg-bg-section-a">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">THE OUTCOME</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text">
              What changes after Funnel Studio.
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {benefits.map((b, i) => (
            <FadeUp key={b.headline} delay={i * 0.1}>
              <div className="bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] rounded-xl p-8 h-full hover:border-[rgba(74,222,128,0.3)] hover:-translate-y-0.5 transition-all duration-200">
                <span className="text-[36px] block mb-4">{b.icon}</span>
                <h3 className="text-[20px] font-bold text-text mb-3">{b.headline}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
