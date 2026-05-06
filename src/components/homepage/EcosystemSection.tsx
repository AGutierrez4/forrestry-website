import FadeUp from '../FadeUp'
import { FUNNEL_STUDIO_URL } from './constants'

const products = [
  {
    tag: 'THE CONVERSION ENGINE',
    title: 'Funnel Studio',
    description: 'Build your Strategic Blueprint and launch a high-converting 4-page funnel stack in days, not months.',
    cta: 'Access Funnel Studio Now',
    href: FUNNEL_STUDIO_URL,
    live: true,
  },
  {
    tag: 'COMING SOON',
    title: 'AYA',
    description: 'Stop guessing what your customers want. Use AI-driven research to generate high-quality, authority-building content at scale.',
    cta: null,
    href: null,
    live: false,
  },
  {
    tag: 'COMING SOON',
    title: 'BrandStory',
    description: 'Your professional home. A website builder designed to anchor your brand identity and give your audience confidence as you scale.',
    cta: null,
    href: null,
    live: false,
  },
]

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-4">
              One Connected Ecosystem. Three Engines for Growth.
            </h2>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <FadeUp key={product.title} delay={i * 0.1}>
              <div
                className={`rounded-2xl p-7 h-full flex flex-col ${
                  product.live
                    ? 'bg-white border-2 border-green/30 shadow-md'
                    : 'bg-white/60 backdrop-blur-sm border border-gray-200 opacity-70 grayscale-[30%]'
                }`}
              >
                <span
                  className={`text-xs font-bold tracking-wider uppercase mb-4 ${
                    product.live ? 'text-green' : 'text-gray-400'
                  }`}
                >
                  {product.tag}
                </span>
                <h3 className="text-text-dark font-bold text-xl mb-3">{product.title}</h3>
                <p className="text-text-body text-sm leading-relaxed mb-6 flex-1">
                  {product.description}
                </p>
                {product.live && product.href && (
                  <a
                    href={product.href}
                    className="inline-block w-full text-center px-6 py-3 rounded-full bg-green text-black font-semibold text-sm no-underline hover:bg-green/90 transition-all"
                  >
                    {product.cta}
                  </a>
                )}
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  )
}
