import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

export default function FinalCTASection() {
  return (
    <section className="py-24 px-6 bg-[#09090B]">
      <div className="max-w-[800px] mx-auto text-center">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white mb-4">
            Stop Wrestling with Tools. Start Building Your Legacy.
          </h2>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto leading-relaxed mb-10">
            The path to your first 5-figure month or 7-figure year starts with clarity.
            Let's build your ecosystem together.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <a
            href={STRIPE_CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] transition-all"
          >
            Start with Funnel Studio
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
