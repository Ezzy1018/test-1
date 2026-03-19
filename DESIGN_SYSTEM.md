# [Studio] — Design System

> AI-Powered Design Studio for Go-To-Market Landing Pages

---

## 1. Brand DNA

**Positioning:** An international design studio, powered end-to-end by AI. It understands your request, then builds your landing page. Focused on startups shipping products to market.

**Tone:** Confident but warm. Technical but human. Fast but never careless.

**Visual Mood:** Dark, cinematic, premium. Think Apple keynote meets startup energy. The 3D environment signals "the future" while the typography and copy feel approachable.

---

## 2. Color Tokens

```
/* ===== Core Palette ===== */
--bg-primary:       #000000;   /* Pure black — the void */
--bg-secondary:     #0a0a0a;   /* Near-black panels */
--bg-card:          rgba(255, 255, 255, 0.05);   /* Glass card */
--bg-card-hover:    rgba(255, 255, 255, 0.08);   /* Glass card hover */

/* ===== Text ===== */
--text-primary:     #ffffff;   /* Headlines, key copy */
--text-secondary:   rgba(255, 255, 255, 0.6);    /* Body, descriptions */
--text-tertiary:    rgba(255, 255, 255, 0.3);    /* Muted, captions */
--text-accent:      rgba(255, 255, 255, 0.95);   /* Emphasis within glass */

/* ===== Accents ===== */
--accent-primary:   #ffffff;   /* CTA buttons, active states */
--accent-warm:      #c9a87c;   /* Optional warm gold for premium feel */
--accent-glow:      rgba(255, 255, 255, 0.15);   /* Subtle glow/bloom */

/* ===== Interactive ===== */
--btn-primary-bg:   #ffffff;
--btn-primary-text: #000000;
--btn-primary-hover:#cfcfcf;

--btn-ghost-bg:     rgba(255, 255, 255, 0.2);
--btn-ghost-text:   #ffffff;
--btn-ghost-hover:  rgba(255, 255, 255, 0.3);

--divider:          rgba(255, 255, 255, 0.1);
--glass-border:     rgba(255, 255, 255, 0.08);

/* ===== 3D Scene Materials ===== */
--scene-bg:         #000000;
--scene-metal:      #797979;   /* Metallic models */
--scene-sphere:     #8d8d8d;   /* Reflective sphere */
--scene-fog:        #000000;
```

---

## 3. Typography

### Font Stack

| Role | Font | Weight | Source |
|------|------|--------|--------|
| Display / Headlines | Instrument Serif (Regular + Italic) | 400 | Google Fonts |
| UI / Nav / Labels | Inter | 400–600 | Google Fonts |
| Mono / Technical | Geist Mono | 400, 700 | Vercel |

### Type Scale

```
/* ===== Headlines ===== */
.hero-title {
  font-family: "Instrument Serif", serif;
  font-size: clamp(3rem, 8vw, 5rem);    /* 48–80px fluid */
  line-height: 1.0;
  letter-spacing: -0.04em;
  color: var(--text-primary);
}

.section-title {
  font-family: "Instrument Serif", serif;
  font-size: clamp(2rem, 5vw, 4rem);    /* 32–64px */
  line-height: 1.0;
  color: var(--text-primary);
}

.cta-title {
  font-family: "Instrument Serif", serif;
  font-size: clamp(2rem, 5vw, 3rem);    /* 32–48px */
  line-height: 1.0;
  text-align: center;
  color: var(--text-primary);
}

/* ===== Accent / Emphasis ===== */
.italic-accent {
  font-family: "Instrument Serif", serif;
  font-style: italic;
  /* Used inline to highlight key words */
}

/* ===== Labels ===== */
.label {
  font-family: "Inter", sans-serif;
  font-size: 12px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--text-secondary);
}

/* ===== Body ===== */
.body-lg {
  font-family: "Inter", sans-serif;
  font-size: 24px;
  line-height: 1.15;
  color: var(--text-secondary);
}

.body-md {
  font-family: "Inter", sans-serif;
  font-size: 16px;
  line-height: 1.15;
  color: var(--text-secondary);
}

.body-sm {
  font-family: "Inter", sans-serif;
  font-size: 14px;
  line-height: 1.15;
  color: var(--text-tertiary);
}
```

### Responsive Scaling

```
@media (max-width: 992px) {
  .hero-title  { font-size: clamp(2.5rem, 6vw, 4rem); }
  .section-title { font-size: clamp(1.75rem, 4vw, 3rem); }
  .body-lg     { font-size: 20px; }
}

@media (max-width: 480px) {
  .hero-title  { font-size: 48px; }
  .section-title { font-size: 40px; }
  .body-lg     { font-size: 18px; }
}
```

---

## 4. Spacing & Layout

```
/* ===== Container ===== */
.container {
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 40px;
}

@media (max-width: 992px) {
  .container { padding: 0 20px; }
}

/* ===== Section Vertical Rhythm ===== */
section {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ===== Gaps ===== */
--gap-xs: 8px;
--gap-sm: 16px;
--gap-md: 24px;
--gap-lg: 40px;
--gap-xl: 60px;
--gap-2xl: 80px;

/* ===== Border Radius ===== */
--radius-sm: 8px;
--radius-md: 12px;
--radius-pill: 999px;
```

---

## 5. Component Library

### 5.1 Navigation

**Desktop:** Fixed top bar, max-width 1440px, flex row with space-between.
- Left: Logo mark + "Studio." in Instrument Serif 32px
- Center: Pill-shaped glass nav (backdrop-filter: blur(10px), bg #14141433, border-radius 999px, height 60px)
  - Links: About, Services, Clients, Pricing — Inter 16px, white
- Right: "Start a Project" CTA button (white bg, black text, radius 8px, 48px height)

**Mobile:** Hamburger → fullscreen glass overlay with X close, vertical link stack.

```
.nav-pill {
  background: rgba(20, 20, 20, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 999px;
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-cta {
  background: #ffffff;
  color: #000000;
  border-radius: 8px;
  padding: 16px 24px;
  height: 48px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background 300ms ease;
}
.nav-cta:hover { background: #cfcfcf; }
```

### 5.2 Hero Section

Full viewport (100dvh), centered content stack:
1. Scroll indicator: "/ Scroll down" — Inter 16px, text-tertiary, absolute bottom-left
2. Headline: Instrument Serif, fluid 48–80px, centered, max-width ~45em
   - Key phrase in *italic* for emphasis
3. Two CTA buttons side-by-side:
   - Primary: "Start a Project" — white bg, black text, radius 8px, with arrow icon
   - Ghost: "See Our Work" — glass bg, white text, radius 8px
4. Subtitle below: Inter light 24px, text-secondary, max-width 33%, positioned right

**3D Background:** Fixed position, z-index -1. Animated metallic spiral models, reflective sphere, caustic light projections, bloom + vignette post-processing. Subtle mouse-parallax camera tilt (max 1°).

### 5.3 Section Headers

```
.section-header {
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.section-label {
  /* "OUR STUDIO" — uppercase label + thin divider line */
  display: flex;
  align-items: center;
  gap: 16px;
}

.section-label::after {
  content: "";
  height: 1px;
  background: var(--text-primary);
  opacity: 0.2;
  flex: 1;
}
```

### 5.4 Glass Card

Used for client logos, pricing, feature showcases.

```
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  padding: 32px;
  border: 1px solid var(--glass-border);
  transition: all 300ms ease;
}

.glass-card:hover {
  background: rgba(255, 255, 255, 0.08);
}
```

### 5.5 Buttons

```
/* Primary — solid white */
.btn-primary {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: #ffffff;
  color: #000000;
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background 300ms ease;
  height: 48px;
}
.btn-primary:hover { background: #cfcfcf; }

/* Ghost — glass */
.btn-ghost {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 16px 24px;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  color: #ffffff;
  border: none;
  border-radius: 8px;
  font-family: "Inter", sans-serif;
  font-size: 16px;
  cursor: pointer;
  transition: background 300ms ease;
  height: 48px;
}
.btn-ghost:hover { background: rgba(157, 157, 157, 0.2); }

/* Text link — with underline animation */
.link-underline {
  position: relative;
  color: var(--text-tertiary);
  cursor: pointer;
  transition: color 200ms ease;
}
.link-underline:hover { color: var(--text-primary); }
.link-underline::after {
  content: "";
  position: absolute;
  left: 0; bottom: -0.1em;
  height: 1px;
  width: 100%;
  background: #fff;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms ease;
}
.link-underline:hover::after { transform: scaleX(1); }
```

### 5.6 Pricing Cards

Three tiers displayed in a horizontal row (stacked on mobile):

| | Starter | Growth | Scale |
|---|---------|--------|-------|
| **Delivery** | 48 hours | 1 week | 2–4 weeks |
| **Includes** | 1 landing page, mobile-responsive, basic SEO | Up to 5 pages, custom animations, analytics | Full GTM site, 3D/interactive, ongoing iteration |
| **Price** | Starting at $X | Starting at $Y | Custom |

- Each card: glass-card style
- Featured tier (Growth): subtle glow border or highlighted background
- CTA inside each card

### 5.7 Footer

Split into two zones:
1. **CTA Zone** (glass panel): "Ready to launch your next product?" + email copy-to-clipboard + social links
2. **Base Zone** (dark): Logo, nav links, copyright

---

## 6. Interaction Patterns

### Scroll Behavior
- Lenis smooth scroll (no native scrollbar, custom easing)
- Sections snap loosely (100vh each)
- Scroll-triggered fade-in animations (Framer Motion, IntersectionObserver)

### Parallax
- 3D camera tilts subtly with mouse position (max 1° on X/Y)
- Text elements can have subtle parallax offset on scroll

### Loading
- Full-screen loading overlay: Logo center + spinning ring animation
- Body fades in (opacity 0 → 1) once loaded

### Micro-interactions
- Button hover: background color transition 300ms
- Nav links: color transition to #cfcfcf on hover
- Client logos: opacity 0.5 → 0.8 on hover
- Footer email: copy-to-clipboard with tooltip "Copied" pill
- Glass cards: background opacity lift on hover

---

## 7. 3D Scene Spec

**Engine:** Three.js via @react-three/fiber + @react-three/drei

**Scene elements:**
- 2 animated metallic spiral/torus models (looping rotation)
- 1 reflective PBR sphere (HDR environment map)
- 2 background planes (dark gradient)
- 3 spotlights (1 with caustics video texture)
- 2 directional lights (key + fill)

**Post-processing (via @react-three/postprocessing):**
- Bloom (intensity 1.5, threshold 0.9)
- Noise (opacity 0.2 — film grain)
- Vignette (darkness 1, opacity 0.5)
- Tone mapping (exposure 1, white point 4)

**Performance:** Auto-resolution reduction targeting 60fps, 8x MSAA.

**Mobile:** Scene hidden or simplified. Use static gradient/image fallback.

---

## 8. Responsive Breakpoints

```
/* Desktop first */
--bp-desktop: 1440px;
--bp-laptop:  1200px;
--bp-tablet:  992px;
--bp-mobile:  480px;
```

**Key responsive behaviors:**
- `≤992px`: Padding reduces to 20px, font sizes scale down, 3D scene simplifies
- `≤480px`: Nav becomes hamburger menu, client grid goes 2-col, footer stacks vertically, hero subtitle moves below CTAs

---

## 9. Content Voice Guide

**DO:**
- Write like a smart friend who runs a studio
- Use "you" and "we" — direct, personal
- Short sentences. Active voice.
- Acknowledge startup pain: tight budgets, tight timelines, the need to ship
- Show confidence without arrogance: "We ship landing pages that convert. Fast."

**DON'T:**
- Corporate jargon ("synergize", "leverage", "best-in-class")
- Over-promise ("guaranteed 10x ROI")
- Sound robotic or generic
- Use filler ("In today's fast-paced digital landscape...")

**Example headlines:**
- "Your product deserves a landing page that actually ships."
- "We think like founders. We build like machines."
- "From brief to live in 48 hours. No compromises."
