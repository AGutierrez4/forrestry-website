import FadeUp from '../FadeUp'

export default function CommunitySection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-[700px] mx-auto text-center">
        <FadeUp>
          <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-6">
            Join the Community of Forresters.
          </h2>
          <p className="text-text-body text-lg leading-relaxed mb-4">
            You aren't just buying software. You're joining a network of entrepreneurs
            committed to building real systems, sharing feedback, and growing together.
          </p>
          <p className="text-text-body text-lg leading-relaxed">
            Success is easier when you aren't doing it alone.
          </p>
        </FadeUp>

        <FadeUp delay={0.1}>
          <div className="mt-10 w-16 h-1 bg-green/40 rounded-full mx-auto" />
        </FadeUp>
      </div>
    </section>
  )
}
