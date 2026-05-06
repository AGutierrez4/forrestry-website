import FadeUp from '../FadeUp'

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Builder</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight">
              Built by a founder who's{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                been in the trenches
              </span>
            </h2>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-[900px] mx-auto">
            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border border-green/20 shadow-[0_0_30px_rgba(74,222,128,0.08)]">
                <img
                  src="/founder.webp"
                  alt="Founder of Forrestry.ai"
                  width={192}
                  height={192}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Authority copy */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-white/70 text-base leading-relaxed mb-4">
                7+ years scaling global B2B brands across aerospace, defense, MedTech, and healthcare.
                Built the GTM systems that enterprise teams rely on to turn scattered efforts into
                predictable revenue.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Forrestry.ai packages that same strategic infrastructure for entrepreneurs who refuse
                to settle for amateur tools. Not more "hacks." Not another template library. A real
                system that connects strategy to execution in one place.
              </p>
              <p className="text-white font-semibold text-base">
                The mission: give every entrepreneur with gumption a professional-grade platform
                to build their dream.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
