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
                This didn't come from theory. It came from hitting the same wall you're hitting.
              </h3>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Before funnels, I co-owned a trucking organization. When we sold the company,
                I dove headfirst into online marketing and hit the wall hard. The strategy made
                sense. The frameworks made sense. But execution? Copy, pages, emails, ads, tech.
                All at once. I burned through savings and eventually stepped away.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                Over the next seven years, I worked with B2B brands operating on a global scale
                (aerospace, defense, MedTech, healthcare), plus small businesses, coaches, and
                consultants. I gained deep expertise in what actually makes marketing convert at
                the highest levels.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-4">
                When I came back to build my own funnel in 2025, I thought AI would solve it.
                It didn't. The output was generic, disconnected, and I was still staring down
                80+ hours of real work. That's when it clicked: I don't need another generic AI
                tool. I need a system trained on proven frameworks, one that turns a conversation
                into a complete, cohesive ecosystem.
              </p>
              <p className="text-white/70 text-base leading-relaxed mb-6">
                So I stopped trying to finish my funnel and built the tool I wish existed the
                first time. <span className="text-white font-bold">No great idea should go to waste</span> because
                the path from strategy to execution is too painful to walk alone.
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
