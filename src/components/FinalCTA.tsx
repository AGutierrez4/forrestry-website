export default function FinalCTA() {
  return (
    <section id="final-cta" className="py-24 px-6 relative overflow-hidden">
      {/* Pulsing glow */}
      <div
        className="absolute top-1/2 left-1/2 w-[600px] h-[600px] rounded-full pointer-events-none blur-[120px]"
        style={{
          background: 'linear-gradient(135deg, rgba(74,222,128,0.15), rgba(124,58,237,0.15))',
          animation: 'pulse-glow 4s ease-in-out infinite',
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <p className="text-green text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
          FOUNDING MEMBER OFFER
        </p>
        <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
          This is your moment.
        </h2>
        <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent mb-8">
          Don't build it alone.
        </h3>
        <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed mb-8">
          Join the first 100 Forresters and lock in founding member pricing. Shape the product.
          Build your funnel. Be part of something bigger than a tool.
        </p>

        {/* Progress bar */}
        <div className="max-w-[400px] mx-auto mb-8">
          <div className="flex justify-between text-sm mb-2">
            <span className="text-green font-semibold">23 of 100 spots claimed</span>
            <span className="text-muted">77 remaining</span>
          </div>
          <div className="w-full h-2 bg-white/[0.08] rounded-full overflow-hidden">
            <div className="h-full w-[23%] bg-gradient-to-r from-green-bright to-purple rounded-full" />
          </div>
        </div>

        <a
          href="https://app.forrestry.ai/register"
          className="inline-flex items-center gap-3 bg-green text-black px-10 py-5 rounded-full font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.3)] hover:scale-105 hover:shadow-[0_0_60px_rgba(74,222,128,0.5)] transition-all mb-4"
        >
          Claim Your Founding Member Access <span>→</span>
        </a>
        <p className="text-muted text-sm">$97/mo · Cancel anytime · No credit card to start</p>
      </div>
    </section>
  )
}
