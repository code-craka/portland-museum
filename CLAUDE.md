# Portland Art Museum — Claude Instructions

## Project Overview
A full-featured museum website for the **Portland Art Museum**, built with Next.js 16 (App Router), TypeScript, Tailwind CSS v3, and Bun as the package manager.

## Stack
- **Framework**: Next.js 16.1.6 (App Router, static export)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3 with custom design tokens
- **Fonts**: `next/font/google` — Cormorant Garamond (serif/headings) + Karla (sans/body)
- **Package Manager**: Bun (`bun install`, `bun run dev`, `bun run build`)
- **Deployment**: Vercel (project: `techsci/port-land-museum`)

## Commands
```bash
bun install        # Install dependencies
bun run dev        # Start dev server at http://localhost:3000
bun run build      # Production build
bun run lint       # ESLint
vercel --prod      # Deploy to production
```

## Project Structure
```
app/
  layout.tsx          # Root layout — loads fonts, renders Navbar + Footer
  globals.css         # Tailwind directives + custom @layer utilities/animations
  page.tsx            # Homepage
  about/page.tsx      # About & history
  exhibitions/page.tsx # Exhibitions (current, upcoming, permanent)
  visit/page.tsx      # Hours, admission, directions, amenities, membership
  contact/page.tsx    # Contact info + form
  not-found.tsx       # 404 page

components/
  Navbar.tsx          # Sticky header, scroll-aware, mobile overlay menu ("use client")
  Footer.tsx          # Multi-column footer (server component)
  Ticker.tsx          # Animated scrolling info bar ("use client")
  ContactForm.tsx     # Controlled form with success state ("use client")
```

## Design System

### Colors (Tailwind custom tokens)
| Token | Hex | Usage |
|-------|-----|-------|
| `cream` | `#F5F0E8` | Page backgrounds |
| `cream-dark` | `#EDE6D8` | Dividers, alternating sections |
| `charcoal` | `#1C1C1C` | Primary text, dark sections |
| `charcoal-light` | `#2E2E2E` | Dark card backgrounds |
| `rust` | `#8B4A2F` | Primary accent, CTAs, active nav |
| `rust-light` | `#A85A3A` | Hover state for rust |
| `sage` | `#5C7A5A` | Secondary accent (exhibitions) |
| `navy` | `#2C3E5C` | Tertiary accent |
| `gold` | `#C9A96E` | Dark section accents, membership |
| `stone` | `#7A7060` | Muted body text |

### Typography
- **Headings**: `font-cormorant` (`font-serif`) — Cormorant Garamond, elegant, light weights
- **Body/UI**: `font-sans` — Karla, clean and readable
- **Display sizes**: Use `text-[clamp(...)]` for responsive hero type

### Spacing & Layout
- Max content width: `max-w-7xl mx-auto px-6 lg:px-10`
- Section padding: `py-20 lg:py-28`
- Card hover lift: apply class `card-hover` (defined in `@layer utilities`)

### Custom CSS Classes (globals.css)
- `.font-cormorant` — applies Cormorant Garamond via CSS var
- `.animate-ticker` — infinite horizontal scroll animation (28s)
- `.animate-fade-up` + `.animate-fade-up-{1-4}` — staggered entrance animations
- `.card-hover` — smooth translateY lift + shadow on hover
- `.decorative-underline` — rust underline pseudo-element

## Museum Details
- **Name**: Portland Art Museum
- **Address**: 1219 Southwest Park Avenue, Portland, OR 97205
- **Phone**: 503-276-4208
- **Hours**: Tue–Sun 10 am–5 pm · Thursday until 8 pm · Monday Closed
- **Founded**: 1892 (Pacific Northwest's oldest art museum)
- **Collection**: 42,000+ works, 5,000 years of art history, 22 galleries

## Key Conventions
- All pages are **server components** by default; add `"use client"` only when using hooks or browser APIs
- Fonts are loaded via `next/font/google` in `app/layout.tsx` and exposed as CSS variables `--font-cormorant` and `--font-karla`
- No `@import` in CSS files — use `next/font` instead
- Images are currently CSS art / placeholder shapes; replace with `next/image` when real assets are available
- The `.vercel` directory is gitignored but present locally for CLI deployments
