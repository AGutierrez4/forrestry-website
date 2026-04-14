import FadeUp from '../FadeUp'

const badges = [
  { text: 'First funnel launched in 8 hours', delay: 0 },
  { text: 'Full email sequence generated', delay: 0.15 },
  { text: 'Webinar script complete', delay: 0.3 },
  { text: 'Launch-ready in one conversation', delay: 0.45 },
]

export default function CompanyHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-bright/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
            For Founders Who Are Ready to Launch
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Your first satisfying launch</span>
            <br />
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              starts with one conversation.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted mb-10 max-w-[640px] mx-auto leading-relaxed">
            You have the offer. You have the audience. The only thing between you and
            your first real launch is the 80-hour funnel stack nobody warned you about.
            That ends here.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="/pricing#pricing"
            className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Claim Your Founders Spot — $49/mo
          </a>
          <p className="text-muted/60 text-sm mb-14">
            $149/mo after founding spots fill. Lock in your rate today.
          </p>
        </FadeUp>

        {/* Floating social proof badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[900px] mx-auto">
          {badges.map((badge) => (
            <FadeUp key={badge.text} delay={0.4 + badge.delay}>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left"
                style={{ animation: `float 3s ease-in-out infinite ${badge.delay}s` }}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-green shrink-0" />
                <span className="text-[0.8rem] text-white/80 leading-snug">{badge.text}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
