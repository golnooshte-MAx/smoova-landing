# Product

## Register

brand

## Users

Independent beauty salon owners, primarily in the Netherlands today, expanding through Europe. Mostly women aged 25-55. Often running the business solo or with 2-3 staff. Non-technical: they did not become salon owners to build websites or read SaaS pricing pages. They read this site on a phone, between clients, on a break, sometimes at 9pm after closing.

Their context when they arrive: they are paying Treatwell 25-35% commission on every booking, including from repeat clients they personally won. They feel trapped by a platform that treats them as a line item. They want more bookings, less commission, and a brand presence that reflects the craft they actually deliver in their chair.

The job to be done: decide in under three minutes whether Smoova is real, credible, worth a 20-minute call. Not "explore features." Not "compare every plan." Decide.

## Product Purpose

Smoova is a done-for-you direct-booking website service for beauty salons. Three plans, each positioned against Treatwell's commission model:

- **Boutique** (€1,299 setup + €179/mo): solo salons, one chair, one language.
- **Studio** (€1,999 setup + €389/mo): the sweet spot for most established salons. Two languages, monthly SEO blog post, WhatsApp Business, quarterly review call.
- **Atelier** (€3,499 setup + €699/mo): premium or multi-location. Three languages, AI Visibility Pack and Retention Engine included, dedicated success manager.

Every tier includes the website, booking system with deposit, Google Business setup or optimization, automated emails, hosting, and visibility in AI search results. No commission, ever. Smoova competes on price and on principle: salons should own their customer relationship, not rent it.

This site exists to do one thing: book a 20-minute consultation. Every section either builds the case (indictment of Treatwell, proof of craft, transparent pricing) or removes a friction (calculator, FAQ, comparison). Success metric is consultation bookings, not page views.

## Brand Personality

Four words the founder used: **growth, luxury, efficiency, ownership.**

Luxury is the dominant register. Not the quiet thin-grey type kind of luxury. Hospitality-grade luxury with attitude. Aesop meets Aimé Leon Dore meets a slightly funky downtown salon you would actually walk into. Confident, warm, unflinching. The voice has prosecutorial edge when talking about Treatwell ("Exhibit A", "actually costing you", "Stop paying") and a calm, professional hand on the shoulder when talking to the salon owner directly.

Funky and hip is the modifier: rich color when it serves, unexpected scale breaks, italic display serifs doing emotional work, photography that feels staged and theatrical, not stock. Refuses to look like SaaS for businesses.

## Anti-references

What this should NEVER look like:

- **Generic SaaS landing pages.** Centered hero, gradient blob behind a stock dashboard mockup, three icon-and-caption feature cards, "Trusted by" logo strip. The Linear-clone aesthetic on tap.
- **Treatwell itself.** Functional, dense, "marketplace" energy. Smoova is the opposite of being a line item.
- **Healthcare-tech minimalism.** White + teal + lots of nothing. Reads as clinical, removes the warmth and craft that a salon brand needs.
- **Tailwind default look.** indigo-500, blue-600, slate-50, rounded-lg cards in a 3-column grid. Default Tailwind palette is banned for brand-significant elements. Default radii, default shadows, default everything signals "no design happened here."
- **AI filler copy.** "Empower your business", "unlock the power of", "in today's digital landscape", "elevate your salon." These phrases mean the writer gave up.
- **Flat shadows and uniform spacing.** `shadow-md` everywhere, `p-6` on every card. Reads as a Figma component dump.
- **Build-step complexity.** No React, Vue, Next.js, Vite, bundlers. The site is one HTML file, Tailwind via CDN, Alpine.js, and inline CSS where Tailwind cannot reach. Must work via `file://` and via GitHub Pages.

## Design Principles

1. **Editorial, not template-y.** Every section is a deliberate spread, not an assembled layout. Type hierarchy, photography, copy, color: each section earns its own composition. Cards are the lazy answer. Avoid unless they are truly the best affordance.

2. **Indictment is the narrative spine.** The site is structured as a case: Treatwell extracts, Smoova returns ownership. The calculator is exhibit, not feature. The pricing is verdict, not menu. Sections build emotionally, not just informationally.

3. **Salon-grade craft.** Hold the bar at "what a luxury salon's own brand would aspire to": Fraunces serif italic for emotional emphasis, Inter for body, JetBrains Mono for forensic eyebrow labels, restrained warm cream as the surface, rouge as the prosecutorial accent, gold as the brand accent, and theatrical photography. Refuse "tech for businesses" energy.

4. **Mobile-first reality.** Designed for one-handed iPhone reading first, scaled up. Tap targets minimum 44×44px. Body copy minimum 16px on mobile. Touch interactions tested on real phone widths. If a section only sings on desktop, it is broken.

5. **Ownership is the through-line.** Every meaningful surface should somewhere reinforce: your salon, your customers, your brand, your bookings, your rules. Smoova builds the website; the salon keeps the relationship.

6. **Push back on weak requests.** When a request would violate the rules above (introduce default Tailwind blue, add a build step, ship AI filler copy), say so and propose an alternative. Yes-man behavior produces template output.

## Accessibility & Inclusion

Practical, not certificate-chasing.

- **WCAG 2.2 AA** as the de facto contrast and interaction target, but no formal compliance commitment.
- **Mobile responsiveness is the primary commitment.** Tested at 320, 375, 390, 768, 1024, 1440 widths. No horizontal overflow. Touch targets ≥ 44×44px. Body type ≥ 16px on mobile.
- **prefers-reduced-motion** is respected on every animation: hero slideshow, third-line rotation, digit tumbler, hover transitions. Animations animate transform and opacity only, never layout properties.
- **Visible focus rings** on every interactive element using brand accent colors, not browser default outlines.
- **Semantic HTML** for headings, landmarks (`header`, `main`, `nav`, `footer`), and form labels associated with inputs.
- **Language is Dutch-friendly English** for now: Dutch salon owners read English fine. NL/EN toggle is wired and tested. Both languages must be visually balanced.
