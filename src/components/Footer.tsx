export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-white/[0.06] py-12 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <img
            src="/logo.png"
            alt="Forrestry.ai"
            className="w-9 h-9 rounded-full object-cover"
          />
          <span className="text-green font-bold text-lg">forrestry.ai</span>
        </div>
        <div className="flex items-center gap-8">
          <a href="#" className="text-muted no-underline text-sm hover:text-green transition-colors">
            Privacy
          </a>
          <a href="#" className="text-muted no-underline text-sm hover:text-green transition-colors">
            Terms
          </a>
          <a href="#" className="text-muted no-underline text-sm hover:text-green transition-colors">
            Contact
          </a>
        </div>
        <p className="text-muted text-sm">© 2026 Forrestry.ai. All rights reserved.</p>
      </div>
    </footer>
  )
}
