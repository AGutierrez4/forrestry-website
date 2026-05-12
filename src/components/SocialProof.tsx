import FadeUp from './FadeUp'
import { PenTool, Palette, Link2, Flame } from 'lucide-react'

const problems = [
  {
    icon: PenTool,
    title: 'The Copy Gap',
    desc: "You have a page but no words. You stare at a blank editor for hours, second-guessing every headline. Meanwhile, your offer sits unlaunched.",
  },
  {
    icon: Palette,
    title: 'The Design Trap',
    desc: "500 templates, none of them right. You spend days tweaking colors and padding instead of talking to customers and making money.",
  },
  {
    icon: Link2,
    title: 'The Integration Maze',
    desc: "Email tools, page builders, payment processors, webinar platforms. Each one a new rabbit hole. By the time it's connected, your momentum is gone.",
  },
  {
    icon: Flame,
    title: 'The Burnout Wall',
    desc: "You started with a great idea and real energy. Weeks later, you're exhausted, nothing is live, and you're questioning whether any of this is worth it.",
  },
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-16 md:py-[120px] px-6 bg-bg-section-b section-divider-top">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="eyebrow mb-4" style={{ color: '#818cf8' }}>
              THE PROBLEM
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
              The friction is real.
            </h2>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-white mb-6">
              And it's killing great ideas.
            </h3>
            <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
              Legacy page builders hand you the bricks and tell you to build a house.
              You're forced to be the copywriter, the designer, the strategist, and the tech
              integrator, all at once. That's not a tool. That's a second job.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p, i) => {
            const Icon = p.icon
            return (
              <FadeUp key={p.title} delay={i * 0.1}>
                <div className="bg-card-bg rounded-xl p-7 border border-card-border border-l-4 border-l-[rgba(129,140,248,0.4)] backdrop-blur-sm hover:border-[#818cf8]/30 transition-all">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-[#818cf8]/10 flex items-center justify-center shrink-0">
                      <Icon size={20} className="text-[#818cf8]" />
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-text mb-3">{p.title}</h3>
                      <p className="text-muted leading-relaxed">{p.desc}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
