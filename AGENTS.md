# AGENTS.md

## Project Overview

AI-powered design studio landing page. Dark, cinematic, premium aesthetic with 3D background, glassmorphism effects, and scroll-driven animations. Built for an international design studio that builds go-to-market landing pages for startups.

## Tech Stack

- **Framework:** Next.js 15 (App Router, Turbopack)
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 + custom CSS variables
- **3D:** @react-three/fiber + @react-three/drei + @react-three/postprocessing
- **Animation:** Framer Motion + Lenis smooth scroll + CSS transitions
- **Fonts:** Instrument Serif (display) + Inter (body)

## Commands

```bash
npm run dev          # Start dev server (Turbopack)
npm run build        # Production build
npm start            # Serve production build
npm run lint         # ESLint check
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx       # Root layout (metadata, font preconnect)
│   ├── page.tsx         # Main page (composes all sections)
│   └── globals.css      # Design tokens, base styles, utilities
├── components/
│   ├── Navbar.tsx       # Fixed nav with pill glass effect + booking modal
│   ├── Hero.tsx         # Full-viewport hero with headline + CTAs
│   ├── About.tsx        # Studio description section
│   ├── Services.tsx     # Service list with numbered rows
│   ├── Clients.tsx      # Logo grid with sticky sidebar + SVG logos
│   ├── ClientLogos.tsx  # SVG logo components for client grid
│   ├── Pricing.tsx      # Three-tier pricing cards with real prices
│   ├── CTA.tsx          # Final call-to-action with booking modal
│   ├── BookingModal.tsx # Project intake form modal
│   ├── Footer.tsx       # Footer with copy-to-clipboard email
│   ├── Scene3D.tsx      # Three.js canvas (dynamic import, no SSR)
│   ├── SmoothScroll.tsx # Lenis smooth scroll wrapper
│   └── FadeInProvider.tsx # IntersectionObserver fade-in
public/
├── favicon.svg          # Brand favicon
└── og-image.svg         # Open Graph image
```

## Code Conventions

### Components
- All components are `"use client"` (client-side rendered)
- Use functional components with hooks
- Export default from each file
- Keep components self-contained (styles inline or in globals.css)
- Use CSS variables from `:root` in globals.css for colors/spacing

### Styling
- Use Tailwind utility classes for layout and spacing
- Use CSS variables (`var(--text-primary)`) for theme colors
- Use inline `style` for values that need runtime computation
- Glass effects: `backdrop-filter: blur(10px)` + semi-transparent bg
- Font families: `font-serif` (Instrument Serif), `font-sans` (Inter), `font-mono`
- All transitions: 200-300ms ease

### Naming
- Component files: PascalCase (`Navbar.tsx`)
- CSS classes: kebab-case with BEM-like patterns (`.copy-email__tooltip`)
- Sections use `id` attributes for anchor navigation (`#about`, `#pricing`)

### 3D Scene
- Always dynamically imported with `ssr: false`
- Uses `dpr={[1, 1.5]}` for performance
- Camera: FOV 30, position [0, 0, 8]
- Post-processing: Bloom + Noise + Vignette
- Mouse parallax via CameraRig with lerp
- Mobile: scene still renders but canvas auto-reduces resolution

### Responsive
- Desktop-first approach
- Breakpoints: 992px (tablet), 480px (mobile)
- `clamp()` for fluid typography
- Container: max-width 1440px, padding 40px (20px on mobile)

## Key Patterns

### Copy-to-Clipboard Email
Uses native Clipboard API with `document.execCommand` fallback. Shows "Copied" tooltip pill on click.

### Scroll Animations
FadeInProvider uses IntersectionObserver to add `.visible` class to `.fade-in` elements. CSS handles the transition.

### Loading Screen
Fixed overlay with spinner ring. Hidden after 1200ms delay with opacity transition.

### Booking Modal
Full-screen overlay with glass backdrop. Form collects name, email, company, budget range, and project description. Shows success state after submission.

## Don'ts
- Don't add emojis as icons (use SVG)
- Don't use generic fonts (Inter only for body, never for display)
- Don't skip hover states on interactive elements
- Don't use server components for anything with animations or interactivity
- Don't hardcode colors (use CSS variables)
