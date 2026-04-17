import { Link } from 'react-router-dom'

const valueItems = [
  { title: 'The 1-on-1 "Brain Dump" Extraction Session', value: '$1,500', desc: 'Erase the pain of a blank page forever. We will personally extract your expertise and feed it into Funnel Studio™ for you, ensuring your funnels sound exactly like you, without you having to type a single line of copy.' },
  { title: 'Custom "Anti-Prompt" Implementation', value: '$2,000', desc: 'Kill imposter syndrome instantly. Stop worrying about "prompt engineering" or tech skills. We will set up your foundational commands so the AI works flawlessly for your specific niche.' },
  { title: 'The 10% Launch Ecosystem Blueprint', value: '$2,500', desc: 'Solve your traffic and follow-up bandwidth issues. We will map out your exact traffic strategy and automated follow-up sequences so you never have to worry about where your next lead is coming from.' },
  { title: '30 Days of VIP "Stuck-to-Unstuck" Support', value: '$1,997', desc: 'If you ever hit a tech snag or feel that 80-hour grind creeping back, you get priority access to our team to immediately unblock you.' },
]

export default function MasterclassStrategy() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Warning Bar */}
      <div className="bg-green text-black text-center py-3 px-4 font-bold text-sm md:text-base tracking-wide">
        WAIT! YOUR ORDER IS NOT COMPLETE. DO NOT CLOSE THIS PAGE.
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        {/* Headline */}
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl font-bold text-muted mb-4 uppercase tracking-wider">
            Tired of the post-event "Implementation Crash" where you're left completely alone to figure out the tech?
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6">
            Want To{' '}
            <span className="text-green">Bypass The 80-Hour Grind</span>{' '}
            Completely And Guarantee You Stay Ahead After The Event Ends?
          </h1>
          <p className="text-lg md:text-2xl text-muted font-medium max-w-4xl mx-auto">
            Don't let imposter syndrome and the dread of a blank screen drag you back down. Let us personally hold your hand and implement the 'Brain Dump' Protocol for you.
          </p>
        </div>

        {/* Video Placeholder */}
        <div className="max-w-4xl mx-auto bg-card-bg p-4 rounded-xl shadow-[0_0_40px_rgba(74,222,128,0.1)] mb-12 border-2 border-card-border">
          <div className="bg-bg rounded-lg flex flex-col items-center justify-center aspect-video p-8 text-center">
            <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">Click Play To Discover How To Skip The Grind</h3>
            <p className="text-sm text-muted mt-2">[Video Placeholder — watch before session expires]</p>
          </div>
        </div>

        {/* Pain Amplification */}
        <div className="bg-card-bg rounded-2xl border-t-4 border-green p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-black mb-6">The "Heart Hit The Floor" Moment Is Coming...</h2>
          <div className="text-lg text-white/70 space-y-6 leading-relaxed">
            <p>You just made an incredible decision. You have Funnel Studio™. You have the blueprint. You are officially on the path to becoming a true <strong className="text-white">Funnel Launcher</strong>.</p>
            <p>But let's be brutally honest about what usually happens next.</p>
            <p>Tomorrow morning, the hype of the event will fade. You'll sit down at your desk, open your laptop, and stare at the screen. Suddenly, that familiar, suffocating knot in your stomach returns. <strong className="text-white">Imposter syndrome creeps back in.</strong></p>
            <p>You realize that while you have the best tool in the world, your specific business is messy. You have unique offers. You have specific traffic problems. And suddenly, the dread of the <span className="font-bold text-green">80-hour grind</span> flashes before your eyes.</p>
            <p>If you try to go it alone right now, without personalized guidance, you risk falling right back into that trap. You risk letting Funnel Studio™ become just another tool gathering digital dust while you burn the midnight oil, frustrated, exhausted, and overwhelmed.</p>
          </div>
        </div>

        {/* The Solution */}
        <div className="bg-[#0A1A0F] rounded-2xl p-8 md:p-12 mb-12 border border-green/20">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center text-green-bright">
            The Solution: The "Done-With-You" Launch Strategy Session
          </h2>
          <p className="text-xl text-center mb-10 text-muted">What if you never had to feel that frustration again? What if we bridged the gap between learning and implementation so you couldn't possibly fail?</p>
          <div className="bg-bg rounded-xl p-8 border border-card-border">
            <p className="text-lg text-white/80 mb-6">For a heavily discounted, one-time investment of just <strong className="text-white">$297</strong> (normally $1,500+), you can upgrade your order today to include a private, 1-on-1 Strategy Session with our certified Funnel Studio™ implementation team.</p>
            <p className="text-lg text-white/80">We won't just tell you what to do. We will get on a call, look at your specific business, and apply the <em>Anti-Prompt Method</em> and the <em>Brain Dump Protocol</em> directly to your offers.</p>
          </div>
        </div>

        {/* Value Stack */}
        <div className="bg-card-bg rounded-2xl border border-card-border p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-black mb-8 text-center">Here Is Exactly What You Get When You Upgrade Today:</h2>
          <div className="space-y-6">
            {valueItems.map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-green mr-4 mt-1 shrink-0 text-xl">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    {item.title} <span className="text-muted text-base font-normal">(Value: {item.value})</span>
                  </h3>
                  <p className="mt-2 text-white/70">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-green/5 border-2 border-green/30 rounded-xl text-center">
            <h3 className="text-2xl font-black text-green">Total Value: $15,540</h3>
            <p className="text-lg text-white mt-2">
              Add to your order today for only{' '}
              <span className="font-bold text-2xl line-through text-muted">$1,500</span>{' '}
              <span className="font-black text-3xl text-green-bright">$297</span>
            </p>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-12">
          <h2 className="text-3xl font-black mb-8 text-center">This Strategy Session Is PERFECT For You If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'You have a graveyard of half-finished funnels because the tech always breaks your momentum.',
              'You feel a knot in your stomach every time you think about having to learn "prompt engineering."',
              'You are terrified of the post-webinar "implementation crash" where you\'re left alone to figure it out.',
              'You simply do not have the 80 hours required to grind out a funnel, traffic plan, and follow-up sequence by yourself.',
            ].map((item, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-xl border-l-4 border-green">
                <p className="text-white/80 font-medium">❌ {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Social Proof */}
        <div className="bg-[#0D0D0F] rounded-2xl p-8 md:p-12 mb-12 border border-card-border">
          <h2 className="text-3xl font-black mb-8 text-center">They Escaped The Grind. Now It's Your Turn.</h2>
          <div className="space-y-8">
            {[
              { quote: '"Before the strategy session, my heart used to literally hit the floor when I tried to use standard AI. I was spending 80 hours tweaking prompts and fixing broken pages. The 1-on-1 session changed everything. They extracted my \'Brain Dump\' in 45 minutes, and we launched my funnel the next day. The imposter syndrome is completely gone."', name: '- Sarah T., Former Frustrated Funnel Builder' },
              { quote: '"I had the software, but I lacked the bandwidth. I was paralyzed by the traffic and follow-up setup. The team used the Anti-Prompt Method on my business during our call, and suddenly, the 10% Launch Ecosystem made perfect sense. I went from staring at a blank screen to having a live, converting funnel without writing a single line of code."', name: '- Marcus J., Digital Course Creator' },
            ].map((t, i) => (
              <div key={i} className="bg-bg p-6 rounded-xl border border-card-border">
                <div className="text-green text-xl mb-4">★★★★★</div>
                <p className="text-white/70 italic mb-4 leading-relaxed">{t.quote}</p>
                <p className="font-bold text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Guarantee */}
        <div className="bg-card-bg rounded-2xl border-2 border-green/40 p-8 md:p-12 mb-12 text-center">
          <div className="w-16 h-16 rounded-full bg-green/10 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4">The "Zero-Pain" 100% Risk Reversal Guarantee</h2>
          <p className="text-lg text-muted max-w-3xl mx-auto leading-relaxed">
            I am so confident that this Strategy Session will completely eliminate your imposter syndrome and bypass the 80-hour grind that I'm taking all the risk. If we get on the call, and you don't feel absolute clarity and relief—if you don't feel like you are officially a "Funnel Launcher"—just let us know at the end of the call. We will refund your $297 immediately, and you can keep the 10% Launch Ecosystem Blueprint as our gift. You have literally nothing to lose except the stress of building funnels alone.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="text-center bg-gradient-to-b from-card-bg to-[#0A1A0F] p-10 rounded-2xl border border-card-border mb-12">
          <h2 className="text-2xl font-black mb-6">Make Your Choice:</h2>
          {/* TODO: Replace # with Stripe payment link for $297 strategy session */}
          <a
            href="#"
            className="block w-full md:w-3/4 mx-auto bg-green hover:bg-green/90 text-black font-black text-xl md:text-2xl py-6 px-8 rounded-xl shadow-[0_8px_0_0_#166534] hover:shadow-[0_4px_0_0_#166534] hover:translate-y-1 transition-all duration-200 mb-8 no-underline"
          >
            YES! Add The Strategy Session To My Order For Just $297
            <span className="block text-sm md:text-base font-normal mt-2 opacity-80">
              I want to skip the 80-hour grind and get Done-With-You implementation.
            </span>
          </a>
          <Link
            to="/masterclass/confirmed"
            className="inline-block text-muted/60 hover:text-muted text-sm md:text-base underline transition-colors max-w-lg mx-auto leading-relaxed"
          >
            No thanks. I don't want the 1-on-1 help. I accept the risk of the 80-hour grind, I'll figure out the traffic and follow-up bandwidth issues myself, and I will try to overcome the tech hurdles on my own.
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-bg-footer border-t border-card-border py-8 text-center text-muted text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p>© 2026 Funnel Studio™ by forrestry.ai. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/terms" className="hover:text-green transition-colors no-underline">Terms of Service</a>
            <a href="/privacy" className="hover:text-green transition-colors no-underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
