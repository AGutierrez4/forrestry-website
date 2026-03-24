interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  links?: FooterLink[]
  tagline?: string
}

const defaultLinks: FooterLink[] = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Contact', href: '#' },
]

export default function Footer({
  links = defaultLinks,
  tagline,
}: FooterProps) {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start gap-1">
          <div className="flex items-center gap-2">
            <img
              src="/logo.png"
              alt="Forrestry.ai"
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
        <p className="text-muted text-sm">© 2025 Forrestry.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
