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
            Founding Member Beta — Limited to First 100
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2.5rem,6vw,4.5rem)] font-extrabold leading-[1.1] mb-6">
            <span className="text-white">Build your entire funnel from</span>
            <br />
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              a 15-minute conversation.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-green text-base font-semibold mb-2">
            forrestry.ai introduces Funnel Studio™
          </p>
          <p className="text-[clamp(1rem,2.5vw,1.25rem)] text-muted mb-10 max-w-[640px] mx-auto leading-relaxed">
            Funnel Studio™ turns your story into a launch-ready ecosystem of ads, emails,
            and the Perfect Webinar. No more 80-hour grinds.
          </p>
        </FadeUp>

        <FadeUp delay={0.3}>
          <a
            href="#pricing"
            className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Claim Your Founders Spot — $49/mo
          </a>
          <p className="text-muted/60 text-sm">
            $149/mo after founding spots fill. Lock in your rate today.
          </p>
        </FadeUp>

        {/* GIF placeholder — Brain Dump™ demo */}
        <FadeUp delay={0.4}>
          <div className="mt-14 max-w-[720px] mx-auto rounded-2xl border border-card-border bg-card-bg overflow-hidden aspect-video flex items-center justify-center">
            {/* Replace with: <img src="/gifs/brain-dump.gif" alt="Brain Dump™ demo" className="w-full h-full object-cover" /> */}
            <div className="text-center px-6">
              <p className="text-muted text-sm mb-1">GIF_1: Brain Dump™ Demo</p>
              <p className="text-muted/50 text-xs">8s loop — messy input → Strategic Blueprint</p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
