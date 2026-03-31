import FadeUp from './FadeUp'

const steps = [
  {
    num: '01',
    time: '⏱ 10 min → Clarity',
    icon: '🧠',
    iconBg: 'bg-white/[0.08]',
    title: 'Brain Dump™',
    subtitle: 'Turn a messy idea into a strategic offer',
    desc: 'Dump everything you know about your offer, your audience, and your story. The AI organizes it into a strategic foundation — your Big Domino, your hook, your transformation.',
    highlighted: false,
  },
  {
    num: '02',
    time: '⏱ Hours → Full Script',
    icon: '📄',
    iconBg: 'bg-green',
    title: 'Webinar Builder',
    subtitle: 'Script your Perfect Webinar — without being a copywriter',
    desc: 'The AI builds your complete webinar script using the proven Perfect Webinar framework. Hook, origin story, the 3 Secrets, the stack, the close. Done.',
    highlighted: true,
  },
  {
    num: '03',
    time: '⏱ Minutes → Instant Pitch',
    icon: '⏱',
    iconBg: 'bg-white/[0.08]',
    title: '60-Sec Webinar',
    subtitle: 'A punchy, high-converting pitch for any platform',
    desc: 'Need a quick pitch for Instagram, a Skool post, or a DM? The 60-Second Webinar distills your full offer into a tight, compelling format that converts cold audiences fast.',
    highlighted: false,
  },
  {
    num: '04',
    time: '⏱ Days → 30 Minutes',
    icon: '🌐',
    iconBg: 'bg-white/[0.08]',
    title: 'Long-Form Registration Page',
    subtitle: 'A full registration page that sells the click',
    desc: 'Headline, subheadline, bullets, social proof, CTA — all generated and structured to maximize registrations. No designer needed. No blank page paralysis.',
    highlighted: false,
  },
  {
    num: '05',
    time: '⏱ Months → A Weekend',
    icon: '⚡',
    iconBg: 'bg-green',
    title: 'Funnel Stack',
    subtitle: 'Your complete funnel architecture, mapped and built',
    desc: 'The full funnel — opt-in, confirmation, sales page, order form, upsell, downsell, thank you. Every page, every transition, every piece of copy. The whole machine.',
    highlighted: true,
  },
  {
    num: '06',
    time: '⏱ Fill it. Launch it.',
    icon: '✉️',
    iconBg: 'bg-white/[0.08]',
    title: 'Social Ads + Email Writer',
    subtitle: 'Drive traffic and follow up — on autopilot',
    desc: 'Hook-Story-Offer ad scripts for cold, warm, and hot traffic. Plus full email sequences — soap opera, cart abandonment, post-webinar follow-up. A funnel without traffic is a billboard in the desert.',
    highlighted: false,
  },
]

export default function HowItWorks() {
  return (
    <section id="product" className="py-24 px-6 bg-bg">
      <div className="max-w-[1400px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="text-green text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
              THE SOLUTION
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
              Your entire funnel.
            </h2>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent mb-6">
              Built in the right order.
            </h3>
            <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
              Every tool in Funnel Studio™ maps to a stage in your launch journey — so nothing
              falls through the cracks and nothing slows you down.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={i * 0.08}>
              <div
                className={`relative rounded-xl p-6 border backdrop-blur-sm transition-all hover:scale-[1.02] ${
                  step.highlighted
                    ? 'border-green shadow-[0_0_30px_rgba(74,222,128,0.15)] bg-card-bg'
                    : 'border-card-border bg-card-bg'
                }`}
              >
                {step.highlighted && (
                  <div className="absolute inset-0 bg-gradient-to-br from-green/10 to-transparent rounded-xl pointer-events-none" />
                )}
                <div className="relative">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-muted font-bold text-sm">{step.num}</span>
                    <span className="px-2.5 py-1 rounded-full bg-white/[0.08] text-muted text-xs font-semibold">
                      {step.time}
                    </span>
                  </div>
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 ${step.iconBg}`}
                  >
                    {step.icon}
                  </div>
                  <h3 className="text-xl font-bold text-text mb-2">{step.title}</h3>
                  <p className="text-green text-sm font-semibold mb-3">{step.subtitle}</p>
                  <p className="text-muted text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
