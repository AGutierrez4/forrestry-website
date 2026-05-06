import FadeUp from '../FadeUp'

const steps = [
  {
    num: 1,
    title: 'The Brain Dump™',
    body: 'Talk to our AI like a mentor. We extract your messy ideas, offer details, and vision into a structured foundation.',
  },
  {
    num: 2,
    title: 'The Strategic Blueprint',
    body: 'We turn your brain dump into a cohesive, framework-driven plan based on proven B2B growth strategies.',
  },
  {
    num: 3,
    title: 'The Funnel Stack',
    body: 'Generate the high-conversion copy and production-ready HTML for your entire 4-page funnel.',
  },
  {
    num: 4,
    title: 'Scale Authority',
    body: 'Use the ecosystem to turn your funnel into a self-sustaining business brand with emails, ads, and content.',
  },
]

export default function WorkflowSection() {
  return (
    <section className="py-24 px-6 bg-bg-light">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-4">
              Strategy into Execution. The Forrestry Path.
            </h2>
          </div>
        </FadeUp>

        <div className="max-w-[700px] mx-auto relative">
          {/* Vertical connecting line */}
          <div className="absolute left-5 top-8 bottom-8 w-px bg-green/20 hidden md:block" />

          <div className="flex flex-col gap-12">
            {steps.map((step, i) => (
              <FadeUp key={step.num} delay={i * 0.1}>
                <div className="flex items-start gap-6">
                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-full bg-green text-black font-bold text-sm flex items-center justify-center shrink-0 relative z-10">
                    {step.num}
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <h3 className="text-text-dark font-bold text-lg mb-2">{step.title}</h3>
                    <p className="text-text-body text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
