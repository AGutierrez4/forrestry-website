import FadeUp from './FadeUp'

const activities = [
  { initials: 'MR', name: 'Marcus R.', action: 'Launched his coaching funnel 🚀', time: '2m ago' },
  { initials: 'JL', name: 'Jamie L.', action: 'Generated first webinar script ✍️', time: '14m ago' },
  { initials: 'TK', name: 'Tanya K.', action: 'Completed Brain Dump™ → Offer 🧠', time: '31m ago' },
  { initials: 'DS', name: 'Derek S.', action: 'First registration page live 🎉', time: '1h ago' },
]

export default function Community() {
  return (
    <section id="community" className="py-16 md:py-[120px] px-6 bg-bg-section-b">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <p className="eyebrow mb-4" style={{ color: '#818cf8' }}>
              THE COMMUNITY
            </p>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
              More than a tool.
            </h2>
            <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold text-white mb-6">
              You're joining the Forresters.
            </h3>
            <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
              A community of entrepreneurs who believe that speed, clarity, and execution beat
              perfection every time. We share wins, swap strategies, and help each other launch
              faster.
            </p>
          </div>
        </FadeUp>

        <FadeUp>
          <div className="max-w-[700px] mx-auto bg-card-bg border border-card-border rounded-xl p-8 backdrop-blur-sm">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">🌲</span>
              <h4 className="text-xl font-bold text-text">Forresters: Live</h4>
            </div>
            <p className="text-muted text-sm mb-6">What your community is doing right now</p>
            <div className="flex flex-col gap-4">
              {activities.map((a) => (
                <div
                  key={a.initials}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.02] border border-white/5 hover:border-green/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#818cf8] to-[#a5b4fc] flex items-center justify-center font-bold text-white text-sm shrink-0">
                    {a.initials}
                  </div>
                  <div className="flex-1">
                    <p className="font-semibold text-text text-[0.95rem]">{a.name}</p>
                    <p className="text-muted text-sm">{a.action}</p>
                  </div>
                  <span className="text-muted text-xs shrink-0">{a.time}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  )
}
