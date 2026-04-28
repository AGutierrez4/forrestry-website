import { Link } from 'react-router-dom'

const stackItems = [
  { title: 'The \'Brain Dump\' Protocol Quick-Start Guide', value: '$297', desc: 'Bypass the agonizing outlining phase. Just dump your raw thoughts, and watch as it maps your entire architecture.' },
  { title: 'The Anti-Prompt Swipe Library', value: '$497', desc: 'Get the exact frameworks that bypass standard AI limitations so you never experience that "heart hit the floor" moment again.' },
  { title: 'Backstage VIP Q&A Session', value: '$997', desc: 'Bring your specific bottlenecks. We will solve them live so you can launch immediately.' },
  { title: 'Unrestricted Lifetime Recordings', value: '$197', desc: 'VIPs get unrestricted access to rewatch exactly what they need, exactly when they need it.' },
  { title: 'The 10% Launch Ecosystem Templates', value: '$497', desc: 'Plug these templates in and let the ecosystem do the heavy lifting for your follow-up.' },
]

export default function MasterclassVIP() {
  return (
    <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Progress Bar */}
      <div className="bg-gray-900 text-white text-center py-3 border-b-4 border-green-600">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase">
          <span className="text-gray-500">Step 1: Registered</span>
          <span className="mx-2">→</span>
          <span className="text-green-400 font-bold">Step 2: VIP Customization</span>
          <span className="mx-2">→</span>
          <span className="text-gray-500">Step 3: Complete</span>
        </p>
      </div>

      {/* Header */}
      <header className="max-w-5xl mx-auto px-4 pt-10 pb-6 text-center">
        <div className="inline-block bg-green-50 text-green-700 font-bold px-4 py-1 rounded-full mb-4 uppercase tracking-wider text-sm border border-green-200">
          Wait! Your Registration is Confirmed, But...
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
          Tired of the <span className="text-green-600 underline decoration-4 underline-offset-4">80-Hour Funnel Grind?</span>
          <br />Don't Spend Another Minute Ripping Your Hair Out.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-semibold max-w-3xl mx-auto">
          Upgrade to VIP and bypass the tech-headaches, eliminate imposter syndrome, and get accelerated pain relief before the masterclass even begins...
        </p>
      </header>

      {/* Video */}
      <section className="max-w-4xl mx-auto px-4 mb-12">
        <div className="bg-gray-900 rounded-xl shadow-xl overflow-hidden border-2 border-gray-200 aspect-video flex items-center justify-center">
          <div className="text-center p-6">
            <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
            </div>
            <p className="text-white font-bold text-xl">Watch This Urgent 2-Minute Message</p>
            <p className="text-gray-400 text-sm mt-2">(Make sure your sound is ON)</p>
          </div>
        </div>
      </section>

      {/* Sales Letter */}
      <section className="max-w-3xl mx-auto px-4 mb-16 text-lg text-gray-600 leading-relaxed">
        <p className="mb-4">You just secured your seat for the Funnel Studio™ Masterclass, and I couldn't be more excited to help you shift from a stressed-out "Funnel Builder" to a high-leverage "Funnel Launcher."</p>
        <p className="mb-4 font-bold text-gray-900">But let's be brutally honest about why you registered today.</p>
        <p className="mb-4 bg-green-50 p-4 border-l-4 border-green-600 italic text-gray-700">
          You are exhausted.<br /><br />
          You know the visceral frustration of the 80-hour funnel build. You know the "heart hit the floor" moment when you finally try to use standard AI to speed things up, only to get robotic, unusable garbage back.
        </p>
        <p className="mb-4">The free masterclass is going to show you the exact blueprint to fix this forever.</p>
        <p className="mb-6 font-bold text-xl text-center text-gray-900">But... why suffer through another week of the 80-hour grind waiting for the masterclass to start?</p>
      </section>

      {/* VIP Offer Stack */}
      <section className="bg-gray-900 text-white py-16 px-4 mb-16 border-y-4 border-green-600">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-black mb-4 text-green-400">Introducing: The Funnel Launcher VIP Fast-Track</h2>
            <p className="text-xl text-gray-300">Your accelerated path out of the funnel-building trenches.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {stackItems.map((item, i) => (
                <div key={i} className="flex items-start">
                  <span className="text-green-400 mr-4 mt-1 shrink-0 text-xl">✓</span>
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.title} <span className="text-green-400/70 text-sm font-normal">(Value {item.value})</span></h3>
                    <p className="text-gray-400 mt-1 text-sm">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl text-center md:scale-105">
              <h4 className="text-2xl font-black mb-2">Total Value: <span className="line-through text-red-500">$2,485</span></h4>
              <p className="text-gray-500 mb-6 font-semibold">Normal VIP Price: $197</p>
              <div className="bg-gray-50 rounded-lg p-4 mb-6 border border-gray-200">
                <p className="text-sm font-bold text-gray-400 uppercase tracking-wide">Your One-Time Upgrade Offer</p>
                <p className="text-6xl font-black text-gray-900 my-2">$47</p>
              </div>
              <div className="flex items-center justify-center gap-2 mb-6 text-green-700 font-bold bg-green-50 py-2 rounded">
                <span className="animate-pulse">⏰</span>
                <span>Only 50 VIP Spots Available</span>
              </div>
              {/* TODO: Replace # with Stripe VIP payment link */}
              <a href="#" className="block w-full bg-green-600 hover:bg-green-700 text-white font-black text-xl py-4 rounded-lg shadow-lg transition-all mb-4 uppercase tracking-wide no-underline">
                YES! Upgrade Me To VIP Now
              </a>
              <p className="text-gray-400 text-xs">[Secure Checkout Badges Placeholder]</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="max-w-5xl mx-auto px-4 mb-16">
        <h2 className="text-3xl font-black text-center text-gray-900 mb-10">They Escaped The Grind. Will You?</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            { quote: '"Upgrading to VIP gave me the Anti-Prompt swipe file, and I finished the funnel in 2 hours. The pain relief was immediate."', name: 'Sarah J.', role: 'Funnel Launcher' },
            { quote: '"The Brain Dump protocol I got in the VIP upgrade completely bypassed my tech limitations. I went from a struggling builder to a Launcher overnight."', name: 'Mike T.', role: 'Agency Owner' },
          ].map((t, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-xl border border-gray-200 shadow-md relative">
              <div className="text-green-600/20 text-6xl absolute top-4 left-4 font-serif leading-none">"</div>
              <p className="text-gray-600 italic mb-4 relative z-10 leading-relaxed">{t.quote}</p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4" />
                <div>
                  <p className="font-bold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Urgency & Guarantee */}
      <section className="max-w-4xl mx-auto px-4 mb-16 text-center">
        <div className="bg-green-50 border-2 border-green-300 rounded-xl p-8 mb-8">
          <h3 className="text-2xl font-black text-green-700 mb-4 uppercase">⚠️ URGENT WARNING ⚠️</h3>
          <p className="text-lg text-gray-800 font-semibold mb-2">We only have the bandwidth to host 50 VIPs on the Backstage Q&A.</p>
          <p className="text-gray-600">Once those 50 spots are gone, this page will redirect. <strong className="text-gray-900">Every minute you wait is another minute stuck in the 80-hour grind.</strong></p>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-left bg-white p-8 rounded-xl shadow-lg border border-gray-200">
          <div className="w-24 h-24 shrink-0 rounded-full bg-green-50 border-2 border-green-300 flex items-center justify-center">
            <div className="text-center">
              <p className="text-green-700 font-black text-sm">30-DAY</p>
              <p className="text-green-700 font-bold text-xs">GUARANTEE</p>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-2">My "End The Grind" 30-Day Guarantee</h3>
            <p className="text-gray-600 leading-relaxed">If you upgrade to VIP, attend the masterclass, use the tools, and don't feel like we've completely eliminated the 80-hour grind... email my team. I will refund your $47 immediately, and you can keep all the VIP bonuses.</p>
          </div>
        </div>
      </section>

      {/* Final Dual CTA */}
      <section className="max-w-3xl mx-auto px-4 pb-20 text-center">
        {/* TODO: Replace # with Stripe VIP payment link */}
        <a href="#" className="inline-block w-full max-w-xl bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl py-5 px-8 rounded-xl shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide mb-6 no-underline">
          YES! Upgrade Me To VIP Access Now ($47)
        </a>
        <br />
        <Link to="/masterclass/confirmed" className="inline-block text-gray-400 hover:text-gray-600 text-sm underline transition-colors max-w-lg mx-auto leading-relaxed">
          No thanks. Take me to the confirmation page.
        </Link>
      </section>

      <footer className="bg-gray-950 py-8 text-center text-gray-500 text-sm">
        <div className="max-w-4xl mx-auto px-4">
          <p>© 2026 Funnel Studio™ by forrestry.ai. All Rights Reserved.</p>
          <div className="mt-4 space-x-4">
            <a href="/terms" className="hover:text-white transition-colors no-underline">Terms of Service</a>
            <a href="/privacy" className="hover:text-white transition-colors no-underline">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
