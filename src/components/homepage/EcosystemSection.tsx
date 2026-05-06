import FadeUp from '../FadeUp'
import { FUNNEL_STUDIO_URL } from './constants'
import { Zap, MessageCircle, Globe, Mail, Megaphone, Video } from 'lucide-react'

const features = [
  {
    icon: Zap,
    title: 'Brain Dump Agent',
    desc: 'Describe your business naturally. Our AI extracts your core transformation, audience pain points, and offer architecture.',
  },
  {
    icon: Mail,
    title: '12-Email Sequences',
    desc: 'A narratively cohesive email arc from signup confirmation through final deadline. Pre-event nurture, replays, and urgency.',
  },
  {
    icon: Megaphone,
    title: 'Social Ad Matrix',
    desc: 'Three strategically segmented ad sets for cold, warm, and hot traffic with unique targeting psychology.',
  },
  {
    icon: Video,
    title: 'Webinar Scripts',
    desc: 'Complete 60-minute webinar script following proven frameworks. Introduction, origin story, 3 secrets, offer stack, and close.',
  },
  {
    icon: MessageCircle,
    title: 'Content Refinement',
    desc: 'Iterative editing through natural language. Refine any piece without regenerating from scratch.',
  },
  {
    icon: Globe,
    title: 'Built-in Audit Tool',
    desc: 'Conversion grades, quality scores, and gap analysis on every content piece you generate.',
  },
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-20 sm:py-28 section-alt">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">Complete Feature Set</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white tracking-tight mb-4">
              Nine connected tools,{' '}
              <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
                one strategic input
              </span>
            </h2>
            <p className="text-white/60 text-lg leading-relaxed">
              Every tool draws from your Strategic Blueprint. Consistent messaging, offer language,
              and brand voice across your entire marketing ecosystem.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-[1000px] mx-auto">
          {features.map((feature, i) => (
            <FadeUp key={feature.title} delay={i * 0.06}>
              <div className="rounded-xl bg-[#111] border border-white/[0.06] p-5 h-full hover:border-green/20 transition-colors">
                <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center mb-3">
                  <feature.icon size={16} className="text-green" />
                </div>
                <h4 className="text-white font-bold text-sm mb-1">{feature.title}</h4>
                <p className="text-white/50 text-xs leading-relaxed">{feature.desc}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.4}>
          <div className="text-center mt-12">
            <a
              href={FUNNEL_STUDIO_URL}
              className="inline-flex items-center gap-2 text-green text-sm font-medium no-underline hover:text-green-bright transition-colors"
            >
              See all Funnel Studio features
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
