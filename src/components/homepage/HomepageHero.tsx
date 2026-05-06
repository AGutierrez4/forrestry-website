import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL, ECOSYSTEM_ANCHOR } from './constants'

export default function HomepageHero() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#09090B] pt-20">
      {/* Subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-green/[0.06] rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <FadeUp>
          <h1 className="text-[clamp(2.25rem,5.5vw,4rem)] font-extrabold leading-[1.1] mb-6 text-white">
            Build Your Business on a Clear Path.{' '}
            <span className="text-green">Not a Pile of Disconnected Tools.</span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-[clamp(1rem,2.5vw,1.2rem)] text-white/70 mb-10 max-w-[680px] mx-auto leading-relaxed">
            Forrestry.ai is the growth ecosystem for entrepreneurs who are tired of the overwhelm.
            We give you the enterprise-grade strategy and connected tools you need to move from
            "stuck" to "launched" with total confidence.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href={STRIPE_CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] transition-all"
            >
              Get Access to Funnel Studio
            </a>
            <a
              href={ECOSYSTEM_ANCHOR}
              className="text-white/80 text-base no-underline hover:text-green transition-colors font-medium"
            >
              See How the Ecosystem Works ↓
            </a>
          </div>
        </FadeUp>

        {/* Visual element placeholder: connected system nodes */}
        <FadeUp delay={0.3}>
          <div className="mt-16 max-w-[800px] mx-auto">
            <div className="relative flex items-center justify-center gap-6 flex-wrap">
              {['Funnel Studio', 'AYA', 'BrandStory'].map((product, i) => (
                <div
                  key={product}
                  className={`px-6 py-4 rounded-xl border text-sm font-semibold ${
                    i === 0
                      ? 'bg-green/10 border-green/30 text-green'
                      : 'bg-white/5 border-white/10 text-white/50'
                  }`}
                >
                  {product}
                  {i > 0 && <span className="ml-2 text-xs opacity-60">Soon</span>}
                </div>
              ))}
            </div>
            <p className="text-white/40 text-sm mt-4">One ecosystem. Connected by strategy.</p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
