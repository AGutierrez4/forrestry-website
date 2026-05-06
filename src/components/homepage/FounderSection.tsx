import FadeUp from '../FadeUp'

export default function FounderSection() {
  return (
    <section className="py-24 px-6 bg-bg-warm">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark text-center mb-14">
            Built by a Marketing Professional Who's Been in the Trenches.
          </h2>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="shrink-0">
              <img
                src="/founder.webp"
                alt="Founder of Forrestry.ai"
                width={200}
                height={200}
                loading="lazy"
                className="w-48 h-48 rounded-2xl object-cover shadow-lg"
              />
            </div>

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-text-body text-base leading-relaxed mb-4">
                My name is Andrew, and I built Forrestry because I was tired of seeing brilliant
                ideas die in the gap between "Vision" and "Execution."
              </p>
              <p className="text-text-body text-base leading-relaxed mb-4">
                With 7+ years of experience helping global and national B2B brands scale, I've
                seen how enterprise-grade GTM (Go-To-Market) systems work. I realized that
                solopreneurs didn't need more "hacks." They needed the same holistic structure
                used by the giants, made practical and fast.
              </p>
              <p className="text-text-dark text-base leading-relaxed font-medium">
                Forrestry.ai is my mission to give every entrepreneur with gumption a
                professional-grade platform to build their dream.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
