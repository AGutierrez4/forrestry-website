import { useState } from 'react'

const HUBSPOT_PORTAL_ID = '51365645'
const HUBSPOT_FORM_GUID = '60359e57-471c-44c1-9a92-b84b72c7b157'

interface BlogLeadFormProps {
  title?: string
  description?: string
  buttonText?: string
}

export default function BlogLeadForm({
  title = 'Get Your Free Resource',
  description = 'Enter your details below and we\'ll send it straight to your inbox.',
  buttonText = 'Download Now',
}: BlogLeadFormProps) {
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: firstName },
              { name: 'email', value: email },
            ],
            context: {
              pageUri: window.location.href,
              pageName: document.title,
            },
          }),
        }
      )
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }

    setSubmitting(false)
  }

  if (submitted) {
    return (
      <div className="my-14 p-10 rounded-2xl border border-green-500/20 bg-gradient-to-br from-green-500/[0.06] to-transparent text-center">
        <div className="w-14 h-14 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h4 className="text-xl font-bold text-white mb-2">You're in!</h4>
        <p className="text-white/60 text-sm">Check your inbox. Your resource is on its way.</p>
      </div>
    )
  }

  return (
    <div className="my-14 p-8 md:p-10 rounded-2xl border border-white/[0.08] bg-[#0d0d0d] relative overflow-hidden">
      {/* Top accent bar */}
      <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-green-400 to-green-400/0 rounded-t-2xl" />

      <div className="text-center mb-8">
        <h4 className="text-xl md:text-2xl font-bold text-white mb-2">{title}</h4>
        <p className="text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">{description}</p>
      </div>

      <form onSubmit={handleSubmit} className="max-w-sm mx-auto space-y-3">
        <input
          type="text"
          name="firstName"
          placeholder="Enter Your First Name"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-white text-gray-900 font-medium placeholder:text-gray-400 border-none outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
        />
        <input
          type="email"
          name="email"
          placeholder="Enter Your Best Email"
          required
          className="w-full px-4 py-3.5 rounded-lg bg-white text-gray-900 font-medium placeholder:text-gray-400 border-none outline-none focus:ring-2 focus:ring-green-500 transition-shadow"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full bg-green-500 hover:bg-green-400 text-gray-900 text-lg font-black py-4 px-6 rounded-lg shadow-[0_4px_0_0_#166534] hover:shadow-[0_2px_0_0_#166534] hover:translate-y-[2px] transition-all duration-200 uppercase tracking-wide mt-1 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? 'Sending...' : buttonText}
        </button>
      </form>

      <p className="text-center text-white/30 text-xs mt-4">
        Your information is 100% secure. No spam, ever.
      </p>
    </div>
  )
}
