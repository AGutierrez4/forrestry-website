import FadeUp from '../FadeUp'
import { Brain, FileText, Video, Clock, Zap, Mail, Megaphone, Unlock } from 'lucide-react'

const features = [
  {
    icon: Brain,
    color: 'text-purple-400',
    bg: 'bg-purple-400/10',
    title: 'Brain Dump™',
    desc: 'A guided AI conversation that extracts your offer, audience, and story, then organizes it into a strategic foundation. No prompts to write. Just talk.',
  },
  {
    icon: FileText,
    color: 'text-blue-400',
    bg: 'bg-blue-400/10',
    title: 'Strategic Blueprint',
    desc: 'Your funnel\'s master plan: Big Domino, hook, transformation, objections, and audience language. All mapped before a single word of copy is written.',
  },
  {
    icon: Video,
    color: 'text-rose-400',
    bg: 'bg-rose-400/10',
    title: 'Perfect Webinar Script',
    desc: 'A complete webinar script using the proven Perfect Webinar framework. Hook, origin story, 3 Secrets, the Stack, the Close. Done.',
  },
  {
    icon: Clock,
    color: 'text-orange-400',
    bg: 'bg-orange-400/10',
    title: '60-Second Hook Scripts',
    desc: 'Punchy, high-converting pitch scripts for Instagram, Skool, DMs, or any platform where you need to grab attention fast.',
  },
  {
    icon: Zap,
    color: 'text-yellow-400',
    bg: 'bg-yellow-400/10',
    title: 'Full Funnel Stack',
    desc: 'Squeeze page, registration page, sales page, order form, upsell, downsell, thank-you page. Every page, every transition, every piece of copy.',
  },
  {
    icon: Mail,
    color: 'text-green',
    bg: 'bg-green/10',
    title: 'Email Sequences',
    desc: 'Soap opera sequences, cart abandonment, post-webinar follow-up. Strategically connected to your webinar and pages, not generic templates.',
  },
  {
    icon: Megaphone,
    color: 'text-indigo-400',
    bg: 'bg-indigo-400/10',
    title: 'Social Ad Copy',
    desc: 'Hook-Story-Offer ad scripts for cold, warm, and hot traffic. Ready to paste into your ad manager.',
  },
  {
    icon: Unlock,
    color: 'text-cyan-400',
    bg: 'bg-cyan-400/10',
    title: 'Instant Access',
    desc: 'Get immediate access to the full Funnel Studio suite the moment you sign up. No waiting, no onboarding calls, no delays.',
  },
]

export default function WhatsIncluded() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[900px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            What You Get
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-4">
            Everything inside Funnel Studio
          </h2>
          <p className="text-muted text-base text-center max-w-[600px] mx-auto mb-14 leading-relaxed">
            Every tool maps to a stage in your launch, so nothing falls through the
            cracks and nothing gets built in isolation.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feature, i) => {
            const Icon = feature.icon
            return (
              <FadeUp key={feature.title} delay={i * 0.05}>
                <div className="bg-card-bg border border-card-border rounded-xl p-6 hover:border-green/30 transition-colors h-full">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-lg ${feature.bg} flex items-center justify-center shrink-0`}>
                      <Icon size={20} className={feature.color} />
                    </div>
                    <div>
                      <h3 className="text-text font-semibold text-base mb-1.5">
                        {feature.title}
                      </h3>
                      <p className="text-muted text-sm leading-relaxed">{feature.desc}</p>
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
