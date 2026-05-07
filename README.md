# Forrestry.ai Marketing Website

Marketing site for Forrestry.ai and Funnel Studio. Built with Astro 5, React 19, and Tailwind CSS 4.

## Quick Start

```bash
npm install
npm run dev      # Local dev server
npm run build    # Production build
npm run preview  # Preview production build
```

## Project Structure

```
src/
├── components/
│   ├── homepage/       # Homepage-specific sections
│   ├── company/        # Pricing page sections
│   └── *.tsx           # Shared components (Navbar, Footer, FadeUp, etc.)
├── pages/              # Astro routes (each file = a URL)
│   ├── index.astro             # Homepage (/)
│   ├── funnel-studio.astro     # Product page (/funnel-studio)
│   ├── pricing.astro           # Pricing (/pricing)
│   ├── about.astro             # About (/about)
│   ├── privacy.astro           # Privacy policy
│   ├── terms.astro             # Terms of service
│   ├── learning-center/        # Blog listing + posts
│   └── masterclass/            # Funnel pages (register, strategy, vip, confirmed)
├── views/funnel/       # Complex funnel page views (masterclass)
├── content/blog/       # Markdown blog posts
├── layouts/            # BaseLayout.astro (HTML shell)
└── styles/             # globals.css (Tailwind theme + utilities)

docs/
├── analysis/           # RLM analysis documents
├── reference/          # Brand kit, competitor intel
└── guides/             # Blog post implementation guides

.kiro/
├── specs/              # Feature specifications
├── steering/           # Agent operating rules
└── docs/               # Blog post documentation
```

## Key Patterns

- **Pages** compose components directly in `.astro` files (no view wrappers)
- **Homepage hero** is a static Astro component (zero JS, instant paint)
- **Other sections** use `client:visible` for lazy hydration
- **Only Navbar** uses `client:load` (needs scroll detection immediately)
- **Masterclass funnel pages** use React views in `src/views/funnel/` (complex state)

## Brand Colors

- **Forrestry.ai** (parent brand): Emerald `#10B981`
- **Funnel Studio** (product): Indigo `#818cf8`
- **Answer Your Audience**: Blue `#38bdf8`
- **BrandStory**: Orange `#fb923c`

## Deployment

Pushes to `main` auto-deploy to Vercel at https://www.forrestry.ai
