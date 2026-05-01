# Marketing Site Build — RLM Analysis

**Problem Statement**: Port the existing static HTML marketing site for forrestry.ai into a React 19 + Vite 6 + Tailwind CSS + TypeScript application, apply 8 fixes, and prepare for Vercel deployment.

**Context**: This is the marketing website for forrestry.ai / Funnel Studio. The app lives at app.forrestry.ai. All CTAs drive to the app. The site is in beta/founding member phase.

---

## Phase 1: Source Analysis

### What We Have
- A single static HTML file with inline CSS and vanilla JS
- Well-structured sections: Navbar, Hero, Social Proof/Problem, How It Works, Pricing, Community, Final CTA, Footer
- Working animations: fade-up on scroll, floating badges, navbar blur on scroll, pulse glow
- Working mobile hamburger menu
- GSAP loaded via CDN but not actually used (only vanilla IntersectionObserver + CSS animations)
- All CTAs already point to app.forrestry.ai (good)

### What Needs to Change
1. Port to React 19 + Vite 6 + TypeScript + Tailwind CSS
2. Replace broken Figma asset references with actual logo (user will provide PNG)
3. Remove any "use client" directives (won't exist since we're building fresh)
4. Update pricing to Fix 3 spec (Starter $97/mo, Pro $147/mo, Annual $997/yr)
5. Wire all CTAs correctly
6. Smooth scroll for nav links
7. Vercel deployment config
8. Environment variables
9. Mobile responsiveness (already works in HTML, preserve it)

---

## Phase 2: Architecture Design

### Tech Stack
- React 19
- Vite 6
- TypeScript
- Tailwind CSS v4
- Framer Motion (animations)
- React Router v7 (multi-page ready)
- Lucide React (icons)

### File Structure
```
├── public/
│   └── logo.png                    # Circuit tree icon (user provides)
├── src/
│   ├── components/
│   │   ├── Navbar.tsx              # Sticky nav with mobile hamburger
│   │   ├── Footer.tsx              # Site footer
│   │   ├── Hero.tsx                # Hero section with floating badges
│   │   ├── SocialProof.tsx         # Problem section (The Copy Gap, etc.)
│   │   ├── HowItWorks.tsx          # 6-step product walkthrough
│   │   ├── Pricing.tsx             # 3-tier pricing (Starter/Pro/Annual)
│   │   ├── Community.tsx           # Forresters community section
│   │   ├── FinalCTA.tsx            # Final call-to-action with progress bar
│   │   └── FadeUp.tsx              # Reusable scroll-triggered animation wrapper
│   ├── pages/
│   │   └── Home.tsx                # Landing page (composes all sections)
│   ├── styles/
│   │   └── globals.css             # Tailwind imports + CSS variables + custom animations
│   ├── App.tsx                     # Router setup
│   └── main.tsx                    # Entry point
├── index.html                      # Vite entry HTML
├── package.json
├── tsconfig.json
├── vite.config.ts
├── tailwind.config.ts              # Tailwind theme (brand colors, fonts)
├── vercel.json                     # Vercel SPA rewrites
├── .env.example                    # Environment variable template
└── postcss.config.js
```

---

## Phase 3: Pricing Update (Fix 3)

### Current (HTML) → New (Fix 3 Spec)

| Current | New |
|---------|-----|
| Forrester $97/mo | Starter $97/mo |
| Architect $797/yr (featured) | Pro $147/mo (MOST POPULAR) |
| Agency $297/mo (coming soon) | Annual $997/yr |

### New Pricing Details

**Starter — $97/month**
- CTA: "Get Started" → https://buy.stripe.com/starter
- Features: 3 funnels, AI copywriting, Basic analytics, Email support

**Pro — $147/month (MOST POPULAR badge)**
- CTA: "Get Started" → https://buy.stripe.com/pro
- Features: Unlimited funnels, AI copywriting, Advanced analytics, Priority support, Custom domains

**Annual — $997/year**
- CTA: "Get Started" → https://buy.stripe.com/annual
- Features: Everything in Pro, 2 months free, Dedicated onboarding, SLA support

---

## Phase 4: CTA Wiring (Fix 4)

| Button Text | Destination |
|-------------|-------------|
| "Get Started", "Start Free Trial", "Try Free", "Claim Your Founding Member Access" | https://app.forrestry.ai/register |
| "Sign In", "Login", "Dashboard" | https://app.forrestry.ai/login |
| Pricing "Get Started" buttons | Stripe placeholder links |
| All links | Same tab (no target="_blank") |

---

## Phase 5: Implementation Plan

### Step 1: Scaffold Vite + React + TypeScript project
- Create package.json with all dependencies
- Create vite.config.ts, tsconfig.json, postcss.config.js, tailwind.config.ts
- Create index.html entry point

### Step 2: Set up Tailwind theme
- Map all CSS variables from the HTML to Tailwind config
- Brand colors: bg #0A0A0A, green #4ADE80 (brand kit), purple #7C3AED
- Note: Using #4ADE80 for brand green per user decision, but keeping #00FF88 references in gradients where the original design used it for visual effect
- Typography: Inter font family
- Custom animations: float, pulse, fade-up

### Step 3: Create shared components
- Navbar.tsx: Logo (placeholder until PNG provided) + "forrestry.ai" text in #4ADE80 + nav links + mobile hamburger
- Footer.tsx: Logo + links + copyright
- FadeUp.tsx: Reusable Framer Motion scroll-triggered wrapper

### Step 4: Create section components
- Hero.tsx, SocialProof.tsx, HowItWorks.tsx, Pricing.tsx, Community.tsx, FinalCTA.tsx
- Port all content from HTML, converting to JSX + Tailwind classes
- Preserve all animations using Framer Motion

### Step 5: Create pages and routing
- Home.tsx composes all sections
- App.tsx sets up React Router (ready for future /about, /pricing, /blog pages)

### Step 6: Apply fixes
- Fix 1: Logo reference (placeholder <img> ready for logo.png)
- Fix 2: No "use client" (fresh build, won't exist)
- Fix 3: Updated pricing component
- Fix 4: All CTAs wired correctly
- Fix 5: Smooth scroll via scroll-behavior + section IDs
- Fix 6: vercel.json created
- Fix 7: .env.example created
- Fix 8: Mobile responsive (Tailwind responsive classes)

### Step 7: Build verification
- Run npm install + npm run build
- Confirm zero errors

---

## Phase 5: Risk Assessment

### Low Risk
- This is a greenfield build, not modifying existing code
- The HTML source is well-structured, making porting straightforward
- No database, no auth, no API calls — pure static marketing site

### Medium Risk
- Logo PNG not yet in workspace — will use placeholder, easy to swap
- Tailwind v4 has some config differences from v3 — will use correct v4 syntax
- Framer Motion animations need to match the feel of the CSS animations

### Mitigation
- Build incrementally, test after each major component
- Keep the original HTML as reference (save to ORIGINAL_SITE_REFERENCE.md)
- Run getDiagnostics after each file creation

---

## Summary

This is a straightforward port from static HTML to a scalable React app. The content, design, and structure are already solid. The main work is:
1. Scaffold the React/Vite/Tailwind project
2. Break the HTML into typed React components with Tailwind styling
3. Apply the 8 fixes (pricing update is the biggest content change)
4. Verify clean build

No destructive changes. No complex logic. Just a clean architecture migration.
