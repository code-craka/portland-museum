# Portland Art Museum

A comprehensive, production-grade museum website for the **Portland Art Museum** — the Pacific Northwest's oldest and largest art museum, founded in 1892.

Built with Next.js 16, TypeScript, and Tailwind CSS. Deployed on Vercel.

---

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage — hero, featured exhibitions, stats, visit preview, membership CTA |
| `/exhibitions` | Current, upcoming, and permanent collection galleries |
| `/about` | Museum history timeline, mission & values, leadership |
| `/visit` | Hours, admission pricing, directions, amenities, membership tiers |
| `/contact` | Contact details, social links, and inquiry form |

---

## Tech Stack

- **Framework** — [Next.js 16](https://nextjs.org) (App Router, static generation)
- **Language** — TypeScript
- **Styling** — Tailwind CSS v3 with custom design tokens
- **Fonts** — Cormorant Garamond + Karla via `next/font/google`
- **Package Manager** — [Bun](https://bun.sh)
- **Deployment** — [Vercel](https://vercel.com)

---

## Getting Started

**Prerequisites:** [Bun](https://bun.sh/docs/installation) installed.

```bash
# Clone the repository
git clone https://github.com/code-craka/portland-museum.git
cd portland-museum

# Install dependencies
bun install

# Start the development server
bun run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

```bash
bun run dev      # Start dev server at http://localhost:3000
bun run build    # Create a production build
bun run start    # Start the production server
bun run lint     # Run ESLint
```

---

## Project Structure

```
├── app/
│   ├── layout.tsx            # Root layout (Navbar, Footer, fonts)
│   ├── globals.css           # Tailwind base + custom animations
│   ├── page.tsx              # Homepage
│   ├── about/page.tsx        # About & history
│   ├── exhibitions/page.tsx  # Exhibitions
│   ├── visit/page.tsx        # Visitor information
│   ├── contact/page.tsx      # Contact
│   └── not-found.tsx         # 404 page
├── components/
│   ├── Navbar.tsx            # Sticky, scroll-aware navigation
│   ├── Footer.tsx            # Site footer
│   ├── Ticker.tsx            # Animated info ticker
│   └── ContactForm.tsx       # Contact form with success state
├── CLAUDE.md                 # AI assistant context and conventions
├── tailwind.config.ts        # Design tokens and theme config
└── next.config.ts            # Next.js configuration
```

---

## Museum Information

**Portland Art Museum**
1219 Southwest Park Avenue
Portland, OR 97205
[503-276-4208](tel:+15032764208)

**Hours**
| Day | Hours |
|-----|-------|
| Tuesday – Wednesday | 10 am – 5 pm |
| Thursday | 10 am – 8 pm |
| Friday – Sunday | 10 am – 5 pm |
| Monday | Closed |

---

## License

This project is for demonstration purposes.
