import FadeUp from '../FadeUp'

const objections = [
  {
    q: 'Will this work for my niche?',
    a: 'If your buyer needs to understand the value before they purchase, a funnel will work. Coaches, consultants, SaaS founders, course creators, service providers. The Brain Dump™ adapts to your specific offer and audience.',
  },
  {
    q: 'How is this different from ChatGPT?',
    a: 'ChatGPT gives you one asset at a time with no context between them. Funnel Studio™ builds your entire launch stack from a single conversation. Every asset is connected to your story, your offer, and your audience. Nothing is generated in isolation.',
  },
  {
    q: 'I already have a funnel builder. Do I need this too?',
    a: 'Funnel Studio™ is not a page builder. It is a content engine. It generates the copy, scripts, and sequences that go inside your funnel. Use the output in whatever builder you already have.',
  },
  {
    q: 'What if I am not technical?',
    a: 'The Brain Dump™ is a conversation. You talk about your offer, your audience, and your story. No prompts to engineer, no templates to fill out. If you can describe what you sell, you can use this.',
  },
]

export default function Objections() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[800px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Before You Decide
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            You might be thinking...
          </h2>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {objections.map((obj, i) => (
            <FadeUp key={i} delay={0.1 * i}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-green/30 transition-colors h-full">
                <h3 className="text-white font-bold text-sm mb-3">"{obj.q}"</h3>
                <p className="text-muted text-sm leading-relaxed">{obj.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
