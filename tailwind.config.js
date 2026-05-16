/**
 * Smoova — Theatre Rouge token system (source of truth).
 *
 * Site ships via Tailwind Play CDN (no build step); this same theme.extend
 * block is mirrored inline in <head> of smoova_24.html as `tailwind.config = {...}`.
 * Keep both in sync.
 *
 * If we ever introduce a real build step (PostCSS / Vite), this file becomes
 * the live config and the inline block in the HTML should be removed.
 */

module.exports = {
  content: ['./smoova_24.html'],
  theme: {
    extend: {
      colors: {
        ink: {
          void: '#0A0507',
          noir: '#16090C',
        },
        rouge: {
          profond: '#2B0810',
          DEFAULT: '#4A0E1A',
          velours: '#6B1525',
        },
        bone: {
          DEFAULT: '#F2EBDD',
          warm:    '#E8DCC4',
          ivory:   '#FBF7EF',
        },
        gold: {
          DEFAULT: '#B8924B',
          vif:     '#D4A857',
          brule:   '#8A6B2E',
        },
        brass:     '#9C7B3F',
        champagne: '#E8D4A8',
        peacock: {
          DEFAULT: '#0F4C5C',
          vif:     '#1B6B7F',
        },
        magenta: {
          DEFAULT: '#FF2D87',
          glow:    '#FF5BA0',
        },
        text: {
          primary:     '#0A0507',
          secondary:   '#4A2D32',
          ondark:      '#F2EBDD',
          ondarkmuted: '#A89485',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans:    ['Inter', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
        mono:    ['"JetBrains Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
    },
  },
};
