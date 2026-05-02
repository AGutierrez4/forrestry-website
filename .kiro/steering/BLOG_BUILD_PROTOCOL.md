---
inclusion: manual
---

# Blog Build Protocol — Forrestry.ai Learning Center

**Purpose**: Mandatory reference for building and publishing blog posts on the Learning Center.  
**Last Updated**: May 1, 2026

---

## Architecture

- **Framework**: Astro + Vercel (static output)
- **URL pattern**: `/learning-center/[slug]` where slug = markdown filename without `.md`
- **Content directory**: `src/content/blog/`
- **Template**: `src/pages/learning-center/[...id].astro`
- **Index page**: `src/pages/learning-center/index.astro`
- **Content schema**: `src/content.config.ts`
- **Typography styles**: `src/styles/globals.css` (`.article-content` class)
- **Form component**: `src/components/BlogLeadForm.tsx`
- **Implementation docs**: `.kiro/docs/Post-XX-*.md`

---

## Critical Rules

1. **Posts MUST be `.md` files** — do NOT convert to `.mdx`. MDX broke the Tailwind CSS pipeline on Vercel and took down the entire site's styling.
2. **Always commit AND push** — Vercel builds from git. Uncommitted files won't deploy.
3. **Hero images go in `/public/`** — naming convention: `[slug]-hero-image.png`
4. **The lead magnet form lives in the Astro template**, not in the markdown. It renders automatically when the `leadMagnet` frontmatter field is present.
5. **Do NOT use the HubSpot embed script** (`js.hsforms.net/forms/embed/...`). It renders in an unstyled iframe. Use the custom `BlogLeadForm` component which submits to HubSpot Forms API directly.
6. **FAQ data goes in frontmatter**, not parsed from markdown. The template auto-generates FAQPage JSON-LD schema from the `faq` array.

---

## Frontmatter Schema

Every blog post MUST include this frontmatter structure:

```yaml
---
title: "Post Title — SEO optimized, 50-60 chars ideal"
description: "Meta description, 150-160 chars. Factual, keyword-rich."
publishDate: 2026-05-01
author: "Andrew Gutierrez"
category: "Category Name"
tags: ["tag-1", "tag-2", "tag-3"]
heroImage: "/slug-hero-image.png"
leadMagnet:
  title: "Resource Name (plain English, not a filename)"
  description: "One sentence describing what they get and why it's valuable."
  buttonText: "Download Now"
  downloadUrl: "https://direct-link-to-file"
faq:
  - question: "Question text exactly as it should appear in Google rich results"
    answer: "Self-contained answer. No markdown. Written to function as a standalone response when extracted by AI search engines."
  - question: "Next question"
    answer: "Next answer"
---
```

**Optional fields:**
- `draft: true` — hides from index page (still builds the page)
- `tags` defaults to `[]` if omitted
- `author` defaults to "Andrew Gutierrez" if omitted
- `leadMagnet` — omit entirely if no lead magnet for this post
- `faq` — omit entirely if no FAQ section

---

## Categories (Confirmed)

| Category | Description |
|----------|-------------|
| Problems | Diagnosing funnel issues (Big 5) |
| Pricing & Costs | Cost breakdowns, ROI analysis (Big 5) |
| Strategy | Funnel architecture, frameworks |
| Tools & Tech | Platform comparisons, setup guides |
| Launch Playbooks | Step-by-step implementation guides |

Each post gets ONE category.

---

## Schema (JSON-LD) — Auto-Generated

The template automatically injects these into `<head>` from frontmatter data:

1. **Article schema** — headline, author (Person), publisher (Organization), datePublished, description, ImageObject, wordCount, mainEntityOfPage
2. **FAQPage schema** — generated from `faq` frontmatter array (only if present)
3. **BreadcrumbList schema** — Home > Learning Center > Post Title

No manual schema work needed per post. Just fill in the frontmatter correctly.

---

## Lead Magnet Form

- **Component**: `src/components/BlogLeadForm.tsx`
- **HubSpot Portal**: `51365645`
- **HubSpot Form ID**: `60359e57-471c-44c1-9a92-b84b72c7b157`
- **Fields collected**: `firstname`, `email`
- **Rendered**: Inside the charcoal content card, after `<Content />`, before bottom CTA
- **Trigger**: Automatically renders when `leadMagnet` frontmatter field exists
- **Success state**: "Success! Here is your [title]." + subtext about follow-up emails + download button linking to `downloadUrl`
- **Styling**: White inputs, green button with 3D shadow (matches masterclass form aesthetic)

---

## Blog Post Template Layout (top to bottom)

```
Navbar
Breadcrumb (← Learning Center)
Category Badge | Reading Time
H1: Title
Description (lede)
Author Card (avatar, name, date)
Hero Image (full-width, rounded, border)
┌─ Charcoal Content Card (#111111) ─────────────┐
│ Article Body (markdown content)                 │
│ Lead Magnet Form (if leadMagnet in frontmatter) │
└─────────────────────────────────────────────────┘
Bottom CTA Card (Founders Spot)
Footer
```

---

## AEO Optimization Checklist (Per Post)

From the implementation docs, each post should include:

- [ ] **FAQ schema** — structured `faq` array in frontmatter with self-contained answers
- [ ] **Zero-click value** — content structured so AI engines can extract direct answers (consistent section format: description → explanation → "how to spot it")
- [ ] **Internal linking** — bidirectional links to related posts in the content matrix
- [ ] **Hero image** — with descriptive alt text (auto-set to title in template)
- [ ] **First paragraph** — direct answer format (40-60 words) for featured snippet eligibility

---

## File Checklist for Publishing a New Post

1. [ ] Create `src/content/blog/[slug].md` with full frontmatter
2. [ ] Add hero image to `public/[slug]-hero-image.png`
3. [ ] Store implementation doc in `.kiro/docs/Post-XX-[Name].md`
4. [ ] Verify internal links to/from existing posts
5. [ ] Run `npm run build` locally — confirm no errors
6. [ ] `git add` all new files (markdown, image, docs)
7. [ ] `git commit` with descriptive message
8. [ ] `git push` to main
9. [ ] Verify on live site after Vercel deploys (~2 min)
10. [ ] Validate schema at https://search.google.com/test/rich-results

---

## Published Posts

| # | Slug | Category | Lead Magnet |
|---|------|----------|-------------|
| 1 | `why-is-my-funnel-not-converting` | Problems | Funnel Content Audit Checklist |
| 2 | `how-much-does-it-cost-to-build-a-funnel` | Pricing & Costs | Funnel Build Cost Calculator |

---

## Remaining Blog Infrastructure (from BLOG_SETUP_RLM_ANALYSIS.md)

- [ ] Sprint 2: robots.txt with AI crawlers, llms.txt, TL;DR callout boxes, updatedDate support
- [ ] Sprint 3: Related posts section, tag display, category filter on index
- [ ] Sprint 4: Category/tag pages, pagination
- [ ] Sprint 5: Image optimization (Astro pipeline), Pagefind search
