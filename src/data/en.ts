import type { SiteContent } from './types';

export const en: SiteContent = {
  locale: 'en',
  htmlLang: 'en-CA',
  ogLocale: 'en_CA',
  meta: {
    homeTitle: 'Najesty — Interior design & decoration in Canada',
    homeDescription:
      'Najesty makes interiors livable, productive and calm — with expertise, real emotion, and decoration that respects your budget. In Canada, and remotely in Europe and Africa.',
  },
  nav: [
    { label: 'Work', href: '/en/work' },
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
    scrollVision: 'Scroll to vision',
    langSwitchLabel: 'Français',
    prev: 'Previous',
    next: 'Next',
    discover: 'More to explore',
    allProjects: 'All projects →',
    thePlace: 'The place',
    expertises: 'Expertise',
    talkCta: 'Talk about your space →',
    projectBody:
      'At Najesty, every project starts with use and emotion. {name} turns the place into a livable, productive, calm space — decorated with expertise, within budget.',
  },
  heroSeoH1: 'Najesty — Interior design and decoration in Canada',
  ctas: {
    primary: 'Request an orientation',
    primaryHref: '/en/contact',
    secondary: 'See the work',
    secondaryHref: '/en/work',
    atelierDiscover: 'Discover the studio',
    atelierHref: '/en/atelier',
    methodDiscover: 'Compare remote vs on-site',
    methodHref: '/en/method',
    bandTitle: 'Ready to transform your space?',
    bandBody:
      'A free 15-minute orientation. We clarify uses, budget and format — no commitment.',
    sectionEnd: 'Talk about your project',
  },
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Najesty',
      caption:
        'Livable, productive, calm spaces — expertise and real emotion, within your budget.',
      href: '/en/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'Travel without leaving home: an interior that opens other horizons.',
      href: '/en/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: 'Summer Breeze',
      caption: 'Lighten the room until the air moves — light, texture, breath.',
      href: '/en/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Long Life',
      caption: 'Choose today what you will still want to keep tomorrow.',
      href: '/en/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'People of the Land',
      caption: 'Root Canada in the décor — with presence, without folklore.',
      href: '/en/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Fresh Start',
      caption: 'A new space for the chapter you are writing now.',
      href: '/en/contact',
    },
  ],
  manifesto: {
    lines: [
      { text: 'Emotion at the heart of space.' },
      { text: 'Identity. Design.' },
      { text: 'At Najesty, it is the' },
      { text: 'sum of every marker' },
      { text: 'that makes a place' },
      { text: 'come alive.' },
      { text: 'Make experience', accent: 'arrow' },
      { text: 'your signature —' },
      { text: 'and leave room' },
      { text: 'for feeling.' },
    ],
    cta: 'See the work',
    ctaHref: '/en/work',
    secondaryCta: 'Request an orientation',
    secondaryCtaHref: '/en/contact',
  },
  atelier: {
    title: 'The Studio',
    body: 'Before the décor, the feeling: a livable, productive, calm interior. Najesty brings expertise and real emotion — to decorate well, within your budget.',
    services: [
      'Interior design',
      'Decoration',
      'Home staging',
      'Photography',
      'Sourcing and shopping',
      'Styling and installation',
    ],
    partnersLabel: 'Sourcing partners',
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
  atelierPage: {
    marquee: 'THE STUDIO',
    intro:
      'An interior design and decoration studio: making spaces livable, productive and calm',
    body1:
      'We shape interiors where you can breathe, work better, and truly feel at home. Atmosphere, flow, materials, sourcing: everything starts from how you live — and how the place feels.',
    body2:
      'Expertise and emotion, together. From direction to installation, we decorate with craft — beautiful, realistic, within your budget.',
    welcome: {
      title: 'Welcome to the studio',
      role: 'Founder — Design & Pictures',
      body: 'Najesty starts from a belief: a space is felt before it is described. We make it livable, productive and calm — with expertise, real emotion, and a project that fits the budget. In Canada: remote design and on-site styling. In Europe and Africa: design and sourcing remotely.',
    },
    pillars: [
      {
        title: 'Livable & productive',
        body: 'A place built for your rhythm: calm enough to rest, clear enough to move — zen without emptiness.',
      },
      {
        title: 'Within your budget',
        body: 'Decorate well, not too much. Realistic sourcing, lucid choices, clear packages — beauty without tearing everything out or buying it all again.',
      },
      {
        title: 'Expertise & emotion',
        body: 'The craft of design and styling, with feeling at the centre — and a clear image at every step so you move forward calmly.',
      },
    ],
    welcomeImageAlt: 'Residential living room by Najesty — natural light and quiet materials',
  },
  visionPage: {
    wordmark: 'HEART',
    ticker: 'The heart of our expertise is space',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['THE BRAND', 'AT HEART'],
    blocks: [
      {
        title: 'Strategy',
        body: 'We read how you live so the space actually serves you: live, produce, recharge. A clear direction — livable, productive, calm — before a single purchase.',
      },
      {
        title: 'Identity',
        body: 'More than pretty décor: the identity of the place. What makes you feel good there — and keeps the emotion in everyday life.',
      },
      {
        title: 'Design',
        body: 'Plans, materials, styling: the expertise to turn feeling into a real space — within your budget, without improvisation.',
      },
    ],
    quote: {
      text: 'The heart does everything; the rest is useless.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Frequently asked questions',
  },
  contactPage: {
    headline: 'Put your space at the heart:',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Address',
    phoneLabel: 'Phone',
    regionLabel: 'Region',
    formTitle: 'Write to us',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Our signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'Projects that embody Najesty: livable, productive, calm — expertise and emotion, within budget.',
      alt: 'Najesty signature projects — interior design and decoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Order & Softness',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Tidy without rigidity: an order that breathes, volumes that calm everyday life.',
      category: 'decoration',
      alt: 'Order & Softness — CEB bookshelf illustration',
    },
    {
      id: 'chaque-chose',
      name: 'Everything in its Place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Right storage: every object finds its gesture, its drawer, its place.',
      category: 'mise-en-place',
      alt: 'Everything in its Place — CEB closet illustration',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Tidy to Live Better',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Organize well to lighten daily life — clearer, simpler, lighter.',
      category: 'home-staging',
      alt: 'Tidy to Live Better — CEB dresser illustration',
    },
    {
      id: 'longue-vie',
      name: 'Long Life',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Furniture and materials chosen to last — what you will still love tomorrow.',
      category: 'decoration',
      alt: 'Long Life — lasting furniture and materials',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description:
        'An interior that evokes elsewhere — travel, destination, escape, at home.',
      category: 'interieur',
      alt: 'Somewhere Else — travel-inspired interior',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Stage the evening: light, texture and ambiance for a moment that sticks.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — styling and ambient lighting',
    },
    {
      id: 'brise',
      name: 'Summer Breeze',
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description:
        'Light, airy decoration — summer freshness, rooms that breathe.',
      category: 'decoration',
      alt: 'Summer Breeze — light, airy decoration',
    },
    {
      id: 'echos',
      name: 'Echoes of the Past',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Reuse old furniture and heritage pieces in the décor — the past living today.',
      category: 'interieur',
      alt: 'Echoes of the Past — reused antique furniture and heritage pieces',
    },
    {
      id: 'seconde-vie',
      name: 'Second Life',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'Renovate without tearing everything out: a new reading of the room, path and mood.',
      category: 'home-staging',
      alt: 'Second Life — soft renovation and new reading of space',
    },
    {
      id: 'gens',
      name: 'People of the Land',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Root the décor in Canada and Québec — local presence, without folklore.',
      category: 'decoration',
      alt: 'People of the Land — Canada-rooted decoration',
    },
    {
      id: 'bon-coup',
      name: 'Right Move',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description:
        'One precise move — the right piece, the right angle — for immediate impact.',
      category: 'photographie',
      alt: 'Right Move — one precise gesture in space photography',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'Level up: more ambition in the space, the same emotional standard.',
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
    title: 'Work — Najesty | Interior design projects in Canada',
    description:
      'Explore Najesty projects: interior design, decoration, home staging, photography and styling in Canada.',
    sectorsTitle: 'Work · Sectors — Najesty',
    sectorsDescription:
      'Najesty projects by sector: residential, go-to-market, hospitality and signatures.',
    heroMarquee: ['Your space', 'You feel', "Let's talk"],
    heroLead:
      'Interiors you feel before you describe them — remote design across Canada, on-site styling when the place must truly come alive.',
    heroCta: 'Free 15-min orientation',
    heroCtaHref: '/en/contact',
  },
  marqueeWords: [
    'A home that breathes',
    'Livable · productive · calm',
    'Within your budget',
    'Expertise & real emotion',
    'Free 15-min orientation',
    'Let’s talk about your space',
    'Design in Canada',
    'Remote across Europe & Africa',
    'Decorate right, not excess',
    'From feeling to styling',
  ],
  contact: {
    title: 'Let’s talk about your space',
    body: 'A free 15-minute orientation. We clarify what would make your place more livable, productive and calm — and what fits the budget. Then: inspiration or full support. Canada, Europe or Africa: we start with a conversation.',
    cta: 'Write to Najesty',
  },
  faq: [
    {
      question: 'What is Najesty?',
      answer:
        'Najesty Design & Pictures is a Canadian studio for interior design and decoration. Our philosophy: livable, productive, calm spaces — with expertise, real emotion, and a project that respects your budget.',
    },
    {
      question: 'Does Najesty work remotely?',
      answer:
        'Yes. Design, moodboards and sourcing happen remotely across Canada, and with clients in Europe and Africa. Styling and installation happen on site in Canada — always with a clear image at every step.',
    },
    {
      question: 'What services does Najesty offer?',
      answer:
        'Interior design, decoration, home staging, photography, sourcing and installation — for a place that is beautiful, useful and calm, without going over budget.',
    },
    {
      question: 'Remote design or on-site: which should I choose?',
      answer:
        'Remote design fits if you want plans, moodboards and shopping lists without travel. On-site styling in Canada adds installation and photography in the room. Many projects combine both.',
    },
    {
      question: 'Is the site available in French?',
      answer:
        'Yes. Najesty publishes in French (Canada) and English. Use the language switcher in the header to move between versions.',
    },
  ],
  form: {
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    phonePlaceholder: 'Your phone',
    messagePlaceholder: 'Describe your space, your project, or what you would like to change',
    submit: 'Send my message',
    sending: 'Sending…',
    ok: 'Message received. We will reply shortly.',
    error: 'Sending failed for now. Email us at bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: 'Vision — Najesty | Emotion at the heart of space',
      description:
        'Najesty’s vision: livable, productive, calm interiors — expertise, emotion and decoration within your budget. In Canada, and remotely in Europe and Africa.',
    },
    atelier: {
      title: 'Studio — Najesty | Interior design in Canada',
      description:
        'Najesty is a studio for interior design and decoration. Livable, productive, calm spaces — expertise and emotion, within your budget.',
    },
    contact: {
      title: 'Contact — Najesty | Let’s talk about your space',
      description:
        'Contact Najesty for a free 15-minute orientation. Make your space livable, productive and calm — in Canada, and remotely in Europe and Africa.',
    },
    legal: {
      title: 'Legal notice — Najesty',
      h1: 'Legal notice',
      p1: 'Najesty Design & Pictures — Canada. Contact:',
      p2: 'Content on this site (text, images, video) belongs to Najesty Design & Pictures unless otherwise stated. Unauthorized reproduction is prohibited.',
      back: '← Back to home',
    },
    method: {
      title: 'Method — Remote design vs on-site | Najesty',
      description:
        'Compare remote interior design and on-site styling with Najesty. Canada first; Europe and Africa via remote design.',
      h1: 'Remote design or on-site?',
      lead: 'Two paths to the same result: a livable, productive, calm space. Remote design (Canada, Europe, Africa) and on-site styling in Canada — depending on what you need.',
      remoteTitle: 'Remote design',
      remoteBody:
        'Moodboards, plans, shopping lists and online approvals. Move forward with clarity — and decorate within budget — without travel.',
      localTitle: 'On-site styling (Canada)',
      localBody:
        'Styling, installation and photography in the room. So the calm is truly felt — real light, textures, final gesture.',
      whoTitle: 'Who is it for?',
      whoRemote:
        'Homes and decision-makers in Canada outside the local zone; clients in Europe or Africa who want clear design direction remotely.',
      whoLocal:
        'Projects where presence matters: home staging, shoots, final installation in Canada.',
      stepsTitle: 'How it works',
      steps: [
        {
          title: '1. Orientation (15 min)',
          body: 'We clarify uses, budget and what would make the place calmer — no commitment.',
        },
        {
          title: '2. Design',
          body: 'Emotional direction, plans, sourcing. Expertise and emotion, with a clear image at every milestone.',
        },
        {
          title: '3. On-site (if local)',
          body: 'In Canada: styling, installation, photography — the place becomes truly livable.',
        },
      ],
      ctaTitle: 'Not sure which format?',
      ctaBody:
        'Write to us. In one orientation we will say whether remote, on-site, or both fits.',
      cta: 'Request an orientation',
    },
    blog: {
      title: 'Blog — Najesty | Interior design & decoration',
      description:
        'Najesty guides for Canadian homes, sellers, hospitality, and clients in Europe and Africa: remote design, decoration, home staging, sourcing.',
      eyebrow: 'Najesty Blog',
      h1: 'Design you can read — and feel',
      lead: '25 articles for our audiences: Canadian homes, new owners, sellers, hospitality, and remote Europe & Africa projects.',
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
