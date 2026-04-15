import Navbar from '../components/Navbar'
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

export default function Privacy() {
  return (
    <>
      <Navbar
        links={navLinks}
        ctaText="Claim Founders Spot"
        ctaHref="https://buy.stripe.com/8x24gAb9p0fF2nOce2frW00"
        signInHref="https://app.funnelstudio.forrestry.ai"
        logoHref="/"
      />
      <div className="pt-32 pb-24 px-6">
        <div className="max-w-[700px] mx-auto">
          <h1 className="text-3xl font-bold mb-2">Privacy Policy</h1>
          <p className="text-muted text-sm mb-12">Last updated: April 8, 2026</p>

          <div className="space-y-8 text-muted leading-relaxed">
            <div>
              <h2 className="text-lg font-semibold text-white mb-3">1. Information We Collect</h2>
              <p>
                When you use forrestry.ai, we collect information you provide directly:
                your name, email address, and payment information when you subscribe.
                We also collect usage data such as pages visited, features used, and
                session duration to improve the product.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">2. How We Use Your Information</h2>
              <p>
                We use your information to provide and improve Funnel Studio™, process
                payments, send account-related communications, and provide customer
                support. We do not sell your personal information to third parties.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">3. Data Storage & Security</h2>
              <p>
                Your data is stored securely using industry-standard encryption. Payment
                processing is handled by Stripe, which is PCI-DSS compliant. We do not
                store your credit card information on our servers.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">4. Your Content</h2>
              <p>
                Content you create using Funnel Studio™ (funnel copy, scripts, emails)
                belongs to you. We do not use your generated content to train AI models
                or share it with other users.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">5. Cookies</h2>
              <p>
                We use essential cookies to keep you logged in and analytics cookies to
                understand how the site is used. You can disable non-essential cookies
                in your browser settings.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">6. Third-Party Services</h2>
              <p>
                We use Stripe for payments, Vercel for hosting, and Supabase for data
                storage. Each of these services has their own privacy policies and
                security practices.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-white mb-3">7. Contact</h2>
              <p>
                If you have questions about this privacy policy, contact us at{' '}
                <a href="mailto:support@forrestry.ai" className="text-green hover:underline">
                  support@forrestry.ai
                </a>.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer links={footerLinks} tagline="Your funnel. Finally finished." />
    </>
  )
}
