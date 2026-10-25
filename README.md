# Najesty Design & Pictures

Site Astro 7 + React (îles) déployable sur Cloudflare Pages.

## Dev

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Sortie : `dist/` (adapter `@astrojs/cloudflare`).

## Déploiement Cloudflare Pages

1. Connexion Wrangler (une fois) : `npx wrangler login`
2. Preview local : `npm run cf:preview`
3. Deploy : `npm run deploy`

Ou dans le dashboard Cloudflare Pages :
- **Build command** : `npm run build`
- **Build output directory** : `dist`
- **Node version** : 22+

## Structure

- `src/pages/index.astro` — homepage (Hero, Manifesto, Work, Atelier, Marquee, Contact)
- `src/data/content.ts` — copy Najesty
- `public/images` — assets
- `public/brand` — logo Najesty (monogramme N)
