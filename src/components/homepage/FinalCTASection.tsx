import FadeUp from '../FadeUp'
import { STRIPE_CHECKOUT_URL } from './constants'

export default function FinalCTASection() {
  return (
    <section className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="relative rounded-2xl bg-gradient-to-br from-[#059669] via-[#047857] to-[#065F46] p-10 sm:p-16 text-center overflow-hidden">
            {/* Subtle radial overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)]" />

            <div className="relative z-10">
              <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
                Ready to stop guessing and start building?
              </h2>
              <p className="text-white/80 text-lg max-w-xl mx-auto leading-relaxed mb-8">
                Join the Forresters: entrepreneurs who are turning their ideas into real businesses
                with a clear path, proven frameworks, and connected tools.
              </p>
              <a
                href={STRIPE_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-white text-[#047857] font-bold text-base no-underline shadow-lg hover:bg-white/90 hover:scale-[1.02] transition-all"
              >
                Get Access to Funnel Studio — $97/mo
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
