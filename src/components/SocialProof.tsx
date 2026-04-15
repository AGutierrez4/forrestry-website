const problems = [
  {
    emoji: '✍️',
    title: 'The Copy Gap',
    desc: "You have a page but no words. You stare at a blank editor for hours, second-guessing every headline. Meanwhile, your offer sits unlaunched.",
  },
  {
    emoji: '🎨',
    title: 'The Design Trap',
    desc: "500 templates, none of them right. You spend days tweaking colors and padding instead of talking to customers and making money.",
  },
  {
    emoji: '🔗',
    title: 'The Integration Maze',
    desc: "Email tools, page builders, payment processors, webinar platforms — each one a new rabbit hole. By the time it's connected, your momentum is gone.",
  },
  {
    emoji: '🔥',
    title: 'The Burnout Wall',
    desc: "You started with a great idea and real energy. Weeks later, you're exhausted, nothing is live, and you're questioning whether any of this is worth it.",
  },
]

export default function SocialProof() {
  return (
    <section id="social-proof" className="py-24 px-6 border-t border-white/[0.06]">
      <div className="max-w-[1400px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-green text-xs tracking-[0.2em] uppercase mb-4 font-semibold">
            THE PROBLEM
          </p>
          <h2 className="text-[clamp(2rem,4vw,3rem)] font-extrabold text-text mb-4">
            You don't have a funnel problem.
          </h2>
          <h3 className="text-[clamp(1.5rem,3vw,2.25rem)] font-extrabold bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent mb-6">
            You have a friction problem.
          </h3>
          <p className="text-muted text-lg max-w-[700px] mx-auto leading-relaxed">
            Legacy tools like ClickFunnels hand you the bricks and tell you to build a house.
            You're forced to be the copywriter, the designer, the strategist, and the tech
            integrator — all at once. That's not a tool. That's a second job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((p) => (
            <div key={p.title} className="bg-card-bg rounded-xl p-8 border border-card-border backdrop-blur-sm hover:border-green/30 transition-all">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-[2.5rem]">{p.emoji}</span>
                <div>
                  <h3 className="text-2xl font-bold text-text mb-3">{p.title}</h3>
                  <p className="text-muted leading-relaxed">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
