---
name: Smoova
description: Done-for-you direct-booking website service for beauty salons. Theatre Rouge brand system.
colors:
  rouge-profond: "#2B0810"
  rouge: "#4A0E1A"
  rouge-velours: "#6B1525"
  bone: "#F2EBDD"
  bone-warm: "#E8DCC4"
  bone-ivory: "#FBF7EF"
  gold: "#B8924B"
  gold-vif: "#D4A857"
  gold-brule: "#8A6B2E"
  champagne: "#E8D4A8"
  ink-void: "#0A0507"
  ink-noir: "#16090C"
  text-primary: "#0A0507"
  text-secondary: "#4A2D32"
  text-ondark: "#F2EBDD"
  text-ondarkmuted: "#BFA89A"
typography:
  display:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(3rem, 5.5vw, 4.5rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.025em"
    fontFeature: "opsz auto"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 300
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 300
    lineHeight: 1.1
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Inter, system-ui, sans-serif"
    fontSize: "clamp(1rem, 1.1vw, 1.125rem)"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "10px"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.32em"
  accent:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(1.125rem, 1.4vw, 1.25rem)"
    fontWeight: 300
    lineHeight: 1.3
    letterSpacing: "normal"
rounded:
  hair: "2px"
  input: "8px"
  card: "24px"
  pill: "9999px"
spacing:
  hair: "1px"
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  xxl: "96px"
components:
  button-primary:
    backgroundColor: "{colors.rouge-profond}"
    textColor: "{colors.bone}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.rouge-velours}"
    textColor: "{colors.bone}"
  button-gold:
    backgroundColor: "{colors.gold-vif}"
    textColor: "{colors.rouge-profond}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-gold-hover:
    backgroundColor: "{colors.champagne}"
    textColor: "{colors.rouge-profond}"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.rouge-profond}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline-hover:
    backgroundColor: "{colors.rouge-profond}"
    textColor: "{colors.bone}"
  card:
    backgroundColor: "{colors.bone-ivory}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.card}"
    padding: "clamp(26px, 3vw, 34px)"
  card-featured:
    backgroundColor: "{colors.rouge-profond}"
    textColor: "{colors.bone}"
    rounded: "{rounded.card}"
    padding: "clamp(32px, 3.6vw, 44px)"
  eyebrow-label:
    backgroundColor: "transparent"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
---

# Design System: Smoova

## 1. Overview

**Creative North Star: "Theatre Rouge"**

A Dutch beauty salon owner reads this site at 9pm after closing, on her phone, between two clients she just booked. The design must feel like the salon she already runs in her chair: warm cream surfaces under tungsten light, theatrical photography that takes itself seriously, italic display serifs doing the emotional work, a deep prosecutorial rouge for the indictment of Treatwell, and gold for the brand promise. Hospitality-grade luxury with attitude. Aesop meets Aimé Leon Dore meets a slightly funky downtown salon you would actually walk into.

The narrative spine is a case file. Sections are "Exhibits". The pricing is a verdict, not a menu. The calculator is evidence, not a feature. Every meaningful surface somewhere reinforces ownership: your salon, your customers, your brand, your bookings, your rules. The site refuses to look like SaaS for businesses, refuses to look like Treatwell, refuses healthcare-tech minimalism, refuses default Tailwind anything.

**Key Characteristics:**
- Warm cream as the dominant surface; rouge-profond as the prosecutorial counter-surface; gold-vif as the <10% brand accent.
- Editorial spreads, not stacked landing-page sections. Asymmetric, left-anchored compositions.
- Fraunces italic carries emotional emphasis; JetBrains Mono carries forensic labels (Exhibit tags, micro-copy).
- Photography is staged and theatrical, never stock. Subjects sit in red-gold light.
- Mobile-first reading. Tap targets ≥ 44×44px. Body ≥ 16px on mobile.

## 2. Colors: The Theatre Rouge Palette

A committed palette. Bone cream owns the room, rouge-profond stages the indictment, gold-vif signs the verdict.

### Primary
- **Rouge Profond** (`#2B0810`): The dominant deep accent. Used on the hero overlay gradient, the featured tier card, the contact/footer section, and the 14-day guarantee verdict block. When a surface needs to feel like it weighs something, this carries it. Roughly 25–35% of any given screen on hero/pricing/contact sections; 0% on body-prose sections like the FAQ.
- **Rouge** (`#4A0E1A`): The mid-rouge default, used for italic display accents in headlines (`<em class="text-rouge">`) and prosecutorial micro-copy ("Treatwell costs you…", "actually costing you"). Rare, sharp.
- **Rouge Velours** (`#6B1525`): The hover and softer-rouge variant. Primary CTAs lift to this on hover.

### Secondary
- **Gold Vif** (`#D4A857`): The brand accent. The Stamp. Reserved for the most prosecutorial / most actionable moments: featured-tier CTAs, focus rings, badges ("Most popular"), hairline rules, italic verdict accents on dark surfaces. Capped at ~10% of any screen.
- **Gold** (`#B8924B`): The calmer base gold. Used for hairlines between menu rows, mid-strength rule lines, eyebrow accents.
- **Gold Brulé** (`#8A6B2E`): The burnt darker gold used on italic Fraunces sub-statements over cream (e.g. the editorial italic accent below pricing headline). Carries the "stamped on parchment" feel.
- **Champagne** (`#E8D4A8`): The soft gold-cream. Used as `text-champagne` on rouge-profond surfaces (where pure bone reads too cold) and as the solid color for the giant "14" in the guarantee block.

### Neutral
- **Bone** (`#F2EBDD`): The primary cream surface. Default `body` background. The room.
- **Bone Ivory** (`#FBF7EF`): The lightest cream. Card surfaces sit one step brighter than the room they're in.
- **Bone Warm** (`#E8DCC4`): The deeper cream. Used for atmospheric overlays and the cream-side-fade transitions between sections (e.g. Treatwell calculator → pricing).
- **Ink Void** (`#0A0507`): The darkest tone. Hero background. Tints all body text via `text-primary`.
- **Ink Noir** (`#16090C`): A near-black with a rouge tint. Rarely used directly; reserved for atmospheric depth.

### Text
- **Text Primary** (`#0A0507`): All body text on cream surfaces. Tinted toward rouge, never pure black.
- **Text Secondary** (`#4A2D32`): Captions, eyebrow labels, supporting prose on cream.
- **Text on Dark** (`#F2EBDD`): Body text on rouge-profond / ink-void surfaces. Same hex as bone.
- **Text on Dark Muted** (`#BFA89A`): Supporting prose on dark surfaces (footer sub-copy, hero meta).

### Named Rules
**The One Voice Rule.** Gold-vif is used on ≤10% of any given screen. Its rarity is the point. If gold-vif is everywhere, nothing is being signed.

**The No Default Blue Rule.** Default Tailwind palette tokens (indigo-500, blue-600, slate-50) are prohibited on brand-significant elements. The palette is rouge / bone / gold. Period.

**The Rouge-Tinted Neutral Rule.** Never `#000` or `#fff`. Every neutral is tinted toward the rouge hue. Bone over white, ink-void over black.

## 3. Typography

**Display Font:** Fraunces (with Georgia, serif fallback). Variable font; `font-optical-sizing: auto` enables Fraunces's opsz axis to render display sizes at their best.
**Body Font:** Inter (with system-ui, sans-serif fallback).
**Label/Mono Font:** JetBrains Mono (with ui-monospace fallback).

**Character:** A serif with romance and weight (Fraunces), against a workhorse sans with no fuss (Inter), with an explicitly forensic monospace (JetBrains Mono) for the case-file eyebrows ("Exhibit A · De Treatwell-rekening"). The pairing is editorial, not technical.

### Hierarchy
- **Display** (Fraunces, weight 300, `clamp(3rem, 5.5vw, 4.5rem)`, line-height 1.02, tracking −0.025em): Hero h1 only. The cinematic line-mask reveal sits here.
- **Headline** (Fraunces, weight 300, `clamp(2rem, 4vw, 3rem)`, line-height 1.05, tracking −0.02em): Section h2s. Used with an inline italic accent: `Bouw eens. <em class="not-italic text-rouge">Voor altijd van jou.</em>`
- **Title** (Fraunces, weight 300, `clamp(1.5rem, 2.2vw, 2rem)`, line-height 1.1, tracking −0.015em): Card titles, sub-section headers, pricing tier headlines on the featured card.
- **Body** (Inter, weight 400, `clamp(1rem, 1.1vw, 1.125rem)`, line-height 1.65): Paragraph prose. Cap at 65–75ch for legibility. Min 16px on mobile.
- **Label** (JetBrains Mono, weight 500, 10–11px, line-height 1.4, letter-spacing 0.28em–0.32em, uppercase): The forensic eyebrow tags, the "Most popular" badge, button labels, sub-captions, micro-copy under big numbers.
- **Accent** (Fraunces italic, weight 300, `clamp(1.125rem, 1.4vw, 1.25rem)`): The italic sub-statement that often follows a headline, set in `text-gold-brule`. Used to add an editorial "ruling" tone after the main verdict.

### Named Rules
**The Italic-Carries-Emotion Rule.** Fraunces italic is reserved for emotional and editorial accents (headlines' second half, sub-statements). Never used for body prose. Body stays Inter.

**The Forensic Label Rule.** Every eyebrow, every micro-tag, every "20 minuten / vrijblijvend / geen verplichting" line is JetBrains Mono, uppercase, with letter-spacing ≥ 0.28em. The wider tracking is the visual signature of "this is on the record."

## 4. Elevation

A shadow vocabulary, not a flat system. Every shadow is tinted toward rouge (`rgba(43, 8, 16, …)`), never grey. Featured surfaces lift more than resting surfaces. Gold CTAs cast a gold-tinted glow, not a dark shadow, to suggest "branded warmth" instead of "depth."

### Shadow Vocabulary
- **Ambient Low** (`box-shadow: 0 24px 48px -28px rgba(43, 8, 16, 0.18)`): Resting state for tier cards, surfaces sitting on cream.
- **Ambient Mid** (`box-shadow: 0 32px 64px -28px rgba(43, 8, 16, 0.28)`): Card hover. A 3px lift accompanies it.
- **Ambient High** (`box-shadow: 0 36px 72px -22px rgba(43, 8, 16, 0.45)`): The featured-tier card and the 14-day guarantee verdict block. The "this matters" level.
- **CTA Rouge** (`box-shadow: 0 24px 48px -12px rgba(43, 8, 16, 0.35)`): Under primary rouge CTAs.
- **CTA Gold** (`box-shadow: 0 18px 36px -10px rgba(212, 168, 87, 0.45)`): Under gold CTAs. Branded warmth, not depth.

### Named Rules
**The Rouge-Tint Shadow Rule.** Shadows are never `rgba(0, 0, 0, …)`. Every shadow inherits a rouge undertone so depth reads as warm, not generic.

**The Lift-on-Hover Rule.** Card-shaped elements rise 3px on hover with `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-quint). Layout properties are never animated; only `transform` and `box-shadow`.

## 5. Components

Components are real affordances earned by content; they are not the default container. Most prose surfaces have no container at all.

### Buttons

All buttons share a pill radius and the JetBrains Mono uppercase label with letter-spacing 0.28em.

- **Primary (rouge-on-cream)**: `background: rouge-profond; color: bone; padding: 14px 28px; border-radius: 9999px`. Hover lifts to `rouge-velours`. CTA Rouge shadow underneath. Used for the main "Plan een kennismaking" / "Book a discovery call" CTA across the page.
- **Gold (the brand-signed CTA)**: `background: gold-vif; color: rouge-profond`. Hover to `champagne`. CTA Gold (branded-warmth) shadow. Reserved for moments that carry "this is the verdict" energy: the featured-tier "Choose Studio" button, the 14-day verdict block CTA. Shimmer micro-animation runs inside the trailing arrow chip.
- **Outline**: `background: transparent; border: 1px solid rouge-profond; color: rouge-profond`. Hover fills to `rouge-profond` with `bone` text. Used as the secondary tier CTAs (Boutique, Atelier) so the featured gold CTA holds prominence.
- **Focus ring**: 2px solid `gold-vif`, offset 4px, on every focusable element. Inherited globally via `:focus-visible`.

### Cards / Containers

- **Corner Style:** `border-radius: 24px` (the `rounded-3xl` token).
- **Background:** `bone-ivory` for the canonical card on cream. `rouge-profond` for the featured/verdict card.
- **Border:** 1px hairline at `gold-vif` 18% (rest) or `gold-vif` 45% (featured).
- **Shadow Strategy:** Ambient Low at rest; Ambient Mid on hover (3px lift); Ambient High for featured/verdict.
- **Internal Padding:** `clamp(26px, 3vw, 34px)` for normal cards; `clamp(32px, 3.6vw, 44px)` for featured cards. Padding rhythm is intentional, not uniform.

### Eyebrow Label

JetBrains Mono uppercase, 10px, letter-spacing 0.32em, `text-secondary` color (or `gold-vif` on rouge surfaces). Often paired with a thin gold hairline (`block h-px w-10 bg-gold`) on either side. The forensic case-file tag, e.g. "Exhibit A · De Treatwell-rekening".

### Section Headline + Italic Accent

Two-tone headline pattern: roman + italic-as-emphasis.
```html
<h2 class="font-display font-light tracking-[-0.025em] text-rouge-profond">
  Bouw eens.
  <em class="not-italic text-rouge">Voor altijd van jou.</em>
</h2>
```
The `<em>` is set to `not-italic` so the visual italic comes from a separate Fraunces *italic* face only when the project explicitly wants italic. Color contrast (`text-rouge-profond` → `text-rouge`) carries the emphasis when italic isn't applied.

### Editorial Sub-Statement

Fraunces italic in `text-gold-brule`, sitting 24–36px below the headline, max-width ~28ch. The "ruling" line that explains the verdict.

### Navigation

Top-left `smoova.` wordmark (Fraunces display medium with a gold-vif italic period). Top-right: NL/EN language toggle (mono small caps) + a link-underlined "Plan een kennismaking" / "Book a discovery call" text link. Floats over the hero (`position: absolute`, transparent background). Never gains a backdrop fill on scroll.

### Hero Slideshow

4 staged photographs cross-fade on a 20s loop (`cubic-bezier(0.4, 0, 0.2, 1)`). Each slide has explicit `.hero-slide-N` classes for timing decoupled from DOM order (so `<picture>` wrappers don't break the animation). `prefers-reduced-motion` collapses the animation to a single static frame.

### Section Cream-Side-Fade

A reusable atmospheric device: a linear gradient at the section edge that fades into the cream color of the adjacent section, eliminating any visible line between consecutive sections. Used on the Verschil section (LEFT edge fades into Treatwell calc above and Pricing below) and on the closing section sides (fade into FAQ above). Implemented with `background-image: linear-gradient(...)` layered on the section background stack.

## 6. Do's and Don'ts

### Do:
- **Do** name every section as if it were an exhibit ("De Treatwell-rekening", "De voorwaarden"). The case-file narrative is the structural through-line.
- **Do** anchor sections to the left. Smoova wordmark sets the left edge; section headlines should align to it. `lg:px-20` outer padding, content not wrapped in an additional centered max-width unless deliberate.
- **Do** vary internal padding by tier and importance: featured cards get more breathing room (`clamp(32px, 3.6vw, 44px)`); resting cards stay tighter (`clamp(26px, 3vw, 34px)`).
- **Do** use Fraunces italic to carry emotion. The italic on a sub-statement is doing the work that a SaaS site would try to do with a gradient.
- **Do** keep eyebrows in JetBrains Mono with letter-spacing ≥ 0.28em. The wide tracking is the signature.
- **Do** tint every shadow toward rouge (`rgba(43, 8, 16, …)`). Grey shadows are not part of this system.
- **Do** respect `prefers-reduced-motion` on every animation: slideshow, line-mask, fade-up, pulse, shimmer.
- **Do** test every change at iPhone width (≈390px) before declaring it done. If a section only sings on desktop, it is broken.

### Don't:
- **Don't** use generic SaaS landing-page patterns: centered hero with gradient blob, three icon-and-caption feature cards, "Trusted by" logo strips. The Linear-clone aesthetic is on tap and prohibited.
- **Don't** look like Treatwell. Functional, dense, "marketplace" energy is the opposite of what this is.
- **Don't** lean on healthcare-tech minimalism. White + teal + lots of nothing reads as clinical and removes the warmth this brand needs.
- **Don't** use default Tailwind palette tokens (`indigo-500`, `blue-600`, `slate-50`, `rounded-lg` on brand-significant elements). The palette is rouge / bone / gold. Default radii (`rounded-md`), default shadows (`shadow-md`), default everything signals "no design happened here."
- **Don't** ship AI filler copy: "empower your business", "unlock the power of", "in today's digital landscape", "elevate your salon." These phrases mean the writer gave up.
- **Don't** use flat grey shadows or uniform padding across every card.
- **Don't** introduce build-step complexity. No React, Vue, Next.js, Vite, bundlers. The site is one HTML file, Tailwind via CDN, Alpine.js, and inline CSS where Tailwind cannot reach. Must work via `file://` and via GitHub Pages.
- **Don't** use `transition-all`. Animate `transform`, `opacity`, `color`, `background-color` explicitly. Never animate layout properties.
- **Don't** apply `background-clip: text` with a gradient (banned: gradient text). Use a solid color and let scale + weight carry emphasis.
- **Don't** ship em dashes. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** wrap everything in a container. Most prose surfaces don't need one. Cards are the lazy answer.
- **Don't** add a backdrop-blur "glassmorphism" treatment as decoration. Rare and purposeful, or nothing.
- **Don't** use side-stripe borders (`border-left` greater than 1px as a colored accent). Use full borders, background tints, leading numerals, or nothing.
