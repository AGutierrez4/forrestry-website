import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

const pillars = [
  {
    icon: '🏗️',
    title: 'The Funnel Stack Builder',
    body: 'Stop wrestling with drag-and-drop editors for 24 hours. We generate the HTML for a pro-level 4-page stack. Just copy, paste, and go live.',
  },
  {
    icon: '📐',
    title: 'Framework-Driven Copy',
    body: 'No more "robot" text. Every word is rooted in the methodologies of legends like Russell Brunson and Marcus Sheridan.',
  },
  {
    icon: '🎯',
    title: 'A Unified Voice',
    body: 'Your ads, your emails, and your pages finally speak the same language. One conversation powers every touchpoint.',
  },
]

export default function FlagshipSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-4">
              Meet Funnel Studio: Where Your Vision Becomes a Reality.
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {pillars.map((pillar, i) => (
            <FadeUp key={pillar.title} delay={i * 0.1}>
              <div className="bg-bg-light border border-gray-200 rounded-2xl p-7 h-full">
                <span className="text-3xl block mb-4">{pillar.icon}</span>
                <h3 className="text-text-dark font-bold text-lg mb-3">{pillar.title}</h3>
                <p className="text-text-body text-sm leading-relaxed">{pillar.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3}>
          <div className="text-center">
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.25)] transition-all"
            >
              Launch Your First Ecosystem with Funnel Studio ($97)
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
