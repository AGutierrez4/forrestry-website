import FadeUp from '../FadeUp'

const rows = [
  { label: 'Time to launch', manual: '80+ hours', forrestry: '15-minute Brain Dump' },
  { label: 'Cost', manual: '$10k+ agency fees', forrestry: '$49/mo Founders Rate' },
  { label: 'Tool stack', manual: '6 tabs, 3 subscriptions', forrestry: 'One platform' },
  { label: 'AI output quality', manual: 'Thin, generic, written for nobody', forrestry: 'Built from your story, your voice' },
  { label: 'Webinar script', manual: '20-25 hours of writing', forrestry: 'Perfect Webinar framework, generated' },
  { label: 'Email sequences', manual: '10-15 hours minimum', forrestry: 'Full nurture stack, in order' },
  { label: 'Launch confidence', manual: 'Second-guessing everything', forrestry: 'Launch-ready system' },
]

export default function EfficiencyTable() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-[900px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Real Cost
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            Why building funnels is finally "done."
          </h2>
        </FadeUp>

        <FadeUp delay={0.2}>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="text-left text-muted text-xs uppercase tracking-wider pb-4 pr-4 font-medium"></th>
                  <th className="text-left text-muted/60 text-xs uppercase tracking-wider pb-4 px-4 font-medium">The Manual Way</th>
                  <th className="text-left text-green text-xs uppercase tracking-wider pb-4 pl-4 font-medium">The Forrestry Way</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i} className="border-t border-card-border">
                    <td className="py-4 pr-4 text-text text-sm font-medium whitespace-nowrap">{row.label}</td>
                    <td className="py-4 px-4 text-muted/60 text-sm line-through decoration-muted/30">{row.manual}</td>
                    <td className="py-4 pl-4 text-text text-sm">{row.forrestry}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
