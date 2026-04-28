import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const HUBSPOT_PORTAL_ID = '51365645'
const HUBSPOT_FORM_GUID = '752b6fa9-b4e8-4db3-9e00-29d75ab6ca98'

export default function MasterclassRegister() {
  const navigate = useNavigate()
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

    navigate('/masterclass/vip')
  }

  return (
    <div className="bg-white text-gray-900 min-h-screen" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
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

          <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-4xl mx-auto mb-10 leading-relaxed">
            Stop letting tech overwhelm and follow-up paralysis hold your business hostage. Discover the weird{' '}
            <span className="font-bold text-green-700">"Brain Dump" protocol</span>{' '}
            that bypasses the pain of building and launches high-converting campaigns while you sleep.
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
            Here Is Just A Fraction Of The Pain We're Going To Eliminate On This Free Masterclass...
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ul className="space-y-6">
              {[
                { icon: '❌', color: 'text-red-400', label: 'The Agonizing 80-Hour Trap:', text: 'Why spending weeks "tweaking" your funnel design is actually killing your conversions (and the exact "Brain Dump" protocol that builds it for you instantly).' },
                { icon: '🔥', color: 'text-green-400', label: 'The "Imposter Syndrome" Cure:', text: 'Sick of feeling like a fraud because you don\'t know code? Discover how to permanently bypass tech headaches without hiring expensive developers.' },
                { icon: '❌', color: 'text-red-400', label: 'The "Heart Hit The Floor" Moment:', text: 'Why standard AI tools (like ChatGPT) spit out robotic garbage that ruins your brand, and the "Anti-Prompt" secret that fixes it forever.' },
                { icon: '🔥', color: 'text-green-400', label: 'The Bandwidth Nightmare:', text: 'Drowning in the anxiety of traffic generation and follow-up emails? See how the \'10% Launch Ecosystem\' handles the heavy lifting so you can finally breathe.' },
                { icon: '❌', color: 'text-red-400', label: 'The Prompt-Engineering Lie:', text: 'Why trying to learn "AI Prompts" is just another exhausting full-time job you didn\'t ask for (and what to do instead).' },
                { icon: '🔥', color: 'text-green-400', label: 'The Builder vs. Launcher Shift:', text: 'How to instantly shed the exhausting identity of a \'Funnel Builder\' and step into the highly-leveraged, low-stress role of a \'Funnel Launcher\'.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <span className="mr-4 text-2xl shrink-0">{item.icon}</span>
                  <p className="text-lg text-white/80"><span className={`font-bold ${item.color}`}>{item.label}</span> {item.text}</p>
                </li>
              ))}
            </ul>
            <ul className="space-y-6">
              {[
                { icon: '❌', color: 'text-red-400', label: 'The Blank Screen Paralysis:', text: 'Staring at a blinking cursor feeling the dread of writing copy? I\'ll show you how to pull high-converting copy directly from your brain without typing.' },
                { icon: '🔥', color: 'text-green-400', label: 'The Follow-Up Failure:', text: 'Losing sleep because you know you\'re leaving money on the table without an email sequence? Discover the automated ecosystem that ends this guilt.' },
                { icon: '❌', color: 'text-red-400', label: 'The "Frankenstein" Tech Stack:', text: 'The sheer pain of duct-taping 5 different softwares together just to make one page work (and the single platform that burns this old model to the ground).' },
                { icon: '🔥', color: 'text-green-400', label: 'The Weekend Thief:', text: 'How to reclaim your Saturdays and Sundays from the jaws of funnel building, while actually launching MORE campaigns than ever before.' },
                { icon: '❌', color: 'text-red-400', label: 'The "Traffic Is Too Hard" Myth:', text: 'Why your lack of bandwidth is suffocating your traffic, and the weird 10% rule that floods your funnel with ideal prospects.' },
                { icon: '🔥', color: 'text-green-400', label: 'Plus much, much more!', text: 'We are going to dive deep into the exact frameworks that are rescuing entrepreneurs from burnout every single day.' },
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

      {/* WHO THIS IS FOR */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-10 text-gray-900">
            Is The Pain Of Funnel Building Holding You Back?{' '}
            <br />
            <span className="text-green-600">This Masterclass Is For You If...</span>
          </h2>
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <ul className="space-y-5">
              {[
                'You are sick and tired of the 80-hour grind it takes to get a single, simple funnel live.',
                'You suffer from "Imposter Syndrome" because you lack the technical coding or design skills to make your vision a reality.',
                'You\'ve felt that awful "heart hit the floor" moment when you tried to use standard AI, only to realize it created more work than it saved.',
                'You have zero bandwidth left to figure out traffic and follow-up sequences because building the funnel itself drained all your energy.',
                'You desperately want to step out of the exhausting "Funnel Builder" role and step into the CEO "Funnel Launcher" lifestyle.',
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
                <span className="text-gray-400 font-bold text-sm">[Founder Image]</span>
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-6">
                I Know Your Pain, Because{' '}
                <span className="text-green-600">It Almost Broke Me.</span>
              </h2>
              <div className="text-lg text-gray-600 space-y-4 leading-relaxed">
                <p>Hi, I'm the creator of Funnel Studio™ by forrestry.ai.</p>
                <p>Before I ever touched a funnel, I spent years in the trucking industry. It was grueling, back-breaking physical labor. When I finally decided to transition into the digital world, I thought I was leaving the "grind" behind.</p>
                <p><strong className="text-gray-900">I was dead wrong.</strong></p>
                <p>I traded physical exhaustion for a mental prison. I suddenly found myself trapped in the <span className="bg-green-50 px-1 rounded text-green-700 font-semibold">80-hour funnel grind</span>.</p>
                <p>Then came the day that almost made me quit. I discovered standard AI tools. When the AI finally spit out the result... <strong className="text-gray-900">my heart hit the floor.</strong> It was robotic. Disjointed. Absolute garbage.</p>
                <p>Out of sheer desperation, I built exactly what I needed. And on this masterclass, I'm going to show you exactly how it works.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12 text-gray-900">
            Entrepreneurs Just Like You Are Escaping The Grind...
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: '"I used to literally cry over my keyboard trying to get my funnels to look right. Learning how to shift to a \'Launcher\' completely removed the tech anxiety. I got my weekends back!"', name: '[Name Placeholder]', role: 'Former "Funnel Builder"' },
              { quote: '"That \'heart hit the floor\' moment with ChatGPT? I felt that in my soul. The Anti-Prompt method revealed here is the only thing that actually made sense and saved my sanity."', name: '[Name Placeholder]', role: 'Course Creator' },
              { quote: '"I never had the bandwidth for follow-up emails because the funnel itself took 80 hours. The 10% Launch Ecosystem completely flipped the script for me."', name: '[Name Placeholder]', role: 'Digital Agency Owner' },
            ].map((t, i) => (
              <div key={i} className="bg-white p-8 rounded-xl border border-gray-200 shadow-md">
                <div className="text-yellow-400 text-2xl mb-4">★★★★★</div>
                <p className="text-gray-600 italic mb-6 leading-relaxed">{t.quote}</p>
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
        </div>
      </section>

      {/* 3 SECRETS */}
      <section className="py-20 bg-green-600 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-black text-center mb-12">
            We're Going Deep. Here Are The 3 Core "Pain-Killers" I'm Revealing On This Masterclass:
          </h2>
          <div className="bg-green-700 p-8 md:p-12 rounded-2xl shadow-2xl">
            <div className="space-y-10">
              {[
                { title: 'SECRET #1: The "Brain Dump" Protocol', bullets: ['How to completely bypass the agonizing 80-hour funnel grind using a weird process that extracts your vision without a single line of code.', 'Why traditional "funnel mapping" is causing your burnout, and the 5-minute brain dump that replaces it.', 'The secret to taking your raw, messy ideas and having them structurally organized for you.'] },
                { title: 'SECRET #2: The Anti-Prompt Method', bullets: ['How to permanently cure your Imposter Syndrome and never feel unqualified to build a high-converting page again.', 'The exact reason why learning "Prompt Engineering" for standard AI is a massive waste of your time.', 'How to avoid the visceral "heart hit the floor" moment of receiving robotic AI copy.'] },
                { title: 'SECRET #3: The 10% Launch Ecosystem', bullets: ['How to solve the terrifying "lack of bandwidth" issue that prevents you from getting traffic and sending follow-up emails.', 'The automated ecosystem that handles the post-launch anxiety.', 'How to officially kill the "Funnel Builder" identity and step into the highly profitable reality of a "Funnel Launcher."'] },
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
              { q: 'Q: I am completely exhausted by tech. Will this still work for me?', a: 'Absolutely. This was built specifically for people who feel physical dread when they have to log into a page builder. The entire goal of the "Brain Dump" protocol is to remove the tech barrier so your imposter syndrome vanishes and you can just focus on launching.' },
              { q: 'Q: I\'ve tried standard AI (like ChatGPT) and it was terrible. How is this different?', a: 'I know exactly how you feel. That "heart hit the floor" moment when you realize the AI just spit out robotic, unusable garbage is awful. On this masterclass, I\'m going to show you the "Anti-Prompt Method." It bypasses the need for you to be an AI whisperer, completely eliminating the frustration of standard AI.' },
              { q: 'Q: I don\'t have the bandwidth for traffic or follow-ups. Will this just add to my plate?', a: 'No! The reason you don\'t have bandwidth right now is because the 80-hour funnel grind is stealing all your energy. By shifting your identity to a "Funnel Launcher" and utilizing the 10% Launch Ecosystem, we solve the bandwidth issue.' },
              { q: 'Q: Is this masterclass actually free?', a: 'Yes, 100% free. You don\'t need a credit card to register. Just bring a notepad and an open mind.' },
              { q: 'Q: How long is the training?', a: 'We pack a massive amount of strategy into about 60-90 minutes. We cut the fluff and get straight into the "Brain Dump" protocol, the "Anti-Prompt" method, and the Launch Ecosystem.' },
              { q: 'Q: Will a replay be available?', a: 'Replays are not guaranteed. You need to show up live to ensure you don\'t miss out.' },
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
            <h3 className="text-2xl font-bold mb-4">My "End The Grind" Promise To You</h3>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg leading-relaxed">
              Your only investment today is your time. I promise that if you show up to this free masterclass, you will walk away with a completely new understanding of how to bypass the 80-hour funnel trap.
            </p>
          </div>

          <h2 className="text-3xl md:text-5xl font-black mb-8 leading-tight">
            Don't Spend Another 80 Hours Trapped In The Funnel Grind.{' '}
            <br />
            <span className="text-green-400">Your Escape Route Is Waiting.</span>
          </h2>

          <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700 max-w-md mx-auto shadow-2xl">
            <p className="text-xl font-bold text-green-400 mb-6">
              ⚠️ WARNING: Spots Are Strictly Limited!
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
