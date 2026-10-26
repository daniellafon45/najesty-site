import type { SiteContent } from './types';

export const fr: SiteContent = {
  locale: 'fr',
  htmlLang: 'fr-CA',
  ogLocale: 'fr_CA',
  meta: {
    homeTitle: 'Design d’intérieur et décoration à distance au Canada | Najesty',
    homeDescription:
      'Design d’intérieur, décoration, home staging et photographie. À distance partout au Canada, en Europe et en Afrique, et sur place au Canada. Appel gratuit de 15 min, sans engagement.',
  },
  nav: [
    { label: 'Services', href: '/atelier' },
    { label: 'Projets', href: '/work' },
    { label: 'Comment ça marche', href: '/methode' },
    { label: 'À propos', href: '/vision' },
    { label: 'Blogue', href: '/blogue' },
    { label: 'Appel gratuit', href: '/contact', cta: true },
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
    scrollVision: 'Voir nos services',
    langSwitchLabel: 'English',
    prev: 'Précédent',
    next: 'Suivant',
    discover: 'Autres projets',
    allProjects: 'Tous les projets →',
    thePlace: 'Notre façon de travailler',
    expertises: 'Services',
    talkCta: 'Réserver mon appel gratuit (15 min) →',
    projectBody:
      'Comme pour chaque projet Najesty, tout part de la façon dont le lieu est utilisé au quotidien. On définit d’abord une direction claire (moodboard, plan, liste d’achats), puis on choisit, achète et installe ce qu’il faut — dans le budget prévu. Vous avez un projet semblable à « {name} » ? Parlons-en lors d’un appel gratuit de 15 minutes.',
  },
  heroSeoH1: 'Design d’intérieur et décoration au Canada — Najesty',
  hero: {
    eyebrow: 'Design d’intérieur & décoration · Canada, Europe, Afrique',
    headline: 'Un intérieur beau, pratique et à votre image — dans votre budget.',
    subline:
      'Najesty conçoit et décore votre espace : design d’intérieur, décoration, home staging et photo. À distance partout au Canada, en Europe et en Afrique — sur place au Canada.',
    reassurance: 'Gratuit · 15 minutes · Sans engagement',
    slideLabel: 'Projet',
  },
  ctas: {
    primary: 'Réserver mon appel gratuit (15 min)',
    primaryHref: '/contact',
    secondary: 'Voir les projets',
    secondaryHref: '/work',
    atelierDiscover: 'Voir tous les services',
    atelierHref: '/atelier',
    methodDiscover: 'Comment ça marche',
    methodHref: '/methode',
    reassurance:
      'Gratuit, 15 minutes, sans engagement. Vous repartez avec des prochaines étapes claires.',
    bandTitle: 'Parlons de votre espace. 15 minutes, c’est gratuit.',
    bandBody:
      'Dites-nous ce que vous voulez changer. On vous explique ce qui est possible avec votre budget, à distance ou sur place. Sans engagement : vous repartez avec des prochaines étapes claires.',
    sectionEnd: 'Réserver mon appel gratuit (15 min)',
  },
  heroSlides: [
    {
      id: 'h0',
      image: '/images/hero/deco-01-salon.jpg',
      video: '/videos/Najesty-Deco-Construction-16x9.mp4',
      title: 'Décoration d’un salon',
      caption: 'Salon décoré par Najesty : mobilier, textiles et objets choisis pour un espace chaleureux.',
      href: '/work',
    },
    {
      id: 'h1',
      image: '/images/work/03-somewhere-else.jpg',
      title: 'Somewhere Else',
      caption: 'Design d’intérieur inspiré du voyage, pour se sentir ailleurs sans quitter la maison.',
      href: '/work#somewhere-else',
    },
    {
      id: 'h2',
      image: '/images/hero/deco-02-cafe.jpg',
      title: "Brise d'été",
      caption: 'Décoration légère et lumineuse : textures naturelles et pièces aérées.',
      href: '/work#brise',
    },
    {
      id: 'h3',
      image: '/images/hero/deco-03-salle-a-manger.jpg',
      title: 'Longue Vie',
      caption: 'Salle à manger avec des meubles et des matières choisis pour durer.',
      href: '/work#longue-vie',
    },
    {
      id: 'h4',
      image: '/images/hero/deco-04-cuisine.jpg',
      title: 'Gens du pays',
      caption: 'Un décor qui met en valeur le Canada et le Québec, sans folklore.',
      href: '/work#gens',
    },
    {
      id: 'h5',
      image: '/images/hero/deco-05-maison.jpg',
      title: 'Tout redémarre',
      caption: 'Une maison préparée pour un nouveau départ.',
      href: '/contact',
    },
  ],
  home: {
    servicesEyebrow: 'Ce que nous faisons pour vous',
    servicesTitle: 'Vous vous reconnaissez ? Voici comment on vous aide.',
    servicesLead:
      'Du premier plan jusqu’à la dernière photo, un seul studio s’occupe de tout. Choisissez un service ou combinez-les.',
    services: [
      {
        situation: 'Votre pièce ne fonctionne pas comme vous le voudriez',
        title: 'Design d’intérieur',
        result:
          'On repense l’aménagement, la circulation et la lumière. Vous recevez un plan clair avant de faire le moindre achat.',
        href: '/services/design-interieur',
      },
      {
        situation: 'Vous venez d’emménager et ne savez pas par où commencer',
        title: 'Décoration',
        result:
          'Couleurs, textures, meubles et objets : un décor cohérent et à votre image, sans tout racheter.',
        href: '/services/decoration',
      },
      {
        situation: 'Vous mettez votre maison ou votre condo en vente',
        title: 'Home staging',
        result:
          'On désencombre, on éclaire et on met en scène pour que votre propriété fasse bonne impression dès les photos de l’annonce.',
        href: '/services/home-staging',
      },
      {
        situation: 'Vous avez besoin de belles photos de votre espace',
        title: 'Photographie d’intérieur',
        result:
          'Des photos soignées de votre intérieur pour une annonce, votre site web ou vos réseaux sociaux.',
        href: '/services/photographie',
      },
      {
        situation: 'Vous n’avez pas le temps de magasiner',
        title: 'Sourcing et magasinage',
        result:
          'On trouve les bons meubles et objets dans votre budget et on vous remet une liste d’achats claire — ou on magasine pour vous.',
        href: '/services/sourcing-et-magasinage',
      },
      {
        situation: 'Tout est acheté, il reste à tout installer',
        title: 'Mise en place et stylisme',
        result:
          'Sur place au Canada : on installe, on place chaque objet et on règle les derniers détails. Il ne vous reste qu’à en profiter.',
        href: '/services/mise-en-place-et-stylisme',
      },
    ],
    servicesLinkLabel: 'En savoir plus',
    stepsEyebrow: 'Comment ça marche',
    stepsTitle: 'Simple, en 4 étapes.',
    steps: [
      {
        title: 'Appel gratuit de 15 minutes',
        body: 'Vous nous parlez de votre espace, de vos besoins et de votre budget. Sans engagement : vous repartez avec des prochaines étapes claires.',
      },
      {
        title: 'Une proposition adaptée à votre budget',
        body: 'On vous propose la formule qui vous convient : à distance, sur place, ou les deux. Vous savez ce qui est inclus avant de dire oui.',
      },
      {
        title: 'Moodboard, plan et liste d’achats',
        body: 'Vous voyez la direction avant de dépenser. On fait le sourcing et le magasinage pour vous, dans le budget prévu.',
      },
      {
        title: 'Installation et photos',
        body: 'Au Canada, on peut tout installer et styliser sur place, puis photographier le résultat. À distance, vous suivez un plan clair, étape par étape.',
      },
    ],
    formats: [
      {
        title: 'À distance',
        where: 'Partout au Canada, en Europe et en Afrique',
        body: 'Moodboards, plans, listes d’achats et sourcing, validés avec vous en ligne. Idéal si vous voulez une direction claire sans déplacement.',
      },
      {
        title: 'Sur place',
        where: 'Au Canada',
        body: 'Installation, stylisme et photographie directement chez vous. Idéal pour un home staging, une séance photo ou la touche finale.',
      },
    ],
    projectsEyebrow: 'Nos réalisations',
    projectsTitle: 'Des espaces transformés, pièce par pièce.',
    projectsLead:
      'Salons, cuisines, salles à manger, rangement, home staging : voyez ce que nous avons fait et imaginez votre espace.',
    founderEyebrow: 'Qui est derrière Najesty',
    founderTitle: 'Eliahna, fondatrice de Najesty',
    founderBody: [
      'Eliahna a fondé Najesty Design & Pictures avec une conviction simple : un espace se vit avant de se décrire. Elle conçoit des intérieurs pratiques, apaisants et à votre image — sans jamais perdre de vue votre budget.',
      'Avec Najesty, elle accompagne des clients à distance partout au Canada, en Europe et en Afrique, et sur place au Canada pour l’installation, le stylisme et la photographie.',
    ],
    founderLink: 'En savoir plus sur Najesty',
    founderImageAlt: 'Eliahna, fondatrice de Najesty Design & Pictures',
    faqEyebrow: 'Vos questions',
    faqTitle: 'Questions fréquentes',
  },
  atelier: {
    title: 'Nos services',
    body: 'Design d’intérieur, décoration, home staging, photographie, sourcing et installation : on s’occupe de votre espace du plan jusqu’à la dernière photo, dans votre budget.',
    services: [
      { label: "Design d'intérieur", href: '/services/design-interieur' },
      { label: 'Décoration', href: '/services/decoration' },
      { label: 'Home staging', href: '/services/home-staging' },
      { label: 'Photographie', href: '/services/photographie' },
      { label: 'Sourcing et magasinage', href: '/services/sourcing-et-magasinage' },
      { label: 'Mise en place et stylisme', href: '/services/mise-en-place-et-stylisme' },
    ],
    partnersLabel: 'Nous magasinons pour vous chez, entre autres :',
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
      metaTitle: 'Design d’intérieur à distance ou sur place au Canada | Najesty',
      metaDescription:
        'Repensez l’aménagement de votre maison avec un plan clair avant d’acheter : circulation, lumière, mobilier. À distance au Canada, en Europe et en Afrique. Appel gratuit de 15 min.',
      intro:
        'Votre pièce ne fonctionne pas comme vous le voudriez ? On repense l’aménagement pour qu’elle soit belle, pratique et agréable à vivre.',
      body: 'On part de votre façon de vivre : qui utilise la pièce, quand, pour quoi faire. Ensuite, on définit l’aménagement, la circulation, la lumière et les matières. Vous recevez une direction claire — moodboard, plan et liste d’achats — avant de dépenser un dollar.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'votre salon, votre cuisine ou votre bureau manque de place ou de logique ;',
        'vous rénovez ou réaménagez et voulez éviter les erreurs coûteuses ;',
        'vous voulez un résultat cohérent dans toute la maison.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'Un moodboard qui montre l’ambiance choisie',
        'Un plan d’aménagement',
        'Une liste d’achats adaptée à votre budget',
        'En option au Canada : installation, stylisme et photos sur place',
      ],
      projectsLabel: 'Projets de design d’intérieur',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/03-somewhere-else.jpg',
      imageAlt: "Projet de design d'intérieur Najesty",
    },
    {
      id: 'decoration',
      slug: 'decoration',
      title: 'Décoration',
      metaTitle: 'Décoration d’intérieur dans votre budget au Canada | Najesty',
      metaDescription:
        'Couleurs, textures, mobilier et objets : un décor à votre image, sans tout racheter. À distance au Canada, en Europe et en Afrique, ou sur place au Canada. Appel gratuit de 15 min.',
      intro:
        'Vous venez d’emménager ou votre décor ne vous ressemble plus ? On crée un intérieur cohérent et chaleureux, sans tout racheter.',
      body: 'Couleurs, textures, mobilier, luminaires et objets : on choisit ce qui va bien ensemble et on garde ce que vous aimez déjà. Le résultat : un décor à votre image, qui tient dans votre budget.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'vous venez d’emménager et ne savez pas par où commencer ;',
        'vous avez des meubles disparates et voulez un ensemble cohérent ;',
        'vous voulez changer d’ambiance sans tout remplacer.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'Un moodboard avec couleurs, matières et ambiance',
        'Une liste d’achats claire, dans votre budget',
        'Le sourcing et le magasinage, si vous le souhaitez',
        'En option au Canada : mise en place et stylisme sur place',
      ],
      projectsLabel: 'Projets de décoration',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/05-brise.jpg',
      imageAlt: 'Décoration intérieure par Najesty',
    },
    {
      id: 'home-staging',
      slug: 'home-staging',
      title: 'Home staging',
      metaTitle: 'Home staging pour vendre votre maison au Canada | Najesty',
      metaDescription:
        'Vous vendez votre maison ou votre condo ? Désencombrement, lumière, stylisme et photos pour une annonce qui donne envie de visiter. Appel gratuit de 15 min.',
      intro:
        'Vous mettez votre propriété en vente ? On la prépare pour qu’elle fasse bonne impression dès les photos de l’annonce.',
      body: 'On désencombre, on améliore la lumière et on met en scène les pièces clés pour que les acheteurs se projettent. On peut aussi photographier le résultat pour votre annonce.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'vous vendez votre maison ou votre condo ;',
        'votre propriété est vide, encombrée ou peu mise en valeur ;',
        'vous voulez des photos d’annonce qui donnent envie de visiter.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'Une direction claire pour chaque pièce clé',
        'Le désencombrement et la mise en scène des pièces clés',
        'Le stylisme sur place au Canada',
        'Des photos d’intérieur pour votre annonce (en option)',
      ],
      projectsLabel: 'Projets de home staging',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/07-seconde-vie.jpg',
      imageAlt: 'Home staging réalisé par Najesty',
    },
    {
      id: 'photographie',
      slug: 'photographie',
      title: 'Photographie',
      metaTitle: 'Photographe d’intérieur au Canada | Najesty',
      metaDescription:
        'Photos d’intérieur soignées pour une annonce immobilière, un site web ou les réseaux sociaux. Séance sur place au Canada. Appel gratuit de 15 min.',
      intro:
        'Vous avez besoin de belles photos de votre espace ? On les prend avec un œil de designer.',
      body: 'Lumière, cadrage et détails : on photographie votre intérieur pour qu’il paraisse aussi beau en ligne qu’en vrai. Utile pour vendre, louer, présenter votre commerce ou garder un souvenir de votre projet.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'vous préparez une annonce de vente ou de location ;',
        'vous voulez présenter votre lieu sur votre site ou vos réseaux ;',
        'vous venez de terminer un projet et voulez le montrer.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'Une séance photo sur place au Canada',
        'Des images prêtes pour le web et les annonces',
      ],
      projectsLabel: 'Projets de photographie',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/09-bon-coup.jpg',
      imageAlt: 'Photographie d’intérieur Najesty',
    },
    {
      id: 'sourcing',
      slug: 'sourcing-et-magasinage',
      title: 'Sourcing et magasinage',
      metaTitle: 'Sourcing et magasinage de meubles et déco | Najesty',
      metaDescription:
        'Pas le temps de magasiner ? On trouve les bons meubles et objets dans votre budget et on vous remet une liste d’achats claire. À distance au Canada, en Europe et en Afrique.',
      intro:
        'Pas le temps de magasiner, ou peur de vous tromper ? On trouve pour vous les bons meubles et objets, dans votre budget.',
      body: 'On sélectionne des articles qui vont avec la direction choisie, avec des alternatives selon votre budget. Vous recevez une liste d’achats claire — ou on fait le magasinage pour vous. Rien d’inutile, rien au hasard.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'vous manquez de temps pour faire les magasins ;',
        'vous hésitez entre plusieurs meubles et avez peur de vous tromper ;',
        'vous voulez respecter un budget précis.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'Une liste d’achats avec des alternatives',
        'Des choix adaptés à votre budget',
        'Le magasinage fait pour vous, si vous le souhaitez',
      ],
      projectsLabel: 'Projets avec sourcing',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/02-longue-vie.jpg',
      imageAlt: 'Sourcing décoration Najesty',
    },
    {
      id: 'mise-en-place',
      slug: 'mise-en-place-et-stylisme',
      title: 'Mise en place et stylisme',
      metaTitle: 'Installation et stylisme d’intérieur sur place au Canada | Najesty',
      metaDescription:
        'Tout est acheté, il reste à tout installer ? On s’occupe de l’installation, du stylisme et des derniers détails, sur place au Canada. Appel gratuit de 15 min.',
      intro:
        'Tout est acheté, mais rien n’est en place ? On installe, on stylise et on règle les derniers détails.',
      body: 'Sur place au Canada : on place les meubles, on accroche, on dispose les objets et on ajuste jusqu’à ce que tout soit juste. À distance : on vous donne un plan de mise en place clair pour le faire vous-même.',
      forYouTitle: 'Pour vous si…',
      forYou: [
        'vos achats sont arrivés et vous ne savez pas comment les disposer ;',
        'vous préparez une vente, une séance photo ou un événement ;',
        'vous voulez un résultat fini, sans y passer vos fins de semaine.',
      ],
      includesTitle: 'Ce que vous recevez',
      includes: [
        'L’installation et le stylisme sur place au Canada',
        'Un plan de mise en place si vous êtes à distance',
        'Des photos du résultat (en option)',
      ],
      projectsLabel: 'Projets de mise en place',
      ctaLabel: 'Réserver mon appel gratuit (15 min)',
      image: '/images/work/04-night.jpg',
      imageAlt: 'Mise en place et stylisme Najesty',
    },
  ],
  atelierPage: {
    marquee: 'NOS SERVICES',
    intro:
      'Najesty est un studio de design d’intérieur et de décoration. On rend votre espace beau, pratique et apaisant — dans votre budget.',
    body1:
      'À distance partout au Canada, en Europe et en Afrique : moodboards, plans, listes d’achats et sourcing.',
    body2:
      'Sur place au Canada : installation, stylisme et photographie. Vous pouvez combiner les deux dans un même projet.',
    welcome: {
      title: 'Qui est derrière Najesty',
      role: 'Eliahna, fondatrice — Najesty Design & Pictures',
      body: 'Eliahna a fondé Najesty avec une conviction : un espace se vit avant de se décrire. Elle conçoit des intérieurs pratiques, apaisants et à votre image, qui tiennent dans votre budget. Au Canada : design à distance et mise en place sur place. En Europe et en Afrique : design et sourcing à distance.',
    },
    pillars: [
      {
        title: 'Pratique au quotidien',
        body: 'On part de votre façon de vivre : un lieu calme pour souffler, clair pour avancer, facile à entretenir.',
      },
      {
        title: 'Dans votre budget',
        body: 'On décore juste, sans tout racheter. Vous savez ce qui est inclus et combien prévoir avant de commencer.',
      },
      {
        title: 'Vous voyez avant d’acheter',
        body: 'Moodboard, plan et liste d’achats à chaque étape : vous validez la direction avant de dépenser.',
      },
    ],
    welcomeImageAlt: 'Eliahna, fondatrice de Najesty — portrait au reflet',
  },
  visionPage: {
    wordmark: 'CŒUR',
    ticker: 'Design d’intérieur · Décoration · Home staging · Photographie',
    video: '/videos/Najesty-Au-Coeur-3D.mp4',
    sectionTitle: ['À propos', 'de Najesty'],
    founder: {
      name: 'Eliahna',
      caption: 'Eliahna — fondatrice',
      carouselLabel: 'Portraits d’Eliahna, fondatrice de Najesty',
      slides: [
        {
          src: '/images/founder/eliahna-01-reflet.png',
          alt: 'Eliahna, fondatrice de Najesty — portrait au reflet',
        },
        {
          src: '/images/founder/eliahna-02-neige.png',
          alt: 'Eliahna dans un paysage enneigé au Canada',
        },
        {
          src: '/images/founder/eliahna-03-route.png',
          alt: 'Eliahna au volant — portrait en noir et blanc',
        },
        {
          src: '/images/founder/eliahna-04-venise.png',
          alt: 'Eliahna souriante devant les gondoles à Venise',
        },
      ],
    },
    blocks: [
      {
        title: 'Votre quotidien d’abord',
        body: 'Avant de choisir une couleur ou un meuble, on regarde comment vous vivez : se reposer, travailler, recevoir. L’espace doit d’abord vous servir.',
      },
      {
        title: 'Un lieu qui vous ressemble',
        body: 'Pas un décor de catalogue : un intérieur où vous vous sentez bien, avec vos goûts, votre histoire et les objets que vous aimez.',
      },
      {
        title: 'Un projet réaliste',
        body: 'Moodboard, plan, liste d’achats : vous voyez où l’on va avant de dépenser. Tout est pensé pour tenir dans votre budget.',
      },
    ],
    quote: {
      text: 'Le cœur fait tout, le reste est inutile.',
      author: 'Jean de La Fontaine',
    },
    faqTitle: 'Questions fréquentes',
  },
  contactPage: {
    headline: 'Réservez votre appel gratuit de 15 minutes',
    lead: 'Parlez-nous de votre espace en quelques lignes. On vous répond pour fixer un appel de 15 minutes, gratuit et sans engagement.',
    nextTitle: 'Ce qui se passe ensuite',
    nextSteps: [
      'On lit votre message et on vous répond pour fixer l’appel.',
      'Pendant 15 minutes, on parle de votre espace, de vos besoins et de votre budget.',
      'Vous repartez avec des prochaines étapes claires — et une proposition si vous le souhaitez.',
    ],
    emailLabel: 'Vous préférez écrire directement ?',
    email: 'bonjour@najesty.ca',
    addressLabel: 'Adresse',
    phoneLabel: 'Téléphone',
    regionLabel: 'Région',
    formTitle: 'Parlez-nous de votre projet',
  },
  workItems: [
    {
      id: 'featured',
      name: 'Nos signatures',
      image: '/images/work/01-featured-najesty.jpg',
      video: '/videos/Najesty-Logo-Construction.mp4',
      size: 'featured',
      description:
        'Un aperçu de nos réalisations : design d’intérieur, décoration, home staging et photographie — des espaces pratiques et apaisants, pensés dans le budget de nos clients.',
      alt: 'Projets signatures Najesty — design d’intérieur et décoration',
    },
    {
      id: 'ordre-douceur',
      name: 'Ordre & douceur',
      image: '/images/ceb/01-ordre-douceur.jpg?v=4',
      size: 'lg',
      description:
        'Idée de rangement et de décoration pour une bibliothèque : un ordre qui reste doux et des volumes qui apaisent le quotidien.',
      category: 'decoration',
      alt: 'Ordre & douceur — illustration CEB bibliothèque',
    },
    {
      id: 'chaque-chose',
      name: 'Chaque chose a sa place',
      image: '/images/ceb/02-chaque-chose.jpg?v=4',
      size: 'md',
      description:
        'Mise en place d’un placard : chaque objet trouve sa place, pour s’y retrouver facilement chaque jour.',
      category: 'mise-en-place',
      alt: 'Chaque chose a sa place — illustration CEB placard',
    },
    {
      id: 'ranger-mieux-vivre',
      name: 'Ranger pour mieux vivre',
      image: '/images/ceb/03-ranger-mieux-vivre.jpg?v=4',
      size: 'sm',
      description:
        'Désencombrer et ranger une commode pour alléger le quotidien — la base d’un bon home staging.',
      category: 'home-staging',
      alt: 'Ranger pour mieux vivre — illustration CEB commode',
    },
    {
      id: 'longue-vie',
      name: 'Longue Vie',
      image: '/images/work/02-longue-vie.jpg',
      size: 'lg',
      description:
        'Décoration avec des meubles et des matières choisis pour durer, que l’on aime encore des années plus tard.',
      category: 'decoration',
      alt: 'Longue Vie — meubles et matières durables',
    },
    {
      id: 'somewhere-else',
      name: 'Somewhere Else',
      image: '/images/work/03-somewhere-else.jpg',
      size: 'md',
      description:
        'Design d’intérieur inspiré du voyage : un intérieur résidentiel qui fait sentir l’ailleurs, chez soi.',
      category: 'interieur',
      alt: 'Somewhere Else — intérieur inspiré du voyage',
    },
    {
      id: 'night',
      name: 'A Night to Remember',
      image: '/images/work/04-night.jpg',
      size: 'sm',
      description:
        'Mise en place et éclairage d’ambiance pour une soirée : lumière, textures et décor pour un moment marquant.',
      category: 'mise-en-place',
      alt: 'A Night to Remember — mise en place et éclairage d’ambiance',
    },
    {
      id: 'brise',
      name: "Brise d'été",
      image: '/images/work/05-brise.jpg',
      size: 'sm',
      description:
        'Décoration légère et aérée : textures naturelles, lumière et pièces qui respirent.',
      category: 'decoration',
      alt: "Brise d'été — décoration légère et aérée",
    },
    {
      id: 'echos',
      name: 'Échos du passé',
      image: '/images/work/06-echos.jpg',
      size: 'sm',
      description:
        'Design d’intérieur qui réutilise de vieux meubles et des pièces de famille au lieu de tout racheter.',
      category: 'interieur',
      alt: 'Échos du passé — vieux meubles et patrimoine réutilisés',
    },
    {
      id: 'seconde-vie',
      name: 'Seconde Vie',
      image: '/images/work/07-seconde-vie.jpg',
      size: 'sm',
      description:
        'Réaménagement sans grands travaux : une nouvelle disposition des pièces et une nouvelle ambiance, notamment pour la mise en vente.',
      category: 'home-staging',
      alt: 'Seconde Vie — rénovation douce et nouvelle lecture d’espace',
    },
    {
      id: 'gens',
      name: 'Gens du pays',
      image: '/images/work/08-gens.jpg',
      size: 'lg',
      description:
        'Décoration qui met en valeur le Canada et le Québec — un décor ancré, sans folklore.',
      category: 'decoration',
      alt: 'Gens du pays — décoration ancrée au Canada',
    },
    {
      id: 'bon-coup',
      name: 'Bon Coup',
      image: '/images/work/09-bon-coup.jpg',
      size: 'md',
      description:
        'Photographie d’intérieur : le bon meuble, le bon angle, la bonne lumière pour une image qui donne envie.',
      category: 'photographie',
      alt: 'Bon Coup — un geste juste en photographie d’espace',
    },
    {
      id: 'next-level',
      name: 'Next Level',
      image: '/images/work/10-next-level.jpg',
      size: 'sm',
      description:
        'Design d’intérieur plus ambitieux : on pousse l’aménagement et les matériaux plus loin, toujours dans un budget défini.',
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
      title: 'Mise en place et stylisme',
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
    title: 'Projets de design d’intérieur et de décoration | Najesty',
    description:
      'Voyez nos réalisations en design d’intérieur, décoration, home staging, photographie et mise en place. Un projet semblable ? Appel gratuit de 15 min.',
    sectorsTitle: 'Projets par secteur | Najesty',
    sectorsDescription:
      'Projets Najesty par secteur : résidentiel, mise en marché, hospitalité et signatures.',
    heroMarquee: ['Nos projets', 'Design d’intérieur', 'Décoration', 'Home staging'],
    heroLead:
      'Voici ce que nous avons fait pour d’autres espaces : design d’intérieur, décoration, home staging, photographie et mise en place. À distance partout au Canada, en Europe et en Afrique — sur place au Canada.',
    heroCta: 'Réserver mon appel gratuit (15 min)',
    heroCtaHref: '/contact',
  },
  marqueeWords: [
    'Design d’intérieur',
    'Décoration',
    'Home staging',
    'Photographie',
    'Sourcing et magasinage',
    'Mise en place et stylisme',
    'À distance : Canada, Europe, Afrique',
    'Sur place au Canada',
    'Dans votre budget',
    'Appel gratuit de 15 min',
  ],
  contact: {
    title: 'Parlons de votre espace',
    body: 'Réservez un appel gratuit de 15 minutes, sans engagement. On parle de votre espace, de vos besoins et de votre budget — et vous repartez avec des prochaines étapes claires. Canada, Europe ou Afrique.',
    cta: 'Réserver mon appel gratuit (15 min)',
  },
  faq: [
    {
      question: 'Combien coûte un projet avec Najesty ?',
      answer:
        'Chaque projet est différent, donc nous n’affichons pas de prix fixe. Le tarif dépend de la taille de l’espace, des services choisis et de votre budget. Après l’appel gratuit de 15 minutes, vous recevez une proposition claire, sans engagement.',
    },
    {
      question: 'L’appel de 15 minutes est-il vraiment gratuit ?',
      answer:
        'Oui. C’est un échange sans engagement pour comprendre votre projet, votre budget et le format qui vous convient. Vous repartez avec des prochaines étapes claires, que vous travailliez avec nous ou non.',
    },
    {
      question: 'Travaillez-vous à distance ou sur place ?',
      answer:
        'Les deux. Le design, les moodboards, les plans, les listes d’achats et le sourcing se font à distance partout au Canada, en Europe et en Afrique. L’installation, le stylisme et la photographie se font sur place au Canada — demandez-nous pendant l’appel si votre adresse est couverte.',
    },
    {
      question: 'Qu’est-ce que je reçois concrètement ?',
      answer:
        'Selon les services choisis : un moodboard (l’ambiance), un plan d’aménagement, une liste d’achats dans votre budget et le sourcing des articles. Sur place au Canada, on ajoute l’installation, le stylisme et les photos.',
    },
    {
      question: 'Est-ce que je dois tout racheter ?',
      answer:
        'Non. On part de ce que vous avez déjà et on garde ce que vous aimez. On ajoute seulement ce qui manque, pour décorer juste et rester dans le budget.',
    },
    {
      question: 'Combien de temps dure un projet ?',
      answer:
        'Cela dépend de la taille de l’espace, des services choisis et de la disponibilité des meubles. On établit ensemble un échéancier réaliste dès le début du projet.',
    },
    {
      question: 'Quels services propose Najesty ?',
      answer:
        'Design d’intérieur, décoration, home staging, photographie d’intérieur, sourcing et magasinage, mise en place et stylisme. Vous pouvez choisir un seul service ou les combiner.',
    },
  ],
  form: {
    namePlaceholder: 'Votre nom',
    emailPlaceholder: 'Votre courriel',
    phonePlaceholder: 'Votre téléphone',
    messagePlaceholder:
      'Votre projet en quelques mots : quelle pièce, quelle ville, ce que vous voulez changer, votre budget approximatif',
    submit: 'Réserver mon appel gratuit',
    sending: 'Envoi en cours…',
    ok: 'Merci ! Votre demande est bien reçue. On vous répond sous peu pour fixer votre appel de 15 minutes.',
    error: 'Envoi impossible pour le moment. Écrivez-nous à bonjour@najesty.ca.',
  },
  pages: {
    vision: {
      title: 'À propos de Najesty et d’Eliahna, designer d’intérieur | Najesty',
      description:
        'Najesty Design & Pictures, fondé par Eliahna : design d’intérieur et décoration pratiques et apaisants, dans votre budget. À distance au Canada, en Europe et en Afrique.',
    },
    atelier: {
      title: 'Services de design d’intérieur, décoration et home staging | Najesty',
      description:
        'Design d’intérieur, décoration, home staging, photographie, sourcing et installation. À distance au Canada, en Europe et en Afrique, sur place au Canada. Appel gratuit de 15 min.',
    },
    contact: {
      title: 'Réserver un appel gratuit de 15 min | Najesty',
      description:
        'Réservez un appel gratuit de 15 minutes, sans engagement, pour parler de votre projet de design d’intérieur, de décoration ou de home staging. Canada, Europe, Afrique.',
    },
    legal: {
      title: 'Mentions légales — Najesty',
      h1: 'Mentions légales',
      p1: 'Najesty Design & Pictures — Canada. Contact :',
      p2: 'Les contenus (textes, images, vidéos) présents sur ce site sont la propriété de Najesty Design & Pictures, sauf mention contraire. Toute reproduction non autorisée est interdite.',
      back: '← Retour à l’accueil',
    },
    method: {
      title: 'Comment ça marche : design d’intérieur à distance ou sur place | Najesty',
      description:
        'Comment se passe un projet avec Najesty : appel gratuit de 15 min, proposition dans votre budget, moodboard, plan et liste d’achats, puis installation sur place au Canada.',
      h1: 'Comment ça marche',
      lead: 'Un projet avec Najesty se fait à distance, sur place, ou les deux. Dans tous les cas, ça commence par un appel gratuit de 15 minutes, sans engagement.',
      remoteTitle: 'À distance — partout au Canada, en Europe et en Afrique',
      remoteBody:
        'Moodboards, plans, listes d’achats et sourcing, validés avec vous en ligne. Vous avancez avec une direction claire, sans déplacement, et vous décorez dans votre budget.',
      localTitle: 'Sur place — au Canada',
      localBody:
        'Installation, stylisme et photographie directement chez vous. Idéal quand la présence sur place compte : home staging, séance photo, touche finale.',
      whoTitle: 'Quel format choisir ?',
      whoRemote:
        'À distance si vous êtes ailleurs au Canada, en Europe ou en Afrique, ou si vous voulez un plan clair à réaliser vous-même.',
      whoLocal:
        'Sur place si vous vendez votre propriété, si vous voulez des photos ou si vous préférez qu’on installe tout pour vous. Les deux formats se combinent souvent.',
      stepsTitle: 'Les étapes',
      steps: [
        {
          title: '1. Appel gratuit (15 min)',
          body: 'Vous nous parlez de votre espace, de vos besoins et de votre budget. Sans engagement : vous repartez avec des prochaines étapes claires.',
        },
        {
          title: '2. Proposition',
          body: 'On vous propose la formule adaptée à votre budget : à distance, sur place, ou les deux. Vous savez ce qui est inclus avant de dire oui.',
        },
        {
          title: '3. Conception',
          body: 'Moodboard, plan et liste d’achats. On fait le sourcing et le magasinage pour vous. Vous validez avant de dépenser.',
        },
        {
          title: '4. Mise en place (au Canada)',
          body: 'Sur place : installation, stylisme et photographie. À distance : un plan de mise en place clair, étape par étape.',
        },
      ],
      ctaTitle: 'Vous ne savez pas quel format choisir ?',
      ctaBody:
        'C’est justement le but de l’appel gratuit : en 15 minutes, on vous dit si le format à distance, sur place ou les deux convient à votre projet et à votre budget.',
      cta: 'Réserver mon appel gratuit (15 min)',
    },
    blog: {
      title: 'Blogue déco et design d’intérieur : conseils pratiques | Najesty',
      description:
        'Conseils pratiques de design d’intérieur, décoration, home staging et sourcing pour votre maison au Canada, en Europe ou en Afrique.',
      eyebrow: 'Blogue Najesty',
      h1: 'Conseils déco et design d’intérieur',
      lead: 'Des guides simples pour mieux aménager, décorer ou vendre votre maison — et savoir quand le design à distance est une bonne idée.',
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
