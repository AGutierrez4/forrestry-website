

const valueItems = [
  { title: 'The 1-on-1 "Brain Dump" Extraction Session', value: '$1,500', desc: 'We will personally extract your expertise and feed it into Funnel Studio™ for you, ensuring your funnels sound exactly like you.' },
  { title: 'Custom "Anti-Prompt" Implementation', value: '$2,000', desc: 'We will set up your foundational commands so the AI works flawlessly for your specific niche.' },
  { title: 'The 10% Launch Ecosystem Blueprint', value: '$2,500', desc: 'We will map out your exact traffic strategy and automated follow-up sequences.' },
  { title: '30 Days of VIP "Stuck-to-Unstuck" Support', value: '$1,997', desc: 'If you ever hit a tech snag, you get priority access to our team to immediately unblock you.' },
]

export default function MasterclassStrategy() {
  return (
    <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Warning Bar */}
      <div className="bg-green-600 text-white text-center py-3 px-4 font-bold text-sm md:text-base tracking-wide">
        YOU'VE TAKEN STEP ONE. HERE'S HOW TO SKIP THE LINE.
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10">
        <div className="text-center mb-10">
          <p className="text-xl md:text-2xl font-bold text-gray-500 mb-4 uppercase tracking-wider">
            Tired of the post-event "Implementation Crash"?
          </p>
          <h1 className="text-4xl md:text-6xl font-black leading-tight mb-6 text-gray-900">
            Want To <span className="text-green-600">Skip The Learning Curve</span> Completely?
          </h1>
          <p className="text-lg md:text-2xl text-gray-500 font-medium max-w-4xl mx-auto">
            Let us personally hold your hand and implement the 'Brain Dump' Protocol for you.
          </p>
        </div>

        {/* Video */}
        <div className="max-w-4xl mx-auto bg-gray-50 p-4 rounded-xl shadow-xl mb-12 border-2 border-gray-200">
          <div className="bg-gray-900 rounded-lg flex flex-col items-center justify-center aspect-video p-8 text-center">
            <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-10 h-10 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
            </div>
            <h3 className="text-xl font-bold text-white">Click Play To Discover How To Skip The Grind</h3>
            <p className="text-sm text-gray-400 mt-2">[Video Placeholder]</p>
          </div>
        </div>

        {/* Pain */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-t-4 border-green-600">
          <h2 className="text-3xl font-black mb-6 text-gray-900">Here's What Usually Happens Next...</h2>
          <div className="text-lg text-gray-600 space-y-6 leading-relaxed">
            <p>You just made an incredible decision. You have Funnel Studio™. You have the blueprint. You are officially on the path to becoming a true <strong className="text-gray-900">Funnel Launcher</strong>.</p>
            <p>But let's be honest about what usually happens after the excitement fades. <strong className="text-gray-900">Tomorrow morning, the doubt creeps back in.</strong> The gap between knowing what to do and actually doing it starts to feel wide again.</p>
            <p>If you try to go it alone without personalized guidance, you risk losing momentum right when it matters most.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gray-900 text-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
          <h2 className="text-3xl md:text-4xl font-black mb-6 text-center text-green-400">The Solution: The "Done-With-You" Launch Strategy Session</h2>
          <p className="text-xl text-center mb-10 text-gray-300">What if we bridged the gap between learning and implementation so you couldn't possibly fail?</p>
          <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
            <p className="text-lg text-white/80 mb-6">For a heavily discounted, one-time investment of just <strong className="text-white">$297</strong> (normally $1,500+), you can upgrade your order today to include a private, 1-on-1 Strategy Session with our certified Funnel Studio™ implementation team.</p>
            <p className="text-lg text-white/80">We do the heavy lifting so you can instantly shift from a struggling "Funnel Builder" to a confident, high-converting "Funnel Launcher."</p>
          </div>
        </div>

        {/* Value Stack */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-black mb-8 text-center text-gray-900">Here Is Exactly What You Get When You Upgrade Today:</h2>
          <div className="space-y-6">
            {valueItems.map((item, i) => (
              <div key={i} className="flex items-start">
                <span className="text-green-600 mr-4 mt-1 shrink-0 text-xl">✓</span>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title} <span className="text-gray-400 text-base font-normal">(Value: {item.value})</span></h3>
                  <p className="mt-2 text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 p-6 bg-green-50 border-2 border-green-300 rounded-xl text-center">
            <h3 className="text-2xl font-black text-green-700">Total Value: $15,540</h3>
            <p className="text-lg text-gray-800 mt-2">Add to your order today for only <span className="font-bold text-2xl line-through text-gray-400">$1,500</span> <span className="font-black text-3xl text-green-600">$297</span></p>
          </div>
        </div>

        {/* Who This Is For */}
        <div className="mb-12">
          <h2 className="text-3xl font-black mb-8 text-center text-gray-900">This Strategy Session Is PERFECT For You If...</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              'You have a graveyard of half-finished funnels because the tech always breaks your momentum.',
              'You\'d rather have an expert guide you through the process than spend hours figuring it out alone.',
              'You\'re concerned about the post-webinar "implementation crash" where excitement fades and nothing gets launched.',
              'You simply don\'t have the time to build a funnel, traffic plan, and email sequence from scratch by yourself.',
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-600">
                <p className="text-gray-700 font-medium">❌ {item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* TODO: Restore testimonials section when real customer feedback is available.
           Original section: "They Escaped The Grind. Now It's Your Turn."
           with 2 testimonial cards (Sarah T., Marcus J.).
           Replace with real strategy session testimonials before driving paid traffic. */}

        {/* Guarantee */}
        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12 border-4 border-green-500 text-center">
          <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h2 className="text-3xl font-black mb-4 text-gray-900">The "Zero-Pain" 100% Risk Reversal Guarantee</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            If we get on the call, and you don't feel absolute clarity and relief, we will refund your $297 immediately, and you can keep the 10% Launch Ecosystem Blueprint as our gift. You have literally nothing to lose.
          </p>
        </div>

        {/* Dual CTA */}
        <div className="text-center bg-gray-50 p-10 rounded-2xl border border-gray-200 mb-12">
          <h2 className="text-2xl font-black mb-6 text-gray-900">Make Your Choice:</h2>
          {/* TODO: Replace # with Stripe payment link for $297 */}
          <a href="#" className="block w-full md:w-3/4 mx-auto bg-green-600 hover:bg-green-700 text-white font-black text-xl md:text-2xl py-6 px-8 rounded-xl shadow-[0_8px_0_0_#166534] hover:shadow-[0_4px_0_0_#166534] hover:translate-y-1 transition-all duration-200 mb-8 no-underline">
            YES! Add The Strategy Session For Just $297
            <span className="block text-sm md:text-base font-normal mt-2 opacity-80">I want done-with-you implementation so I can launch faster.</span>
          </a>
          <a href="/masterclass/confirmed" className="inline-block text-gray-400 hover:text-gray-600 text-sm md:text-base underline transition-colors max-w-lg mx-auto leading-relaxed">
            No thanks. I'll figure it out on my own.
          </a>
        </div>
      </div>

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
