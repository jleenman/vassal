# Jonathan Leenman Personal Website

Static Nuxt site for Jonathan Leenman's personal homepage.

## Stack

- Nuxt / Vue
- TypeScript
- Tailwind CSS
- GSAP for scroll reveals
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

For project Pages, set `NUXT_APP_BASE_URL` to the repository path, for example:

```bash
NUXT_APP_BASE_URL=/vassal/ npm run build
```

For a custom domain or user Pages repository, use `/`.
