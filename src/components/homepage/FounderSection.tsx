import FadeUp from '../FadeUp'

export default function FounderSection() {
  return (
    <section className="py-24 px-6 bg-[#09090B]">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white text-center mb-14">
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
                className="w-48 h-48 rounded-2xl object-cover border border-green/20 shadow-[0_0_30px_rgba(74,222,128,0.08)]"
              />
            </div>

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/70 text-base leading-relaxed mb-4">
                7+ years helping global B2B brands (aerospace, defense, MedTech, healthcare)
                build and execute enterprise-grade GTM systems. The kind of structure that
                turns scattered efforts into predictable revenue.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Forrestry.ai exists because solopreneurs deserve that same level of strategic
                infrastructure. Not more "hacks." Not another template library. A real system
                that connects strategy to execution in one place.
              </p>
              <p className="text-white font-medium text-base leading-relaxed">
                The mission: give every entrepreneur with gumption a professional-grade
                platform to build their dream.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
