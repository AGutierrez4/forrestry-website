import FadeUp from '../FadeUp'

export default function Founder() {
  return (
    <section id="founder" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            This didn't come from theory. It came from hitting the same wall you're hitting.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Built by someone who hit the same wall you're staring at right now.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Photo */}
            <div className="shrink-0">
              <img
                src="/founder.webp"
                alt="Andrew Gutierrez, Founder of forrestry.ai"
                width={224}
                height={224}
                loading="lazy"
                className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover border-2 border-green/30"
              />
            </div>

            {/* Bio */}
            <div className="text-center md:text-left flex-1">
              <h3 className="text-xl font-bold text-white mb-1">Andrew Gutierrez</h3>
              <p className="text-green text-sm font-medium mb-5">Founder, forrestry.ai</p>
              <p className="text-white/70 leading-relaxed mb-4">
                If you've ever sat down to build your funnel and felt that quiet panic — "I know what this should look like… so why can't I get it out of my head?" — that's the moment this was built for.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Before funnels, I co-owned a trucking organization. When we sold the company, I dove headfirst into online marketing — and hit the wall hard. The strategy made sense. The frameworks made sense. But execution? Copy, pages, emails, ads, tech. All at once. I burned through savings and eventually stepped away.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                Over the next seven years, I worked with B2B brands operating on a global scale — aerospace and defense, MedTech and healthcare — plus small businesses, coaches, and consultants. I gained deep expertise in what actually makes marketing convert at the highest levels.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                When I came back to build my own funnel in 2025, I thought AI would solve it. It didn't. The output was generic, disconnected, and I was still staring down 80+ hours of real work.
              </p>
              <p className="text-white/70 leading-relaxed mb-4">
                That's when it clicked: I don't need another generic AI tool. I need a system trained on the actual proven frameworks — one that turns a conversation into a complete, cohesive ecosystem.
              </p>
              <p className="text-white/70 leading-relaxed mb-6">
                So I stopped trying to finish my funnel… and built the tool I wish existed the first time.
              </p>
              <blockquote className="border-l-4 border-green pl-4 mb-5">
                <p className="text-green italic text-lg leading-relaxed">
                  "This isn't a magic button. It still needs your thinking. But the 80
                  hours of writing, designing, and second-guessing? That part is over."
                </p>
              </blockquote>
              <p className="text-muted text-sm leading-relaxed">
                100 spots. Then it goes to $97/mo.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
