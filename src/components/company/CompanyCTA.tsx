import FadeUp from '../FadeUp'

export default function CompanyCTA() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Green glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[2px] bg-gradient-to-r from-transparent via-green/60 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-green/[0.08] blur-[80px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-6">
            Free Live Webinar — Founding Member Beta
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold mb-8">
            This is not a public launch. This is the room where it starts.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-4 leading-relaxed">
            On this free live training, I will show you exactly how I went from staring
            at a blank page to launching a complete funnel ecosystem from a single
            15-minute conversation. You will see the Brain Dump&#8482; live. You will see
            the output. And you will leave with a clear path to launching yours. Not
            someday. This week.
          </p>
          <p className="text-white/70 text-lg max-w-[600px] mx-auto mb-4 leading-relaxed">
            The people in this room will be the first to see Funnel Studio&#8482; in action,
            the first to shape the product with their feedback, and the first to access
            founding member pricing before it opens to the public.
          </p>
          <p className="text-white/50 text-base max-w-[600px] mx-auto mb-10">
            There is no replay guarantee. When the room closes, it closes.
          </p>
        </FadeUp>

        {/* Founding member counter */}
        <FadeUp delay={0.2}>
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-2 h-2 rounded-full bg-green animate-pulse" />
            <p className="text-white/70 text-sm font-medium">
              14 of 50 founding member spots claimed
            </p>
          </div>
        </FadeUp>

        {/* Webinar details card */}
        <FadeUp delay={0.25}>
          <div className="bg-card-bg border border-green/30 rounded-2xl p-8 max-w-[480px] mx-auto mb-10">
            <p className="text-white font-bold text-lg mb-4">Not One Funnel Away. One Funnel Today.</p>
            <div className="space-y-2 text-sm text-white/70 mb-6">
              <p>Date: <span className="text-white">April 22nd, 2026</span></p>
              <p>Time: <span className="text-white">[WEBINAR TIME] [TIMEZONE]</span></p>
              <p>Host: <span className="text-white">Andrew Gutierrez, Founder of Forrestry.ai</span></p>
              <p>Cost: <span className="text-green font-semibold">Free</span></p>
            </div>
            <a
              href="#"
              className="inline-block w-full text-center px-10 py-4 rounded-xl bg-green text-[#0A0A0A] font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
            >
              Reserve My Free Seat Now
            </a>
          </div>
        </FadeUp>

        <FadeUp delay={0.35}>
          <p className="text-white/40 text-sm max-w-[500px] mx-auto">
            This is a free live webinar. Founding member pricing is available exclusively
            to live attendees. No purchase necessary to attend.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
