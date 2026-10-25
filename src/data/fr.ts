import type { SiteContent } from './types';

export const fr: SiteContent = {
  locale: 'fr',
  htmlLang: 'fr-CA',
  ogLocale: 'fr_CA',
  meta: {
    homeTitle: 'Najesty — Design d’intérieur & décoration au Canada',
    homeDescription:
      'Najesty rend les intérieurs vivables, productifs et zen — avec expertise, beaucoup d’émotion, et une décoration qui respecte votre budget. Au Canada, et à distance en Europe et en Afrique.',
  },
  nav: [
    { label: 'Work', href: '/work' },
    { label: 'Vision', href: '/vision' },
    { label: "L'Atelier", href: '/atelier' },
    { label: 'Méthode', href: '/methode' },
    { label: 'Blogue', href: '/blogue' },
    { label: 'Contact', href: '/contact' },
  ],
  ui: {
    navLabel: 'Navigation principale',
    openMenu: 'Ouvrir le menu',
    closeMenu: 'Fermer le menu',
    followUs: 'Nous suivre',
    menu: 'Menu',
    writeLabel: 'Écrire',
    legalLink: 'Mentions légales',
    legalHref: '/mentions-legales',
    see: 'Voir',
    filtersLabel: 'Filtres',
    scrollVision: 'Défiler vers la vision',
    langSwitchLabel: 'English',
    prev: 'Précédent',
    next: 'Suivant',
    discover: 'À découvrir',
    allProjects: 'Tous les projets →',
    thePlace: 'Le lieu',
    expertises: 'Expertises',
    talkCta: 'Parler de votre espace →',
    projectBody:
      'Chez Najesty, chaque projet part d’un usage et d’une émotion. {name} transforme le lieu en espace vivable, productif et zen — décoré avec expertise, dans le budget.',
  },
  heroSeoH1: 'Najesty — Design d’intérieur et décoration au Canada',
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Najesty',
      caption:
        'Des espaces vivables, productifs, zen — expertise et beaucoup d’émotion, dans votre budget.',
      href: '/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'Voyager sans quitter la maison : un intérieur qui ouvre d’autres horizons.',
      href: '/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: "Brise d'été",
      caption: 'Alléger la pièce jusqu’à ce que l’air circule — lumière, texture, respiration.',
      href: '/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Longue Vie',
      caption: 'Choisir aujourd’hui ce que vous aurez encore envie de garder demain.',
      href: '/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'Gens du pays',
      caption: 'Ancrer le Canada dans le décor — avec présence, sans folklore.',
      href: '/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Tout redémarre',
      caption: 'Un nouvel espace pour le chapitre que vous écrivez maintenant.',
      href: '/contact',
    },
  ],
  manifesto: {
    lines: [
      { text: "L'émotion au cœur de l'espace." },
      { text: 'De l’identité. Du design.' },
      { text: 'Chez Najesty, c’est la' },
      { text: 'conjugaison de tous les' },
      { text: 'marqueurs qui fait battre le' },
      { text: 'cœur du lieu.' },
      { text: "Faire de l'expérience", accent: 'arrow' },
      { text: 'une marque de fabrique —' },
      { text: 'et laisser beaucoup' },
      { text: "d'émotion." },
    ],
    cta: 'Voir les projets',
    ctaHref: '/work',
  },
  atelier: {
    title: "L'Atelier",
    body: 'Avant le décor, le ressenti : un intérieur vivable, productif, zen. Najesty y met l’expertise et beaucoup d’émotion — pour décorer juste, dans votre budget.',
    services: [
      "Design d'intérieur",
      'Décoration',
      'Home staging',
      'Photographie',
      'Sourcing et magasinage',
      'Mise en place et stylisme',
    ],
    partnersLabel: 'Partenaires sourcing',
    partners: [
      { name: 'IKEA', logo: '/images/partners/ikea.svg' },
      { name: 'Structube', logo: '/images/partners/structube.svg' },
      { name: 'EQ3', logo: '/images/partners/eq3.svg' },
      { name: 'Wayfair', logo: '/images/partners/wayfair.svg' },
      { name: 'Bouclair', logo: '/images/partners/bouclair.svg' },
      { name: 'Article', logo: '/images/partners/article.svg' },
      { name: 'HomeSense', logo: '/images/partners/homesense.svg' },
    ],
  },
  atelierPage: {
    marquee: "L'ATELIER",
    intro:
      'Un atelier de design d’intérieur et de décoration : rendre les espaces vivables, productifs et zen',
    body1:
      'Nous concevons des intérieurs où l’on respire, où l’on travaille mieux, où l’on se sent vraiment chez soi. Ambiance, parcours, matières, sourcing : tout part de vos usages — et de l’émotion du lieu.',
    body2:
      'Expertise et émotion, ensemble. De la direction à la mise en place, on décore avec métier — beau, réaliste, dans votre budget.',
    welcome: {
      title: "Bienvenue à l'atelier",
      role: 'Fondatrice — Design & Pictures',
      body: 'Najesty naît d’une conviction : un espace se sent avant de se décrire. On le rend vivable, productif et zen — avec expertise, beaucoup d’émotion, et un projet qui tient dans le budget. Au Canada : design à distance et mise en scène sur place. En Europe et en Afrique : design et sourcing à distance.',
    },
    pillars: [
      {
        title: 'Vivable & productif',
        body: 'Un lieu pensé pour votre rythme : calme pour souffler, clair pour avancer — zen sans être vide.',
      },
      {
        title: 'Dans votre budget',
        body: 'Décorer juste, pas trop. Sourcing réaliste, choix lucides, forfaits lisibles — le beau sans tout casser ni tout racheter.',
      },
      {
        title: 'Expertise & émotion',
        body: 'Le métier du design et du stylisme, et le ressenti au centre — avec une image claire à chaque étape pour avancer sereinement.',
      },
    ],
    welcomeImageAlt: 'Salon résidentiel conçu par Najesty — lumière naturelle et matières sobres',
  },
  visionPage: {
    wordmark: 'CŒUR',
    ticker: 'Le cœur de notre expertise est l’espace',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['LA MARQUE', 'AU CŒUR'],
    blocks: [
      {
        title: 'Des stratégies',
        body: 'On lit vos usages pour que l’espace serve vraiment : vivre, produire, se ressourcer. Une direction claire — vivable, productive, zen — avant le moindre achat.',
      },
      {
        title: "De l'identité",
        body: 'Plus qu’un beau décor : l’identité du lieu. Ce qui fait que vous vous y sentez bien — et que l’émotion reste, au quotidien.',
      },
      {
        title: 'Du design',
        body: 'Plans, matières, stylisme : l’expertise pour transformer le ressenti en espace réel — dans votre budget, sans improvisation.',
      },
    ],
    quote: {
      text: 'Le cœur fait tout, le reste est inutile.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Questions fréquentes',
  },
  contactPage: {
    headline: 'Mettons votre espace au cœur :',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Adresse',
    regionLabel: 'Région',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Nos signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'Les projets qui incarnent Najesty : vivable, productif, zen — expertise et émotion, dans le budget.',
      alt: 'Projets signatures Najesty — design d’intérieur et décoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Ordre & douceur',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Signature CEB : ranger sans rigidité — un ordre qui respire, des volumes qui apaisent.',
      category: 'decoration',
      alt: 'Ordre & douceur — illustration CEB bibliothèque',
    },
    {
      id: 'chaque-chose',
      name: 'Chaque chose a sa place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Signature CEB : l’évidence du rangement juste — chaque objet trouve son geste et son lieu.',
      category: 'mise-en-place',
      alt: 'Chaque chose a sa place — illustration CEB placard',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Ranger pour mieux vivre',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Signature CEB : l’art de bien ranger comme levier de quotidien — plus clair, plus léger.',
      category: 'home-staging',
      alt: 'Ranger pour mieux vivre — illustration CEB commode',
    },
    {
      id: 'longue-vie',
      name: 'Longue Vie',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Meubles, matières, gestes : ce que vous choisissez aujourd’hui, vous voudrez encore le garder demain.',
      category: 'decoration',
      alt: 'Longue Vie — décoration durable et matières choisies',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description: 'Un intérieur qui voyage sans quitter la maison — ailleurs, chez vous.',
      category: 'interieur',
      alt: 'Somewhere Else — intérieur inspiré du voyage',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Scénographier la nuit : lumière, texture et présence pour un moment qui reste.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — mise en place et éclairage d’ambiance',
    },
    {
      id: 'brise',
      name: "Brise d'été",
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description: 'Cette sensation de fraîcheur quand tout paraît plus léger.',
      category: 'decoration',
      alt: "Brise d'été — décoration légère et aérée",
    },
    {
      id: 'echos',
      name: 'Échos du passé',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Faire dialoguer l’existant et le nouveau sans écraser l’histoire du lieu.',
      category: 'interieur',
      alt: 'Échos du passé — design d’intérieur patrimoine et contemporain',
    },
    {
      id: 'seconde-vie',
      name: 'Seconde Vie',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'Donner une nouvelle lecture à ce qui était déjà là — objet, pièce, parcours.',
      category: 'home-staging',
      alt: 'Seconde Vie — home staging et reconversion d’espace',
    },
    {
      id: 'gens',
      name: 'Gens du pays',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Faire une place au Canada dans le décor — avec présence, sans folklore.',
      category: 'decoration',
      alt: 'Gens du pays — décoration ancrée au Canada',
    },
    {
      id: 'bon-coup',
      name: 'Bon Coup',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description: 'Un geste juste, au bon endroit — l’impact sans le superflu.',
      category: 'photographie',
      alt: 'Bon Coup — photographie d’espace Najesty',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'Passer à l’échelle suivante : plus d’ambition, même exigence émotionnelle.',
      category: 'interieur',
      alt: 'Next Level — design d’intérieur ambitieux',
    },
  ],
  workCategories: [
    {
      id: 'interieur',
      title: "Design d'intérieur",
      projects: [
        {
          id: 'somewhere-else',
          name: 'Somewhere Else',
          image: '/images/work/03-somewhere-else.jpg',
          alt: 'Somewhere Else — intérieur inspiré du voyage',
        },
        {
          id: 'echos',
          name: 'Échos du passé',
          image: '/images/work/06-echos.jpg',
          alt: 'Échos du passé — design d’intérieur',
        },
        {
          id: 'next-level',
          name: 'Next Level',
          image: '/images/work/10-next-level.jpg',
          alt: 'Next Level — design d’intérieur',
        },
      ],
    },
    {
      id: 'decoration',
      title: 'Décoration',
      projects: [
        {
          id: 'ordre-douceur',
          name: 'Ordre & douceur',
          image: '/images/ceb/01-ordre-douceur.jpg?v=4',
          alt: 'Ordre & douceur — décoration CEB',
        },
        {
          id: 'longue-vie',
          name: 'Longue Vie',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Longue Vie — décoration',
        },
        {
          id: 'brise',
          name: "Brise d'été",
          image: '/images/work/05-brise.jpg',
          alt: "Brise d'été — décoration",
        },
        {
          id: 'gens',
          name: 'Gens du pays',
          image: '/images/work/08-gens.jpg',
          alt: 'Gens du pays — décoration',
        },
      ],
    },
    {
      id: 'home-staging',
      title: 'Home staging',
      projects: [
        {
          id: 'ranger-mieux-vivre',
          name: 'Ranger pour mieux vivre',
          image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
          alt: 'Ranger pour mieux vivre — home staging CEB',
        },
        {
          id: 'seconde-vie',
          name: 'Seconde Vie',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Seconde Vie — home staging',
        },
        {
          id: 'featured',
          name: 'Nos signatures',
          image: '/images/work/01-featured-najesty.jpg',
          alt: 'Signatures Najesty',
        },
        {
          id: 'bon-coup',
          name: 'Bon Coup',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Bon Coup — photographie',
        },
      ],
    },
    {
      id: 'photographie',
      title: 'Photographie',
      projects: [
        {
          id: 'bon-coup',
          name: 'Bon Coup',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Bon Coup — photographie d’espace',
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — photographie',
        },
        {
          id: 'gens',
          name: 'Gens du pays',
          image: '/images/work/08-gens.jpg',
          alt: 'Gens du pays — photographie',
        },
      ],
    },
    {
      id: 'mise-en-place',
      title: 'Mise en place',
      projects: [
        {
          id: 'chaque-chose',
          name: 'Chaque chose a sa place',
          image: '/images/ceb/02-chaque-chose.jpg?v=4',
          alt: 'Chaque chose a sa place — mise en place CEB',
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — mise en place',
        },
        {
          id: 'brise',
          name: "Brise d'été",
          image: '/images/work/05-brise.jpg',
          alt: "Brise d'été — mise en place",
        },
        {
          id: 'longue-vie',
          name: 'Longue Vie',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Longue Vie — mise en place',
        },
      ],
    },
    {
      id: 'sourcing',
      title: 'Sourcing',
      projects: [
        {
          id: 'longue-vie',
          name: 'Longue Vie',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Longue Vie — sourcing',
        },
        {
          id: 'seconde-vie',
          name: 'Seconde Vie',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Seconde Vie — sourcing',
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
    { id: 'expertises', label: 'Expertises', href: '/work' },
    { id: 'secteurs', label: 'Secteurs', href: '/work/secteurs' },
    { id: 'tous', label: 'Tous', href: '/work#work-grid' },
  ],
  workSectors: [
    {
      id: 'residentiel',
      title: 'Résidentiel',
      projects: [
        {
          id: 'somewhere-else',
          name: 'Somewhere Else',
          image: '/images/work/03-somewhere-else.jpg',
          alt: 'Somewhere Else — résidentiel',
        },
        {
          id: 'echos',
          name: 'Échos du passé',
          image: '/images/work/06-echos.jpg',
          alt: 'Échos du passé — résidentiel',
        },
        {
          id: 'longue-vie',
          name: 'Longue Vie',
          image: '/images/work/02-longue-vie.jpg',
          alt: 'Longue Vie — résidentiel',
        },
      ],
    },
    {
      id: 'staging',
      title: 'Mise en marché',
      projects: [
        {
          id: 'seconde-vie',
          name: 'Seconde Vie',
          image: '/images/work/07-seconde-vie.jpg',
          alt: 'Seconde Vie — mise en marché',
        },
        {
          id: 'bon-coup',
          name: 'Bon Coup',
          image: '/images/work/09-bon-coup.jpg',
          alt: 'Bon Coup — mise en marché',
        },
        {
          id: 'featured',
          name: 'Nos signatures',
          image: '/images/work/01-featured-najesty.jpg',
          alt: 'Signatures — mise en marché',
        },
      ],
    },
    {
      id: 'hospitalite',
      title: 'Hospitalité & lieux de vie',
      projects: [
        {
          id: 'brise',
          name: "Brise d'été",
          image: '/images/work/05-brise.jpg',
          alt: "Brise d'été — hospitalité",
        },
        {
          id: 'night',
          name: 'A Night to Remember',
          image: '/images/work/04-night.jpg',
          alt: 'A Night to Remember — hospitalité',
        },
        {
          id: 'gens',
          name: 'Gens du pays',
          image: '/images/work/08-gens.jpg',
          alt: 'Gens du pays — hospitalité',
        },
      ],
    },
    {
      id: 'signature',
      title: 'Signatures',
      projects: [
        {
          id: 'ordre-douceur',
          name: 'Ordre & douceur',
          image: '/images/ceb/01-ordre-douceur.jpg?v=4',
          alt: 'Ordre & douceur — signature CEB',
        },
        {
          id: 'chaque-chose',
          name: 'Chaque chose a sa place',
          image: '/images/ceb/02-chaque-chose.jpg?v=4',
          alt: 'Chaque chose a sa place — signature CEB',
        },
        {
          id: 'ranger-mieux-vivre',
          name: 'Ranger pour mieux vivre',
          image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
          alt: 'Ranger pour mieux vivre — signature CEB',
        },
      ],
    },
  ],
  workMeta: {
    title: "Work — Najesty | Projets design d'intérieur au Canada",
    description:
      'Découvrez les projets Najesty : design d’intérieur, décoration, home staging, photographie et mise en place au Canada.',
    sectorsTitle: 'Work · Secteurs — Najesty',
    sectorsDescription:
      'Projets Najesty par secteur : résidentiel, mise en marché, hospitalité et signatures.',
  },
  marqueeWords: [
    'Ordre & douceur',
    'Chaque chose a sa place',
    'Ranger pour mieux vivre',
    'Longue Vie',
    'Somewhere Else',
    "Brise d'été",
    'Gens du pays',
    'Seconde Vie',
    'Tout redémarre',
    'Échos du passé',
    'A Night to Remember',
    'Bon Coup',
    'Next Level',
  ],
  contact: {
    title: 'Parlons de votre espace',
    body: 'Orientation offerte de 15 minutes. On clarifie ce qui rendrait votre lieu plus vivable, productif et zen — et ce qui tient dans le budget. Ensuite : inspiration ou accompagnement complet. Canada, Europe ou Afrique : on commence par un échange.',
    cta: 'Écrire à Najesty',
  },
  faq: [
    {
      question: 'Qu’est-ce que Najesty ?',
      answer:
        'Najesty Design & Pictures est un atelier canadien de design d’intérieur et de décoration. Notre philosophie : des espaces vivables, productifs et zen — avec expertise, beaucoup d’émotion, et un projet qui respecte votre budget.',
    },
    {
      question: 'Najesty travaille-t-il à distance ?',
      answer:
        'Oui. Le design, les moodboards et le sourcing se font à distance partout au Canada, ainsi qu’avec des clients en Europe et en Afrique. La mise en place et le stylisme se font en zone locale au Canada — toujours avec une image claire à chaque étape.',
    },
    {
      question: 'Quels services propose Najesty ?',
      answer:
        'Design d’intérieur, décoration, home staging, photographie, sourcing et mise en place — pour un lieu beau, utile et zen, sans dépasser le budget.',
    },
    {
      question: 'Design à distance ou sur place : que choisir ?',
      answer:
        'Le design à distance convient si vous voulez plans, moodboards et listes d’achats sans déplacement. La mise en place sur place au Canada ajoute stylisme, installation et photographie sur le lieu. Les deux se combinent souvent dans un même projet.',
    },
    {
      question: 'Le site est-il disponible en anglais ?',
      answer:
        'Oui. Najesty publie le site en français (Canada) et en anglais. Utilisez le sélecteur de langue dans l’en-tête pour basculer entre les versions.',
    },
  ],
  form: {
    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'Votre courriel',
    messagePlaceholder:
      'Décrivez votre espace, votre projet, ou ce que vous aimeriez changer',
    submit: 'Envoyer mon message',
    sending: 'Envoi en cours…',
    ok: 'Message reçu. On vous répond sous peu.',
    error: 'Envoi impossible pour le moment. Écrivez-nous à bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: "Vision — Najesty | L'émotion au cœur de l'espace",
      description:
        'La vision Najesty : des intérieurs vivables, productifs et zen — expertise, émotion et décoration dans votre budget. Au Canada, et à distance en Europe et en Afrique.',
    },
    atelier: {
      title: "L'Atelier — Najesty | Design d'intérieur au Canada",
      description:
        'Najesty est un atelier de design d’intérieur et de décoration. Espaces vivables, productifs, zen — expertise et émotion, dans votre budget.',
    },
    contact: {
      title: 'Contact — Najesty | Parlons de votre espace',
      description:
        'Contactez Najesty pour une orientation offerte de 15 minutes. Rendre votre espace vivable, productif et zen — au Canada, et à distance en Europe et en Afrique.',
    },
    legal: {
      title: 'Mentions légales — Najesty',
      h1: 'Mentions légales',
      p1: 'Najesty Design & Pictures — Canada. Contact :',
      p2: 'Les contenus (textes, images, vidéos) présents sur ce site sont la propriété de Najesty Design & Pictures, sauf mention contraire. Toute reproduction non autorisée est interdite.',
      back: '← Retour à l’accueil',
    },
    method: {
      title: 'Méthode — Design à distance vs sur place | Najesty',
      description:
        'Comparer le design d’intérieur à distance et la mise en place sur place avec Najesty. Canada d’abord ; Europe et Afrique en remote.',
      h1: 'Design à distance ou sur place ?',
      lead: 'Deux façons d’arriver au même résultat : un espace vivable, productif et zen. Conception à distance (Canada, Europe, Afrique) et mise en place locale au Canada — selon ce dont vous avez besoin.',
      remoteTitle: 'Design à distance',
      remoteBody:
        'Moodboards, plans, listes d’achats et validations en ligne. Pour avancer avec clarté — et décorer dans le budget — sans déplacement.',
      localTitle: 'Mise en place sur place (Canada)',
      localBody:
        'Stylisme, installation et photographie sur le lieu. Pour que le zen se sente vraiment — lumière réelle, textures, dernier geste.',
      whoTitle: 'Pour qui ?',
      whoRemote:
        'Foyers et décideurs au Canada éloignés de la zone locale ; clients en Europe ou en Afrique qui veulent une direction design claire à distance.',
      whoLocal:
        'Projets où la présence physique compte : home staging, shooting, installation finale au Canada.',
      stepsTitle: 'Comment ça se passe',
      steps: [
        {
          title: '1. Orientation (15 min)',
          body: 'On clarifie usages, budget et ce qui rendrait le lieu plus zen — sans engagement.',
        },
        {
          title: '2. Conception',
          body: 'Direction émotionnelle, plans, sourcing. Expertise et émotion, avec une image claire à chaque jalon.',
        },
        {
          title: '3. Mise en place (si locale)',
          body: 'Sur place au Canada : stylisme, installation, photographie — le lieu devient vivable pour de vrai.',
        },
      ],
      ctaTitle: 'Pas sûr du format ?',
      ctaBody:
        'Écrivez-nous. On vous dit en une orientation si le remote, le local, ou les deux conviennent.',
      cta: 'Demander une orientation',
    },
    blog: {
      title: 'Blogue — Najesty | Design d’intérieur & décoration',
      description:
        'Guides Najesty pour foyers au Canada, vendeurs, hospitalité, et clients en Europe et en Afrique : design à distance, décoration, home staging, sourcing.',
      eyebrow: 'Blogue Najesty',
      h1: 'Le design qui se lit — et qui se sent',
      lead: '25 articles pour nos cibles : foyers canadiens, nouveaux propriétaires, vendeurs, hospitalité, et projets remote Europe & Afrique.',
      listLabel: 'Articles du blogue',
      readMore: 'Lire l’article',
      backToBlog: '← Blogue',
      minRead: 'min de lecture',
      faqTitle: 'Questions fréquentes',
      relatedTitle: 'À lire aussi',
      alsoInEn: 'Also available in English →',
      alsoInFr: 'Aussi disponible en français →',
    },
  },
};
