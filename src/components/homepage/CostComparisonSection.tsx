import FadeUp from '../FadeUp'
import { Rocket, TrendingUp, Globe } from 'lucide-react'

const stages = [
  {
    icon: Rocket,
    iconColor: 'text-green',
    iconBg: 'bg-green/10',
    accentColor: 'border-green/20',
    label: 'Stage 1',
    title: 'The First Launch',
    body: 'Move your idea from a plan to a live funnel. You can stop over-analyzing and start testing your offer in the real world.',
    bullets: [
      'Establish a clear offer and a core message',
      'Launch a complete system with pages, emails, and a webinar',
      'Gain the confidence that comes from finally being live',
    ],
  },
  {
    icon: TrendingUp,
    iconColor: 'text-[#38bdf8]',
    iconBg: 'bg-[#38bdf8]/10',
    accentColor: 'border-[#38bdf8]/20',
    label: 'Stage 2',
    title: 'Building Momentum',
    body: 'Focus on refining your message and creating consistency. You can move away from guesswork by improving a system that is already functioning.',
    bullets: [
      'Develop repeatable messaging and positioning',
      'Create content that answers specific customer questions',
      'Iterate on your current foundation without needing to rebuild',
    ],
  },
  {
    icon: Globe,
    iconColor: 'text-[#818cf8]',
    iconBg: 'bg-[#818cf8]/10',
    accentColor: 'border-[#818cf8]/20',
    label: 'Stage 3',
    title: 'Scaling with Clarity',
    body: 'Run a connected ecosystem that handles more complexity as you grow. You can stop trying to link disconnected tools because every part of your marketing works together.',
    bullets: [
      'Align your brand, funnel, and content into one voice',
      'Execute new ideas faster by using your existing strategic DNA',
      'Manage a business that stays simple even as it expands',
    ],
  },
]

export default function CostComparisonSection() {
  return (
    <section className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">The Journey</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              A clear path to{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                real growth
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Every entrepreneur starts somewhere. The ecosystem grows with you, from first launch
              to scaling with confidence.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {stages.map((stage, i) => {
            const Icon = stage.icon
            return (
              <FadeUp key={stage.title} delay={i * 0.1}>
                <div className={`rounded-xl bg-[#111] border ${stage.accentColor} p-6 h-full flex flex-col`}>
                  <div className={`w-12 h-12 rounded-xl ${stage.iconBg} flex items-center justify-center mb-4`}>
                    <Icon size={22} className={stage.iconColor} />
                  </div>
                  <p className={`text-xs font-bold uppercase tracking-wider ${stage.iconColor} mb-2`}>
                    {stage.label}
                  </p>
                  <h3 className="text-white font-bold text-lg mb-2">{stage.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed mb-4">{stage.body}</p>
                  <ul className="flex flex-col gap-2 mt-auto">
                    {stage.bullets.map((bullet) => (
                      <li key={bullet} className="flex items-start gap-2 text-xs text-white/60">
                        <span className={`${stage.iconColor} text-sm shrink-0 mt-0.5`}>✓</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            )
          })}
        </div>
      </div>
    </section>
  )
}
