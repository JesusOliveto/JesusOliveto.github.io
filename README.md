# jesusoliveto.github.io

Personal CV, hand-built with plain HTML, CSS and JavaScript — zero dependencies, no build step.

**Live:** <https://jesusoliveto.github.io/>

![CI](https://github.com/JesusOliveto/JesusOliveto.github.io/actions/workflows/ci.yml/badge.svg)

## Highlights

- **Zero runtime dependencies, no build step.** Three files served as-is: `index.html`, `assets/styles.css`, `assets/main.js`.
- **Modern CSS.** Full OKLCH `color-mix()` palette derived from a single brand token, fluid type and spacing with `clamp()`, glassmorphism cards, automatic dark mode via `prefers-color-scheme`.
- **Accessibility.** Semantic HTML, skip link, `sr-only` labels on icon chips, `prefers-reduced-motion` support, `:focus-visible` states.
- **SEO.** JSON-LD `Person` schema, Open Graph tags, canonical URL.
- **Print stylesheet.** The browser's print dialog outputs a compact 1-2 page A4 PDF — no generator, no libraries.
- **Scroll-reveal animations** with a single `IntersectionObserver` that unobserves each element after it reveals.
- **CI.** HTML validation on every push.

## Why no framework?

One page, one payload. The constraint is the point: modern platform features (CSS custom properties, `color-mix()`, `IntersectionObserver`, print media queries) cover everything a framework would add here, at zero cost in tooling, dependencies or transfer size.

## Run locally

Open `index.html` directly, or serve the folder:

```sh
python -m http.server
```
