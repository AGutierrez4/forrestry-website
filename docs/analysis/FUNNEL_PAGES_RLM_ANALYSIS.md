# Funnel Pages Build — RLM Analysis

**Objective**: Build 4 funnel pages as React components integrated into the existing forrestry.ai marketing site, restyled to match the forrestry.ai brand system while mirroring the layout/structure of the Russell Brunson reference screenshots.

---

## Phase 1: Understanding the Full Picture

### What We're Building

| # | Page | Route | Purpose | Reference Layout |
|---|---|---|---|---|
| 1 | Registration/Squeeze | `/masterclass` | Capture leads for free masterclass | Long-form squeeze with hero, video, bullets, story, testimonials, FAQ, form |
| 2 | VIP Upsell | `/masterclass/vip` | Post-registration upsell ($47 VIP) | Progress bar, video, pain copy, value stack, pricing card, guarantee, dual CTA |
| 3 | Thank You/Confirmed | `/masterclass/confirmed` | Post-registration confirmation + indoctrination | Video + copy, 3 action steps, calendar/community, bonus/affiliate, pain vs relief, soft pitch |
| 4 | Strategy Session | `/masterclass/strategy` | Downsell/upsell for 1-on-1 session ($297) | Warning bar, video, pain copy, solution, value stack, testimonials, guarantee, dual CTA |

### Brand Mapping (Original → forrestry.ai)

| Original HTML | forrestry.ai Brand |
|---|---|
| `bg-gray-50` (light bg) | `bg-bg` (#09090B dark) — we're flipping to dark theme |
| `bg-gray-900` (dark sections) | `bg-card-bg` (#111111) or `bg-bg` (#09090B) |
| `text-red-600` (accent/urgency) | `text-green` (#4ADE80) for primary accent |
| `text-yellow-400` (highlights) | `text-green-bright` (#00FF85) for highlights |
| `bg-red-600` (CTA buttons) | `bg-green` (#4ADE80) with `text-black` |
| `border-red-600` (borders) | `border-green/40` or `border-green` |
| `bg-indigo-600` (confirmation page) | `bg-green` or `bg-purple` (#7C3AED) |
| `text-gray-700` (body text) | `text-muted` (#A1A1AA) or `text-white/70` |
| White cards on light bg | `bg-card-bg` (#111111) cards on dark bg |
| `shadow-2xl` on white | Subtle glow shadows: `shadow-[0_0_40px_rgba(74,222,128,0.1)]` |

### Key Design Decisions

1. **Dark theme throughout** — All 4 pages use the forrestry.ai dark theme, not the light theme from the HTML. This matches the main site and feels premium.

2. **Green replaces red as the primary accent** — All urgency elements, CTAs, highlights, and borders shift from red to green. Red is used sparingly for warning/urgency elements only (e.g., the "WAIT!" bar on upsell pages).

3. **No site navbar on funnel pages** — Standard funnel practice. No navigation distractions. Just the page content + minimal footer.

4. **Minimal footer** — Copyright, Terms, Privacy links. No full site footer.

5. **Progress bars** — Pages 2-3 have progress bars. Keep them but restyle to brand.

6. **Video placeholders** — Dark containers with play button icon and placeholder text. Same pattern as existing LazyVideo style.

7. **Forms** — UI only. No backend wiring. Placeholder action.

8. **"No thanks" links** — Style as subtle muted text links, not aggressive.

---

## Phase 2: Architecture

### File Structure

```
src/pages/funnel/
├── MasterclassRegister.tsx    (Page 1 — Squeeze)
├── MasterclassVIP.tsx         (Page 2 — VIP Upsell)
├── MasterclassConfirmed.tsx   (Page 3 — Thank You)
└── MasterclassStrategy.tsx    (Page 4 — Strategy Session)
```

### Routing (App.tsx changes)

```tsx
// Add lazy imports
const MasterclassRegister = lazy(() => import('./pages/funnel/MasterclassRegister'))
const MasterclassVIP = lazy(() => import('./pages/funnel/MasterclassVIP'))
const MasterclassConfirmed = lazy(() => import('./pages/funnel/MasterclassConfirmed'))
const MasterclassStrategy = lazy(() => import('./pages/funnel/MasterclassStrategy'))

// Add routes
<Route path="/masterclass" element={<MasterclassRegister />} />
<Route path="/masterclass/vip" element={<MasterclassVIP />} />
<Route path="/masterclass/confirmed" element={<MasterclassConfirmed />} />
<Route path="/masterclass/strategy" element={<MasterclassStrategy />} />
```

### Vercel Config

No changes needed — the existing catch-all rewrite `"/(.*)" → "/index.html"` handles all client-side routes.

### Shared Components

Consider extracting if reuse is significant:
- `FunnelFooter` — minimal footer for funnel pages
- `VideoPlaceholder` — reusable video placeholder with play button
- `ProgressBar` — step progress indicator

However, to keep things simple and avoid over-engineering for 4 pages, I'll inline these. We can extract later if needed.

---

## Phase 3: Page 1 Execution Plan (Registration/Squeeze)

### Section Breakdown (top to bottom)

1. **Hero**
   - Pre-headline badge (green pill)
   - Main headline (white + green gradient text)
   - Sub-headline
   - Subheadline paragraph
   - Video placeholder (dark container, play icon)
   - CTA button (green, 3D shadow effect) → scrolls to #register
   - Security text below CTA

2. **What You'll Discover**
   - Dark section (bg-bg or bg-card-bg)
   - Section headline
   - 2-column grid of bullet points with ❌/🔥 icons
   - CTA button at bottom

3. **Who This Is For**
   - Checklist with green checkmarks
   - Card-style container

4. **Authority/Origin Story**
   - Founder image placeholder (circle) + bio text
   - Side-by-side layout on desktop, stacked on mobile

5. **Social Proof**
   - 3 testimonial cards with star ratings
   - Placeholder avatar circles

6. **3 Secrets Revealed**
   - Green/dark section (brand highlight section)
   - 3 secret blocks with ⚡ bullet points
   - CTA button

7. **FAQ**
   - Expandable or static Q&A blocks

8. **Final CTA / Registration Form**
   - Dark section with urgency headline
   - Registration form (name + email + button)
   - Security/spam disclaimer

9. **Footer**
   - Minimal: copyright + terms/privacy links

### Styling Notes

- All sections flow dark → slightly different dark → dark (varying between bg, bg-elevated, card-bg)
- Green accent for all interactive elements
- 3D button effect: `shadow-[0_6px_0_0_#166534]` with hover translate
- Cards: `bg-card-bg border border-card-border rounded-2xl`
- Max width: `max-w-5xl` for content sections (matches HTML)
- Typography: existing Inter font, same weight classes

### Media Needed (will use placeholders)

- [ ] Hero video (16:9 aspect ratio)
- [ ] Founder headshot (circular)
- [ ] 3 testimonial avatars

### Risk Assessment

| Risk | Likelihood | Mitigation |
|---|---|---|
| Page is very long, mobile perf | Medium | No blur effects on mobile (proven fix), no FadeUp on above-fold, lazy sections for below-fold |
| Dark-on-dark readability | Low | Use muted/70 for body text, white for headlines, green for accents |
| CTA buttons not standing out | Low | Green on dark bg has strong contrast, 3D shadow makes them pop |
| Form has no backend | Expected | UI-only, clearly labeled as placeholder |

---

## Phase 4: Execution Order

### Page 1 Build Steps (in order)

1. Create `src/pages/funnel/MasterclassRegister.tsx`
2. Build Hero section (pre-headline, headline, video placeholder, CTA)
3. Build "What You'll Discover" section (2-column bullets)
4. Build "Who This Is For" section (checklist)
5. Build Authority/Origin Story section
6. Build Social Proof section (3 testimonials)
7. Build 3 Secrets section
8. Build FAQ section
9. Build Final CTA with registration form
10. Build minimal footer
11. Add route to App.tsx
12. Verify build + diagnostics
13. Commit and push
14. Present for review

### Performance Considerations

- Lazy-load the route (already planned via `lazy()`)
- No blur effects (funnel pages don't need ambient glows)
- No FadeUp animations (funnel pages should paint instantly — we learned this lesson)
- Simple, fast-rendering components

---

## Summary

Building 4 funnel pages as React routes inside the existing app. Dark theme, green accents, no navbar, minimal footer. Starting with Page 1 (Registration/Squeeze). Each page built and reviewed before moving to the next. No blur effects, no FadeUp — instant paint for conversion optimization.
