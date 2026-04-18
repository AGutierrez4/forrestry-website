import FadeUp from '../FadeUp'

const rows = [
  { label: 'Time to Launch', diy: '80+ hours of "figuring it out"', agency: '4–8 weeks of back-and-forth', fs: 'Under 24 hours' },
  { label: 'Total Cost', diy: 'Your sanity + software fees', agency: '$5,000 – $15,000+', fs: '$47/mo (Founders Rate)' },
  { label: 'Webinar Script', diy: '3 days of staring at a blank page', agency: '$2k+ and 2 weeks of waiting', fs: 'Done in 30 minutes' },
  { label: 'Funnel Pages', diy: '"Frankenstein" copy that leaks', agency: 'High fees for every revision', fs: 'Connected, cohesive copy' },
  { label: 'Email Nurture', diy: 'Usually forgotten or rushed', agency: 'Another $1,500 "add-on"', fs: '15+ emails, fully synced' },
  { label: 'Ad Strategy', diy: 'Guessing and wasting ad spend', agency: 'A separate monthly retainer', fs: 'Cold, Warm, & Hot variations' },
  { label: 'AI Quality', diy: 'Generic "Chatbot" fluff', agency: 'N/A', fs: 'Trained Funnel Strategist' },
  { label: 'Revisions', diy: 'Exhausting manual rewrites', agency: 'Limited rounds & slow turnarounds', fs: 'Instant and Unlimited' },
  { label: 'Confidence', diy: '"Is this even going to work?"', agency: '"Hope they understood my vision."', fs: 'Launch with Certainty' },
]

export default function EfficiencyTable() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[1000px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Real Cost
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Choose Your Launch Path: 80 Hours of Work, $10k in Fees, or One Conversation.
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-muted text-xs uppercase tracking-wider pb-4 pr-4 font-medium w-[20%]"></th>
                  <th className="text-left text-muted text-xs uppercase tracking-wider pb-4 px-4 font-medium w-[25%]">Do It Yourself</th>
                  <th className="text-left text-muted text-xs uppercase tracking-wider pb-4 px-4 font-medium w-[25%]">Hire an Agency</th>
                  <th className="text-left text-green text-xs uppercase tracking-wider pb-4 pl-4 font-medium w-[30%]">Funnel Studio™</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-card-border">
                    <td className="py-4 pr-4 text-text text-sm font-medium">{row.label}</td>
                    <td className="py-4 px-4 text-muted/70 text-sm line-through decoration-muted/40">{row.diy}</td>
                    <td className="py-4 px-4 text-muted/70 text-sm line-through decoration-muted/40">{row.agency}</td>
                    <td className="py-4 pl-4 text-text text-sm">{row.fs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>

        <FadeUp delay={0.3}>
          <p className="text-muted text-center max-w-[640px] mx-auto mt-10 mb-8 text-lg leading-relaxed">
            The math is simple: For less than the cost of a business lunch, you get the strategist, the copywriter, and the builder — all working together to get you live by tomorrow.
          </p>
          <div className="text-center">
            <a
              href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
            >
              Claim Your Founders Spot — $47/mo
            </a>
            <p className="text-muted text-sm mt-4">
              Limited to the first 100 founding members.
            </p>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
