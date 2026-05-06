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

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        {/* Badge */}
        <FadeUp>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-green/30 backdrop-blur-sm mb-8 text-[13px] tracking-[0.15em]">
            <span className="text-green font-semibold">The Launch Engine</span>
          </div>
        </FadeUp>

        {/* Radial gradient glow behind headline */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 50%, rgba(74,222,128,0.06) 0%, transparent 70%)' }} />

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
            Funnel Studio is the AI-powered launch ecosystem for entrepreneurs who are done
            waiting. Go from raw idea to live, revenue-generating funnel in hours, not months.
          </p>
        </FadeUp>

        {/* CTA */}
        <FadeUp delay={0.3}>
          <div className="mb-4">
            <a
              href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-10 py-4 rounded-xl bg-green text-white font-bold text-lg no-underline shadow-[0_0_40px_rgba(16,185,129,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all"
            >
              Get Access to Funnel Studio
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="text-white/70 text-sm mb-8">
            $97 · One-time access · Complete ecosystem
          </p>
        </FadeUp>

        {/* Floating badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[800px] mx-auto">
          {badges.map((badge) => (
            <FadeUp key={badge.text} delay={0.4 + badge.delay}>
              <div
                className="flex items-center gap-3 px-5 py-4 rounded-xl bg-[rgba(255,255,255,0.04)] border border-[rgba(255,255,255,0.08)] backdrop-blur-sm text-left"
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
