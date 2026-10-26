import type { SiteContent } from './types';

export const fr: SiteContent = {
  locale: 'fr',
  htmlLang: 'fr-CA',
  ogLocale: 'fr_CA',
  meta: {
    homeTitle: 'Design d’intérieur à distance au Canada | Najesty',
    homeDescription:
      'Design d’intérieur, décoration et home staging dans votre budget. À distance au Canada, en Europe et en Afrique, sur place au Canada. Appel gratuit de 15 min, sans engagement.',
  },
  nav: [
    { label: 'Projets', href: '/work' },
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
    scrollVision: 'Défiler vers la suite',
    langSwitchLabel: 'English',
    prev: 'Précédent',
    next: 'Suivant',
    discover: 'Autres projets',
    allProjects: 'Tous les projets →',
    thePlace: 'Le projet',
    expertises: 'Services',
    talkCta: 'Réserver mon appel gratuit →',
    projectBody:
      'Comme chaque projet Najesty, {name} part de vos usages au quotidien : un plan clair, des achats ciblés, puis un espace beau, pratique et apaisant — dans le budget.',
  },
  heroSeoH1: 'Najesty — Design d’intérieur et décoration au Canada et à distance',
  ctas: {
    primary: 'Réserver mon appel gratuit',
    primaryHref: '/contact',
    secondary: 'Voir les projets',
    secondaryHref: '/work',
    atelierDiscover: 'Qui est Najesty',
    atelierHref: '/atelier',
    methodDiscover: 'À distance ou sur place ?',
    methodHref: '/methode',
    bandTitle: 'Envie d’un espace qui vous ressemble ?',
    bandBody:
      'Appel gratuit de 15 min, sans engagement : votre espace, votre budget, le bon format.',
    sectionEnd: 'Réserver mon appel gratuit',
  },
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Najesty',
      caption:
        'Design d’intérieur et décoration dans votre budget — à distance au Canada, en Europe et en Afrique.',
      href: '/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'Un intérieur inspiré du voyage : l’ambiance d’ailleurs, chez vous.',
      href: '/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: "Brise d'été",
      caption: 'Une décoration légère et lumineuse : on allège la pièce pour qu’elle respire.',
      href: '/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Longue Vie',
      caption: 'Des meubles et des matières choisis pour durer, et pour vous plaire longtemps.',
      href: '/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'Gens du pays',
      caption: 'Une décoration ancrée au Canada, chaleureuse et sans cliché.',
      href: '/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Tout redémarre',
      caption: 'Nouveau chez-vous ? On vous aide à bien démarrer. Appel gratuit.',
      href: '/contact',
    },
  ],
  manifesto: {
    lines: [
      { text: 'On conçoit et on décore' },
      { text: 'votre intérieur : beau,' },
      { text: 'pratique et apaisant —' },
      { text: 'dans votre budget.' },
      { text: 'Au Canada, et à distance' },
      { text: 'en Europe et en Afrique.' },
      { text: 'Pour commencer,', accent: 'arrow' },
      { text: 'un appel gratuit de 15 min,' },
      { text: 'sans engagement.' },
      { text: 'Parlons-en.' },
    ],
    cta: 'Voir les projets',
    ctaHref: '/work',
    secondaryCta: 'Réserver mon appel gratuit',
    secondaryCtaHref: '/contact',
  },
  atelier: {
    title: 'Nos services',
    body: 'Design d’intérieur, décoration, home staging, photo : on vous aide à créer un intérieur beau, pratique et apaisant — dans votre budget, à distance ou sur place.',
    services: [
      { label: "Design d'intérieur", href: '/services/design-interieur' },
      { label: 'Décoration', href: '/services/decoration' },
      { label: 'Home staging', href: '/services/home-staging' },
      { label: 'Photographie', href: '/services/photographie' },
      { label: 'Sourcing et magasinage', href: '/services/sourcing-et-magasinage' },
      { label: 'Mise en place et stylisme', href: '/services/mise-en-place-et-stylisme' },
    ],
    partnersLabel: 'On magasine pour vous chez',
    partners: [
      { name: 'IKEA', logo: '/images/partners/ikea.svg', href: 'https://www.ikea.com/ca/fr/' },
      {
        name: 'Structube',
        logo: '/images/partners/structube.svg',
        href: 'https://www.structube.com/fr_ca/',
      },
      { name: 'EQ3', logo: '/images/partners/eq3.svg', href: 'https://www.eq3.com/ca/fr' },
      { name: 'Wayfair', logo: '/images/partners/wayfair.svg', href: 'https://www.wayfair.ca/' },
      {
        name: 'Bouclair',
        logo: '/images/partners/bouclair.svg',
        href: 'https://www.bouclair.com/',
      },
      {
        name: 'Article',
        logo: '/images/partners/article.svg',
        href: 'https://www.article.com/ca/fr/',
      },
      {
        name: 'HomeSense',
        logo: '/images/partners/homesense.svg',
        href: 'https://www.homesense.ca/fr/',
      },
    ],
  },
  servicePages: [
    {
      id: 'interieur',
      slug: 'design-interieur',
      title: "Design d'intérieur",
      metaTitle: 'Design d’intérieur à distance au Canada | Najesty',
      metaDescription:
        'Design d’intérieur dans votre budget : plans, moodboards et liste d’achats. À distance au Canada, en Europe et en Afrique.',
      intro:
        'Vous ne savez pas par où commencer ? On pose un plan clair avant le moindre achat.',
      body: 'Pour un intérieur qui fonctionne vraiment au quotidien. Vous recevez plans, moodboards et liste d’achats : circulation, lumière, matières — tout est décidé avant de dépenser.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/03-somewhere-else.jpg',
      imageAlt: "Projet de design d'intérieur Najesty",
    },
    {
      id: 'decoration',
      slug: 'decoration',
      title: 'Décoration',
      metaTitle: 'Décoration d’intérieur dans votre budget | Najesty',
      metaDescription:
        'Décoration d’intérieur : couleurs, textures, mobilier et objets choisis pour vous, dans votre budget.',
      intro: 'Votre pièce manque de caractère ? On lui donne une identité.',
      body: 'Couleurs, textures, mobilier et objets : on décore à partir de ce que vous avez déjà — sans tout racheter, sans improviser.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/05-brise.jpg',
      imageAlt: 'Décoration intérieure par Najesty',
    },
    {
      id: 'home-staging',
      slug: 'home-staging',
      title: 'Home staging',
      metaTitle: 'Home staging au Canada | Najesty',
      metaDescription:
        'Home staging pour vendre votre propriété : désencombrement, lumière, stylisme et photos claires.',
      intro: 'Vous vendez ? On prépare le lieu pour qu’il plaise dès la visite.',
      body: 'Désencombrement, lumière, stylisme ciblé : on met votre propriété en valeur pour la mise en marché, avec des images claires pour l’annonce.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/07-seconde-vie.jpg',
      imageAlt: 'Home staging réalisé par Najesty',
    },
    {
      id: 'photographie',
      slug: 'photographie',
      title: 'Photographie',
      metaTitle: 'Photographie d’intérieur | Najesty',
      metaDescription:
        'Photographie d’intérieur pour votre annonce, votre site web ou votre marque : l’espace sous son meilleur jour.',
      intro: 'Des photos qui donnent envie d’entrer.',
      body: 'Lumière, cadrage, détails : des photos d’intérieur prêtes à utiliser — pour vendre, publier sur le web ou garder une trace de votre projet.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/09-bon-coup.jpg',
      imageAlt: 'Photographie d’intérieur Najesty',
    },
    {
      id: 'sourcing',
      slug: 'sourcing-et-magasinage',
      title: 'Sourcing et magasinage',
      metaTitle: 'Sourcing et magasinage déco | Najesty',
      metaDescription:
        'On magasine pour vous : liste d’achats, alternatives et choix ciblés, dans votre budget.',
      intro: 'Pas le temps de magasiner ? On trouve pour vous.',
      body: 'Liste d’achats, alternatives, magasinage ciblé en boutique et en ligne : on choisit ce qui colle au projet et au budget, sans achat inutile.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/02-longue-vie.jpg',
      imageAlt: 'Sourcing décoration Najesty',
    },
    {
      id: 'mise-en-place',
      slug: 'mise-en-place-et-stylisme',
      title: 'Mise en place et stylisme',
      metaTitle: 'Mise en place et stylisme au Canada | Najesty',
      metaDescription:
        'Installation et stylisme sur place au Canada : on installe, on ajuste, on finalise votre espace.',
      intro: 'Du plan à la réalité : on installe tout.',
      body: 'Sur place au Canada : installation, stylisme, dernières retouches. À distance : des consignes claires pour que le résultat reste fidèle au projet.',
      projectsLabel: 'Projets associés',
      ctaLabel: 'Réserver mon appel gratuit',
      image: '/images/work/04-night.jpg',
      imageAlt: 'Mise en place et stylisme Najesty',
    },
  ],
  atelierPage: {
    marquee: "L'ATELIER",
    intro:
      'Un atelier de design d’intérieur et de décoration : on rend votre espace beau, pratique et apaisant',
    body1:
      'Pour les foyers, les vendeurs et les lieux d’accueil. On part de votre façon de vivre : aménagement, ambiance, matières, magasinage — pour un lieu où vous vous sentez vraiment chez vous.',
    body2:
      'Du premier plan à l’installation, on s’occupe de tout — un résultat beau et réaliste, dans votre budget.',
    welcome: {
      title: "Bienvenue à l'atelier",
      role: 'Fondatrice — Design & Pictures',
      body: 'Najesty est né d’une conviction : un espace se ressent avant de se décrire. Notre travail : le rendre beau, pratique et apaisant, dans votre budget. Au Canada : design à distance et installation sur place. En Europe et en Afrique : design et magasinage à distance.',
    },
    pillars: [
      {
        title: 'Pratique & apaisant',
        body: 'Un lieu pensé pour votre quotidien : calme pour vous reposer, clair pour bien travailler.',
      },
      {
        title: 'Dans votre budget',
        body: 'On décore juste, pas trop. Des choix réalistes et un budget clair dès le départ — sans tout casser ni tout racheter.',
      },
      {
        title: 'Clair à chaque étape',
        body: 'Le savoir-faire du design et du stylisme, avec des visuels concrets à chaque étape pour décider en toute confiance.',
      },
    ],
    welcomeImageAlt: 'Najet, fondatrice de Najesty — portrait au reflet',
  },
  visionPage: {
    wordmark: 'CŒUR',
    ticker: 'Des intérieurs beaux, dans votre budget',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['NOTRE', 'APPROCHE'],
    founder: {
      name: 'Najet',
      caption: 'Najet — fondatrice',
      carouselLabel: 'Portraits de Najet, fondatrice de Najesty',
      slides: [
        {
          src: '/images/founder/eliahna-01-reflet.png',
          alt: 'Najet, fondatrice de Najesty — portrait au reflet',
        },
        {
          src: '/images/founder/eliahna-02-neige.png',
          alt: 'Najet dans un paysage enneigé au Canada',
        },
        {
          src: '/images/founder/eliahna-03-route.png',
          alt: 'Najet au volant — portrait en noir et blanc',
        },
        {
          src: '/images/founder/eliahna-04-venise.png',
          alt: 'Najet souriante devant les gondoles à Venise',
        },
      ],
    },
    blocks: [
      {
        title: 'Vos usages',
        body: 'On commence par comprendre comment vous vivez : se reposer, travailler, recevoir. Puis on fixe une direction claire, avant le moindre achat.',
      },
      {
        title: 'Votre style',
        body: 'Plus qu’un beau décor : un lieu qui vous ressemble. Des choix qui vous font du bien au quotidien, et que vous aimerez longtemps.',
      },
      {
        title: 'Un plan clair',
        body: 'Plans, matières, stylisme : on transforme vos envies en espace réel — dans votre budget, sans improvisation.',
      },
    ],
    quote: {
      text: 'Le cœur fait tout, le reste est inutile.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Questions fréquentes',
  },
  contactPage: {
    headline: 'Un projet ? Écrivez-nous :',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    regionLabel: 'Région',
    formTitle: 'Appel gratuit 15 min',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Nos signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'Nos projets de design d’intérieur et de décoration : des espaces beaux et pratiques, dans le budget.',
      alt: 'Projets signatures Najesty — design d’intérieur et décoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Ordre & douceur',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Un rangement doux et ordonné : des volumes qui apaisent le quotidien.',
      category: 'decoration',
      alt: 'Ordre & douceur — illustration CEB bibliothèque',
    },
    {
      id: 'chaque-chose',
      name: 'Chaque chose a sa place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Un rangement bien pensé : chaque objet trouve son tiroir et sa place.',
      category: 'mise-en-place',
      alt: 'Chaque chose a sa place — illustration CEB placard',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Ranger pour mieux vivre',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Désencombrer pour alléger le quotidien — plus clair, plus simple.',
      category: 'home-staging',
      alt: 'Ranger pour mieux vivre — illustration CEB commode',
    },
    {
      id: 'longue-vie',
      name: 'Longue Vie',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Des meubles et des matières choisis pour durer — et vous plaire longtemps.',
      category: 'decoration',
      alt: 'Longue Vie — meubles et matières durables',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description:
        'Un intérieur inspiré du voyage — l’évasion, sans quitter la maison.',
      category: 'interieur',
      alt: 'Somewhere Else — intérieur inspiré du voyage',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Mise en place d’une soirée : lumière, textures et ambiance pour un moment marquant.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — mise en place et éclairage d’ambiance',
    },
    {
      id: 'brise',
      name: "Brise d'été",
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description:
        'Une décoration légère et aérée — des pièces fraîches et lumineuses.',
      category: 'decoration',
      alt: "Brise d'été — décoration légère et aérée",
    },
    {
      id: 'echos',
      name: 'Échos du passé',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Redonner vie à de vieux meubles et à des pièces de famille dans un décor actuel.',
      category: 'interieur',
      alt: 'Échos du passé — vieux meubles et patrimoine réutilisés',
    },
    {
      id: 'seconde-vie',
      name: 'Seconde Vie',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'Rafraîchir sans tout casser : nouvel aménagement, nouvelle ambiance, même pièce.',
      category: 'home-staging',
      alt: 'Seconde Vie — rénovation douce et nouvelle lecture d’espace',
    },
    {
      id: 'gens',
      name: 'Gens du pays',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Une décoration ancrée au Canada et au Québec — chaleureuse, sans cliché.',
      category: 'decoration',
      alt: 'Gens du pays — décoration ancrée au Canada',
    },
    {
      id: 'bon-coup',
      name: 'Bon Coup',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description:
        'Un seul bon choix — le bon meuble, le bon angle — et la pièce change.',
      category: 'photographie',
      alt: 'Bon Coup — un geste juste en photographie d’espace',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'Un projet plus ambitieux : tout l’espace repensé, avec le même soin.',
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
          alt: 'Échos du passé — vieux meubles réutilisés',
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
    { id: 'expertises', label: 'Services', href: '/work' },
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
          alt: 'Échos du passé — vieux meubles en résidentiel',
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
    title: 'Projets de design d’intérieur et décoration | Najesty',
    description:
      'Voyez nos projets : design d’intérieur, décoration, home staging, photographie et mise en place, au Canada et à distance.',
    sectorsTitle: 'Projets par secteur | Najesty',
    sectorsDescription:
      'Projets Najesty par secteur : résidentiel, mise en marché, hospitalité et signatures.',
    heroMarquee: ['Nos projets', 'Votre espace', 'Parlons-en'],
    heroLead:
      'Des intérieurs beaux et pratiques, dans le budget — design à distance partout au Canada, en Europe et en Afrique, mise en place sur place au Canada.',
    heroCta: 'Réserver mon appel gratuit',
    heroCtaHref: '/contact',
  },
  marqueeWords: [
    'Design d’intérieur',
    'Décoration · home staging',
    'Dans votre budget',
    'Photo · sourcing · stylisme',
    'Appel gratuit de 15 min',
    'Sans engagement',
    'À distance au Canada',
    'Aussi en Europe & Afrique',
    'Sur place au Canada',
    'Du plan à l’installation',
  ],
  contact: {
    title: 'Parlons de votre espace',
    body: 'Appel gratuit de 15 minutes, sans engagement. On voit ensemble ce que vous voulez changer, ce qui tient dans votre budget, et le format qui vous convient : conseils à distance ou accompagnement complet. Canada, Europe ou Afrique.',
    cta: 'Réserver mon appel gratuit',
  },
  faq: [
    {
      question: 'Qu’est-ce que Najesty ?',
      answer:
        'Najesty Design & Pictures est un atelier canadien de design d’intérieur et de décoration. On s’occupe aussi de home staging, de photographie, de magasinage et d’installation — pour un espace beau, pratique et apaisant, dans votre budget.',
    },
    {
      question: 'Combien coûte un projet ?',
      answer:
        'Le prix dépend de la taille de l’espace et de l’aide dont vous avez besoin. On en parle lors de l’appel gratuit de 15 minutes, puis on vous propose une offre adaptée à votre budget — sans engagement.',
    },
    {
      question: 'Travaillez-vous à distance ?',
      answer:
        'Oui. Design, moodboards et magasinage se font à distance partout au Canada, en Europe et en Afrique. L’installation et le stylisme se font sur place, au Canada.',
    },
    {
      question: 'À distance ou sur place : que choisir ?',
      answer:
        'À distance, vous recevez plans, moodboards et liste d’achats, sans déplacement. Sur place au Canada, on ajoute l’installation, le stylisme et les photos dans votre espace. Les deux se combinent souvent.',
    },
    {
      question: 'Qu’est-ce que je reçois concrètement ?',
      answer:
        'Selon le projet : plans, moodboards, liste d’achats, magasinage, installation sur place et photos. On vous le précise lors de l’appel gratuit.',
    },
  ],
  form: {
    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'Votre courriel',
    phonePlaceholder: 'Votre téléphone',
    messagePlaceholder:
      'Décrivez votre espace, ce que vous aimeriez changer et votre budget',
    submit: 'Réserver mon appel gratuit',
    sending: 'Envoi en cours…',
    ok: 'Message reçu. On vous répond sous peu pour fixer l’appel.',
    error: 'Envoi impossible pour le moment. Écrivez-nous à bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: 'Notre approche — Najesty | Design d’intérieur dans votre budget',
      description:
        'Comment Najesty travaille : vos usages d’abord, un plan clair, puis une décoration dans votre budget. Au Canada, et à distance en Europe et en Afrique.',
    },
    atelier: {
      title: 'À propos — Najesty | Atelier de design d’intérieur au Canada',
      description:
        'Najesty est un atelier canadien de design d’intérieur et de décoration fondé par Najet. Des espaces beaux et pratiques, dans votre budget.',
    },
    contact: {
      title: 'Appel gratuit de 15 min — Contact | Najesty',
      description:
        'Réservez un appel gratuit de 15 minutes, sans engagement, pour parler de votre espace et de votre budget. Au Canada, et à distance en Europe et en Afrique.',
    },
    legal: {
      title: 'Mentions légales — Najesty',
      h1: 'Mentions légales',
      p1: 'Najesty Design & Pictures — Canada. Contact :',
      p2: 'Les contenus (textes, images, vidéos) présents sur ce site sont la propriété de Najesty Design & Pictures, sauf mention contraire. Toute reproduction non autorisée est interdite.',
      back: '← Retour à l’accueil',
    },
    method: {
      title: 'Design d’intérieur à distance ou sur place | Najesty',
      description:
        'Comment ça marche : design d’intérieur à distance (Canada, Europe, Afrique) ou installation sur place au Canada. Appel gratuit de 15 min.',
      h1: 'Design à distance ou sur place ?',
      lead: 'Deux façons d’arriver au même résultat : un espace beau, pratique et apaisant. Design à distance (Canada, Europe, Afrique) ou installation sur place au Canada — selon vos besoins.',
      remoteTitle: 'Design à distance',
      remoteBody:
        'Vous recevez moodboards, plans et liste d’achats, et vous validez en ligne. Simple, clair, dans le budget — sans déplacement.',
      localTitle: 'Mise en place sur place (Canada)',
      localBody:
        'On vient chez vous : installation, stylisme et photos. Pour un résultat fini, ajusté à la vraie lumière de la pièce.',
      whoTitle: 'Pour qui ?',
      whoRemote:
        'Foyers et entreprises partout au Canada, hors de notre zone locale ; clients en Europe ou en Afrique qui veulent un plan clair à distance.',
      whoLocal:
        'Projets où la présence compte : home staging, séance photo, installation finale au Canada.',
      stepsTitle: 'Comment ça se passe',
      steps: [
        {
          title: '1. Appel gratuit (15 min)',
          body: 'On parle de votre espace, de vos besoins et de votre budget — sans engagement.',
        },
        {
          title: '2. Conception',
          body: 'Plans, moodboards, liste d’achats et magasinage. Vous voyez le résultat avant d’acheter.',
        },
        {
          title: '3. Installation (au Canada)',
          body: 'Sur place au Canada : installation, stylisme, photos — votre espace est prêt à vivre.',
        },
      ],
      ctaTitle: 'Pas sûr du format ?',
      ctaBody:
        'En 15 minutes d’appel gratuit, on vous dit si la formule à distance, sur place ou les deux vous convient.',
      cta: 'Réserver mon appel gratuit',
    },
    blog: {
      title: 'Blogue — Najesty | Design d’intérieur & décoration',
      description:
        'Conseils pratiques de Najesty pour foyers au Canada, vendeurs, hospitalité, Europe et Afrique : design à distance, décoration, home staging, sourcing.',
      eyebrow: 'Blogue Najesty',
      h1: 'Conseils de design d’intérieur et de déco',
      lead: '25 articles pratiques pour foyers canadiens, nouveaux propriétaires, vendeurs, hospitalité, et projets à distance en Europe et en Afrique.',
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
