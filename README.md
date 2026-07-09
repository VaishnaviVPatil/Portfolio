# Vaishnavi Patil — Portfolio

Playful, chunky-rounded, dopamine-pastel portfolio. Next.js 14 (App Router) + TypeScript + Tailwind + Framer Motion + Lenis + react-three-fiber, with a spring-eased black cat paw cursor.

## Quick start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — lint

## Design system

Two themes, toggled via `next-themes` (top-right button on the nav):

| Token       | Light (Chai Latte) | Dark (Cosmic Lilac) |
|-------------|--------------------|---------------------|
| `--bg`      | `#FDF6EC`          | `#111018`           |
| `--surface` | `#F9E7D2`          | `#1E1A29`           |
| `--primary` | `#6B4A3B`          | `#BFA8E8`           |
| `--accent-1`| `#F5B7B1`          | `#F0B6CF`           |
| `--accent-2`| `#FFCBA4`          | `#BFA8E8`           |
| `--accent-3`| `#E8B04B`          | `#F5F0FA`           |
| `--text`    | `#3A2A22`          | `#F5F0FA`           |
| `--muted`   | `#8B6F5F`          | `#A395C4`           |

Tokens live in `src/app/globals.css`. Tailwind consumes them via `tailwind.config.ts` — utilities are `bg-bg`, `text-primary`, `border-accent1`, etc.

Type stack:

- **Display** — Clash Display (Fontshare CDN, via `@import` in `globals.css`)
- **Editorial italic** — Instrument Serif (`next/font/google`)
- **Body** — Inter (`next/font/google`)

Use `.font-display` and `.font-serif-italic` utility classes for accent copy.

## Editing content

All copy lives under `src/content/` — you can update the site without touching components.

- `src/content/site.ts` — nav, socials, name/role, email
- `src/content/hero.ts` — headline, subline, CTAs, marquee, metrics
- (staged) `experience.ts`, `projects.ts`, `stickers.ts`, `egg-list.ts` — added after hero review

The hero headline supports inline serif-italic accents with `[[bracketed]]` words:

```ts
headline: "building [[calm]], scalable, [[playful]] products.";
```

## Swapping the hero photo

Drop a JPG at `public/hero.jpg` (portrait-oriented, 4:5-ish crops best) and swap the placeholder inside `src/components/hero/hero-portrait.tsx`:

```tsx
{/* replace this */}
<div className="absolute inset-0" style={{ background: "…" }} />

{/* with */}
<Image src="/hero.jpg" alt={hero.portraitAlt} fill className="object-cover" priority />
```

## Cat paw cursor

`src/components/cursor/cat-paw-cursor.tsx` follows the mouse with a Framer Motion spring, scales on hover of interactives (`a, button, input, …`), squishes on press, and ripples when you click on an image. Disabled automatically on:

- touch / coarse-pointer devices
- `prefers-reduced-motion: reduce`

The paw color comes from `--paw`; in dark mode it also picks up `--paw-outline` for contrast.

## Motion

- **Framer Motion** everywhere — page transitions, scroll reveals, cursor, marquee stickers.
- **Lenis** globally for buttery smooth scroll (`src/components/providers/lenis-provider.tsx`). Automatically disabled under reduced motion.
- **@react-three/fiber + drei** for the hero blob backdrop. Lazy-loaded and mobile-fallback via `src/components/hero/hero-blobs-fallback.tsx`.

## File layout

```
src/
  app/
    layout.tsx           # root layout, providers, cursor, nav
    page.tsx             # composes Hero (+ future sections)
    globals.css          # tokens, fonts, marquee keyframes
  components/
    providers/           # theme + lenis
    cursor/              # cat paw cursor + SVG
    nav/                 # site nav + theme toggle
    hero/                # hero, headline, portrait, blobs, marquee
    ui/                  # reusable primitives (marquee, …)
  content/               # editable data files
  lib/                   # cn(), hooks (reduced-motion, touch, mounted)
```

Old static site is stashed at `/legacy` for reference — safe to delete once the new build is signed off.

## Deploy

Zero-config on Vercel — connect the repo, choose the Next.js preset, done.
