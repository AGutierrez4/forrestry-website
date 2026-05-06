import FadeUp from '../FadeUp'
import { Puzzle, Clock, Brain, AlertTriangle } from 'lucide-react'

const problems = [
  {
    icon: Puzzle,
    iconColor: 'text-orange-400',
    iconBg: 'bg-orange-400/10',
    title: 'Frankenstein Funnels',
    body: 'Stitching together copy from ChatGPT, design from Canva, emails from another tool. Nothing connects, nothing converts.',
  },
  {
    icon: Clock,
    iconColor: 'text-blue-400',
    iconBg: 'bg-blue-400/10',
    title: '80+ Hours of Grind',
    body: 'Traditional funnel building takes 20–24 hours just on design, before you even write a word of copy or think about traffic.',
  },
  {
    icon: Brain,
    iconColor: 'text-purple-400',
    iconBg: 'bg-purple-400/10',
    title: 'Mental Exhaustion',
    body: '"What if this doesn\'t work? What if I\'m not cut out for this?" The constant second-guessing that keeps great ideas trapped.',
  },
  {
    icon: AlertTriangle,
    iconColor: 'text-red-400',
    iconBg: 'bg-red-400/10',
    title: 'Fear of Failure',
    body: 'Every dollar spent feels like a gamble. Without a proven system, launching feels more like jumping off a cliff.',
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
              <span className="text-white/40">feel this hard</span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Most entrepreneurs hit the same walls. Disconnected tools, overwhelming complexity,
              and the constant fear that they're doing it wrong.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-[900px] mx-auto">
          {problems.map((problem, i) => (
            <FadeUp key={problem.title} delay={i * 0.08}>
              <div className="rounded-xl bg-[#111] border border-white/[0.06] p-6 h-full hover:border-white/[0.12] transition-colors">
                <div className={`w-10 h-10 rounded-lg ${problem.iconBg} flex items-center justify-center mb-4`}>
                  <problem.icon size={20} className={problem.iconColor} />
                </div>
                <h3 className="text-white font-bold text-base mb-2">{problem.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{problem.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
