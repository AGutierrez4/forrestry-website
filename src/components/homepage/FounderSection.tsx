import FadeUp from '../FadeUp'
import { Quote } from 'lucide-react'

export default function FounderSection() {
  return (
    <section className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center mb-14">
            <Quote size={32} className="text-green/40 mx-auto mb-4" />
            <p className="text-xs font-semibold text-green uppercase tracking-wider">From the Founder</p>
          </div>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="flex flex-col md:flex-row items-center gap-10 max-w-[900px] mx-auto">
            {/* Photo */}
            <div className="shrink-0">
              <div className="w-48 h-48 rounded-2xl overflow-hidden border border-green/20 shadow-[0_0_30px_rgba(16,185,129,0.08)]">
                <img
                  src="/founder.webp"
                  alt="Andrew Gutierrez, Founder of Forrestry.ai"
                  width={192}
                  height={192}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Copy */}
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-white font-extrabold text-xl mb-4">
                I built this because I needed it first.
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                After 7 years in marketing trenches helping global B2B brands and national companies,
                I sold my trucking business in 2019 and discovered ClickFunnels. I had the strategy
                background, but hit the wall of execution.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                As a HubSpot partner, I understood what enterprise-grade ecosystems looked like. But
                those tools weren't built for solopreneurs. So I built one that was.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                Funnel Studio was born from a simple belief: <span className="text-white font-bold">no great idea should go to waste</span> because
                of a lack of business expertise or resources. Every framework, every methodology, every
                proven system, democratized and accessible to anyone ready to launch.
              </p>
              <div>
                <p className="text-white font-bold text-base">Andrew Gutierrez</p>
                <p className="text-white/50 text-sm">Founder, Forrestry.ai</p>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
