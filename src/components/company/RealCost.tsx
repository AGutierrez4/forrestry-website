import FadeUp from '../FadeUp'

const lineItems = [
  {
    label: 'Long-Form Squeeze Page',
    detail: "Real, resonant copy that speaks to your avatar's deepest pain. 10\u201315 hours of writing, testing, and rewriting.",
  },
  {
    label: '60-Minute Webinar Script + 50-Slide Deck',
    detail: 'Every word of the hook, origin story, three secrets, stack, and close. 20\u201325 hours minimum.',
  },
  {
    label: 'Social Ad Copy (Ongoing)',
    detail: 'Written, tested, and rotated constantly to stay ahead of ad fatigue. 10\u201315 hours every single launch cycle.',
  },
  {
    label: 'Full Email Stack',
    detail: 'Pre-show indoctrination, show-day reminders, post-show objection handling, cart close. 10\u201315 hours minimum.',
  },
  {
    label: '60-Second Promo for TikTok and Instagram',
    detail: 'Short-form video hooks that actually convert. 5\u201310 hours of scripting and optimizing.',
  },
]

export default function RealCost() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Real Cost
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-4">
            A complete funnel stack is not a landing page. It is 80 hours of work.
          </h2>
          <p className="text-white/70 text-center max-w-[640px] mx-auto mb-12 text-lg">
            And that is for someone who already knows what they are doing.
          </p>
        </FadeUp>

        <div className="max-w-[640px] mx-auto mb-12 space-y-6">
          {lineItems.map((item, i) => (
            <FadeUp key={i} delay={0.1 * i}>
              <div className="flex gap-3">
                <span className="text-green mt-1 shrink-0">●</span>
                <div>
                  <p className="text-white font-semibold">{item.label}</p>
                  <p className="text-white/60 text-sm leading-relaxed">{item.detail}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.6}>
          <div className="bg-card-bg border-l-4 border-green rounded-xl p-6 max-w-[640px] mx-auto">
            <p className="text-white/80 leading-relaxed">
              Eighty hours. At minimum. And that is before the imposter syndrome sets
              in. The paralyzing fear that your copy is not good enough, your hook is
              not sharp enough, or your offer will not convert.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
