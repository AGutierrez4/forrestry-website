import FadeUp from '../FadeUp'

const products = [
  {
    name: 'Funnel Studio™',
    badge: 'Available Now',
    badgeColor: 'bg-green/20 text-green',
    tagline: 'Talk for 15 minutes. Launch with everything.',
    description:
      'Your webinar script, registration page, email sequences, and ad copy. Built in order, from your story, your offer, and your audience. No blank pages. No guessing what comes next.',
    cta: 'Reserve My Free Seat',
    ctaHref: '#',
    borderClass: 'border-green/30 hover:border-green/50',
  },
  {
    name: 'Answer Your Audience',
    badge: 'Coming Soon',
    badgeColor: 'bg-white/10 text-white/60',
    tagline: 'Know what your audience needs to hear before you write a word.',
    description:
      'AI-powered research that surfaces the real objections, desires, and language your buyers use. Your copy converts because it starts with truth.',
    cta: 'Join the Waitlist',
    ctaHref: '#',
    borderClass: 'border-card-border hover:border-white/20',
  },
  {
    name: 'Website Builder',
    badge: 'Coming Soon',
    badgeColor: 'bg-white/10 text-white/60',
    tagline: 'Your brand online. Fast.',
    description:
      'A high-converting website without a designer, a developer, or a deadline you keep pushing. Built for founders who need to move.',
    cta: 'Join the Waitlist',
    ctaHref: '#',
    borderClass: 'border-card-border hover:border-white/20',
  },
]

export default function Products() {
  return (
    <section id="solution" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Solution
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-4">
            One conversation. Every asset you need to launch.
          </h2>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-white/70 text-center max-w-[700px] mx-auto mb-14 text-lg leading-relaxed">
            You talk. Funnel Studio™ builds. Squeeze page, webinar script, email sequences,
            ad copy, promo scripts. Stage by stage, in the right order, so nothing gets
            missed and nothing gets skipped.
          </p>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeUp key={product.name} delay={0.15 * i}>
              <div
                className={`bg-card-bg border ${product.borderClass} rounded-2xl p-8 flex flex-col h-full transition-colors`}
              >
                <span
                  className={`inline-block self-start text-xs font-semibold px-3 py-1 rounded-full mb-4 ${product.badgeColor}`}
                >
                  {product.badge}
                </span>
                <h3 className="text-xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-green/80 text-sm font-medium mb-3">{product.tagline}</p>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                <a
                  href={product.ctaHref}
                  className={`inline-block text-center px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-all ${
                    product.ctaHref !== '#'
                      ? 'bg-green text-black hover:bg-green/90'
                      : 'border border-white/20 text-white/70 hover:border-white/40 hover:text-white'
                  }`}
                >
                  {product.cta}
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
