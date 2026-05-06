# Homepage Rebirth: Pending Revisions

## Status
Branch: `feature/homepage-rebirth`
Last build: ✅ Clean (May 6, 2026)

## Completed This Session

### ✅ 1. Flagship Section Image Order — FIXED
Order is now: Brain Dump → Strategic Blueprint → Funnel Stack

### ✅ 2. Kill White Backgrounds — Go Dark — DONE
- All sections use deep black (#09090B) or section-alt (#0d1117)
- No white backgrounds anywhere on homepage
- One green gradient section (Final CTA) for visual pop

### ✅ 3. Founder Section Copy — REWRITTEN
- Removed "My name is Andrew" casual intro
- Now uses authority-driven third-person format
- "7+ years scaling global B2B brands..." opening

### ✅ 4. Overall Color/Contrast — DONE
- Dark mode throughout with section-alt variations
- Green gradient text treatment on key headline phrases
- Green accent section (Final CTA rounded card)
- Consistent card styling: dark bg, subtle borders, green icon containers

### ✅ 5. Reference Code Architecture — ADOPTED
- Container: max-w-[1200px] mx-auto px-4 sm:px-6
- Section padding: py-20 sm:py-28
- Card pattern: rounded-xl bg-[#111] border border-white/[0.06]
- Section labels: text-xs font-semibold text-green uppercase tracking-wider
- Screenshot containers: rounded-xl with shadow and subtle border
- SlideIn animation component added for alternating layouts
- hero-gradient and section-alt CSS utilities added

## New Section Order
1. HomepageNavbar
2. HomepageHero (centered, screenshot below)
3. PainSection (3-card grid)
4. EcosystemSection (6-card feature grid)
5. FlagshipSection (alternating splits: Brain Dump → Blueprint → Stack)
6. CostComparisonSection (3 cost comparison cards)
7. FounderSection (authority format)
8. PricingSection (single card, $97/mo)
9. FinalCTASection (green gradient rounded card)
10. Footer

## Sections Removed
- WorkflowSection (numbered steps — not in reference design)
- CommunitySection (not in reference design)

## Key Files Changed
- `src/styles/globals.css` — Added tokens, hero-gradient, section-alt
- `src/components/SlideIn.tsx` — New animation component
- `src/components/homepage/HomepageHero.tsx` — Full rewrite (centered)
- `src/components/homepage/PainSection.tsx` — Full rewrite (3-col cards)
- `src/components/homepage/EcosystemSection.tsx` — Full rewrite (feature grid)
- `src/components/homepage/FlagshipSection.tsx` — Full rewrite (alternating splits)
- `src/components/homepage/CostComparisonSection.tsx` — New section
- `src/components/homepage/FounderSection.tsx` — Full rewrite (authority)
- `src/components/homepage/PricingSection.tsx` — Restyled
- `src/components/homepage/FinalCTASection.tsx` — Full rewrite (green gradient)
- `src/pages/index.astro` — Updated section order

## Brand Color Rules
- Forrestry.ai (parent brand): Green (#4ade80)
- Gradient text: from-green-bright to-green

## Copy Style Rules (Always Enforced)
- No em dashes
- No "it's not X, it's Y" contrast framing
- No value bloat
- Clear, direct, short sentences
