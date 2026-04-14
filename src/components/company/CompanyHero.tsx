import FadeUp from '../FadeUp'
import LazyVideo from '../LazyVideo'

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
            href="/pricing#pricing"
            className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all mb-4"
          >
            Claim Your Founders Spot — $49/mo
          </a>
          <p className="text-muted/60 text-sm">
            $149/mo after founding spots fill. Lock in your rate today.
          </p>
        </FadeUp>

        {/* Brain Dump™ demo */}
        <FadeUp delay={0.4}>
          <div className="mt-14 max-w-[720px] mx-auto rounded-2xl bg-[#1A1A1A] border border-[rgba(74,222,128,0.08)] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
            <div className="rounded-xl overflow-hidden">
              <LazyVideo
                src="/Brain-Dump-Demo.webm"
                className="w-full aspect-video object-cover"
              />
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
