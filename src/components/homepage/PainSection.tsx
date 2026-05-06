import FadeUp from '../FadeUp'

const painPoints = [
  {
    icon: '⚙️',
    title: 'Technical Exhaustion',
    body: 'Spending 20+ hours fighting with page builders just to end up with a site that looks amateur. The tools were supposed to make it easy. They didn\'t.',
  },
  {
    icon: '🧭',
    title: 'Strategic Confusion',
    body: 'Staring at a blank screen wondering what your ads, emails, and sales pages should actually say. You know the frameworks exist, but connecting them to your offer feels impossible.',
  },
  {
    icon: '🔌',
    title: 'Fragmented Systems',
    body: 'Using 10 different tools that don\'t talk to each other, leaving you with a business that feels fragile. One change breaks three other things.',
  },
]

export default function PainSection() {
  return (
    <section className="py-24 px-6 bg-bg-light">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-6">
              The "Digital Jungle" is real. We're here to help you navigate it.
            </h2>
            <p className="text-text-body text-lg max-w-[640px] mx-auto leading-relaxed">
              Most great ideas never see the light of day. Not because the founder lacks drive,
              but because the path is buried under a mountain of disconnected tools, confusing
              strategies, and the constant fear of wasting time on the wrong thing.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {painPoints.map((point, i) => (
            <FadeUp key={point.title} delay={i * 0.1}>
              <div className="bg-white border border-gray-200 rounded-2xl p-7 shadow-sm h-full">
                <span className="text-3xl block mb-4">{point.icon}</span>
                <h3 className="text-text-dark font-bold text-lg mb-3">{point.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{point.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <p className="text-center text-text-dark font-semibold text-lg max-w-[600px] mx-auto">
            Forrestry.ai was built to replace that chaos with a single, connected ecosystem.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
