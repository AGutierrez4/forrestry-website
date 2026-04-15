const steps = [
  { num: 1, text: 'Squeeze page, upsell, and thank you pages generated' },
  { num: 2, text: 'Full 60-minute webinar script written from your story' },
  { num: 3, text: 'Email sequences and social ad copy completed for you' },
  { num: 4, text: 'Fully functional funnel stack launched in 8 hours' },
]

export default function CompanyHero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Glow effects — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-green-bright/[0.08] rounded-full blur-[120px] pointer-events-none" />
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple/[0.08] rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto px-6 text-center">
        <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
          For Founders Who Are Tired Of Being Stuck
        </p>

        <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
          <span className="text-white">This is the launch that changes everything.</span>
          <br />
          <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
            It starts with one conversation.
          </span>
        </h1>

        <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted mb-10 max-w-[640px] mx-auto leading-relaxed">
          You had the idea. You had the momentum. Then you sat down to build the funnel
          and realized it was 80 hours of work nobody warned you about. That wall
          between you and your first real launch? It just came down.
        </p>

        <div>
          <a
            href="https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00"
            className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Claim Your Founders Spot — $79/mo
          </a>
          <p className="text-muted text-sm mb-14">
            $149/mo after founding spots fill. Lock in your rate today.
          </p>
        </div>

        {/* Sequential outcome steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[960px] mx-auto">
          {steps.map((step, i) => (
            <div
              key={step.num}
              className="flex items-start gap-3 px-4 py-3.5 rounded-xl bg-white/[0.03] border border-white/[0.06] text-left h-full"
              style={{ animation: `float 3s ease-in-out infinite ${i * 0.15}s` }}
            >
              <span className="w-6 h-6 rounded-full bg-green/20 text-green text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                {step.num}
              </span>
              <span className="text-[0.8rem] text-white/80 leading-snug">{step.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
