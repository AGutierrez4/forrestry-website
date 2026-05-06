import FadeUp from './FadeUp'

export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 px-6 relative overflow-hidden">
      {/* Pulsing glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: 'linear-gradient(135deg, rgba(16,185,129,0.15), rgba(124,58,237,0.15))',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />

      <FadeUp>
        <div className="relative z-10 max-w-[800px] mx-auto text-center">
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
            Ready to stop guessing and start building?
          </h2>
          <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed mb-8">
            Join the Forresters: entrepreneurs who are turning their ideas into real businesses
            with a clear path, proven frameworks, and connected tools.
          </p>

          <a
            href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green text-white px-10 py-5 rounded-full font-bold text-lg no-underline shadow-[0_0_40px_rgba(16,185,129,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(16,185,129,0.5)] transition-all mb-4"
          >
            Get Access to Funnel Studio — $97
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <p className="text-muted text-sm">One-time access. Cancel anytime. 14-day money-back guarantee.</p>
        </div>
      </FadeUp>
    </section>
  )
}
