import FadeUp from '../FadeUp'
import { Wrench, Compass, Unplug } from 'lucide-react'

const problems = [
  {
    icon: Wrench,
    title: 'Technical Exhaustion',
    body: 'Spending 20+ hours fighting with page builders just to end up with a site that looks amateur. The tools were supposed to make it easy.',
  },
  {
    icon: Compass,
    title: 'Strategic Confusion',
    body: 'Staring at a blank screen wondering what your ads, emails, and sales pages should actually say. You know the frameworks exist, but connecting them to your offer feels impossible.',
  },
  {
    icon: Unplug,
    title: 'Fragmented Systems',
    body: 'Using 10 different tools that don\'t talk to each other, leaving you with a business that feels fragile. One change breaks three other things.',
  },
]

export default function PainSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Problem</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Building a funnel shouldn't{' '}
              <span className="text-white/40">feel like this</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Most great ideas never see the light of day. Not because the founder lacks drive,
              but because the path is buried under disconnected tools and confusing strategies.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {problems.map((problem, i) => (
            <FadeUp key={problem.title} delay={i * 0.08}>
              <div className="rounded-xl bg-[#111] border border-white/[0.06] p-6 h-full hover:border-green/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center mb-4">
                  <problem.icon size={18} className="text-green" />
                </div>
                <h3 className="text-white font-bold text-sm mb-2">{problem.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{problem.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
