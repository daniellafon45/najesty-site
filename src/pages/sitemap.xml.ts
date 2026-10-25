import type { APIRoute } from 'astro';
import { brand, getContent } from '../data';

export const prerender = false;

const STATIC_PAIRS: { fr: string; en: string }[] = [
  { fr: '/', en: '/en/' },
  { fr: '/work', en: '/en/work' },
  { fr: '/work/secteurs', en: '/en/work/secteurs' },
  { fr: '/vision', en: '/en/vision' },
  { fr: '/atelier', en: '/en/atelier' },
  { fr: '/methode', en: '/en/method' },
  { fr: '/contact', en: '/en/contact' },
  { fr: '/mentions-legales', en: '/en/legal-notice' },
];

function abs(path: string) {
  return new URL(path, brand.siteUrl).href;
}

function urlEntry(loc: string, alternates: { fr: string; en: string }) {
  return `  <url>
    <loc>${loc}</loc>
    <xhtml:link rel="alternate" hreflang="fr-CA" href="${abs(alternates.fr)}" />
    <xhtml:link rel="alternate" hreflang="en-CA" href="${abs(alternates.en)}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${abs(alternates.fr)}" />
  </url>`;
}

export const GET: APIRoute = () => {
  const workIds = getContent('fr').workItems.map((w) => w.id);
  const pairs = [
    ...STATIC_PAIRS,
    ...workIds.map((id) => ({ fr: `/work/${id}`, en: `/en/work/${id}` })),
  ];

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">
${pairs
  .flatMap((p) => [urlEntry(abs(p.fr), p), urlEntry(abs(p.en), p)])
  .join('\n')}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
