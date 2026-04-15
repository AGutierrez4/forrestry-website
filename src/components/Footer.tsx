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
    <footer className="bg-[#050505] border-t border-[#1F1F1F] py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <img
              src="/logo.webp"
              alt="forrestry.ai"
              width={36}
              height={36}
              className="w-9 h-9 rounded-full object-cover"
            />
            <span className="text-green font-bold text-lg">forrestry.ai</span>
          </div>
          {tagline && (
            <p className="text-muted text-sm">{tagline}</p>
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
        <p className="text-muted text-sm">© 2026 forrestry.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
