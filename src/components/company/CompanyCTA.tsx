import FadeUp from '../FadeUp'

export default function CompanyCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-green/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-green/[0.08] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-2">
            This is your moment.
          </h2>
          <p className="text-[clamp(1.25rem,3vw,1.75rem)] font-semibold bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent mb-6">
            Don't build it alone.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-10 leading-relaxed">
            Join the founding members building their first funnel with Forrestry.ai.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="https://app.funnelstudio.forrestry.ai"
            className="inline-block px-10 py-4 rounded-xl bg-green text-[#0A0A0A] font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
          >
            Claim Your Founding Member Access →
          </a>
        </FadeUp>
      </div>
    </section>
  )
}
