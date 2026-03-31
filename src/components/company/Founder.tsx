import FadeUp from '../FadeUp'

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Story Behind the Tool
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Built by a founder, for founders.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo — left on desktop, top on mobile */}
            <div className="shrink-0">
              <img
                src="/founder.png"
                alt="Andrew Gutierrez, Founder of Forrestry.ai"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-green/30"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Andrew Gutierrez</h3>
              <p className="text-green text-sm font-medium mb-5">Founder, Forrestry.ai</p>
              <p className="text-white/70 leading-relaxed mb-4">
                I found the funnel world in 2019 and the learning curve stopped me cold.
                The copy, the design, the tech, the strategy. All of it, at once. I walked
                away and spent the next several years earning my stripes in marketing with
                global brands, local businesses, and everyone in between.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                When I came back in 2025, ready to launch my own offer, I sat down with
                the best AI tools available and felt my heart sink. The output was thin.
                Generic. And I was still staring down 80 hours of real work. So I stopped
                building my funnel and started building the tool that should have existed
                already.
              </p>
              <blockquote className="border-l-4 border-green pl-4 mb-5">
                <p className="text-green italic text-lg leading-relaxed">
                  "This is not a magic button. It takes real work from you. But the 80
                  hours of writing, designing, and second-guessing? That part is over."
                </p>
              </blockquote>
              <p className="text-muted text-sm leading-relaxed">
                I used Funnel Studio™ to build this exact page. All 100 founding spots
                are available until they are gone.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
