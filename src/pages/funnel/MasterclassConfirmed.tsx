import { Link } from 'react-router-dom'

export default function MasterclassConfirmed() {
  return (
    <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Progress Bar */}
      <div className="bg-gray-900 text-white text-center py-3 text-sm font-semibold tracking-wide border-b border-gray-700">
        <span className="text-gray-500">STEP 1: Register</span>
        <span className="mx-2 text-gray-600">→</span>
        <span className="text-gray-500">STEP 2: VIP Upgrade</span>
        <span className="mx-2 text-gray-600">→</span>
        <span className="text-green-400 font-bold">STEP 3: REGISTRATION CONFIRMED</span>
        <span className="mx-2 text-gray-600">→</span>
        <span className="text-gray-500">STEP 4: Strategy Session</span>
      </div>

      {/* Congratulations Header */}
      <header className="bg-gray-900 text-white pt-16 pb-20 px-4 text-center border-b-4 border-green-600">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-green-600/20 text-green-400 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            🎉 Your Spot is Officially Secured
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Take A Deep Breath.
            <br />
            <span className="text-green-400">The 80-Hour Grind Ends Right Now.</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            You've just taken the single most important step to permanently cure your tech overwhelm and finally transition from an exhausted "Funnel Builder" to a highly leveraged "Funnel Launcher."
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Welcome Video + Indoctrination */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-6 md:p-10 mb-16 shadow-lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video bg-gray-900 rounded-xl overflow-hidden border-2 border-gray-200 flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4l12 6-12 6z" /></svg>
                </div>
                <p className="text-white font-bold text-lg">Watch This First</p>
                <p className="text-gray-400 text-sm mt-2">[Welcome Video Placeholder]</p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">You Made The Right Call. Here's What's Next.</h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>If you've been feeling overwhelmed every time you sit down to build a funnel... I need you to know that <strong className="text-gray-900">you're not alone, and that feeling is about to change.</strong></p>
                <p className="text-gray-900 font-semibold text-lg border-l-4 border-green-600 pl-4">That frustration is exactly why I built Funnel Studio™. And this masterclass is going to show you a completely different way forward.</p>
                <p>Watch the short video above, then complete the steps below so you're ready to hit the ground running.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-gray-900">Your 3-Step Escape Plan Starts Now:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: 1, title: 'Whitelist Our Email', desc: 'Find the email from forrestry.ai and drag it to your Primary folder. This email contains your private access link.' },
              { num: 2, title: 'Download the Checklist', desc: 'Download the Core Offer Checklist below and work through it before the masterclass. Show up prepared, not guessing.' },
              { num: 3, title: 'Show Up 10 Mins Early', desc: 'Our webinar rooms fill up. Arrive early to secure your seat.' },
            ].map((step) => (
              <div key={step.num} className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 relative pt-12">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3 text-center">{step.title}</h4>
                <p className="text-gray-500 text-center text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar + Community */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-green-50 p-8 rounded-2xl border border-green-200">
            <div className="flex items-center mb-4">
              <span className="text-green-600 text-2xl mr-3">📅</span>
              <h3 className="text-2xl font-bold text-gray-900">Block Out Your Calendar</h3>
            </div>
            <p className="text-gray-600 mb-2 leading-relaxed">Protect this time like your business depends on it, because it does.</p>
            <p className="text-green-700 font-semibold mb-6">Tuesday, April 21 at 3:00 PM EST</p>
            <div className="flex flex-wrap gap-3">
              <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Funnel+Studio+Masterclass&dates=20260421T200000Z/20260421T213000Z&details=Your+free+Funnel+Studio+masterclass.+Show+up+10+minutes+early.&location=Online" target="_blank" rel="noopener noreferrer" className="bg-white text-green-700 font-semibold py-2 px-4 rounded shadow border border-green-200 hover:bg-green-50 transition text-sm no-underline">📅 Google Calendar</a>
              <a href="/masterclass-event.ics" download className="bg-white text-green-700 font-semibold py-2 px-4 rounded shadow border border-green-200 hover:bg-green-50 transition text-sm no-underline">🍏 Apple Calendar</a>
              <a href="/masterclass-event.ics" download className="bg-white text-green-700 font-semibold py-2 px-4 rounded shadow border border-green-200 hover:bg-green-50 transition text-sm no-underline">✉️ Outlook</a>
            </div>
          </div>
          <div className="bg-gray-900 text-white p-8 rounded-2xl shadow-xl">
            <h3 className="text-2xl font-bold mb-3 text-green-400">Join the Funnel Studio Forresters</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">Building funnels in isolation is a recipe for burnout. Join our private community of founders who are actively using Funnel Studio™ to launch faster, share wins, and help each other grow.</p>
            {/* TODO: Replace # with Skool community URL */}
            <a href="#" className="inline-block bg-green-500 hover:bg-green-400 text-gray-900 font-bold py-3 px-6 rounded-lg shadow-lg transition no-underline">Join the Forresters Community →</a>
          </div>
        </div>

        {/* Bonus Download */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-green-600 flex items-start">
            <div className="bg-green-50 p-3 rounded-full mr-5 shrink-0">
              <span className="text-green-600 text-2xl">📄</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900 mb-2">Free Bonus: Core Offer Checklist</h4>
              <p className="text-gray-500 text-sm mb-4 leading-relaxed">Download the <strong className="text-gray-900">Core Offer Checklist</strong> to clarify your offer foundations before the masterclass. Work through each section so you show up ready to build, not guessing.</p>
              {/* TODO: Replace with hosted PDF download link */}
              <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded transition cursor-pointer">Download the Checklist</button>
            </div>
          </div>
        </div>

        {/* Pain vs Relief */}
        <div className="bg-gray-50 rounded-2xl border border-gray-200 p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
            What To Expect:
            <br />
            <span className="text-green-600 text-2xl font-semibold">How We Are Permanently Eliminating Your Bottlenecks</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: 'pain', text: 'Staring at a blank screen for hours, paralyzed by the overwhelming scope of building a funnel from scratch.' },
              { type: 'relief', label: 'The \'Brain Dump\' Protocol.', text: 'Bypass the endless build cycle by simply having a conversation. Funnel Studio™ takes your raw ideas and architects the entire structure.' },
              { type: 'pain', text: 'Feeling unqualified because you\'re not a copywriter or a tech expert, and generic AI tools only make it worse with robotic, off-brand output.' },
              { type: 'relief', label: 'The Anti-Prompt Method.', text: 'No prompts, no code, no design skills. A system trained on proven frameworks extracts your genius through conversation and produces copy that sounds like you.' },
              { type: 'pain', text: 'Finally launching your funnel after weeks of work, only to hear crickets because you didn\'t have the bandwidth to set up traffic and follow-up sequences.' },
              { type: 'relief', label: 'The 10% Launch Ecosystem.', text: 'Your ads, emails, and video scripts are generated alongside your funnel pages — so everything launches together, not piece by piece.' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start p-4 rounded-lg border ${item.type === 'pain' ? 'bg-white border-gray-200' : 'bg-green-50 border-green-200'}`}>
                <span className={`mr-4 mt-1 shrink-0 ${item.type === 'pain' ? 'text-red-400' : 'text-green-600'}`}>
                  {item.type === 'pain' ? '✗' : '✓'}
                </span>
                <div>
                  <p className={`text-sm font-bold mb-1 ${item.type === 'pain' ? 'text-gray-500' : 'text-green-700'}`}>
                    {item.type === 'pain' ? 'THE PAIN:' : 'THE RELIEF:'}
                  </p>
                  <p className={`text-sm ${item.type === 'pain' ? 'text-gray-500' : 'text-gray-700'}`}>
                    {item.type === 'relief' && <strong>{item.label} </strong>}
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Session Soft Pitch */}
        <div className="bg-gray-900 text-white rounded-2xl border-2 border-green-600 p-8 md:p-12 mb-16 text-center">
          <span className="bg-green-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Want To Move Even Faster?
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Skip The DIY Learning Curve Entirely
          </h3>
          <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto">
            If you'd rather have someone implement alongside you, we offer a private 1-on-1 <strong className="text-white">Funnel Launch Strategy Session</strong> where our team maps out your custom plan and helps you execute.
          </p>
          <Link to="/masterclass/strategy" className="inline-block bg-green-500 hover:bg-green-400 text-gray-900 font-extrabold text-lg py-4 px-10 rounded-full transition no-underline">
            Yes! Map Out My Escape Route Now →
          </Link>
          <p className="mt-4 text-sm text-gray-400">*Extremely limited bandwidth. Only 5 strategy sessions available per week.</p>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'Will this work if I am absolutely terrible at tech?', a: 'Yes. It was built specifically for you. If you can type a basic idea into a box, you can launch a funnel.' },
              { q: 'I\'ve tried standard AI tools before and they failed. How is this different?', a: 'Standard AI platforms are generalists. Funnel Studio™ is highly specialized. It uses the Brain Dump Protocol to extract your expertise and format it specifically for high-conversion funnels.' },
              { q: 'What if I don\'t have the bandwidth to run traffic after it\'s built?', a: 'The 10% Launch Ecosystem specifically addresses the follow-up and traffic bandwidth issues, showing you how to automate the heavy lifting.' },
              { q: 'I didn\'t get my confirmation email. What do I do?', a: 'Check your spam or promotions folder. If you still can\'t find it, reach out to support@forrestry.ai and we will manually ensure you get your access link.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                <h4 className="font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

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
