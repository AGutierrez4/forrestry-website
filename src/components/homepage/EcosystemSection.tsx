import FadeUp from '../FadeUp'
import { FUNNEL_STUDIO_URL } from './constants'
import { Zap, MessageCircle, Globe } from 'lucide-react'

export default function EcosystemSection() {
  return (
    <section id="ecosystem" className="py-24 px-6 bg-white">
      <div className="max-w-[1100px] mx-auto">
        <FadeUp>
          <div className="text-center mb-16">
            <h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-text-dark mb-4">
              One Connected Ecosystem. Three Engines for Growth.
            </h2>
            <p className="text-text-body text-lg max-w-[600px] mx-auto leading-relaxed">
              Each product in the Forrestry ecosystem solves a different stage of your growth journey.
            </p>
          </div>
        </FadeUp>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Funnel Studio — Live */}
          <FadeUp delay={0}>
            <div className="relative bg-white border-2 border-green/30 rounded-2xl p-8 shadow-lg h-full flex flex-col">
              <div className="absolute -top-3 left-6 bg-green text-black text-xs font-bold px-3 py-1 rounded-full">
                LIVE
              </div>
              <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center mb-5">
                <Zap size={22} className="text-green" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-green mb-2">
                THE CONVERSION ENGINE
              </span>
              <h3 className="text-text-dark font-bold text-xl mb-3">Funnel Studio</h3>
              <p className="text-text-body text-sm leading-relaxed mb-6 flex-1">
                Build your Strategic Blueprint and launch a high-converting 4-page funnel stack
                in days, not months.
              </p>
              <a
                href={FUNNEL_STUDIO_URL}
                className="inline-block w-full text-center px-6 py-3 rounded-full bg-green text-black font-semibold text-sm no-underline hover:bg-green/90 transition-all"
              >
                Access Funnel Studio Now
              </a>
            </div>
          </FadeUp>

          {/* Answer Your Audience — Coming Soon */}
          <FadeUp delay={0.1}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full flex flex-col opacity-75">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                <MessageCircle size={22} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">
                COMING SOON
              </span>
              <h3 className="text-text-dark font-bold text-xl mb-3">Answer Your Audience</h3>
              <p className="text-text-body text-sm leading-relaxed flex-1">
                Stop guessing what your customers want. Use AI-driven research to generate
                high-quality, authority-building content at scale.
              </p>
            </div>
          </FadeUp>

          {/* BrandStory — Coming Soon */}
          <FadeUp delay={0.2}>
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-8 h-full flex flex-col opacity-75">
              <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center mb-5">
                <Globe size={22} className="text-gray-400" />
              </div>
              <span className="text-xs font-bold tracking-wider uppercase text-gray-400 mb-2">
                COMING SOON
              </span>
              <h3 className="text-text-dark font-bold text-xl mb-3">BrandStory</h3>
              <p className="text-text-body text-sm leading-relaxed flex-1">
                Your professional home. A website builder designed to anchor your brand identity
                and give your audience confidence as you scale.
              </p>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  )
}
