# Implementation Plan: Homepage Design Overhaul

## Overview

This plan covers the comprehensive visual overhaul of the Forrestry.ai homepage. Tasks are ordered for safe, incremental implementation: git branch first, then global CSS tokens, then component modifications, then new components, then Home.tsx wiring, and finally build verification. Each task builds on the previous one so there is no orphaned or hanging code.

## Tasks

- [x] 1. Create feature branch
  - Create a new git branch `feature/homepage-design-overhaul` from the current branch
  - All subsequent changes will be committed to this branch
  - _Requirements: 15.1, 15.2_

- [x] 2. Update global CSS tokens and utilities in `src/styles/globals.css`
  - [x] 2.1 Add new @theme tokens for alternating section backgrounds and section layout
    - Add `--color-bg-section-a: #0a0f0a` and `--color-bg-section-b: #0f160f` inside the existing `@theme` block
    - Add `--spacing-section-y: 120px`, `--spacing-section-y-mobile: 64px`, `--spacing-section-max-w: 1100px`
    - _Requirements: 1.1, 1.2, 1.3_
  - [x] 2.2 Add the `.eyebrow` utility class and update body line-height
    - Add `.eyebrow` class: `font-size: 11px; letter-spacing: 0.15em; font-weight: 600; color: var(--color-green); text-transform: uppercase;`
    - Set `body { line-height: 1.75; }` in the existing body rule
    - _Requirements: 2.1, 1.4_

- [x] 3. Modify Hero section (`src/components/Hero.tsx`)
  - Apply `.eyebrow` class to the "Beta Now Open" badge label
  - Increase eyebrow letter-spacing to `0.15em` and font-size to `13px`
  - Add a radial gradient glow behind the headline: `radial-gradient(circle at 50% 50%, rgba(74,222,128,0.06) 0%, transparent 70%)`
  - Update Proof_Chip styling: `py-4 px-5`, border `1px solid rgba(255,255,255,0.08)`, bg `rgba(255,255,255,0.04)`
  - Set price text opacity to `0.7` (currently `0.5`)
  - Set `32px` gap (`mb-8`) between price text and badge grid
  - Constrain content to `max-w-[1100px]`
  - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 2.2_

- [x] 4. Modify SocialProof section (`src/components/SocialProof.tsx`)
  - Apply `.eyebrow` class to "THE PROBLEM" label
  - Add `border-l-4 border-l-[rgba(74,222,128,0.4)]` left accent to each Pain_Card
  - Update Pain_Card padding to `p-7` (28px)
  - Set emoji size to `text-[32px]`
  - Set title to `text-[18px] font-semibold`
  - Apply background `bg-bg-section-b`
  - Apply section padding `py-[120px]` desktop, responsive `py-16` on mobile
  - Constrain inner content to `max-w-[1100px]`
  - _Requirements: 8.1, 8.2, 8.3, 2.2, 1.1, 1.2, 1.3, 1.5_

- [x] 5. Modify Footer (`src/components/Footer.tsx`)
  - Update tagline styling: `text-[14px] font-medium text-green` (currently renders as `text-muted text-sm`)
  - Update top border to `border-t border-[rgba(255,255,255,0.08)]`
  - _Requirements: 14.1, 14.2_

- [x] 6. Modify Community section (`src/components/Community.tsx`)
  - Apply `.eyebrow` class to "THE COMMUNITY" label
  - Apply alternating background `bg-bg-section-b`
  - Apply section padding `py-[120px]` desktop, `py-16` mobile
  - Constrain inner content to `max-w-[1100px]`
  - _Requirements: 2.2, 1.1, 1.2, 1.3, 1.5_

- [x] 7. Checkpoint — Verify modified components
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` to confirm no import or type errors from the modifications so far

- [x] 8. Rewrite HowItWorks section (`src/components/HowItWorks.tsx`)
  - Complete rewrite with alternating text/video layout
  - Define `FeatureItem` interface with `num`, `title`, `subtitle`, `desc`, `videoSrc`
  - Map 6 features to existing videos: Brain Dump → `/Brain-Dump-Demo.mp4`, Webinar Builder → `/webinar-builder.mp4`, 60-Sec Webinar → `/60-Second-Hook.mp4`, Strategic Blueprint → `/Strategic Blueprint.mp4`, Funnel Stack → `/Funnel Stack.mp4`, Social Ads + Email Writer → `/Email-Writer.mp4`
  - Odd items (01, 03, 05): text-left / video-right; even items (02, 04, 06): video-left / text-right
  - Each item is a 2-column grid, stacked on mobile with text above video
  - Section_Marker: 64px circle with green gradient, step number inside
  - GIF_Frame: `rounded-xl`, border `1px solid rgba(74,222,128,0.2)`, `border-t-2 border-t-green`, `shadow-[0_24px_64px_rgba(0,0,0,0.4)]`
  - Title: `text-[28px] md:text-[32px] font-bold`, 16px gap to body
  - Use `LazyVideo` component for each video
  - 96px vertical gap between items
  - Add closing italic thesis statement: centered, `text-[22px]`, `opacity-85`, `my-20`
  - Section header: eyebrow "INSIDE FUNNEL STUDIO", headline "Your entire funnel. Built in the right order."
  - Apply background `bg-bg-section-a` and section padding
  - _Requirements: 5.1, 5.2, 5.3, 5.4, 5.5, 5.6, 5.7, 6.1, 6.2, 2.2, 1.1, 1.3_

- [x] 9. Rewrite Pricing section (`src/components/Pricing.tsx`)
  - Complete rewrite: replace 3-plan grid with single centered founding-member block
  - Max-width `700px`, centered
  - Eyebrow: "FOUNDING MEMBER PRICING" using `.eyebrow` class
  - Headline: "Lock in the founding rate."
  - Strikethrough price: `$97/mo` at `opacity-50`, `text-[16px]`, `line-through`
  - Active price: `$47/mo` at `text-[48px] font-extrabold`
  - Discount pill: "52% off" with `bg-[rgba(74,222,128,0.15)]`, `rounded`, `px-2.5 py-1`
  - Checklist: green checkmarks, 12px gap, items per design
  - CTA button: same style as Hero CTA
  - Trust badges: `text-[13px]`, separated by ` · `
  - Progress bar: "23 of 100 spots claimed"
  - Apply background `bg-bg-section-a` and section padding
  - _Requirements: 12.1, 12.2, 12.3, 12.4, 12.5, 2.2, 1.1_

- [x] 10. Rewrite FAQ section (`src/components/FAQ.tsx`)
  - Complete rewrite: remove `useState` import and accordion logic
  - Render as static 2-column card grid (`grid-cols-2` desktop, single column mobile)
  - Keep existing FAQ data array unchanged
  - FAQ_Card: `p-7`, `rounded-xl`, border `1px solid rgba(255,255,255,0.08)`
  - Question: `text-[17px] font-bold text-white`
  - Answer: `text-[15px] opacity-75 leading-[1.7]`
  - Render as `<div>` instead of `<button>`
  - Apply `.eyebrow` class to "FAQ" label
  - Apply background `bg-bg-section-a` and section padding
  - _Requirements: 11.1, 11.2, 11.3, 11.4, 11.5, 11.6, 2.2, 1.1_

- [x] 11. Checkpoint — Verify rewritten components
  - Ensure all tests pass, ask the user if questions arise.
  - Run `npm run build` to confirm no import or type errors from the rewrites

- [x] 12. Create new components
  - [x] 12.1 Create ComparisonTable component (`src/components/ComparisonTable.tsx`)
    - 3-column table: DIY, Agency, Funnel Studio
    - Funnel Studio column: `bg-[rgba(74,222,128,0.06)]`, left/right borders `1px solid rgba(74,222,128,0.3)`, top accent `3px solid #4ade80`, header in green/bold/larger font
    - DIY and Agency columns: text at `opacity-45`
    - Alternating row backgrounds: `rgba(255,255,255,0.02)` on even rows
    - CTA row at bottom spanning full width
    - Mobile: collapse to single-column card showing only Funnel Studio values with row labels
    - Section header: eyebrow "THE COMPARISON", headline "See how Funnel Studio stacks up."
    - Apply background `bg-bg-section-b` and section padding
    - Use `FadeUp` for animations
    - _Requirements: 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 2.2, 1.1, 1.2_
  - [x] 12.2 Create BenefitCards component (`src/components/BenefitCards.tsx`)
    - 3-column grid on desktop, single column on mobile
    - Gap: 20px
    - Card: `bg-[rgba(255,255,255,0.04)]`, border `1px solid rgba(255,255,255,0.08)`, `rounded-xl`, `p-8`
    - Icon: `text-[36px]`, `mb-4`; Headline: `text-[20px] font-bold`
    - Hover: border transitions to `rgba(74,222,128,0.3)`, translate-y -2px, 0.2s ease
    - Three cards: "Launch in days, not months", "Every piece speaks the same language", "Built on frameworks that convert" with content per design
    - Section header: eyebrow "THE OUTCOME", headline "What changes after Funnel Studio."
    - Apply background `bg-bg-section-a` and section padding
    - Use `FadeUp` for animations
    - _Requirements: 9.1, 9.2, 9.3, 9.4, 9.5, 9.6, 2.2, 1.1_
  - [x] 12.3 Create FounderStory component (`src/components/FounderStory.tsx`)
    - Centered layout, max-width 700px
    - Founder photo: 120px circle, `border-[3px] border-green`, `shadow-[0_0_30px_rgba(74,222,128,0.2)]`, src `/founder.webp`
    - Blockquote: `text-[20px]`, italic, `border-l-4 border-l-green`, `pl-6`, green text
    - Quote and attribution per design
    - Footnote: `text-[14px]`, `opacity-60`
    - Section header: eyebrow "THE FOUNDER", headline "Built by a launcher, for launchers."
    - Apply background `bg-bg-section-b` and section padding
    - Use `FadeUp` for animations
    - _Requirements: 10.1, 10.2, 10.3, 10.4, 2.2, 1.1_

- [x] 13. Wire everything together in Home.tsx (`src/views/Home.tsx`)
  - Add imports for `ComparisonTable`, `BenefitCards`, `FounderStory`
  - Remove `FinalCTA` import
  - Update render order: Navbar → Hero → SocialProof → HowItWorks → ComparisonTable → BenefitCards → FounderStory → Pricing → Community → FAQ → Footer
  - Pass `tagline="Stop Building. Start Launching."` to Footer
  - Remove FinalCTA from the JSX
  - Add "FAQ" to nav links array
  - _Requirements: 13.1, 13.2, 14.1_

- [x] 14. Final checkpoint — Build verification
  - Run `npm run build` and confirm the Astro static build completes without errors
  - Verify all component imports resolve, all TypeScript types are correct, and all Tailwind utilities generate valid CSS
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- No property-based tests apply — this is a UI rendering and visual styling overhaul with no pure functions or data transformations
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation via `npm run build`
- The HowItWorks rewrite maps 6 features to existing videos in `/public/`
- The Pricing rewrite changes from 3 plans to a single $47/mo founding-member block
- The FAQ rewrite removes useState/accordion in favor of static cards
- FinalCTA is removed from the Home.tsx render order (the file itself can remain)
- All sections use alternating backgrounds per the design's background pattern table
