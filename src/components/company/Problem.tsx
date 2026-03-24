import FadeUp from '../FadeUp'

const painPoints = [
  { emoji: '⏳', text: 'You spend hours on AI prompts that produce nothing usable' },
  { emoji: '🧩', text: "Your tools don't talk to each other, so you become the glue" },
  { emoji: '💸', text: "You're paying for 6 platforms to do what one should" },
  { emoji: '🔥', text: 'You burn out before your funnel ever goes live' },
]

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Problem
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-2">
            You don't have a funnel problem.
          </h2>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-8 bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
            You have a friction problem.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/70 text-center max-w-[700px] mx-auto mb-14 text-lg leading-relaxed">
            Tools like ClickFunnels hand you the bricks and tell you to build a house.
            You end up being the copywriter, the designer, the strategist, and the tech
            person all at once. That's not a tool. That's a second job.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <FadeUp key={i} delay={0.15 * i}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 text-center hover:border-green/30 transition-colors">
                <span className="text-3xl mb-3 block">{point.emoji}</span>
                <p className="text-white/80 font-medium">{point.text}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
