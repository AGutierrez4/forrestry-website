# Requirements Document

## Introduction

Complete rebirth of the Forrestry.ai root homepage (`/`). The current homepage uses `company/` components that will be entirely replaced with new components in `src/components/homepage/`. The page repositions Forrestry.ai as a connected growth ecosystem (parent brand, green accent) with Funnel Studio as its flagship product (purple accent). Visual direction is HubSpot-inspired: light/white body sections, dark hero, clean cards with subtle borders, green CTAs. All user-facing copy must comply with the Copy Style Rules (no em dashes, no contrast framing, no value bloat).

## Glossary

- **Homepage**: The root page at `/` rendered by `src/pages/index.astro`
- **Navbar**: The global fixed navigation bar component
- **Products_Dropdown**: A dropdown menu within the Navbar listing ecosystem products
- **Hero_Section**: The dark-background introductory section at the top of the homepage
- **Pain_Section**: The light-background section describing entrepreneur pain points
- **Ecosystem_Section**: The section displaying the three product cards (Funnel Studio, AYA, BrandStory)
- **Workflow_Section**: The section illustrating the four-step Forrestry strategy path
- **Flagship_Section**: The Funnel Studio deep-dive teaser section
- **Founder_Section**: The section featuring the founder narrative and photo
- **Community_Section**: The section inviting users to join the Forrester community
- **Pricing_Section**: The section displaying the single $97/mo price and feature list
- **Final_CTA_Section**: The dark-background closing call-to-action section
- **CTA_Button**: A call-to-action button element styled with the green accent color
- **Coming_Soon_Card**: A product card with glassmorphism/grayscale effect indicating unreleased status
- **Copy_Style_Rules**: Mandatory writing constraints (no em dashes, no contrast framing, no value bloat)
- **Forrestry_Green**: The parent brand accent color (#4ade80)
- **Funnel_Studio_Purple**: The product accent color (#7C3AED)

## Requirements

### Requirement 1: Global Navigation with Products Dropdown

**User Story:** As a visitor, I want a navigation bar with a Products dropdown menu, so that I can discover and navigate to all ecosystem products from any section of the page.

#### Acceptance Criteria

1. THE Navbar SHALL display the Forrestry.ai logo (from `/public/logo.png`) in the top-left position linking to `/`
2. THE Navbar SHALL display navigation links for "Products", "Pricing", and "About"
3. WHEN a visitor hovers or clicks on "Products", THE Products_Dropdown SHALL display a menu containing "Funnel Studio", "AYA (Coming Soon)", and "BrandStory (Coming Soon)"
4. WHEN a visitor clicks "Funnel Studio" in the Products_Dropdown, THE Navbar SHALL navigate to `/funnel-studio`
5. WHEN a visitor clicks "AYA" or "BrandStory" in the Products_Dropdown, THE Navbar SHALL scroll to the Ecosystem_Section on the homepage
6. THE Navbar SHALL display a primary CTA_Button labeled "Get Access to Funnel Studio"
7. THE Navbar SHALL remain fixed at the top of the viewport during scroll
8. THE Navbar SHALL be responsive and collapse into a mobile hamburger menu on viewports below 768px

### Requirement 2: Dark Hero Section

**User Story:** As a visitor, I want to immediately understand what Forrestry.ai offers when I land on the homepage, so that I can decide whether to explore further.

#### Acceptance Criteria

1. THE Hero_Section SHALL render with a dark background using the existing dark theme palette
2. THE Hero_Section SHALL display the headline "Build Your Business on a Clear Path. Not a Pile of Disconnected Tools."
3. THE Hero_Section SHALL display a subheadline describing Forrestry.ai as the growth ecosystem for entrepreneurs
4. THE Hero_Section SHALL display a primary CTA_Button labeled "Get Access to Funnel Studio"
5. THE Hero_Section SHALL display a secondary CTA link labeled "See How the Ecosystem Works" that scrolls to the Ecosystem_Section
6. THE Hero_Section SHALL use Forrestry_Green (#4ade80) as the accent color for highlights and CTA buttons
7. THE Hero_Section SHALL include a visual element (interface mockup or system map) showing product connections
8. ALL copy within the Hero_Section SHALL comply with the Copy_Style_Rules

### Requirement 3: Pain Section ("The Digital Jungle")

**User Story:** As a visitor, I want to see that Forrestry.ai understands my struggles with disconnected tools, so that I feel confident the product addresses my real problems.

#### Acceptance Criteria

1. THE Pain_Section SHALL render with a light/white background
2. THE Pain_Section SHALL display the headline "The 'Digital Jungle' is real. We're here to help you navigate it."
3. THE Pain_Section SHALL display three pain cards with the titles "Technical Exhaustion", "Strategic Confusion", and "Fragmented Systems"
4. EACH pain card SHALL contain a descriptive body paragraph specific to that pain point
5. THE Pain_Section SHALL display a transition line: "Forrestry.ai was built to replace that chaos with a single, connected ecosystem."
6. THE Pain_Section SHALL use dark text on the light background for readability
7. ALL copy within the Pain_Section SHALL comply with the Copy_Style_Rules

### Requirement 4: Ecosystem Section (Product Suite)

**User Story:** As a visitor, I want to see all products in the Forrestry.ai ecosystem, so that I understand the full scope of what is available and what is coming.

#### Acceptance Criteria

1. THE Ecosystem_Section SHALL render with a light/white background
2. THE Ecosystem_Section SHALL display the headline "One Connected Ecosystem. Three Engines for Growth."
3. THE Ecosystem_Section SHALL display three product cards: Funnel Studio, AYA, and BrandStory
4. THE Funnel Studio card SHALL display the tag "THE CONVERSION ENGINE" and a CTA linking to `/funnel-studio`
5. THE AYA card SHALL display a "COMING SOON" tag and render with a glassmorphism/grayscale visual effect
6. THE BrandStory card SHALL display a "COMING SOON" tag and render with a glassmorphism/grayscale visual effect
7. THE Funnel Studio card SHALL be visually distinct from the Coming_Soon_Cards to indicate it is live and accessible
8. THE Ecosystem_Section SHALL have an HTML id attribute suitable for anchor navigation from the Navbar and Hero_Section

### Requirement 5: Strategy-First Workflow

**User Story:** As a visitor, I want to understand the step-by-step process Forrestry.ai uses, so that I can see how my ideas become a launched business.

#### Acceptance Criteria

1. THE Workflow_Section SHALL render with a light/white background
2. THE Workflow_Section SHALL display the headline "Strategy into Execution. The Forrestry Path."
3. THE Workflow_Section SHALL display four sequential steps: "The Brain Dump", "The Strategic Blueprint", "The Funnel Stack", and "Scale Authority"
4. EACH step SHALL include a title and a descriptive body paragraph
5. THE Workflow_Section SHALL visually communicate the sequential nature of the steps (numbered or connected layout)
6. ALL copy within the Workflow_Section SHALL comply with the Copy_Style_Rules

### Requirement 6: Flagship Deep-Dive (Funnel Studio Teaser)

**User Story:** As a visitor, I want a deeper look at what Funnel Studio offers, so that I can evaluate whether it solves my specific funnel-building challenges.

#### Acceptance Criteria

1. THE Flagship_Section SHALL render with a light/white background
2. THE Flagship_Section SHALL display the headline "Meet Funnel Studio: Where Your Vision Becomes a Reality."
3. THE Flagship_Section SHALL display three value pillars: "The Funnel Stack Builder", "Framework-Driven Copy", and "A Unified Voice"
4. EACH value pillar SHALL include a title and descriptive body paragraph
5. THE Flagship_Section SHALL display a CTA_Button labeled "Launch Your First Ecosystem with Funnel Studio ($97)"
6. ALL copy within the Flagship_Section SHALL comply with the Copy_Style_Rules

### Requirement 7: Founder's Narrative

**User Story:** As a visitor, I want to learn about the person behind Forrestry.ai, so that I can trust the product is built by someone with real expertise.

#### Acceptance Criteria

1. THE Founder_Section SHALL render with a light or slightly tinted background
2. THE Founder_Section SHALL display the headline "Built by a Marketing Professional Who's Been in the Trenches."
3. THE Founder_Section SHALL display the founder photo from `/public/founder.webp`
4. THE Founder_Section SHALL include copy referencing 7+ years of experience with global B2B brands and enterprise GTM systems
5. THE Founder_Section SHALL include a mission statement about giving entrepreneurs professional-grade platforms
6. ALL copy within the Founder_Section SHALL comply with the Copy_Style_Rules

### Requirement 8: Forrester Community

**User Story:** As a visitor, I want to know there is a community of like-minded entrepreneurs, so that I feel I am joining something larger than a solo tool purchase.

#### Acceptance Criteria

1. THE Community_Section SHALL render with a light/white background
2. THE Community_Section SHALL display the headline "Join the Community of Forresters."
3. THE Community_Section SHALL include copy about joining a network of entrepreneurs building real systems
4. ALL copy within the Community_Section SHALL comply with the Copy_Style_Rules

### Requirement 9: Pricing Section

**User Story:** As a visitor, I want to see clear, simple pricing with no gimmicks, so that I can make a purchase decision quickly.

#### Acceptance Criteria

1. THE Pricing_Section SHALL render with a light/white background
2. THE Pricing_Section SHALL display the headline "One Mission. One Ecosystem. One Clear Price."
3. THE Pricing_Section SHALL display a single price of $97/mo
4. THE Pricing_Section SHALL NOT display any strikethrough pricing, discount pills, or founding member pricing
5. THE Pricing_Section SHALL display an includes list: Full Access to Funnel Studio, Brain Dump Genius Extraction, Strategic Blueprint Generation, The 4-Page HTML Funnel Stack Builder, Full Conversion Asset Suite (Emails, Ads, Scripts)
6. THE Pricing_Section SHALL display a CTA_Button labeled "Get Access to Funnel Studio"
7. ALL copy within the Pricing_Section SHALL comply with the Copy_Style_Rules

### Requirement 10: Final CTA Section

**User Story:** As a visitor who has scrolled through the entire page, I want one last clear call to action, so that I can convert without scrolling back up.

#### Acceptance Criteria

1. THE Final_CTA_Section SHALL render with a dark background
2. THE Final_CTA_Section SHALL display the headline "Stop Wrestling with Tools. Start Building Your Legacy."
3. THE Final_CTA_Section SHALL display a subheadline about the path to revenue starting with clarity
4. THE Final_CTA_Section SHALL display a CTA_Button labeled "Start with Funnel Studio"
5. ALL copy within the Final_CTA_Section SHALL comply with the Copy_Style_Rules

### Requirement 11: Page Architecture and Component Structure

**User Story:** As a developer, I want the new homepage built with isolated components in a dedicated directory, so that the old components remain available for revert safety and the codebase stays organized.

#### Acceptance Criteria

1. THE Homepage SHALL create all new components in the `src/components/homepage/` directory
2. THE Homepage SHALL update `src/pages/index.astro` to import and render the new homepage components
3. THE Homepage SHALL NOT delete or modify existing `src/components/company/` components
4. THE Homepage SHALL render sections in this order: Navbar, Hero, Pain, Ecosystem, Workflow, Flagship, Founder, Community, Pricing, Final CTA, Footer
5. THE Homepage SHALL update the page meta title to focus on "Entrepreneurial Growth Ecosystem"
6. THE Homepage SHALL update the page meta description to reflect the ecosystem positioning

### Requirement 12: Visual Design System Compliance

**User Story:** As a visitor, I want a visually cohesive, professional page that feels modern and trustworthy, so that I am confident in the brand.

#### Acceptance Criteria

1. THE Homepage SHALL use a light/white background for body sections (Pain, Ecosystem, Workflow, Flagship, Founder, Community, Pricing)
2. THE Homepage SHALL use a dark background for the Hero_Section and Final_CTA_Section
3. THE Homepage SHALL use Forrestry_Green (#4ade80) for CTA buttons, highlights, and accent elements
4. THE Homepage SHALL use dark text on light backgrounds for body content readability
5. THE Homepage SHALL use clean card styles with subtle borders (HubSpot-inspired aesthetic)
6. THE Homepage SHALL be fully responsive across mobile (320px), tablet (768px), and desktop (1280px+) viewports
7. THE Homepage SHALL use the existing Inter font family and Tailwind CSS v4 utility classes

### Requirement 13: Pricing Consistency Site-Wide

**User Story:** As a business owner, I want all pricing references across the site to show $97/mo consistently, so that visitors see a single coherent price regardless of which page they land on.

#### Acceptance Criteria

1. THE Homepage SHALL display $97/mo as the only price for Funnel Studio access
2. THE Homepage SHALL NOT reference $47/mo founding member pricing anywhere
3. THE Homepage SHALL NOT display any strikethrough prices, discount badges, or limited-spot urgency messaging related to pricing

### Requirement 14: Accessibility and Performance

**User Story:** As a visitor on any device or assistive technology, I want the homepage to load quickly and be navigable, so that I can access the content regardless of my situation.

#### Acceptance Criteria

1. THE Homepage SHALL use semantic HTML elements (nav, main, section, header, footer) for page structure
2. THE Homepage SHALL provide alt text for all images (logo, founder photo, visual elements)
3. THE Homepage SHALL ensure all interactive elements are keyboard-navigable
4. THE Homepage SHALL maintain color contrast ratios of at least 4.5:1 for body text on all backgrounds
5. THE Homepage SHALL use Astro's `client:visible` directive for below-the-fold interactive components to optimize initial load
6. IF an image fails to load, THEN THE Homepage SHALL display appropriate alt text without layout shift
