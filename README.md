# Jonathan Leenman Personal Website

Static Nuxt site for Jonathan Leenman's personal homepage.

Live site: https://vassal.nl/

## Stack

- Nuxt / Vue
- TypeScript
- Tailwind CSS
- Native IntersectionObserver reveal behavior
- CSS 3D typography and sticky signal rails
- GitHub Pages static deployment

## Local Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run typecheck
npm run build
```

The GitHub Pages artifact is generated in `.output/public`.

The build script also copies the rendered `/404/index.html` route to `.output/public/404.html`, because GitHub Pages uses that root file as the fallback page.

## Content

Source content and selected image assets live in `content/`.

The old WordPress export is kept locally in `archive/`, which is gitignored.

## GitHub Pages

The GitHub Actions workflow defaults `NUXT_APP_BASE_URL` to `/`, which is the right value for the custom domain.

For project Pages without a custom domain, set the repository variable `NUXT_APP_BASE_URL` to `/<repository-name>/`.

For local project-path testing:

```bash
NUXT_APP_BASE_URL=/vassal/ npm run build
```
