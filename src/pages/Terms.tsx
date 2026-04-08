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

export default function Terms() {
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
        <div className="max-w-[700px] mx-auto">
          <FadeUp>
            <h1 className="text-3xl font-bold mb-2">Terms of Service</h1>
            <p className="text-muted text-sm mb-12">Last updated: April 8, 2026</p>
          </FadeUp>

          <FadeUp delay={0.1}>
            <div className="space-y-8 text-muted leading-relaxed">
              <div>
                <h2 className="text-lg font-semibold text-white mb-3">1. Acceptance of Terms</h2>
                <p>
                  By accessing or using Forrestry.ai and Funnel Studio™, you agree to be
                  bound by these Terms of Service. If you do not agree, do not use the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">2. Service Description</h2>
                <p>
                  Funnel Studio™ is an AI-powered content generation tool that creates
                  marketing funnel assets including landing page copy, webinar scripts,
                  email sequences, and ad copy. The service is provided on a subscription basis.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">3. Subscription & Billing</h2>
                <p>
                  Subscriptions are billed monthly through Stripe. Founding member pricing
                  ($49/mo) is locked for 2 years from the date of initial subscription.
                  After the 2-year lock period, pricing may be adjusted with 30 days notice.
                  You may cancel your subscription at any time.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">4. 30-Day Guarantee</h2>
                <p>
                  If you are not live with a funnel within 30 days of subscribing, you may
                  request a full refund. Contact support@forrestry.ai within the 30-day
                  window to initiate a refund.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">5. Your Content</h2>
                <p>
                  You retain full ownership of all content generated using Funnel Studio™.
                  You grant Forrestry.ai no rights to your generated content beyond what
                  is necessary to provide the service.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">6. Acceptable Use</h2>
                <p>
                  You agree not to use the service to generate content that is illegal,
                  harmful, deceptive, or infringes on the rights of others. We reserve
                  the right to suspend accounts that violate this policy.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">7. Limitation of Liability</h2>
                <p>
                  Forrestry.ai provides the service "as is" without warranties of any kind.
                  We are not liable for any indirect, incidental, or consequential damages
                  arising from your use of the service. Our total liability is limited to
                  the amount you paid in the 12 months preceding the claim.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">8. Changes to Terms</h2>
                <p>
                  We may update these terms from time to time. We will notify you of
                  material changes via email. Continued use of the service after changes
                  constitutes acceptance.
                </p>
              </div>

              <div>
                <h2 className="text-lg font-semibold text-white mb-3">9. Contact</h2>
                <p>
                  Questions about these terms? Contact us at{' '}
                  <a href="mailto:support@forrestry.ai" className="text-green hover:underline">
                    support@forrestry.ai
                  </a>.
                </p>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
      <Footer links={footerLinks} tagline="Your funnel. Finally finished." />
    </>
  )
}
