import FadeUp from '../FadeUp'

const products = [
  {
    name: 'Funnel Studio\u2122',
    badge: 'Available Now',
    badgeColor: 'bg-green/20 text-green',
    description:
      'Your entire funnel. Built in the right order. One Brain Dump\u2122 conversation generates your squeeze page, webinar script, email sequences, ad copy, and promo scripts. Stage by stage, so nothing falls through the cracks.',
    cta: 'Reserve My Free Seat',
    ctaHref: '#',
    borderClass: 'border-green/30 hover:border-green/50',
    primary: true,
  },
  {
    name: 'Answer Your Audience',
    badge: 'Coming Soon',
    badgeColor: 'bg-white/10 text-white/60',
    description:
      'Know exactly what your audience needs to hear. AI-powered research that surfaces the real objections, desires, and language your buyers use. So your copy converts before you write a word.',
    cta: 'Join the Waitlist',
    ctaHref: '#',
    borderClass: 'border-card-border hover:border-white/20',
    primary: false,
  },
  {
    name: 'Website Builder',
    badge: 'Coming Soon',
    badgeColor: 'bg-white/10 text-white/60',
    description:
      'Your brand online. In minutes, not months. A high-converting website without a designer, a developer, or a deadline you keep pushing. Built for founders who need to move fast.',
    cta: 'Join the Waitlist',
    ctaHref: '#',
    borderClass: 'border-card-border hover:border-white/20',
    primary: false,
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 px-6">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
            The Ecosystem
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-bold text-center mb-14">
            One ecosystem. Every tool you need to launch.
          </h2>
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
                <h3 className="text-xl font-bold text-white mb-3">{product.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                <a
                  href={product.ctaHref}
                  className={`inline-block text-center px-6 py-3 rounded-xl font-semibold text-sm no-underline transition-all ${
                    product.primary
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
