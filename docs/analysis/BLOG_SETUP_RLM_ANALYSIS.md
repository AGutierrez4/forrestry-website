# Blog Setup RLM Analysis — Forrestry.ai Learning Center

**Purpose**: Comprehensive research and architecture plan for the Learning Center blog.  
**Status**: Research Complete — Awaiting Approval  
**Created**: May 1, 2026

---

## Problem Statement

The Learning Center blog needs a proper foundation before scaling content. Current state has basic functionality but lacks:
- Proper form styling (HubSpot embed renders in iframe, can't be styled)
- AEO/SEO optimization beyond basic Article schema
- Content taxonomy and filtering
- Featured snippet formatting
- AI engine discoverability (llms.txt, speakable, entity markup)
- Scalable design patterns for 50+ posts

---

## Phase 1: Design System — Blog Post Template

### Current Issues
- ✅ Charcoal content card (working)
- ✅ Hero image support (working)
- ✅ Typography system (working)
- ❌ HubSpot form renders as unstyled iframe
- ❌ No table of contents for long posts
- ❌ No "related posts" section
- ❌ No estimated reading time visible (added to template but needs verification)

### Recommended Blog Post Layout (top to bottom)

```
┌─────────────────────────────────────────────┐
│ Navbar                                       │
├─────────────────────────────────────────────┤
│ Breadcrumb: Learning Center > Category > Post│
├─────────────────────────────────────────────┤
│ Category Badge | Reading Time                │
│ H1: Post Title                               │
│ Description (lede paragraph)                 │
│ Author Card (avatar, name, date)             │
├─────────────────────────────────────────────┤
│ Hero Image (full-width, rounded)             │
├─────────────────────────────────────────────┤
│ ┌─────────────────────────────────────────┐ │
│ │ Content Card (charcoal bg)              │ │
│ │                                         │ │
│ │ TL;DR / Key Takeaway Box (for AEO)     │ │
│ │                                         │ │
│ │ Article Body                            │ │
│ │   - Proper H2/H3 hierarchy             │ │
│ │   - Styled lists, tables, blockquotes   │ │
│ │   - Subtle section dividers (not <hr>)  │ │
│ │                                         │ │
│ │ Lead Magnet Form (custom styled)        │ │
│ │   - Title + description                 │ │
│ │   - First Name + Email inputs           │ │
│ │   - "Download Now" CTA button           │ │
│ │   - Success state with download link    │ │
│ │                                         │ │
│ │ FAQ Section (with FAQ schema)           │ │
│ │                                         │ │
│ └─────────────────────────────────────────┘ │
├─────────────────────────────────────────────┤
│ Tags (clickable, link to filtered views)     │
├─────────────────────────────────────────────┤
│ Related Posts (2-3 cards)                     │
├─────────────────────────────────────────────┤
│ Bottom CTA Card                              │
├─────────────────────────────────────────────┤
│ Footer                                       │
└─────────────────────────────────────────────┘
```

### Typography Specifications (Dark Mode Best Practices)

Based on research from multiple sources on dark mode readability:

| Element | Size | Weight | Color | Line Height |
|---------|------|--------|-------|-------------|
| H1 (title) | clamp(1.75rem, 4.5vw, 2.75rem) | 800 | #FFFFFF | 1.15 |
| H2 | 1.625rem | 800 | #FFFFFF | 1.25 |
| H3 | 1.3rem | 700 | #FFFFFF | 1.3 |
| Body | 1.0625rem | 400 | rgba(255,255,255,0.75) | 1.8 |
| Lede | 1.15rem | 400 | rgba(255,255,255,0.85) | 1.75 |
| Muted/meta | 0.875rem | 400 | rgba(255,255,255,0.5) | 1.5 |

- **Line length**: 65-75 characters (720px max-width achieves this)
- **Paragraph spacing**: 1.5rem between paragraphs
- **Section spacing**: 3.5rem before H2, 2.5rem before H3
- **Contrast ratio**: Body text at rgba(255,255,255,0.75) on #111111 = ~11:1 (exceeds WCAG AAA)

---

## Phase 2: Form Implementation (The Right Way)

### Approach: Custom HTML Form → HubSpot Forms API

Same pattern as the masterclass page. No embed script. No iframe. Full styling control.

**Architecture:**
1. Form component lives in the **Astro template** (not in markdown)
2. Template detects if post has a `leadMagnet` frontmatter field
3. If present, renders the custom form at the appropriate position
4. Form submits via `fetch()` to HubSpot Forms API
5. Success state shows resource name + download button

**Frontmatter schema addition:**
```yaml
leadMagnet:
  title: "Funnel Content Audit Checklist"
  description: "An interactive worksheet that walks you through..."
  buttonText: "Download Now"
  downloadUrl: "/path-to-file.pdf"  # or HubSpot file URL
```

**Why template-level, not markdown-level:**
- Keeps `.md` files as plain markdown (no MDX conversion needed)
- Single source of truth for form styling
- Easier to update form ID or styling across all posts
- Avoids the MDX/Tailwind CSS pipeline conflict that broke the site

**Form placement logic:**
- Rendered AFTER the `<Content />` block but BEFORE the bottom CTA
- Sits inside the charcoal content card for visual consistency
- OR: placed between content and FAQ using a markdown split marker (e.g., `<!-- lead-magnet -->`)

**Recommended: Simplest safe approach** — render the form after all content, inside the card. The FAQ is part of the content anyway, so the flow becomes: Article → FAQ → Form → Bottom CTA. This matches user intent (they've read the value, now they're ready to convert).

---

## Phase 3: SEO Infrastructure

### 3.1 Schema Markup (JSON-LD) — Per Post

**Currently implemented:**
- ✅ Article schema (headline, author, publisher, datePublished, description)

**Needs to be added:**

#### FAQ Schema
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How long does it take to fix a non-converting funnel?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It depends on how many of the seven problems apply..."
      }
    }
  ]
}
```
- Extracted from a `faq` frontmatter array (structured data, not parsed from markdown)
- Renders as rich result accordion in Google SERPs
- Content with FAQ schema is 3x more likely to be cited by AI systems

#### BreadcrumbList Schema
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.forrestry.ai/" },
    { "@type": "ListItem", "position": 2, "name": "Learning Center", "item": "https://www.forrestry.ai/learning-center/" },
    { "@type": "ListItem", "position": 3, "name": "Post Title" }
  ]
}
```

#### Speakable Schema (for voice/AI assistants)
```json
{
  "@type": "SpeakableSpecification",
  "cssSelector": ["h1", "[data-speakable]"]
}
```
Added as a property within the Article schema. Marks which content is suitable for text-to-speech / AI voice answers.

#### Enhanced Article Schema (missing fields)
- `image` with `ImageObject` (width: 1200, height: 630) — required for rich results
- `dateModified` — freshness signal
- `wordCount` — helps AI systems assess depth
- `author.sameAs` — links to social profiles for E-E-A-T
- `publisher.logo` with ImageObject

### 3.2 Meta Tags (Per Post)

**Currently implemented:**
- ✅ `<title>`, `<meta description>`, canonical URL
- ✅ Open Graph (og:title, og:description, og:image, og:url, og:type)
- ✅ Twitter Card (summary_large_image)

**Needs to be added:**
- `article:published_time` — OG article extension
- `article:modified_time` — freshness signal
- `article:author` — links to author page
- `article:section` — category
- `article:tag` — tags array
- `og:image:width` and `og:image:height` — required for proper rendering

### 3.3 Sitemap

- ✅ Already auto-generated by `@astrojs/sitemap`
- Consider adding `lastmod` dates per post (from `dateModified` frontmatter)

---

## Phase 4: AEO (AI Engine Optimization)

### 4.1 Content Structure for AI Extraction

AI answer engines (ChatGPT, Claude, Perplexity, Google AI Overviews) extract content based on:

1. **Direct answer in first paragraph** (40-60 words, definition format)
2. **Question-style H2/H3 headings** that match search queries
3. **Concise answer immediately after the heading** (before elaboration)
4. **Lists and tables** (easier to extract than prose)
5. **FAQ sections** with clear Q&A format

**Recommendation: Add a "TL;DR" or "Key Takeaway" box** at the top of each post:
```yaml
# Frontmatter
tldr: "Most funnel conversion problems are content problems, not traffic or tech problems. The 7 most common issues are messaging inconsistency, weak webinar scripts, unqualified registration pages, informational emails, feature-focused sales copy, no traffic-temperature awareness, and building without a unified strategy."
```

This gets rendered as a styled callout box with `data-speakable` attribute, making it the primary extraction target for AI engines.

### 4.2 llms.txt File

A markdown file at the site root that tells AI crawlers what the site is about and where key content lives:

```markdown
# Forrestry.ai

> Funnel Studio by forrestry.ai turns one conversation into a complete funnel ecosystem. AI-powered funnel content generation using proven frameworks from Brunson, Edwards, Cardone, Miller, Sheridan, and Voss.

## Learning Center
- [Why Is My Funnel Not Converting?](https://www.forrestry.ai/learning-center/why-is-my-funnel-not-converting): The 7 content problems that kill funnels before traffic gets a chance to convert.
- [How Much Does It Cost to Build a Funnel?](https://www.forrestry.ai/learning-center/how-much-does-it-cost-to-build-a-funnel): Real 2026 pricing for DIY, copywriter, agency, and AI tool paths.

## Product
- [Funnel Studio](https://www.forrestry.ai/funnel-studio): AI-powered funnel content generation platform.
- [Pricing](https://www.forrestry.ai/pricing): Founders pricing at $47/mo.

## Company
- [About](https://www.forrestry.ai/about): Founded by Andrew Gutierrez, 7 years B2B marketing experience.
```

This should be auto-generated at build time from the content collection.

### 4.3 robots.txt Update

Current robots.txt needs AI crawler allowlists:

```
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: ChatGPT-User
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: OAI-SearchBot
Allow: /

User-agent: Amazonbot
Allow: /

User-agent: cohere-ai
Allow: /

User-agent: Bytespider
Allow: /

Sitemap: https://www.forrestry.ai/sitemap-index.xml
```

### 4.4 Featured Snippet Optimization

For each post section that answers a question:
- H2/H3 should be phrased as the question users search
- First paragraph after the heading should be a direct 40-60 word answer
- Follow with elaboration, lists, or tables
- This pattern wins both featured snippets AND AI Overview citations

**Example (current):**
```markdown
## 1. Your Funnel Pages Are Saying Different Things

This is the most common content problem in funnels...
```

**Optimized for snippets:**
```markdown
## Why Are My Funnel Pages Not Converting?

Funnel pages fail to convert when each page delivers a different message. This messaging inconsistency happens because pages are built at different times using different templates, creating micro-disconnects that erode trust as prospects move through the funnel.

Here's what it looks like in practice...
```

---

## Phase 5: Taxonomy & Content Architecture

### 5.1 Category Structure

Categories represent broad content pillars. Each post gets ONE category. Based on the content matrix:

| Category | URL | Description |
|----------|-----|-------------|
| Problems | `/learning-center/category/problems` | Diagnosing funnel issues |
| Pricing & Costs | `/learning-center/category/pricing-costs` | Cost breakdowns, ROI |
| Strategy | `/learning-center/category/strategy` | Funnel architecture, frameworks |
| Tools & Tech | `/learning-center/category/tools-tech` | Platform comparisons, setup |
| Launch Playbooks | `/learning-center/category/launch-playbooks` | Step-by-step guides |

**Why limit categories:** Search engines treat category pages as topical authority signals. Too many categories dilute authority. 5-7 is the sweet spot for a blog with 10-50 posts.

### 5.2 Tag Strategy

Tags are cross-cutting topics. A post can have multiple tags. Tags create internal linking clusters.

**Recommended tags (from existing posts):**
- `funnel-strategy`
- `conversion`
- `diagnostics`
- `content-marketing`
- `pricing`
- `cost-comparison`
- `ai-tools`
- `copywriting`
- `webinar`
- `email-sequence`

**Rules:**
- Tags should be reused across 3+ posts (orphan tags hurt more than help)
- Keep to 3-5 tags per post
- Use kebab-case, lowercase
- Tags get their own pages: `/learning-center/tag/funnel-strategy`

### 5.3 URL Structure

Current: `/learning-center/[slug]` ✅ (flat, clean, no dates)

**Keep this.** Flat URLs are better for blogs under 200 posts. No `/2026/05/` date prefixes (they make URLs longer and imply content expires).

### 5.4 Index Page Enhancements

As content scales, the index page needs:
- **Category filter tabs** (All | Problems | Strategy | Pricing | Tools | Playbooks)
- **Tag cloud or filter** (secondary filtering)
- **Pagination** (once past 9-12 posts)
- **Featured/pinned post** (hero card at top)
- **Search** (Pagefind integration for 20+ posts)

### 5.5 Related Posts

At the bottom of each post, show 2-3 related posts based on:
1. Same category (primary signal)
2. Shared tags (secondary signal)
3. Manual override via frontmatter `relatedPosts: [slug1, slug2]`

---

## Phase 6: Performance & Core Web Vitals

### Image Optimization
- Hero images should be served as WebP (convert PNGs at build time or use Astro's `<Image>` component)
- Set explicit `width` and `height` to prevent CLS
- Lazy load all images except the hero (which should be `loading="eager"`)
- Consider moving images from `public/` to `src/assets/` for Astro's image pipeline

### Font Loading
- Already using `preconnect` for Google Fonts ✅
- Consider `font-display: swap` (already default with Google Fonts URL)

### JavaScript
- Blog posts are static HTML — minimal JS needed
- Form component hydrates on visibility (`client:visible`) — good
- Navbar hydrates on load (`client:load`) — acceptable for nav

---

## Phase 7: Updated Content Schema (Frontmatter)

```yaml
---
title: "Post Title"
description: "Meta description, 150-160 chars"
publishDate: 2026-05-01
updatedDate: 2026-05-15          # NEW — for dateModified schema + freshness
author: "Andrew Gutierrez"
category: "Problems"
tags: ["funnel-strategy", "conversion"]
draft: false
heroImage: "/path-to-hero.png"
heroImageAlt: "Description of image"  # NEW — accessibility
tldr: "One paragraph summary..."      # NEW — for AEO extraction box
leadMagnet:                            # NEW — for custom form
  title: "Resource Name"
  description: "What they get"
  buttonText: "Download Now"
  downloadUrl: "https://..."
faq:                                   # NEW — for FAQ schema
  - question: "How long does it take?"
    answer: "It depends on..."
  - question: "Should I start over?"
    answer: "If your offer has been validated..."
relatedPosts: []                       # NEW — manual override for related
---
```

---

## Phase 8: Implementation Priority (Recommended Order)

### Sprint 1: Fix the Form (Immediate)
1. Build `BlogLeadForm` component at the **template level** (not MDX)
2. Add `leadMagnet` field to content schema
3. Render form after content, inside the card
4. Need: download URLs from you

### Sprint 2: AEO & Schema (High Impact)
1. Add FAQ schema (JSON-LD) — extracted from `faq` frontmatter
2. Add BreadcrumbList schema
3. Enhance Article schema (image object, dateModified, wordCount, speakable)
4. Add `article:*` OG meta tags
5. Create `robots.txt` with AI crawler allowlist
6. Create `llms.txt` (auto-generated at build time)

### Sprint 3: Content Structure (Medium Impact)
1. Add `tldr` frontmatter field + styled callout box
2. Add `updatedDate` support + "Updated" display
3. Add related posts section
4. Add tag display at bottom of posts

### Sprint 4: Taxonomy Pages (Scale Prep)
1. Category filter on index page
2. Category pages (`/learning-center/category/[slug]`)
3. Tag pages (`/learning-center/tag/[slug]`)
4. Pagination (when needed)

### Sprint 5: Performance (Polish)
1. Move hero images to `src/assets/` for Astro image pipeline (WebP, srcset)
2. Add Pagefind search (when 10+ posts)
3. OG image generation (dynamic per-post)

---

## Reminders for You

- [ ] **Provide download URLs** for lead magnet files (Post #1: Funnel Content Audit Checklist, Post #2: Funnel Build Cost Calculator)
- [ ] **Provide AEO implementation docs** if you have them (for any additional requirements beyond what's covered here)
- [ ] **Confirm category structure** — are the 5 categories above correct for your content matrix?
- [ ] **Confirm FAQ data** — should I extract FAQ Q&As from the existing markdown into structured frontmatter, or will you provide them separately?

---

## Sources

- [Astro SEO Checklist 2026 — Neciu Dan](https://neciudan.dev/astro-seo-checklist-2026) (comprehensive Astro-specific SEO implementation)
- [AEO Best Practices — seedapp.io](https://www.seedapp.io/blog/aeo-checklist-2026) (40-step AEO checklist)
- [Technical AEO Optimization — Stackmatix](https://www.stackmatix.com/blog/technical-aeo-optimization) (schema implementation for AI)
- [Featured Snippets in AI Overview Era — Digital Applied](https://www.digitalapplied.com/blog/featured-snippets-ai-overview-era-optimization-2026)
- [llms.txt Specification — GitHub](https://github.com/AnswerDotAI/llms-txt)
- [Blog Taxonomy SEO — OnwardSEO](https://onwardseo.com/guide-use-blog-categories-tags-strategically-for-seo-benefits/)
- [Dark Mode Typography — moldstud.com](https://moldstud.com/articles/p-best-practices-for-typography-in-dark-mode-interfaces-enhance-readability-user-experience)

---

*This document will be updated as decisions are made. No code changes until approved.*
