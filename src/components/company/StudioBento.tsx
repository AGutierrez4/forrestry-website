import FadeUp from '../FadeUp'

interface BentoCard {
  title: string
  description: string
  gifId: string
  gifNote: string
  videoSrc?: string
  span?: string
}

const cards: BentoCard[] = [
  {
    title: 'Webinar Builder',
    description: 'The Perfect Webinar script, hard-coded into every build.',
    gifId: 'GIF_2',
    gifNote: '6s — scroll through Three Secrets + The Stack',
    videoSrc: '/webinar-builder.webm',
  },
  {
    title: '60-Second Hook',
    description: 'Stop the scroll on TikTok and Instagram.',
    gifId: 'GIF_3',
    gifNote: '5s — 3 hook variations generating in real-time',
    videoSrc: '/60-Second-Hook.webm',
  },
  {
    title: 'Funnel Stack',
    description: 'Squeeze, Upsell, and VIP pages synced to your story.',
    gifId: 'GIF_4',
    gifNote: '6s — click from Blueprint to Email Writer',
  },
  {
    title: 'Social Ads Writer',
    description: 'Cold, Warm, and Hot copy variations from one conversation.',
    gifId: '',
    gifNote: '',
    videoSrc: '/Social-Ads-Writer.webm',
  },
  {
    title: 'Email Writer',
    description: 'The full 10-15 email nurture sequence, written in your voice.',
    gifId: '',
    gifNote: '',
    videoSrc: '/Email-Writer.webm',
  },
  {
    title: 'Strategic Blueprint',
    description: 'The central brain steering your entire GTM stack.',
    gifId: '',
    gifNote: '',
  },
]

export default function StudioBento() {
  return (
    <section id="studio" className="py-24 px-6 relative overflow-hidden">
      {/* Forest haze glow behind bento */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] bg-[#16261C]/40 rounded-full blur-[150px] pointer-events-none" />

      <div className="relative z-10 max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Product
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-4">
            One Strategic Blueprint. Six High-Conversion Engines.
          </h2>
          <p className="text-muted text-center max-w-[600px] mx-auto mb-14 text-lg leading-relaxed">
            Every asset your launch needs, built from a single Brain Dump™ conversation.
          </p>
        </FadeUp>

        {/* Bento Grid: 3x2 on desktop, 1-col on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <FadeUp key={card.title} delay={0.1 * i}>
              <div className="bg-card-bg border border-card-border rounded-2xl p-6 hover:border-green/30 transition-colors flex flex-col h-full">
                {/* Media slot */}
                {card.videoSrc ? (
                  <div className="rounded-xl overflow-hidden mb-4 aspect-video">
                    <video
                      src={card.videoSrc}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : card.gifId ? (
                  <div className="rounded-xl bg-bg-elevated border border-card-border aspect-video flex items-center justify-center mb-4 overflow-hidden">
                    {/* Replace with: <img src={`/gifs/${card.gifId.toLowerCase().replace('_','-')}.gif`} alt={card.title} className="w-full h-full object-cover" /> */}
                    <div className="text-center px-4">
                      <p className="text-muted/60 text-xs">{card.gifId}: {card.gifNote}</p>
                    </div>
                  </div>
                ) : (
                  <div className="rounded-xl bg-bg-elevated border border-card-border aspect-video flex items-center justify-center mb-4">
                    <span className="text-muted/40 text-xs">Static preview</span>
                  </div>
                )}
                <h3 className="text-text font-bold mb-2">{card.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{card.description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
