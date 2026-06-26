# Jonathan Leenman Personal Website

Static Nuxt site for Jonathan Leenman's personal homepage.

## Stack

- Nuxt / Vue
- TypeScript
- Tailwind CSS
- GSAP is available for future choreographed scroll moments
- Native IntersectionObserver reveal behavior
- Three.js for the client-only hero field
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

## Content

Source content and selected image assets live in `content/`.

The old WordPress export is kept locally in `archive/`, which is gitignored.

## GitHub Pages

The GitHub Actions workflow defaults `NUXT_APP_BASE_URL` to `/<repository-name>/`, which is the right value for project Pages.

For a custom domain or user Pages repository, set the repository variable `NUXT_APP_BASE_URL` to `/`.

For local project-path testing:

```bash
NUXT_APP_BASE_URL=/vassal/ npm run build
```
