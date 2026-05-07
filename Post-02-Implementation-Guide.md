# Post #2 Implementation Guide
## "How Much Does It Cost to Build a Funnel?"

### Complete Asset Package

This guide shows you exactly how to publish and integrate Post #2 into your content marketing system.

---

## Assets Included

| Asset | File Name | Purpose |
|-------|-----------|---------|
| Blog Post | `Post_02_How_Much_Does_It_Cost_To_Build_A_Funnel.md` | 2,300-word TAYA post with 4-path cost breakdown, real 2026 pricing, FAQs, schema markup |
| Hero Image | `generated_image_[ID]_0.png` (16:9) | Header image for blog post (pricing/investment theme) |
| In-Text Visual | `generated_image_[ID]_0.png` (2:3) | Cost comparison chart showing all 4 paths |
| Lead Magnet | `Funnel_Build_Cost_Calculator.xlsx` | Interactive Excel calculator with formulas (users enter their revenue/hourly rate, get personalized recommendations) |

---

## Publishing Checklist

### 1. Upload Assets to Your CMS (Vercel/Kiro)

- [ ] Upload hero image to your media library
- [ ] Upload in-text visual to your media library  
- [ ] Upload lead magnet Excel file to HubSpot Files (see HubSpot setup below)
- [ ] Create new blog post page in Kiro
- [ ] Copy markdown content into your editor
- [ ] Insert hero image at the top
- [ ] Insert in-text visual after the introduction to the "Four Paths" section (right before "Path 1: Do It Yourself")

### 2. Internal Linking

**Add a link FROM Post #1 to Post #2:**
- In Post #1 ("Why Is My Funnel Not Converting?"), add a link in the "What to Do About It" section
- Example placement: "Path one: Rebuild the content manually. This takes most people 4 to 8 weeks if they are doing it themselves, longer if they are hiring a copywriter. ([Here's what that actually costs](link-to-post-2))."

**Add a link FROM Post #2 to Post #1:**
- In the intro of Post #2, reference funnel problems
- Example: "Maybe you just read our breakdown of [why funnels fail](link-to-post-1) and realized your funnel has content problems. Now you're asking: what will it cost to fix this?"

### 3. HubSpot Integration Setup

#### A. Upload the Lead Magnet to HubSpot

1. Log into HubSpot
2. Navigate to **Marketing → Files and Templates → Files**
3. Click **Upload files**
4. Upload `Funnel_Build_Cost_Calculator.xlsx`
5. Once uploaded, click on the file and copy the **Public URL**
6. Save this URL for the form thank-you page

#### B. Create the HubSpot Form

1. Navigate to **Marketing → Lead Capture → Forms**
2. Click **Create form** → **Embedded form**
3. Form name: `Funnel Cost Calculator Download - Blog Post 02`
4. Add these fields:
   - Email (required)
   - First Name (optional)
   - Monthly Revenue (optional number field for segmentation) - This helps you segment leads by business size
5. **Form Options:**
   - Redirect to thank-you page: `https://yoursite.com/thank-you-cost-calculator`
   - OR use inline thank-you message with download link
6. **Advanced Options:**
   - Add contact to list: `Blog Subscribers - Funnel Pricing`
   - Set lifecycle stage: `Subscriber` (if not already set higher)
   - Assign contact owner: (your sales/marketing owner)
7. Click **Publish** and copy the embed code

#### C. Create Thank-You Page

Create a simple thank-you page at `/thank-you-cost-calculator` with:

```html
<h1>Your Funnel Cost Calculator is Ready</h1>
<p>Click the button below to download your personalized cost calculator:</p>
<a href="[HUBSPOT FILE PUBLIC URL]" class="btn btn-primary" download>Download Calculator</a>

<h2>How to Use It:</h2>
<ol>
  <li>Open the "Cost Calculator" tab</li>
  <li>Enter your monthly revenue and hourly rate in the yellow cells</li>
  <li>The spreadsheet will automatically calculate the real cost of each path (including opportunity cost and delay)</li>
  <li>Review the recommendation at the bottom based on your numbers</li>
</ol>

<h2>See How Funnel Studio Compares</h2>
<p>If the calculator shows AI Tools as your best path, see how Funnel Studio generates complete funnel content from one strategic conversation:</p>
<a href="https://forrestry.ai" class="btn btn-secondary">Learn More About Funnel Studio</a>
```

#### D. Embed the Form in Your Blog Post

In your blog post markdown, add this section right after the "So Which Path Should You Choose?" section (before FAQs):

```markdown
---

## Get Your Free Funnel Cost Calculator

Want to see what each path will *actually* cost based on YOUR revenue and hourly rate?

Download the **Funnel Build Cost Calculator** - an interactive Excel tool that factors in out-of-pocket costs, opportunity cost of your time, delay cost (lost revenue while building), and break-even timeline. Just plug in your numbers and get a data-driven recommendation.

[EMBED HUBSPOT FORM HERE]

---
```

**Implementation in Kiro:**
- Use Kiro's HubSpot form component
- Paste the HubSpot embed code
- Style to match your site design

---

## 4. Schema Markup Implementation

Add both schema blocks from the blog post to your page's `<head>` section or as JSON-LD blocks in the body:

1. **Article Schema** - helps search engines understand the page structure
2. **FAQ Schema** - enables rich snippets in search results (6 FAQs included)

If using Vercel/Next.js, add to your blog post template:

```jsx
<script type="application/ld+json">
  {/* Paste Article schema from blog post */}
</script>

<script type="application/ld+json">
  {/* Paste FAQ schema from blog post */}
</script>
```

---

## 5. Email Follow-Up Sequence (HubSpot Workflow)

**Set up an automated workflow for people who download the cost calculator:**

### Email 1: Immediate (upon form submission)
**Subject:** Your Funnel Cost Calculator (and how to read it)

**Body:**
```
Hey [First Name],

Your Funnel Build Cost Calculator is ready.

[Download Link]

Here's the key insight most people miss:

The "cheapest" option (DIY) is often the MOST EXPENSIVE when you factor in:
1. Your time (opportunity cost)
2. Delay (every month you wait = lost revenue)
3. Learning curve (if you've never built a funnel before)

Open the calculator, plug in your monthly revenue and hourly rate, and see what each path actually costs for YOUR business.

The recommendation section at the bottom will tell you which path makes sense based on your numbers.

Let me know what you find.

— Andrew

P.S. If the calculator shows AI Tools as your best path, check out how Funnel Studio works: [link]
```

### Email 2: Day 2
**Subject:** What did the calculator tell you?

**Body:**
```
[First Name],

Did you run the numbers through the Funnel Cost Calculator yet?

I'm curious which path came out ahead for your situation.

Most people are surprised when they see the TOTAL cost (not just out-of-pocket) and realize that:

• DIY often costs $10K+ in opportunity cost (your time)
• Hiring a copywriter is worth it if you're doing $15K/mo or more
• AI tools like Funnel Studio cost less than ONE WEEK of delay

The delay cost table is the one that changes how people think about this.

Every month you're NOT launching = lost revenue.

If you're still deciding which path to take, here's what I recommend:

Pick the path that gets you live FASTEST with "good enough" content, then improve it based on real data.

A decent funnel live today > perfect funnel 6 months from now.

— Andrew
```

### Email 3: Day 5
**Subject:** The real cost of waiting

**Body:**
```
[First Name],

Here's the math nobody talks about:

If your funnel could generate $10K/month once it's live, every month you delay launching costs you $10,000.

Let's say you choose the DIY path and it takes 3 months to finish.

That's $30,000 in lost revenue.

Or you choose an agency and they take 3 months to deliver (plus another month for revisions).

That's $40,000 in opportunity cost.

Speed is not just a convenience. It's a business decision with real dollar consequences.

That's why we built Funnel Studio.

One strategic conversation → Complete funnel content in 1-3 days.

Not because "AI is cool." Because every day you're not testing and learning is a day you're leaving money on the table.

Want to see how it works? [Link to product tour or demo]

— Andrew

P.S. If you prefer to hire someone or do it yourself, that's totally fine. Just don't let "perfect" kill "launched."
```

---

## 6. Conversion Tracking

Set up these HubSpot tracking events:

| Event | Trigger | What It Tells You |
|-------|---------|-------------------|
| Blog Post View | Page view of post URL | Traffic volume, source channels |
| Form Submission | HubSpot form "Cost Calculator" | Lead generation effectiveness |
| Calculator Download | Click on download link | Confirmation that asset was retrieved |
| Funnel Studio Page Visit (from blog) | UTM-tagged link click | Interest in product after reading pricing post |
| Email Opens (Workflow) | HubSpot workflow email opens | Engagement with follow-up sequence |

**UTM Parameters to Use:**
- When linking to Funnel Studio from the blog post: `?utm_source=blog&utm_medium=content&utm_campaign=post-02-funnel-cost`
- When linking in email sequence: `?utm_source=email&utm_medium=nurture&utm_campaign=cost-calculator-sequence`

---

## 7. Success Metrics (30-Day Benchmarks)

Track these KPIs in HubSpot:

| Metric | Target | What It Means |
|--------|--------|---------------|
| Blog Post Page Views | 300-600 | Pricing content typically gets higher search traffic |
| Cost Calculator Downloads | 60-150 (20-25% conversion) | High-value lead magnet (people researching purchase) |
| Email Open Rate (Sequence) | 40-50% | Pricing-focused audience is warmer |
| Click-Through to Funnel Studio | 15-25% of downloaders | Higher intent than generic traffic |
| Blog → Trial Signups | 3-8 (direct attribution) | Pricing posts convert better than problem posts |

---

## 8. Promotion Plan

### Week 1: Launch
- [ ] Publish blog post
- [ ] Share on LinkedIn (Andrew's personal profile) with hook: "Everyone asks 'how much does a funnel cost?' Here's the real breakdown with 2026 pricing - DIY, copywriter, agency, and AI tools..."
- [ ] Share on Twitter/X with poll: "What's your biggest constraint when building a funnel: Budget, Time, or Expertise?"
- [ ] Email your existing list with subject line: "How much does a funnel actually cost? (Real numbers, not guesses)"
- [ ] Cross-link from Post #1 (add link in the "What to Do About It" section)

### Week 2-4: Retargeting
- [ ] Create a LinkedIn carousel post showing the cost comparison table
- [ ] Repurpose the 4-path breakdown into a Twitter thread
- [ ] Record a 3-5 min video walking through the cost calculator - post to LinkedIn/YouTube
- [ ] Use in email nurture sequences for people who downloaded the Funnel Audit Checklist from Post #1

### Ongoing:
- [ ] Reference in sales conversations when prospects ask about pricing
- [ ] Use as a "Resources" link in your email signature
- [ ] Include in competitive discussions (AI tools vs. traditional paths)

---

## 9. SEO & AEO Notes

### On-Page SEO Checklist:
- [ ] Meta Title: "How Much Does It Cost to Build a Funnel? (2026 Pricing: DIY, Copywriter, Agency, AI)"
- [ ] Meta Description: "Complete breakdown of funnel build costs in 2026. Real pricing for DIY, hiring a copywriter, hiring an agency, and using AI tools. Includes cost calculator."
- [ ] URL slug: `/blog/how-much-does-it-cost-to-build-a-funnel`
- [ ] H1 matches the post title
- [ ] Image alt text includes "funnel build cost comparison" and "funnel pricing 2026"
- [ ] Internal link to Post #1 ("Why Is My Funnel Not Converting?")
- [ ] External links to authoritative sources (if any)

### AEO Optimization:
- Schema markup (Article + FAQ) is implemented ✓
- FAQ section provides zero-click value ✓
- Four-path breakdown structured for AI extraction ✓
- Cost comparison tables optimized for featured snippets ✓
- "When this makes sense" sections help LLMs provide contextual answers ✓

---

## 10. Quick Reference: Where Everything Goes

```
Blog Post Structure:
├── Hero Image (16:9 pricing/investment theme)
├── Post Title + Intro
├── [IN-TEXT VISUAL HERE - Cost comparison chart showing 4 paths]
├── Path 1: Do It Yourself (full breakdown)
├── Path 2: Hire a Funnel Copywriter (full breakdown)
├── Path 3: Hire a Funnel Agency (full breakdown)
├── Path 4: Use an AI-Powered Tool (full breakdown)
├── The Cost Nobody Talks About: Delay
├── What About Tech and Traffic?
├── So Which Path Should You Choose?
├── [HUBSPOT FORM EMBED - Cost Calculator CTA]
├── FAQs (6 questions, schema-ready)
├── Schema Markup Notes
├── Author Bio (Andrew Gutierrez)
└── Related Posts (link to Post #1, future comparison posts)
```

---

## 11. A/B Testing Opportunities

Since this is a pricing post (high commercial intent), consider testing:

**Lead Magnet CTA Placement:**
- Version A: Form after "Which Path Should You Choose?" (current placement)
- Version B: Form at the very top, right after intro (aggressive capture)
- Hypothesis: Pricing-focused readers may want the calculator immediately

**Form Fields:**
- Version A: Email only (lower friction)
- Version B: Email + Monthly Revenue (better segmentation, slightly higher friction)
- Hypothesis: People researching pricing may be willing to share revenue data

**Subject Line Tests (Email Sequence):**
- Email 1 Alt: "Here's your calculator (and the #1 mistake people make)"
- Email 2 Alt: "The delay cost nobody talks about"

---

## 12. Segmentation Strategy

Use the "Monthly Revenue" optional field (if included in form) to segment leads:

| Revenue Range | Recommended Path (per calculator) | Follow-Up Strategy |
|---------------|-----------------------------------|-------------------|
| < $5K/mo | DIY or AI Tool | Nurture with educational content, position Funnel Studio as budget option |
| $5K-$25K/mo | AI Tool or Entry Copywriter | Position Funnel Studio as the speed + cost sweet spot |
| $25K-$50K/mo | Mid-Level Copywriter or AI Tool | Offer comparison content, case studies |
| $50K+/mo | Agency or Expert Copywriter | Acknowledge they may want full-service, stay top-of-mind for future needs |

---

## Questions or Issues?

- **Calculator formulas not working:** Check that cells C6, C7, C8 are properly referenced
- **Form conversion too low:** Try moving CTA higher in post (pricing content = high intent)
- **Email click-through dropping:** Test different subject lines focused on "delay cost" concept
- **Low traffic:** Pricing posts take 30-60 days to rank; promote heavily on social in the meantime

---

**Ready to publish?** Follow the checklist above step by step, and you'll have a fully integrated TAYA pricing post that captures high-intent leads and moves them toward Funnel Studio.
