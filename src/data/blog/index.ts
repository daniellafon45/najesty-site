import { blogPostsEn } from './en';
import { blogPostsFr } from './fr';
import type {
  BlogAudienceId,
  BlogCategoryId,
  BlogLocale,
  BlogPost,
} from './types';

export type { BlogAudienceId, BlogCategoryId, BlogLocale, BlogPost } from './types';

const byLocale: Record<BlogLocale, BlogPost[]> = {
  fr: blogPostsFr,
  en: blogPostsEn,
};

export const blogCategories: Record<
  BlogLocale,
  Record<BlogCategoryId, string>
> = {
  fr: {
    methode: 'Méthode',
    decoration: 'Décoration',
    'home-staging': 'Home staging',
    remote: 'À distance',
    inspiration: 'Inspiration',
    pratique: 'Pratique',
  },
  en: {
    methode: 'Method',
    decoration: 'Decoration',
    'home-staging': 'Home staging',
    remote: 'Remote',
    inspiration: 'Inspiration',
    pratique: 'Practical',
  },
};

export const blogAudiences: Record<
  BlogLocale,
  Record<BlogAudienceId, string>
> = {
  fr: {
    'canada-foyers': 'Foyers au Canada',
    vendeurs: 'Vendeurs & mise en marché',
    'europe-afrique': 'Europe & Afrique (remote)',
    hospitalite: 'Hospitalité & locations',
    'nouveaux-proprietaires': 'Nouveaux propriétaires',
  },
  en: {
    'canada-foyers': 'Homes in Canada',
    vendeurs: 'Sellers & listing prep',
    'europe-afrique': 'Europe & Africa (remote)',
    hospitalite: 'Hospitality & rentals',
    'nouveaux-proprietaires': 'New homeowners',
  },
};

export function getBlogPosts(locale: BlogLocale): BlogPost[] {
  return [...byLocale[locale]].sort(
    (a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime(),
  );
}

export function getBlogPost(
  locale: BlogLocale,
  slug: string,
): BlogPost | undefined {
  return byLocale[locale].find((p) => p.slug === slug);
}

export function getBlogPostByKey(
  locale: BlogLocale,
  key: string,
): BlogPost | undefined {
  return byLocale[locale].find((p) => p.key === key);
}

export function blogIndexPath(locale: BlogLocale): string {
  return locale === 'en' ? '/en/blog' : '/blogue';
}

export function blogPostPath(locale: BlogLocale, slug: string): string {
  return `${blogIndexPath(locale)}/${slug}`;
}

export function blogContactPath(locale: BlogLocale): string {
  return locale === 'en' ? '/en/contact' : '/contact';
}

export function formatBlogDate(dateIso: string, locale: BlogLocale): string {
  return new Intl.DateTimeFormat(locale === 'en' ? 'en-CA' : 'fr-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(`${dateIso}T12:00:00`));
}
