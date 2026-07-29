# Algo Brand Logo System — Master Reference

Status: **permanent standard**, effective 2026-07-29.
Master reference implementation: `algobridge.cc` (this repo).
Canonical component source: `shared/algo-brand-logo.js` in this repo.

## Why this exists

Every current and future "Algo ___" product (Auto, Easy, Commerce, Realty,
HR, Finance, Health, Legal, etc.) should look like it belongs to one
premium ecosystem — like Google Workspace or Adobe Creative Cloud apps.
This document is the single source of truth for logo sizing, spacing, and
placement, so a new product logo can be dropped in without redoing layout
work.

## Measured values (exact, not estimated)

Captured directly from the live `algobridge.cc` navbar/footer via
browser measurement (`getBoundingClientRect` / `getComputedStyle`):

| Property | Mobile (<768px) | Desktop (>=768px) |
|---|---|---|
| Navbar logo height | **56px** (`h-14`) | **88px** (`h-[88px]`) |
| Footer logo height | 56px (`h-14`, all breakpoints) | 56px |
| Navbar row vertical padding | 4px top/bottom (`py-1`) | 4px top/bottom |
| Navbar left padding | 20px (`px-margin-mobile`) | 64px (`px-margin-desktop`) |
| Logo width | `auto` (from image aspect ratio) | `auto` |
| Logo hover behavior | none | none |
| Logo object-fit | `contain` (safety net; width is `auto` so this rarely activates) | same |

Reference render at 1440px: navbar logo renders 271.875×88px (aspect ratio
of the source PNG, 1035×335 natural, preserved exactly). At 390px: 173×56px.

## Why there's no "icon size" / "wordmark height" / "tagline height" row

Every current Algo product logo (AlgoBridge, Algo Auto, Algo Easy) is a
**single flat raster image** — icon, wordmark, and tagline baked into one
PNG at export time, not separate DOM elements. This component controls the
logo's *overall box* (height, width:auto, alignment, spacing from
surrounding nav items) — it cannot and does not control the internal
proportions of icon vs. wordmark vs. tagline within the artwork itself.
That's a property of how each logo file is exported, not something CSS
here can normalize. If a future logo's internal icon/text balance looks
off next to the others, that's a re-export/re-crop task for the source
image, not a CSS change to this component.

## The component

`shared/algo-brand-logo.js` — a vanilla JS renderer (no build step, no
framework — this and the Algo Auto site are both static HTML + Tailwind
CDN with no bundler). Exposes:

```js
AlgoBrandLogo.renderNavLogo(containerEl, { src, href, alt });
AlgoBrandLogo.renderFooterLogo(containerEl, { src, href, alt });
```

Those three inputs are the **only** thing a page ever provides. Height,
`shrink-0` (see bug note below), alignment, and responsive breakpoints are
all baked into the component.

### Usage in a new static HTML page

```html
<span class="shrink-0" id="nav-logo-slot"></span>
...
<span class="shrink-0" id="footer-logo-slot"></span>
...
<script src="shared/algo-brand-logo.js"></script>
<script>
  var opts = { src: 'images/logo.png', href: 'index.html', alt: 'Algo Whatever' };
  AlgoBrandLogo.renderNavLogo(document.getElementById('nav-logo-slot'), opts);
  AlgoBrandLogo.renderFooterLogo(document.getElementById('footer-logo-slot'), opts);
</script>
```

The slot `<span>` needs `class="shrink-0"` because it — not the `<a>`
injected inside it — is the actual flex child of the navbar row.

### Why a copied file, not a live shared `<script src>` across domains

AlgoBridge, Algo Auto, and future products are separate Vercel
deployments/repos with no shared build step. A live cross-origin
`<script src="https://algobridge.cc/shared/algo-brand-logo.js">` would make
every product's navbar depend on algobridge.cc's uptime — too fragile for
something this core to page render. Instead: **copy this file into each
new product's repo**, and re-sync manually if the spec changes. Keep the
same relative path (`shared/algo-brand-logo.js`) across all repos so the
usage snippet above never needs to change per-product.

### A real bug this fix caught

Both `algobridge.cc`'s own navbar and Algo Auto's navbar had the same
latent bug: the logo link/image lacked `flex-shrink: 0`, so at certain
viewport widths (768px on algobridge.cc, several breakpoints on Algo Auto)
flexbox silently crushed the logo to 0 width — invisible. `shrink-0` on
both the slot and the injected `<img>` is why the component works; don't
remove it.

## Known, documented exception: Algo Auto

Algo Auto's navbar logo does **not** use this component and is **not**
sized to match (88px desktop). Its logo was explicitly grown to up to
160px through several rounds of iteration at the user's direct request,
and — when this design-system directive was introduced — the user
explicitly chose to **keep that size** rather than shrink it back down to
match. This is an intentional, approved exception, not an oversight. Do
not "fix" it to match this spec without asking first.

Algo Auto does have a copy of `shared/algo-brand-logo.js` in its repo
(`D:\algo auto\shared\algo-brand-logo.js`) for future reference/reuse if a
new *non-exempt* product is cloned from that template, but its own pages
don't call it.

## Algo Easy (and any future React/Next.js product)

Algo Easy is not a static HTML page — it's the repurposed Sri Saamba
agency Next.js/React app (`D:\aiagency`, deployed as a separate isolated
project so the live `agency.srisaamba.com` site is unaffected). A vanilla
JS file that does `container.innerHTML = ...` is not how logos work in a
React app, and this file was explicitly kept "as is" (unmodified) when
integrated. So:

- This spec's **measured values** (56px mobile / 88px desktop nav, 56px
  footer, no hover, shrink-0 equivalent) are still the target for any
  *future* React-based Algo product's logo component.
- The actual **implementation** for a React product would be a small
  `<AlgoBrandLogo src href alt />` component built natively in that
  codebase, following the same measured values — not a port of the
  vanilla-JS file.
- Algo Easy's own logo/header was **not modified** to match this spec,
  per the earlier explicit "keep it as is" instruction for that
  integration. If that changes, rebuilding its header to match is a
  separate, scoped task in the `D:\aiagency` repo (main branch = the
  live agency.srisaamba.com site — do not touch that branch; use the
  `easy-ai-subpath` branch and redeploy the `algo-easy-ai` project).

## Adding a new Algo product going forward

1. Export the logo as a single flat PNG (icon + wordmark + tagline baked
   in, transparent background, verified real alpha — not a baked-in
   checkerboard).
2. Copy `shared/algo-brand-logo.js` into the new product's repo.
3. Add the two slot spans + the two `AlgoBrandLogo.render*` calls shown
   above, with that product's `src`/`href`/`alt`.
4. Do not add any custom logo CSS. If a product genuinely needs a
   different size, that's a deliberate exception (like Algo Auto) and
   should be confirmed explicitly before implementing — not the default.
