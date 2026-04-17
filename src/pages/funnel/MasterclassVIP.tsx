import { Link } from 'react-router-dom'

const stackItems = [
  { title: 'The \'Brain Dump\' Protocol Quick-Start Guide', value: '$297', desc: 'Tired of staring at a blinking cursor? The pain of the blank page stops here. Bypass the agonizing outlining phase. Just dump your raw thoughts, and watch as it maps your entire architecture.' },
  { title: 'The Anti-Prompt Swipe Library', value: '$497', desc: 'Stop trying to learn "prompt engineering." It\'s the fastest route to imposter syndrome. Get the exact frameworks that bypass standard AI limitations so you never experience that "heart hit the floor" moment again.' },
  { title: 'Backstage VIP Q&A Session', value: '$997', desc: 'There is nothing worse than being stuck on one tiny tech glitch that stalls your entire 80-hour build. Bring your specific bottlenecks. We will solve them live so you can launch immediately.' },
  { title: 'Unrestricted Lifetime Recordings', value: '$197', desc: 'Eliminate the anxiety of furiously taking notes, terrified you\'ll miss the one "aha" moment. VIPs get unrestricted access to rewatch exactly what they need, exactly when they need it.' },
  { title: 'The 10% Launch Ecosystem Templates', value: '$497', desc: 'The crushing realization that you still have to figure out traffic with zero bandwidth left is maddening. Plug these templates in and let the ecosystem do the heavy lifting for your follow-up.' },
]

export default function MasterclassVIP() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Progress Bar */}
      <div className="bg-card-bg text-center py-3 border-b-2 border-green/30">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase">
          <span className="text-muted">Step 1: Registered</span>
          <span className="mx-2 text-muted/50">→</span>
          <span className="text-green font-bold">Step 2: VIP Customization</span>
          <span className="mx-2 text-muted/50">→</span>
          <span className="text-muted/50">Step 3: Complete</span>
        </p>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="inline-block bg-green/10 text-green font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wider text-sm border border-green/30">
          Wait! Your Registration is Confirmed, But...
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6">
          Tired of the{' '}
          <span className="text-green underline decoration-4 underline-offset-4">80-Hour Funnel Grind?</span>
          <br />
          Don't Spend Another Minute Ripping Your Hair Out.
        </h1>
        <p className="text-xl md:text-2xl text-muted font-semibold max-w-3xl mx-auto">
          Upgrade to VIP and bypass the tech-headaches, eliminate imposter syndrome, and get accelerated pain relief before the masterclass even begins...
        </p>
      </header>

      {/* Video Placeholder */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-card-bg rounded-xl shadow-[0_0_40px_rgba(74,222,128,0.1)] overflow-hidden border-2 border-card-border aspect-video flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                <path d="M4 4l12 6-12 6z" />
              </svg>
            </div>
            <p className="text-white font-bold text-xl">Watch This Urgent 2-Minute Message</p>
            <p className="text-muted text-sm mt-2">(Make sure your sound is ON)</p>
          </div>
        </div>
      </section>

      {/* Sales Letter */}
      <section className="max-w-3xl mx-auto px-4 mb-16 text-lg text-white/70 leading-relaxed">
        <p className="mb-4">You just secured your seat for the Funnel Studio™ Masterclass, and I couldn't be more excited to help you shift from a stressed-out "Funnel Builder" to a high-leverage "Funnel Launcher."</p>
        <p className="mb-4 font-bold text-white">But let's be brutally honest about why you registered today.</p>
        <p className="mb-4 bg-green/5 p-4 border-l-4 border-green italic text-white/80">
          You are exhausted.<br /><br />
          You know the visceral frustration of the 80-hour funnel build. You know what it's like to stare at a blank screen, trying to connect a dozen different software tools, praying the integrations don't break. You know the "heart hit the floor" moment when you finally try to use standard AI to speed things up, only to get robotic, unusable garbage back.
        </p>
        <p className="mb-4">I know that pain intimately. When I transitioned from the trucking industry into the digital world, I was hit with massive imposter syndrome. I didn't have a tech background. I didn't know how to code. Every funnel felt like I was pushing a boulder up a mountain.</p>
        <p className="mb-4">You registered for this masterclass because you don't have the bandwidth to keep doing this the hard way. The traffic issues, the follow-up sequences, the endless prompt engineering—it's draining the life out of your business.</p>
        <p className="mb-4">The free masterclass is going to show you the exact blueprint to fix this forever.</p>
        <p className="mb-6 font-bold text-xl text-center text-white">But... why suffer through another week of the 80-hour grind waiting for the masterclass to start?</p>
        <p className="mb-8 text-center text-xl text-white/80">Why spend another minute wrestling with tech skills you shouldn't even need?</p>
      </section>

      {/* VIP Offer Stack */}
      <section className="bg-card-bg py-16 px-4 mb-16 border-y-4 border-green/30">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
              Introducing: The Funnel Launcher VIP Fast-Track
            </h2>
            <p className="text-xl text-muted">Your accelerated path out of the funnel-building trenches.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Stack Details */}
            <div className="space-y-6">
              {stackItems.map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-green mr-4 mt-1 shrink-0 text-xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">
                      {item.title} <span className="text-green/70 text-sm font-normal">(Value {item.value})</span>
                    </h3>
                    <p className="text-muted mt-1 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Price Box */}
            <div className="bg-bg rounded-2xl p-8 border border-card-border shadow-[0_0_60px_rgba(74,222,128,0.08)] text-center md:scale-105">
              <h4 className="text-2xl font-black mb-2">Total Value: <span className="line-through text-muted">$2,485</span></h4>
              <p className="text-muted mb-6 font-semibold">Normal VIP Price: $197</p>
              <div className="bg-card-bg rounded-lg p-4 mb-6 border border-card-border">
                <p className="text-sm font-bold text-muted uppercase tracking-wide">Your One-Time Upgrade Offer</p>
                <p className="text-6xl font-black text-white my-2">$47</p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6 text-green font-bold bg-green/10 py-2 rounded">
                <span className="animate-pulse">⏰</span>
                <span>Only 50 VIP Spots Available</span>
              </div>
              {/* TODO: Replace # with Stripe VIP payment link */}
              <a
                href="#"
                className="block w-full bg-green hover:bg-green/90 text-black font-black text-xl py-4 rounded-lg shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide mb-4 no-underline"
              >
                YES! Upgrade Me To VIP Now
              </a>
              <p className="text-muted/60 text-xs">[Secure Checkout Badges Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-black text-center mb-10">They Escaped The Grind. Will You?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: '"I was 60 hours deep into a build and ready to throw my laptop out the window. The imposter syndrome was crushing me. Upgrading to VIP gave me the Anti-Prompt swipe file, and I finished the funnel in 2 hours. The pain relief was immediate."', name: 'Sarah J.', role: 'Funnel Launcher' },
            { quote: '"Standard AI made my heart hit the floor. It was so bad. The Brain Dump protocol I got in the VIP upgrade completely bypassed my tech limitations. I went from a struggling builder to a Launcher overnight. Don\'t wait for the webinar, get the VIP now."', name: 'Mike T.', role: 'Agency Owner' },
          ].map((t, i) => (
            <div key={i} className="bg-card-bg p-8 rounded-xl border border-card-border relative">
              <div className="text-green/20 text-6xl absolute top-4 left-4 font-serif leading-none">"</div>
              <p className="text-white/70 italic mb-4 relative z-10 leading-relaxed">{t.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-bg rounded-full mr-4 border border-card-border" />
                <div>
                  <p className="font-bold text-white">{t.name}</p>
                  <p className="text-sm text-muted">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Urgency & Guarantee */}
      <section className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="bg-green/5 border-2 border-green/30 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-black text-green mb-4 uppercase">⚠️ URGENT WARNING ⚠️</h3>
          <p className="text-lg text-white font-semibold mb-2">We only have the bandwidth to host 50 VIPs on the Backstage Q&A.</p>
          <p className="text-white/70">Once those 50 spots are gone, this page will redirect, and you will be stuck doing things the hard way until the masterclass. This offer expires the moment you close this page. <strong className="text-white">Every minute you wait is another minute stuck in the 80-hour grind.</strong></p>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left bg-card-bg p-8 rounded-xl border border-card-border">
          <div className="w-24 h-24 shrink-0 rounded-full bg-green/10 border-2 border-green/30 flex items-center justify-center">
            <div className="text-center">
              <p className="text-green font-black text-sm">30-DAY</p>
              <p className="text-green font-bold text-xs">GUARANTEE</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-white mb-2">My "End The Grind" 30-Day Guarantee</h3>
            <p className="text-muted leading-relaxed">If you upgrade to VIP, attend the masterclass, use the tools, and don't feel like we've completely eliminated the 80-hour grind and cured your imposter syndrome... email my team. I will refund your $47 immediately, and you can keep all the VIP bonuses as my way of apologizing for wasting your time. You have absolutely nothing to lose, except the tech headaches.</p>
          </div>
        </div>
      </section>

      {/* Final Dual CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        {/* TODO: Replace # with Stripe VIP payment link */}
        <a
          href="#"
          className="inline-block w-full max-w-xl bg-green hover:bg-green/90 text-black font-black text-xl md:text-2xl py-5 px-8 rounded-xl shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide mb-6 no-underline"
        >
          YES! Upgrade Me To VIP Access Now ($47)
        </a>
        <br />
        <Link
          to="/masterclass/confirmed"
          className="inline-block text-muted/60 hover:text-muted text-sm underline transition-colors max-w-lg mx-auto leading-relaxed"
        >
          No thanks. I prefer the 80-hour grind. I will pass on the VIP Fast-Track and figure out the tech headaches, prompt engineering, and bandwidth issues on my own. Take me to the confirmation page.
        </Link>
      </section>

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
