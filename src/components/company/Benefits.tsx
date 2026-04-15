import FadeUp from '../FadeUp'

const benefits = [
  {
    icon: '🚀',
    title: 'From Builder to Launcher',
    body: 'You have been building long enough. The squeeze page, the script, the emails, the ads. Funnel Studio™ generates the full stack so you can stop assembling and start shipping.',
  },
  {
    icon: '⏱',
    title: 'Weeks back in your calendar',
    body: 'The average funnel launch takes 80+ hours of writing, designing, and second-guessing. A single Brain Dump™ conversation compresses that into an afternoon.',
  },
  {
    icon: '🧩',
    title: 'One conversation replaces your tool stack',
    body: 'No more bouncing between your AI writer, your page builder, your email platform, and your ad manager. One input. Every asset. All connected.',
  },
]

export default function Benefits() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            What Changes
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            What changes after one conversation.
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((b, i) => (
            <FadeUp key={b.title} delay={0.1 * i}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-7 hover:border-green/30 transition-colors h-full">
                <span className="text-3xl mb-4 block">{b.icon}</span>
                <h3 className="text-white font-bold text-lg mb-3">{b.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{b.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
