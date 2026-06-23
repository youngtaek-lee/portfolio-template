# Portfolio Template

A web publisher / front-end portfolio template built with HTML / CSS / Vanilla JS + GSAP.
No build tools required — it runs from static files alone, so you can serve it with a local server (Live Server, etc.) or deploy it to any static host as-is.

## Structure
- `index.html` — home (Hero / About / Works list)
- `404.html` — SPA redirect fallback for static hosts like GitHub Pages
- `assets/css/` — stylesheets split by section
- `assets/js/` — router, animations, per-page rendering logic
  - `assets/js/router.js` — client-side routing for `/`, `/about`, `/works`, `/works/:id`
  - `assets/js/works.js` — **project data (edit this first)**
  - `assets/js/pages/` — rendering for the About / Works List / Works Detail / Contact pages

## Getting started
1. Open it through a static server (e.g. VSCode Live Server, `npx serve`, `python -m http.server`)
2. Opening `index.html` directly via `file://` breaks routing — always access it through a server.

## Replace-with-your-info checklist

### 1. Project data — `assets/js/works.js`
- `works` array: replace `title`, `name` (localized name), `category`, `year`, `main` (cover image), `url` (live site link), `subtitle`, `overview`, and `gallery` (detail-page image list) with your own work.
- `worksExtra` array: a simple list of projects that only need an external link.
- Add images under `assets/images/works/` and update the paths. `placeholder-*.svg` files are in there as stand-ins for now.
- **Note**: the static markup inside `<ul id="works-list">` in `index.html` must use the same `id`/title as your data, or the home list and hover thumbnail won't line up (`renderWorks()` is disabled by default in favor of the static HTML).

### 2. Personal info — `index.html`
- Header logo (`Your / Name / Here.` inside `header__logo`)
- Hero tagline (`hero__tagline` — `YOUR NAME`)
- About one-liner (`about-text__summary`)
- Social links (the empty `href="#"` GitHub/Instagram/LinkedIn/Blog links in the header, menu, and footer)
- Email (`mailto:hello@yourdomain.com` — repeated in several places; a find-and-replace across the project is recommended)
- Footer copyright line

### 3. About page — `assets/js/pages/about.js`
- Intro paragraph (`about-intro__text`)
- `GITHUB_USERNAME` constant — the account shown in the GitHub Contributions calendar
- Work Process section copy, Skills card list

### 4. Contact page — `assets/js/pages/contact.js`
- Email / social links

### 5. Works detail page — `assets/js/pages/works-detail.js`
- Bottom CTA email (`mailto:hello@yourdomain.com`)

### 6. Hobby section — `assets/js/animations.js`
- Fill the `ICONS` array inside `initHobbyPopcorn()` with things you're into. The defaults are Font Awesome icon examples (star, heart, music, etc.).
- You can swap the Font Awesome class names (`fa-solid fa-xxx`), or replace them with brand-logo `<img>` tags. If you use brand logos, check that brand's usage policy yourself.

### 7. Meta info — `index.html` `<head>`
- `<title>`, `description`, `og:title`, `og:description`
- `og:image` ships with a default example image (`assets/images/og-image.jpg`). Replace it with a screenshot of your own work (1200×630 recommended).
- It's also worth swapping the `favicon` (`assets/images/favicon.svg`) for your own logo or initials.

## Theme
The toggle switch in the header switches between a dark theme and a "summer" (light-toned) theme. Color variables live in `:root` / `[data-theme="..."]` inside `assets/css/base.css`.

## License
See `LICENSE.txt`. Free to use for personal or single-project work; reselling or redistributing the template itself is not allowed.
