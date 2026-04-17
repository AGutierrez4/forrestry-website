# Funnel Integration Points — Reference Doc

**Purpose**: Maps every action point across the 4 funnel pages that needs backend wiring, external links, or media assets.

**Last Updated**: April 16, 2026

---

## Flow Overview

```
/masterclass (Register) 
  → form submit → /masterclass/vip (VIP Upsell)
    → "YES upgrade" → [Stripe VIP Payment Link — NEEDS LINK]
    → "No thanks" → /masterclass/confirmed (Thank You)
      → Strategy session CTA → /masterclass/strategy
        → "YES add session" → [Stripe Strategy Payment Link — NEEDS LINK]  
        → "No thanks" → /masterclass/confirmed
```

---

## Page 1: /masterclass (Registration)

| # | Element | File | What It Does Now | What It Needs |
|---|---|---|---|---|
| 1 | Registration form submit | `src/pages/funnel/MasterclassRegister.tsx` | Redirects to `/masterclass/vip` | Email service integration (ConvertKit, Mailchimp, etc.) to capture name + email BEFORE redirect |
| 2 | Video placeholder (hero) | `src/pages/funnel/MasterclassRegister.tsx` | Shows placeholder | Replace with actual video embed or self-hosted MP4 |
| 3 | Founder image placeholder | `src/pages/funnel/MasterclassRegister.tsx` | Shows "[Founder Image]" text | Replace with `/founder.webp` or a different photo |
| 4 | 3 testimonial avatars | `src/pages/funnel/MasterclassRegister.tsx` | Empty circles | Replace with real testimonial photos + names |
| 5 | Footer Terms/Privacy links | `src/pages/funnel/MasterclassRegister.tsx` | Links to `/terms` and `/privacy` | Working ✅ |

---

## Page 2: /masterclass/vip (VIP Upsell)

| # | Element | File | What It Does Now | What It Needs |
|---|---|---|---|---|
| 1 | "YES! Upgrade Me To VIP" button | `src/pages/funnel/MasterclassVIP.tsx` | Placeholder `#` link | Stripe payment link for $47 VIP upgrade |
| 2 | "No thanks" link | `src/pages/funnel/MasterclassVIP.tsx` | Redirects to `/masterclass/confirmed` | Working ✅ (redirect only) |
| 3 | Video placeholder | `src/pages/funnel/MasterclassVIP.tsx` | Shows placeholder | Replace with actual video |
| 4 | 2 testimonial avatars | `src/pages/funnel/MasterclassVIP.tsx` | Placeholder circles | Replace with real photos + names |
| 5 | Secure checkout icons image | `src/pages/funnel/MasterclassVIP.tsx` | Placeholder text | Replace with trust badge image |

---

## Page 3: /masterclass/confirmed (Thank You / Confirmation)

| # | Element | File | What It Does Now | What It Needs |
|---|---|---|---|---|
| 1 | Welcome video | `src/pages/funnel/MasterclassConfirmed.tsx` | Shows placeholder | Replace with actual onboarding video |
| 2 | Calendar links (Apple, Google, Outlook) | `src/pages/funnel/MasterclassConfirmed.tsx` | Placeholder `#` links | Real calendar event URLs (generate via AddEvent or similar) |
| 3 | "Join Community" button | `src/pages/funnel/MasterclassConfirmed.tsx` | Placeholder `#` link | Facebook Group URL or community platform link |
| 4 | "Download PDF" button | `src/pages/funnel/MasterclassConfirmed.tsx` | Placeholder | Link to hosted PDF (Anti-Prompt Cheat Sheet) |
| 5 | "Get Affiliate Link" button | `src/pages/funnel/MasterclassConfirmed.tsx` | Placeholder | Affiliate signup URL or generates affiliate link |
| 6 | Strategy session CTA | `src/pages/funnel/MasterclassConfirmed.tsx` | Links to `/masterclass/strategy` | Working ✅ |

---

## Page 4: /masterclass/strategy (Strategy Session Downsell)

| # | Element | File | What It Does Now | What It Needs |
|---|---|---|---|---|
| 1 | "YES! Add Strategy Session" button | `src/pages/funnel/MasterclassStrategy.tsx` | Placeholder `#` link | Stripe payment link for $297 strategy session OR Calendly booking link |
| 2 | "No thanks" link | `src/pages/funnel/MasterclassStrategy.tsx` | Links to `/masterclass/confirmed` | Working ✅ |
| 3 | Video placeholder | `src/pages/funnel/MasterclassStrategy.tsx` | Shows placeholder | Replace with actual video |
| 4 | 2 testimonial names | `src/pages/funnel/MasterclassStrategy.tsx` | Placeholder names | Replace with real testimonials |

---

## Media Assets Needed (All Pages)

| Asset | Used On | Format | Notes |
|---|---|---|---|
| Registration video | Page 1 | MP4 or embed URL | Hero sales video |
| VIP upsell video | Page 2 | MP4 or embed URL | Short urgency video |
| Welcome/onboarding video | Page 3 | MP4 or embed URL | Post-registration welcome |
| Strategy session video | Page 4 | MP4 or embed URL | Downsell pitch video |
| Founder headshot | Page 1 | WebP | Can reuse `/founder.webp` |
| Testimonial photos (5 unique) | Pages 1-4 | WebP | Real customer photos |
| Secure checkout trust badges | Page 2 | PNG/SVG | Stripe/SSL/guarantee badges |
| Anti-Prompt Cheat Sheet PDF | Page 3 | PDF | Hosted downloadable file |

---

## External Services Needed

| Service | Purpose | Pages |
|---|---|---|
| Email service (ConvertKit/Mailchimp) | Capture registrations from Page 1 form | Page 1 |
| Stripe | VIP payment ($47) | Page 2 |
| Stripe or Calendly | Strategy session payment/booking ($297) | Page 4 |
| Calendar event service | Add-to-calendar links | Page 3 |
| Facebook/Community platform | Community join link | Page 3 |
| Affiliate platform | Generate affiliate links | Page 3 |
| PDF hosting | Cheat sheet download | Page 3 |
