import FadeUp from '../FadeUp'

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Why We Built This
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            You've been doing this alone long enough.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo — top on mobile, right on desktop */}
            <div className="md:order-2 shrink-0">
              <img
                src="/founder.png"
                alt="Andrew Gutierrez, Founder of Forrestry.ai"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-green/30"
              />
            </div>

            {/* Bio */}
            <div className="md:order-1 text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Andrew Gutierrez</h3>
              <p className="text-green text-sm font-medium mb-5">Founder, Forrestry.ai</p>
              <p className="text-white/70 leading-relaxed mb-4">
                I was you. Great idea, real drive, and a graveyard of half-built funnels to
                show for it. Not because I lacked the strategy. Because every tool I tried
                made me do more work, not less. I built Forrestry.ai for the founder who is
                ready to launch but keeps getting buried before they get there. You don't need
                another tool that hands you a blank page. You need a system that builds with you.
              </p>
              <p className="text-white/50 text-sm italic">
                We're not just building tools. We're building the Forresters. A community
                of founders who actually launch.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
