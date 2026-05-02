import FadeUp from './FadeUp'

interface ComparisonRow {
  label: string
  diy: string
  agency: string
  funnelStudio: string
}

const rows: ComparisonRow[] = [
  { label: 'Time to launch', diy: '3–6 months', agency: '4–8 weeks', funnelStudio: 'Under 48 hours' },
  { label: 'Cost', diy: '$2,000–5,000 in tools', agency: '$10,000–25,000+', funnelStudio: '$47/mo' },
  { label: 'Copy & scripts', diy: 'You write everything', agency: 'Copywriter writes for you', funnelStudio: 'AI generates from your Brain Dump' },
  { label: 'Funnel strategy', diy: 'You figure it out', agency: 'Strategist plans it', funnelStudio: 'Built-in frameworks' },
  { label: 'Revisions', diy: 'Start over each time', agency: '$150/hr for changes', funnelStudio: 'Unlimited, instant' },
  { label: 'Email sequences', diy: 'Manual setup', agency: 'Included (maybe)', funnelStudio: 'Auto-generated, connected' },
  { label: 'Ongoing support', diy: 'Forums, YouTube', agency: 'Retainer fees', funnelStudio: 'Community + updates' },
]

export default function ComparisonTable() {
  return (
    <section className="py-16 md:py-[120px] px-6 bg-bg-section-b">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-14">
            <p className="eyebrow mb-4">THE COMPARISON</p>
            <h2 className="text-[clamp(1.75rem,4vw,3rem)] font-extrabold text-text">
              See how Funnel Studio stacks up.
            </h2>
          </div>
        </FadeUp>

        {/* Desktop table */}
        <FadeUp delay={0.1}>
          <div className="hidden md:block overflow-hidden rounded-xl border border-card-border">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left p-4 text-muted text-sm font-semibold bg-[rgba(255,255,255,0.02)]" />
                  <th className="text-left p-4 text-muted text-sm font-semibold opacity-45 bg-[rgba(255,255,255,0.02)]">
                    DIY
                  </th>
                  <th className="text-left p-4 text-muted text-sm font-semibold opacity-45 bg-[rgba(255,255,255,0.02)]">
                    Agency
                  </th>
                  <th className="text-left p-4 text-green text-base font-bold bg-[rgba(74,222,128,0.06)] border-l border-r border-[rgba(74,222,128,0.3)] border-t-[3px] border-t-green">
                    Funnel Studio™
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 1 ? 'bg-[rgba(255,255,255,0.02)]' : ''}>
                    <td className="p-4 text-text text-sm font-medium">{row.label}</td>
                    <td className="p-4 text-muted text-sm opacity-45">{row.diy}</td>
                    <td className="p-4 text-muted text-sm opacity-45">{row.agency}</td>
                    <td className="p-4 text-text text-sm font-medium bg-[rgba(74,222,128,0.06)] border-l border-r border-[rgba(74,222,128,0.3)]">
                      {row.funnelStudio}
                    </td>
                  </tr>
                ))}
                {/* CTA row */}
                <tr>
                  <td colSpan={3} />
                  <td className="p-4 bg-[rgba(74,222,128,0.06)] border-l border-r border-b border-[rgba(74,222,128,0.3)] rounded-b-xl">
                    <a
                      href="https://app.forrestry.ai/register"
                      className="inline-block w-full text-center px-6 py-3 rounded-lg bg-green text-black font-bold text-sm no-underline hover:bg-green/90 transition-all"
                    >
                      Get Started →
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </FadeUp>

        {/* Mobile cards — Funnel Studio only */}
        <FadeUp delay={0.1}>
          <div className="md:hidden flex flex-col gap-4">
            {rows.map((row, i) => (
              <div
                key={row.label}
                className={`bg-card-bg border border-[rgba(74,222,128,0.2)] rounded-xl p-5 ${
                  i % 2 === 1 ? 'bg-[rgba(255,255,255,0.02)]' : ''
                }`}
              >
                <p className="text-muted text-xs uppercase tracking-wider mb-1">{row.label}</p>
                <p className="text-text text-base font-medium mb-2">{row.funnelStudio}</p>
                <p className="text-muted text-xs opacity-45">
                  DIY: {row.diy} · Agency: {row.agency}
                </p>
              </div>
            ))}
            <a
              href="https://app.forrestry.ai/register"
              className="inline-block w-full text-center px-6 py-4 rounded-xl bg-green text-black font-bold text-base no-underline hover:bg-green/90 transition-all mt-2"
            >
              Get Started →
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
