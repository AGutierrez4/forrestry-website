import Navbar from '../components/Navbar'
import FadeUp from '../components/FadeUp'
import Footer from '../components/Footer'

const navLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
]

const footerLinks = [
  { label: 'Product', href: '/#studio' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
]

export default function About() {
  return (
    <>
      <Navbar
        links={navLinks}
        ctaText="Claim Founders Spot"
        ctaHref="/pricing#pricing"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <FadeUp>
            <p className="text-green text-sm font-semibold tracking-wide uppercase mb-4 text-center">
              About forrestry.ai
            </p>
            <h1 className="text-[clamp(2rem,5vw,3.5rem)] font-extrabold text-center leading-[1.1] mb-6">
              Built by a founder who refused to quit.
            </h1>
            <p className="text-muted text-lg text-center max-w-[600px] mx-auto mb-16 leading-relaxed">
              forrestry.ai exists because the tools that were supposed to make launching
              easy never actually did.
            </p>
          </FadeUp>

          {/* Founder photo + story */}
          <FadeUp delay={0.1}>
            <div className="flex flex-col items-center mb-16">
              <img
                src="/founder.webp"
                alt="Andrew Gutierrez, Founder of forrestry.ai"
                className="w-40 h-40 rounded-full object-cover border-2 border-green/30 mb-6"
              />
              <h2 className="text-xl font-bold text-white mb-1">Andrew Gutierrez</h2>
              <p className="text-green text-sm font-medium mb-8">Founder, forrestry.ai</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.15}>
            <div className="space-y-6 text-muted text-lg leading-relaxed">
              <p>
                I found the funnel world in 2019 and the learning curve stopped me cold.
                The copy, the design, the tech, the strategy. All of it, at once. I walked
                away and spent the next several years earning my stripes in marketing with
                global brands, local businesses, and everyone in between.
              </p>
              <p>
                When I came back in 2025, ready to launch my own offer, I sat down with
                the best AI tools available and felt my heart sink. The output was thin.
                Generic. And I was still staring down 80 hours of real work.
              </p>
              <p>
                So I stopped building my funnel and started building the tool that should
                have existed already.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2}>
            <div className="mt-12 space-y-6">
              <h3 className="text-2xl font-bold text-white">The mission</h3>
              <p className="text-muted text-lg leading-relaxed">
                forrestry.ai is an ecosystem of AI-powered launch tools for entrepreneurs
                who are done waiting. Funnel Studio™ is the first product — it turns a
                single 15-minute Brain Dump™ conversation into a complete launch stack:
                squeeze pages, webinar scripts, email sequences, ad copy, and promo scripts.
                Built in order, from your story, so nothing gets missed.
              </p>
              <p className="text-muted text-lg leading-relaxed">
                This is not a magic button. It takes real work from you. But the 80 hours
                of writing, designing, and second-guessing? That part is over.
              </p>
            </div>
          </FadeUp>

          <FadeUp delay={0.25}>
            <div className="mt-16 text-center">
              <a
                href="/pricing#pricing"
                className="inline-block px-10 py-4 rounded-xl bg-green text-black font-bold text-lg no-underline shadow-[0_0_40px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_60px_rgba(74,222,128,0.4)] transition-all"
              >
                Claim Your Founders Spot — $79/mo
              </a>
            </div>
          </FadeUp>
        </div>
      </div>
      <Footer links={footerLinks} tagline="Your funnel. Finally finished." />
    </>
  )
}
