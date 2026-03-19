# Studio — AI-Powered Design Studio

An international design studio powered end-to-end by AI. We build go-to-market landing pages for startups — fast, polished, and conversion-ready.

**Live:** https://sensational-beijinho-64b464.netlify.app

## What We Build

| Tier | Delivery | Price |
|------|----------|-------|
| **Starter** | 48 hours | $2,400 |
| **Growth** | 1 week | $7,500 |
| **Scale** | 2–4 weeks | Custom |

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 + CSS variables
- **3D:** Three.js via @react-three/fiber + @react-three/drei + postprocessing
- **Animation:** Lenis smooth scroll + CSS transitions
- **Fonts:** Instrument Serif (display) + Inter (body)

## Getting Started

```bash
cd app
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm start        # Serve production build
npm run lint     # ESLint check
```

## Project Structure

```
app/
├── public/
│   ├── favicon.svg
│   └── og-image.svg
├── src/
│   ├── app/
│   │   ├── globals.css       # Design tokens, glass effects, animations
│   │   ├── layout.tsx        # Root layout + metadata
│   │   └── page.tsx          # Composes all sections
│   └── components/
│       ├── Navbar.tsx        # Pill nav + booking modal trigger
│       ├── Hero.tsx          # Full-viewport hero + CTAs
│       ├── About.tsx         # Studio description
│       ├── Services.tsx      # 4 service rows
│       ├── Clients.tsx       # Logo grid + sticky sidebar
│       ├── ClientLogos.tsx   # SVG logo components
│       ├── Pricing.tsx       # 3-tier pricing cards
│       ├── CTA.tsx           # Final CTA + booking modal
│       ├── BookingModal.tsx  # Project intake form
│       ├── Footer.tsx        # Email copy-to-clipboard + links
│       ├── Scene3D.tsx       # Three.js animated background
│       ├── SmoothScroll.tsx  # Lenis wrapper
│       └── FadeInProvider.tsx # Scroll fade-in animations
├── package.json
├── next.config.ts
└── tsconfig.json
├── AGENTS.md             # Agent instructions for this codebase
├── DESIGN_SYSTEM.md      # Full design system specification
└── netlify.toml          # Netlify deploy config
```

## Deploy

```bash
netlify deploy --prod
```

## Design System

See [DESIGN_SYSTEM.md](./DESIGN_SYSTEM.md) for full design tokens, typography, colors, component specs, and interaction patterns.

## License

Private — all rights reserved.
