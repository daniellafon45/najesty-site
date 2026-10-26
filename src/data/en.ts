import type { SiteContent } from './types';

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en-CA',
  ogLocale: 'en_CA',
  meta: {
    homeTitle: 'Remote interior design in Canada | Najesty',
    homeDescription:
      'Interior design, decoration and home staging within your budget. Remote across Canada, Europe and Africa, on site in Canada. Free 15-minute call, no commitment.',
  },
  nav: [
    { label: 'Projects', href: '/en/work' },
    { label: 'Vision', href: '/en/vision' },
    { label: 'Studio', href: '/en/atelier' },
    { label: 'Method', href: '/en/method' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'Contact', href: '/en/contact' },
  ],
  ui: {
    navLabel: 'Main navigation',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    followUs: 'Follow us',
    menu: 'Menu',
    writeLabel: 'Write',
    legalLink: 'Legal notice',
    legalHref: '/en/legal-notice',
    see: 'View',
    filtersLabel: 'Filters',
    scrollVision: 'Scroll down',
    langSwitchLabel: 'Français',
    prev: 'Previous',
    next: 'Next',
    discover: 'More projects',
    allProjects: 'All projects →',
    thePlace: 'The project',
    expertises: 'Services',
    talkCta: 'Book my free call →',
    projectBody:
      'Like every Najesty project, {name} starts from how you live: a clear plan, targeted shopping, then a beautiful, practical, calm space — within budget.',
  },
  heroSeoH1: 'Najesty — Interior design and decoration in Canada and remotely',
  ctas: {
    primary: 'Book my free call',
    primaryHref: '/en/contact',
    secondary: 'See the work',
    secondaryHref: '/en/work',
    atelierDiscover: 'Who is Najesty',
    atelierHref: '/en/atelier',
    methodDiscover: 'Remote or on site?',
    methodHref: '/en/method',
    bandTitle: 'Want a space that feels like you?',
    bandBody:
      'Free 15-minute call, no commitment: your space, your budget, the right format.',
    sectionEnd: 'Book my free call',
  },
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Najesty',
      caption:
        'Interior design and decoration within your budget — remote across Canada, Europe and Africa.',
      href: '/en/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'A travel-inspired interior: the feel of elsewhere, at home.',
      href: '/en/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: 'Summer Breeze',
      caption: 'Light, airy decoration: we lighten the room so it can breathe.',
      href: '/en/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Long Life',
      caption: 'Furniture and materials chosen to last — and to love for years.',
      href: '/en/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'People of the Land',
      caption: 'Decoration rooted in Canada — warm, without clichés.',
      href: '/en/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Fresh Start',
      caption: 'New home? We help you start right. Free call.',
      href: '/en/contact',
    },
  ],
  manifesto: {
    lines: [
      { text: 'We design and decorate' },
      { text: 'your home: beautiful,' },
      { text: 'practical and calm —' },
      { text: 'within your budget.' },
      { text: 'In Canada, and remotely' },
      { text: 'in Europe and Africa.' },
      { text: 'To start,', accent: 'arrow' },
      { text: 'a free 15-minute call,' },
      { text: 'no commitment.' },
      { text: 'Let’s talk.' },
    ],
    cta: 'See the work',
    ctaHref: '/en/work',
    secondaryCta: 'Book my free call',
    secondaryCtaHref: '/en/contact',
  },
  atelier: {
    title: 'Our services',
    body: 'Interior design, decoration, home staging, photography: we help you create a beautiful, practical, calm home — within your budget, remotely or on site.',
    services: [
      { label: 'Interior design', href: '/en/services/interior-design' },
      { label: 'Decoration', href: '/en/services/decoration' },
      { label: 'Home staging', href: '/en/services/home-staging' },
      { label: 'Photography', href: '/en/services/photography' },
      { label: 'Sourcing and shopping', href: '/en/services/sourcing' },
      { label: 'Styling and installation', href: '/en/services/styling' },
    ],
    partnersLabel: 'We shop for you at',
    partners: [
      { name: 'IKEA', logo: '/images/partners/ikea.svg', href: 'https://www.ikea.com/ca/en/' },
      {
        name: 'Structube',
        logo: '/images/partners/structube.svg',
        href: 'https://www.structube.com/en_ca/',
      },
      { name: 'EQ3', logo: '/images/partners/eq3.svg', href: 'https://www.eq3.com/ca/en' },
      { name: 'Wayfair', logo: '/images/partners/wayfair.svg', href: 'https://www.wayfair.ca/' },
      {
        name: 'Bouclair',
        logo: '/images/partners/bouclair.svg',
        href: 'https://www.bouclair.com/en/',
      },
      {
        name: 'Article',
        logo: '/images/partners/article.svg',
        href: 'https://www.article.com/ca/en/',
      },
      {
        name: 'HomeSense',
        logo: '/images/partners/homesense.svg',
        href: 'https://www.homesense.ca/en/',
      },
    ],
  },
  servicePages: [
    {
      id: 'interieur',
      slug: 'interior-design',
      title: 'Interior design',
      metaTitle: 'Remote interior design in Canada | Najesty',
      metaDescription:
        'Interior design within your budget: plans, moodboards and a shopping list. Remote across Canada, Europe and Africa.',
      intro: 'Not sure where to start? We set a clear plan before a single purchase.',
      body: 'For a home that truly works day to day. You get plans, moodboards and a shopping list: flow, light, materials — all decided before you spend.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/03-somewhere-else.jpg',
      imageAlt: 'Najesty interior design project',
    },
    {
      id: 'decoration',
      slug: 'decoration',
      title: 'Decoration',
      metaTitle: 'Interior decoration within your budget | Najesty',
      metaDescription:
        'Interior decoration: colours, textures, furniture and objects chosen for you, within your budget.',
      intro: 'Room lacking character? We give it an identity.',
      body: 'Colours, textures, furniture and objects: we decorate around what you already own — without buying it all again, without guesswork.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/05-brise.jpg',
      imageAlt: 'Interior decoration by Najesty',
    },
    {
      id: 'home-staging',
      slug: 'home-staging',
      title: 'Home staging',
      metaTitle: 'Home staging in Canada | Najesty',
      metaDescription:
        'Home staging to sell your property: decluttering, light, styling and clear photos.',
      intro: 'Selling? We prepare the place so buyers like it on sight.',
      body: 'Decluttering, light, targeted styling: we show your property at its best, with clear images for the listing.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/07-seconde-vie.jpg',
      imageAlt: 'Home staging by Najesty',
    },
    {
      id: 'photographie',
      slug: 'photography',
      title: 'Photography',
      metaTitle: 'Interior photography | Najesty',
      metaDescription:
        'Interior photography for your listing, website or brand: the space at its best.',
      intro: 'Photos that make people want to walk in.',
      body: 'Light, framing, detail: ready-to-use interior photos — to sell, publish online or keep a record of your project.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/09-bon-coup.jpg',
      imageAlt: 'Interior photography by Najesty',
    },
    {
      id: 'sourcing',
      slug: 'sourcing',
      title: 'Sourcing and shopping',
      metaTitle: 'Decor sourcing and shopping | Najesty',
      metaDescription:
        'We shop for you: shopping list, alternatives and targeted picks, within your budget.',
      intro: 'No time to shop? We find it for you.',
      body: 'Shopping lists, alternatives, targeted shopping in store and online: we pick what fits the project and the budget, with no wasted purchases.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/02-longue-vie.jpg',
      imageAlt: 'Decoration sourcing by Najesty',
    },
    {
      id: 'mise-en-place',
      slug: 'styling',
      title: 'Styling and installation',
      metaTitle: 'Styling and installation in Canada | Najesty',
      metaDescription:
        'On-site installation and styling in Canada: we install, adjust and finish your space.',
      intro: 'From plan to reality: we set it all up.',
      body: 'On site in Canada: installation, styling, finishing touches. Remotely: clear instructions so the result stays true to the plan.',
      projectsLabel: 'Related projects',
      ctaLabel: 'Book my free call',
      image: '/images/work/04-night.jpg',
      imageAlt: 'Styling and installation by Najesty',
    },
  ],
  atelierPage: {
    marquee: 'THE STUDIO',
    intro:
      'An interior design and decoration studio: we make your space beautiful, practical and calm',
    body1:
      'For homeowners, sellers and hospitality spaces. We start from how you live: layout, atmosphere, materials, shopping — for a place where you truly feel at home.',
    body2:
      'From the first plan to installation, we handle it all — a beautiful, realistic result, within your budget.',
    welcome: {
      title: 'Welcome to the studio',
      role: 'Founder — Design & Pictures',
      body: 'Najesty was born from a belief: a space is felt before it is described. Our job: make it beautiful, practical and calm, within your budget. In Canada: remote design and on-site installation. In Europe and Africa: design and shopping remotely.',
    },
    pillars: [
      {
        title: 'Practical & calm',
        body: 'A place designed for your daily life: calm enough to rest, clear enough to work well.',
      },
      {
        title: 'Within your budget',
        body: 'We decorate right, not excess. Realistic choices and a clear budget from day one — without tearing out or rebuying everything.',
      },
      {
        title: 'Clear at every step',
        body: 'Design and styling know-how, with concrete visuals at every step so you can decide with confidence.',
      },
    ],
    welcomeImageAlt: 'Eliahna, founder of Najesty — portrait with reflection',
  },
  visionPage: {
    wordmark: 'HEART',
    ticker: 'Beautiful interiors, within your budget',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['OUR', 'APPROACH'],
    founder: {
      name: 'Eliahna',
      caption: 'Eliahna — founder',
      carouselLabel: 'Portraits of Eliahna, founder of Najesty',
      slides: [
        {
          src: '/images/founder/eliahna-01-reflet.png',
          alt: 'Eliahna, founder of Najesty — portrait with reflection',
        },
        {
          src: '/images/founder/eliahna-02-neige.png',
          alt: 'Eliahna in a snowy Canadian landscape',
        },
        {
          src: '/images/founder/eliahna-03-route.png',
          alt: 'Eliahna driving — black and white portrait',
        },
        {
          src: '/images/founder/eliahna-04-venise.png',
          alt: 'Eliahna smiling by the gondolas in Venice',
        },
      ],
    },
    blocks: [
      {
        title: 'Your needs',
        body: 'We start by understanding how you live: rest, work, host. Then we set a clear direction, before a single purchase.',
      },
      {
        title: 'Your style',
        body: 'More than pretty décor: a place that feels like you. Choices that make you feel good every day, and that you will love for years.',
      },
      {
        title: 'A clear plan',
        body: 'Plans, materials, styling: we turn what you want into a real space — within your budget, without guesswork.',
      },
    ],
    quote: {
      text: 'The heart does everything; the rest is useless.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Frequently asked questions',
  },
  contactPage: {
    headline: 'Have a project? Write to us:',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    regionLabel: 'Region',
    formTitle: 'Free 15-min call',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Our signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'Our interior design and decoration projects: beautiful, practical spaces, within budget.',
      alt: 'Najesty signature projects — interior design and decoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Order & Softness',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Soft, tidy storage: an order that breathes and calms everyday life.',
      category: 'decoration',
      alt: 'Order & Softness — CEB bookshelf illustration',
    },
    {
      id: 'chaque-chose',
      name: 'Everything in its Place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Well-planned storage: every object finds its drawer and its place.',
      category: 'mise-en-place',
      alt: 'Everything in its Place — CEB closet illustration',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Tidy to Live Better',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Declutter to lighten daily life — clearer, simpler.',
      category: 'home-staging',
      alt: 'Tidy to Live Better — CEB dresser illustration',
    },
    {
      id: 'longue-vie',
      name: 'Long Life',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Furniture and materials chosen to last — and to love for years.',
      category: 'decoration',
      alt: 'Long Life — lasting furniture and materials',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description:
        'A travel-inspired interior — an escape without leaving home.',
      category: 'interieur',
      alt: 'Somewhere Else — travel-inspired interior',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Setting up an evening: light, textures and ambiance for a memorable moment.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — styling and ambient lighting',
    },
    {
      id: 'brise',
      name: 'Summer Breeze',
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description:
        'Light, airy decoration — fresh, bright rooms.',
      category: 'decoration',
      alt: 'Summer Breeze — light, airy decoration',
    },
    {
      id: 'echos',
      name: 'Echoes of the Past',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Giving old furniture and family pieces new life in a modern décor.',
      category: 'interieur',
      alt: 'Echoes of the Past — reused antique furniture and heritage pieces',
    },
    {
      id: 'seconde-vie',
      name: 'Second Life',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'Refresh without tearing out: new layout, new mood, same room.',
      category: 'home-staging',
      alt: 'Second Life — soft renovation and new reading of space',
    },
    {
      id: 'gens',
      name: 'People of the Land',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Decoration rooted in Canada and Québec — warm, without clichés.',
      category: 'decoration',
      alt: 'People of the Land — Canada-rooted decoration',
    },
    {
      id: 'bon-coup',
      name: 'Right Move',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description:
        'One right choice — the right piece, the right angle — and the room changes.',
      category: 'photographie',
      alt: 'Right Move — one precise gesture in space photography',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'A more ambitious project: the whole space rethought, with the same care.',
      category: 'interieur',
      alt: 'Next Level — ambitious interior design',
    },
  ],
  workCategories: [
    {
      id: 'interieur',
      title: 'Interior design',
      projects: [
        {
          id: 'somewhere-else',
          name: 'Somewhere Else',
          image: '/images/work/03-somewhere-else.jpg',
          alt: 'Somewhere Else — travel-inspired interior',
        },
        {
          id: 'echos',
          name: 'Echoes of the Past',
          image: '/images/work/06-echos.jpg',
          alt: 'Echoes of the Past — reused antique furniture',
        },
        {
          id: 'next-level',
          name: 'Next Level',
          image: '/images/work/10-next-level.jpg',
          alt: 'Next Level — interior design',
        },
      ],
    },
    {
      id: 'decoration',
      title: 'Decoration',
      projects: [
        {
          id: 'ordre-douceur',
          name: 'Order & Softness',
          image: '/images/ceb/01-ordre-douceur.jpg?v=4',
          alt: 'Order & Softness — CEB decoration',
        },
        {
          id: 'longue-vie',
          name: 'Long Life',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Long Life — decoration',
        },
        {
          id: 'brise',
          name: 'Summer Breeze',
          image: '/images/work/05-brise.jpg',
          alt: 'Summer Breeze — decoration',
        },
        {
          id: 'gens',
          name: 'People of the Land',
          image: '/images/work/08-gens.jpg',
          alt: 'People of the Land — decoration',
        },
      ],
    },
    {
      id: 'home-staging',
      title: 'Home staging',
      projects: [
        {
          id: 'ranger-mieux-vivre',
          name: 'Tidy to Live Better',
          image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
          alt: 'Tidy to Live Better — CEB home staging',
        },
        {
          id: 'seconde-vie',
          name: 'Second Life',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Second Life — home staging',
        },
        {
          id: 'featured',
          name: 'Our signatures',
          image: '/images/work/01-featured-najesty.jpg',
          alt: 'Najesty signatures',
        },
        {
          id: 'bon-coup',
          name: 'Right Move',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Right Move — photography',
        },
      ],
    },
    {
      id: 'photographie',
      title: 'Photography',
      projects: [
        {
          id: 'bon-coup',
          name: 'Right Move',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Right Move — space photography',
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — photography',
        },
        {
          id: 'gens',
          name: 'People of the Land',
          image: '/images/work/08-gens.jpg',
          alt: 'People of the Land — photography',
        },
      ],
    },
    {
      id: 'mise-en-place',
      title: 'Styling',
      projects: [
        {
          id: 'chaque-chose',
          name: 'Everything in its Place',
          image: '/images/ceb/02-chaque-chose.jpg?v=4',
          alt: 'Everything in its Place — CEB styling',
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — styling',
        },
        {
          id: 'brise',
          name: 'Summer Breeze',
          image: '/images/work/05-brise.jpg',
          alt: 'Summer Breeze — styling',
        },
        {
          id: 'longue-vie',
          name: 'Long Life',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Long Life — styling',
        },
      ],
    },
    {
      id: 'sourcing',
      title: 'Sourcing',
      projects: [
        {
          id: 'longue-vie',
          name: 'Long Life',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Long Life — sourcing',
        },
        {
          id: 'seconde-vie',
          name: 'Second Life',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Second Life — sourcing',
        },
        {
          id: 'somewhere-else',
          name: 'Somewhere Else',
          image: '/images/work/03-somewhere-else.jpg',
          alt: 'Somewhere Else — sourcing',
        },
      ],
    },
  ],
  workFilters: [
    { id: 'expertises', label: 'Services', href: '/en/work' },
    { id: 'secteurs', label: 'Sectors', href: '/en/work/secteurs' },
    { id: 'tous', label: 'All', href: '/en/work#work-grid' },
  ],
  workSectors: [
    {
      id: 'residentiel',
      title: 'Residential',
      projects: [
        {
          id: 'somewhere-else',
          name: 'Somewhere Else',
          image: '/images/work/03-somewhere-else.jpg',
          alt: 'Somewhere Else — residential',
        },
        {
          id: 'echos',
          name: 'Echoes of the Past',
          image: '/images/work/06-echos.jpg',
          alt: 'Echoes of the Past — reused furniture in residential',
        },
        {
          id: 'longue-vie',
          name: 'Long Life',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Long Life — residential',
        },
      ],
    },
    {
      id: 'staging',
      title: 'Go-to-market',
      projects: [
        {
          id: 'seconde-vie',
          name: 'Second Life',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Second Life — go-to-market',
        },
        {
          id: 'bon-coup',
          name: 'Right Move',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Right Move — go-to-market',
        },
        {
          id: 'featured',
          name: 'Our signatures',
          image: '/images/work/01-featured-najesty.jpg',
          alt: 'Signatures — go-to-market',
        },
      ],
    },
    {
      id: 'hospitalite',
      title: 'Hospitality & living places',
      projects: [
        {
          id: 'brise',
          name: 'Summer Breeze',
          image: '/images/work/05-brise.jpg',
          alt: 'Summer Breeze — hospitality',
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — hospitality',
        },
        {
          id: 'gens',
          name: 'People of the Land',
          image: '/images/work/08-gens.jpg',
          alt: 'People of the Land — hospitality',
        },
      ],
    },
    {
      id: 'signature',
      title: 'Signatures',
      projects: [
        {
          id: 'ordre-douceur',
          name: 'Order & Softness',
          image: '/images/ceb/01-ordre-douceur.jpg?v=4',
          alt: 'Order & Softness — CEB signature',
        },
        {
          id: 'chaque-chose',
          name: 'Everything in its Place',
          image: '/images/ceb/02-chaque-chose.jpg?v=4',
          alt: 'Everything in its Place — CEB signature',
        },
        {
          id: 'ranger-mieux-vivre',
          name: 'Tidy to Live Better',
          image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
          alt: 'Tidy to Live Better — CEB signature',
        },
      ],
    },
  ],
  workMeta: {
    title: 'Interior design and decoration projects | Najesty',
    description:
      'See our projects: interior design, decoration, home staging, photography and styling, in Canada and remotely.',
    sectorsTitle: 'Projects by sector | Najesty',
    sectorsDescription:
      'Najesty projects by sector: residential, go-to-market, hospitality and signatures.',
    heroMarquee: ['Our projects', 'Your space', "Let's talk"],
    heroLead:
      'Beautiful, practical interiors within budget — remote design across Canada, Europe and Africa, on-site installation in Canada.',
    heroCta: 'Book my free call',
    heroCtaHref: '/en/contact',
  },
  marqueeWords: [
    'Interior design',
    'Decoration · home staging',
    'Within your budget',
    'Photo · sourcing · styling',
    'Free 15-min call',
    'No commitment',
    'Remote across Canada',
    'Also in Europe & Africa',
    'On site in Canada',
    'From plan to installation',
  ],
  contact: {
    title: 'Let’s talk about your space',
    body: 'Free 15-minute call, no commitment. Together we look at what you want to change, what fits your budget, and the right format: remote advice or full support. Canada, Europe or Africa.',
    cta: 'Book my free call',
  },
  faq: [
    {
      question: 'What is Najesty?',
      answer:
        'Najesty Design & Pictures is a Canadian interior design and decoration studio. We also handle home staging, photography, shopping and installation — for a beautiful, practical, calm space, within your budget.',
    },
    {
      question: 'How much does a project cost?',
      answer:
        'The price depends on the size of the space and how much help you need. We discuss it during the free 15-minute call, then offer you an option that fits your budget — no commitment.',
    },
    {
      question: 'Do you work remotely?',
      answer:
        'Yes. Design, moodboards and shopping happen remotely across Canada, and with clients in Europe and Africa. On-site installation and styling happen locally in Canada.',
    },
    {
      question: 'Remote or on-site: which should I choose?',
      answer:
        'Remotely, you get plans, moodboards and a shopping list, with no travel. On site in Canada, we add installation, styling and photos in your space. Many projects combine both.',
    },
    {
      question: 'What exactly do I receive?',
      answer:
        'Depending on the project: plans, moodboards, a shopping list, shopping, on-site installation and photos. We confirm it on the free call.',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    phonePlaceholder: 'Your phone',
    messagePlaceholder: 'Describe your space, what you would like to change and your budget',
    submit: 'Book my free call',
    sending: 'Sending…',
    ok: 'Message received. We will reply shortly to set up the call.',
    error: 'Sending failed for now. Email us at bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: 'Our approach — Najesty | Interior design within your budget',
      description:
        'How Najesty works: your needs first, a clear plan, then decoration within your budget. In Canada, and remotely in Europe and Africa.',
    },
    atelier: {
      title: 'About — Najesty | Interior design studio in Canada',
      description:
        'Najesty is a Canadian interior design and decoration studio founded by Eliahna. Beautiful, practical spaces, within your budget.',
    },
    contact: {
      title: 'Free 15-min call — Contact | Najesty',
      description:
        'Book a free 15-minute call, no commitment, to talk about your space and budget. In Canada, and remotely in Europe and Africa.',
    },
    legal: {
      title: 'Legal notice — Najesty',
      h1: 'Legal notice',
      p1: 'Najesty Design & Pictures — Canada. Contact:',
      p2: 'Content on this site (text, images, video) belongs to Najesty Design & Pictures unless otherwise stated. Unauthorized reproduction is prohibited.',
      back: '← Back to home',
    },
    method: {
      title: 'Remote or on-site interior design | Najesty',
      description:
        'How it works: remote interior design (Canada, Europe, Africa) or on-site installation in Canada. Free 15-minute call.',
      h1: 'Remote design or on-site?',
      lead: 'Two paths to the same result: a beautiful, practical, calm space. Remote design (Canada, Europe, Africa) or on-site installation in Canada — depending on your needs.',
      remoteTitle: 'Remote design',
      remoteBody:
        'You get moodboards, plans and a shopping list, and approve online. Simple, clear, within budget — no travel.',
      localTitle: 'On-site styling (Canada)',
      localBody:
        'We come to you: installation, styling and photos. A finished result, adjusted to the room’s real light.',
      whoTitle: 'Who is it for?',
      whoRemote:
        'Homes and businesses across Canada outside our local area; clients in Europe or Africa who want a clear plan remotely.',
      whoLocal:
        'Projects where presence matters: home staging, photo shoots, final installation in Canada.',
      stepsTitle: 'How it works',
      steps: [
        {
          title: '1. Free call (15 min)',
          body: 'We talk about your space, your needs and your budget — no commitment.',
        },
        {
          title: '2. Design',
          body: 'Plans, moodboards, shopping list and sourcing. You see the result before you buy.',
        },
        {
          title: '3. Installation (Canada)',
          body: 'On site in Canada: installation, styling, photos — your space is ready to live in.',
        },
      ],
      ctaTitle: 'Not sure which format?',
      ctaBody:
        'In a free 15-minute call, we will tell you whether remote, on-site, or both fits you.',
      cta: 'Book my free call',
    },
    blog: {
      title: 'Blog — Najesty | Interior design & decoration',
      description:
        'Practical Najesty advice for Canadian homes, sellers, hospitality, Europe and Africa: remote design, decoration, home staging, sourcing.',
      eyebrow: 'Najesty Blog',
      h1: 'Interior design and decor advice',
      lead: '25 practical articles for Canadian homes, new owners, sellers, hospitality, and remote projects in Europe and Africa.',
      listLabel: 'Blog articles',
      readMore: 'Read article',
      backToBlog: '← Blog',
      minRead: 'min read',
      faqTitle: 'Frequently asked questions',
      relatedTitle: 'Also read',
      alsoInEn: 'Also available in English →',
      alsoInFr: 'Aussi disponible en français →',
    },
  },
};
