import FadeUp from '../FadeUp'

export default function CompanyCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Green glow — hidden on mobile for performance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-green/60 to-transparent" />
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-green/[0.08] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-2">
            You have the offer. You have the audience.
          </h2>
          <p className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent mb-8">
            Now finish the funnel.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-muted text-lg max-w-[560px] mx-auto mb-10 leading-relaxed">
            Founding member spots are open. Limited to the first 100. 2-year price lock
            at founding pricing for the people who show up first.
          </p>
        </FadeUp>

        <FadeUp delay={0.2}>
          <a
            href="https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00"
            className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Claim Your Founders Spot — $47/mo
          </a>
          <p className="text-muted text-sm">
            Limited to the first 100 founding members.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
