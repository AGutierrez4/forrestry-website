# Pricing Page RLM Analysis
## Adding Depth & Value — Inspired by MarketingSecrets.AI Reference

**Created**: May 2, 2026  
**Status**: Phase 1-3 Complete — Awaiting Approval  
**Reference**: MarketingSecrets.AI pricing page (screencapture provided)

---

## Problem Statement

The current Funnel Studio pricing page (`/pricing`) is functional but thin. It consists of only two sections:
1. **FoundersPricing** — A single pricing card ($47/mo founding rate, $97/mo regular)
2. **FAQ** — 7 accordion questions

The page lacks the depth, context, and persuasion layers that turn a "pricing page" into a "decision page." Visitors who land here are high-intent (they clicked "Pricing") but the page doesn't give them enough information to confidently convert.

---

## Phase 1: Current State Analysis

### What We Have (FoundersPricing.tsx)
- Single pricing card with founding member badge
- $47/mo price (crossed-out $97/mo)
- 9 feature bullet points (checkmarks)
- CTA: "Claim Your Founders Spot" → Stripe checkout
- Trust badges: 14-day guarantee, Stripe, cancel anytime, instant access
- Money-back guarantee callout box

### What We Have (FAQ.tsx)
- 7 questions covering: ChatGPT differentiation, ClickFunnels compatibility, founding spots, cancellation, guarantee, technical skill, Perfect Webinar

### What's Missing (Gaps Identified)
1. **No headline/value proposition** — Page jumps straight to the card with no context
2. **No "what's included" breakdown** — Features are listed but not explained
3. **No cost comparison/anchoring** — No context for why $47/mo is a steal
4. **No "how it works" summary** — Visitor may not have seen the homepage
5. **No social proof or testimonials** — Zero trust signals beyond the guarantee
6. **No objection handling** — FAQ covers some, but no dedicated section
7. **No urgency mechanics** — "Limited to 100 spots" badge exists but no progress/countdown
8. **No cancellation policy clarity** — Brief mention but not a dedicated section

---

## Phase 2: Reference Analysis — MarketingSecrets.AI Pricing Page

### What They Do Well

**1. Strong Headline + Subhead (Value Framing)**
- Title: "MarketingSecrets.AI Pricing: How To Get The $97/Month Plan Free For 14 Days"
- Subhead: "There's one plan, one price, and one way to start free. Here's how it breaks down — and how the math compares to the AI subscriptions you're probably already running."
- **Takeaway**: They frame the price as a *deal* before you even see the number. The headline IS the value prop.

**2. Single Plan Simplicity**
- One plan: "Marketing Secrets: Core" at $97/mo
- No decision fatigue — just one clear option
- **Takeaway**: Our founding member approach already does this well. Single card, single price.

**3. "How The Free 14 Days Work" — Step-by-Step Transparency**
- 5 numbered steps explaining exactly what happens
- Specific dates ("May 27, 2026", "June 10")
- Clear exit: "cancel from the Billing tab... No hassle"
- **Takeaway**: Transparency builds trust. We should explain our guarantee/trial process step-by-step.

**4. Cost Comparison Table (Stack Anchoring)**
- Table comparing individual AI tool costs vs. their single subscription
- ChatGPT Plus ($20), Claude Pro ($20), Perplexity Pro ($20), Manus ($20-40), Image gen ($10-30)
- Stack total: $90-$130/mo → MarketingSecrets.AI: $97/mo
- Message: "You're already paying this much for fragmented tools"
- **Takeaway**: This is the most powerful section. We need our own version — comparing the cost of hiring a copywriter, using ChatGPT, buying templates, etc. vs. Funnel Studio at $47/mo.

**5. "What's Actually Included" — Detailed Feature Breakdown**
- Goes beyond checkmarks to explain each feature
- Bullet points with bold labels + descriptions
- **Takeaway**: Our feature list is too terse. "AI copywriting" doesn't tell the visitor what that means in practice.

**6. Real Product Screenshots**
- Billing screen, training library, credits dashboard
- Shows the actual product, not mockups
- **Takeaway**: We have demo videos on the homepage but none on the pricing page. Adding a product glimpse would build confidence.

**7. Cancellation Policy — Dedicated Section**
- Clear, prominent section: "Cancel anytime from the Billing tab... If you cancel before your first billing date, you're not charged."
- **Takeaway**: Making cancellation easy and visible paradoxically increases conversions.

**8. Footer with Comparison Pages**
- "vs ClickFunnels", "vs HighLevel", "vs Skool" links
- **Takeaway**: We have competitor intelligence but don't surface it. Future opportunity.

---

## Phase 3: Strategic Recommendations

### The Pricing Page Should Answer 5 Questions:

1. **What am I getting?** → Detailed feature breakdown with context
2. **What does it cost?** → Price + anchoring against alternatives
3. **Is it worth it?** → Cost comparison table (the "stack" argument)
4. **Can I trust this?** → Guarantee details, cancellation clarity, social proof
5. **What happens next?** → Step-by-step "how it works" after purchase

### Proposed New Pricing Page Structure

```
/pricing page:
├── 1. HERO SECTION (NEW)
│   ├── Headline: Value-framing headline (not just "Pricing")
│   ├── Subhead: Context + anchoring statement
│   └── Subtle anchor to the card below
│
├── 2. FOUNDERS PRICING CARD (EXISTING — enhanced)
│   ├── Current card (keep as-is, it's solid)
│   ├── ADD: "What happens after you sign up" — 3-4 step mini-flow
│   └── Trust badges (keep)
│
├── 3. WHAT'S INCLUDED — DETAILED BREAKDOWN (NEW)
│   ├── Each feature with icon + bold label + 1-2 sentence explanation
│   ├── Organized by workflow stage (Brain Dump → Blueprint → Content)
│   └── This replaces the terse checkmark list as the "deep dive"
│
├── 4. COST COMPARISON TABLE (NEW — highest impact)
│   ├── "What You're Probably Paying Now" framing
│   ├── Table: Copywriter ($3K-8K), ChatGPT Pro ($20/mo), Course ($997-2K),
│   │         Templates ($200-500), Email tool ($50-100/mo)
│   ├── Stack total: $4K-11K+ for one funnel launch
│   ├── Funnel Studio: $47/mo (founding) / $97/mo (regular)
│   └── Key message: "One tool. One price. Complete funnel content."
│
├── 5. GUARANTEE & CANCELLATION (NEW — dedicated section)
│   ├── "How the 14-Day Guarantee Works" — step by step
│   ├── Cancellation policy — clear, prominent
│   └── "No risk" framing
│
├── 6. FAQ (EXISTING — enhanced)
│   ├── Keep current questions
│   ├── ADD: "What if I'm already using ChatGPT for my copy?"
│   ├── ADD: "How long does it take to generate a full funnel?"
│   └── ADD: "What format does the content come in?"
│
└── 7. FINAL CTA (NEW — bottom of page)
    ├── Repeat the offer
    ├── Urgency: spots remaining
    └── CTA button
```

### New Sections — Detailed Specs

#### Section 1: Pricing Hero
**Purpose**: Frame the value before showing the price.

```
Headline: "Your Entire Funnel. One Subscription."
Subhead: "Most founders spend $5,000–$10,000 getting their first funnel 
written and launched. Funnel Studio does it for $47/month — and you keep 
the tool forever."
```

#### Section 3: What's Included (Detailed)
**Purpose**: Transform terse checkmarks into compelling feature descriptions.

| Feature | Description |
|---------|-------------|
| Brain Dump™ | A guided AI conversation that extracts your offer, audience, and story — then organizes it into a strategic foundation. No prompts to write. |
| Strategic Blueprint | Your funnel's master plan: Big Domino, hook, transformation, objections, and audience language — all mapped before a single word of copy is written. |
| Perfect Webinar Script | A complete webinar script using the proven Perfect Webinar framework. Hook, origin story, 3 Secrets, the Stack, the Close. |
| 60-Second Hook Scripts | Punchy, high-converting pitch scripts for Instagram, Skool, DMs, or any platform where you need to grab attention fast. |
| Full Funnel Stack | Squeeze page, registration page, sales page, order form, upsell, downsell, thank-you page. Every page, every transition. |
| Email Sequences | Soap opera sequences, cart abandonment, post-webinar follow-up. Strategically connected to your webinar and pages. |
| Social Ad Copy | Hook-Story-Offer ad scripts for cold, warm, and hot traffic. Ready to paste into your ad manager. |
| Priority Support | Real humans. Fast responses. We're building this with you, not just for you. |
| 2-Year Price Lock | Your founding rate stays locked for 2 full years. No bait and switch. |

#### Section 4: Cost Comparison Table
**Purpose**: The "stack anchoring" play — compare against the REALISTIC alternative (AI tool stack), not the aspirational one (hiring professionals). This avoids value bloat and feels honest.

**Key Insight**: The real buyer isn't choosing between Funnel Studio and a $8K copywriter. They're choosing between Funnel Studio and cobbling together ChatGPT + templates + YouTube tutorials. That's how Frankenstein funnels get built. The comparison should reflect that reality.

**Framing**: "What You're Probably Piecing Together Now"

| Tool | Typical Cost | What You Get |
|------|-------------|--------------|
| ChatGPT Pro | $20/mo | General AI — you write the prompts, you connect the dots |
| Funnel course or template pack | $500 – $2,000 (one-time) | Frameworks, but you still do all the writing |
| Copywriting swipe files / prompts | $50 – $200 (one-time) | Starting points, not finished copy |
| Canva / design tools | $13 – $30/mo | Visuals, but no copy strategy |
| Email platform (ConvertKit, etc.) | $29 – $59/mo | Sends emails, doesn't write them |
| **Your time stitching it together** | **Hours per week** | **The Frankenstein funnel** |
| **Stack total** | **$60 – $110/mo + one-time costs + your time** | **Disconnected pieces, no unified strategy** |
| **Funnel Studio** | **$47/mo** | **One conversation → complete, connected funnel content** |

Bottom line: *"You're probably already spending this much on disconnected tools. Funnel Studio replaces the duct tape with a system."*

**Why this works better than the $25K comparison**:
- The numbers are real and recognizable — visitors see themselves
- No value bloat — we're not claiming to replace a $25K service
- The pain point is friction, not price — "disconnected pieces" vs. "connected system"
- Ties directly to the "friction problem" messaging on the homepage

#### Section 5: Guarantee & Cancellation
**Purpose**: Remove all risk perception.

```
"How the 14-Day Guarantee Works"

1. Sign up and get instant access to Funnel Studio.
2. Run your first Brain Dump. Generate your Strategic Blueprint.
3. Build your webinar script, email sequences, and ad copy.
4. If it's not for you, email us within 14 days for a full refund.
5. No hoops. No forms. No "retention specialists." Just a refund.

Cancellation: Cancel anytime from your account. No contracts. 
No penalties. If you cancel and come back later, you'll be at 
the current price (not the founding rate).
```

---

## Phase 4: Implementation Plan

### Files to Create/Modify

| File | Action | Description |
|------|--------|-------------|
| `src/components/company/PricingHero.tsx` | CREATE | New hero section with value-framing headline |
| `src/components/company/WhatsIncluded.tsx` | CREATE | Detailed feature breakdown section |
| `src/components/company/CostComparison.tsx` | CREATE | Cost comparison/stack anchoring table |
| `src/components/company/GuaranteeSection.tsx` | CREATE | Dedicated guarantee + cancellation section |
| `src/components/company/PricingFinalCTA.tsx` | CREATE | Bottom-of-page CTA with urgency |
| `src/components/company/FoundersPricing.tsx` | MODIFY | Minor: add "what happens next" mini-steps |
| `src/components/FAQ.tsx` | MODIFY | Add 3 new pricing-relevant questions |
| `src/views/PricingPage.tsx` | MODIFY | Compose all new sections in order |
| `src/pages/pricing.astro` | MODIFY | Update to include new components |

### Implementation Order
1. PricingHero.tsx (standalone, no dependencies)
2. WhatsIncluded.tsx (standalone)
3. CostComparison.tsx (standalone)
4. GuaranteeSection.tsx (standalone)
5. PricingFinalCTA.tsx (standalone)
6. Update FoundersPricing.tsx (minor enhancement)
7. Update FAQ.tsx (add questions)
8. Compose in PricingPage.tsx and pricing.astro
9. Build verification + diagnostics

### Risk Assessment
- **Low risk**: All new sections are additive — no existing functionality is removed
- **Styling**: All components use existing design system (FadeUp, card-bg, green, muted, etc.)
- **No breaking changes**: FoundersPricing card stays intact, just gets new siblings
- **Build verification**: Will run `astro build` after implementation

---

## Phase 5: Key Design Decisions

### What We're NOT Doing (and why)
1. **Not adding multiple pricing tiers** — The single founding member card is working. Adding tiers creates decision fatigue and dilutes the urgency of "100 spots."
2. **Not copying MarketingSecrets.AI's layout verbatim** — Their page is for a $97/mo AI tool with training library. Ours is a $47/mo founding offer for a funnel content engine. Different product, different framing.
3. **Not adding product screenshots yet** — We'd need actual app screenshots. This can be a Phase 2 enhancement.
4. **Not adding video on the pricing page** — The homepage has videos. The pricing page should be scannable and fast-loading.

### What We ARE Taking from the Reference
1. ✅ **Value-framing headline** (not just "Pricing")
2. ✅ **Cost comparison table** (the highest-impact addition)
3. ✅ **Detailed feature breakdown** (beyond checkmarks)
4. ✅ **Step-by-step guarantee explanation** (transparency builds trust)
5. ✅ **Dedicated cancellation section** (reduces friction)
6. ✅ **Bottom-of-page CTA repeat** (catch scrollers)

---

## Summary & Next Steps

The current pricing page is a single card + FAQ. The proposed enhancement adds 5 new sections that transform it from a "pricing card" into a "decision page" — giving high-intent visitors the context, comparison, and confidence they need to convert.

**Estimated impact**: Pricing pages with cost comparison tables and detailed breakdowns typically convert 20-40% better than bare pricing cards.

**Awaiting approval to proceed with implementation.**

---

*Analysis by Kiro — RLM Methodology*
