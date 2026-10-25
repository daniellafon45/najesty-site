/**
 * Génère src/data/blog/fr.ts et en.ts — 25 articles bilingues Najesty.
 * Node: node scripts/generate-blog-posts.mjs
 */
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, '../src/data/blog');

const images = [
  '/images/work/01-featured-najesty.jpg',
  '/images/work/02-longue-vie.jpg',
  '/images/work/03-somewhere-else.jpg',
  '/images/work/04-night.jpg',
  '/images/work/05-brise.jpg',
  '/images/work/06-echos.jpg',
  '/images/work/07-seconde-vie.jpg',
  '/images/work/08-gens.jpg',
  '/images/work/09-bon-coup.jpg',
  '/images/work/10-next-level.jpg',
  '/images/hero/deco-01-salon.jpg',
  '/images/hero/deco-02-cafe.jpg',
  '/images/hero/deco-03-salle-a-manger.jpg',
  '/images/hero/deco-04-cuisine.jpg',
  '/images/hero/deco-05-maison.jpg',
];

/** @type {Array<Record<string, any>>} */
const posts = [
  {
    key: 'design-interieur-distance-canada',
    slug: { fr: 'design-interieur-a-distance-canada', en: 'remote-interior-design-canada' },
    category: 'remote',
    audience: 'canada-foyers',
    image: images[0],
    pubDate: '2026-09-02',
    fr: {
      title: 'Design d’intérieur à distance au Canada : comment ça marche vraiment',
      description:
        'Le design d’intérieur à distance au Canada, c’est moodboards, plans et sourcing validés en ligne — puis mise en place locale si besoin. Guide Najesty.',
      imageAlt: 'Salon résidentiel conçu à distance — lumière et matières Najesty',
      answerBlock:
        'Le design d’intérieur à distance au Canada consiste à concevoir moodboards, plans d’aménagement et listes d’achats en ligne, avec validations visuelles à chaque étape. Chez Najesty, la mise en place et le stylisme se font ensuite en zone locale au Canada lorsque le lieu doit vraiment se sentir.',
      sections: [
        {
          h2: 'Ce que le remote change (et ce qu’il ne change pas)',
          paragraphs: [
            'Le remote ne remplace pas le regard sur le lieu : il structure les décisions avant de déplacer qui que ce soit. Vous avancez sur l’émotion, les usages et le budget sans stock et sans aller-retour inutiles.',
            'Ce qui reste non négociable : une direction claire, des images à chaque jalon, et un sourcing réaliste pour le marché canadien.',
          ],
        },
        {
          h2: 'Les étapes concrètes chez Najesty',
          paragraphs: [
            'Une orientation de 15 minutes clarifie le chapitre de vie, les contraintes et le niveau d’ambition. Ensuite : plateforme émotionnelle, plans, listes de shopping, validations. La preuve visuelle évite les malentendus.',
          ],
          list: [
            'Orientation offerte (15 min)',
            'Direction émotionnelle + moodboards',
            'Plans et parcours',
            'Sourcing et magasinage guidé',
            'Mise en place locale au Canada (option)',
          ],
        },
        {
          h2: 'Pour qui c’est le meilleur format',
          paragraphs: [
            'Foyers partout au Canada qui veulent une direction pro sans stock. Aussi clients en Europe et en Afrique pour la conception à distance. Si vous êtes en zone locale canadienne et que le dernier geste compte, on combine remote + mise en place.',
          ],
        },
      ],
      faq: [
        {
          question: 'Le design à distance est-il moins précis ?',
          answer:
            'Non, s’il y a preuve visuelle et mesures claires. Le remote force souvent plus de clarté sur les décisions que des séances floues sur place.',
        },
        {
          question: 'Faut-il tout acheter soi-même ?',
          answer:
            'Najesty fournit des listes et un sourcing guidé. Vous achetez selon le forfait ; nous n’imposons pas de stock atelier.',
        },
      ],
      cta: {
        title: 'Envie d’un plan remote clair ?',
        body: 'Demandez une orientation de 15 minutes. On vous dit si le distance, le local, ou les deux convient.',
        label: 'Parler de votre espace',
      },
    },
    en: {
      title: 'Remote interior design in Canada: how it actually works',
      description:
        'Remote interior design in Canada means moodboards, plans and sourcing approved online — then local styling if needed. Najesty’s practical guide.',
      imageAlt: 'Residential living room designed remotely — Najesty light and materials',
      answerBlock:
        'Remote interior design in Canada means designing moodboards, floor plans and shopping lists online, with visual approvals at every step. At Najesty, styling and installation happen on-site in Canada when the space must truly be felt.',
      sections: [
        {
          h2: 'What remote changes (and what it does not)',
          paragraphs: [
            'Remote does not replace reading the place: it structures decisions before anyone travels. You move on emotion, uses and budget without stock and without wasted trips.',
            'Non-negotiable: clear direction, images at every milestone, and sourcing that works in the Canadian market.',
          ],
        },
        {
          h2: 'Najesty’s concrete steps',
          paragraphs: [
            'A 15-minute orientation clarifies life chapter, constraints and ambition. Then: emotional platform, plans, shopping lists, approvals. Visual proof prevents misunderstandings.',
          ],
          list: [
            'Free orientation (15 min)',
            'Emotional direction + moodboards',
            'Plans and circulation',
            'Guided sourcing and shopping',
            'On-site styling in Canada (optional)',
          ],
        },
        {
          h2: 'Who this format fits best',
          paragraphs: [
            'Homes across Canada that want pro direction without stock. Also clients in Europe and Africa for remote design. If you are in the Canadian local zone and the final gesture matters, we combine remote + on-site.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is remote design less precise?',
          answer:
            'Not when visual proof and clear measurements are in place. Remote often forces sharper decisions than vague on-site sessions.',
        },
        {
          question: 'Do I have to buy everything myself?',
          answer:
            'Najesty provides lists and guided sourcing. You purchase per package; we do not force studio inventory.',
        },
      ],
      cta: {
        title: 'Want a clear remote plan?',
        body: 'Request a 15-minute orientation. We will say whether remote, on-site, or both fits.',
        label: 'Talk about your space',
      },
    },
  },
  {
    key: 'distance-vs-sur-place',
    slug: { fr: 'design-distance-vs-mise-en-place-sur-place', en: 'remote-design-vs-on-site-styling' },
    category: 'methode',
    audience: 'canada-foyers',
    image: images[9],
    pubDate: '2026-09-05',
    fr: {
      title: 'Design à distance vs mise en place sur place : que choisir ?',
      description:
        'Comparer design d’intérieur à distance et stylisme sur place au Canada. Tableau, critères et cas d’usage Najesty pour décider sans doute.',
      imageAlt: 'Comparaison design remote et stylisme sur place',
      answerBlock:
        'Choisissez le design à distance pour moodboards, plans et sourcing sans déplacement. Ajoutez la mise en place sur place au Canada quand lumière réelle, textures et installation finale doivent être vécues. Les deux se combinent souvent dans un même projet Najesty.',
      sections: [
        {
          h2: 'Tableau rapide : remote ou local',
          paragraphs: [
            'Remote = décisions structurées à distance. Local = dernier kilomètre sensoriel. Si votre priorité est de décider juste, commencez remote. Si votre priorité est de sentir le lieu fini, planifiez une mise en place canadienne.',
          ],
          list: [
            'Remote : partout au Canada + Europe/Afrique',
            'Local : stylisme, installation, photo au Canada',
            'Combo : direction remote + jour·s sur place',
          ],
        },
        {
          h2: 'Signaux que le remote suffit',
          paragraphs: [
            'Vous avez des mesures fiables, vous êtes à l’aise pour acheter en ligne ou en magasin avec une liste, et le projet est surtout décisionnel (palette, meubles, parcours).',
          ],
        },
        {
          h2: 'Signaux que le sur place est nécessaire',
          paragraphs: [
            'Home staging avant vente, shooting, installation finale, ou pièce où l’émotion dépend du détail tactile. Dans ces cas, la présence transforme le rendu.',
          ],
        },
      ],
      faq: [
        {
          question: 'Peut-on commencer remote et finir local ?',
          answer: 'Oui. C’est même le parcours le plus fréquent pour les projets ambitieux au Canada.',
        },
      ],
      cta: {
        title: 'Pas sûr du format ?',
        body: 'Une orientation suffit pour trancher remote, local ou les deux.',
        label: 'Demander une orientation',
      },
    },
    en: {
      title: 'Remote design vs on-site styling: which should you choose?',
      description:
        'Compare remote interior design and on-site styling in Canada. Table, criteria and Najesty use cases to decide with confidence.',
      imageAlt: 'Comparing remote design and on-site styling',
      answerBlock:
        'Choose remote design for moodboards, plans and sourcing without travel. Add on-site styling in Canada when real light, textures and final installation must be lived. Both often combine in one Najesty project.',
      sections: [
        {
          h2: 'Quick table: remote or local',
          paragraphs: [
            'Remote = structured decisions at a distance. Local = sensory last mile. If your priority is deciding well, start remote. If your priority is feeling the finished place, plan Canadian on-site days.',
          ],
          list: [
            'Remote: Canada-wide + Europe/Africa',
            'Local: styling, install, photo in Canada',
            'Combo: remote direction + on-site day(s)',
          ],
        },
        {
          h2: 'Signals that remote is enough',
          paragraphs: [
            'You have reliable measurements, you are comfortable buying online or in-store with a list, and the project is mostly decisional (palette, furniture, circulation).',
          ],
        },
        {
          h2: 'Signals that on-site is needed',
          paragraphs: [
            'Home staging before sale, a shoot, final installation, or a room where emotion depends on tactile detail. Presence changes the result.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can we start remote and finish on-site?',
          answer: 'Yes. It is the most common path for ambitious projects in Canada.',
        },
      ],
      cta: {
        title: 'Not sure which format?',
        body: 'One orientation is enough to choose remote, local, or both.',
        label: 'Request an orientation',
      },
    },
  },
  {
    key: 'home-staging-canada-vendre',
    slug: { fr: 'home-staging-canada-ce-qui-fait-vendre', en: 'home-staging-canada-what-sells' },
    category: 'home-staging',
    audience: 'vendeurs',
    image: images[6],
    pubDate: '2026-09-08',
    fr: {
      title: 'Home staging au Canada : ce qui fait vraiment vendre',
      description:
        'Home staging au Canada : neutraliser sans vider l’âme, photographier juste, prioriser les pièces qui décident l’offre. Méthode Najesty pour vendeurs.',
      imageAlt: 'Intérieur home staging prêt à photographier',
      answerBlock:
        'Le home staging au Canada augmente la lisibilité d’un bien : parcours clair, lumière maîtrisée, stylisme neutre mais incarné, et photographie qui montre le potentiel. Najesty combine désencombrement stratégique, mise en place et shooting pour accélérer les décisions d’acheteurs.',
      sections: [
        {
          h2: 'Ce que les acheteurs scannent en 8 secondes',
          paragraphs: [
            'Entrée, salon, cuisine, chambre principale. Si ces quatre zones racontent un usage fluide, le reste suit. Le staging n’est pas « tout peindre en beige » : c’est retirer le bruit pour laisser l’espace se sentir.',
          ],
        },
        {
          h2: 'Priorités budget : où mettre l’argent',
          paragraphs: [
            'D’abord la lumière et le parcours, ensuite les surfaces visibles, enfin les accessoires. Une photo forte vaut souvent plus qu’un meuble de plus.',
          ],
          list: [
            'Désencombrer et définir les zones',
            'Corriger les points durs (éclairage, rideaux)',
            'Styliser les pièces décisionnelles',
            'Photographier avant publication',
          ],
        },
        {
          h2: 'Erreur fréquente',
          paragraphs: [
            'Sur-décorer « pour faire joli ». Le staging vend un futur usage, pas votre goût personnel. Najesty garde une identité sobre, canadienne, sans folklore.',
          ],
        },
      ],
      faq: [
        {
          question: 'Le staging fonctionne-t-il en condo ?',
          answer:
            'Oui. Les petits volumes gagnent encore plus d’une lecture claire des zones et d’une photo honnête.',
        },
      ],
      cta: {
        title: 'Mettre votre bien en marché',
        body: 'Orientation 15 min pour estimer staging + photo selon votre échéance de vente.',
        label: 'Parler staging',
      },
    },
    en: {
      title: 'Home staging in Canada: what actually helps a sale',
      description:
        'Home staging in Canada: neutralize without emptying the soul, shoot well, prioritize rooms that decide offers. Najesty’s method for sellers.',
      imageAlt: 'Home-staged interior ready for photography',
      answerBlock:
        'Home staging in Canada improves how readable a property is: clear circulation, controlled light, neutral yet lived-in styling, and photography that shows potential. Najesty combines strategic decluttering, styling and shooting to speed buyer decisions.',
      sections: [
        {
          h2: 'What buyers scan in 8 seconds',
          paragraphs: [
            'Entry, living room, kitchen, primary bedroom. If those four zones tell a fluid use story, the rest follows. Staging is not “paint everything beige”: it removes noise so the space can be felt.',
          ],
        },
        {
          h2: 'Budget priorities: where money goes',
          paragraphs: [
            'First light and circulation, then visible surfaces, then accessories. A strong photo often beats one more piece of furniture.',
          ],
          list: [
            'Declutter and define zones',
            'Fix hard points (lighting, curtains)',
            'Style decision-making rooms',
            'Photograph before listing',
          ],
        },
        {
          h2: 'Common mistake',
          paragraphs: [
            'Over-decorating “to look pretty.” Staging sells a future use, not your personal taste. Najesty keeps a sober Canadian identity, without folklore.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does staging work in condos?',
          answer:
            'Yes. Smaller volumes gain even more from clear zone reading and honest photography.',
        },
      ],
      cta: {
        title: 'Ready to list your property',
        body: '15-minute orientation to estimate staging + photo for your sale timeline.',
        label: 'Talk staging',
      },
    },
  },
  {
    key: 'salon-qui-se-sent',
    slug: { fr: 'decoration-salon-espace-qui-se-sent', en: 'living-room-decoration-spaces-you-feel' },
    category: 'decoration',
    audience: 'canada-foyers',
    image: images[10],
    pubDate: '2026-09-11',
    fr: {
      title: 'Décoration de salon : créer une pièce qui se sent avant de se décrire',
      description:
        'Comment décorer un salon au Canada pour qu’il se sente : ancrage, lumière, parcours, matières. Approche émotionnelle Najesty.',
      imageAlt: 'Salon décoré avec lumière naturelle et matières sobres',
      answerBlock:
        'Un salon qui se sent repose sur quatre leviers : un ancrage clair (canapé ou cheminée), une lumière en couches, un parcours sans obstacle, et des matières cohérentes au toucher. Chez Najesty, on commence par l’émotion et les usages avant le catalogue de meubles.',
      sections: [
        {
          h2: 'Ancrer avant d’accumuler',
          paragraphs: [
            'Choisissez d’abord le geste principal : conversation, lecture, écran, ouverture sur l’extérieur. Tout le reste s’ordonne autour. Sans ancrage, les objets flottent.',
          ],
        },
        {
          h2: 'Lumière canadienne : penser l’hiver',
          paragraphs: [
            'En climat nordique, multipliez les sources basées (lampes, appliques) plutôt qu’un seul plafond agressif. Les textures mates absorbent mieux la lumière diffuse d’hiver.',
          ],
        },
        {
          h2: 'Matières qui tiennent dans le temps',
          paragraphs: [
            'Privilégiez ce que vous aurez encore envie de garder demain — logique « Longue Vie ». Moins de tendances jetables, plus de présence.',
          ],
        },
      ],
      faq: [
        {
          question: 'Faut-il un tapis XXL ?',
          answer:
            'Souvent oui pour unifier la zone conversation, mais la taille suit le plan, pas la mode Instagram.',
        },
      ],
      cta: {
        title: 'Votre salon manque d’ancrage ?',
        body: 'On lit vos usages et on propose une direction visuelle claire.',
        label: 'Écrire à Najesty',
      },
    },
    en: {
      title: 'Living room decoration: a space you feel before you describe',
      description:
        'How to decorate a living room in Canada so it feels right: anchor, light, circulation, materials. Najesty’s emotional approach.',
      imageAlt: 'Living room with natural light and sober materials',
      answerBlock:
        'A living room you feel rests on four levers: a clear anchor (sofa or fireplace), layered light, obstacle-free circulation, and coherent materials to the touch. At Najesty, we start with emotion and uses before any furniture catalogue.',
      sections: [
        {
          h2: 'Anchor before you accumulate',
          paragraphs: [
            'First choose the main gesture: conversation, reading, screen, or outdoor opening. Everything else orders around it. Without an anchor, objects float.',
          ],
        },
        {
          h2: 'Canadian light: think winter',
          paragraphs: [
            'In a northern climate, multiply low sources (lamps, sconces) instead of one harsh ceiling light. Matte textures handle diffuse winter light better.',
          ],
        },
        {
          h2: 'Materials that last',
          paragraphs: [
            'Prefer what you will still want tomorrow — a “Long Life” logic. Fewer disposable trends, more presence.',
          ],
        },
      ],
      faq: [
        {
          question: 'Do you need an oversized rug?',
          answer:
            'Often yes to unify the conversation zone, but size follows the plan, not Instagram fashion.',
        },
      ],
      cta: {
        title: 'Is your living room missing an anchor?',
        body: 'We read your uses and propose a clear visual direction.',
        label: 'Write to Najesty',
      },
    },
  },
  {
    key: 'moodboard-methode',
    slug: { fr: 'moodboard-interieur-methode-najesty', en: 'interior-moodboard-najesty-method' },
    category: 'methode',
    audience: 'canada-foyers',
    image: images[2],
    pubDate: '2026-09-14',
    fr: {
      title: 'Moodboard intérieur : la méthode Najesty pour décider sans doute',
      description:
        'Un moodboard d’intérieur utile aligne émotion, usages et budget. Méthode Najesty : plateforme émotionnelle, preuves visuelles, validations.',
      imageAlt: 'Moodboard design d’intérieur Najesty',
      answerBlock:
        'Un moodboard d’intérieur efficace n’est pas un collage joli : c’est une plateforme de décision. Najesty y fixe l’émotion cible, les matières, la lumière et les interdits, puis valide chaque choix avec une preuve visuelle avant l’achat.',
      sections: [
        {
          h2: 'Ce qu’on y met (et ce qu’on refuse)',
          paragraphs: [
            'On y met : palette, textures, silhouettes de meubles, références de lumière, détails de parcours. On refuse : 40 images contradictoires « au cas où ».',
          ],
        },
        {
          h2: 'Du moodboard à la liste d’achats',
          paragraphs: [
            'Chaque image doit pouvoir se traduire en SKU ou en geste. Sinon elle reste du rêve non actionnable. Le remote Najesty force cette traduction.',
          ],
        },
      ],
      faq: [
        {
          question: 'Combien de versions ?',
          answer:
            'Souvent deux directions max, puis une seule verrouillée. Trop d’options tue la décision.',
        },
      ],
      cta: {
        title: 'Verrouiller votre direction',
        body: 'Orientation 15 min pour démarrer une plateforme émotionnelle claire.',
        label: 'Commencer',
      },
    },
    en: {
      title: 'Interior moodboard: Najesty’s method to decide with clarity',
      description:
        'A useful interior moodboard aligns emotion, uses and budget. Najesty method: emotional platform, visual proof, approvals.',
      imageAlt: 'Najesty interior design moodboard',
      answerBlock:
        'An effective interior moodboard is not a pretty collage: it is a decision platform. Najesty locks target emotion, materials, light and no-gos, then validates every choice with visual proof before purchase.',
      sections: [
        {
          h2: 'What belongs (and what does not)',
          paragraphs: [
            'Include: palette, textures, furniture silhouettes, light references, circulation details. Exclude: 40 contradictory “just in case” images.',
          ],
        },
        {
          h2: 'From moodboard to shopping list',
          paragraphs: [
            'Every image must translate into a SKU or a gesture. Otherwise it stays non-actionable dream. Najesty remote forces that translation.',
          ],
        },
      ],
      faq: [
        {
          question: 'How many versions?',
          answer: 'Often two directions max, then one locked. Too many options kill the decision.',
        },
      ],
      cta: {
        title: 'Lock your direction',
        body: '15-minute orientation to start a clear emotional platform.',
        label: 'Get started',
      },
    },
  },
  {
    key: 'sourcing-sans-stock',
    slug: { fr: 'sourcing-decoration-sans-stock', en: 'decoration-sourcing-without-stock' },
    category: 'pratique',
    audience: 'canada-foyers',
    image: images[1],
    pubDate: '2026-09-17',
    fr: {
      title: 'Sourcing déco sans stock : acheter juste, au bon moment',
      description:
        'Sourcing décoration au Canada sans stock atelier : listes claires, alternatives, timing d’achat. Approche Najesty pour éviter les erreurs coûteuses.',
      imageAlt: 'Sourcing mobilier et décoration sélectionnés',
      answerBlock:
        'Le sourcing déco sans stock signifie travailler avec des listes d’achats précises, des alternatives et un timing, plutôt qu’un inventaire atelier. Najesty guide le magasinage pour que chaque objet serve l’émotion et le parcours — sans surplus.',
      sections: [
        {
          h2: 'Pourquoi « sans stock » protège votre budget',
          paragraphs: [
            'Vous n’achetez pas ce qui traîne en atelier. Vous achetez ce qui correspond à votre plan. Moins de compromis, plus de justesse.',
          ],
        },
        {
          h2: 'Structure d’une bonne liste',
          paragraphs: [
            'Priorité 1 : pièces structurelles. Priorité 2 : lumière. Priorité 3 : textiles et objets. Chaque ligne a un plan B si rupture de stock.',
          ],
        },
      ],
      faq: [
        {
          question: 'Magasins locaux ou en ligne ?',
          answer:
            'Les deux. Au Canada, on combine disponibilité locale et commandes, selon délais et retour.',
        },
      ],
      cta: {
        title: 'Besoin d’une liste qui tient ?',
        body: 'On construit un sourcing aligné à votre moodboard et votre calendrier.',
        label: 'Demander un accompagnement',
      },
    },
    en: {
      title: 'Decoration sourcing without stock: buy right, on time',
      description:
        'Decoration sourcing in Canada without studio inventory: clear lists, alternatives, purchase timing. Najesty’s approach to avoid costly mistakes.',
      imageAlt: 'Curated furniture and decoration sourcing',
      answerBlock:
        'Sourcing decoration without stock means working from precise shopping lists, alternatives and timing — not studio inventory. Najesty guides shopping so every object serves emotion and circulation, without surplus.',
      sections: [
        {
          h2: 'Why “no stock” protects your budget',
          paragraphs: [
            'You do not buy what happens to sit in a warehouse. You buy what matches your plan. Fewer compromises, more accuracy.',
          ],
        },
        {
          h2: 'Structure of a strong list',
          paragraphs: [
            'Priority 1: structural pieces. Priority 2: light. Priority 3: textiles and objects. Every line has a plan B if stock runs out.',
          ],
        },
      ],
      faq: [
        {
          question: 'Local stores or online?',
          answer:
            'Both. In Canada we combine local availability and orders based on lead times and returns.',
        },
      ],
      cta: {
        title: 'Need a list that holds?',
        body: 'We build sourcing aligned to your moodboard and calendar.',
        label: 'Request guidance',
      },
    },
  },
  {
    key: 'photo-interieur-pourquoi',
    slug: { fr: 'photographier-interieur-pourquoi-ca-compte', en: 'why-interior-photography-matters' },
    category: 'pratique',
    audience: 'vendeurs',
    image: images[8],
    pubDate: '2026-09-20',
    fr: {
      title: 'Photographier son intérieur : pourquoi ça compte (vente, location, archives)',
      description:
        'La photographie d’intérieur documente avant/après, accélère la vente et ancre les décisions design. Rôle de la photo chez Najesty.',
      imageAlt: 'Photographie d’espace intérieur Najesty',
      answerBlock:
        'Photographier un intérieur crée une preuve : avant/après, annonces immobilières, dossiers design. Une image honnête et bien éclairée accélère les décisions — acheteurs, locataires ou clients — mieux qu’une description longue.',
      sections: [
        {
          h2: 'Trois usages concrets',
          paragraphs: [
            'Vente ou location : l’annonce se joue sur les miniatures. Design : la photo valide les choix. Archive personnelle : vous gardez la mémoire d’un chapitre.',
          ],
        },
        {
          h2: 'Ce que Najesty capture',
          paragraphs: [
            'Lumière réelle, angles de parcours, détails de matière. Pas de filtre qui ment sur le volume. La preuve visuelle est un pilier de la méthode.',
          ],
        },
      ],
      faq: [
        {
          question: 'Faut-il styliser avant de shooter ?',
          answer:
            'Oui dans la plupart des cas. Une photo d’un espace encombré vend le problème, pas le potentiel.',
        },
      ],
      cta: {
        title: 'Prévoir un shooting',
        body: 'Staging léger + photo pour vente, location ou dossier projet.',
        label: 'Parler photographie',
      },
    },
    en: {
      title: 'Photographing your interior: why it matters (sale, rental, archive)',
      description:
        'Interior photography documents before/after, speeds sales and anchors design decisions. The role of photography at Najesty.',
      imageAlt: 'Najesty interior space photography',
      answerBlock:
        'Photographing an interior creates proof: before/after, listings, design files. An honest, well-lit image speeds decisions — buyers, renters or clients — better than a long description.',
      sections: [
        {
          h2: 'Three concrete uses',
          paragraphs: [
            'Sale or rental: the listing lives on thumbnails. Design: photos validate choices. Personal archive: you keep a chapter’s memory.',
          ],
        },
        {
          h2: 'What Najesty captures',
          paragraphs: [
            'Real light, circulation angles, material detail. No filter that lies about volume. Visual proof is a pillar of the method.',
          ],
        },
      ],
      faq: [
        {
          question: 'Should you style before shooting?',
          answer:
            'Yes in most cases. A photo of a cluttered space sells the problem, not the potential.',
        },
      ],
      cta: {
        title: 'Plan a shoot',
        body: 'Light staging + photo for sale, rental or project file.',
        label: 'Talk photography',
      },
    },
  },
  {
    key: 'condo-quebec-petits-espaces',
    slug: { fr: 'amenager-condo-quebec-petits-espaces', en: 'furnishing-quebec-condo-small-spaces' },
    category: 'pratique',
    audience: 'nouveaux-proprietaires',
    image: images[4],
    pubDate: '2026-09-23',
    fr: {
      title: 'Aménager un condo au Québec : stratégies pour petits espaces',
      description:
        'Condo au Québec : zones claires, rangement vertical, lumière, multi-usages. Guide design d’intérieur Najesty pour petits volumes.',
      imageAlt: 'Petit salon de condo aménagé avec légèreté',
      answerBlock:
        'Aménager un condo au Québec demande de définir des zones sans murs, d’optimiser le rangement vertical et de soigner la lumière. Najesty priorise le parcours et un mobilier multi-usage pour que le petit volume se sente plus grand — sans le surcharger.',
      sections: [
        {
          h2: 'Zones sans cloisons',
          paragraphs: [
            'Tapis, luminaires et dos de meubles créent des frontières douces. Le regard doit pouvoir respirer d’un bout à l’autre du plan.',
          ],
        },
        {
          h2: 'Ce qu’il faut refuser',
          paragraphs: [
            'Les collections de petits objets « pour remplir ». Le vide stratégique est un luxe dans un condo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Open concept cuisine-salon : une erreur ?',
          answer:
            'Non, si les zones sont lisibles. L’erreur est de tout traiter comme une seule masse visuelle.',
        },
      ],
      cta: {
        title: 'Votre condo mérite un plan',
        body: 'Remote design adapté aux mesures réelles de votre unité.',
        label: 'Obtenir une direction',
      },
    },
    en: {
      title: 'Furnishing a condo in Quebec: strategies for small spaces',
      description:
        'Quebec condo: clear zones, vertical storage, light, multi-use pieces. Najesty interior design guide for small volumes.',
      imageAlt: 'Small condo living room furnished with lightness',
      answerBlock:
        'Furnishing a condo in Quebec means defining zones without walls, optimizing vertical storage and refining light. Najesty prioritizes circulation and multi-use furniture so a small volume feels larger — without clutter.',
      sections: [
        {
          h2: 'Zones without partitions',
          paragraphs: [
            'Rugs, lighting and furniture backs create soft borders. The eye should breathe from one end of the plan to the other.',
          ],
        },
        {
          h2: 'What to refuse',
          paragraphs: [
            'Collections of tiny objects “to fill space.” Strategic emptiness is a luxury in a condo.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is open-concept kitchen-living a mistake?',
          answer:
            'No, if zones stay readable. The mistake is treating everything as one visual mass.',
        },
      ],
      cta: {
        title: 'Your condo deserves a plan',
        body: 'Remote design adapted to your unit’s real measurements.',
        label: 'Get a direction',
      },
    },
  },
  {
    key: 'lumiere-climat-nordique',
    slug: { fr: 'couleurs-lumiere-interieur-climat-nordique', en: 'color-light-nordic-climate-interiors' },
    category: 'inspiration',
    audience: 'canada-foyers',
    image: images[5],
    pubDate: '2026-09-26',
    fr: {
      title: 'Couleurs et lumière en climat nordique : ce qui fonctionne vraiment',
      description:
        'Palette et éclairage pour intérieurs canadiens : hiver long, lumière basse, chaleur tactile. Conseils design Najesty.',
      imageAlt: 'Intérieur baigné d’une lumière douce d’hiver',
      answerBlock:
        'En climat nordique, les intérieurs gagnent avec des palettes chaudes-neutres, des surfaces mates et un éclairage en couches. Najesty évite le tout-blanc froid : on cherche une lumière qui réchauffe sans écraser les matières.',
      sections: [
        {
          h2: 'Blanc froid vs neutres vivants',
          paragraphs: [
            'Un blanc bleuté peut durcir l’hiver. Des neutres légèrement rosés, argile ou lin tiennent mieux sous LED et journées grises.',
          ],
        },
        {
          h2: 'Couches de lumière',
          paragraphs: [
            'Général + tâche + accent. Trois hauteurs minimum. C’est ce qui transforme un salon « correct » en lieu où l’on reste.',
          ],
        },
      ],
      faq: [
        {
          question: 'Peut-on oser une couleur forte ?',
          answer:
            'Oui, en volume contrôlé (alcôve, porte, textile) pour ne pas absorber toute la lumière hivernale.',
        },
      ],
      cta: {
        title: 'Recaler votre palette',
        body: 'Moodboard lumière + matières adapté à votre orientation et votre climat.',
        label: 'Travailler la lumière',
      },
    },
    en: {
      title: 'Color and light in a northern climate: what actually works',
      description:
        'Palette and lighting for Canadian interiors: long winter, low light, tactile warmth. Najesty design tips.',
      imageAlt: 'Interior bathed in soft winter light',
      answerBlock:
        'In a northern climate, interiors win with warm-neutral palettes, matte surfaces and layered lighting. Najesty avoids cold all-white: we seek light that warms without crushing materials.',
      sections: [
        {
          h2: 'Cold white vs living neutrals',
          paragraphs: [
            'A bluish white can harden winter. Slightly rosy, clay or linen neutrals hold up better under LED and grey days.',
          ],
        },
        {
          h2: 'Layers of light',
          paragraphs: [
            'Ambient + task + accent. Three heights minimum. That is what turns a “fine” living room into a place you stay.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can you risk a strong colour?',
          answer:
            'Yes, in a controlled volume (alcove, door, textile) so it does not swallow winter light.',
        },
      ],
      cta: {
        title: 'Recalibrate your palette',
        body: 'Light + materials moodboard adapted to your orientation and climate.',
        label: 'Work on light',
      },
    },
  },
  {
    key: 'decoration-durable-longue-vie',
    slug: { fr: 'decoration-durable-choisir-pour-longtemps', en: 'durable-decoration-choose-for-the-long-run' },
    category: 'decoration',
    audience: 'canada-foyers',
    image: images[1],
    pubDate: '2026-09-29',
    fr: {
      title: 'Décoration durable : choisir aujourd’hui ce que vous garderez demain',
      description:
        'Décoration durable au sens Najesty « Longue Vie » : moins de tendances jetables, plus de matières et gestes que vous aimerez encore.',
      imageAlt: 'Mobilier et matières choisis pour durer',
      answerBlock:
        'La décoration durable, chez Najesty, signifie choisir des pièces et matières que vous aurez encore envie de garder demain. Moins de tendances jetables, plus de justesse d’usage, de réparation possible et de présence émotionnelle.',
      sections: [
        {
          h2: 'Trois filtres avant d’acheter',
          paragraphs: ['Posez-vous : est-ce réparable ? Est-ce aligné à mon parcours ? Est-ce que je l’aimerai hors tendance ?'],
          list: ['Réparabilité / qualité constructive', 'Alignement au plan', 'Plaisir hors mode'],
        },
        {
          h2: 'Seconde vie des objets',
          paragraphs: [
            'Réemploi et repositionnement font partie du design. Un objet déjà là peut porter le récit du lieu mieux qu’un achat neuf.',
          ],
        },
      ],
      faq: [
        {
          question: 'Durable = plus cher ?',
          answer:
            'Parfois à l’achat, rarement sur 8–10 ans. Le coût réel inclut remplacements et regrets.',
        },
      ],
      cta: {
        title: 'Construire une Longue Vie',
        body: 'Direction déco qui priorise ce qui reste — pas ce qui brille trois mois.',
        label: 'Parler Longue Vie',
      },
    },
    en: {
      title: 'Durable decoration: choose today what you will keep tomorrow',
      description:
        'Durable decoration in Najesty’s “Long Life” sense: fewer disposable trends, more materials and gestures you will still love.',
      imageAlt: 'Furniture and materials chosen to last',
      answerBlock:
        'Durable decoration at Najesty means choosing pieces and materials you will still want tomorrow. Fewer disposable trends, more use accuracy, repairability and emotional presence.',
      sections: [
        {
          h2: 'Three filters before buying',
          paragraphs: ['Ask: is it repairable? Does it fit my plan? Will I love it off-trend?'],
          list: ['Repairability / build quality', 'Plan alignment', 'Pleasure beyond fashion'],
        },
        {
          h2: 'Second life for objects',
          paragraphs: [
            'Reuse and repositioning are part of design. An object already there can carry the place’s story better than a new buy.',
          ],
        },
      ],
      faq: [
        {
          question: 'Does durable mean more expensive?',
          answer:
            'Sometimes at purchase, rarely over 8–10 years. Real cost includes replacements and regret.',
        },
      ],
      cta: {
        title: 'Build a Long Life space',
        body: 'Decoration direction that prioritizes what remains — not what shines for three months.',
        label: 'Talk Long Life',
      },
    },
  },
  {
    key: 'premiere-maison-par-ou-commencer',
    slug: { fr: 'premiere-maison-par-ou-commencer-design', en: 'first-home-where-to-start-design' },
    category: 'pratique',
    audience: 'nouveaux-proprietaires',
    image: images[14],
    pubDate: '2026-10-02',
    fr: {
      title: 'Première maison : par où commencer le design d’intérieur',
      description:
        'Première maison au Canada : ordre des priorités, budget, pièces à traiter en premier. Feuille de route Najesty pour nouveaux propriétaires.',
      imageAlt: 'Maison résidentielle prête pour un nouveau chapitre',
      answerBlock:
        'Pour une première maison, commencez par sécurité et enveloppe (humidité, électricité), puis parcours et lumière, puis mobilier structurel. Najesty aide les nouveaux propriétaires à éviter d’acheter trop tôt des objets sans plan.',
      sections: [
        {
          h2: 'Ordre recommandé',
          paragraphs: ['Technique → plan → lumière → pièces de vie → chambres → décoration fine.'],
          list: [
            'Corriger l’urgent technique',
            'Mesurer et dessiner le parcours',
            'Éclairage et rideaux',
            'Canapé / table / lit',
            'Objets et stylisme',
          ],
        },
        {
          h2: 'Piège classique',
          paragraphs: [
            'Remplir pour « que ça fasse maison ». Mieux vaut trois gestes justes qu’une maison saturée d’achats impulsifs.',
          ],
        },
      ],
      faq: [
        {
          question: 'Faut-il tout finir la première année ?',
          answer: 'Non. Un bon plan permet de phaser sur 12–24 mois sans se tromper d’achats.',
        },
      ],
      cta: {
        title: 'Feuille de route première maison',
        body: 'Orientation pour prioriser pièces, budget et calendrier.',
        label: 'Planifier avec Najesty',
      },
    },
    en: {
      title: 'First home: where to start with interior design',
      description:
        'First home in Canada: priority order, budget, rooms to tackle first. Najesty roadmap for new homeowners.',
      imageAlt: 'Residential home ready for a new chapter',
      answerBlock:
        'For a first home, start with safety and envelope (moisture, electrical), then circulation and light, then structural furniture. Najesty helps new owners avoid buying objects too early without a plan.',
      sections: [
        {
          h2: 'Recommended order',
          paragraphs: ['Technical → plan → light → living rooms → bedrooms → fine decoration.'],
          list: [
            'Fix urgent technical issues',
            'Measure and draw circulation',
            'Lighting and curtains',
            'Sofa / table / bed',
            'Objects and styling',
          ],
        },
        {
          h2: 'Classic trap',
          paragraphs: [
            'Filling up so it “feels like home.” Three right gestures beat a house saturated with impulse buys.',
          ],
        },
      ],
      faq: [
        {
          question: 'Must everything be finished in year one?',
          answer: 'No. A good plan lets you phase over 12–24 months without wrong purchases.',
        },
      ],
      cta: {
        title: 'First-home roadmap',
        body: 'Orientation to prioritize rooms, budget and calendar.',
        label: 'Plan with Najesty',
      },
    },
  },
  {
    key: 'seconde-vie-pieces',
    slug: { fr: 'renover-sans-tout-casser-seconde-vie', en: 'refresh-without-gutting-second-life' },
    category: 'inspiration',
    audience: 'canada-foyers',
    image: images[6],
    pubDate: '2026-10-05',
    fr: {
      title: 'Rénover sans tout casser : donner une seconde vie aux pièces',
      description:
        'Transformer une pièce sans démolition lourde : peinture stratégique, parcours, stylisme, lumière. Approche Seconde Vie Najesty.',
      imageAlt: 'Pièce transformée par stylisme et parcours',
      answerBlock:
        'Rénover sans tout casser, c’est changer la lecture d’une pièce via peinture ciblée, éclairage, textiles et repositionnement du mobilier. Najesty appelle ça Seconde Vie : maximum d’impact émotionnel pour un chantier contenu.',
      sections: [
        {
          h2: 'Leviers à fort ROI',
          paragraphs: [
            'Peinture des boiseries, remplacement des luminaires, rideaux au bon format, dégagement des axes de circulation.',
          ],
        },
        {
          h2: 'Quand la démolition devient utile',
          paragraphs: [
            'Si structure, humidité ou plan bloquent vraiment les usages. Sinon, on épuise d’abord les leviers soft.',
          ],
        },
      ],
      faq: [
        {
          question: 'Combien de temps pour une Seconde Vie ?',
          answer:
            'Souvent quelques semaines de conception + quelques jours de mise en place, selon ampleur.',
        },
      ],
      cta: {
        title: 'Imaginer une Seconde Vie',
        body: 'On identifie les leviers soft avant tout devis de démolition.',
        label: 'Explorer les options',
      },
    },
    en: {
      title: 'Refresh without gutting: give rooms a second life',
      description:
        'Transform a room without heavy demolition: strategic paint, circulation, styling, light. Najesty’s Second Life approach.',
      imageAlt: 'Room transformed through styling and circulation',
      answerBlock:
        'Refreshing without gutting means changing how a room reads via targeted paint, lighting, textiles and furniture repositioning. Najesty calls this Second Life: maximum emotional impact for a contained project.',
      sections: [
        {
          h2: 'High-ROI levers',
          paragraphs: [
            'Paint on millwork, fixture swaps, correctly sized curtains, clearing circulation axes.',
          ],
        },
        {
          h2: 'When demolition becomes useful',
          paragraphs: [
            'If structure, moisture or plan truly block uses. Otherwise, exhaust soft levers first.',
          ],
        },
      ],
      faq: [
        {
          question: 'How long for a Second Life?',
          answer:
            'Often a few weeks of design + a few styling days, depending on scope.',
        },
      ],
      cta: {
        title: 'Imagine a Second Life',
        body: 'We identify soft levers before any demolition quote.',
        label: 'Explore options',
      },
    },
  },
  {
    key: 'clients-europe-remote',
    slug: { fr: 'design-interieur-clients-europe-depuis-canada', en: 'interior-design-europe-clients-from-canada' },
    category: 'remote',
    audience: 'europe-afrique',
    image: images[2],
    pubDate: '2026-10-08',
    fr: {
      title: 'Design d’intérieur pour clients en Europe depuis le Canada',
      description:
        'Najesty accompagne des clients en Europe en design à distance : direction, moodboards, sourcing adapté, validations asynchrones.',
      imageAlt: 'Moodboard remote pour projet européen',
      answerBlock:
        'Najesty conçoit à distance pour des clients en Europe : plateforme émotionnelle, plans et listes d’achats validés en ligne. Le fuseau et la langue (FR/EN) sont gérés par échanges asynchrones clairs, avec preuve visuelle à chaque étape.',
      sections: [
        {
          h2: 'Ce qui est possible à distance',
          paragraphs: [
            'Direction design, moodboards, plans d’aménagement, conseils de sourcing locaux ou en ligne, validations. La mise en place physique reste de votre côté ou d’un partenaire local.',
          ],
        },
        {
          h2: 'Comment on communique',
          paragraphs: [
            'Visios ciblées + livrables datés. Vous savez toujours où en est la décision. Pas de flou « on verra sur place » quand le sur place n’existe pas.',
          ],
        },
      ],
      faq: [
        {
          question: 'Et les normes européennes ?',
          answer:
            'Nous adaptons le conseil aux contraintes que vous partagez (mesures, marché local). Les obligations légales restent de votre responsabilité locale.',
        },
      ],
      cta: {
        title: 'Projet depuis l’Europe ?',
        body: 'Écrivez-nous : on confirme si le remote Najesty couvre votre besoin.',
        label: 'Écrire depuis l’Europe',
      },
    },
    en: {
      title: 'Interior design for Europe-based clients from Canada',
      description:
        'Najesty supports clients in Europe with remote design: direction, moodboards, adapted sourcing, async approvals.',
      imageAlt: 'Remote moodboard for a European project',
      answerBlock:
        'Najesty designs remotely for clients in Europe: emotional platform, plans and shopping lists approved online. Time zones and language (FR/EN) are handled through clear async exchanges, with visual proof at every step.',
      sections: [
        {
          h2: 'What remote can cover',
          paragraphs: [
            'Design direction, moodboards, layout plans, local or online sourcing advice, approvals. Physical styling stays with you or a local partner.',
          ],
        },
        {
          h2: 'How we communicate',
          paragraphs: [
            'Targeted video calls + dated deliverables. You always know where the decision stands. No vague “we’ll see on site” when there is no on-site.',
          ],
        },
      ],
      faq: [
        {
          question: 'What about European norms?',
          answer:
            'We adapt advice to constraints you share (measurements, local market). Legal obligations remain your local responsibility.',
        },
      ],
      cta: {
        title: 'Project from Europe?',
        body: 'Write to us: we will confirm whether Najesty remote covers your need.',
        label: 'Write from Europe',
      },
    },
  },
  {
    key: 'clients-afrique-remote',
    slug: { fr: 'design-interieur-distance-afrique-francophone', en: 'remote-interior-design-francophone-africa' },
    category: 'remote',
    audience: 'europe-afrique',
    image: images[7],
    pubDate: '2026-10-10',
    fr: {
      title: 'Design d’intérieur à distance pour l’Afrique francophone',
      description:
        'Accompagnement design à distance pour clients en Afrique francophone : identité du lieu, climat, sourcing réaliste, preuves visuelles.',
      imageAlt: 'Direction design ancrée et contemporaine',
      answerBlock:
        'Najesty propose un design d’intérieur à distance pour des clients en Afrique francophone : lecture du climat et des usages, identité sans folklore, moodboards et plans validés en ligne. Le sourcing s’adapte aux disponibilités locales que vous indiquez.',
      sections: [
        {
          h2: 'Respecter le lieu, pas le cliché',
          paragraphs: [
            'Ancrage et présence plutôt que pastiche. On travaille l’émotion du foyer — lumière, parcours, matières — dans votre contexte réel.',
          ],
        },
        {
          h2: 'Contraintes à partager tôt',
          paragraphs: [
            'Climat, poussière, humidité, fournisseurs accessibles, délais d’import. Plus vous partagez tôt, plus le plan est actionnable.',
          ],
        },
      ],
      faq: [
        {
          question: 'La mise en place est-elle incluse ?',
          answer:
            'La mise en place physique Najesty est locale au Canada. Pour l’Afrique, nous livrons la direction et le sourcing ; l’installation est chez vous ou via un partenaire local.',
        },
      ],
      cta: {
        title: 'Concevoir depuis l’Afrique',
        body: 'Orientation FR pour cadrer remote design + livrables.',
        label: 'Démarrer à distance',
      },
    },
    en: {
      title: 'Remote interior design for Francophone Africa',
      description:
        'Remote design support for clients in Francophone Africa: place identity, climate, realistic sourcing, visual proof.',
      imageAlt: 'Grounded contemporary design direction',
      answerBlock:
        'Najesty offers remote interior design for clients in Francophone Africa: reading climate and uses, identity without folklore, moodboards and plans approved online. Sourcing adapts to local availability you share.',
      sections: [
        {
          h2: 'Respect the place, not the cliché',
          paragraphs: [
            'Anchoring and presence over pastiche. We work the home’s emotion — light, circulation, materials — in your real context.',
          ],
        },
        {
          h2: 'Constraints to share early',
          paragraphs: [
            'Climate, dust, humidity, reachable suppliers, import lead times. The earlier you share, the more actionable the plan.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is installation included?',
          answer:
            'Najesty physical styling is local to Canada. For Africa we deliver direction and sourcing; installation is yours or via a local partner.',
        },
      ],
      cta: {
        title: 'Design from Africa',
        body: 'FR/EN orientation to frame remote design + deliverables.',
        label: 'Start remotely',
      },
    },
  },
  {
    key: 'budget-forfaits-design',
    slug: { fr: 'budget-design-interieur-forfaits-clairs', en: 'interior-design-budget-clear-packages' },
    category: 'methode',
    audience: 'canada-foyers',
    image: images[9],
    pubDate: '2026-10-12',
    fr: {
      title: 'Budget design d’intérieur : comment lire des forfaits clairs',
      description:
        'Comprendre un budget design d’intérieur au Canada : conception vs achats vs mise en place. Transparence des forfaits Najesty.',
      imageAlt: 'Planification de projet design et budget',
      answerBlock:
        'Un budget design d’intérieur sépare honoraires de conception, budget d’achats mobilier/déco, et coûts de mise en place ou photo. Najesty travaille avec des forfaits clairs sans stock imposé, pour que vous sachiez ce que vous payez à chaque étape.',
      sections: [
        {
          h2: 'Trois enveloppes à ne pas mélanger',
          paragraphs: [
            '1) Conception (temps atelier). 2) Achats (votre argent magasin). 3) Exécution locale (stylisme, livraison, photo). Les confondre crée des mauvaises surprises.',
          ],
        },
        {
          h2: 'Comment Najesty clarifie',
          paragraphs: [
            'Orientation gratuite, puis forfait selon ambition. Pas de stock atelier à écouler. Preuve visuelle avant d’engager les gros postes.',
          ],
        },
      ],
      faq: [
        {
          question: 'Y a-t-il un minimum de projet ?',
          answer:
            'On cadre dès l’orientation si le format consultation, inspiration ou accompagnement complet est le plus juste.',
        },
      ],
      cta: {
        title: 'Clarifier votre enveloppe',
        body: '15 minutes pour aligner ambition et format de forfait.',
        label: 'Parler budget',
      },
    },
    en: {
      title: 'Interior design budget: how to read clear packages',
      description:
        'Understand an interior design budget in Canada: design vs purchases vs styling. Najesty package transparency.',
      imageAlt: 'Design project and budget planning',
      answerBlock:
        'An interior design budget separates design fees, furniture/decoration purchase budget, and on-site styling or photo costs. Najesty works with clear packages and no forced stock, so you know what you pay at each step.',
      sections: [
        {
          h2: 'Three envelopes not to mix',
          paragraphs: [
            '1) Design (studio time). 2) Purchases (your store money). 3) Local execution (styling, delivery, photo). Mixing them creates surprises.',
          ],
        },
        {
          h2: 'How Najesty clarifies',
          paragraphs: [
            'Free orientation, then a package by ambition. No studio stock to clear. Visual proof before committing major spend.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is there a minimum project?',
          answer:
            'In orientation we frame whether consultation, inspiration or full support is the right fit.',
        },
      ],
      cta: {
        title: 'Clarify your envelope',
        body: '15 minutes to align ambition and package format.',
        label: 'Talk budget',
      },
    },
  },
  {
    key: 'erreurs-deco-couteuses',
    slug: { fr: 'erreurs-decoration-qui-coutent-cher', en: 'costly-decoration-mistakes-to-avoid' },
    category: 'pratique',
    audience: 'nouveaux-proprietaires',
    image: images[11],
    pubDate: '2026-10-14',
    fr: {
      title: '7 erreurs de décoration qui coûtent cher (et comment les éviter)',
      description:
        'Erreurs déco fréquentes au Canada : mauvaises tailles, lumière unique, achats avant plan. Checklist Najesty pour protéger votre budget.',
      imageAlt: 'Espace où les proportions et la lumière sont maîtrisées',
      answerBlock:
        'Les erreurs de décoration les plus coûteuses sont d’acheter avant d’avoir un plan, de sous-dimensionner les tapis et rideaux, et de compter sur un seul plafond lumineux. Najesty inverse l’ordre : décision visuelle d’abord, achats ensuite.',
      sections: [
        {
          h2: 'Les 7 pièges',
          paragraphs: ['Chacun semble anodin ; ensemble ils grugent le budget et l’émotion.'],
          list: [
            'Acheter le canapé avant le plan',
            'Tapis trop petit',
            'Rideaux trop courts',
            'Une seule source de lumière',
            'Trop de « petites touches »',
            'Ignorer les axes de circulation',
            'Suivre une tendance hors contexte',
          ],
        },
        {
          h2: 'L’antidote',
          paragraphs: [
            'Moodboard verrouillé, mesures, liste priorisée. Même en remote, cet ordre protège.',
          ],
        },
      ],
      faq: [
        {
          question: 'Je me suis déjà trompé·e : on peut rattraper ?',
          answer:
            'Oui. On part de l’existant (Seconde Vie) et on corrige les leviers à plus fort impact.',
        },
      ],
      cta: {
        title: 'Auditer vos risques',
        body: 'Orientation pour repérer les erreurs avant le prochain achat.',
        label: 'Prévenir plutôt que corriger',
      },
    },
    en: {
      title: '7 decoration mistakes that get expensive (and how to avoid them)',
      description:
        'Common decoration mistakes in Canada: wrong sizes, single light, buying before a plan. Najesty checklist to protect your budget.',
      imageAlt: 'Space with controlled proportions and light',
      answerBlock:
        'The costliest decoration mistakes are buying before a plan, undersizing rugs and curtains, and relying on one ceiling light. Najesty reverses the order: visual decision first, purchases second.',
      sections: [
        {
          h2: 'The 7 traps',
          paragraphs: ['Each looks minor; together they eat budget and emotion.'],
          list: [
            'Buying the sofa before the plan',
            'Rug too small',
            'Curtains too short',
            'A single light source',
            'Too many “little touches”',
            'Ignoring circulation axes',
            'Following a trend out of context',
          ],
        },
        {
          h2: 'The antidote',
          paragraphs: [
            'Locked moodboard, measurements, prioritized list. Even remote, this order protects you.',
          ],
        },
      ],
      faq: [
        {
          question: 'I already made mistakes — can we recover?',
          answer:
            'Yes. We start from what exists (Second Life) and fix the highest-impact levers.',
        },
      ],
      cta: {
        title: 'Audit your risks',
        body: 'Orientation to spot mistakes before the next purchase.',
        label: 'Prevent rather than fix',
      },
    },
  },
  {
    key: 'open-space-zones',
    slug: { fr: 'open-space-definir-zones-sans-murs', en: 'open-plan-define-zones-without-walls' },
    category: 'inspiration',
    audience: 'canada-foyers',
    image: images[12],
    pubDate: '2026-10-15',
    fr: {
      title: 'Open space : définir des zones sans poser de murs',
      description:
        'Structurer un open space résidentiel : tapis, lumière, mobilier dos, hauteurs. Méthode Najesty pour des zones lisibles.',
      imageAlt: 'Espace ouvert avec zones conversation et repas distinctes',
      answerBlock:
        'Dans un open space, les zones se définissent sans murs grâce aux tapis, aux suspensions, aux dos de meubles et aux changements de hauteur visuelle. Najesty dessine d’abord le parcours, puis place les ancrages pour que chaque usage se lise clairement.',
      sections: [
        {
          h2: 'Outils de zonage soft',
          paragraphs: [
            'Suspension au-dessus de la table, tapis sous la conversation, console dos canapé, bibliothèque ajourée. Chacun signale une frontière sans fermer.',
          ],
        },
        {
          h2: 'Erreur : tout aligner au mur',
          paragraphs: [
            'Coller tout le mobilier aux périphéries tue le volume. Des îlots (même légers) créent du rythme.',
          ],
        },
      ],
      faq: [
        {
          question: 'Et le bruit entre cuisine et salon ?',
          answer:
            'Textiles, tapis et placement des sièges aident. Parfois un demi- Cloison ou garde-manger est juste — on l’évalue au plan.',
        },
      ],
      cta: {
        title: 'Lire votre open space',
        body: 'Plan de zones + moodboard pour un volume qui respire.',
        label: 'Demander un plan',
      },
    },
    en: {
      title: 'Open plan: define zones without building walls',
      description:
        'Structure a residential open plan: rugs, light, furniture backs, heights. Najesty method for readable zones.',
      imageAlt: 'Open space with distinct conversation and dining zones',
      answerBlock:
        'In an open plan, zones are defined without walls using rugs, pendants, furniture backs and visual height changes. Najesty draws circulation first, then places anchors so every use reads clearly.',
      sections: [
        {
          h2: 'Soft zoning tools',
          paragraphs: [
            'Pendant over the table, rug under conversation, console behind sofa, open shelving. Each signals a border without closing.',
          ],
        },
        {
          h2: 'Mistake: lining everything on the wall',
          paragraphs: [
            'Pushing all furniture to the perimeter kills volume. Islands (even light ones) create rhythm.',
          ],
        },
      ],
      faq: [
        {
          question: 'What about noise between kitchen and living?',
          answer:
            'Textiles, rugs and seat placement help. Sometimes a half-wall or pantry is right — we assess it on plan.',
        },
      ],
      cta: {
        title: 'Read your open plan',
        body: 'Zone plan + moodboard for a volume that breathes.',
        label: 'Request a plan',
      },
    },
  },
  {
    key: 'cuisine-circulation-emotion',
    slug: { fr: 'cuisine-circulation-et-emotion', en: 'kitchen-circulation-and-emotion' },
    category: 'decoration',
    audience: 'canada-foyers',
    image: images[13],
    pubDate: '2026-10-16',
    fr: {
      title: 'Cuisine : circulation efficace et émotion au quotidien',
      description:
        'Design de cuisine résidentielle : triangle de travail, lumière, matières au toucher. Najesty lie usage et sensation.',
      imageAlt: 'Cuisine lumineuse avec parcours fluide',
      answerBlock:
        'Une cuisine réussie allie circulation claire (préparation, cuisson, lavage) et émotion quotidienne : lumière de travail, matières agréables au toucher, points de pause. Najesty traite la cuisine comme un lieu de vie, pas seulement un plan technique.',
      sections: [
        {
          h2: 'Parcours avant électroménager',
          paragraphs: [
            'Validez les flux avant de tomber amoureux d’un îlot XXL. Un beau plan qui bloque deux personnes en cuisine n’est pas un beau plan.',
          ],
        },
        {
          h2: 'Détails qui changent le ressenti',
          paragraphs: [
            'Bandeau lumineux, poignées, textile de fenêtre, siège pour un café. Ce sont ces gestes qui font « se sentir ».',
          ],
        },
      ],
      faq: [
        {
          question: 'Îlot ou pas ?',
          answer:
            'Seulement si le dégagement autour reste confortable. Sinon, une table ou un peninsula est plus juste.',
        },
      ],
      cta: {
        title: 'Repenser votre cuisine',
        body: 'Lecture usages + direction matières/lumière, même sans rénovation lourde.',
        label: 'Parler cuisine',
      },
    },
    en: {
      title: 'Kitchen: efficient circulation and everyday emotion',
      description:
        'Residential kitchen design: work triangle, light, materials to the touch. Najesty links use and feeling.',
      imageAlt: 'Bright kitchen with fluid circulation',
      answerBlock:
        'A successful kitchen combines clear circulation (prep, cook, wash) and everyday emotion: task light, pleasant materials, pause points. Najesty treats the kitchen as a living place, not only a technical plan.',
      sections: [
        {
          h2: 'Circulation before appliances',
          paragraphs: [
            'Validate flows before falling for an XXL island. A beautiful plan that blocks two cooks is not a beautiful plan.',
          ],
        },
        {
          h2: 'Details that change feeling',
          paragraphs: [
            'Under-cabinet light, hardware, window textile, a seat for coffee. Those gestures make a space “feel.”',
          ],
        },
      ],
      faq: [
        {
          question: 'Island or not?',
          answer:
            'Only if clearance around it stays comfortable. Otherwise a table or peninsula is smarter.',
        },
      ],
      cta: {
        title: 'Rethink your kitchen',
        body: 'Use reading + materials/light direction, even without a heavy reno.',
        label: 'Talk kitchen',
      },
    },
  },
  {
    key: 'chambre-parentale-sanctuaire',
    slug: { fr: 'chambre-parentale-design-sanctuaire', en: 'primary-bedroom-sanctuary-design' },
    category: 'decoration',
    audience: 'canada-foyers',
    image: images[3],
    pubDate: '2026-10-17',
    fr: {
      title: 'Chambre parentale : designer un sanctuaire (sans cliché spa)',
      description:
        'Chambre parentale au Canada : obscurité, textiles, rangement discret, lumière douce. Approche sanctuary Najesty.',
      imageAlt: 'Chambre parentale apaisée, lumière tamisée',
      answerBlock:
        'Une chambre parentale sanctuaire priorise obscurcissement, textiles absorbants, rangement hors-vue et lumière basse. Najesty évite le cliché « spa hotel » : on cherche le calme aligné à votre rythme de vie réel.',
      sections: [
        {
          h2: 'Hiérarchie des besoins',
          paragraphs: [
            'Dormir > ranger sans bruit visuel > s’habiller facilement > esthétique. Inverser cet ordre crée des chambres Instagram inutilisables.',
          ],
        },
        {
          h2: 'Couleurs et matières',
          paragraphs: [
            'Neutres enveloppants, bois, lin. Une note plus sombre peut aider à « fermer » la journée en climat nordique.',
          ],
        },
      ],
      faq: [
        {
          question: 'TV dans la chambre ?',
          answer:
            'Si oui, l’intégrer sans qu’elle domine le mur principal. Sinon, mieux hors chambre pour protéger le sommeil.',
        },
      ],
      cta: {
        title: 'Recréer le calme',
        body: 'Direction chambre : lumière, textiles, parcours matin/soir.',
        label: 'Travailler la chambre',
      },
    },
    en: {
      title: 'Primary bedroom: design a sanctuary (without spa cliché)',
      description:
        'Primary bedroom in Canada: blackout, textiles, discreet storage, soft light. Najesty sanctuary approach.',
      imageAlt: 'Calm primary bedroom with soft light',
      answerBlock:
        'A sanctuary primary bedroom prioritizes blackout, absorbent textiles, out-of-sight storage and low light. Najesty avoids the “hotel spa” cliché: we seek calm aligned to your real life rhythm.',
      sections: [
        {
          h2: 'Needs hierarchy',
          paragraphs: [
            'Sleep > quiet visual storage > easy dressing > aesthetics. Reversing that order creates unusable Instagram bedrooms.',
          ],
        },
        {
          h2: 'Colour and materials',
          paragraphs: [
            'Wrapping neutrals, wood, linen. A deeper note can help “close” the day in a northern climate.',
          ],
        },
      ],
      faq: [
        {
          question: 'TV in the bedroom?',
          answer:
            'If yes, integrate it so it does not dominate the main wall. Otherwise, better outside the room to protect sleep.',
        },
      ],
      cta: {
        title: 'Rebuild calm',
        body: 'Bedroom direction: light, textiles, morning/evening circulation.',
        label: 'Work on the bedroom',
      },
    },
  },
  {
    key: 'entree-premier-regard',
    slug: { fr: 'entree-home-staging-premier-regard', en: 'entryway-home-staging-first-impression' },
    category: 'home-staging',
    audience: 'vendeurs',
    image: images[14],
    pubDate: '2026-10-18',
    fr: {
      title: 'Entrée et premier regard : le détail qui décide en home staging',
      description:
        'Home staging de l’entrée : désencombrer, éclairer, sentir l’accueil en 3 secondes. Checklist Najesty pour vendeurs.',
      imageAlt: 'Entrée résidentielle claire et accueillante',
      answerBlock:
        'En home staging, l’entrée décide souvent de la suite de la visite. Najesty la traite comme une scène : sol dégagé, lumière chaude, un seul geste d’accueil, rangement fermé. Le premier regard doit promettre un parcours fluide.',
      sections: [
        {
          h2: 'Checklist entrée (15 minutes utiles)',
          paragraphs: ['Avant toute visite ou shooting :'],
          list: [
            'Retirer chaussures et sacs visibles',
            'Nettoyer les surfaces horizontales',
            'Une lampe ou un plafonnier doux',
            'Miroir utile, pas décoratif excessif',
            'Odeur neutre (pas d’encens saturant)',
          ],
        },
        {
          h2: 'Lien avec le reste du parcours',
          paragraphs: [
            'L’entrée annonce le salon. Si le contraste est trop brutal (entrée soignée, salon saturé), l’acheteur sent l’incohérence.',
          ],
        },
      ],
      faq: [
        {
          question: 'Petite entrée de condo ?',
          answer:
            'Encore plus critique. Moins d’objets, plus de verticalité et une lumière franche.',
        },
      ],
      cta: {
        title: 'Soigner la première image',
        body: 'Staging entrée + photo pour annonces percutantes.',
        label: 'Préparer les visites',
      },
    },
    en: {
      title: 'Entryway and first glance: the staging detail that decides',
      description:
        'Entryway home staging: declutter, light, feel welcome in 3 seconds. Najesty checklist for sellers.',
      imageAlt: 'Clear, welcoming residential entry',
      answerBlock:
        'In home staging, the entry often decides the rest of the visit. Najesty treats it as a scene: clear floor, warm light, one welcome gesture, closed storage. The first glance must promise fluid circulation.',
      sections: [
        {
          h2: 'Entry checklist (15 useful minutes)',
          paragraphs: ['Before any visit or shoot:'],
          list: [
            'Remove visible shoes and bags',
            'Clear horizontal surfaces',
            'One soft lamp or ceiling light',
            'Useful mirror, not excessive décor',
            'Neutral scent (no heavy incense)',
          ],
        },
        {
          h2: 'Link to the rest of the path',
          paragraphs: [
            'The entry announces the living room. If contrast is too brutal (polished entry, saturated living), buyers feel incoherence.',
          ],
        },
      ],
      faq: [
        {
          question: 'Tiny condo entry?',
          answer:
            'Even more critical. Fewer objects, more verticality and frank light.',
        },
      ],
      cta: {
        title: 'Polish the first image',
        body: 'Entry staging + photo for sharper listings.',
        label: 'Prepare viewings',
      },
    },
  },
  {
    key: 'identite-sans-folklore',
    slug: { fr: 'trouver-identite-deco-sans-folklore', en: 'find-decor-identity-without-folklore' },
    category: 'inspiration',
    audience: 'canada-foyers',
    image: images[7],
    pubDate: '2026-10-19',
    fr: {
      title: 'Trouver son identité déco sans folklore ni catalogue générique',
      description:
        'Identité d’intérieur au Canada : marqueurs personnels, ancrage local sans pastiche. Vision Najesty « Gens du pays ».',
      imageAlt: 'Intérieur ancré au Canada avec présence contemporaine',
      answerBlock:
        'Trouver son identité déco, c’est conjuguer usages, mémoire et matières — pas copier un style Pinterest. Najesty cherche des marqueurs personnels et un ancrage canadien sans folklore, pour un lieu qui vous ressemble vraiment.',
      sections: [
        {
          h2: 'Questions qui révèlent l’identité',
          paragraphs: [
            'Où vous asseyiez-vous le dimanche ? Quelle lumière vous calme ? Quels objets ont une histoire ? Ces réponses battent n’importe quel « style scandinave ».',
          ],
        },
        {
          h2: 'Ancrage vs pastiche',
          paragraphs: [
            'Une présence locale peut être une essence de bois, une artisanat, une vue — pas une accumulation de symboles. Moins, mais vrai.',
          ],
        },
      ],
      faq: [
        {
          question: 'Couple avec goûts opposés ?',
          answer:
            'On construit une plateforme commune (émotion + interdits), puis des zones d’expression. Le conflit devient brief.',
        },
      ],
      cta: {
        title: 'Nommer votre territoire',
        body: 'Atelier d’identité + moodboard pour sortir du générique.',
        label: 'Définir l’identité',
      },
    },
    en: {
      title: 'Find your décor identity without folklore or generic catalogues',
      description:
        'Interior identity in Canada: personal markers, local anchoring without pastiche. Najesty’s “people of the land” vision.',
      imageAlt: 'Canada-anchored interior with contemporary presence',
      answerBlock:
        'Finding décor identity means combining uses, memory and materials — not copying a Pinterest style. Najesty seeks personal markers and Canadian anchoring without folklore, for a place that truly feels like you.',
      sections: [
        {
          h2: 'Questions that reveal identity',
          paragraphs: [
            'Where do you sit on Sundays? Which light calms you? Which objects hold a story? Those answers beat any “Scandinavian style” label.',
          ],
        },
        {
          h2: 'Anchoring vs pastiche',
          paragraphs: [
            'Local presence can be a wood species, a craft, a view — not a pile of symbols. Less, but true.',
          ],
        },
      ],
      faq: [
        {
          question: 'Couple with opposite tastes?',
          answer:
            'We build a shared platform (emotion + no-gos), then expression zones. Conflict becomes brief.',
        },
      ],
      cta: {
        title: 'Name your territory',
        body: 'Identity workshop + moodboard to leave the generic behind.',
        label: 'Define identity',
      },
    },
  },
  {
    key: 'lire-avant-apres',
    slug: { fr: 'lire-un-espace-avant-apres-design', en: 'how-to-read-before-after-interior-design' },
    category: 'methode',
    audience: 'canada-foyers',
    image: images[0],
    pubDate: '2026-10-20',
    fr: {
      title: 'Avant / après : comment lire vraiment un espace transformé',
      description:
        'Lire un avant/après design d’intérieur : parcours, lumière, densité, émotion. Grille d’analyse Najesty au-delà du « wow ».',
      imageAlt: 'Transformation intérieure documentée en images',
      answerBlock:
        'Pour lire un avant/après design, comparez parcours, lumière, densité d’objets et émotion dominante — pas seulement la couleur des murs. Najesty documente ces preuves pour que la transformation soit mesurable, pas seulement photogénique.',
      sections: [
        {
          h2: 'Grille en 4 points',
          paragraphs: ['Utilisez-la sur vos propres photos ou celles d’un portfolio.'],
          list: [
            'Parcours : est-ce plus fluide ?',
            'Lumière : couches et direction',
            'Densité : moins de bruit visuel ?',
            'Émotion : calme, chaleur, ouverture ?',
          ],
        },
        {
          h2: 'Pourquoi Najesty photographie les étapes',
          paragraphs: [
            'La preuve visuelle réduit le doute en cours de projet. Vous validez sur image, pas sur promesse vague.',
          ],
        },
      ],
      faq: [
        {
          question: 'Un beau after suffit-il ?',
          answer:
            'Non. Un after beau mais illisible en usage réel est un échec. L’usage reste le juge.',
        },
      ],
      cta: {
        title: 'Documenter votre transformation',
        body: 'Projet avec preuves avant / pendant / après.',
        label: 'Voir la méthode',
      },
    },
    en: {
      title: 'Before / after: how to really read a transformed space',
      description:
        'Read an interior design before/after: circulation, light, density, emotion. Najesty’s analysis grid beyond “wow.”',
      imageAlt: 'Interior transformation documented in images',
      answerBlock:
        'To read a design before/after, compare circulation, light, object density and dominant emotion — not only wall colour. Najesty documents that proof so transformation is measurable, not only photogenic.',
      sections: [
        {
          h2: '4-point grid',
          paragraphs: ['Use it on your own photos or a portfolio.'],
          list: [
            'Circulation: more fluid?',
            'Light: layers and direction',
            'Density: less visual noise?',
            'Emotion: calm, warmth, openness?',
          ],
        },
        {
          h2: 'Why Najesty photographs milestones',
          paragraphs: [
            'Visual proof reduces doubt mid-project. You approve on image, not vague promise.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is a pretty after enough?',
          answer:
            'No. A pretty after that fails real use is a failure. Use remains the judge.',
        },
      ],
      cta: {
        title: 'Document your transformation',
        body: 'Project with before / during / after proof.',
        label: 'See the method',
      },
    },
  },
  {
    key: 'airbnb-hospitalite-stylisme',
    slug: { fr: 'stylisme-airbnb-hospitalite-qui-convertit', en: 'airbnb-hospitality-styling-that-converts' },
    category: 'home-staging',
    audience: 'hospitalite',
    image: images[4],
    pubDate: '2026-10-21',
    fr: {
      title: 'Stylisme Airbnb et hospitalité : un décor qui convertit les réservations',
      description:
        'Stylisme pour locations courte durée et petits lieux d’hospitalité au Canada : photos, parcours, durabilité d’usage. Najesty.',
      imageAlt: 'Espace hospitalité stylisé prêt à photographier',
      answerBlock:
        'Pour l’hospitalité et l’Airbnb, le stylisme doit convertir en photo tout en résistant à l’usage intensif. Najesty aligne parcours clair, matériaux durables et shooting : l’annonce attire, le séjour confirme.',
      sections: [
        {
          h2: 'Photo d’abord, mais pas seulement',
          paragraphs: [
            'L’annonce vit sur les images. Pourtant un décor fragile se dégrade en 3 locations. On choisit beau ET tenable.',
          ],
        },
        {
          h2: 'Signaux de confiance',
          paragraphs: [
            'Rangement visible pour les voyageurs, lumière de nuit, textiles lavables, zones photo-ready sans faux luxe.',
          ],
        },
      ],
      faq: [
        {
          question: 'Différence avec le home staging vente ?',
          answer:
            'La vente neutralise pour projection acheteur. L’hospitalité incarne une expérience répétée. Les briefs divergent.',
        },
      ],
      cta: {
        title: 'Booster votre taux de clic',
        body: 'Stylisme + photo pour annonces hospitalité.',
        label: 'Parler hospitalité',
      },
    },
    en: {
      title: 'Airbnb and hospitality styling: décor that converts bookings',
      description:
        'Styling for short-term rentals and small hospitality spaces in Canada: photos, circulation, durable use. Najesty.',
      imageAlt: 'Styled hospitality space ready to photograph',
      answerBlock:
        'For hospitality and Airbnb, styling must convert in photos while surviving intense use. Najesty aligns clear circulation, durable materials and shooting: the listing attracts, the stay confirms.',
      sections: [
        {
          h2: 'Photo first, but not only',
          paragraphs: [
            'The listing lives on images. Yet fragile décor fails after three stays. We choose beautiful AND durable.',
          ],
        },
        {
          h2: 'Trust signals',
          paragraphs: [
            'Visible guest storage, night lighting, washable textiles, photo-ready zones without fake luxury.',
          ],
        },
      ],
      faq: [
        {
          question: 'How is this different from sale staging?',
          answer:
            'Sale staging neutralizes for buyer projection. Hospitality embodies a repeatable experience. Briefs diverge.',
        },
      ],
      cta: {
        title: 'Boost your click-through',
        body: 'Styling + photo for hospitality listings.',
        label: 'Talk hospitality',
      },
    },
  },
  {
    key: 'checklist-demenagement',
    slug: { fr: 'checklist-demenagement-nouvel-amenagement', en: 'moving-checklist-new-layout-plan' },
    category: 'pratique',
    audience: 'nouveaux-proprietaires',
    image: images[14],
    pubDate: '2026-10-22',
    fr: {
      title: 'Checklist déménagement + nouvel aménagement : ne pas tout racheter',
      description:
        'Déménager au Canada sans recommencer de zéro : inventaire, plan, tri, timing d’achats. Checklist design Najesty.',
      imageAlt: 'Nouveau foyer en cours d’aménagement',
      answerBlock:
        'Une checklist déménagement orientée design commence par l’inventaire de ce qui traverse le déménagement, puis un plan du nouveau lieu, puis le tri, puis les achats manquants. Najesty évite le réflexe « tout racheter » qui vide le budget la première semaine.',
      sections: [
        {
          h2: 'Ordre anti-gaspillage',
          paragraphs: ['Inventaire → mesures du nouveau lieu → plan → tri → liste d’achats phasée.'],
        },
        {
          h2: 'Ce qu’il faut mesurer avant le jour J',
          paragraphs: [
            'Portes, cages d’escalier, places de stationnement, prises, fenêtres. Un canapé bloqué dans l’escalier coûte cher en stress.',
          ],
        },
      ],
      faq: [
        {
          question: 'Peut-on concevoir avant d’avoir les clés ?',
          answer:
            'Oui, avec plans ou mesures fiables. Le remote Najesty est fait pour ça.',
        },
      ],
      cta: {
        title: 'Préparer le nouveau chapitre',
        body: 'Plan d’aménagement avant les cartons pour acheter juste.',
        label: 'Anticiper avec Najesty',
      },
    },
    en: {
      title: 'Moving checklist + new layout: do not repurchase everything',
      description:
        'Moving in Canada without starting from zero: inventory, plan, edit, purchase timing. Najesty design checklist.',
      imageAlt: 'New home being furnished',
      answerBlock:
        'A design-led moving checklist starts with inventory of what crosses the move, then a plan of the new place, then editing, then missing purchases. Najesty avoids the “buy everything new” reflex that drains budget in week one.',
      sections: [
        {
          h2: 'Anti-waste order',
          paragraphs: ['Inventory → new-place measurements → plan → edit → phased shopping list.'],
        },
        {
          h2: 'What to measure before moving day',
          paragraphs: [
            'Doors, stairwells, parking, outlets, windows. A sofa stuck in the stairwell is expensive stress.',
          ],
        },
      ],
      faq: [
        {
          question: 'Can we design before we have the keys?',
          answer:
            'Yes, with reliable plans or measurements. Najesty remote is built for that.',
        },
      ],
      cta: {
        title: 'Prepare the new chapter',
        body: 'Layout plan before boxes so you buy right.',
        label: 'Plan ahead with Najesty',
      },
    },
  },
  {
    key: 'espace-qui-se-sent-faq',
    slug: { fr: 'espace-qui-se-sent-faq-design-emotionnel', en: 'spaces-you-feel-emotional-design-faq' },
    category: 'inspiration',
    audience: 'canada-foyers',
    image: images[0],
    pubDate: '2026-10-24',
    fr: {
      title: 'L’espace qui se sent : FAQ du design émotionnel Najesty',
      description:
        'FAQ design émotionnel : que signifie « se sentir avant de se décrire », comment on mesure l’émotion, rôle de la preuve visuelle. Najesty.',
      imageAlt: 'Intérieur Najesty centré sur l’émotion du lieu',
      answerBlock:
        '« Un espace qui se sent » signifie qu’on perçoit d’abord une émotion (calme, chaleur, ouverture) avant de pouvoir lister les meubles. Najesty construit cette émotion via identité, parcours, lumière et matières, avec preuve visuelle à chaque décision.',
      sections: [
        {
          h2: 'Ce n’est pas du flou marketing',
          paragraphs: [
            'L’émotion se traduit en choix concrets : hauteur de suspension, densité du textile, axe vers la fenêtre. Si ça ne se décide pas, ce n’est pas encore du design.',
          ],
        },
        {
          h2: 'Comment on la « mesure »',
          paragraphs: [
            'Par validation client sur images, par cohérence du parcours, par réduction du doute à l’achat. La photo avant/après documente le delta.',
          ],
        },
        {
          h2: 'Pour qui cette approche',
          paragraphs: [
            'Foyers au Canada, décideurs en Europe et en Afrique en remote, vendeurs qui veulent un staging incarné — pas générique.',
          ],
        },
      ],
      faq: [
        {
          question: 'Design émotionnel = plus cher ?',
          answer:
            'Il évite surtout les achats inutiles. Le coût vient du niveau d’ambition, pas du mot émotion.',
        },
        {
          question: 'Par où commencer ?',
          answer:
            'Une orientation de 15 minutes pour nommer l’émotion cible et le format (remote / local).',
        },
      ],
      cta: {
        title: 'Mettre l’émotion au cœur',
        body: 'Parlons de votre espace — Canada, Europe ou Afrique.',
        label: 'Contacter Najesty',
      },
    },
    en: {
      title: 'Spaces you feel: Najesty emotional design FAQ',
      description:
        'Emotional design FAQ: what “feel before you describe” means, how emotion is measured, role of visual proof. Najesty.',
      imageAlt: 'Najesty interior centred on the emotion of place',
      answerBlock:
        '“A space you feel” means you perceive an emotion first (calm, warmth, openness) before you can list the furniture. Najesty builds that emotion through identity, circulation, light and materials, with visual proof at every decision.',
      sections: [
        {
          h2: 'It is not marketing fog',
          paragraphs: [
            'Emotion translates into concrete choices: pendant height, textile density, axis to the window. If it cannot be decided, it is not design yet.',
          ],
        },
        {
          h2: 'How we “measure” it',
          paragraphs: [
            'Through client validation on images, circulation coherence, reduced purchase doubt. Before/after photos document the delta.',
          ],
        },
        {
          h2: 'Who this approach is for',
          paragraphs: [
            'Homes in Canada, decision-makers in Europe and Africa via remote, sellers who want embodied staging — not generic.',
          ],
        },
      ],
      faq: [
        {
          question: 'Is emotional design more expensive?',
          answer:
            'It mainly prevents useless purchases. Cost comes from ambition level, not the word emotion.',
        },
        {
          question: 'Where to start?',
          answer:
            'A 15-minute orientation to name target emotion and format (remote / on-site).',
        },
      ],
      cta: {
        title: 'Put emotion at the centre',
        body: 'Let’s talk about your space — Canada, Europe or Africa.',
        label: 'Contact Najesty',
      },
    },
  },
];

function esc(str) {
  return str
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$\{/g, '\\${');
}

function sectionToTs(section) {
  const list = section.list
    ? `,\n      list: ${JSON.stringify(section.list, null, 6).replace(/\n/g, '\n      ')}`
    : '';
  const paras = section.paragraphs.map((p) => `\`${esc(p)}\``).join(',\n        ');
  return `{
      h2: \`${esc(section.h2)}\`,
      paragraphs: [
        ${paras}
      ]${list}
    }`;
}

function faqToTs(faq) {
  return faq
    .map(
      (f) => `{
      question: \`${esc(f.question)}\`,
      answer: \`${esc(f.answer)}\`,
    }`,
    )
    .join(',\n    ');
}

function buildLocaleFile(locale) {
  const items = posts.map((p, i) => {
    const L = p[locale];
    const slug = p.slug[locale];
    const reading = Math.max(4, Math.round(
      (L.answerBlock.length +
        L.sections.reduce(
          (n, s) =>
            n +
            s.h2.length +
            s.paragraphs.join(' ').length +
            (s.list ? s.list.join(' ').length : 0),
          0,
        )) /
        900,
    ));
    return `  {
    key: '${p.key}',
    slug: '${slug}',
    locale: '${locale}',
    title: \`${esc(L.title)}\`,
    description: \`${esc(L.description)}\`,
    pubDate: '${p.pubDate}',
    updatedDate: '2026-10-25',
    category: '${p.category}',
    audience: '${p.audience}',
    image: '${p.image}',
    imageAlt: \`${esc(L.imageAlt)}\`,
    readingMinutes: ${reading},
    answerBlock: \`${esc(L.answerBlock)}\`,
    sections: [
    ${L.sections.map(sectionToTs).join(',\n    ')}
    ],
    faq: [
    ${faqToTs(L.faq)}
    ],
    cta: {
      title: \`${esc(L.cta.title)}\`,
      body: \`${esc(L.cta.body)}\`,
      label: \`${esc(L.cta.label)}\`,
    },
  }`;
  });

  return `import type { BlogPost } from './types';

/** ${posts.length} articles ${locale.toUpperCase()} — cibles Najesty (Canada, Europe, Afrique, vendeurs, hospitalité) */
export const blogPosts${locale === 'fr' ? 'Fr' : 'En'}: BlogPost[] = [
${items.join(',\n')}
];
`;
}

fs.mkdirSync(outDir, { recursive: true });
fs.writeFileSync(path.join(outDir, 'fr.ts'), buildLocaleFile('fr'), 'utf8');
fs.writeFileSync(path.join(outDir, 'en.ts'), buildLocaleFile('en'), 'utf8');
console.log(`Wrote ${posts.length} FR + ${posts.length} EN posts to ${outDir}`);
