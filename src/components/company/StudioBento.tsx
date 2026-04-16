import FadeUp from '../FadeUp'
import LazyVideo from '../LazyVideo'

interface FeatureRow {
  step: number
  title: string
  description: string
  details: string[]
  videoSrc: string
}

const features: FeatureRow[] = [
  {
    step: 1,
    title: 'Brain Dump™',
    description:
      'It starts with a conversation. The Brain Dump™ is a guided chat that captures your story, your offer, and who you serve. No prompts to engineer. No templates to fill out. Just talk, and watch it organize everything into your Strategic Blueprint.',
    details: [
      'Guided conversation, not a form',
      'Works with voice or text',
      'Maps your input into the Strategic Blueprint',
    ],
    videoSrc: '/Brain-Dump-Demo.mp4',
  },
  {
    step: 2,
    title: 'Strategic Blueprint',
    description:
      'Your Brain Dump™, organized. The Strategic Blueprint is automatically generated from your conversation. It captures your story, your offer, and your audience into a structured strategy that steers every asset Funnel Studio™ builds.',
    details: [
      'Brand story messaging framework',
      'Audience avatar and pain point mapping',
      'Feeds every tool that follows',
    ],
    videoSrc: '/Strategic Blueprint.mp4',
  },
  {
    step: 3,
    title: 'Webinar Builder',
    description:
      'The Perfect Webinar script, generated from your Blueprint. Hook, origin story, three secrets, the stack, the close. Every section written in order so the narrative builds the way it should.',
    details: [
      'Full 60-minute webinar script',
      '50-slide deck structure',
      'Stack and close sequence',
    ],
    videoSrc: '/webinar-builder.mp4',
  },
  {
    step: 4,
    title: 'Funnel Stack',
    description:
      'Squeeze page, upsell, and VIP pages synced to your Blueprint so the messaging stays consistent from the first ad click to the final checkout. No more Frankenstein funnels.',
    details: [
      'Registration and squeeze pages',
      'Upsell and downsell copy',
      'Thank you and confirmation pages',
    ],
    videoSrc: '/Funnel Stack.mp4',
  },
  {
    step: 5,
    title: 'Email Writer',
    description:
      'The full nurture sequence. Pre-show indoctrination, show-day reminders, post-show objection handling, cart close. 10-15 emails written in your voice, not a robot\'s.',
    details: [
      'Pre-show indoctrination series',
      'Show-day reminder sequence',
      'Post-show follow-up and cart close',
    ],
    videoSrc: '/Email-Writer.mp4',
  },
  {
    step: 6,
    title: '60-Second Hook',
    description:
      'The scroll-stopper. Short-form video scripts for TikTok and Instagram that actually sound like you. Your organic path to getting eyeballs on your funnel without spending a dollar on ads.',
    details: [
      'Platform-native hook scripts',
      'Multiple variations per concept',
      'Optimized for organic reach',
    ],
    videoSrc: '/60-Second-Hook.mp4',
  },
  {
    step: 7,
    title: 'Social Ads Writer',
    description:
      'Cold, warm, and hot audiences each get different copy because they are at different stages. Funnel Studio™ knows the difference and writes accordingly.',
    details: [
      'Cold traffic awareness ads',
      'Warm retargeting sequences',
      'Hot audience conversion copy',
    ],
    videoSrc: '/Social-Ads-Writer.mp4',
  },
]

export default function StudioBento() {
  return (
    <section id="studio" className="py-24 px-6 relative overflow-hidden">
      {/* Forest haze glow — hidden on mobile for performance */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[1200px] bg-[#16261C]/30 rounded-full blur-[200px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            Inside Funnel Studio™
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-4">
            One conversation. Seven launch-ready engines.
          </h2>
          <p className="text-muted text-center max-w-[600px] mx-auto mb-20 text-lg leading-relaxed">
            Every asset your launch needs, built from a single Brain Dump™ conversation.
          </p>
        </FadeUp>

        <div className="relative">
          {/* Vertical connector line — desktop only */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-green/20 to-transparent -translate-x-1/2" />

          <div className="flex flex-col gap-24 lg:gap-32">
            {features.map((feature, i) => {
              const isEven = i % 2 === 0
              return (
                <FadeUp key={feature.step} delay={0.1}>
                  <div className="relative">
                    {/* Step number on connector — desktop only */}
                    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 -top-5 w-10 h-10 rounded-full bg-green text-black font-bold text-sm items-center justify-center z-10">
                      {feature.step}
                    </div>

                    <div
                      className={`flex flex-col lg:flex-row items-center gap-10 lg:gap-16 ${
                        isEven ? '' : 'lg:flex-row-reverse'
                      }`}
                    >
                      {/* Video */}
                      <div className="w-full lg:w-1/2">
                        <div className="rounded-2xl bg-[#1A1A1A] border border-[rgba(74,222,128,0.08)] p-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] hover:shadow-[0_8px_32px_rgba(0,0,0,0.4),0_0_40px_rgba(74,222,128,0.06)] transition-shadow">
                          <div className="rounded-xl overflow-hidden">
                            <LazyVideo
                              src={feature.videoSrc}
                              className="w-full aspect-video object-cover"
                            />
                          </div>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="w-full lg:w-1/2">
                        {/* Step number — mobile only */}
                        <div className="lg:hidden flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 rounded-full bg-green text-black font-bold text-xs flex items-center justify-center">
                            {feature.step}
                          </div>
                          <div className="flex-1 h-px bg-green/20" />
                        </div>

                        <h3 className="text-2xl font-bold text-white mb-4">
                          {feature.title}
                        </h3>
                        <p className="text-muted text-base leading-relaxed mb-5">
                          {feature.description}
                        </p>
                        <ul className="flex flex-col gap-2">
                          {feature.details.map((detail) => (
                            <li
                              key={detail}
                              className="flex items-start gap-2.5 text-sm text-muted"
                            >
                              <span className="text-green shrink-0 mt-0.5">✓</span>
                              {detail}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </FadeUp>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
