export type Locale = 'fr' | 'en';

export type HeroSlide = {
  id: string;
  title: string;
  caption: string;
  href: string;
  image?: string;
  video?: string;
};

export type WorkItem = {
  id: string;
  name: string;
  image: string;
  /** Vidéo optionnelle (carrousel featured : image puis vidéo) */
  video?: string;
  size: 'featured' | 'lg' | 'md' | 'sm';
  description?: string;
  category?: string;
  alt: string;
};

export type WorkCategory = {
  id: string;
  title: string;
  projects: { id: string; name: string; image: string; alt: string }[];
};

export type ServicePage = {
  /** Matches workCategories.id */
  id: string;
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  intro: string;
  body: string;
  projectsLabel: string;
  ctaLabel: string;
  image: string;
  imageAlt: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type SiteContent = {
  locale: Locale;
  htmlLang: string;
  ogLocale: string;
  meta: {
    homeTitle: string;
    homeDescription: string;
  };
  nav: { label: string; href: string }[];
  ui: {
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    followUs: string;
    menu: string;
    writeLabel: string;
    legalLink: string;
    legalHref: string;
    see: string;
    filtersLabel: string;
    scrollVision: string;
    langSwitchLabel: string;
    prev: string;
    next: string;
    discover: string;
    allProjects: string;
    thePlace: string;
    expertises: string;
    talkCta: string;
    projectBody: string;
  };
  heroSlides: HeroSlide[];
  heroSeoH1: string;
  /** CTAs conversion — labels + liens par locale */
  ctas: {
    primary: string;
    primaryHref: string;
    secondary: string;
    secondaryHref: string;
    atelierDiscover: string;
    atelierHref: string;
    methodDiscover: string;
    methodHref: string;
    bandTitle: string;
    bandBody: string;
    sectionEnd: string;
  };
  manifesto: {
    lines: { text: string; accent?: 'arrow' }[];
    cta: string;
    ctaHref: string;
    secondaryCta: string;
    secondaryCtaHref: string;
  };
  atelier: {
    title: string;
    body: string;
    services: { label: string; href: string }[];
    partnersLabel: string;
    partners: { name: string; logo: string; href: string }[];
  };
  servicePages: ServicePage[];
  atelierPage: {
    marquee: string;
    intro: string;
    body1: string;
    body2: string;
    welcome: { title: string; role: string; body: string };
    pillars: { title: string; body: string }[];
    welcomeImageAlt: string;
  };
  visionPage: {
    wordmark: string;
    ticker: string;
    video: string;
    sectionTitle: string[];
    founder: {
      name: string;
      caption: string;
      carouselLabel: string;
      slides: { src: string; alt: string }[];
    };
    blocks: { title: string; body: string }[];
    quote: { text: string; author: string };
    faqTitle: string;
  };
  contactPage: {
    headline: string;
    email: string;
    addressLabel: string;
    phoneLabel: string;
    regionLabel: string;
    formTitle: string;
  };
  workItems: WorkItem[];
  workCategories: WorkCategory[];
  workFilters: { id: string; label: string; href: string }[];
  workSectors: WorkCategory[];
  workMeta: {
    title: string;
    description: string;
    sectorsTitle: string;
    sectorsDescription: string;
    /** Phrases du bandeau défilant (conversion) */
    heroMarquee: string[];
    heroLead: string;
    heroCta: string;
    heroCtaHref: string;
  };
  marqueeWords: string[];
  contact: {
    title: string;
    body: string;
    cta: string;
  };
  faq: FaqItem[];
  form: {
    namePlaceholder: string;
    emailPlaceholder: string;
    phonePlaceholder: string;
    messagePlaceholder: string;
    submit: string;
    sending: string;
    ok: string;
    error: string;
  };
  pages: {
    vision: { title: string; description: string };
    atelier: { title: string; description: string };
    contact: { title: string; description: string };
    legal: { title: string; h1: string; p1: string; p2: string; back: string };
    method: {
      title: string;
      description: string;
      h1: string;
      lead: string;
      remoteTitle: string;
      remoteBody: string;
      localTitle: string;
      localBody: string;
      whoTitle: string;
      whoRemote: string;
      whoLocal: string;
      stepsTitle: string;
      steps: { title: string; body: string }[];
      ctaTitle: string;
      ctaBody: string;
      cta: string;
    };
    blog: {
      title: string;
      description: string;
      eyebrow: string;
      h1: string;
      lead: string;
      listLabel: string;
      readMore: string;
      backToBlog: string;
      minRead: string;
      faqTitle: string;
      relatedTitle: string;
      alsoInEn: string;
      alsoInFr: string;
    };
  };
};
