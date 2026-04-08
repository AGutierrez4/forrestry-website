import { useState } from 'react'
import FadeUp from '../FadeUp'

export default function LeadCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    // TODO: Wire to email service (ConvertKit, Mailchimp, etc.)
    setSubmitted(true)
  }

  return (
    <section className="py-20 px-6">
      <div className="max-w-[560px] mx-auto text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4">
            Not ready yet?
          </p>
          <h2 className="text-2xl font-bold mb-3">
            Get the Funnel Launch Checklist.
          </h2>
          <p className="text-muted text-sm leading-relaxed mb-8">
            The same asset list and launch sequence Funnel Studio™ uses under the hood.
            Free. No sales pitch. Just the checklist.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          {submitted ? (
            <div className="bg-card-bg border border-green/30 rounded-xl p-6">
              <p className="text-green font-medium">Check your inbox. It is on the way.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                required
                className="flex-1 px-5 py-3.5 rounded-xl bg-card-bg border border-card-border text-white text-sm placeholder:text-muted/50 focus:outline-none focus:border-green/50 transition-colors"
              />
              <button
                type="submit"
                className="px-6 py-3.5 rounded-xl bg-card-bg border border-green/40 text-green font-semibold text-sm hover:bg-green/10 transition-colors cursor-pointer whitespace-nowrap"
              >
                Send it to me
              </button>
            </form>
          )}
        </FadeUp>
      </div>
    </section>
  )
}
