import FadeUp from '../FadeUp'

export default function CompanyHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-bright/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
            Free Live Webinar — Founding Member Beta — Limited Seats
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Not One Funnel Away.</span>
            <br />
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              One Funnel Today.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/70 mb-10 max-w-[600px] mx-auto leading-relaxed">
            You have the offer. You have the audience. The only thing standing between
            you and launch day is the 80-hour funnel stack nobody warned you about.
            This free live webinar changes that.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="#"
            className="inline-block px-10 py-4 rounded-xl bg-green text-[#0A0A0A] font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Reserve My Free Seat — It's Free
          </a>
          <p className="text-white/40 text-sm">
            Live. Free. No replay guarantee. Founding member pricing available to live attendees only.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
