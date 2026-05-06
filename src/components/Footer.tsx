interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  links?: FooterLink[]
  tagline?: string
}

const defaultLinks: FooterLink[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
  { label: 'Contact', href: 'mailto:support@forrestry.ai' },
]

export default function Footer({
  links = defaultLinks,
  tagline,
}: FooterProps) {
  return (
    <footer className="bg-[#050505] border-t border-[rgba(255,255,255,0.08)] py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center">
            <img
              src="/logo.png"
              alt="forrestry.ai"
              height={32}
              className="h-8 w-auto object-contain"
            />
          </div>
          {tagline && (
            <p className="text-[14px] font-medium text-green max-w-[320px] text-center md:text-left">{tagline}</p>
          )}
        </div>
        <div className="flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-muted no-underline text-sm hover:text-green transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex flex-col items-center md:items-end gap-1">
          <p className="text-muted text-sm">© 2026 forrestry.ai. All rights reserved.</p>
          <p className="text-muted/60 text-xs text-center md:text-right max-w-[360px]">
            Funnel Studio™, Brain Dump™, and the forrestry.ai name, logo, and product
            methodology are proprietary to forrestry.ai. Unauthorized use is prohibited.
          </p>
        </div>
      </div>
    </footer>
  )
}
