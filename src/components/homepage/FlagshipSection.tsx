import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

const pillars = [
  {
    title: 'The Funnel Stack Builder',
    body: 'Stop wrestling with drag-and-drop editors for 24 hours. We generate the HTML for a pro-level 4-page stack. Just copy, paste, and go live.',
    image: '/Funnel Stack.jpg',
    imageAlt: 'Funnel Stack Builder interface',
  },
  {
    title: 'Framework-Driven Copy',
    body: 'No more "robot" text. Every word is rooted in the methodologies of legends like Russell Brunson and Marcus Sheridan.',
    image: '/Strategic Blueprint.jpg',
    imageAlt: 'Strategic Blueprint with framework-driven copy',
  },
  {
    title: 'A Unified Voice',
    body: 'Your ads, your emails, and your pages finally speak the same language. One conversation powers every touchpoint.',
    image: '/Brain Dump.jpg',
    imageAlt: 'Brain Dump conversation powering unified messaging',
  },
]

export default function FlagshipSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-20">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-4">
              Meet Funnel Studio: Where Your Vision Becomes a Reality.
            </h2>
          </div>
        </FadeUp>

        {/* Alternating split layouts */}
        <div className="flex flex-col gap-20">
          {pillars.map((pillar, i) => {
            const isEven = i % 2 === 1
            return (
              <FadeUp key={pillar.title} delay={0.1}>
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${isEven ? 'lg:[direction:rtl]' : ''}`}>
                  {/* Text */}
                  <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                    <h3 className="text-text-dark font-bold text-2xl mb-4">{pillar.title}</h3>
                    <p className="text-text-body text-base leading-relaxed">{pillar.body}</p>
                  </div>
                  {/* Image */}
                  <div className={isEven ? 'lg:[direction:ltr]' : ''}>
                    <div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.08)] border border-gray-200">
                      <img
                        src={pillar.image}
                        alt={pillar.imageAlt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>

        <FadeUp delay={0.2}>
          <div className="text-center mt-20">
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.15)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.25)] hover:scale-[1.02] transition-all"
            >
              Launch Your First Ecosystem with Funnel Studio ($97)
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
