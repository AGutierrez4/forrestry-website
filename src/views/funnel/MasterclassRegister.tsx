
import { useState } from 'react'

const HUBSPOT_PORTAL_ID = '51365645'
const HUBSPOT_FORM_GUID = '752b6fa9-b4e8-4db3-9e00-29d75ab6ca98'

export default function MasterclassRegister() {
  
  const [submitting, setSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSubmitting(true)

    const form = e.currentTarget
    const firstName = (form.elements.namedItem('firstName') as HTMLInputElement).value
    const email = (form.elements.namedItem('email') as HTMLInputElement).value

    try {
      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HUBSPOT_PORTAL_ID}/${HUBSPOT_FORM_GUID}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields: [
              { name: 'firstname', value: firstName },
              { name: 'email', value: email },
            ],
            context: {
              pageUri: window.location.href,
              pageName: 'Masterclass Registration',
            },
          }),
        }
      )
    } catch {
      // Still redirect even if HubSpot call fails
    }

    window.location.href = '/masterclass/vip'
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      {/* Top Bar */}
      <div className="bg-gray-900 text-white text-center py-3 border-b-4 border-green-600">
        <p className="text-sm md:text-base font-semibold tracking-wide uppercase">
          Funnel Studio™ by forrestry.ai presents <span className="text-green-400 font-bold">'One Funnel Today'</span> Masterclass
        </p>
      </div>

      {/* HERO */}
      <section className="pt-16 pb-12 bg-gray-50 border-b-4 border-green-600">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-green-50 border border-green-200 text-green-800 px-6 py-2 rounded-full text-sm font-bold tracking-wide uppercase mb-6">
            ⚠️ Exhausted from the 80-Hour Funnel Grind? Read This Immediately...
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6 text-gray-900">
            How To Escape The Soul-Crushing "80-Hour Funnel Grind" And Become A High-Paid{' '}
            <span className="text-green-600 underline decoration-4 underline-offset-8">Funnel Launcher</span>...
          </h1>

          <h2 className="text-2xl md:text-3xl font-extrabold text-gray-700 mb-8 leading-snug">
            Without Writing A Single Line Of Code, Battling "Imposter Syndrome", Or Spending Another Sleepless Weekend Fighting With Standard AI!
          </h2>

          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-4xl mx-auto mb-6 leading-relaxed">
            Russell teaches you the game. <span className="font-bold text-green-700">We play it for you.</span>{' '}
            Discover the{' '}
            <span className="font-bold text-green-700">"Brain Dump" protocol</span>{' '}
            that turns a single conversation into a complete funnel ecosystem: webinar, pages, emails, ads, and video scripts. All cohesive, all in your voice.
          </p>
          <p className="text-sm text-gray-400 font-semibold mb-10">
            🛠️ Proof it works: This entire funnel was built using Funnel Studio in a single weekend.
          </p>

          {/* Video placeholder */}
          <div className="relative max-w-4xl mx-auto mb-10 shadow-xl rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-900 aspect-video flex items-center justify-center">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-green-500 ml-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4l12 6-12 6z" />
                </svg>
              </div>
              <p className="text-xl font-bold text-white">Turn On Your Sound & Click Play!</p>
              <p className="text-gray-400 text-sm mt-2">[Video Placeholder]</p>
            </div>
          </div>

          <a href="#register" className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-black py-5 px-12 rounded-lg shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide w-full md:w-auto no-underline">
            Yes! Save My Seat For The Free Training Now
          </a>
          <p className="text-sm text-gray-400 mt-4 font-semibold">🔒 100% Free Masterclass. No Credit Card Required.</p>
        </div>
      </section>

      {/* WHAT YOU'LL DISCOVER */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            Here's What We're Going To Cover On This Free Masterclass...
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              {[
                { icon: '❌', color: 'text-red-400', label: 'The Endless Build Trap:', text: 'Why spending weeks "tweaking" your funnel design is actually killing your conversions (and the exact "Brain Dump" protocol that builds it for you instantly).' },
                { icon: '🔥', color: 'text-green-400', label: 'The Confidence Killer:', text: 'Feeling unqualified because you don\'t know code or design? Discover how to permanently bypass tech headaches without hiring expensive developers.' },
                { icon: '❌', color: 'text-red-400', label: 'The Generic AI Problem:', text: 'Why standard AI tools (like ChatGPT) produce robotic, off-brand copy, and the "Anti-Prompt" secret that fixes it forever.' },
                { icon: '🔥', color: 'text-green-400', label: 'The Bandwidth Nightmare:', text: 'Drowning in the anxiety of traffic generation and follow-up emails? See how the \'10% Launch Ecosystem\' handles the heavy lifting so you can finally breathe.' },
                { icon: '❌', color: 'text-red-400', label: 'The Prompt-Engineering Lie:', text: 'Why trying to learn "AI Prompts" is just another exhausting full-time job you didn\'t ask for (and what to do instead).' },
                { icon: '🔥', color: 'text-green-400', label: 'The Builder vs. Launcher Shift:', text: 'How to shed the exhausting identity of a \'Funnel Builder\' and step into the highly-leveraged role of a \'Funnel Launcher\'.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 text-2xl shrink-0">{item.icon}</span>
                  <p className="text-lg text-white/80"><span className={`font-bold ${item.color}`}>{item.label}</span> {item.text}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {[
                { icon: '❌', color: 'text-red-400', label: 'The Blank Screen Paralysis:', text: 'Staring at a blinking cursor with no idea what to write? I\'ll show you how to pull high-converting copy directly from your brain, without typing a single prompt.' },
                { icon: '🔥', color: 'text-green-400', label: 'The Follow-Up Failure:', text: 'Losing sleep because you know you\'re leaving money on the table without an email sequence? Discover the automated ecosystem that ends this guilt.' },
                { icon: '❌', color: 'text-red-400', label: 'The "Frankenstein" Funnel:', text: 'The pain of duct-taping 5 different AI tools together and getting copy that sounds like 5 different people wrote it (and the single system that replaces them all).' },
                { icon: '🔥', color: 'text-green-400', label: 'The Weekend Thief:', text: 'How to reclaim your Saturdays and Sundays from the jaws of funnel building, while actually launching MORE campaigns than ever before.' },
                { icon: '❌', color: 'text-red-400', label: 'The "Traffic Is Too Hard" Myth:', text: 'Why your funnel copy (not your ad budget) is the real reason traffic isn\'t converting, and the fix that changes everything.' },
                { icon: '🔥', color: 'text-green-400', label: 'Plus much, much more!', text: 'We\'re going deep into the exact frameworks used by elite funnel builders, adapted so anyone can execute them.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 text-2xl shrink-0">{item.icon}</span>
                  <p className="text-lg text-white/80"><span className={`font-bold ${item.color}`}>{item.label}</span> {item.text}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="text-center mt-16">
            <a href="#register" className="inline-block bg-green-500 hover:bg-green-400 text-gray-900 text-xl md:text-2xl font-black py-5 px-12 rounded-lg shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide w-full md:w-auto no-underline">
              I'm Ready To Stop The Grind. Register Me Now!
            </a>
          </div>
        </div>
      </section>

      {/* WEEKEND LAUNCH VISION + ECOSYSTEM DONE LIST */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-4 text-gray-900">
            Imagine This:{' '}
            <span className="text-green-600">One Weekend. One Conversation. Everything Done.</span>
          </h2>
          <p className="text-xl text-gray-500 text-center max-w-3xl mx-auto mb-12 leading-relaxed">
            It's Saturday morning. Coffee in hand. You open Funnel Studio and start talking. About your offer, your story, your audience. No prompts. No formulas. No copywriting degree required. By Sunday night:
          </p>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            {[
              { label: '60-Minute Perfect Webinar Script', icon: '🎤' },
              { label: '4-Page Funnel Stack (Registration, Upsell, Confirmation, Strategy)', icon: '📄' },
              { label: 'Video Scripts For Every Funnel Page', icon: '🎬' },
              { label: 'Social Ads For Cold, Warm & Hot Audiences', icon: '📣' },
              { label: '12-Email Nurture Sequence (Pre-Show, Day-Of, Post-Show)', icon: '📧' },
              { label: '60-Second TikTok & Instagram Hook Scripts', icon: '📱' },
            ].map((item, i) => (
              <div key={i} className="flex items-center bg-green-50 border border-green-200 rounded-xl p-4">
                <span className="text-2xl mr-4 shrink-0">{item.icon}</span>
                <div>
                  <p className="font-bold text-gray-900">{item.label}</p>
                  <p className="text-green-700 text-sm font-semibold">✓ Done</p>
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            All cohesive. All in your voice. All built from one Strategic Blueprint, not five disconnected AI tools stitched together like a Frankenstein funnel.
          </p>
          <div className="text-center">
            <a href="#register" className="inline-block bg-green-600 hover:bg-green-700 text-white text-xl md:text-2xl font-black py-5 px-12 rounded-lg shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide w-full md:w-auto no-underline">
              Show Me How. Save My Free Seat
            </a>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-gray-900">
            This Masterclass Is For You If...
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-5">
              {[
                'You\'ve attended events like Funnel Hacking Live or the Selling Online challenge and left fired up, but couldn\'t execute what you learned.',
                'You know your offer is good, but the gap between the idea in your head and a live, converting funnel feels enormous.',
                'You\'ve tried using ChatGPT, Claude, or other AI tools for copy and the output sounded generic, robotic, or nothing like you.',
                'You don\'t have the bandwidth to figure out traffic, email sequences, AND funnel pages all at once.',
                'You want to stop being a "Funnel Builder" grinding behind the scenes and start being a "Funnel Launcher" who ships and scales.',
              ].map((item, i) => (
                <li key={i} className="flex items-center text-lg md:text-xl text-gray-700 font-medium">
                  <span className="text-green-600 mr-4 shrink-0 text-2xl">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* AUTHORITY / ORIGIN STORY */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="md:w-1/3">
              <div className="bg-gray-100 aspect-square rounded-full border-4 border-green-200 flex items-center justify-center overflow-hidden shadow-lg">
                <img src="/founder.webp" alt="Andrew, creator of Funnel Studio" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                I Know Your Pain, Because{' '}
                <span className="text-green-600">It Almost Broke Me.</span>
              </h2>
              <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                <p>Hi, I'm Andrew, the creator of Funnel Studio™ by forrestry.ai.</p>
                <p>A few years back, I co-owned a trucking organization. We were successful, but the reality was a 24/7 grind: $25,000 weekly fuel bills and 3 AM phone calls about blown transmissions. When we sold the company, I walked away with a fire in my gut. Marketing wasn't just a pivot, it was my calling.</p>
                <p>That's when I discovered Russell Brunson, ClickFunnels, the whole world. I was <strong className="text-gray-900">all in.</strong></p>
                <p>But within 48 hours of logging into ClickFunnels, I realized two things: I didn't know how to use the tools, and I didn't know how to write copy that converts. I could build the box, but I couldn't fill it with anything that made people want to open it.</p>
                <p>I burned through savings on subscriptions and courses. The imposter syndrome kicked in hard. And eventually, I made one of the hardest decisions of my life: <strong className="text-gray-900">I went back to the workforce for seven years.</strong></p>
                <p>But those seven years weren't wasted. I spent them working with <span className="bg-green-50 px-1 rounded text-green-700 font-semibold">B2B brands that operate on a global scale</span> (aerospace and defense, MedTech and healthcare), plus small businesses, coaches, and consultants. I gained deep expertise in marketing strategy and execution at the highest levels.</p>
                <p>Then in Fall 2025, I came back. I tried the new AI tools. And the output was still generic, robotic, and disconnected. That's when I realized: <strong className="text-gray-900">I don't need another generic AI tool. I need a system trained on the actual proven frameworks.</strong></p>
                <p>So I built Funnel Studio. And on this masterclass, I'm going to show you exactly how it works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TODO: Restore testimonials section when real customer feedback is available.
         Original section: "Entrepreneurs Just Like You Are Escaping The Grind..."
         with 3 testimonial cards (quote, name, role, star rating).
         Replace placeholder names/quotes with real beta user testimonials before driving paid traffic. */}

      {/* 3 SECRETS */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            We're Going Deep. Here Are The 3 Core "Pain-Killers" I'm Revealing On This Masterclass:
          </h2>
          <div className="bg-green-700 p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="space-y-10">
              {[
                { title: 'SECRET #1: The "Brain Dump" Protocol', bullets: ['How to bypass the endless funnel-building grind using a process that extracts your vision through a simple conversation. No code, no design skills.', 'Why traditional "funnel mapping" is causing your burnout, and the 5-minute brain dump that replaces it.', 'The secret to taking your raw, messy ideas and having them structurally organized into a strategic blueprint.'] },
                { title: 'SECRET #2: The Anti-Prompt Method', bullets: ['Why you don\'t need to be a copywriter, a tech expert, or a prompt engineer to produce elite-level funnel content.', 'The exact reason why "prompt engineering" is a trap, and what to do instead.', 'How a system trained on proven frameworks (Brunson, Edwards, Miller, Cardone) produces categorically different output than generic AI.'] },
                { title: 'SECRET #3: The 10% Launch Ecosystem', bullets: ['Why building four funnel pages is just the tip of the iceberg, and what\'s below the waterline is where revenue actually lives.', 'The automated ecosystem that generates your webinar, ads, emails, and video scripts from one blueprint.', 'How to shift your identity from "Funnel Builder" to "Ecosystem Launcher," and why that shift changes everything.'] },
              ].map((secret, i) => (
                <div key={i}>
                  <h3 className="text-2xl font-black mb-4 text-yellow-300">{secret.title}</h3>
                  <ul className="space-y-3 pl-2">
                    {secret.bullets.map((b, j) => (
                      <li key={j} className="flex items-start text-white/90">
                        <span className="mr-2 shrink-0">⚡</span> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12">
            <a href="#register" className="inline-block bg-white text-green-700 text-xl md:text-2xl font-black py-5 px-12 rounded-lg shadow-[0_6px_0_0_#d1d5db] hover:shadow-[0_3px_0_0_#d1d5db] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide w-full md:w-auto no-underline">
              Reserve My Free Spot Now!
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: 'Q: I am completely exhausted by tech. Will this still work for me?', a: 'Absolutely. This was built specifically for people who feel overwhelmed by page builders and tech stacks. The entire goal of the "Brain Dump" protocol is to remove the tech barrier. You just have a conversation, and the system handles the rest.' },
              { q: 'Q: I\'ve tried standard AI (like ChatGPT) and it was terrible. How is this different?', a: 'Generic AI produces generic output because it wasn\'t trained on funnel-specific frameworks. On this masterclass, I\'ll show you the "Anti-Prompt Method," a system trained on the proven methodologies of Brunson, Edwards, Miller, and Cardone that produces categorically different copy without you writing a single prompt.' },
              { q: 'Q: I don\'t have the bandwidth for traffic or follow-ups. Will this just add to my plate?', a: 'The opposite. The reason you don\'t have bandwidth is because building the funnel itself is consuming all your energy. The ecosystem approach generates your ads, emails, and video scripts alongside your funnel pages, so you launch everything at once instead of building piece by piece.' },
              { q: 'Q: Is this masterclass actually free?', a: 'Yes, 100% free. No credit card required. Just bring a notepad and an open mind.' },
              { q: 'Q: How long is the training?', a: 'About 60-90 minutes. We cut the fluff and go straight into the "Brain Dump" protocol, the "Anti-Prompt" method, and the Launch Ecosystem.' },
              { q: 'Q: Will a replay be available?', a: 'Replays are not guaranteed. Show up live to make sure you don\'t miss anything.' },
            ].map((faq, i) => (
              <div key={i} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
                <h4 className="text-xl font-bold text-gray-900 mb-2">{faq.q}</h4>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA / REGISTRATION */}
      <section className="py-20 bg-gray-900 text-white border-t-4 border-green-600" id="register">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-10 flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-green-600/20 flex items-center justify-center mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-4">My Promise To You</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Your only investment today is your time. If you show up to this free masterclass, you will walk away understanding exactly how to go from a raw idea to a complete, launch-ready funnel ecosystem in a single weekend.
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            Stop Building Alone.{' '}
            <br />
            <span className="text-green-400">Start Launching With A System.</span>
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-md mx-auto shadow-2xl">
            <p className="text-xl font-bold text-green-400 mb-6">
              ⚠️ Only 100 Free Seats Available For This Training
            </p>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <input type="text" name="firstName" placeholder="Enter Your First Name" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <input type="email" name="email" placeholder="Enter Your Best Email" className="w-full px-4 py-3 rounded-lg bg-white text-gray-900 font-medium placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500" required />
              <button type="submit" disabled={submitting} className="w-full bg-green-600 hover:bg-green-700 text-white text-xl font-black py-4 px-6 rounded-lg shadow-[0_6px_0_0_#166534] hover:shadow-[0_3px_0_0_#166534] hover:translate-y-[3px] transition-all duration-200 uppercase tracking-wide mt-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Registering...' : 'Register Now'}
              </button>
            </form>
            <p className="text-xs text-gray-500 mt-4">Your information is 100% secure. We hate spam as much as you hate building funnels from scratch.</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 py-8 text-center text-gray-500 text-sm">
        <div className="max-w-5xl mx-auto px-4">
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
