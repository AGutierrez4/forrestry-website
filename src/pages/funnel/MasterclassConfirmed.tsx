import { Link } from 'react-router-dom'

export default function MasterclassConfirmed() {
  return (
    <div className="bg-bg text-text min-h-screen">
      {/* Progress Bar */}
      <div className="bg-card-bg text-center py-3 text-sm font-semibold tracking-wide border-b border-card-border">
        <span className="text-muted/50">STEP 1: Register</span>
        <span className="mx-2 text-muted/30">→</span>
        <span className="text-muted/50">STEP 2: VIP Upgrade</span>
        <span className="mx-2 text-muted/30">→</span>
        <span className="text-green font-bold">STEP 3: REGISTRATION CONFIRMED</span>
        <span className="mx-2 text-muted/30">→</span>
        <span className="text-muted/50">STEP 4: Strategy Session</span>
      </div>

      {/* Congratulations Header */}
      <header className="bg-[#0A1A0F] pt-16 pb-20 px-4 text-center border-b-4 border-green/40">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block bg-green/20 text-green px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6">
            🎉 Your Spot is Officially Secured
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-6">
            Take A Deep Breath.{' '}
            <br />
            <span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
              The 80-Hour Grind Ends Right Now.
            </span>
          </h1>
          <p className="text-xl text-muted max-w-2xl mx-auto font-light leading-relaxed">
            You've just taken the single most important step to permanently cure your tech overwhelm, banish imposter syndrome, and finally transition from an exhausted "Funnel Builder" to a highly leveraged "Funnel Launcher."
          </p>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-12">
        {/* Welcome Video + Indoctrination */}
        <div className="bg-card-bg rounded-2xl border border-card-border p-6 md:p-10 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Placeholder */}
            <div className="relative w-full aspect-video bg-bg rounded-xl overflow-hidden border-2 border-card-border flex items-center justify-center">
              <div className="text-center p-6">
                <div className="w-20 h-20 bg-green/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-10 h-10 text-green ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4l12 6-12 6z" />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg">Watch This First</p>
                <p className="text-muted text-sm mt-2">[Welcome Video Placeholder]</p>
              </div>
            </div>

            {/* Indoctrination Copy */}
            <div>
              <h2 className="text-3xl font-bold text-white mb-4">Please, Stop Punishing Yourself.</h2>
              <div className="text-white/70 space-y-4 leading-relaxed">
                <p>If you've been feeling that heavy, visceral knot in your stomach every time you open a funnel builder... I need you to know that <strong className="text-white">I understand exactly how much that hurts.</strong></p>
                <p>Before Funnel Studio™, I was in the trucking industry. I traded one grueling, exhausting grind for another. I thought building funnels online would equal freedom. Instead, it meant 80-hour work weeks, staring at a blinking cursor, desperately trying to figure out the tech while imposter syndrome screamed in my ear that I wasn't smart enough to pull this off.</p>
                <p className="text-white font-semibold text-lg border-l-4 border-green pl-4">That pain is exactly why I built Funnel Studio™. And it's exactly why this masterclass is going to change your life.</p>
                <p>Watch the short video above to see exactly how we are going to bypass the tech, skip the prompt engineering, and get your life back. Then, complete the mandatory steps below.</p>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Steps */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10">Your 3-Step Escape Plan Starts Now:</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { num: 1, title: 'Whitelist Our Email', desc: 'Go to your inbox right now. Find the email from forrestry.ai and drag it to your Primary folder. This email contains your private access link.' },
              { num: 2, title: 'Print The Workbook', desc: 'Download the bonus workbook below, print it out, and bring a physical pen. We are going to map out your transition from Builder to Launcher in real-time.' },
              { num: 3, title: 'Show Up 10 Mins Early', desc: 'Our webinar rooms fill up. If you are sick and tired of the lack of bandwidth in your own business, don\'t let bandwidth lock you out of the solution. Arrive early to secure your seat.' },
            ].map((step) => (
              <div key={step.num} className="bg-card-bg p-8 rounded-xl border border-card-border relative pt-12">
                <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-green text-black rounded-full flex items-center justify-center text-xl font-bold">
                  {step.num}
                </div>
                <h4 className="text-xl font-bold text-white mb-3 text-center">{step.title}</h4>
                <p className="text-muted text-center text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Calendar + Community Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {/* Calendar */}
          <div className="bg-green/5 p-8 rounded-2xl border border-green/20">
            <div className="flex items-center mb-4">
              <span className="text-green text-2xl mr-3">📅</span>
              <h3 className="text-2xl font-bold text-white">Block Out Your Calendar</h3>
            </div>
            <p className="text-white/70 mb-2 leading-relaxed">Protect this time like your business depends on it, because it does.</p>
            <p className="text-green font-semibold mb-6">Tuesday, April 21 at 3:00 PM EST</p>
            <div className="flex flex-wrap gap-3">
              <a
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Funnel+Studio+Masterclass&dates=20260421T200000Z/20260421T213000Z&details=Your+free+Funnel+Studio+masterclass.+Show+up+10+minutes+early+to+secure+your+seat.&location=Online"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-card-bg text-green font-semibold py-2 px-4 rounded border border-green/20 hover:bg-green/10 transition text-sm no-underline"
              >
                📅 Google Calendar
              </a>
              <a
                href="/masterclass-event.ics"
                download
                className="bg-card-bg text-green font-semibold py-2 px-4 rounded border border-green/20 hover:bg-green/10 transition text-sm no-underline"
              >
                🍏 Apple Calendar
              </a>
              <a
                href="/masterclass-event.ics"
                download
                className="bg-card-bg text-green font-semibold py-2 px-4 rounded border border-green/20 hover:bg-green/10 transition text-sm no-underline"
              >
                ✉️ Outlook
              </a>
            </div>
          </div>

          {/* Community */}
          <div className="bg-card-bg text-white p-8 rounded-2xl border border-card-border">
            <h3 className="text-2xl font-bold mb-3 text-green-bright">Join the Funnel Studio Forresters</h3>
            <p className="text-muted mb-6 leading-relaxed">Building funnels in isolation is a recipe for burnout. You are not alone. Join our private community of founders who are actively using Funnel Studio™ to launch faster, share wins, and help each other grow.</p>
            {/* TODO: Replace # with Skool community URL */}
            <a href="#" className="inline-block bg-green hover:bg-green/90 text-black font-bold py-3 px-6 rounded-lg transition no-underline">
              Join the Forresters Community →
            </a>
          </div>
        </div>

        {/* Bonus Download */}
        <div className="max-w-xl mx-auto mb-16">
          <div className="bg-card-bg p-8 rounded-xl border-t-4 border-green flex items-start">
            <div className="bg-green/10 p-3 rounded-full mr-5 shrink-0">
              <span className="text-green text-2xl">📄</span>
            </div>
            <div>
              <h4 className="text-xl font-bold text-white mb-2">Free Bonus: Core Offer Checklist</h4>
              <p className="text-muted text-sm mb-4 leading-relaxed">Download the <strong className="text-white">Core Offer Checklist</strong> to clarify your offer foundations before the masterclass. Work through each section so you show up ready to build, not guessing.</p>
              {/* TODO: Replace with hosted PDF download link */}
              <button className="bg-green hover:bg-green/90 text-black font-bold py-2 px-4 rounded transition cursor-pointer">
                Download the Checklist
              </button>
            </div>
          </div>
        </div>

        {/* Pain vs Relief Grid */}
        <div className="bg-[#0D0D0F] rounded-2xl border border-card-border p-8 md:p-12 mb-16">
          <h3 className="text-3xl font-extrabold text-center mb-10">
            What To Expect:{' '}
            <br />
            <span className="text-green text-2xl font-semibold">How We Are Permanently Eliminating Your Bottlenecks</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { type: 'pain', text: 'Staring at a blank screen for hours, paralyzed by the overwhelming scope of building a funnel from scratch.' },
              { type: 'relief', label: 'The \'Brain Dump\' Protocol.', text: 'Watch as we bypass the 80-hour grind by letting you simply "brain dump" your raw ideas, while Funnel Studio™ instantly architects the structure.' },
              { type: 'pain', text: 'The crushing imposter syndrome of needing to be a "tech wizard" or learning complex prompt engineering just to get copy that doesn\'t sound like a robot.' },
              { type: 'relief', label: 'The Anti-Prompt Method.', text: 'Discover how to completely eliminate the need for tech skills. We\'ll show you how to generate high-converting assets without writing a single line of code or complex prompt.' },
              { type: 'pain', text: 'Finally launching your funnel after weeks of exhausting work, only to hear crickets because you lack the bandwidth to solve traffic and follow-up issues.' },
              { type: 'relief', label: 'The 10% Launch Ecosystem.', text: 'We will reveal how to automate the heavy lifting of traffic and follow-up, so you can focus on the 10% of tasks that actually generate revenue.' },
            ].map((item, i) => (
              <div key={i} className={`flex items-start p-4 rounded-lg border ${item.type === 'pain' ? 'bg-bg border-card-border' : 'bg-green/5 border-green/20'}`}>
                <span className={`mr-4 mt-1 shrink-0 ${item.type === 'pain' ? 'text-red-400' : 'text-green'}`}>
                  {item.type === 'pain' ? '✗' : '✓'}
                </span>
                <div>
                  <p className={`text-sm font-bold mb-1 ${item.type === 'pain' ? 'text-white/60' : 'text-green'}`}>
                    {item.type === 'pain' ? 'THE PAIN:' : 'THE RELIEF:'}
                  </p>
                  <p className={`text-sm ${item.type === 'pain' ? 'text-muted' : 'text-white/80'}`}>
                    {item.type === 'relief' && <strong>{item.label} </strong>}
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Strategy Session Soft Pitch */}
        <div className="bg-gradient-to-br from-[#0A1A0F] to-[#0F0A1A] rounded-2xl border-2 border-green/30 p-8 md:p-12 mb-16 text-center">
          <span className="bg-green text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4 inline-block">
            Accelerated Pain Relief
          </span>
          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Can't Afford To Wait Another Minute In The "Grind"?
          </h3>
          <p className="text-lg text-white/70 mb-6 leading-relaxed max-w-3xl mx-auto">
            If your business is currently bleeding cash because your funnels aren't launching fast enough... If the bandwidth issues of traffic and follow-up are keeping you awake at night... <strong className="text-white">you don't have to wait for the masterclass.</strong>
          </p>
          <p className="text-lg text-white/70 mb-8 leading-relaxed max-w-3xl mx-auto">
            Skip the line. Book a private, 1-on-1 <strong className="text-white">Funnel Escape Strategy Session</strong> with our team right now. We will look under the hood of your current setup, identify exactly where the tech is choking your growth, and map out your custom transition plan.
          </p>
          <Link
            to="/masterclass/strategy"
            className="inline-block bg-green hover:bg-green/90 text-black font-extrabold text-lg py-4 px-10 rounded-full transition no-underline"
          >
            Yes! Map Out My Escape Route Now →
          </Link>
          <p className="mt-4 text-sm text-muted">*Extremely limited bandwidth. Only 5 strategy sessions available per week.</p>
        </div>

        {/* FAQ */}
        <div className="max-w-4xl mx-auto mb-12">
          <h3 className="text-2xl font-bold text-center mb-8">Frequently Asked Questions</h3>
          <div className="space-y-4">
            {[
              { q: 'Will this work if I am absolutely terrible at tech?', a: 'Yes. In fact, it was built specifically for you. The entire premise of the "Anti-Prompt Method" is to eliminate the imposter syndrome that comes from not knowing how to code or talk to AI. If you can type a basic idea into a box, you can launch a funnel.' },
              { q: 'I\'ve tried standard AI tools before and my "heart hit the floor" when they failed. How is this different?', a: 'Standard AI platforms are generalists. They try to write poetry, code, and recipes. Funnel Studio™ is highly specialized. It doesn\'t rely on you knowing the perfect "prompt." It uses the Brain Dump Protocol to extract your expertise and format it specifically for high-conversion funnels.' },
              { q: 'What if I don\'t have the bandwidth to run traffic after it\'s built?', a: 'A beautiful funnel with no traffic is just a digital paperweight. That\'s why we don\'t just teach you how to build; we teach you how to launch. The 10% Launch Ecosystem specifically addresses the follow-up and traffic bandwidth issues.' },
              { q: 'I didn\'t get my confirmation email. What do I do?', a: 'First, check your spam or promotions folder. If it\'s there, drag it to your main inbox. If you still can\'t find it, reach out to support@forrestry.ai and we will manually ensure you get your access link.' },
            ].map((faq, i) => (
              <div key={i} className="bg-card-bg p-6 rounded-lg border border-card-border">
                <h4 className="font-bold text-white mb-2">{faq.q}</h4>
                <p className="text-muted text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

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
