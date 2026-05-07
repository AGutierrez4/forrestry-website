# Mobile Performance — RLM Analysis

**Problem Statement**: Mobile page load is ~13 seconds for below-fold content (hero is instant after commit `2b0d70d`). Desktop is fast. Need to identify the true root cause and fix it properly.

**Current State**: Commit `7a6c0d3` — hero has no FadeUp (instant paint), all below-fold sections use FadeUp, font weights trimmed to 4.

---

## Phase 1: What We Know (Empirical Evidence)

### Experiments Run and Results

| Experiment | Hero Time | Rest of Page | Verdict |
|---|---|---|---|
| Baseline (before any changes) | ~20s blank | 20s+ total | Terrible |
| Remove FadeUp from hero only (`2b0d70d`) | Instant | ~13s | Hero fixed, rest still slow |
| Remove FadeUp from ALL sections (`8c696cf`) | ~3s (regressed!) | ~18.5s (worse!) | Made everything worse |
| Disable videos on mobile (placeholder) | N/A | No improvement | Videos not the bottleneck |

### Key Insight from Experiment 3
Removing FadeUp from all sections made things WORSE. This is the critical clue. FadeUp's `opacity: 0` initial state was actually acting as a rendering optimization — the browser could skip painting invisible elements. When we made everything visible immediately, the browser had to layout + paint the entire page at once, which overwhelmed the mobile CPU.

### What This Tells Us
1. The problem is NOT the FadeUp animation logic itself
2. The problem is NOT video payload (proven by mobile disable test)
3. The problem IS that React is mounting too many components simultaneously on initial render
4. FadeUp was accidentally helping by hiding content (reducing paint cost), but the components were still fully mounted in the DOM

---

## Phase 2: Root Cause Analysis

### The Real Loading Chain on Mobile

```
1. Browser fetches index.html (empty div#root)           ~100ms
2. Browser fetches + parses index-DDlXkqQ4.js (83KB gz)  ~500-1500ms on 4G
3. Browser fetches + parses index-D3vzT1bK.css (7KB gz)  ~200ms
4. React boots, renders App → Company                     ~200ms
5. Company mounts ALL 11 child components simultaneously  ← BOTTLENECK
6. Each component creates DOM nodes, sets up observers    ← BOTTLENECK
7. Google Fonts fetched (4 weights of Inter)              ~300-800ms
8. Videos start lazy-loading as user scrolls              (not blocking)
```

### Why Step 5-6 is the Bottleneck

The `Company` page eagerly imports and mounts:
- Navbar (with lucide-react icons — tree-shaken but still imported)
- CompanyHero (no FadeUp — instant)
- StudioBento (7 feature rows × video elements × FadeUp observers)
- EfficiencyTable (10-row table × FadeUp observers)
- Benefits (3 cards × FadeUp observers)
- Problem (4 cards × FadeUp observers)
- Founder (image + FadeUp observers)
- Objections (4 cards × FadeUp observers)
- FoundersPricing (pricing card + trust badges × FadeUp observers)
- CompanyCTA (FadeUp observers)
- Footer

That's ~30+ IntersectionObserver instances created on mount, plus all the DOM nodes for every section. On a mid-range mobile CPU, this is expensive.

### Why Removing FadeUp Made It Worse

Without FadeUp:
- All content is visible immediately → browser must layout + paint everything
- No IntersectionObserver overhead, BUT full paint cost is front-loaded
- Mobile GPU/CPU chokes on painting the entire long page at once

With FadeUp:
- Content starts at `opacity: 0` → browser can skip painting invisible elements
- IntersectionObserver adds JS overhead, but reduces paint cost
- Net effect: slightly better because paint is the bigger bottleneck on mobile

### The Real Fix: Don't Mount What's Not Visible

The previous `LazySection` approach (commit `6c988f3`) was the right idea but was reverted because it caused "choppy scrolling on desktop" (commit `9c29102`). The choppiness was likely caused by:
1. `minHeight: 100px` placeholder being too small → content shift when sections mount
2. `rootMargin: 400px` being too small for fast desktop scrolling → visible pop-in

---

## Phase 3: Solution Design

### Approach: Improved LazySection with Better UX

The core idea is correct — don't mount below-fold components until they're near the viewport. But we need to fix the two problems that caused the previous revert:

1. **Better placeholder sizing**: Use realistic min-heights per section instead of a generic 100px
2. **Larger rootMargin**: Use 600-800px so sections mount well before they scroll into view, eliminating pop-in on desktop

### What Changes

**Company.tsx** — Wrap below-fold sections in LazySection:
```tsx
<main>
  <CompanyHero />                          {/* Eager — above the fold */}
  <LazySection minHeight={1800}>           {/* StudioBento is very tall */}
    <StudioBento />
  </LazySection>
  <LazySection minHeight={600}>
    <EfficiencyTable />
  </LazySection>
  <LazySection minHeight={500}>
    <Benefits />
  </LazySection>
  ... etc
</main>
```

**LazySection.tsx** — Improve the component:
- Accept `minHeight` prop for better placeholder sizing
- Increase `rootMargin` to `800px` to prevent pop-in on desktop
- Keep it simple — just mount/unmount children

### Why This Should Work

- On initial render, React only mounts Navbar + CompanyHero + empty placeholder divs
- Hero paints instantly (already proven)
- As user scrolls, sections mount one at a time, spreading the CPU cost over time
- Large rootMargin means desktop users never see pop-in
- Mobile users get fast initial paint, then sections load progressively
- FadeUp still works inside each section — it just doesn't run until the section mounts

### Risk Assessment

| Risk | Likelihood | Mitigation |
|---|---|---|
| Desktop choppy scrolling (previous issue) | Low | 800px rootMargin + realistic minHeights |
| Content shift when sections mount | Low | Generous minHeight estimates |
| SEO impact (content not in initial DOM) | Low | Marketing site, not content-heavy SEO page |
| Anchor links (#studio, #pricing) broken | Medium | Need to handle scroll-to-section when target isn't mounted yet |

### Anchor Link Handling

The nav has links to `/#studio` and `#pricing`. If those sections aren't mounted yet, scrolling to them won't work. Options:
1. Mount sections that are anchor targets eagerly (StudioBento has `id="studio"`, FoundersPricing has `id="pricing"`)
2. Or: keep those two eager, lazy-load the rest

**Recommendation**: Keep StudioBento and FoundersPricing eager (they're anchor targets), lazy-load the rest. This is the safest approach.

Actually, re-evaluating: StudioBento is the heaviest component (7 video rows). Making it eager defeats much of the purpose. Better approach: lazy-load everything but handle anchor scrolling by mounting all sections when a hash is detected in the URL.

**Simplest safe approach**: Lazy-load only the sections between StudioBento and FoundersPricing (the middle sections that have no anchor targets): Benefits, Problem, Founder, Objections. These are pure text/card sections with no anchor IDs. This reduces initial mount cost while keeping anchor links working.

---

## Phase 4: Implementation Plan

### Option A: Lazy-load middle sections only (Conservative)
- Wrap Benefits, Problem, Founder, Objections in LazySection
- Keep StudioBento, EfficiencyTable, FoundersPricing, CompanyCTA eager
- Reduces initial mount by ~4 components and ~16 FadeUp observers
- Low risk, moderate improvement

### Option B: Lazy-load all below-fold except hero (Aggressive)
- Wrap everything after CompanyHero in LazySection
- Handle anchor links by force-mounting when hash detected
- Maximum improvement, higher risk of regressions

### Option C: Hybrid — lazy-load heavy sections, keep anchor targets eager
- Lazy-load: StudioBento (heaviest), Benefits, Problem, Founder, Objections
- Keep eager: EfficiencyTable, FoundersPricing (anchor target), CompanyCTA, Footer
- When URL has hash `#studio`, force-mount StudioBento immediately
- Good balance of improvement and safety

### Recommendation: Option A (Conservative)

Start with the safest approach. If it shows meaningful improvement, we can expand. If not, we know the problem is elsewhere.

**Files to change:**
1. `src/components/LazySection.tsx` — Update with `minHeight` prop and larger rootMargin
2. `src/pages/Company.tsx` — Wrap Benefits, Problem, Founder, Objections in LazySection

**Files NOT changed:**
- CompanyHero (already fixed)
- StudioBento (anchor target, keep eager)
- EfficiencyTable (keep eager)
- FoundersPricing (anchor target, keep eager)
- CompanyCTA (keep eager, it's small)
- Footer (keep eager, it's small)

---

---

## Phase 5: Safari vs Chrome Discovery (Post-LazySection)

### New Test Data (with LazySection deployed — commit `a46988a`)

| Browser | Hero Load | Full Page Load |
|---|---|---|
| Chrome Mobile | 3.9s | 11s |
| Safari Mobile | 25s | 34s |

Safari is 6-7x slower than Chrome on the same device, same network. This is NOT a normal variance — this points to a Safari-specific rendering bottleneck.

### Safari-Specific Suspects

#### 1. WebM Video Format (HIGH SUSPICION)
4 of 7 videos in StudioBento are `.webm` format:
- `/Brain-Dump-Demo.webm` (2.0MB)
- `/Email-Writer.webm` (981KB)
- `/60-Second-Hook.webm` (1.2MB)
- `/Social-Ads-Writer.webm` (2.3MB)

Safari's WebM support is relatively recent and historically problematic. While Safari technically supports WebM playback now, the decoder is software-based (not hardware-accelerated like H.264/MP4). On mobile Safari, attempting to decode 4 WebM videos — even with `preload="none"` — can cause significant overhead just from the browser trying to probe/initialize the video elements.

The 3 MP4 videos use H.264 which Safari hardware-decodes natively.

**This is likely the #1 cause of the Safari/Chrome gap.**

#### 2. CSS `blur()` Filter Effects (MEDIUM SUSPICION)
Multiple large blur effects found in the homepage:
- CompanyHero: `blur-[120px]` on 800×800px div + `blur-[100px]` on 600×600px div
- StudioBento: `blur-[200px]` on 900×1200px div
- CompanyCTA: `blur-[80px]` on 400×120px div

Safari's CSS filter rendering is known to be slower than Chrome's, especially for large blur radii on large elements. These are massive blurred divs used for ambient glow effects. On desktop they're fine, but on mobile Safari they can be very expensive.

#### 3. `backdrop-blur` (MEDIUM SUSPICION)
Used on the Navbar when scrolled: `backdrop-blur-xl`. This is a real-time compositing effect that Safari handles differently than Chrome. However, it only activates after scroll, so it shouldn't affect initial load.

#### 4. Multiple `<video>` Elements in DOM (MEDIUM SUSPICION)
StudioBento renders 7 `<video>` elements on mount, even though they have `preload="none"` and no `src` until visible. Safari may still allocate resources for each video element on creation. Chrome is more lazy about this.

### Root Cause Ranking for Safari

1. **WebM videos** — Safari's software WebM decoder is likely choking on 4 WebM video elements, even with lazy loading. The browser may be probing/initializing them on element creation.
2. **Large CSS blur effects** — 3 massive blurred divs (up to 900×1200px with 200px blur radius) are expensive GPU operations on mobile Safari.
3. **Sheer number of video elements** — 7 video elements mounted at once in StudioBento, even before they load content.

### Proposed Fix Strategy

**Priority 1: Convert all WebM videos to MP4 (H.264)**
- This gives Safari hardware-accelerated decoding
- Chrome handles MP4 equally well, so no regression
- Desktop experience unchanged — same videos, just different container format
- Requires ffmpeg conversion of 4 files

**Priority 2: Hide large blur effects on mobile**
- Use Tailwind responsive classes: `hidden md:block` on glow divs
- Desktop keeps the beautiful glow effects
- Mobile skips the expensive GPU blur operations
- Zero visual impact on desktop

**Priority 3: Consider reducing video elements mounted at once**
- Could lazy-mount individual feature rows in StudioBento
- But this is lower priority — fixing WebM + blur should have the biggest impact

### Implementation Plan

**Step 1**: Convert WebM → MP4
```bash
ffmpeg -i Brain-Dump-Demo.webm -c:v libx264 -crf 23 -preset medium -an Brain-Dump-Demo.mp4
ffmpeg -i Email-Writer.webm -c:v libx264 -crf 23 -preset medium -an Email-Writer.mp4
ffmpeg -i 60-Second-Hook.webm -c:v libx264 -crf 23 -preset medium -an 60-Second-Hook.mp4
ffmpeg -i Social-Ads-Writer.webm -c:v libx264 -crf 23 -preset medium -an Social-Ads-Writer.mp4
```
Then update StudioBento.tsx video sources.

**Step 2**: Hide blur glows on mobile
In CompanyHero, StudioBento, and CompanyCTA, add `hidden md:block` to the glow divs.

**Step 3**: Test on both Safari and Chrome mobile.

### Risk Assessment

| Change | Desktop Impact | Mobile Impact | Risk |
|---|---|---|---|
| WebM → MP4 | None (Chrome plays both) | Major improvement on Safari | Low |
| Hide blur on mobile | None (responsive class) | Reduces GPU load | Low |

---

## Summary

The 25s Safari vs 3.9s Chrome gap is most likely caused by Safari's software-based WebM video decoding and expensive CSS blur filter rendering on mobile. The fix is to convert all WebM videos to MP4 (hardware-decoded on all browsers) and hide the large decorative blur effects on mobile screens. Desktop experience stays identical.
