import FadeUp from '../FadeUp'

const painPoints = [
  {
    emoji: '⏳',
    title: 'The AI Letdown',
    body: 'You hit \'generate\' and get generic robot-fluff. It doesn\'t sound like you, and it definitely won\'t sell for you.',
  },
  {
    emoji: '📝',
    title: 'The Tab Graveyard',
    body: '14 tabs open, three subscriptions running, and a Notion doc full of half-finished copy. Still no launch date.',
  },
  {
    emoji: '😶',
    title: 'The Comparison Trap',
    body: 'You know what a high-converting funnel looks like. You\'ve studied them. You just can\'t make yours look — or feel — the same.',
  },
  {
    emoji: '🔥',
    title: 'The Founder\'s Burnout',
    body: 'You start to wonder if you\'re "not a funnel person." (Spoiler: You are. You just need a better system.)',
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
            You have the strategy. You have the offer.
          </h2>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-8 bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
            You just don't have the 80 hours.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-white/70 text-center max-w-[640px] mx-auto mb-6 text-lg leading-relaxed">
            You've been through the challenges. You've sketched the funnel on a napkin.
            You know exactly who you're serving. But the moment you sit down to build,
            the "One-Yard Line" syndrome kicks in.
          </p>
          <p className="text-white/70 text-center max-w-[640px] mx-auto mb-14 text-lg leading-relaxed">
            The 60-minute script doesn't write itself. The 15-email sequence feels like
            a mountain. The "Frankenstein" funnel starts to emerge — where nothing quite
            matches, and the tech feels like it's winning. Most funnels die here. Not
            because the vision was wrong, but because the execution was exhausting.
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
