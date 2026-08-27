# Anytime Help — Marketing Website

The marketing site for **Anytime Help**, a complaint and issue management platform for
residential societies, campus facilities and organisational infrastructure.

Built as a static site: **Next.js 15 (App Router) + TypeScript + Tailwind CSS**, exported to
plain HTML with `output: 'export'`. No database, no server, no runtime dependencies.

---

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # static export → ./out
npm run typecheck  # tsc --noEmit
```

`npm run build` writes a fully static site to `out/`. Deploy that folder to Vercel, Netlify,
Cloudflare Pages, S3 or any static host. (`next start` does not work with a static export —
use `npx serve out` to preview a production build locally.)

---

## Before you go live — the checklist

Everything below lives in **`config/site.ts`**, apart from the contact endpoint.

| What | Where | Current state |
|---|---|---|
| Production domain | `site.url` | `https://anytimehelp.com` — change if the domain differs. Drives canonical URLs, Open Graph tags and `sitemap.xml`. |
| App Store link | `stores.appStore` | `null` → badge shows "Coming soon". |
| Google Play link | `stores.googlePlay` | `null` → badge shows "Coming soon". |
| Support email | `contact.email` | `support@anytimehelp.com` |
| Phone / address | `contact.phone`, `contact.address` | Empty → those rows are hidden entirely. |
| Social handles | `social` | All empty → the footer's social row does not render. Add a URL and its icon appears. |
| Contact form | `NEXT_PUBLIC_CONTACT_ENDPOINT` | Unset → the form tells the visitor it isn't connected and offers the email fallback. Point it at any service that accepts a JSON `POST` (Formspree, Resend, Basin, your own API). |
| Statistics band | `stats.enabled` | `false` → section does not render. Set to `true` only once the numbers are real. |
| Testimonials | `testimonials.enabled` | `false` → section does not render. Add real, attributed quotes first. |

Nothing on this site links to a URL that does not exist, and nothing displays a number or a
quote that has not been verified. Empty config means a clearly-labelled "coming soon" state,
never a dead link or an invented figure.

---

## Structure

```
app/
  layout.tsx        Root layout, fonts, metadata, JSON-LD (SoftwareApplication)
  page.tsx          The landing page — composes every section below
  features/         Full feature detail page
  about/            About the product
  contact/          Demo request form + direct contact details
  privacy/  terms/  cookies/     Legal pages
  robots.ts  sitemap.ts          Generated at build time
components/
  sections/         One file per landing-page section
  mockups/          PhoneFrame device shell + AppScreen UI renderings
  ui/               Section, Container, Button, Reveal primitives
  Navbar  Footer  Logo  Icon  StoreButtons  ContactForm
config/
  site.ts           All copy and settings that change without a redesign
  nav.ts            Header and footer navigation
lib/seo.ts          Per-page metadata builder (keeps the OG card consistent)
public/
  icon.svg          The app-icon mark, drawn as vector
  images/           Brand photography and app screenshots
```

### Landing page sections, in order

1. **Hero** — "Smart Society, Smart Maintenance.", Download App CTA, live app screen
2. **Core Features** — Photo Evidence · Live Tracking · Departmental Routing · Announcements
3. **Problem** — what Anytime Help replaces
4. **Evidence** — the Before/After photo proof band
5. **Feature Showcase** — four detailed features (all six on `/features`)
6. **How It Works** — Spot → Snap & Submit → Staff Assigned → Resolved
7. **Tailored for Everyone** — Residents · Staff · Admins
8. **Download** — store badges and the app download entry point
9. **FAQ** — native `<details>`, works without JavaScript
10. **CTA** and **Footer**

---

## Design

Colour tokens are taken directly from the Anytime Help app icon and defined in
`tailwind.config.ts`:

- `brand.600` `#1D4ED8` — the deep blue of the icon tile
- `brand.500` `#3B76F0` — the lighter blue at the top of its gradient
- `accent.400` `#22D3D8` — the teal outline around the heart
- `peach.300` `#FFC4A6` — the cupped hands
- `ink.950` `#0B1120` — the dark ground used by the hero, the evidence band and the footer

Type is **Outfit** for display headings and **Inter** for body copy, both self-hosted through
`next/font`. Display sizes are fluid (`clamp()`), so mobile gets its own scale rather than a
shrunk desktop one.

Motion is deliberately restrained — a fade-up on scroll and a slow float on the hero
imagery — and every animation is wrapped in `motion-safe:`, so `prefers-reduced-motion`
switches it all off.

### App screens

`components/mockups/AppScreen.tsx` renders each phone screen. Screens with a real exported
screenshot use it; the rest are CSS renderings drawn to match the app's design. The
`screenshots` map at the top of that file decides which is which — drop a new export into
`public/images/`, add an entry, and it replaces the mockup with no other changes.

---

## Accessibility & SEO

- Semantic `<header>` / `<main>` / `<section>` / `<footer>`, exactly one `<h1>` per page
- Skip-to-content link, visible focus rings, `aria-current` on the active nav item
- Mobile menu traps nothing but locks scroll and closes on `Escape`
- Device mockups are `role="img"` with descriptive labels rather than unreadable DOM noise
- Per-page canonical URLs, Open Graph and Twitter cards, `og.png` social image
- JSON-LD: `SoftwareApplication` site-wide and `FAQPage` on the landing page
- `robots.txt` and `sitemap.xml` generated at build time

---

## Notes

The legal pages are a starting template written to be accurate to how this site and the app
actually work. They are **not legal advice** — have them reviewed by a qualified adviser, and
confirm every claim matches your real practices, before publishing.
