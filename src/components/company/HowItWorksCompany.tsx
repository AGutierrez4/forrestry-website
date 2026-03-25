import FadeUp from '../FadeUp'

const steps = [
  {
    num: 1,
    title: 'Brain Dump™',
    description:
      'Tell Funnel Studio™ your story, your offer, and who you serve. No prompts to engineer. No templates to fill out. Just a conversation.',
  },
  {
    num: 2,
    title: 'Build',
    description:
      'Funnel Studio™ builds your entire launch stack. Squeeze page. Webinar script. Slide deck. Email sequences. Social ads. Promo scripts. Stage by stage, in the right order.',
  },
  {
    num: 3,
    title: 'Launch',
    description:
      'Go live with a complete funnel ecosystem. Not a template. Not a starting point. A launch-ready system built from your words.',
  },
]

export default function HowItWorksCompany() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            How It Works
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-16">
            Three steps to your first launch.
          </h2>
        </FadeUp>

        {/* Desktop: horizontal stepper */}
        <div className="hidden md:grid grid-cols-3 gap-8">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={0.15 * i}>
              <div className="text-center">
                <div className="w-14 h-14 rounded-full bg-green text-black font-bold text-xl flex items-center justify-center mx-auto mb-5">
                  {step.num}
                </div>
                {i < steps.length - 1 && (
                  <div className="hidden" /> 
                )}
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* Mobile: vertical stepper */}
        <div className="md:hidden flex flex-col gap-10">
          {steps.map((step, i) => (
            <FadeUp key={step.num} delay={0.15 * i}>
              <div className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-green text-black font-bold text-lg flex items-center justify-center shrink-0">
                    {step.num}
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-px flex-1 bg-green/30 mt-3" />
                  )}
                </div>
                <div className="pt-2">
                  <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
