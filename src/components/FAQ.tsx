import { useState } from 'react'
import FadeUp from './FadeUp'

const faqs = [
  {
    q: 'How is Funnel Studio™ different from ChatGPT or other AI writers?',
    a: 'ChatGPT gives you one asset at a time with no context between them. Funnel Studio™ builds your entire launch stack from a single Brain Dump™ conversation. Every asset — squeeze page, webinar script, emails, ads — is connected to your story, your offer, and your audience. Nothing is generic because nothing is generated in isolation.',
  },
  {
    q: 'What if I already have a funnel builder like ClickFunnels?',
    a: 'Funnel Studio™ is not a page builder. It is a content engine. It generates the copy, scripts, and sequences that go inside your funnel. You can use the output in any builder you already have.',
  },
  {
    q: 'What happens after the 100 founding spots fill?',
    a: 'The price goes to $149/mo. If you lock in the founding rate at $49/mo, that rate stays locked for 2 years. No bait and switch.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel whenever you want. If you cancel and come back later, you will be at the current price, not the founding rate.',
  },
  {
    q: 'What is the 30-Day "Launch or Don\'t Pay" Guarantee?',
    a: 'Build your funnel. Launch it. If you are not live within 30 days, we refund every penny. No questions asked.',
  },
  {
    q: 'Do I need to be technical to use this?',
    a: 'No. The Brain Dump™ is a conversation. You talk about your offer, your audience, and your story. Funnel Studio™ handles the rest. No prompts to engineer, no templates to fill out.',
  },
  {
    q: 'What does "Perfect Webinar" mean?',
    a: 'The Perfect Webinar is a proven framework for structuring high-converting webinar presentations. Funnel Studio™ has this framework built into every webinar script it generates. You do not need to know the framework — the tool handles it.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="py-24 px-6">
      <div className="max-w-[700px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            FAQ
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Common questions, straight answers.
          </h2>
        </FadeUp>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={0.05 * i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full text-left bg-card-bg border border-card-border rounded-xl p-5 cursor-pointer hover:border-green/30 transition-colors"
                aria-expanded={open === i}
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-text font-medium text-sm">{faq.q}</span>
                  <span className="text-muted shrink-0 text-lg">
                    {open === i ? '−' : '+'}
                  </span>
                </div>
                {open === i && (
                  <p className="text-muted text-sm leading-relaxed mt-4 pr-8">
                    {faq.a}
                  </p>
                )}
              </button>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
