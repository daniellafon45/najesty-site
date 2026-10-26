import type { SiteContent } from './types';

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en-CA',
  ogLocale: 'en_CA',
  meta: {
    homeTitle: 'Remote Interior Design & Decorating in Canada | Najesty',
    homeDescription:
      'Interior design, decorating, home staging and interior photography. Remote across Canada, Europe and Africa, and on-site in Canada. Free 15-min call, no commitment.',
  },
  nav: [
    { label: 'Services', href: '/en/atelier' },
    { label: 'Projects', href: '/en/work' },
    { label: 'How it works', href: '/en/method' },
    { label: 'About', href: '/en/vision' },
    { label: 'Blog', href: '/en/blog' },
    { label: 'Free call', href: '/en/contact', cta: true },
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
    scrollVision: 'See our services',
    langSwitchLabel: 'Français',
    prev: 'Previous',
    next: 'Next',
    discover: 'More projects',
    allProjects: 'All projects →',
    thePlace: 'How we work',
    expertises: 'Services',
    talkCta: 'Book my free call (15 min) →',
    projectBody:
      'Like every Najesty project, it starts with how the space is used day to day. We first set a clear direction (moodboard, layout plan, shopping list), then choose, buy and install what is needed — within the agreed budget. Have a project like “{name}”? Let’s talk during a free 15-minute call.',
  },
  heroSeoH1: 'Interior design and decorating in Canada — Najesty',
  hero: {
    eyebrow: 'Interior design & decorating · Canada, Europe, Africa',
    headline: 'A beautiful, practical home that feels like you — within your budget.',
    subline:
      'Najesty designs and decorates your space: interior design, decorating, home staging and photography. Remote across Canada, Europe and Africa — on-site in Canada.',
    reassurance: 'Free · 15 minutes · No commitment',
    slideLabel: 'Project',
  },
  ctas: {
    primary: 'Book my free call (15 min)',
    primaryHref: '/en/contact',
    secondary: 'See projects',
    secondaryHref: '/en/work',
    atelierDiscover: 'See all services',
    atelierHref: '/en/atelier',
    methodDiscover: 'How it works',
    methodHref: '/en/method',
    reassurance: 'Free, 15 minutes, no commitment. You leave with clear next steps.',
    bandTitle: 'Let’s talk about your space. 15 minutes, free.',
    bandBody:
      'Tell us what you want to change. We’ll explain what’s possible with your budget, remotely or on-site. No commitment: you leave with clear next steps.',
    sectionEnd: 'Book my free call (15 min)',
  },
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Living room decorating',
      caption: 'Living room decorated by Najesty: furniture, textiles and objects chosen for a warm space.',
      href: '/en/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'Travel-inspired interior design, to feel elsewhere without leaving home.',
      href: '/en/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: 'Summer Breeze',
      caption: 'Light, airy decorating: natural textures and rooms that breathe.',
      href: '/en/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Long Life',
      caption: 'Dining room with furniture and materials chosen to last.',
      href: '/en/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'People of the Land',
      caption: 'Décor that celebrates Canada and Québec, without folklore.',
      href: '/en/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Fresh Start',
      caption: 'A home prepared for a new beginning.',
      href: '/en/contact',
    },
  ],
  home: {
    servicesEyebrow: 'What we do for you',
    servicesTitle: 'Sound familiar? Here’s how we help.',
    servicesLead:
      'From the first plan to the last photo, one studio takes care of everything. Pick one service or combine them.',
    services: [
      {
        situation: 'Your room doesn’t work the way you’d like',
        title: 'Interior design',
        result:
          'We rethink the layout, flow and lighting. You get a clear plan before you buy a single thing.',
        href: '/en/services/interior-design',
      },
      {
        situation: 'You just moved in and don’t know where to start',
        title: 'Decorating',
        result:
          'Colours, textures, furniture and objects: a cohesive home that feels like you, without buying everything new.',
        href: '/en/services/decoration',
      },
      {
        situation: 'You’re putting your house or condo on the market',
        title: 'Home staging',
        result:
          'We declutter, brighten and stage so your property makes a great first impression, starting with the listing photos.',
        href: '/en/services/home-staging',
      },
      {
        situation: 'You need beautiful photos of your space',
        title: 'Interior photography',
        result: 'Polished interior photos for a listing, your website or your social media.',
        href: '/en/services/photography',
      },
      {
        situation: 'You don’t have time to shop',
        title: 'Sourcing & shopping',
        result:
          'We find the right furniture and décor within your budget and give you a clear shopping list — or shop for you.',
        href: '/en/services/sourcing',
      },
      {
        situation: 'Everything is bought, now it all needs setting up',
        title: 'Installation & styling',
        result:
          'On-site in Canada: we install, place every object and handle the final details. All that’s left is to enjoy it.',
        href: '/en/services/styling',
      },
    ],
    servicesLinkLabel: 'Learn more',
    stepsEyebrow: 'How it works',
    stepsTitle: 'Simple, in 4 steps.',
    steps: [
      {
        title: 'Free 15-minute call',
        body: 'Tell us about your space, your needs and your budget. No commitment: you leave with clear next steps.',
      },
      {
        title: 'A proposal that fits your budget',
        body: 'We suggest the format that suits you: remote, on-site, or both. You know what’s included before you say yes.',
      },
      {
        title: 'Moodboard, plan and shopping list',
        body: 'You see the direction before spending. We do the sourcing and shopping for you, within the agreed budget.',
      },
      {
        title: 'Installation and photos',
        body: 'In Canada, we can install and style everything on-site, then photograph the result. Remotely, you follow a clear plan, step by step.',
      },
    ],
    formats: [
      {
        title: 'Remote',
        where: 'Anywhere in Canada, Europe and Africa',
        body: 'Moodboards, layout plans, shopping lists and sourcing, approved with you online. Ideal if you want a clear direction without travel.',
      },
      {
        title: 'On-site',
        where: 'In Canada',
        body: 'Installation, styling and photography right in your home. Ideal for home staging, a photo shoot or the finishing touches.',
      },
    ],
    projectsEyebrow: 'Our work',
    projectsTitle: 'Spaces transformed, room by room.',
    projectsLead:
      'Living rooms, kitchens, dining rooms, storage, home staging: see what we’ve done and picture your own space.',
    founderEyebrow: 'Who’s behind Najesty',
    founderTitle: 'Eliahna, founder of Najesty',
    founderBody: [
      'Eliahna founded Najesty Design & Pictures on a simple belief: a space is felt before it is described. She designs practical, calming interiors that feel like you — without ever losing sight of your budget.',
      'With Najesty, she works with clients remotely across Canada, Europe and Africa, and on-site in Canada for installation, styling and photography.',
    ],
    founderLink: 'More about Najesty',
    founderImageAlt: 'Eliahna, founder of Najesty Design & Pictures',
    faqEyebrow: 'Your questions',
    faqTitle: 'Frequently asked questions',
  },
  atelier: {
    title: 'Our services',
    body: 'Interior design, decorating, home staging, photography, sourcing and installation: we take care of your space from the first plan to the last photo, within your budget.',
    services: [
      { label: 'Interior design', href: '/en/services/interior-design' },
      { label: 'Decorating', href: '/en/services/decoration' },
      { label: 'Home staging', href: '/en/services/home-staging' },
      { label: 'Photography', href: '/en/services/photography' },
      { label: 'Sourcing and shopping', href: '/en/services/sourcing' },
      { label: 'Installation and styling', href: '/en/services/styling' },
    ],
    partnersLabel: 'We shop for you at stores such as:',
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
      metaTitle: 'Remote & On-site Interior Design in Canada | Najesty',
      metaDescription:
        'Rethink your home’s layout with a clear plan before you buy: flow, lighting, furniture. Remote across Canada, Europe and Africa. Free 15-min call.',
      intro:
        'Your room doesn’t work the way you’d like? We rethink the layout so it’s beautiful, practical and pleasant to live in.',
      body: 'We start with how you live: who uses the room, when, and for what. Then we define the layout, flow, lighting and materials. You get a clear direction — moodboard, layout plan and shopping list — before you spend a dollar.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'your living room, kitchen or office lacks space or logic;',
        'you’re renovating or rearranging and want to avoid costly mistakes;',
        'you want a cohesive result throughout your home.',
      ],
      includesTitle: 'What you get',
      includes: [
        'A moodboard showing the chosen look',
        'A layout plan',
        'A shopping list that fits your budget',
        'Optional in Canada: on-site installation, styling and photos',
      ],
      projectsLabel: 'Interior design projects',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/03-somewhere-else.jpg',
      imageAlt: 'Najesty interior design project',
    },
    {
      id: 'decoration',
      slug: 'decoration',
      title: 'Decorating',
      metaTitle: 'Interior Decorating Within Your Budget in Canada | Najesty',
      metaDescription:
        'Colours, textures, furniture and objects: a home that feels like you, without buying everything new. Remote across Canada, Europe and Africa, or on-site in Canada. Free 15-min call.',
      intro:
        'Just moved in, or your décor no longer feels like you? We create a cohesive, warm home without replacing everything.',
      body: 'Colours, textures, furniture, lighting and objects: we choose what works together and keep what you already love. The result: a home that feels like you and fits your budget.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'you just moved in and don’t know where to start;',
        'your furniture is mismatched and you want a cohesive whole;',
        'you want a new look without replacing everything.',
      ],
      includesTitle: 'What you get',
      includes: [
        'A moodboard with colours, materials and atmosphere',
        'A clear shopping list, within your budget',
        'Sourcing and shopping, if you wish',
        'Optional in Canada: on-site installation and styling',
      ],
      projectsLabel: 'Decorating projects',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/05-brise.jpg',
      imageAlt: 'Interior decorating by Najesty',
    },
    {
      id: 'home-staging',
      slug: 'home-staging',
      title: 'Home staging',
      metaTitle: 'Home Staging to Sell Your Home in Canada | Najesty',
      metaDescription:
        'Selling your house or condo? Decluttering, lighting, styling and photos for a listing that makes buyers want to visit. Free 15-min call.',
      intro:
        'Putting your property on the market? We prepare it to make a great first impression, starting with the listing photos.',
      body: 'We declutter, improve the lighting and stage the key rooms so buyers can picture themselves there. We can also photograph the result for your listing.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'you’re selling your house or condo;',
        'your property is empty, cluttered or not showing well;',
        'you want listing photos that make people want to visit.',
      ],
      includesTitle: 'What you get',
      includes: [
        'A clear direction for each key room',
        'Decluttering and staging of the key rooms',
        'On-site styling in Canada',
        'Interior photos for your listing (optional)',
      ],
      projectsLabel: 'Home staging projects',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/07-seconde-vie.jpg',
      imageAlt: 'Home staging by Najesty',
    },
    {
      id: 'photographie',
      slug: 'photography',
      title: 'Photography',
      metaTitle: 'Interior Photographer in Canada | Najesty',
      metaDescription:
        'Polished interior photos for a real estate listing, a website or social media. On-site shoot in Canada. Free 15-min call.',
      intro: 'Need beautiful photos of your space? We take them with a designer’s eye.',
      body: 'Light, framing and details: we photograph your interior so it looks as good online as it does in person. Useful to sell, rent, present your business or keep a record of your project.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'you’re preparing a sale or rental listing;',
        'you want to show your place on your website or social media;',
        'you just finished a project and want to show it off.',
      ],
      includesTitle: 'What you get',
      includes: [
        'An on-site photo shoot in Canada',
        'Images ready for the web and listings',
      ],
      projectsLabel: 'Photography projects',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/09-bon-coup.jpg',
      imageAlt: 'Najesty interior photography',
    },
    {
      id: 'sourcing',
      slug: 'sourcing',
      title: 'Sourcing and shopping',
      metaTitle: 'Furniture & Décor Sourcing and Shopping | Najesty',
      metaDescription:
        'No time to shop? We find the right furniture and décor within your budget and give you a clear shopping list. Remote across Canada, Europe and Africa.',
      intro:
        'No time to shop, or afraid of getting it wrong? We find the right furniture and décor for you, within your budget.',
      body: 'We select pieces that match the chosen direction, with alternatives for your budget. You get a clear shopping list — or we do the shopping for you. Nothing unnecessary, nothing random.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'you don’t have time to go shopping;',
        'you’re torn between pieces and afraid of making a mistake;',
        'you want to stick to a precise budget.',
      ],
      includesTitle: 'What you get',
      includes: [
        'A shopping list with alternatives',
        'Choices that fit your budget',
        'Shopping done for you, if you wish',
      ],
      projectsLabel: 'Projects with sourcing',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/02-longue-vie.jpg',
      imageAlt: 'Najesty décor sourcing',
    },
    {
      id: 'mise-en-place',
      slug: 'styling',
      title: 'Installation and styling',
      metaTitle: 'On-site Interior Installation & Styling in Canada | Najesty',
      metaDescription:
        'Everything is bought, now it needs setting up? We handle installation, styling and final details, on-site in Canada. Free 15-min call.',
      intro:
        'Everything is bought but nothing is in place? We install, style and handle the final details.',
      body: 'On-site in Canada: we place the furniture, hang, arrange the objects and adjust until everything is right. Remotely: we give you a clear set-up plan to do it yourself.',
      forYouTitle: 'This is for you if…',
      forYou: [
        'your purchases have arrived and you don’t know how to arrange them;',
        'you’re preparing a sale, a photo shoot or an event;',
        'you want a finished result without spending your weekends on it.',
      ],
      includesTitle: 'What you get',
      includes: [
        'On-site installation and styling in Canada',
        'A set-up plan if you’re remote',
        'Photos of the result (optional)',
      ],
      projectsLabel: 'Installation projects',
      ctaLabel: 'Book my free call (15 min)',
      image: '/images/work/04-night.jpg',
      imageAlt: 'Installation and styling by Najesty',
    },
  ],
  atelierPage: {
    marquee: 'OUR SERVICES',
    intro:
      'Najesty is an interior design and decorating studio. We make your space beautiful, practical and calming — within your budget.',
    body1:
      'Remote across Canada, Europe and Africa: moodboards, layout plans, shopping lists and sourcing.',
    body2:
      'On-site in Canada: installation, styling and photography. You can combine both in one project.',
    welcome: {
      title: 'Who’s behind Najesty',
      role: 'Eliahna, founder — Najesty Design & Pictures',
      body: 'Eliahna founded Najesty on a belief: a space is felt before it is described. She designs practical, calming interiors that feel like you and fit your budget. In Canada: remote design and on-site styling. In Europe and Africa: remote design and sourcing.',
    },
    pillars: [
      {
        title: 'Practical every day',
        body: 'We start with how you live: a place calm enough to rest, clear enough to get things done, easy to maintain.',
      },
      {
        title: 'Within your budget',
        body: 'We decorate smart, without buying everything new. You know what’s included and what to plan for before you start.',
      },
      {
        title: 'See it before you buy',
        body: 'Moodboard, layout plan and shopping list at each step: you approve the direction before spending.',
      },
    ],
    welcomeImageAlt: 'Eliahna, founder of Najesty — portrait with reflection',
  },
  visionPage: {
    wordmark: 'HEART',
    ticker: 'Interior design · Decorating · Home staging · Photography',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['About', 'Najesty'],
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
        title: 'Your daily life first',
        body: 'Before choosing a colour or a piece of furniture, we look at how you live: resting, working, hosting. The space has to work for you first.',
      },
      {
        title: 'A place that feels like you',
        body: 'Not a catalogue look: a home where you feel good, with your tastes, your story and the things you love.',
      },
      {
        title: 'A realistic project',
        body: 'Moodboard, layout plan, shopping list: you see where we’re going before spending. Everything is designed to fit your budget.',
      },
    ],
    quote: {
      text: 'The heart does everything; the rest is useless.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Frequently asked questions',
  },
  contactPage: {
    headline: 'Book your free 15-minute call',
    lead: 'Tell us about your space in a few lines. We’ll get back to you to schedule a 15-minute call — free, no commitment.',
    nextTitle: 'What happens next',
    nextSteps: [
      'We read your message and reply to schedule the call.',
      'For 15 minutes, we talk about your space, your needs and your budget.',
      'You leave with clear next steps — and a proposal if you’d like one.',
    ],
    emailLabel: 'Prefer to write directly?',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    regionLabel: 'Region',
    formTitle: 'Tell us about your project',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Our signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'A look at our work: interior design, decorating, home staging and photography — practical, calming spaces designed within our clients’ budgets.',
      alt: 'Najesty signature projects — interior design and decoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Order & Softness',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Storage and decorating idea for a bookcase: order that stays soft, with shapes that calm everyday life.',
      category: 'decoration',
      alt: 'Order & Softness — CEB bookshelf illustration',
    },
    {
      id: 'chaque-chose',
      name: 'Everything in its Place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Closet set-up: every object gets its place, so finding things is easy every day.',
      category: 'mise-en-place',
      alt: 'Everything in its Place — CEB closet illustration',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Tidy to Live Better',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Decluttering and organizing a dresser to lighten everyday life — the foundation of good home staging.',
      category: 'home-staging',
      alt: 'Tidy to Live Better — CEB dresser illustration',
    },
    {
      id: 'longue-vie',
      name: 'Long Life',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Decorating with furniture and materials chosen to last, pieces you still love years later.',
      category: 'decoration',
      alt: 'Long Life — lasting furniture and materials',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description:
        'Travel-inspired interior design: a residential interior that brings a feeling of elsewhere home.',
      category: 'interieur',
      alt: 'Somewhere Else — travel-inspired interior',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Set-up and mood lighting for an evening: light, textures and décor for a memorable moment.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — styling and ambient lighting',
    },
    {
      id: 'brise',
      name: 'Summer Breeze',
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description:
        'Light, airy decorating: natural textures, light and rooms that breathe.',
      category: 'decoration',
      alt: 'Summer Breeze — light, airy decoration',
    },
    {
      id: 'echos',
      name: 'Echoes of the Past',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Interior design that reuses old furniture and family pieces instead of buying everything new.',
      category: 'interieur',
      alt: 'Echoes of the Past — reused antique furniture and heritage pieces',
    },
    {
      id: 'seconde-vie',
      name: 'Second Life',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'A refresh without major renovation: a new room layout and a new atmosphere, notably for a sale.',
      category: 'home-staging',
      alt: 'Second Life — soft renovation and new reading of space',
    },
    {
      id: 'gens',
      name: 'People of the Land',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Decorating that celebrates Canada and Québec — grounded décor, without folklore.',
      category: 'decoration',
      alt: 'People of the Land — Canada-rooted decoration',
    },
    {
      id: 'bon-coup',
      name: 'Right Move',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description:
        'Interior photography: the right piece, the right angle, the right light for an image that draws people in.',
      category: 'photographie',
      alt: 'Right Move — one precise gesture in space photography',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'More ambitious interior design: layout and materials pushed further, always within a set budget.',
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
      title: 'Decorating',
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
      title: 'Installation and styling',
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
    { id: 'expertises', label: 'Expertise', href: '/en/work' },
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
    title: 'Interior Design & Decorating Projects | Najesty',
    description:
      'See our interior design, decorating, home staging, photography and installation work. Have a similar project? Free 15-min call.',
    sectorsTitle: 'Projects by sector | Najesty',
    sectorsDescription:
      'Najesty projects by sector: residential, go-to-market, hospitality and signatures.',
    heroMarquee: ['Our projects', 'Interior design', 'Decorating', 'Home staging'],
    heroLead:
      'Here is what we have done for other spaces: interior design, decorating, home staging, photography and installation. Remote across Canada, Europe and Africa — on-site in Canada.',
    heroCta: 'Book my free call (15 min)',
    heroCtaHref: '/en/contact',
  },
  marqueeWords: [
    'Interior design',
    'Decorating',
    'Home staging',
    'Photography',
    'Sourcing and shopping',
    'Installation and styling',
    'Remote: Canada, Europe, Africa',
    'On-site in Canada',
    'Within your budget',
    'Free 15-min call',
  ],
  contact: {
    title: 'Let’s talk about your space',
    body: 'Book a free 15-minute call, no commitment. We talk about your space, your needs and your budget — and you leave with clear next steps. Canada, Europe or Africa.',
    cta: 'Book my free call (15 min)',
  },
  faq: [
    {
      question: 'How much does a project with Najesty cost?',
      answer:
        'Every project is different, so we don’t list fixed prices. The fee depends on the size of the space, the services you choose and your budget. After the free 15-minute call, you receive a clear proposal, with no commitment.',
    },
    {
      question: 'Is the 15-minute call really free?',
      answer:
        'Yes. It’s a no-commitment conversation to understand your project, your budget and the format that suits you. You leave with clear next steps, whether you work with us or not.',
    },
    {
      question: 'Do you work remotely or on-site?',
      answer:
        'Both. Design, moodboards, layout plans, shopping lists and sourcing are done remotely anywhere in Canada, Europe and Africa. Installation, styling and photography are done on-site in Canada — ask us during the call whether your address is covered.',
    },
    {
      question: 'What do I actually get?',
      answer:
        'Depending on the services you choose: a moodboard (the look), a layout plan, a shopping list within your budget and sourcing of the items. On-site in Canada, we add installation, styling and photos.',
    },
    {
      question: 'Do I have to replace everything?',
      answer:
        'No. We start from what you already have and keep what you love. We only add what’s missing, to decorate smart and stay within budget.',
    },
    {
      question: 'How long does a project take?',
      answer:
        'It depends on the size of the space, the services chosen and furniture availability. We set a realistic timeline together at the start of the project.',
    },
    {
      question: 'What services does Najesty offer?',
      answer:
        'Interior design, decorating, home staging, interior photography, sourcing and shopping, installation and styling. You can choose one service or combine them.',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    phonePlaceholder: 'Your phone',
    messagePlaceholder:
      'Your project in a few words: which room, which city, what you want to change, your approximate budget',
    submit: 'Book my free call',
    sending: 'Sending…',
    ok: 'Thank you! Your request has been received. We’ll reply shortly to schedule your 15-minute call.',
    error: 'Sending failed for now. Email us at bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: 'About Najesty and Eliahna, Interior Designer | Najesty',
      description:
        'Najesty Design & Pictures, founded by Eliahna: practical, calming interior design and decorating within your budget. Remote across Canada, Europe and Africa.',
    },
    atelier: {
      title: 'Interior Design, Decorating & Home Staging Services | Najesty',
      description:
        'Interior design, decorating, home staging, photography, sourcing and installation. Remote across Canada, Europe and Africa, on-site in Canada. Free 15-min call.',
    },
    contact: {
      title: 'Book a Free 15-min Call | Najesty',
      description:
        'Book a free, no-commitment 15-minute call to discuss your interior design, decorating or home staging project. Canada, Europe, Africa.',
    },
    legal: {
      title: 'Legal notice — Najesty',
      h1: 'Legal notice',
      p1: 'Najesty Design & Pictures — Canada. Contact:',
      p2: 'Content on this site (text, images, video) belongs to Najesty Design & Pictures unless otherwise stated. Unauthorized reproduction is prohibited.',
      back: '← Back to home',
    },
    method: {
      title: 'How It Works: Remote or On-site Interior Design | Najesty',
      description:
        'How a Najesty project works: free 15-min call, a proposal within your budget, moodboard, layout plan and shopping list, then on-site installation in Canada.',
      h1: 'How it works',
      lead: 'A Najesty project can be remote, on-site, or both. Either way, it starts with a free 15-minute call, no commitment.',
      remoteTitle: 'Remote — anywhere in Canada, Europe and Africa',
      remoteBody:
        'Moodboards, layout plans, shopping lists and sourcing, approved with you online. You move forward with a clear direction, without travel, and decorate within your budget.',
      localTitle: 'On-site — in Canada',
      localBody:
        'Installation, styling and photography right in your home. Ideal when being there matters: home staging, photo shoots, finishing touches.',
      whoTitle: 'Which format should I choose?',
      whoRemote:
        'Remote if you live elsewhere in Canada, in Europe or in Africa, or if you want a clear plan to carry out yourself.',
      whoLocal:
        'On-site if you’re selling your property, need photos, or would rather we install everything for you. The two formats are often combined.',
      stepsTitle: 'The steps',
      steps: [
        {
          title: '1. Free call (15 min)',
          body: 'Tell us about your space, your needs and your budget. No commitment: you leave with clear next steps.',
        },
        {
          title: '2. Proposal',
          body: 'We suggest the format that fits your budget: remote, on-site, or both. You know what’s included before you say yes.',
        },
        {
          title: '3. Design',
          body: 'Moodboard, layout plan and shopping list. We do the sourcing and shopping for you. You approve before spending.',
        },
        {
          title: '4. Installation (in Canada)',
          body: 'On-site: installation, styling and photography. Remotely: a clear set-up plan, step by step.',
        },
      ],
      ctaTitle: 'Not sure which format to choose?',
      ctaBody:
        'That’s exactly what the free call is for: in 15 minutes, we tell you whether remote, on-site or both fits your project and your budget.',
      cta: 'Book my free call (15 min)',
    },
    blog: {
      title: 'Interior Design & Decorating Blog: Practical Tips | Najesty',
      description:
        'Practical interior design, decorating, home staging and sourcing tips for your home in Canada, Europe or Africa.',
      eyebrow: 'Najesty Blog',
      h1: 'Interior design and decorating tips',
      lead: 'Simple guides to better arrange, decorate or sell your home — and to know when remote design is a good idea.',
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
