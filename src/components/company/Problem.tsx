import FadeUp from '../FadeUp'

const painPoints = [
  {
    emoji: '⏳',
    title: 'The AI Letdown',
    body: 'You open the AI tool, hit generate, and the output reads like it was written for nobody. Thin. Generic. Not even close to what you needed.',
  },
  {
    emoji: '📝',
    title: 'The Tab Graveyard',
    body: 'Six tabs open. Three subscriptions running. A Notion doc full of half-finished copy. Still no launch date.',
  },
  {
    emoji: '😶',
    title: 'The Comparison Trap',
    body: 'You know what a high-converting funnel looks like. You have studied them. You just cannot get yours to look like that.',
  },
  {
    emoji: '🔥',
    title: 'The Quiet Quit',
    body: 'You start to wonder if maybe this just is not for you.\nIt is.',
  },
]

export default function Problem() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Sound Familiar?
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-2">
            You know exactly what you need to build.
          </h2>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-8 bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
            That was never the problem.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/70 text-center max-w-[640px] mx-auto mb-6 text-lg leading-relaxed">
            You have the offer. You know your audience. You could sketch the funnel on a
            napkin right now. But then you sit down to actually build it, and the real work starts.
          </p>
          <p className="text-white/70 text-center max-w-[640px] mx-auto mb-14 text-lg leading-relaxed">
            The long-form squeeze page. The 60-minute webinar script. The 50-slide deck.
            The email sequences. The social ads that go stale every two weeks. Every single
            asset has to be written, designed, and tested before you ever see a dollar.
            That is not a strategy problem. That is a system problem.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {painPoints.map((point, i) => (
            <FadeUp key={i} delay={0.15 * i}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 text-center hover:border-green/30 transition-colors">
                <span className="text-3xl mb-3 block">{point.emoji}</span>
                <h3 className="text-white font-bold mb-2">{point.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed whitespace-pre-line">{point.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
