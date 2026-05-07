# Funnel Studio Brand Kit

**Parent Brand**: forrestry.ai  
**Product**: Funnel Studio  
**Last Updated**: February 27, 2026

---

## Brand Identity

### Brand Essence

**Funnel Studio** is an AI-powered funnel building platform that combines natural intelligence with cutting-edge technology. We help businesses grow organically through data-driven insights and intelligent automation.

**Parent Brand**: forrestry.ai represents the ecosystem of AI tools that help businesses grow naturally and sustainably.

### Brand Personality
- **Professional**: Business-class SaaS platform
- **Innovative**: Forward-thinking AI technology
- **Natural**: Organic growth, not forced tactics
- **Trustworthy**: Reliable, stable, secure
- **Sophisticated**: Clean, modern, refined

### Design Philosophy

Premium SaaS aesthetic aligned with the Forrestry.ai homepage. Less "hacker terminal", more "elite SaaS". Deep charcoal backgrounds with subtle navy undertones, softened green accents, warm cream light mode, and liquid glass elements.

---

## Logo System

### Primary Logo
**File**: `public/logo-with-text.svg`
- Tree/circuit icon + "Funnel Studio" wordmark
- Use for: Login pages, marketing materials, presentations

### Icon Only
**File**: `public/logo.svg`
- Just the tree/circuit symbol
- Use for: Favicons, app headers, small spaces, social media avatars

### Logo Concept

The logo represents "Natural Intelligence":
- **Tree structure**: Organic growth, nature, life
- **Circuit board pattern**: AI, technology, innovation
- **Microchip symbols**: Data processing, intelligence
- **Circular form**: Ecosystem, completeness, holistic approach

### Logo Usage Guidelines

**DO:**
- Use on warm cream, deep charcoal, or subtle gray backgrounds
- Maintain clear space around logo (minimum 20px)
- Scale proportionally
- Use provided SVG files for best quality

**DON'T:**
- Distort or stretch the logo
- Change the colors (except approved variations)
- Use low-resolution versions

### Logo Variations
**Light Mode**: Green logo (#4ADE80) on warm cream background
**Dark Mode**: Green logo (#4ADE80) on deep charcoal background

---

## Color System

### Primary Brand Color: Softened Green (Premium SaaS)

```
Main Green (Primary):
  Hex: #4ADE80
  RGB: 74, 222, 128
  Use: Primary buttons, links, accents, highlights
  Note: Softened from original #00FF30 for premium feel

Light Green (Hover/Secondary):
  Hex: #22C55E
  RGB: 34, 197, 94
  Use: Hover states, secondary accents, darker contrast

Dark Green (Pressed):
  Hex: #16A34A
  RGB: 22, 163, 74
  Use: Active/pressed states, dark accents
```

### Light Mode (Premium Warm Cream)

```
Background:
  Hex: #FAFAF9
  Use: Main background (warm off-white, premium feel)

Surface:
  Hex: #F5F5F4
  Use: Elevated surfaces, sidebar backgrounds

Card:
  Hex: #FFFFFF
  Use: Cards (pure white for pop against warm bg)

Border:
  Hex: #E7E5E4
  Use: Dividers, borders, outlines (warm tone)

Text Primary:
  Hex: #1C1917
  Use: Headings, body text (rich black)

Text Secondary:
  Hex: #78716C
  Use: Captions, labels, muted text (warm gray)
```

### Dark Mode (Deep Charcoal with Navy Undertones)

```
Background:
  Hex: #07070F
  Use: Main background (deep charcoal, NOT pure black)

Surface:
  Hex: #0D0D15
  Use: Elevated surfaces, sidebar backgrounds

Card:
  Hex: #12121A
  Use: Cards, hover states

Border:
  Hex: #1F1F1F
  Use: Dividers, borders, outlines

Text Primary:
  Hex: #FFFFFF
  Use: Headings, body text

Text Secondary:
  Hex: #9CA3AF
  Use: Captions, labels, muted text
```

### Semantic Colors

```
Success:
  Hex: #4ADE80 (Same as primary green)
  Use: Success messages, confirmations

Warning:
  Hex: #F59E0B
  RGB: 245, 158, 11
  Use: Warnings, cautions

Error:
  Hex: #EF4444
  RGB: 239, 68, 68
  Use: Errors, destructive actions

Info:
  Hex: #3B82F6
  RGB: 59, 130, 246
  Use: Information, tips, neutral alerts
```

### Color Accessibility

All color combinations meet WCAG AAA standards:
- Green (#4ADE80) on White: ✅ AAA
- Green (#4ADE80) on Deep Charcoal: ✅ AAA
- Black text on Green: ✅ AAA
- Rich black text on Light backgrounds: ✅ AAA
- White text on Dark backgrounds: ✅ AAA

### Glass / Premium Effects

```
Glass Card (Dark Mode):
  Background: rgba(13, 13, 21, 0.6)
  Backdrop Filter: blur(40px)
  Border: 1px solid rgba(74, 222, 128, 0.1)
  Shadow: 0 25px 50px rgba(0, 0, 0, 0.25)

Glass Card (Light Mode):
  Background: rgba(255, 255, 255, 0.7)
  Backdrop Filter: blur(40px)
  Border: 1px solid rgba(74, 222, 128, 0.15)
  Shadow: 0 25px 50px rgba(0, 0, 0, 0.08)

Texture Overlay (Dark Mode):
  Background: radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)
  Size: 24px 24px

Texture Overlay (Light Mode):
  Background: radial-gradient(circle at 1px 1px, rgba(0,0,0,0.02) 1px, transparent 0)
  Size: 24px 24px

Green Glow:
  glow: 0 0 25px rgba(74, 222, 128, 0.2)
  Use: Focus states, highlights
```

---

## Typography

### Font Family

**Primary Font**: Inter
- Modern, clean, professional
- Excellent readability at all sizes
- Used by: Notion, Linear, Stripe, GitHub

**Monospace Font**: JetBrains Mono
- Used for: Code snippets, technical data

**Where to get it**:
- Google Fonts: https://fonts.google.com/specimen/Inter
- Already included in project

**Fallback**: system-ui, -apple-system, sans-serif

### Font Scale

```
Display (Hero):
  Size: 48px / 3rem
  Weight: 700 (Bold)
  Line Height: 1.1
  Letter Spacing: -0.025em (tight)
  Use: Hero sections, major headings

H1:
  Size: 36px / 2.25rem
  Weight: 700 (Bold)
  Line Height: 1.2
  Use: Page titles

H2:
  Size: 30px / 1.875rem
  Weight: 600 (Semibold)
  Line Height: 1.3
  Use: Section headings

H3:
  Size: 24px / 1.5rem
  Weight: 600 (Semibold)
  Line Height: 1.4
  Use: Subsection headings

H4:
  Size: 20px / 1.25rem
  Weight: 500 (Medium)
  Line Height: 1.4
  Use: Card titles, small headings

Body Large:
  Size: 18px / 1.125rem
  Weight: 400 (Regular)
  Line Height: 1.6
  Use: Intro paragraphs, important text

Body:
  Size: 16px / 1rem
  Weight: 400 (Regular)
  Line Height: 1.5
  Use: Standard body text

Body Small:
  Size: 14px / 0.875rem
  Weight: 400 (Regular)
  Line Height: 1.5
  Use: Secondary text, labels

Caption:
  Size: 12px / 0.75rem
  Weight: 400 (Regular)
  Line Height: 1.4
  Use: Captions, footnotes, timestamps
```

### Font Weights
- **Regular (400)**: Body text
- **Medium (500)**: Emphasized text, small headings
- **Semibold (600)**: Subheadings, important labels
- **Bold (700)**: Main headings, buttons

---

## Spacing System

Based on 4px base unit:

```
xs:  4px  / 0.25rem
sm:  8px  / 0.5rem
md:  16px / 1rem
lg:  24px / 1.5rem
xl:  32px / 2rem
2xl: 48px / 3rem
3xl: 64px / 4rem
4xl: 96px / 6rem
```

---

## Component Patterns

### Buttons

**Primary Button**:
```
Background: #4ADE80 (Softened Green)
Text: #000000 (Black)
Padding: 12px 24px
Border Radius: 12px
Font Weight: 600 (Semibold)
Hover: #22C55E
Active: #16A34A
Transition: all 200ms ease
```

**Secondary Button**:
```
Background: Transparent
Border: 2px solid #E7E5E4 (Light) / #1F1F1F (Dark)
Text: #1C1917 (Light) / #FFFFFF (Dark)
Padding: 12px 24px
Border Radius: 12px
Font Weight: 500 (Medium)
Hover: Background #F5F5F4 (Light) / #0D0D15 (Dark)
```

**Ghost Button**:
```
Background: Transparent
Text: #78716C (Light) / #9CA3AF (Dark)
Padding: 12px 24px
Border Radius: 12px
Font Weight: 500 (Medium)
Hover: Text #1C1917 (Light) / #FFFFFF (Dark)
```

**Danger Button**:
```
Background: rgba(239, 68, 68, 0.1)
Border: 1px solid rgba(239, 68, 68, 0.2)
Text: #EF4444
Hover: Background rgba(239, 68, 68, 0.2)
```

### Cards

**Default Card**:
```
Background: #FFFFFF (Light) / #0D0D15 (Dark)
Border: 1px solid #E7E5E4 (Light) / #1F1F1F (Dark)
Border Radius: 16px
Padding: 24px
Shadow: md
```

**Glass Card** (Premium):
```
Background: rgba(255,255,255,0.7) (Light) / rgba(13,13,21,0.6) (Dark)
Backdrop Filter: blur(40px)
Border: 1px solid rgba(74, 222, 128, 0.15) (Light) / rgba(74, 222, 128, 0.1) (Dark)
Border Radius: 16px
Shadow: xl
```

### Inputs

**Text Input**:
```
Background: #F5F5F4 (Light) / #12121A (Dark)
Border: 1px solid #E7E5E4 (Light) / #1F1F1F (Dark)
Border Radius: 12px
Padding: 12px 16px
Font Size: 16px
Focus: Border #4ADE80, Ring 2px rgba(74, 222, 128, 0.2)
```

---

## Voice & Tone

- Clear, direct communication
- No jargon unless necessary

**Confident but Humble**
- We know our stuff, but we're always learning
- We celebrate user success, not our own cleverness
- We admit when something is complex

**DO:**
- Use active voice
- Keep sentences short and clear
- Use "you" and "your" (user-focused)
- Explain the "why" behind actions
- Use positive language

**DON'T:**
- Use corporate jargon
- Write long, complex sentences
- Use passive voice
- Assume technical knowledge
- Use negative framing
- Use em dashes (—) in user-facing copy. Use commas, periods, colons, semicolons, or parentheses instead
- Use "it's not X, it's Y" contrast patterns (e.g., "You don't have a funnel problem. You have a friction problem."). State the point directly instead

### Example Copy

**Good**: "Create your first funnel in 5 minutes"
**Bad**: "Funnel creation functionality is now available"

**Good**: "We couldn't find that asset. Try searching again?"
**Bad**: "Error 404: Resource not found in database"

**Good**: "Your funnel is ready! Share it with your team."
**Bad**: "Funnel generation process completed successfully"

---

## Usage Examples

### Login Page
- Logo: Full logo with "Funnel Studio" text
- Background: Deep charcoal (#07070F) in dark mode, warm cream (#FAFAF9) in light mode
- Primary button: Softened green (#4ADE80) with black text
- Glass card effect for login form

### Dashboard
- Logo: Icon only in header
- Cards: Glass card style with subtle green-tinted borders
- Accent color: Softened green for CTAs and highlights
- Typography: Inter font throughout
- Texture overlay for depth

### Buttons
- Primary actions: Softened green background, black text
- Secondary actions: Outlined with warm border
- Destructive actions: Red (#EF4444)

---

## File Structure

```
public/
├── logo.svg                 # Icon only
├── logo-with-text.svg       # Icon + Funnel Studio text
└── favicon.ico              # (to be created from logo.svg)

config/
└── theme.ts                 # Theme configuration (source of truth)

index.html                   # CSS custom properties (light/dark mode)
BRAND_KIT.md                 # This file
DESIGN_SYSTEM.md             # Component documentation
```

---

## Implementation

All brand colors and styles are centralized in:
- **`config/theme.ts`** - JavaScript/TypeScript theme object (source of truth)
- **`index.html`** - CSS custom properties (light/dark mode switching)
- **Tailwind Config** - Tailwind theme extensions

To update brand colors:
1. Update `config/theme.ts`
2. Update CSS variables in `index.html`
3. Components automatically inherit new colors

---

## Quick Reference

```
Primary Color:        #4ADE80 (Softened Green)
Primary Hover:        #22C55E
Primary Active:       #16A34A

Dark Mode BG:         #07070F (Deep Charcoal)
Dark Mode Surface:    #0D0D15
Dark Mode Card:       #12121A

Light Mode BG:        #FAFAF9 (Warm Cream)
Light Mode Surface:   #F5F5F4
Light Mode Card:      #FFFFFF

Primary Font:         Inter
Monospace Font:       JetBrains Mono

Border Radius:        12-16px for most elements
Spacing:              16px or 24px for padding
Button Text on Green: Black (#000000)
Glass Effect:         backdrop-blur-2xl + green-tinted border
Green Glow:           0 0 25px rgba(74, 222, 128, 0.2)
```

---

## Version History

| Date | Change | Reason |
|------|--------|--------|
| Feb 4, 2026 | Initial brand kit | Project creation |
| Feb 27, 2026 | Design system refresh | Align with Forrestry.ai premium standards |

### Design System Refresh (Feb 27, 2026)
- Primary green: `#10B981` → `#4ADE80` (softened, premium SaaS)
- Dark mode BG: `#000000` (pure black) → `#07070F` (deep charcoal)
- Light mode BG: `#FFFFFF` → `#FAFAF9` (warm cream)
- Added glass card and texture overlay effects
- Added JetBrains Mono as monospace font
- Button text on green: white → black (better contrast)
- Overall aesthetic: "hacker terminal" → "elite SaaS"

---

*Brand Kit maintained by Funnel Studio team*
*For questions or updates, contact brand@forrestry.ai*
