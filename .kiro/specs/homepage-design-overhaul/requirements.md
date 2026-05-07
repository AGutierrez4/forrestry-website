# Requirements Document

## Introduction

This specification covers a comprehensive visual design overhaul of the Forrestry.ai homepage (Funnel Studio marketing site). The site is built with Astro 5.7, React 19, and Tailwind CSS v4. The homepage currently renders: Navbar, Hero, SocialProof, HowItWorks, Pricing, Community, FinalCTA, and Footer. The goal is to create breathing room, visual hierarchy, and section distinction without changing the brand identity or rewriting any copy. The design direction is editorial dark-mode SaaS. All work must be performed on a dedicated git branch.

## Glossary

- **Homepage**: The main marketing landing page rendered by `src/views/Home.tsx`, served at the root URL
- **Section**: A top-level `<section>` block within the Homepage (e.g., Hero, SocialProof, HowItWorks, Pricing, Community, Footer)
- **Theme_Config**: The centralized color and typography configuration in `theme.ts` and `src/styles/globals.css`
- **Eyebrow_Label**: A small uppercase label displayed above a section headline to categorize the section content
- **Proof_Chip**: A small badge-style element in the Hero section displaying a feature highlight with an icon and text
- **Feature_Item**: One of the numbered product feature entries within the HowItWorks section (items 01 through 06)
- **Comparison_Table**: A new component presenting a side-by-side comparison of Funnel Studio versus DIY and Agency approaches
- **Pain_Card**: A card within the SocialProof section representing a specific user pain point, displayed in a 2x2 grid
- **Benefit_Card**: A card within a new benefits section showing a positive outcome after using Funnel Studio
- **Founder_Story**: A new section displaying the founder photo, blockquote, and attribution
- **FAQ_Card**: A card within the FAQ section displaying a question and its answer in a static 2-column grid layout
- **Pricing_Block**: The single pricing section displaying the founding member offer with price, discount pill, checklist, and trust badges
- **FinalCTA_Component**: The existing `FinalCTA.tsx` component that duplicates the closing call-to-action and is targeted for removal
- **GIF_Frame**: A styled container for demo video/GIF media within a Feature_Item
- **Section_Marker**: A numbered circular indicator (64px diameter) with a green gradient, used to label each Feature_Item
- **Reusable_Eyebrow_Class**: A global CSS utility class for consistent Eyebrow_Label styling across all sections

## Requirements

### Requirement 1: Global Spacing and Rhythm

**User Story:** As a visitor, I want the homepage to have generous vertical spacing and alternating background tones between sections, so that the page feels open and each section is visually distinct.

#### Acceptance Criteria

1. THE Homepage SHALL apply 120px top and bottom padding to all major Sections on desktop viewports
2. THE Homepage SHALL alternate Section background colors between #0a0f0a and #0f160f to create visual separation between consecutive Sections
3. THE Homepage SHALL constrain all Section inner content to a maximum width of 1100px, centered horizontally with a minimum of 24px side padding
4. THE Theme_Config SHALL set body copy line-height to a value between 1.7 and 1.8
5. WHEN the viewport width is below 768px, THE Homepage SHALL reduce major Section top and bottom padding to 64px

### Requirement 2: Reusable Eyebrow Label Class

**User Story:** As a developer, I want a single reusable CSS class for section eyebrow labels, so that all sections share consistent label styling without duplication.

#### Acceptance Criteria

1. THE Reusable_Eyebrow_Class SHALL render text at 11px font-size, 0.15em letter-spacing, font-weight 600, color #4ade80, and uppercase text-transform
2. THE Homepage SHALL apply the Reusable_Eyebrow_Class to every Eyebrow_Label across all Sections
3. WHEN a Section contains an Eyebrow_Label, THE Eyebrow_Label SHALL use the Reusable_Eyebrow_Class instead of inline or component-scoped styles

### Requirement 3: Global Typography Scale

**User Story:** As a visitor, I want section headlines and body copy to follow a consistent, readable typographic scale, so that the page hierarchy is clear and text is comfortable to read.

#### Acceptance Criteria

1. THE Homepage SHALL render all Section headlines at 40px to 48px on desktop viewports and 28px to 32px on viewports below 768px
2. THE Homepage SHALL render body copy at a 16px base font-size with opacity 0.8
3. THE Theme_Config SHALL define the headline and body copy scale as reusable design tokens or Tailwind utilities

### Requirement 4: Hero Section Visual Refinements

**User Story:** As a visitor, I want the Hero section to have a polished visual hierarchy with clear spacing between elements, so that the headline, CTA, and proof chips each stand out.

#### Acceptance Criteria

1. THE Hero Section SHALL display the eyebrow line with letter-spacing of 0.15em and a slightly larger font-size than the current implementation
2. THE Hero Section SHALL render a subtle radial gradient behind the headline using rgba(74, 222, 128, 0.06) as the glow color
3. THE Hero Section SHALL maintain a 32px gap between the CTA button block and the Proof_Chip grid
4. WHEN a Proof_Chip is rendered, THE Proof_Chip SHALL have 16px vertical and 20px horizontal padding, a 1px solid rgba(255,255,255,0.08) border, and a background of rgba(255,255,255,0.04)
5. THE Hero Section SHALL display the "$97/mo after founding spots fill" text at opacity 0.7

### Requirement 5: Feature Section Alternating Layout

**User Story:** As a visitor, I want the "Inside Funnel Studio" feature items to alternate between text-left/visual-right and text-right/visual-left layouts, so that the page has visual rhythm and each feature feels distinct.

#### Acceptance Criteria

1. THE HowItWorks Section SHALL display odd-numbered Feature_Items with text on the left and the GIF_Frame on the right
2. THE HowItWorks Section SHALL display even-numbered Feature_Items with the GIF_Frame on the left and text on the right
3. WHEN a Feature_Item is rendered, THE Section_Marker SHALL display as a 64px diameter circle with a subtle green gradient fill, overlapping the section boundary
4. THE GIF_Frame SHALL have border-radius of 12px, a 1px solid rgba(74, 222, 128, 0.2) border, box-shadow of 0 24px 64px rgba(0,0,0,0.4), and a 2px solid #4ade80 top border
5. THE Feature_Item title SHALL render at 28px to 32px font-size
6. THE Feature_Item SHALL maintain a 16px gap between the title and the body copy
7. WHEN the viewport width is below 768px, THE HowItWorks Section SHALL stack Feature_Items vertically with text above the GIF_Frame

### Requirement 6: Feature Section Closing Statement

**User Story:** As a visitor, I want a centered italic thesis statement at the end of the feature section, so that the product narrative has a clear conclusion.

#### Acceptance Criteria

1. THE HowItWorks Section SHALL display a closing italic thesis statement after the last Feature_Item
2. THE closing statement SHALL be centered, rendered at 22px font-size, opacity 0.85, with 80px vertical margin above and below

### Requirement 7: Comparison Table Component

**User Story:** As a visitor, I want to see a comparison table showing Funnel Studio versus DIY and Agency approaches, so that I can quickly understand the value proposition.

#### Acceptance Criteria

1. THE Comparison_Table SHALL display three columns: DIY, Agency, and Funnel Studio
2. THE Funnel Studio column SHALL have a background of rgba(74, 222, 128, 0.06), left and right borders of 1px solid rgba(74, 222, 128, 0.3), a 3px solid #4ade80 top accent bar, and the column header in green, bold, and larger font-size
3. THE DIY and Agency columns SHALL render text at opacity 0.45
4. THE Comparison_Table SHALL apply alternating row backgrounds of rgba(255,255,255,0.02)
5. THE Comparison_Table SHALL include a CTA row at the bottom of the table
6. WHEN the viewport width is below 768px, THE Comparison_Table SHALL collapse to a single-column card layout showing only the Funnel Studio column values

### Requirement 8: Pain Section Card Grid

**User Story:** As a visitor, I want the pain-point section to display as a 2x2 card grid with distinct visual accents, so that each pain point is easy to scan and visually separated.

#### Acceptance Criteria

1. THE SocialProof Section SHALL display Pain_Cards in a 2x2 grid layout with 24px gap
2. WHEN a Pain_Card is rendered, THE Pain_Card SHALL have 28px padding, a unique 32px emoji or icon, and a 4px solid rgba(74, 222, 128, 0.4) left border accent
3. THE Pain_Card title SHALL render at 18px font-size with font-weight 600

### Requirement 9: Benefit Cards Section

**User Story:** As a visitor, I want to see three benefit cards showing what changes after using Funnel Studio, so that I understand the positive outcomes.

#### Acceptance Criteria

1. THE Homepage SHALL include a Benefit_Card section displaying three cards in a full-width 3-column grid with 20px gap
2. WHEN a Benefit_Card is rendered, THE Benefit_Card SHALL have a background of rgba(255,255,255,0.04), a 1px solid rgba(255,255,255,0.08) border, 12px border-radius, and 32px padding
3. THE Benefit_Card icon SHALL render at 36px with 16px bottom margin
4. THE Benefit_Card headline SHALL render at 20px font-size with font-weight 700
5. WHEN a user hovers over a Benefit_Card, THE Benefit_Card SHALL transition border-color to rgba(74, 222, 128, 0.3) and translate upward by 2px with a 0.2s ease transition
6. WHEN the viewport width is below 768px, THE Benefit_Card section SHALL stack cards in a single column

### Requirement 10: Founder Story Section

**User Story:** As a visitor, I want to see a founder story section with a photo, blockquote, and attribution, so that the brand feels personal and trustworthy.

#### Acceptance Criteria

1. THE Homepage SHALL include a Founder_Story section displaying the founder photo, a blockquote, and a footnote attribution
2. THE founder photo SHALL render as a 120px diameter circle with a 3px solid #4ade80 ring border and a green box-shadow glow
3. THE blockquote SHALL render at 20px font-size, italic style, with a 4px solid #4ade80 left border, 24px left padding, and green text color
4. THE footnote below the blockquote SHALL render at 14px font-size with opacity 0.6

### Requirement 11: FAQ Section Redesign

**User Story:** As a visitor, I want the FAQ section displayed as a 2-column card grid with static question-answer pairs, so that I can scan common questions without interaction.

#### Acceptance Criteria

1. THE FAQ Section SHALL display FAQ_Cards in a 2-column grid layout
2. WHEN an FAQ_Card is rendered, THE FAQ_Card SHALL have 28px padding, 12px border-radius, and a 1px solid rgba(255,255,255,0.08) border
3. THE FAQ_Card question text SHALL render at 17px font-size with font-weight 700 and color #ffffff
4. THE FAQ_Card answer text SHALL render at 15px font-size with opacity 0.75 and line-height 1.7
5. THE FAQ Section Eyebrow_Label SHALL use the Reusable_Eyebrow_Class with green accent color
6. WHEN the viewport width is below 768px, THE FAQ Section SHALL collapse to a single-column layout

### Requirement 12: Pricing Block Redesign

**User Story:** As a visitor, I want the pricing section to display a single founding-member pricing block with clear discount treatment and trust signals, so that the offer is compelling and easy to understand.

#### Acceptance Criteria

1. THE Pricing_Block SHALL display a single pricing offer instead of the current three-plan card layout
2. THE Pricing_Block SHALL render the original "$97/mo" price with strikethrough styling at opacity 0.5 and 16px font-size
3. THE Pricing_Block SHALL display a "52% off" pill with background rgba(74,222,128,0.15), border-radius 4px, and padding 4px 10px
4. THE Pricing_Block checklist items SHALL have 12px gap, green checkmarks at 16px with flex-shrink 0
5. THE Pricing_Block trust badges SHALL render at 13px font-size separated by a middle-dot (·) character

### Requirement 13: Remove FinalCTA Duplication

**User Story:** As a visitor, I want the page to end at the pricing block and go straight to the footer, so that there is no redundant call-to-action that dilutes the closing message.

#### Acceptance Criteria

1. THE Homepage SHALL remove the FinalCTA_Component from the render order
2. THE Homepage render sequence SHALL end with the Pricing_Block followed directly by the Footer

### Requirement 14: Footer Refinements

**User Story:** As a visitor, I want the footer to have a branded tagline and a subtle top border, so that the page ending feels polished and on-brand.

#### Acceptance Criteria

1. THE Footer SHALL display the tagline "Stop Building. Start Launching." at 14px font-size, font-weight 500, and green color
2. THE Footer SHALL render a top border of 1px solid rgba(255,255,255,0.08)

### Requirement 15: Git Branch Workflow

**User Story:** As a developer, I want all homepage overhaul changes committed on a dedicated git branch, so that the main branch remains stable during the redesign.

#### Acceptance Criteria

1. WHEN work begins on the homepage overhaul, THE Developer SHALL create a new git branch separate from the main branch
2. THE Developer SHALL commit all homepage overhaul changes exclusively to the dedicated branch
3. IF a change is pushed directly to the main branch, THEN THE Developer SHALL revert the change and re-apply it to the dedicated branch
