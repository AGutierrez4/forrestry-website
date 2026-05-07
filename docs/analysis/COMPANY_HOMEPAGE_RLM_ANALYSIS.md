# Company Homepage — RLM Analysis

**Problem Statement**: Add a forrestry.ai company homepage to the existing marketing site repo. The company homepage becomes the new `/` route, and the current Funnel Studio landing page moves to `/funnel-studio`.

**Context**: This is the parent brand site for forrestry.ai. It showcases the ecosystem of products (Funnel Studio, Answer Your Audience, Website Builder). The app lives at app.funnelstudio.forrestry.ai.

---

## Phase 1: Current Architecture Analysis

### Existing Files (DO NOT MODIFY unless noted)
- `src/App.tsx` — Router with single `/` route → Home
- `src/main.tsx` — Entry point with BrowserRouter
- `src/pages/Home.tsx` — Funnel Studio landing page (composes all sections)
- `src/components/Navbar.tsx` — Hardcoded nav links for Funnel Studio (Product, Community, Pricing)
- `src/components/Footer.tsx` — Shared footer (links to #, © 2026)
- `src/components/FadeUp.tsx` — Reusable animation wrapper (SHARED, no changes needed)
- `src/components/Hero.tsx` — Funnel Studio hero
- `src/components/SocialProof.tsx` — Problem section
- `src/components/HowItWorks.tsx` — 6-step product walkthrough
- `src/components/Pricing.tsx` — 3-tier pricing
- `src/components/Community.tsx` — Forresters community
- `src/components/FinalCTA.tsx` — Final CTA with progress bar
- `src/styles/globals.css` — Theme variables and animations

### Assets
- `public/logo.png` — Circuit tree icon (confirmed present)
- `public/founder.png` — Andrew Gutierrez photo (confirmed present)

### Key Observations
1. Navbar is NOT parameterized — it has hardcoded Funnel Studio links
2. Footer is generic enough to share, but needs updated links for company page
3. FadeUp component is fully reusable — no changes needed
4. All CTA links currently point to app.forrestry.ai — need to update to app.funnelstudio.forrestry.ai
5. The globals.css theme is shared and works for both pages
6. Max content width is 1400px in existing components; spec says 1100px for company page

---

## Phase 2: Architecture Decision

### Approach: Parameterized Shared Components + New Page Components

**Navbar Strategy**: Make Navbar accept props for nav links and CTA config. This avoids duplicating the entire Navbar component.

**Footer Strategy**: Make Footer accept props for links and tagline. Company footer adds "Do more. Build less. Launch faster." tagline and Products/About/Blog links.

**New Components (company-specific)**:
- `src/components/company/CompanyHero.tsx` — Hero with different copy
- `src/components/company/Problem.tsx` — StoryBrand problem section (different pain points from Funnel Studio's)
- `src/components/company/Products.tsx` — 3 product cards (Funnel Studio, AYA, Website Builder)
- `src/components/company/HowItWorksCompany.tsx` — 3-step plan (Brain Dump → Build → Launch)
- `src/components/company/Founder.tsx` — Meet the founder section
- `src/components/company/CompanyCTA.tsx` — Final CTA section

**Page**:
- `src/pages/Company.tsx` — Composes all company sections

**Routing**:
- `/` → Company.tsx (company homepage)
- `/funnel-studio` → Home.tsx (current Funnel Studio landing page)

---

## Phase 3: Detailed Implementation Plan

### Step 1: Update Navbar to accept props
**File**: `src/components/Navbar.tsx`
**Changes**:
- Add interface for NavbarProps (links array, CTA href/text, logo href)
- Default props match current Funnel Studio config (backward compatible)
- Company page passes different links: Products (#products), About (#founder), Blog (#)
- Company page CTA: "Launch Your Funnel →" → app.funnelstudio.forrestry.ai

### Step 2: Update Footer to accept props
**File**: `src/components/Footer.tsx`
**Changes**:
- Add interface for FooterProps (links array, tagline, copyright year)
- Default props match current config (backward compatible)
- Company footer: Products · About · Blog · Privacy · Terms links
- Add tagline: "Do more. Build less. Launch faster."

### Step 3: Create company section components
**New files** (all in `src/components/company/`):

1. `CompanyHero.tsx`
   - Eyebrow: "AI-Powered Launch Tools for Entrepreneurs"
   - H1: "Do more. Build less. Launch faster." (last line in green gradient)
   - Subheadline from spec
   - Primary CTA: "Start Building Free →" → app.funnelstudio.forrestry.ai
   - Secondary CTA: "See How It Works" → #products (smooth scroll)
   - Social proof line: "Built for founders who are done waiting."

2. `Problem.tsx`
   - Section label: "THE PROBLEM"
   - Same H2/H3 as current (friction problem)
   - Different body text (from spec)
   - 4 pain point cards (2x2 grid): clock, puzzle, money, fire

3. `Products.tsx`
   - Section label: "THE SOLUTION", id="products"
   - H2: "One ecosystem. Every tool you need to launch."
   - 3 cards: Funnel Studio (green border, "Available Now"), AYA (gray, "Coming Soon"), Website Builder (gray, "Coming Soon")

4. `HowItWorksCompany.tsx`
   - Section label: "HOW IT WORKS"
   - H2: "Three steps to your first launch."
   - 3 steps: Brain Dump → Build → Launch
   - Horizontal stepper on desktop, vertical on mobile
   - Green numbered circles

5. `Founder.tsx`
   - Section label: "THE GUIDE", id="founder"
   - H2: "Built by a founder, for founders."
   - Photo: /founder.png, circular crop
   - Name, title, bio text from spec
   - Layout: text left, photo right on desktop; photo top on mobile

6. `CompanyCTA.tsx`
   - H2: "This is your moment."
   - Accent: "Don't build it alone."
   - Body + CTA from spec
   - Green glow effect (reuse pulse-glow animation)

### Step 4: Create Company page
**New file**: `src/pages/Company.tsx`
- Composes: Navbar (company config) → CompanyHero → Problem → Products → HowItWorksCompany → Founder → CompanyCTA → Footer (company config)

### Step 5: Update routing
**File**: `src/App.tsx`
- `/` → Company
- `/funnel-studio` → Home (existing)

### Step 6: Update existing Funnel Studio page
**File**: `src/pages/Home.tsx`
- Update Navbar props to pass Funnel Studio-specific links
- Update all CTA links from app.forrestry.ai to app.funnelstudio.forrestry.ai

### Step 7: Update meta tags
**File**: `index.html`
- Title: "Forrestry.ai — Do more. Build less. Launch faster."
- Description: hero subheadline

### Step 8: Build verification
- Run `npm run build`
- Run getDiagnostics on all new/modified files
- Confirm zero errors

---

## Phase 4: Risk Assessment

### Low Risk
- New components don't touch existing ones (except Navbar/Footer props)
- Navbar/Footer changes are backward compatible via default props
- FadeUp, globals.css, theme — all unchanged

### Medium Risk
- Routing change: `/` moves from Funnel Studio to Company. Anyone bookmarking the current `/` will now see the company page. Mitigated by `/funnel-studio` route.
- Navbar parameterization: need to ensure existing Funnel Studio page still works identically after refactor

### Mitigation
- Test both routes after changes
- Run full build verification
- getDiagnostics on every modified file

---

## Phase 5: File Change Summary

### Modified Files (3):
1. `src/components/Navbar.tsx` — Add props interface
2. `src/components/Footer.tsx` — Add props interface
3. `src/App.tsx` — Add Company route, move Home to /funnel-studio

### New Files (8):
1. `src/components/company/CompanyHero.tsx`
2. `src/components/company/Problem.tsx`
3. `src/components/company/Products.tsx`
4. `src/components/company/HowItWorksCompany.tsx`
5. `src/components/company/Founder.tsx`
6. `src/components/company/CompanyCTA.tsx`
7. `src/pages/Company.tsx`
8. `index.html` (modified — meta tags)

### Unchanged Files:
- All existing Funnel Studio section components (Hero, SocialProof, HowItWorks, Pricing, Community, FinalCTA)
- FadeUp.tsx
- globals.css
- main.tsx
- All config files (vite, tsconfig, vercel, package.json)

---

## Execution Order
1. Navbar props refactor
2. Footer props refactor  
3. Company section components (all 6)
4. Company page
5. App.tsx routing update
6. Home.tsx Funnel Studio link updates
7. index.html meta tags
8. Build + diagnostics verification
