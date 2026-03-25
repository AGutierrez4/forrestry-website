import FadeUp from '../FadeUp'

export default function CompanyHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-bright/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        {/* Eyebrow */}
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
            You have the offer. You have the audience. Now finish the funnel.
          </p>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Your entire funnel.</span>
            <br />
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              Built from one conversation.
            </span>
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.2}>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/70 mb-10 max-w-[700px] mx-auto leading-relaxed">
            The squeeze page. The webinar script. The email sequences. The ad copy.
            The entire launch stack that used to take weeks of writing, designing, and
            second-guessing. Built for you, in order, from a single Brain Dump™ conversation.
          </p>
        </FadeUp>

        {/* CTAs */}
        <FadeUp delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
            <a
              href="#"
              className="inline-block px-10 py-4 rounded-xl bg-green text-[#0A0A0A] font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
            >
              Reserve My Free Seat
            </a>
            <a
              href="#solution"
              className="inline-block px-8 py-4 rounded-xl border border-green text-green font-semibold text-lg no-underline hover:bg-green/10 transition-all"
            >
              See How It Works
            </a>
          </div>
        </FadeUp>

        {/* Social proof line */}
        <FadeUp delay={0.4}>
          <p className="text-white/50 text-sm">
            Founding member beta. Limited spots. No credit card required.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
