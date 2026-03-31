import FadeUp from './FadeUp'

const badges = [
  { icon: '⚡', text: 'Idea to live funnel in under 48 hours', delay: 0 },
  { icon: '🧠', text: 'Built on the Perfect Webinar Framework', delay: 0.2 },
  { icon: '✕', text: 'No copywriters. No designers. No code.', delay: 0.4 },
  { icon: '👥', text: 'Join a community of Forresters', delay: 0.6 },
]

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-bright/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1000px] mx-auto px-6 text-center">
        {/* Beta badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-green/30 backdrop-blur-sm mb-8 text-sm">
            <span className="text-green font-semibold">Beta Now Open</span>
            <span className="text-white/60">—</span>
            <span className="text-white/90">23 of 100 Founding Member Spots Claimed</span>
          </div>
        </FadeUp>

        {/* Headline */}
        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Stop Building Funnels.</span>
            <br />
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              Start Launching Them.
            </span>
          </h1>
        </FadeUp>

        {/* Subheadline */}
        <FadeUp delay={0.2}>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-white/70 mb-12 max-w-[700px] mx-auto leading-relaxed">
            Forrestry.ai is the AI-powered launch ecosystem for entrepreneurs who are done
            waiting. Go from raw idea to live, revenue-generating funnel — in hours, not months.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mb-4">
            <a
              href="https://app.forrestry.ai/register"
              className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
            >
              Claim Your Founding Member Access →
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="text-white/50 text-sm mb-12">
            $97/mo · Limited to first 100 members · No credit card required
          </p>
        </FadeUp>

        {/* Floating badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[800px] mx-auto">
          {badges.map((badge) => (
            <FadeUp key={badge.text} delay={0.4 + badge.delay}>
              <div
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm text-left"
                style={{ animation: `float 3s ease-in-out infinite ${badge.delay}s` }}
              >
                <span className="text-xl shrink-0">{badge.icon}</span>
                <span className="text-[0.8rem] text-white/90 leading-snug">{badge.text}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
