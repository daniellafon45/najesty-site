export type BlogLocale = 'fr' | 'en';

export type BlogCategoryId =
  | 'methode'
  | 'decoration'
  | 'home-staging'
  | 'remote'
  | 'inspiration'
  | 'pratique';

export type BlogAudienceId =
  | 'canada-foyers'
  | 'vendeurs'
  | 'europe-afrique'
  | 'hospitalite'
  | 'nouveaux-proprietaires';

export type BlogPost = {
  /** Shared key across FR/EN translations */
  key: string;
  slug: string;
  locale: BlogLocale;
  title: string;
  description: string;
  pubDate: string;
  updatedDate: string;
  category: BlogCategoryId;
  audience: BlogAudienceId;
  image: string;
  imageAlt: string;
  readingMinutes: number;
  /** 40–60 word extractable answer for AI search */
  answerBlock: string;
  sections: { h2: string; paragraphs: string[]; list?: string[] }[];
  faq: { question: string; answer: string }[];
  cta: { title: string; body: string; label: string };
};
