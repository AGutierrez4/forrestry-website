# Post #1 Implementation Guide
## "Why Is My Funnel Not Converting?"

### Complete Asset Package

This guide shows you exactly how to publish and integrate Post #1 into your content marketing system.

---

## Assets Included

| Asset | File Name | Purpose |
|-------|-----------|---------|
| Blog Post | `Post_01_Why_Is_My_Funnel_Not_Converting.md` | 2,400-word TAYA post with 7-problem framework, FAQs, schema markup, AEO optimization |
| Hero Image | `generated_image_[ID]_0.png` (16:9) | Header image for blog post |
| In-Text Visual | `generated_image_[ID]_0.png` (2:3) | Diagnostic chart showing the 7 problems |
| Lead Magnet | `Funnel_Content_Audit_Checklist.xlsx` | Interactive Excel worksheet for self-diagnosis |

---

## Publishing Checklist

### 1. Upload Assets to Your CMS (Vercel/Kiro)

- [ ] Upload hero image to your media library
- [ ] Upload in-text visual to your media library  
- [ ] Upload lead magnet Excel file to HubSpot Files (see HubSpot setup below)
- [ ] Create new blog post page in Kiro
- [ ] Copy markdown content into your editor
- [ ] Insert hero image at the top
- [ ] Insert in-text visual after Problem #3 (between "Poor Qualification" and "Informational Emails")

### 2. HubSpot Integration Setup

#### A. Upload the Lead Magnet to HubSpot

1. Log into HubSpot
2. Navigate to **Marketing → Files and Templates → Files**
3. Click **Upload files**
4. Upload `Funnel_Content_Audit_Checklist.xlsx`
5. Once uploaded, click on the file and copy the **Public URL**
6. Save this URL - you'll use it in the form thank-you page

#### B. Create the HubSpot Form

1. Navigate to **Marketing → Lead Capture → Forms**
2. Click **Create form** → **Embedded form**
3. Form name: `Funnel Content Audit Download - Blog Post 01`
4. Add these fields:
   - Email (required)
   - First Name (optional)
   - Company (optional, for segmentation)
5. **Form Options:**
   - Redirect to thank-you page: `https://yoursite.com/thank-you-audit-checklist`
   - OR use inline thank-you message with download link
6. **Advanced Options:**
   - Add contact to list: `Blog Subscribers - Funnel Content`
   - Set lifecycle stage: `Subscriber` (if not already set higher)
   - Assign contact owner: (your sales/marketing owner)
7. Click **Publish** and copy the embed code

#### C. Create Thank-You Page (Recommended Approach)

Create a simple thank-you page at `/thank-you-audit-checklist` with:

```html
<h1>Your Funnel Content Audit Checklist is Ready</h1>
<p>Click the button below to download your checklist:</p>
<a href="[HUBSPOT FILE PUBLIC URL]" class="btn btn-primary" download>Download Checklist</a>

<h2>While You're Here...</h2>
<p>If your audit reveals 3+ problems, your funnel likely needs a strategic content rebuild.</p>
<p>See how Funnel Studio generates complete funnel content from one conversation:</p>
<a href="https://forrestry.ai" class="btn btn-secondary">Learn More About Funnel Studio</a>
```

#### D. Embed the Form in Your Blog Post

In your blog post markdown, add this section right after the "What to Do About It" section (before FAQs):

```markdown
---

## Get Your Free Funnel Content Audit Checklist

Want to diagnose exactly which of these 7 problems exist in your funnel?

Download the **Funnel Content Audit Checklist** - an interactive Excel worksheet that walks you through each diagnostic question, automatically scores your funnel health, and gives you prioritized next steps.

[EMBED HUBSPOT FORM HERE]

---
```

**Implementation in Kiro:**
- Use Kiro's HubSpot form component
- Paste the HubSpot embed code
- Style to match your site design

---

## 3. Schema Markup Implementation

Add both schema blocks from the blog post to your page's `<head>` section or as JSON-LD blocks in the body:

1. **Article Schema** - helps search engines understand the page structure
2. **FAQ Schema** - enables rich snippets in search results

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

## 4. Internal Linking Strategy

Once you publish more posts from the content matrix, add internal links:

**From this post, link to:**
- "How Much Does It Cost to Hire a Funnel Copywriter?" (Pricing & Cost)
- "Funnel Studio vs. Doing It Yourself: A Decision Guide" (Versus & Comparisons)
- "The 5 Best AI Tools for Funnel Content Creation" (Best in Class)

**Link TO this post from:**
- Your homepage or resources section as a pillar post
- Any future "Problems" category posts
- Email newsletters when discussing funnel conversion issues

---

## 5. Promotion Plan

### Week 1: Launch
- [ ] Publish blog post
- [ ] Share on LinkedIn (Andrew's personal profile) with a hook: "Most funnel conversion problems aren't traffic or tech issues - they're content problems. Here are the 7 I see most often..."
- [ ] Share on Twitter/X with thread format (one tweet per problem)
- [ ] Email your existing list with subject line: "Why your funnel isn't converting (and it's not what you think)"

### Week 2-4: Retargeting
- [ ] Create a LinkedIn Pulse article that summarizes 3 of the 7 problems with a link back to the full post
- [ ] Repurpose into a Twitter thread
- [ ] Create a short video (2-3 min) walking through the diagnostic framework - post to LinkedIn/YouTube
- [ ] Use in email nurture sequences for cold traffic who download other resources

### Ongoing:
- [ ] Reference in sales conversations when prospects say "my funnel isn't converting"
- [ ] Use in onboarding emails for Funnel Studio trial users
- [ ] Include in competitive comparison discussions

---

## 6. Email Follow-Up Sequence (HubSpot Workflow)

**Set up an automated workflow for people who download the checklist:**

### Email 1: Immediate (upon form submission)
**Subject:** Your Funnel Content Audit Checklist (+ How to Use It)

**Body:**
```
Hey [First Name],

Your Funnel Content Audit Checklist is ready.

[Download Link]

Here's how to use it:
1. Open the "Audit Worksheet" tab
2. Answer YES or NO to each of the 7 diagnostic questions
3. The sheet will auto-calculate your Funnel Health Score
4. Review your priority actions at the bottom

What your score means:
• 0-2 problems: Your content is solid. Focus on traffic.
• 3-4 problems: Moderate gaps. Start with #7 (Fragmented Strategy).
• 5-7 problems: Your funnel needs a strategic rebuild.

If you score 3+, reply to this email and let me know what you found. I read every response.

— Andrew

P.S. If rebuilding your funnel content sounds overwhelming, check out how Funnel Studio does it in a few hours instead of weeks: [link to Funnel Studio]
```

### Email 2: Day 3
**Subject:** Quick question about your audit

**Body:**
```
[First Name],

Did you get a chance to run through the Funnel Content Audit yet?

I'm curious - which of the 7 problems showed up in your funnel?

Most people discover 3-5 issues they didn't realize they had. The most common one is #7 (Fragmented Strategy) - where each funnel piece was built separately without a shared strategic foundation.

If that's what you found, here's the fastest fix: [link to Funnel Studio page or blog post about solutions]

Let me know what you discovered.

— Andrew
```

### Email 3: Day 7
**Subject:** The #1 problem that kills funnel conversions

**Body:**
```
[First Name],

After auditing hundreds of funnels, here's what I've learned:

The #1 reason funnels don't convert isn't traffic, design, or tech.

It's that the content (webinar, pages, emails, ads) was built in pieces instead of from a unified strategy.

Each piece sounds fine on its own. But when a prospect moves through the funnel, the messaging shifts, the language changes, and they lose trust at every transition.

That's exactly why we built Funnel Studio.

One strategic conversation (the Brain Dump) → One Strategic Blueprint → Seven content types, all generated from the same foundation.

No more Frankenstein funnels.

Want to see how it works? [Link to demo or product tour]

— Andrew

P.S. If you prefer to rebuild manually, that works too. Just start with a strategic brief that covers your core promise, origin story, and audience language before you write a single page.
```

---

## 7. Conversion Tracking

Set up these HubSpot tracking events:

| Event | Trigger | What It Tells You |
|-------|---------|-------------------|
| Blog Post View | Page view of post URL | Traffic volume, source channels |
| Form Submission | HubSpot form "Audit Checklist" | Lead generation effectiveness |
| Checklist Download | Click on download link | Confirmation that asset was retrieved |
| Funnel Studio Page Visit (from blog) | UTM-tagged link click | Interest in product after reading post |
| Email Opens (Workflow) | HubSpot workflow email opens | Engagement with follow-up sequence |

**UTM Parameters to Use:**
- When linking to Funnel Studio from the blog post: `?utm_source=blog&utm_medium=content&utm_campaign=post-01-funnel-problems`
- When linking in email sequence: `?utm_source=email&utm_medium=nurture&utm_campaign=audit-checklist-sequence`

---

## 8. Success Metrics (30-Day Benchmarks)

Track these KPIs in HubSpot:

| Metric | Target | What It Means |
|--------|--------|---------------|
| Blog Post Page Views | 200-500 | Organic + social reach |
| Audit Checklist Downloads | 40-100 (20% conversion) | Lead magnet effectiveness |
| Email Open Rate (Sequence) | 35-45% | Subject line + list quality |
| Click-Through to Funnel Studio | 10-15% of downloaders | Product interest |
| Blog → Trial Signups | 2-5 (direct attribution) | Content → product conversion |

---

## 9. SEO & AEO Notes

### On-Page SEO Checklist:
- [ ] Meta Title: "Why Is My Funnel Not Converting? 7 Content Problems (+ Fixes)"
- [ ] Meta Description: "Most funnel conversion problems aren't traffic or tech issues - they're content problems. Learn how to diagnose and fix the 7 most common funnel content gaps."
- [ ] URL slug: `/blog/why-is-my-funnel-not-converting`
- [ ] H1 matches the post title
- [ ] Image alt text includes "funnel conversion problems" and "funnel diagnostic"
- [ ] Internal links to other blog posts (when available)
- [ ] External links to authoritative sources (if any)

### AEO Optimization:
- Schema markup (Article + FAQ) is implemented ✓
- FAQ section provides zero-click value ✓
- "How to spot it in your funnel" sections are structured for AI extraction ✓
- Clear problem → solution format throughout ✓

---

## 10. Quick Reference: Where Everything Goes

```
Blog Post Structure:
├── Hero Image (16:9 wide)
├── Post Title + Intro
├── Problem #1
├── Problem #2
├── Problem #3
├── [IN-TEXT VISUAL HERE - 2:3 diagnostic chart]
├── Problem #4
├── Problem #5
├── Problem #6
├── Problem #7
├── What to Do About It (Funnel Studio bridge)
├── [HUBSPOT FORM EMBED - Lead Magnet CTA]
├── FAQs (6 questions, schema-ready)
├── Schema Markup Notes
├── Author Bio (Andrew Gutierrez)
└── Related Posts (once available)
```

---

## Questions or Issues?

- **HubSpot form not appearing:** Check embed code, ensure JavaScript is enabled in Kiro
- **Download link broken:** Verify HubSpot file is set to "Public" not "Private"
- **Schema markup not validating:** Use Google Rich Results Test tool to debug
- **Low conversion on lead magnet:** Test different CTA copy, move form higher in post

---

**Ready to publish?** Follow the checklist above step by step, and you'll have a fully integrated TAYA blog post that captures leads and moves them toward Funnel Studio.
