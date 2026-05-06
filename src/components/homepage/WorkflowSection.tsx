import FadeUp from '../FadeUp'
import { MessageSquare, FileText, Rocket } from 'lucide-react'

const steps = [
  {
    num: '01',
    icon: MessageSquare,
    title: 'Brain Dump™',
    body: 'Have a natural conversation about your business, offer, and audience. Voice or text, our AI asks the strategic questions that matter. In 15 minutes, you\'ll extract what took you years to learn.',
  },
  {
    num: '02',
    icon: FileText,
    title: 'Strategic Blueprint',
    body: 'Your Brain Dump becomes a comprehensive strategic blueprint: core transformation, Big Domino statement, audience pain points, unique mechanism, and offer architecture. This is your shared DNA.',
  },
  {
    num: '03',
    icon: Rocket,
    title: 'Launch Your Ecosystem',
    body: 'One click generates your entire marketing ecosystem: funnel pages, webinar scripts, emails, ads, and hooks. Every piece speaks with one voice because they all share one strategic foundation.',
  },
]

export default function WorkflowSection() {
  return (
    <section id="how-it-works" className="py-20 sm:py-28 bg-[#09090B]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">How It Works</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Three steps from{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                stuck to launched
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              No more blank pages. No more disconnected tools. One clear path.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1000px] mx-auto">
          {steps.map((step, i) => (
            <FadeUp key={step.title} delay={i * 0.1}>
              <div className="text-center">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-green/10 flex items-center justify-center mx-auto mb-5">
                  <step.icon size={24} className="text-green" />
                </div>
                {/* Step number */}
                <p className="text-xs font-bold text-green/60 uppercase tracking-wider mb-2">
                  Step {step.num}
                </p>
                {/* Title */}
                <h3 className="text-white font-bold text-lg mb-3">{step.title}</h3>
                {/* Body */}
                <p className="text-white/50 text-sm leading-relaxed">{step.body}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
