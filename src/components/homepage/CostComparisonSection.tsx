import { useRef, useEffect, useState } from 'react'
import FadeUp from '../FadeUp'
import { Target, Award, Rocket } from 'lucide-react'

function AnimatedNumber({ target, prefix = '', suffix = '' }: { target: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry && entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          const duration = 1500
          const startTime = performance.now()

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setValue(Math.floor(eased * target))
            if (progress < 1) {
              requestAnimationFrame(animate)
            } else {
              setValue(target)
            }
          }
          requestAnimationFrame(animate)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [target, hasAnimated])

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}{value.toLocaleString()}{suffix}
    </span>
  )
}

const milestones = [
  {
    icon: Target,
    iconColor: 'text-green',
    iconBg: 'bg-green/10',
    amount: 10000,
    prefix: '$',
    suffix: '+',
    title: 'First 5-Figure Month',
    body: 'Launch your funnel ecosystem and hit your first meaningful revenue milestone with confidence.',
  },
  {
    icon: Award,
    iconColor: 'text-green',
    iconBg: 'bg-green/10',
    amount: 100000,
    prefix: '$',
    suffix: '+',
    title: '6-Figure Year',
    body: 'Scale what works with the Authority Engine and a content strategy that builds trust at scale.',
  },
  {
    icon: Rocket,
    iconColor: 'text-green',
    iconBg: 'bg-green/10',
    amount: 1000000,
    prefix: '$',
    suffix: '+',
    title: '7-8 Figure Growth',
    body: 'Build a complete brand ecosystem that attracts, converts, and retains at the highest levels.',
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
              Every Forrester starts somewhere. The ecosystem grows with you, from first launch
              to scaling to seven figures and beyond.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
          {milestones.map((item, i) => (
            <FadeUp key={item.title} delay={i * 0.1}>
              <div className="rounded-xl bg-[#111] border border-white/[0.06] p-6 text-center h-full hover:border-green/20 transition-colors">
                <div className={`w-12 h-12 rounded-xl ${item.iconBg} flex items-center justify-center mx-auto mb-4`}>
                  <item.icon size={22} className={item.iconColor} />
                </div>
                <p className="text-2xl sm:text-3xl font-extrabold text-green mb-2">
                  <AnimatedNumber target={item.amount} prefix={item.prefix} suffix={item.suffix} />
                </p>
                <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
