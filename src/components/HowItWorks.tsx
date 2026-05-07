import FadeUp from './FadeUp'
import LazyVideo from './LazyVideo'

interface FeatureItem {
  num: string
  title: string
  subtitle: string
  desc: string
  videoSrc: string
}

const features: FeatureItem[] = [
  {
    num: '01',
    title: 'Brain Dump™',
    subtitle: 'Turn a messy idea into a strategic offer',
    desc: 'Dump everything you know about your offer, your audience, and your story. The AI organizes it into a strategic foundation: your Big Domino, your hook, your transformation.',
    videoSrc: '/Brain-Dump-Demo.mp4',
  },
  {
    num: '02',
    title: 'Strategic Blueprint',
    subtitle: 'Your funnel\'s master plan, mapped before a word is written',
    desc: 'Big Domino, hook, transformation, objections, and audience language. All mapped into a comprehensive strategic blueprint that feeds every downstream tool.',
    videoSrc: '/Strategic Blueprint.mp4',
  },
  {
    num: '03',
    title: 'Webinar Builder',
    subtitle: 'Script your Perfect Webinar without being a copywriter',
    desc: 'The AI builds your complete webinar script using the proven Perfect Webinar framework. Hook, origin story, the 3 Secrets, the stack, the close. Done.',
    videoSrc: '/webinar-builder.mp4',
  },
  {
    num: '04',
    title: '60-Sec Webinar',
    subtitle: 'A punchy, high-converting pitch for any platform',
    desc: 'Need a quick pitch for Instagram, a Skool post, or a DM? The 60-Second Webinar distills your full offer into a tight, compelling format that converts cold audiences fast.',
    videoSrc: '/60-Second-Hook.mp4',
  },
  {
    num: '05',
    title: 'Funnel Stack',
    subtitle: 'Your complete funnel architecture, mapped and built',
    desc: 'The full funnel: opt-in, confirmation, sales page, order form, upsell, downsell, thank you. Every page, every transition, every piece of copy. The whole machine.',
    videoSrc: '/Funnel Stack.mp4',
  },
  {
    num: '06',
    title: 'Social Ads',
    subtitle: 'Drive traffic with strategic ad copy',
    desc: 'Hook-Story-Offer ad scripts for cold, warm, and hot traffic. Three strategically segmented ad sets with unique targeting psychology, headline variations, and full ad copy.',
    videoSrc: '/Social-Ads-Writer.mp4',
  },
  {
    num: '07',
    title: 'Email Writer',
    subtitle: 'Follow up on autopilot with cohesive sequences',
    desc: 'Full email sequences: soap opera, cart abandonment, post-webinar follow-up. Strategically connected to your webinar and pages, not generic templates.',
    videoSrc: '/Email-Writer.mp4',
  },
]

export default function HowItWorks() {
  return (
    <section id="product" className="py-16 md:py-[120px] px-6 bg-bg-section-a">
      <div className="max-w-[1100px] mx-auto">
        {/* Section header */}
        <FadeUp>
          <div className="text-center mb-20">
            <p className="eyebrow mb-4" style={{ color: '#818cf8' }}>INSIDE FUNNEL STUDIO</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text mb-4">
              Your entire funnel.
            </h2>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-white mb-6">
              Built in the right order.
            </h3>
            <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
              Every tool in Funnel Studio™ maps to a stage in your launch journey, so nothing
              falls through the cracks and nothing slows you down.
            </p>
          </div>
        </FadeUp>

        {/* Feature items — alternating layout */}
        <div className="flex flex-col gap-24">
          {features.map((feature, i) => {
            const isOdd = i % 2 === 0 // 0-indexed: items 01,03,05 are at index 0,2,4
            return (
              <FadeUp key={feature.num} delay={0.1}>
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${!isOdd ? 'md:[direction:rtl]' : ''}`}>
                  {/* Text side */}
                  <div className={!isOdd ? 'md:[direction:ltr]' : ''}>
                    {/* Section marker */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a5b4fc] flex items-center justify-center text-white font-bold text-xl mb-6 -mt-2">
                      {feature.num}
                    </div>
                    <h3 className="text-[28px] md:text-[32px] font-bold text-text mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-[#818cf8] text-sm font-semibold mb-4">{feature.subtitle}</p>
                    <p className="text-muted leading-relaxed">{feature.desc}</p>
                  </div>

                  {/* Video side */}
                  <div className={!isOdd ? 'md:[direction:ltr]' : ''}>
                    <div className="rounded-xl border border-[rgba(129,140,248,0.2)] border-t-2 border-t-[#818cf8] shadow-[0_24px_64px_rgba(0,0,0,0.4)] overflow-hidden">
                      <LazyVideo
                        src={feature.videoSrc}
                        className="w-full h-auto block"
                      />
                    </div>
                  </div>
                </div>
              </FadeUp>
            )
          })}
        </div>

        {/* Closing thesis statement */}
        <FadeUp>
          <p className="text-center text-[22px] italic opacity-85 my-20 max-w-[800px] mx-auto leading-relaxed">
            This is not a collection of tools. It is a system. Each piece feeds the next, so
            nothing falls through the cracks and nothing slows you down.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
