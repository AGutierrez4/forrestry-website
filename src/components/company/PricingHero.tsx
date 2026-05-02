import FadeUp from '../FadeUp'

export default function PricingHero() {
  return (
    <section className="pt-12 pb-8 px-6">
      <div className="max-w-[700px] mx-auto text-center">
        <FadeUp>
          <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4">
            Pricing
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h1 className="text-[clamp(2rem,5vw,3.25rem)] font-extrabold text-text mb-6 leading-[1.1]">
            Your entire funnel.{' '}
            <span className="bg-gradient-to-br from-green-bright to-purple bg-clip-text text-transparent">
              One subscription.
            </span>
          </h1>
        </FadeUp>

        <FadeUp delay={0.15}>
          <p className="text-muted text-lg leading-relaxed max-w-[600px] mx-auto">
            Most founders piece together 4 or 5 tools and still end up doing all the
            writing themselves. Funnel Studio replaces the duct tape with a system:
            one conversation in, complete funnel content out.
          </p>
        </FadeUp>
      </div>
    </section>
  )
}
