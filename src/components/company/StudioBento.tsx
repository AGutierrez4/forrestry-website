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
    title: 'The Brain Dump™: Turn What\'s in Your Head Into a Real Funnel Plan',
    description:
      'Talk through your idea, offer, and audience. Watch it turn into a structured foundation for your entire funnel. No prompts. No templates. No blank page.',
    details: [
      'Guided conversation (not a form)',
      'Works with voice or text',
      'Instantly maps into your funnel strategy',
    ],
    videoSrc: '/Brain-Dump-Demo.mp4',
  },
  {
    step: 2,
    title: 'Your Funnel Blueprint: Everything Aligned Before You Build',
    description:
      'Your story, offer, and messaging, organized into a clear strategy that guides every page, email, and ad. No guessing. No disconnects.',
    details: [
      'Clear positioning and messaging',
      'Audience + pain point clarity',
      'Powers everything that follows',
    ],
    videoSrc: '/Strategic Blueprint.mp4',
  },
  {
    step: 3,
    title: 'The Perfect Webinar: A 60-Minute Script That Sells for You',
    description:
      'A complete webinar built from your story, structured to build belief, handle objections, and lead naturally to the sale.',
    details: [
      'Full 60-minute script',
      'Slide-by-slide structure',
      'Stack and close sequence included',
    ],
    videoSrc: '/webinar-builder.mp4',
  },
  {
    step: 4,
    title: 'The Complete Funnel: A Seamless Path From Click to Checkout',
    description:
      'Every page your funnel needs, written and aligned so your messaging flows from first impression to final decision.',
    details: [
      'Squeeze + registration pages',
      'Upsell and downsell copy',
      'Thank-you and confirmation pages',
    ],
    videoSrc: '/Funnel Stack.mp4',
  },
  {
    step: 5,
    title: 'The Follow-Up Engine: Emails That Bring People Back to Buy',
    description:
      'Pre-show, show-day, and post-show sequences that build trust, handle objections, and convert attention into sales.',
    details: [
      'Pre-show indoctrination',
      'Show-day reminders',
      'Post-show close sequence',
    ],
    videoSrc: '/Email-Writer.mp4',
  },
  {
    step: 6,
    title: 'The Attention Engine: Short-Form Hooks That Stop the Scroll',
    description:
      'Turn your message into platform-native video scripts designed to grab attention and drive people into your funnel.',
    details: [
      'TikTok & IG-ready scripts',
      'Multiple angles per idea',
      'Built for organic reach',
    ],
    videoSrc: '/60-Second-Hook.mp4',
  },
  {
    step: 7,
    title: 'The Traffic Engine: Ads That Meet Buyers at Every Stage',
    description:
      'Cold, warm, and hot audience ads, each written to match where your buyer is in their decision process.',
    details: [
      'Cold awareness ads',
      'Retargeting sequences',
      'Conversion-focused copy',
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
            Everything You Need to Go From Idea to Live. In a Single Afternoon
          </h2>
          <p className="text-muted text-center max-w-[600px] mx-auto mb-20 text-lg leading-relaxed">
            Built from one guided conversation. Structured so every piece connects, converts, and is ready to launch.
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
                              className="w-full h-full aspect-video object-cover"
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

        <FadeUp delay={0.1}>
          <p className="text-muted text-center max-w-[640px] mx-auto mt-20 text-lg italic leading-relaxed">
            Nothing is created in isolation. Every piece is built from the same conversation, so your funnel finally works as one system.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
