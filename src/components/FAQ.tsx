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
    q: 'Can I cancel anytime?',
    a: 'Yes. No long-term contracts. Cancel whenever you want.',
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
    a: 'ChatGPT can write text, but it cannot build a funnel strategy. You still have to figure out the framework, write the prompts, and connect the pieces yourself. That is how Frankenstein funnels get built. Each piece sounds fine alone, but the messaging shifts at every transition. Funnel Studio generates everything from one strategic conversation, so every piece is connected.',
  },
  {
    q: 'How long does it take to generate a full funnel?',
    a: 'The Brain Dump takes about 10 minutes. From there, Funnel Studio generates your Strategic Blueprint, webinar script, email sequences, ad copy, and page copy. Most founders have complete funnel content within a day or two, not weeks.',
  },
]

export default function FAQ() {
  return (
    <section className="py-16 md:py-[120px] px-6 bg-bg-section-a">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">FAQ</p>
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-text">
              Common questions, straight answers.
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {faqs.map((faq, i) => (
            <FadeUp key={i} delay={0.05 * i}>
              <div className="bg-card-bg border border-[rgba(255,255,255,0.08)] rounded-xl p-7 h-full">
                <h3 className="text-[17px] font-bold text-white mb-3">{faq.q}</h3>
                <p className="text-[15px] opacity-75 leading-[1.7]">{faq.a}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
