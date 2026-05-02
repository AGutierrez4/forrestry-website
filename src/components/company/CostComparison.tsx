import FadeUp from '../FadeUp'

const tools = [
  {
    name: 'ChatGPT Pro',
    cost: '$20/mo',
    note: 'General AI — you write the prompts, you connect the dots',
  },
  {
    name: 'Funnel course or templates',
    cost: '$500 – $2,000',
    note: 'Frameworks to study, but you still do all the writing',
    oneTime: true,
  },
  {
    name: 'Copywriting swipe files',
    cost: '$50 – $200',
    note: 'Starting points, not finished copy',
    oneTime: true,
  },
  {
    name: 'Design tools (Canva, etc.)',
    cost: '$13 – $30/mo',
    note: 'Visuals, but no copy strategy',
  },
  {
    name: 'Email platform',
    cost: '$29 – $59/mo',
    note: 'Sends emails — doesn\'t write them',
  },
  {
    name: 'Your time stitching it all together',
    cost: 'Hours/week',
    note: 'The Frankenstein funnel',
    isTime: true,
  },
]

export default function CostComparison() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-[800px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Real Comparison
          </p>
          <h2 className="text-[clamp(1.75rem,4vw,2.5rem)] font-bold text-center mb-4">
            What you're probably piecing together now
          </h2>
          <p className="text-muted text-base text-center max-w-[600px] mx-auto mb-12 leading-relaxed">
            Most founders cobble together 4–5 tools and still end up doing the
            strategic thinking themselves. Here's what that stack actually looks like.
          </p>
        </FadeUp>

        {/* Comparison table */}
        <FadeUp delay={0.1}>
          <div className="bg-card-bg border border-card-border rounded-2xl overflow-hidden mb-6">
            {/* Header */}
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_140px_1fr] gap-4 px-6 py-4 border-b border-card-border bg-white/[0.02]">
              <span className="text-muted text-xs font-semibold uppercase tracking-wide">
                Tool
              </span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wide text-right md:text-left">
                Cost
              </span>
              <span className="text-muted text-xs font-semibold uppercase tracking-wide hidden md:block">
                What You Get
              </span>
            </div>

            {/* Rows */}
            {tools.map((tool, i) => (
              <div
                key={tool.name}
                className={`grid grid-cols-[1fr_auto] md:grid-cols-[1fr_140px_1fr] gap-4 px-6 py-4 ${
                  i < tools.length - 1 ? 'border-b border-card-border' : ''
                }`}
              >
                <span className="text-text text-sm font-medium">{tool.name}</span>
                <span
                  className={`text-sm text-right md:text-left font-semibold ${
                    tool.isTime ? 'text-yellow-400' : 'text-muted'
                  }`}
                >
                  {tool.cost}
                  {tool.oneTime && (
                    <span className="text-muted text-xs font-normal ml-1">(one-time)</span>
                  )}
                </span>
                <span className="text-muted text-sm hidden md:block">{tool.note}</span>
              </div>
            ))}

            {/* Stack total */}
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_140px_1fr] gap-4 px-6 py-4 border-t-2 border-card-border bg-white/[0.03]">
              <span className="text-text text-sm font-bold">The DIY stack</span>
              <span className="text-muted text-sm font-bold text-right md:text-left">
                $60 – $110/mo
                <span className="text-xs font-normal block text-muted/70">+ one-time costs + your time</span>
              </span>
              <span className="text-muted text-sm hidden md:block">
                Disconnected pieces. No unified strategy.
              </span>
            </div>
          </div>
        </FadeUp>

        {/* Funnel Studio row */}
        <FadeUp delay={0.15}>
          <div className="bg-card-bg border-2 border-green/40 rounded-2xl px-6 py-5 shadow-[0_0_40px_rgba(74,222,128,0.08)]">
            <div className="grid grid-cols-[1fr_auto] md:grid-cols-[1fr_140px_1fr] gap-4 items-center">
              <div>
                <span className="text-text text-sm font-bold">Funnel Studio™</span>
                <span className="ml-2 text-xs bg-green/20 text-green px-2 py-0.5 rounded-full font-semibold">
                  Founding Rate
                </span>
              </div>
              <span className="text-green text-sm font-bold text-right md:text-left">$47/mo</span>
              <span className="text-text text-sm hidden md:block">
                One conversation → complete, connected funnel content.
              </span>
            </div>
          </div>
        </FadeUp>

        <FadeUp delay={0.2}>
          <p className="text-muted text-sm text-center mt-8 max-w-[500px] mx-auto leading-relaxed">
            You're probably already spending this much on disconnected tools.
            Funnel Studio replaces the duct tape with a system.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
