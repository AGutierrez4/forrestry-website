# Homepage Rebirth: RLM Analysis
## Reference Code → Astro Implementation Plan

**Created**: May 6, 2026  
**Branch**: `feature/homepage-rebirth`  
**Status**: Analysis Complete — Awaiting Approval

---

## Phase 1: Architecture Comparison

### Reference (Next.js Space)
- **Framework**: Next.js with `'use client'` components
- **Styling**: Tailwind CSS v3 + shadcn/ui CSS variable system (HSL tokens)
- **Animations**: Framer Motion (`motion` from `framer-motion`)
- **Layout**: `max-w-[1200px] mx-auto px-4 sm:px-6` container pattern
- **Section padding**: `py-20 sm:py-28` (80px / 112px)
- **Dark mode**: Class-based via `.dark` on `<html>`
- **Color system**: HSL CSS variables (`--primary: 160 84% 39%` = emerald/teal)
- **Fonts**: 3 families via CSS vars (`--font-sans`, `--font-display`, `--font-mono`)
- **Radius**: 10px base (`--radius: 0.625rem`)

### Current (Astro + React)
- **Framework**: Astro 5 with React islands (`client:load` / `client:visible`)
- **Styling**: Tailwind CSS v4 with `@theme` directive (no config file needed)
- **Animations**: Custom `FadeUp` component (IntersectionObserver + CSS transitions)
- **Layout**: `max-w-[1100px] mx-auto px-6` container pattern
- **Section padding**: `py-24 px-6` (96px)
- **Dark mode**: Always dark (no toggle, `bg-[#09090B]` hardcoded)
- **Color system**: CSS custom properties via `@theme` block
- **Fonts**: Inter only (`--font-sans`)
- **Radius**: Various hardcoded values

### Key Differences
| Aspect | Reference | Current | Action |
|--------|-----------|---------|--------|
| Container width | `max-w-[1200px]` | `max-w-[1100px]` | Adopt 1200px |
| Section padding | `py-20 sm:py-28` | `py-24` | Adopt reference pattern |
| Animation lib | Framer Motion | Custom IntersectionObserver | Keep current (lighter, works fine) |
| Color tokens | HSL variables | Hex in @theme | Keep hex (simpler for our setup) |
| Font display | Separate display font | Inter only | Add display font weight variant |
| Card borders | `border border-gray-100` (light) | `border border-white/[0.06]` (dark) | Keep dark variant |
| Tailwind version | v3 (config file) | v4 (@theme directive) | Keep v4 |

---

## Phase 2: What We're Building (Mapped to Screenshot)

Looking at the screenshot, the homepage has these sections top-to-bottom:

### Section 1: Hero
- Dark background with subtle green radial glow at top
- Centered headline with green gradient text on key phrase
- Subtitle paragraph
- Single green CTA button
- Below: a dark terminal/app screenshot preview (wide, centered)

### Section 2: Problem Statement ("Building a funnel shouldn't feel like...")
- Dark background
- Centered headline with green accent text
- 3 dark cards in a row with icons + text
- Each card has subtle border, dark bg, icon in green-tinted container

### Section 3: Comparison ("It's never been easier to do the same...")
- Slightly different dark bg (section-alt)
- Centered headline
- Grid of feature cards (looks like 3x2 or similar)
- Cards with dark bg, subtle borders, icon + title + description

### Section 4: Three Tools ("Three tools, built to be connected")
- Dark background
- Centered headline with green accent
- Alternating left/right layouts (text + screenshot)
- "Brain Dump™" with screenshot on right
- "Strategic Blueprint" with screenshot on left
- "Funnel Stack" with screenshot on right

### Section 5: Cost Comparison ("A blueprint to build results")
- Dark background
- 3 cards showing cost comparisons (green accent numbers)
- Cards with dark bg, green-highlighted dollar amounts

### Section 6: Founder Section
- Dark background
- Founder photo (rounded) on left
- Authority copy on right
- Quote or statement format

### Section 7: Pricing ("Everything you need to launch")
- Dark background
- Single centered pricing card
- $97/mo with feature list
- Green CTA button

### Section 8: Final CTA
- Green gradient background section (the one green-tinted section)
- White text headline
- CTA button (white on green)

---

## Phase 3: Implementation Plan

### 3.1 Design Token Updates (`src/styles/globals.css`)

**Changes needed:**
- Add `--color-bg-alt` for section alternation (slightly different shade)
- Add hero gradient utility class matching reference
- Add `--radius` base variable
- Increase container max-width to 1200px in components
- Add section-alt background token

```css
/* New tokens to add */
--color-bg-alt: #0d1117;        /* Slightly blue-tinted dark for alternating sections */
--color-card-hover-border: rgba(74, 222, 128, 0.15);
--radius: 0.625rem;
```

### 3.2 Animation System (Keep `FadeUp`, Add `SlideIn`)

Our current `FadeUp` is lightweight and works well. We'll add a `SlideIn` variant for the alternating layouts:

**New file**: `src/components/SlideIn.tsx`
- Same IntersectionObserver pattern as FadeUp
- Accepts `from` prop: 'left' | 'right'
- Translates 20px from direction

**New file**: `src/components/Stagger.tsx`
- Wraps children with incremental delays
- Uses IntersectionObserver to trigger all children

### 3.3 Section-by-Section Component Plan

#### HomepageHero.tsx (REWRITE)
- **Layout**: Centered text (not split) — matches screenshot
- **Headline**: "Stop guessing. Start launching." with green gradient on "Start launching"
- **Subtitle**: Single paragraph, `text-lg text-white/60`
- **CTA**: Single green pill button
- **Below headline**: Wide dark screenshot/terminal preview (centered, full container width)
- **Background**: `hero-gradient` radial glow effect

#### PainSection.tsx (REWRITE → "ProblemSection")
- **Layout**: Centered headline + 3-column card grid
- **Cards**: Dark bg (`#111` or `bg-bg-elevated`), subtle border, icon + title + body
- **Icons**: In green-tinted rounded containers (`bg-green/10`)
- **Spacing**: `py-20 sm:py-28`

#### EcosystemSection.tsx (KEEP, RESTYLE)
- Already has the 3-card grid layout
- Update: Remove "LIVE" badge, simplify to match reference card style
- This becomes the "It's never been easier" section with feature cards

#### FlagshipSection.tsx (REWRITE → "ToolsSection")
- **Layout**: Alternating left/right with `SlideIn` animations
- **Order**: Brain Dump → Strategic Blueprint → Funnel Stack (per PENDING_REVISIONS)
- **Each row**: Text side + screenshot side
- **Screenshots**: `rounded-xl border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.4)]`

#### NEW: CostComparisonSection.tsx
- 3 cards showing cost/value comparison
- Green-highlighted numbers
- Dark cards with subtle borders

#### FounderSection.tsx (REWRITE)
- **Layout**: Photo left, authority copy right (horizontal on desktop)
- **Copy**: Third-person authority statement (per PENDING_REVISIONS)
- **Photo**: Rounded, with subtle green border/glow
- **No "My name is Andrew"** — authority-driven format

#### PricingSection.tsx (RESTYLE)
- Keep structure, update visual treatment
- Centered card with dark bg
- Match reference card styling (rounded-2xl, subtle border)
- Green CTA button

#### FinalCTASection.tsx (REWRITE)
- **THE green section** — gradient green background
- `bg-gradient-to-br from-emerald-600 via-emerald-700 to-teal-700`
- Adapted to our green: `from-green to-green/80` with overlay
- White text, white CTA button
- Rounded-2xl container (not full-width green)

### 3.4 Sections to REMOVE
- `WorkflowSection.tsx` — The numbered steps don't appear in the reference
- `CommunitySection.tsx` — Not in the reference design

### 3.5 Section Order (Final)
1. HomepageNavbar
2. HomepageHero (centered, screenshot below)
3. ProblemSection (3-card grid)
4. EcosystemSection (feature grid, restyled)
5. ToolsSection (alternating splits with screenshots)
6. CostComparisonSection (3 value cards)
7. FounderSection (authority format)
8. PricingSection (single card, restyled)
9. FinalCTASection (green gradient card)
10. Footer

---

## Phase 4: Specific Style Patterns to Match

### Container
```
max-w-[1200px] mx-auto px-4 sm:px-6
```

### Section Padding
```
py-20 sm:py-28
```

### Section Heading Pattern
```tsx
<p className="text-xs font-semibold text-green uppercase tracking-wider mb-3">Section Label</p>
<h2 className="text-[clamp(1.75rem,4vw,2.75rem)] font-extrabold text-white mb-4">
  Headline with <span className="text-green">green accent</span>
</h2>
<p className="text-white/60 text-lg max-w-[600px] mx-auto leading-relaxed">
  Supporting paragraph.
</p>
```

### Card Pattern (Dark)
```tsx
<div className="rounded-xl bg-[#111] border border-white/[0.06] p-6 hover:border-green/20 transition-colors">
  <div className="w-9 h-9 rounded-lg bg-green/10 flex items-center justify-center mb-3">
    <Icon className="w-4 h-4 text-green" />
  </div>
  <h4 className="text-white font-bold text-sm">{title}</h4>
  <p className="mt-1 text-white/50 text-sm leading-relaxed">{description}</p>
</div>
```

### Screenshot Container
```tsx
<div className="rounded-xl overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-white/[0.08] bg-[#111]">
  <img src={src} alt={alt} className="w-full h-auto block" loading="lazy" />
</div>
```

### Green Gradient Text
```tsx
<span className="bg-gradient-to-r from-green-bright to-green bg-clip-text text-transparent">
  Accent phrase
</span>
```

### CTA Button (Primary)
```tsx
<a className="inline-block px-8 py-4 rounded-full bg-green text-black font-bold text-base no-underline shadow-[0_0_30px_rgba(74,222,128,0.2)] hover:bg-green/90 hover:shadow-[0_0_50px_rgba(74,222,128,0.3)] hover:scale-[1.02] transition-all">
```

### Green Section (Final CTA)
```tsx
<div className="rounded-2xl bg-gradient-to-br from-[#16A34A] via-[#15803D] to-[#0D6B3A] p-10 sm:p-16 text-center overflow-hidden relative">
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.1),_transparent_60%)]" />
  {/* White text content */}
</div>
```

---

## Phase 5: Risk Assessment

### Low Risk
- Restyling existing sections (colors, padding, borders)
- Adding new animation components
- Updating design tokens

### Medium Risk
- Rewriting Hero (changes above-the-fold experience)
- Removing WorkflowSection and CommunitySection (content loss)
- Changing section order

### Mitigations
- All current code is committed on the branch
- Can revert any section individually
- Screenshots/images already exist in `/public/`
- No backend or data changes required

---

## Phase 6: Implementation Order

1. **Update globals.css** — Add new tokens, hero-gradient utility
2. **Create SlideIn.tsx** — New animation component
3. **Rewrite HomepageHero.tsx** — Centered layout with screenshot below
4. **Rewrite PainSection → ProblemSection.tsx** — 3-card grid
5. **Restyle EcosystemSection.tsx** — Match reference card style
6. **Rewrite FlagshipSection → ToolsSection.tsx** — Alternating splits, correct order
7. **Create CostComparisonSection.tsx** — New section
8. **Rewrite FounderSection.tsx** — Authority format
9. **Restyle PricingSection.tsx** — Match reference card
10. **Rewrite FinalCTASection.tsx** — Green gradient card
11. **Update index.astro** — New section order, remove old sections
12. **Test build** — Verify no errors

---

## Summary

The reference code gives us a clear, modular pattern to follow. The main translation work is:
1. **Keep our Astro + React island architecture** (no framework change needed)
2. **Keep our FadeUp animation** (lighter than Framer Motion, same visual effect)
3. **Adopt the reference's spacing, container, and card patterns**
4. **Go fully dark** with section-alt variations (already mostly there)
5. **Match the section structure** from the screenshot exactly
6. **One green gradient section** for the final CTA

The code is not a copy-paste swap, but the patterns translate cleanly. Our Tailwind v4 `@theme` system handles the tokens, and our React components handle the interactivity. The main work is rewriting component markup and styling to match the reference's spacing, typography, and card patterns.

**Ready to implement. Awaiting approval.**
