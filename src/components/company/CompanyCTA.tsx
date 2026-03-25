import FadeUp from '../FadeUp'

export default function CompanyCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-green/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-green/[0.08] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
            Free Live Training
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-8">
            Stop building funnels. Start launching them.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-white/70 text-lg max-w-[650px] mx-auto mb-4 leading-relaxed">
            On this free live training, I will show you exactly how I went from staring
            at a blank page to launching a complete funnel ecosystem from a single
            15-minute conversation. You will see the Brain Dump™. You will see the output.
            And you will leave with a clear path to launching yours.
          </p>
          <p className="text-white/40 text-sm max-w-[550px] mx-auto mb-10">
            This is for entrepreneurs with an offer the world needs. Not tire-kickers.
            Not spectators. Founders who are ready to move.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-xl bg-green text-[#0A0A0A] font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
          >
            Reserve My Free Seat
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
