# Audit rapidité + sécurité — Najesty

Date : 2026-10-25

## Revue sécurité (subagent)

Le sous-agent `security-review` n’a **pas pu démarrer** (quota Cursor). Revue manuelle effectuée sur les changements locaux.

| Severity | Location | Finding |
|----------|----------|---------|
| Medium | `src/pages/api/contact.ts` | API contact sans validation stricte / honeypot → **corrigé** (email regex, max lengths, honeypot, Cache-Control no-store) |
| Low | `public/_headers` | Headers sécurité partiels → **renforcés** (Permissions-Policy, COOP, no-store `/api/*`) |
| Info | Contact API | Toujours un placeholder `console.log` — brancher Resend/Mailchannel avant prod |

## Perf — problèmes trouvés & corrections

| Priorité | Problème | Correction |
|----------|----------|------------|
| Critique | Vidéo Vision **11,96 Mo** | Recompressée → **0,62 Mo** (−95 %) + lazy-load (`LazyVideo`) |
| Haute | Vidéo Deco **2,82 Mo** | Recompressée → **0,30 Mo** |
| Haute | Google Fonts via `@import` CSS (bloquant) | `<link>` asynchrone + preconnect ; Manrope 300 retiré |
| Haute | `CustomCursor` + `SmoothScroll` en `client:load` | Passés en `client:idle` |
| Moyenne | Hero images sans dimensions / priorités | `width`/`height`, `fetchPriority`, `loading` lazy hors slide 1 |
| Moyenne | Vidéos `preload=metadata` dès le chargement | `preload=none` + IntersectionObserver |
| Basse | HTML / CSS | `compressHTML`, prefetch viewport, cache headers déjà présents |

## Vérification locale

- Accueil HTTP 200 + fonts link + fetchpriority
- `/vision` : `data-lazy-src` présent

## Suite recommandée

1. Brancher un vrai envoi email sur `/api/contact`
2. Relancer `/review-security` quand le quota Cursor est rétabli
3. Mesurer Lighthouse / PageSpeed sur `najesty.ca` après deploy
4. Optionnel : WebP/AVIF via Cloudflare Images (binding déjà mentionné par l’adapter)
