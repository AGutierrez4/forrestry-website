import FadeUp from '../FadeUp'

export default function PricingFinalCTA() {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Subtle glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full pointer-events-none blur-[120px] opacity-50"
        style={{
          background:
            'radial-gradient(circle, rgba(16,185,129,0.12) 0%, transparent 70%)',
        }}
      />

      <FadeUp>
        <div className="relative z-10 max-w-[600px] mx-auto text-center">
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-text mb-4">
            Ready to stop guessing and start building?
          </h2>
          <p className="text-muted text-base leading-relaxed mb-8 max-w-[480px] mx-auto">
            One purchase. One Brain Dump. A complete, connected funnel
            ecosystem ready to launch.
          </p>

          <a
            href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-white px-8 py-4 rounded-xl font-bold text-base no-underline shadow-[0_0_30px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(16,185,129,0.35)] hover:scale-105 transition-all"
          >
            Get Access to Funnel Studio — $97
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>

          <p className="text-muted text-xs mt-4">
            Cancel anytime. 14-day money-back guarantee.
          </p>
        </div>
      </FadeUp>
    </section>
  )
}
