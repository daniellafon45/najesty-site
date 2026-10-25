import { getBlogPost, getBlogPostByKey } from './blog';
import { brand } from './brand';
import { en } from './en';
import { fr } from './fr';
import type { Locale, SiteContent } from './types';

export { brand } from './brand';
export type { Locale, SiteContent, FaqItem, WorkItem, HeroSlide } from './types';

const byLocale: Record<Locale, SiteContent> = { fr, en };

/** Slugs that differ between FR and EN */
const SLUG_MAP: Record<string, { fr: string; en: string }> = {
  method: { fr: '/methode', en: '/en/method' },
  legal: { fr: '/mentions-legales', en: '/en/legal-notice' },
  blog: { fr: '/blogue', en: '/en/blog' },
};

export function getContent(locale: Locale | string | undefined): SiteContent {
  if (locale === 'en') return byLocale.en;
  return byLocale.fr;
}

export function resolveLocale(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'fr';
}

/** Strip locale prefix and normalize path (no trailing slash except root). */
export function stripLocalePath(pathname: string): string {
  let path = pathname.split('?')[0].split('#')[0];
  if (path.startsWith('/en/') || path === '/en') {
    path = path === '/en' ? '/' : path.slice(3);
  }
  if (path.length > 1 && path.endsWith('/')) path = path.slice(0, -1);
  return path || '/';
}

/**
 * Map a pathname to the alternate locale URL (for hreflang + language switcher).
 */
export function alternateLocaleUrl(pathname: string, target: Locale): string {
  const bare = stripLocalePath(pathname);

  if (bare === '/methode' || bare === '/method') {
    return target === 'en' ? SLUG_MAP.method.en : SLUG_MAP.method.fr;
  }
  if (bare === '/mentions-legales' || bare === '/legal-notice') {
    return target === 'en' ? SLUG_MAP.legal.en : SLUG_MAP.legal.fr;
  }
  if (bare === '/blogue' || bare === '/blog') {
    return target === 'en' ? SLUG_MAP.blog.en : SLUG_MAP.blog.fr;
  }

  const blogFr = bare.match(/^\/blogue\/([^/]+)$/);
  if (blogFr) {
    const post = getBlogPost('fr', blogFr[1]);
    if (post) {
      const twin = getBlogPostByKey(target, post.key);
      if (twin) {
        return target === 'en' ? `/en/blog/${twin.slug}` : `/blogue/${twin.slug}`;
      }
    }
  }
  const blogEn = bare.match(/^\/blog\/([^/]+)$/);
  if (blogEn) {
    const post = getBlogPost('en', blogEn[1]);
    if (post) {
      const twin = getBlogPostByKey(target, post.key);
      if (twin) {
        return target === 'en' ? `/en/blog/${twin.slug}` : `/blogue/${twin.slug}`;
      }
    }
  }

  if (target === 'en') {
    return bare === '/' ? '/en/' : `/en${bare}`;
  }
  return bare;
}

export function absoluteUrl(path: string): string {
  const base = brand.siteUrl.replace(/\/$/, '');
  if (path.startsWith('http')) return path;
  const p = path.startsWith('/') ? path : `/${path}`;
  return `${base}${p}`;
}

/** Absolute hreflang pair for a given pathname */
export function hreflangAlternates(pathname: string) {
  const frPath = alternateLocaleUrl(pathname, 'fr');
  const enPath = alternateLocaleUrl(pathname, 'en');
  return {
    fr: absoluteUrl(frPath),
    en: absoluteUrl(enPath === '/en' ? '/en/' : enPath),
    xDefault: absoluteUrl(frPath),
  };
}
