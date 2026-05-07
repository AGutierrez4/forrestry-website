import FadeUp from './FadeUp'

export default function FounderStory() {
  return (
    <section className="py-16 md:py-[120px] px-6 bg-bg-section-b">
      <div className="max-w-[700px] mx-auto">
        <FadeUp>
          <div className="text-center mb-10">
            <p className="eyebrow mb-4">THE FOUNDER</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text">
              Built by a launcher, for launchers.
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col items-center">
            {/* Founder photo */}
            <img
              src="/founder.webp"
              alt="Forrest, Founder of forrestry.ai"
              width={120}
              height={120}
              className="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-green shadow-[0_0_30px_rgba(74,222,128,0.2)] mb-8"
            />

            {/* Blockquote */}
            <blockquote className="border-l-4 border-l-green pl-6 mb-6">
              <p className="text-[20px] italic text-green leading-relaxed">
                "I built Funnel Studio because I was tired of watching smart entrepreneurs get
                stuck in the gap between having a great offer and getting it in front of people.
                This tool is the bridge."
              </p>
            </blockquote>

            <p className="text-text font-semibold mb-1">— Forrest, Founder of Forrestry.ai</p>

            {/* Footnote */}
            <p className="text-[14px] opacity-60 text-center max-w-[500px]">
              Funnel Studio was born from real launches, real failures, and real frameworks that
              work.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
