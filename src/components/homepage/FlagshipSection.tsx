import FadeUp from '../FadeUp'
import SlideIn from '../SlideIn'
import { STRIPE_CHECKOUT_URL } from './constants'

const tools = [
  {
    title: 'Brain Dump™',
    body: 'Talk to our AI like a mentor. Describe your business naturally, and we extract your core transformation, Big Domino statement, audience pain points, and offer architecture into a structured foundation.',
    image: '/Brain Dump.jpg',
    imageAlt: 'Brain Dump conversation interface',
  },
  {
    title: 'Strategic Blueprint',
    body: 'Your Brain Dump becomes a comprehensive strategic blueprint that feeds every downstream tool. One input, consistent messaging everywhere. Framework-driven by Russell Brunson, Alex Hormozi, and Marcus Sheridan.',
    image: '/Strategic Blueprint.jpg',
    imageAlt: 'Strategic Blueprint document interface',
  },
  {
    title: 'Funnel Stack',
    body: 'Generate production-ready HTML for your complete funnel: squeeze page, sales page, order page, and thank you page. Headlines, persuasion copy, CTAs, FAQs, trust badges, and guarantees. Copy, paste, go live.',
    image: '/Funnel Stack.jpg',
    imageAlt: 'Funnel Stack Builder interface',
  },
]

export default function FlagshipSection() {
  return (
    <section className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Tools</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight">
              Three tools,{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                built to be connected
              </span>
            </h2>
          </div>
        </FadeUp>

        <div className="flex flex-col gap-20 lg:gap-28">
          {tools.map((tool, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={tool.title}
                className={`flex flex-col ${isEven ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-14`}
              >
                {/* Text */}
                <SlideIn from={isEven ? 'right' : 'left'} delay={0.1}>
                  <div className="flex-1 max-w-lg">
                    <h3 className="text-white font-extrabold text-xl sm:text-2xl tracking-tight mb-3">
                      {tool.title}
                    </h3>
                    <p className="text-white/50 leading-relaxed text-base">{tool.body}</p>
                  </div>
                </SlideIn>

                {/* Screenshot */}
                <SlideIn from={isEven ? 'left' : 'right'} delay={0.2}>
                  <div className="flex-1 w-full max-w-xl">
                    <div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/[0.08] bg-[#111]">
                      <img
                        src={tool.image}
                        alt={tool.imageAlt}
                        className="w-full h-auto block"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </SlideIn>
              </div>
            )
          })}
        </div>

        <FadeUp delay={0.2}>
          <div className="text-center mt-16">
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-green text-white font-bold text-base no-underline shadow-[0_0_30px_rgba(16,185,129,0.15)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(16,185,129,0.25)] hover:scale-[1.02] transition-all"
            >
              Get Access to Funnel Studio
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
