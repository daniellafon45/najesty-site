# SEO/GEO Audit Report — Najesty

**URL:** https://najesty.ca  
**Date:** 2026-10-25  
**Markets:** Canada (primary), Europe + Africa (remote, secondary)  
**Languages:** fr-CA (default) + en-CA (`/en/`)

## Executive summary

Base SEO was already decent (meta, OG, Organization schema, AI bots, `llms.txt`). Gaps blocked growth: **no working sitemap**, **Québec-only messaging**, **FAQ schema without visible FAQ on home**, **no English**, and **live DNS/500** on najesty.ca at audit time.

This implementation adds bilingual FR/EN with hreflang, Canada-first copy, remote Europe/Africa messaging, method comparison pages, FAQ schema only where FAQ is visible, and a dynamic `/sitemap.xml`.

**Overall health after changes:** Strong foundations for Canada bilingual SEO/GEO — deploy + Search Console remaining.

## Current status

| Check | Status |
|-------|--------|
| Meta tags (title/description) | Done — FR + EN per page |
| Open Graph / Twitter | Done |
| Canonical | Done |
| hreflang fr-CA / en-CA / x-default | Done in `BaseLayout` |
| Schema Organization (`InteriorDesignBusiness`) | Done — `areaServed` Canada + Europe + Africa |
| FAQPage schema | Done — only `/vision` and `/en/vision` |
| AI bots in robots.txt | Done |
| Sitemap | Done — `/sitemap.xml` with xhtml alternates |
| `llms.txt` | Done — FR root + `/en/llms.txt` |
| Mobile layout | Existing responsive CSS retained |
| Live site reachability | Blocked at audit — DNS `najesty.ca` unresolved |

## Technical findings (resolved or noted)

1. **Sitemap missing** — robots pointed to non-existent `sitemap-index.xml`. **Fix:** dynamic [`src/pages/sitemap.xml.ts`](src/pages/sitemap.xml.ts); robots → `https://najesty.ca/sitemap.xml`.
2. **Prerender + Cloudflare** — prerender crashed build (ASSETS binding). **Decision:** keep SSR hybrid; sitemap via API route (crawlable when Worker is healthy).
3. **FAQPage on homepage** without visible FAQ. **Fix:** `includeFaqSchema` only on Vision.
4. **Live 500/DNS** — cannot index until domain DNS + Cloudflare Pages deploy succeed. Re-check after deploy.

## On-page / GEO applied

- H1 SEO stable on home (visually hidden brand + Canada intent); carousel titles are not H1.
- Copy Canada-first; remote Europe/Africa explicit in atelier, FAQ, method, meta, schema.
- New pages: `/methode` ↔ `/en/method` (remote vs on-site — high AI citation potential).
- Descriptive `alt` on work/hero images.
- Language switcher in header (reciprocal FR ↔ EN).

## Keyword clusters (monitor)

**FR:** design d’intérieur Canada, décoration intérieure Canada, design à distance, home staging Canada, e-design  
**EN:** interior design Canada, remote interior design, e-design Canada, home staging Canada

## Prioritized action plan (post-deploy)

### Critical
1. Fix DNS / Cloudflare deploy so `najesty.ca` returns 200.
2. Submit `https://najesty.ca/sitemap.xml` in Google Search Console + Bing Webmaster.
3. Verify hreflang in Rich Results / [hreflang tester](https://technicalseo.com/tools/hreflang/).

### High
4. Replace social URL placeholders with real Instagram / LinkedIn / TikTok (E-E-A-T + `sameAs`).
5. Add 2–3 dated testimonials / before-after on Work or home.
6. Monthly DIY AI visibility check (10 queries FR/EN on Google, ChatGPT, Perplexity).

### Medium
7. Google Business Profile if local Canada presence is public.
8. Optional later: blog cluster (room × style × city) — not required for launch.

## Validation checklist

- [ ] `https://najesty.ca/` → 200
- [ ] `https://najesty.ca/en/` → 200
- [ ] `https://najesty.ca/sitemap.xml` lists FR+EN + project URLs
- [ ] `https://najesty.ca/robots.txt` allows GPTBot, PerplexityBot, ClaudeBot, Google-Extended
- [ ] View-source: `hreflang` fr-CA, en-CA, x-default on home
- [ ] Vision pages: visible FAQ + FAQPage JSON-LD
- [ ] Home: no FAQPage JSON-LD
- [ ] Google Rich Results Test on `/vision` and `/en/vision`
- [ ] `site:najesty.ca` after indexing delay

## GEO methods used

- [x] FAQPage schema (visible)
- [x] Answer-first FAQ (40–60 words)
- [x] Comparison structure (method page)
- [x] Authoritative tone + domain terms
- [x] Fluency (FR + EN human copy)
- [x] AI bots allowed
- [ ] Original statistics (add when real metrics exist — do not invent)

## Files touched (main)

- `astro.config.mjs` — `site`, i18n
- `src/data/*` — brand, fr, en, helpers
- `src/layouts/BaseLayout.astro` — hreflang, locale, schema
- `src/pages/` + `src/pages/en/` — mirror pages
- `src/pages/sitemap.xml.ts`
- `public/robots.txt`, `public/llms.txt`, `public/en/llms.txt`
- Components: Header, Hero, Manifesto, ContactForm, SiteFooter
