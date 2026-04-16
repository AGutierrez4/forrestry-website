import FadeUp from '../FadeUp'

const rows = [
  { label: 'Time to launch', diy: '80+ hours', agency: '2-4 weeks', fs: 'As little as 1 day' },
  { label: 'Cost', diy: 'Your time + 6 subscriptions', agency: '$5,000-$15,000', fs: '$47/mo Founders Rate' },
  { label: 'Webinar script', diy: '20-25 hours of writing', agency: 'Copywriter writes it', fs: '60-min. webinar script generated from your story' },
  { label: 'Funnel pages', diy: 'DIY in your page builder', agency: 'Designer builds them', fs: 'Fully designed 4-page funnel stack, ready to deploy' },
  { label: 'Email sequences', diy: '10-15 hours minimum', agency: 'Extra cost, extra wait', fs: 'Full nurture stack, in order' },
  { label: 'Ad copy', diy: 'Guess and test', agency: 'Another retainer', fs: 'Cold, warm, and hot variations' },
  { label: 'AI output quality', diy: 'Generic, one asset at a time', agency: 'N/A', fs: 'Highly trained, consistent, connected to your Blueprint' },
  { label: 'Revisions', diy: 'Start over each time', agency: 'Limited rounds, extra fees', fs: 'Unlimited, instant' },
  { label: 'Number of funnels', diy: 'However many you survive', agency: '1, then pay again', fs: 'Unlimited' },
  { label: 'Launch confidence', diy: 'Second-guessing everything', agency: 'Depends on the agency', fs: 'Every asset connected, nothing left to guess' },
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
            Three paths. One takes 80 hours. One costs $10,000. One takes a conversation.
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
          <div className="mt-14 text-center">
            <a
              href="https://buy.stripe.com/8x24gAcdt2nN2nOdi6frW01"
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
