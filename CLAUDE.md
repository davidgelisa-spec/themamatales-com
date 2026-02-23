# CLAUDE.md — The Mama Tales

## Business Overview
The Mama Tales is a breathwork and hypnobirthing practice run by Natalie Doyle, based in Dorset, England. She offers hypnobirthing courses, breathwork sessions, walk and talks, workshops, retreats and structured courses. Her mission is to educate, empower and support parents from pregnancy through birth and beyond. Tagline: "Parent Healing | Empowered Children | Thriving Generations".

## Tech Stack
- **Astro 5** — static site generator
- **Tailwind CSS 4** — via `@tailwindcss/vite` (NOT `@astrojs/tailwind`)
- **TypeScript** — strict mode
- **Sharp** — image optimisation (dev dependency)
- **@astrojs/sitemap** — XML sitemap generation

## Project Structure
src/
  assets/images/          # Optimised images (jpg, png → WebP via astro:assets)
  components/
    layout/
      Header.astro        # Fixed nav with mobile hamburger
      Footer.astro        # Site footer with links and social
    sections/
      Hero.astro           # Homepage hero with animated gradient
      About.astro          # About Natalie section
      Philosophy.astro     # Educate / Empower / Support pillars
      Services.astro       # Service cards grid
      Testimonials.astro   # Client testimonials
      Community.astro      # Community CTA section
      CtaBanner.astro      # Full-width call to action
      Contact.astro        # Contact form and details
    ui/                    # Reusable UI components (empty for now)
    SEO.astro              # Meta tags, OG tags, canonical URL
  data/
    siteConfig.ts          # Centralised config (business info, nav, services, colours)
  layouts/
    BaseLayout.astro       # HTML shell, font preloading, global styles
  pages/
    index.astro            # Homepage
  styles/
    global.css             # Tailwind directives + CSS custom properties
public/
  robots.txt               # Search engine directives
  favicon.svg              # Placeholder favicon

## Design System

### Colour Palette
| Token            | Hex       | Usage                          |
|------------------|-----------|--------------------------------|
| cream            | #FAF6F1   | Page background                |
| warm-white       | #FFFDF9   | Card backgrounds               |
| sage             | #8B9E7E   | Primary brand colour           |
| sage-light       | #C5D4B8   | Accent, hover states           |
| sage-pale        | #E8EFE2   | Subtle backgrounds, tags       |
| terracotta       | #C4846C   | Warm accent                    |
| terracotta-light | #E8B9A5   | Soft accent                    |
| blush            | #E8CFC0   | Feminine accent                |
| clay             | #B5937A   | Earth tone                     |
| charcoal         | #3A3530   | Primary text                   |
| warm-grey        | #6B6560   | Body text                      |
| light-grey       | #D4CFC9   | Borders, dividers              |
| gold             | #C9A96E   | Luxury accent                  |

### Typography
- **Display / Headings:** Cormorant Garamond (Google Fonts) — italic for titles, medium weight for subheadings
- **Body:** Jost (Google Fonts) — light weight (300) for body, regular (400) for UI elements
- **Base size:** 16px, scale via clamp() for fluid responsive type

### Design Feel
High-end wellness editorial. Think luxury spa meets nature. Warm, earthy, nurturing but sophisticated. NOT: clinical, corporate, woo-woo, or generic "mum blog".

### Key Patterns
- Generous whitespace and breathing room
- Soft rounded shapes (pill buttons, large border-radius cards)
- Subtle animations on scroll (fade-up, scale)
- Organic floating shapes as background decoration
- Full-width dark sections to break visual rhythm (philosophy, CTA)
- Service cards with coloured top accent borders

## Image Handling
- All images in src/assets/images/ use astro:assets for automatic WebP conversion
- Use Image component from astro:assets with explicit width/height
- Placeholder images should use CSS gradients or SVG illustrations until real photos arrive
- Static files (favicon, robots.txt) go in public/

## Configuration
- astro.config.mjs uses @tailwindcss/vite plugin and @astrojs/sitemap
- trailingSlash: 'always' for consistent URLs
- Site URL: https://themamatales-com.pages.dev

## Build & Deploy
- npm run dev → http://localhost:4321
- npm run build → outputs to dist/
- Deployed via Cloudflare Pages (auto-deploys from GitHub on push)
- Build command: npm run build
- Output directory: dist

## Status
Shell / preview site. Placeholder content based on Natalie's Calm Birth School profile. Real content, photos and testimonials pending questionnaire return from Natalie.
