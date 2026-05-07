# Implementation Plan: Homepage Rebirth

## Overview

Complete rebuild of the Forrestry.ai root homepage (`/`) using new isolated React components in `src/components/homepage/`. The implementation follows an incremental approach: shared constants first, then individual section components, then wiring everything together in `index.astro`. Old `company/` components remain untouched for revert safety.

## Tasks

- [x] 1. Create shared constants and light-mode CSS tokens
  - [x] 1.1 Create `src/components/homepage/constants.ts` with shared Stripe checkout URL, Funnel Studio URL, and ecosystem anchor constant
    - Export `STRIPE_CHECKOUT_URL`, `FUNNEL_STUDIO_URL`, `ECOSYSTEM_ANCHOR`
    - _Requirements: 9.6, 6.5, 2.4, 10.4_
  - [x] 1.2 Add light-mode color tokens to `src/styles/globals.css`
    - Add `--color-bg-light`, `--color-bg-warm`, `--color-text-dark`, `--color-text-body` tokens inside the existing `@theme` block
    - These tokens support the light/white body sections described in the design
    - _Requirements: 12.1, 12.4_

- [x] 2. Implement HomepageNavbar component
  - [x] 2.1 Create `src/components/homepage/HomepageNavbar.tsx`
    - Fixed navbar with scroll-based style switching (transparent on dark hero, white bg with shadow on light sections)
    - Logo from `/logo.png` linking to `/`
    - Nav links: "Products" (dropdown), "Pricing" (`/pricing`), "About" (`/about`)
    - Products dropdown with "Funnel Studio" → `/funnel-studio`, "AYA (Coming Soon)" → `#ecosystem`, "BrandStory (Coming Soon)" → `#ecosystem`
    - Primary CTA button: "Get Access to Funnel Studio" linking to Stripe checkout URL
    - Mobile hamburger menu below 768px
    - Use `aria-expanded`, `aria-haspopup`, `role="menu"` for accessibility
    - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 14.2, 14.3_

- [x] 3. Implement HomepageHero component
  - [x] 3.1 Create `src/components/homepage/HomepageHero.tsx`
    - Dark background (`bg-[#09090B]`), near-full viewport height
    - Headline: "Build Your Business on a Clear Path. Not a Pile of Disconnected Tools."
    - Subheadline describing Forrestry.ai as the growth ecosystem
    - Primary CTA: green button "Get Access to Funnel Studio" linking to Stripe checkout
    - Secondary CTA: text link "See How the Ecosystem Works" scrolling to `#ecosystem`
    - Visual element placeholder (connected nodes SVG/CSS graphic)
    - Green accent (#4ade80) on highlights and CTA
    - Reuse existing `FadeUp` component for scroll animations
    - _Requirements: 2.1, 2.2, 2.3, 2.4, 2.5, 2.6, 2.7, 2.8_

- [x] 4. Implement PainSection component
  - [x] 4.1 Create `src/components/homepage/PainSection.tsx`
    - Light/white background section
    - Headline: "The 'Digital Jungle' is real. We're here to help you navigate it."
    - Three pain cards in responsive grid (1 col mobile, 3 col desktop): "Technical Exhaustion", "Strategic Confusion", "Fragmented Systems"
    - Each card: white bg, subtle border, rounded corners, icon area, title, body paragraph
    - Transition line below cards: "Forrestry.ai was built to replace that chaos with a single, connected ecosystem."
    - Dark text on light background for readability
    - Reuse `FadeUp` for card entrance animations
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7_

- [x] 5. Implement EcosystemSection component
  - [x] 5.1 Create `src/components/homepage/EcosystemSection.tsx`
    - `id="ecosystem"` for anchor navigation
    - Light/white background
    - Headline: "One Connected Ecosystem. Three Engines for Growth."
    - Three product cards: Funnel Studio (live), AYA (coming soon), BrandStory (coming soon)
    - Funnel Studio card: green accent, "THE CONVERSION ENGINE" tag, CTA linking to `/funnel-studio`, full color
    - AYA card: glassmorphism/grayscale effect (`bg-white/60 backdrop-blur-sm`, reduced opacity), "COMING SOON" tag, no CTA
    - BrandStory card: same glassmorphism/grayscale treatment, "COMING SOON" tag, no CTA
    - Reuse `FadeUp` for card entrance animations
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8_

- [x] 6. Implement WorkflowSection component
  - [x] 6.1 Create `src/components/homepage/WorkflowSection.tsx`
    - Light background (`bg-[#FAFAF9]`)
    - Headline: "Strategy into Execution. The Forrestry Path."
    - Four sequential steps with numbered green circle badges and vertical connecting line
    - Steps: "The Brain Dump", "The Strategic Blueprint", "The Funnel Stack", "Scale Authority"
    - Each step has title and descriptive body paragraph
    - Responsive: vertical timeline on all viewports, content to the right on desktop, stacked on mobile
    - Reuse `FadeUp` for step entrance animations
    - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6_

- [x] 7. Implement FlagshipSection component
  - [x] 7.1 Create `src/components/homepage/FlagshipSection.tsx`
    - Light/white background
    - Headline: "Meet Funnel Studio: Where Your Vision Becomes a Reality."
    - Three value pillars in responsive grid: "The Funnel Stack Builder", "Framework-Driven Copy", "A Unified Voice"
    - Each pillar: icon/visual area, title, description paragraph
    - CTA button: "Launch Your First Ecosystem with Funnel Studio ($97)" linking to Stripe checkout
    - Reuse `FadeUp` for pillar entrance animations
    - _Requirements: 6.1, 6.2, 6.3, 6.4, 6.5, 6.6_

- [x] 8. Implement FounderSection component
  - [x] 8.1 Create `src/components/homepage/FounderSection.tsx`
    - Slightly tinted background (`bg-[#F5F5F4]`)
    - Two-column layout on desktop (photo left, copy right), stacked on mobile
    - Headline: "Built by a Marketing Professional Who's Been in the Trenches."
    - Founder photo: `<img src="/founder.webp" alt="Founder of Forrestry.ai" />` with rounded corners and subtle shadow
    - Copy referencing 7+ years with global B2B brands and enterprise GTM systems
    - Mission statement about giving entrepreneurs professional-grade platforms
    - Reuse `FadeUp` for entrance animation
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6_

- [x] 9. Implement CommunitySection component
  - [x] 9.1 Create `src/components/homepage/CommunitySection.tsx`
    - Light/white background
    - Centered text layout
    - Headline: "Join the Community of Forresters."
    - Body copy about joining a network of entrepreneurs building real systems
    - Optional subtle decorative element (green accent line)
    - Reuse `FadeUp` for entrance animation
    - _Requirements: 8.1, 8.2, 8.3, 8.4_

- [x] 10. Implement PricingSection component
  - [x] 10.1 Create `src/components/homepage/PricingSection.tsx`
    - Light background (`bg-[#FAFAF9]`)
    - Headline: "One Mission. One Ecosystem. One Clear Price."
    - Single centered pricing card: white bg, border, rounded-2xl, shadow-md
    - Price display: "$97" large, "/mo" smaller
    - No strikethrough pricing, no discount badges, no founding member language, no urgency messaging
    - Includes list with checkmarks: Full Access to Funnel Studio, Brain Dump Genius Extraction, Strategic Blueprint Generation, The 4-Page HTML Funnel Stack Builder, Full Conversion Asset Suite (Emails, Ads, Scripts)
    - CTA button: "Get Access to Funnel Studio" linking to Stripe checkout
    - Reuse `FadeUp` for entrance animation
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 9.7, 13.1, 13.2, 13.3_

- [x] 11. Implement FinalCTASection component
  - [x] 11.1 Create `src/components/homepage/FinalCTASection.tsx`
    - Dark background (`bg-[#09090B]`)
    - Centered content, white text
    - Headline: "Stop Wrestling with Tools. Start Building Your Legacy."
    - Subheadline about the path to revenue starting with clarity
    - CTA button: green "Start with Funnel Studio" linking to Stripe checkout
    - Reuse `FadeUp` for entrance animation
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 10.5_

- [x] 12. Checkpoint - Verify all components build independently
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npx astro check` or TypeScript compilation to verify no type errors across all new components

- [x] 13. Wire components into index.astro
  - [x] 13.1 Update `src/pages/index.astro` to import and render all new homepage components
    - Replace existing `company/` component imports with `homepage/` component imports
    - Render sections in order: HomepageNavbar, HomepageHero, PainSection, EcosystemSection, WorkflowSection, FlagshipSection, FounderSection, CommunitySection, PricingSection, FinalCTASection, Footer
    - Use `client:load` for HomepageNavbar and HomepageHero
    - Use `client:visible` for all below-fold sections (PainSection through FinalCTASection)
    - Keep Footer as static (no client directive)
    - Update meta title to "forrestry.ai | The Entrepreneurial Growth Ecosystem"
    - Update meta description to "Build your business on a clear path. Forrestry.ai connects strategy, funnels, and content into one ecosystem so you can stop wrestling with disconnected tools."
    - Update Footer links and tagline to match new homepage context
    - Do NOT delete or modify any files in `src/components/company/`
    - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 14.1, 14.5_

- [x] 14. Final checkpoint - Build verification
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` (Astro build) and confirm it completes with no errors
  - Verify no TypeScript errors, no missing imports, no broken image references
  - Confirm semantic HTML structure (nav, main, section, footer) is correct in the output

## Notes

- All components use TypeScript React (`.tsx`) with Tailwind CSS v4 utility classes
- No property-based tests needed (UI/styling feature with no pure data transformations)
- Old `src/components/company/` directory is preserved for revert safety
- All copy must comply with Copy Style Rules (no em dashes, no contrast framing, no value bloat)
- The existing `FadeUp` component (`src/components/FadeUp.tsx`) is reused for scroll animations
- Stripe checkout URL is centralized in `constants.ts` for single-source-of-truth maintenance
- Each task is independently verifiable through TypeScript compilation
