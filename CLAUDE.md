# Smoova landing page - working rules for Claude

## What this is
Static single-page marketing site for Smoova, a done-for-you direct-booking website service for Dutch beauty salons. Three tiers: Boutique (€1,799 setup + €99/mo, productized landing page), Studio (€2,499 + €389/mo, full marketing-team-as-a-service incl. Google Business + AI visibility), Atelier (€4,499 + €699/mo, multi-location + Retention Engine). Competes with Treatwell on the math (no per-booking commission; breakeven at ~€330/mo Treatwell volume on Boutique) and on the principle that salons should own their customer relationships, not rent them.

## Audience
Dutch beauty salon owners. Non-technical. Often solo or 2-3 person teams. They care about: more bookings, escaping Treatwell commission, looking professional. They will read this on a phone.

## Architecture - non-negotiable
- ONE file: `index.html`. All styles inline in `<style>` if not Tailwind utilities. All JS inline or via CDN.
- Tailwind CSS via CDN: `<script src="https://cdn.tailwindcss.com"></script>`
- Alpine.js via CDN for interactivity
- Fraunces (serif, headings) + Manrope (sans, body) via Google Fonts
- No build step. No npm. No bundler. No framework.
- Must work via `file://` AND via GitHub Pages serving from main branch root
- If a request would require a build step, push back and propose an inline-only alternative

## Brand assets - smoova_21_1_assets/
- `smoova_21_1_assets/` is the canonical source for Smoova brand assets. ALWAYS check it before designing anything visual.
- Use real logos, colors, type specimens, and images from this folder. Do not invent brand colors if real ones exist there.
- If a color palette is defined in the folder (palette file, style guide PDF, design tokens, etc.), use those EXACT hex values. Do not approximate.
- If a logo is present, use it. Do not generate a placeholder logo if a real one exists.
- If imagery exists in the folder, prefer it over placeholder.co URLs for the live site. Placeholders only acceptable during early scaffolding.
- If the folder is missing or empty, ask the user before inventing brand assets.

## Anti-generic guardrails - apply every time
- Colors: use the Smoova palette from `smoova_21_1_assets/`. Never use default Tailwind palette tokens (indigo-500, blue-600, etc.) for brand-significant elements.
- Shadows: layered, color-tinted, low-opacity. Never flat `shadow-md`.
- Typography: Fraunces headings with tight tracking (-0.02em to -0.03em on large display sizes). Manrope body with generous line-height (1.6-1.7). Never use the same font for both.
- Gradients: layer multiple radial gradients. Add SVG noise/grain texture for depth where appropriate.
- Animations: animate `transform` and `opacity` only. Never `transition-all`. Spring-style easing.
- Interactive states: every clickable element needs hover, focus-visible, and active states.
- Images: gradient overlay (`bg-gradient-to-t from-black/60 to-transparent`) plus optional color treatment with `mix-blend-multiply`.
- Spacing: intentional consistent rhythm using a small set of tokens (e.g. 4, 8, 16, 24, 48, 96px). Not random Tailwind steps.
- Depth: clear layering system (base → elevated → floating). Surfaces should not all sit at the same z-plane.

## Mobile-first - critical
- Design and build mobile (~390px) first, scale up with `sm:` `md:` `lg:` prefixes
- Test every section at iPhone width before considering it done
- Tap targets minimum 44x44px
- Body copy minimum 16px on mobile (no smaller)
- If a section only looks good on desktop, it's broken

## Copy rules
- Primary language: Dutch (default). English toggle via Alpine `lang` state.
- Prices: €99 not €99.00. €389, not "389 euros". Use `€` not `EUR`. Dutch convention for thousands (€1.799, not €1,799) in body copy; JSON-LD uses plain numerics (`"price": "1799"`).
- Benefit-led, not feature-led. "Take bookings 24/7" beats "Cloud-based scheduling module".
- No AI filler. No "empower your business", no "unlock the power of", no "in today's digital landscape".
- Tone: confident, warm, professional. Direct.

## Review workflow
- After any meaningful visual change, open `index.html` in a browser (just double-click it - no server needed) and check the change at mobile width AND desktop width.
- Compare against the design intent: does it match the spacing, type scale, color discipline above? If not, fix.
- Do at least 2 review passes for any new section before declaring it done.

## When making changes
- Show the change as a diff and explain WHY before WHAT
- Match existing patterns - check what's in the file before inventing new ones
- If the request is weak, push back and propose alternatives. Don't be a yes-man.
- If a request would violate a rule above (e.g. introduce a build step, use default Tailwind blue), say so and propose an alternative.

## Hard nos
- Don't introduce React, Vue, Next.js, Vite, or any framework
- Don't add a build step
- Don't use `transition-all`
- Don't use default Tailwind blue/indigo as primary brand color
- Don't add tracking scripts without asking
- Don't "improve" beyond what was asked - match the request
