import { useState } from 'react'
import FadeUp from './FadeUp'

const faqs = [
  {
    q: 'How is Funnel Studio™ different from ChatGPT or other AI writers?',
    a: 'ChatGPT is a blank page that requires you to be a Prompt Engineer. Funnel Studio™ is a Funnel Strategist that asks YOU the right questions. It doesn\'t just write text; it builds a connected system where the email you send on Day 7 perfectly references the secret you shared in your webinar on Day 1.',
  },
  {
    q: 'What if I already have a funnel builder like ClickFunnels?',
    a: 'Funnel Studio™ is not a page builder. It is a content engine. It generates the copy, scripts, and sequences that go inside your funnel. You can use the output in any builder you already have.',
  },
  {
    q: 'What happens after the 100 founding spots fill?',
    a: 'The price goes to $97/mo. If you lock in the founding rate at $47/mo, that rate stays locked for 2 years. No bait and switch.',
  },
  {
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel whenever you want. If you cancel and come back later, you will be at the current price, not the founding rate.',
  },
  {
    q: 'What is the 14-Day Money-Back Guarantee?',
    a: 'Try Funnel Studio™. If it is not for you, email us within 14 days for a full refund. No hoops, no hassle.',
  },
  {
    q: 'Do I need to be technical to use this?',
    a: 'No. The Brain Dump™ is a conversation. You talk about your offer, your audience, and your story. Funnel Studio™ handles the rest. No prompts to engineer, no templates to fill out.',
  },
  {
    q: 'What does "Perfect Webinar" mean?',
    a: 'The Perfect Webinar is a proven framework for structuring high-converting webinar presentations. Funnel Studio™ has this framework built into every webinar script it generates. You do not need to know the framework. The tool handles it.',
  },
  {
    q: 'What if I am already using ChatGPT for my funnel copy?',
    a: 'ChatGPT can write text, but it cannot build a funnel strategy. You still have to figure out the framework, write the prompts, and connect the pieces yourself. That is how Frankenstein funnels get built — each piece sounds fine alone, but the messaging shifts at every transition. Funnel Studio generates everything from one strategic conversation, so every piece is connected.',
  },
  {
    q: 'How long does it take to generate a full funnel?',
    a: 'The Brain Dump takes about 10 minutes. From there, Funnel Studio generates your Strategic Blueprint, webinar script, email sequences, ad copy, and page copy. Most founders have complete funnel content within a day or two — not weeks.',
  },
  {
    q: 'What format does the content come in?',
    a: 'Everything is generated as clean, ready-to-use text. Copy it into any page builder (ClickFunnels, WordPress, Kajabi, Carrd — whatever you use), any email platform, or any ad manager. Funnel Studio is the content engine, not the page builder.',
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
