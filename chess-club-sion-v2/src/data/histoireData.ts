// --- Définition des interfaces pour un typage strict ---
export interface HistoryBlock {
  title: string;
  content: string;
}

export interface Personality {
  name: string;
  bio: string;
}

export interface Achievement {
  year: string;
  title: string;
}

export interface PlayerAchievement {
  name: string;
  achievements: Achievement[];
}

export interface President {
  period: string;
  name: string;
  isCurrent?: boolean;
}

export interface HallOfFamePlayer {
  name: string;
  title: string;
  elo: string;
}

export interface HonoraryMember {
  name: string;
}

export interface ArchiveImage {
  id: string;
  src: string;
  title: string;
  description?: string;
  date?: string;
  event?: string;
}


// --- Structures de données pour le contenu ---

export const archiveImages: ArchiveImage[] = [
  // CSE 2002
  {
    id: 'cse-2002-1a',
    src: '/picture/gallery/CSE_2002/cse20021a.jpg',
    title: 'Position difficile contre Fribourg',
    description: 'Analyse intense durant le match Sion I - Fribourg en Championnat Suisse par Équipes.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1b',
    src: '/picture/gallery/CSE_2002/cse20021b.jpg',
    title: 'Julien Carron en pleine concentration',
    description: 'Julien Carron, absorbé par sa partie lors du Championnat Suisse.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1h',
    src: '/picture/gallery/CSE_2002/cse20021h.jpg',
    title: 'Vue d\'ensemble du match',
    description: 'La salle de jeu lors de la rencontre Sion I - Fribourg.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2a',
    src: '/picture/gallery/CSE_2002/cse20022a.jpg',
    title: 'Le capitaine en action',
    description: 'Match à l\'extérieur contre Lausanne Le Joueur.',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2j',
    src: '/picture/gallery/CSE_2002/cse20022j.jpg',
    title: 'Un coup de Maître',
    description: 'C\'est dans cette position que Pascal jouera le coup de GM d6-d5 !',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },

  // CVE 2000
  {
    id: 'cve-2000-3',
    src: '/picture/gallery/CVE/cve2000-3.jpg',
    title: 'Sion II promu en groupe A',
    description: 'L\'équipe Sion II (Olivier Crettenand, David Campanile, Eder et Renzo Cerda) célèbre sa promotion en 2000.',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2000-4',
    src: '/picture/gallery/CVE/cve2000-4.jpg',
    title: 'Fair-play avec Martigny I',
    description: 'L\'équipe Sion II pose avec les vainqueurs du groupe A, Martigny I.',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },

  // AG 1998
  {
    id: 'ag-1998-jmp',
    src: '/picture/gallery/AG/ag98jmp.jpg',
    title: 'Le Président Jean-Michel Paladini',
    description: 'Le président prépare son discours lors de l\'Assemblée Générale de 1998.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },
  {
    id: 'ag-1998-pg',
    src: '/picture/gallery/AG/ag98pg.jpg',
    title: 'Le Trésorier Pascal Grand',
    description: 'Pascal Grand, trésorier, attentif au discours du président.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },
  {
    id: 'ag-1998-fc',
    src: '/picture/gallery/AG/ag98fc.jpg',
    title: 'Fritz Karafiat, responsable interne',
    description: 'Fritz Karafiat, dévoué aux jeunes du club.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },

  // Local du club
  { id: 'local-1', src: '/picture/gallery/Local/local1.jpg', title: 'Le bâtiment du club', description: 'Vue extérieure du bâtiment (nous sommes au dernier étage).', event: 'Local du Club (avant 2006)' },
  { id: 'local-2', src: '/picture/gallery/Local/local2.jpg', title: 'Le bâtiment du club, autre vue', description: 'Une autre perspective de notre local historique.', event: 'Local du Club (avant 2006)' },
  { id: 'local-3', src: '/picture/gallery/Local/local3.jpg', title: 'L\'entrée des gladiateurs', description: 'Après la porte d\'entrée, il ne reste plus que 64 marches à grimper.', event: 'Local du Club (avant 2006)' },
  { id: 'local-4', src: '/picture/gallery/Local/local4.jpg', title: 'Salle secondaire', description: 'La salle secondaire, avant la grande rénovation de 2006.', event: 'Local du Club (avant 2006)' },
  { id: 'local-5', src: '/picture/gallery/Local/local5.jpg', title: 'Salle de jeu principale', description: 'La salle principale et son charme d\'antan, avant la rénovation de 2006.', event: 'Local du Club (avant 2006)' },

  // Simultanée Kortchnoi 2000
  { id: 'kortchnoi-2000-a', src: '/picture/gallery/Simultanee/Korchnoi/k2000a.jpg', title: 'Face au Maître', description: 'De vaillants compétiteurs face au légendaire Viktor Kortchnoi.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-b', src: '/picture/gallery/Simultanee/Korchnoi/k2000b.jpg', title: 'Le regard du Maître', description: 'Le grand maître Viktor Kortchnoi en pleine contemplation.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-c', src: '/picture/gallery/Simultanee/Korchnoi/k2000c.jpg', title: 'Kortchnoi contre Gilles Terreaux', description: 'Viktor Kortchnoi face à notre membre Gilles Terreaux.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-e', src: '/picture/gallery/Simultanee/Korchnoi/k2000e.jpg', title: 'La jeunesse s\'interroge', description: 'Eddy Beney, son fils et Olivier Crettenand face à un problème posé par le GMI.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-f', src: '/picture/gallery/Simultanee/Korchnoi/k2000f.jpg', title: 'Une poussée vigoureuse', description: 'Jean-Yves Riand et Léonard Besse en pleine collaboration contre Viktor Kortchnoi.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-g', src: '/picture/gallery/Simultanee/Korchnoi/k2000g.jpg', title: 'Moment de réflexion', description: 'Kortchnoi analyse la position face à Jean-Yves Riand.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-h', src: '/picture/gallery/Simultanee/Korchnoi/k2000h.jpg', title: 'Le Maître et ses adversaires', description: 'Kortchnoi se penche sur une position complexe.', date: '2000', event: 'Simultanée Kortchnoi' },

  // Simultanée Nemet Ivan
  { id: 'nemet-ivan-2005', src: '/picture/gallery/Simultanee/Nemet/simnemet.jpg', title: 'Simultanée d\'Ivan Nemet', description: 'Le GMI Ivan Nemet, Champion Suisse 1990, lors d\'une simultanée.', date: '2005', event: 'Simultanée Nemet Ivan' },

  // Championnat blitz par paires 2000
  {
    id: 'blitz-2000-1',
    src: '/picture/gallery/Blitz/blitzp2-2000.jpg',
    title: 'La vieille garde en action',
    description: 'La paire expérimentée formée par Pierre-Marie Rappaz et Jean-Yves Riand.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-2',
    src: '/picture/gallery/Blitz/blitzp3-2000.jpg',
    title: 'Prix Junior pour Carron & Campanile',
    description: 'La paire de jeunes talents, Julien Carron et David Campanile, remporte le premier prix junior.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-3',
    src: '/picture/gallery/Blitz/blitzp4-2000.jpg',
    title: 'Association inter-club',
    description: 'La paire formée de Gilles Terreaux et Jean-Paul Moret lors du tournoi.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-4',
    src: '/picture/gallery/Blitz/blitzp5-2000.jpg',
    title: 'Pause publicitaire',
    description: 'Après le garage Mistral, une page de pub pour Coca Cola...',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },

  // Championnat Valaisan 1979
  { id: 'cv-1979-gt', src: '/picture/gallery/Championnat_Valaisan/gt79.jpg', title: 'Gilles Terreaux, Champion 1979', description: 'Gilles Terreaux, vainqueur du championnat toutes catégories confondues en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },
  { id: 'cv-1979-pg', src: '/picture/gallery/Championnat_Valaisan/pg79.jpg', title: 'Pascal Grand, Champion du tournoi 2', description: 'Pascal Grand, champion valaisan du tournoi 2 en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },
  { id: 'cv-1979-jmp', src: '/picture/gallery/Championnat_Valaisan/jmp79.jpg', title: 'Jean-Michel Paladini, Champion Junior', description: 'Jean-Michel Paladini, sacré champion valaisan junior en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },

  // Fête des promotions 2001
  { id: 'promo-2001-f1', src: '/picture/gallery/Promotion_2001/promo2001-f1.jpg', title: 'Célébration des promotions', description: 'Des membres du club lors de la fête des promotions de Sion I & II.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f2', src: '/picture/gallery/Promotion_2001/promo2001-f2.jpg', title: 'Le banquet des champions', description: 'Plusieurs membres, dont Eddy Beney à gauche, partagent un repas.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f3', src: '/picture/gallery/Promotion_2001/promo2001-f3.jpg', title: 'Un moment convivial', description: 'Les promotions de Sion I & II sont dignement arrosées.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f4', src: '/picture/gallery/Promotion_2001/promo2001-f4.jpg', title: 'La tablée des joueurs', description: 'Plusieurs membres, dont Julien Carron tout à gauche, célèbrent la montée.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f5', src: '/picture/gallery/Promotion_2001/promo2001-f5.jpg', title: 'Souvenirs de promotion', description: 'Plusieurs membres, dont Jean-Yves Riand à gauche.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f6', src: '/picture/gallery/Promotion_2001/promo2001-f6.jpg', title: 'Vue d\'ensemble de la fête', description: 'Une grande tablée pour une grande occasion.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f7', src: '/picture/gallery/Promotion_2001/promo2001-f7.jpg', title: 'Gilles Terreaux, le sourire du vainqueur', description: 'Plusieurs membres, dont Gilles Terreaux à gauche.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f8', src: '/picture/gallery/Promotion_2001/promo2001-f8.jpg', title: 'Une belle soirée', description: 'Une belle tablée de membres pour fêter les promotions.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f9', src: '/picture/gallery/Promotion_2001/promo2001-f9.jpg', title: 'Gilles Terreaux, prêt au combat', description: 'Même à table, l\'esprit de compétition est là.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001a', src: '/picture/gallery/Promotion_2001/promo2001a.jpg', title: 'L\'équipe de la promotion', description: 'L\'équipe de Sion I victorieuse 5,5-2,5 contre Berne II.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001b', src: '/picture/gallery/Promotion_2001/promo2001b.jpg', title: 'La feuille de match historique', description: 'Le détail du match Sion I - Berne II qui a scellé la promotion.', date: '2001', event: 'Fête des promotions 2001' },

  // Julien Carron Champion
  { id: 'julien-cs1-2005', src: '/picture/gallery/Julien_Carron/csi2005.jpg', title: 'Julien Carron, Champion Suisse Junior', description: 'Julien Carron avec les différents champions suisses de l\'année 2005.', date: '2005', event: 'Championnat Suisse Individuel' },
];

export const historyBlocks: HistoryBlock[] = [
  {
    title: "1. Les Racines et la Fusion (1935-1968)",
    content: `L'histoire organisée des échecs à Sion débute en 1935, une année charnière marquée par la fondation du premier club sous la présidence du Dr. André de Quay. Figure de l'élite intellectuelle valaisanne, il pose les premières pierres d'une institution qui traversera le siècle.
Toutefois, le paysage échiquéen sédunois se complexifie rapidement. En 1947, une scission intervient avec la création du Club d'échecs de Valère. Cette dualité entre "Sion Valère" et le club originel (souvent désigné comme "Sion Planta") va caractériser la vie locale pendant deux décennies. Durant cette période, Rodolphe Demanega assure une présidence de longue durée (1948-1971), maintenant l'activité malgré la division.
Le tournant décisif s'opère en 1968. Après quelques années de flottement, les deux entités décident d'unir leurs forces. Cette réunification historique, orchestrée par l'initiative conjointe de Gérald Grand et Marcel Allegro, donne naissance au Club d'Échecs de Sion (CES) sous sa forme moderne.`
  },
  {
    title: "2. L'Élan de la Jeunesse et la Team-Cup (1968-1980)",
    content: `La décennie 1970 marque le début d'une structuration professionnelle et sportive ambitieuse.
● Le Tournoi de Noël (1972-1994) : Dès 1972, le club lance le tournoi d'échecs des jeunes de Noël. Cet événement deviendra une institution pendant plus de vingt ans, connaissant 22 éditions consécutives et formant le vivier des futurs champions.
● L'Ère Partos (Dès 1977) : L'arrivée en Suisse du maître roumain Charles Partos en 1977 est un catalyseur technique. En s'établissant en Valais comme professeur d'échecs dans les cycles d'orientation, il élève considérablement le niveau de jeu, influençant durablement les clubs de Sion et Martigny.
● L'Épopée de la Team-Cup : La fin des années 70 est rythmée par les exploits en Coupe Suisse (Team-Cup). Après deux défaites formatrices en finale (1978 contre Ostschweiz Junioren et 1979 contre Winterthur), l'équipe de Sion décroche son premier titre majeur en 1980. L'équipe, composée de Charles-Henri Amherdt, Eddy Beney, Pierre-Marie Rappaz, Gilles Terreaux et Gérald Grand, s'impose 3-1 face à Winterthur, offrant au club son inauguration sportive en même temps que son nouveau local à la rue des Châteaux 2.`
  },
  {
    title: "3. L'Ascension vers l'Élite et l'Âge d'Or (1981-1995)",
    content: `Sous la présidence de Charles-Henri Amherdt (1981-1990), puis de ses successeurs immédiats, le club change de dimension pour atteindre les sommets nationaux.
● Exploits Individuels : Cette période voit l'éclosion de Valéry Allegro, qui devient Champion Suisse Junior à plusieurs reprises (1978, 1984), confirmant l'excellence de la formation sédunoise.
● L'Accession à la LNA (1991) : L'année 1991 reste gravée comme l'apogée sportive du siècle. Le Club d'Échecs de Sion accède à la Ligue Nationale A (LNA) du Championnat suisse par équipes. L'équipe légendaire de la montée alignait Valéry Allegro, Pascal Grand, Gilles Terreaux, Pierre-Marie Rappaz, Pascal Vianin, Roland Levrand et Jean-Michel Paladini, sous le capitanat de Jean-Yves Riand.
● Le Rayonnement International : Entre 1988 et 1990, le club démontre sa capacité organisationnelle en accueillant des tournois internationaux opposant une sélection sédunoise à des maîtres étrangers.
● Le 60ème Anniversaire (1995) : Le club célèbre ses 60 ans sous la présidence d'Olivier Crettenand, clôturant une phase d'expansion ininterrompue.`
  },
  {
    title: "4. Transition et Exploits Individuels (1996-2020)",
    content: `Au tournant du millénaire, le club consolide ses acquis et voit émerger une nouvelle génération de talents titrés, tandis que la direction du club connaît une grande stabilité.
● Présidences : Après les mandats d'Olivier Crettenand (1992-1995), Jean-Michel Paladini (1996-1998) et Valéry Allegro (1999), c'est Jean-Yves Riand qui reprend le flambeau pour une présidence record de 20 ans, de 2000 à 2020.
● Nouveaux Maîtres : Cette période est marquée par l'ascension de Julien Carron, qui devient Maître International (MI) et Champion Suisse Junior en 2005. Il remporte également plusieurs titres cantonaux (Champion Valaisan de Blitz 2005-06, Vainqueur de l'Active Chess de Martigny 2007).
● Rénovation : En 2006, le local historique de la rue des Châteaux 2 bénéficie d'une rénovation complète, réaffirmant l'ancrage du club au cœur de la cité.`
  },
  {
    title: "5. L'Ère Moderne et le Renouveau (2021-2025)",
    content: `Ces quinze dernières années témoignent de la vitalité continue du club, qui reste une force dominante en Valais.
● Nouvelle Gouvernance : En 2021, Vlad Popescu accède à la présidence, succédant à Jean-Yves Riand. Il dirige le club durant 5 ans jusqu’à cette année (2025). Période qui voit de beaux succès d’équipes localement et nationalement. Depuis la rentrée 2025 Jeremy Duc à repris la présidence du club, avec l’intention d’aller de l’avant. La mise en place d’une école d’échecs, la refonte du site web du club et l’organisation d’un Activ Chess (octobre 2025) et d’un tournoi blitz de Noël font partie de cet effort de renouveau.
● Succès Récents : La dynamique sportive locale reste excellente. Le club a remporté la finale du championnat valaisan par équipes plusieurs années consécutives, en 2022, 2023, 2024 et 2025. Au niveau national, après être remonté en LNB il y a deux ans, l’équipe de Sion 1 est de retour en 2ème ligue régionale.`
  }
];

export const personalities: Personality[] = [
  {
    name: "Dr. André de Quay",
    bio: "Figure de l'élite intellectuelle valaisanne, il a posé les premières pierres d'une institution qui traversera le siècle en fondant le premier club en 1935."
  },
  {
    name: "Rodolphe Demanega",
    bio: "Président de longue durée (1948-1971), il a maintenu l'activité du club malgré la division entre les entités sédunoises."
  },
  {
    name: "Gérald Grand",
    bio: "Co-orchestrateur de la réunification du club en 1968. Figure centrale des années 70-80, il a contribué en tant que président et fondateur de l'UVE."
  },
  {
    name: "Marcel Allegro",
    bio: "Co-orchestrateur de la réunification du club en 1968, jouant un rôle clé dans la création du CES moderne."
  },
  {
    name: "Charles Partos",
    bio: "Maître roumain arrivé en Valais en 1977. En tant que professeur d'échecs, il a considérablement élevé le niveau de jeu des clubs de Sion et Martigny."
  },
  {
    name: "Charles-Henri Amherdt",
    bio: "Président de 1981 à 1990, il a mené le club vers les sommets nationaux et faisait partie de l'équipe vainqueur de la Team-Cup en 1980."
  },
  {
    name: "Valéry Allegro",
    bio: "Champion Suisse Junior à plusieurs reprises (1978, 1984), il incarne l'excellence de la formation sédunoise de son époque. Il a également été président en 1999."
  },
  {
    name: "Pierre-Marie Rappaz",
    bio: "Membre actif depuis 1969, il est l'un des grands piliers du club. Il faisait partie de l'équipe vainqueur de la Team-Cup en 1980 et de celle accédant à la LNA en 1991."
  },
  {
    name: "Jean-Yves Riand",
    bio: "Capitaine de l'équipe accédant à la LNA en 1991, il a ensuite assuré une présidence record de 20 ans (2000-2020), incarnant la continuité du club."
  },
  {
    name: "Olivier Crettenand",
    bio: "Président de 1992 à 1995, il a célébré le 60ème anniversaire du club et a contribué à sa phase d'expansion."
  },
  {
    name: "Jean-Michel Paladini",
    bio: "Membre de l'équipe accédant à la LNA en 1991, il a également été président du club de 1996 à 1998."
  },
  {
    name: "Vlad Popescu",
    bio: "Président de 2021 à 2025, il a dirigé la refonte du site web et modernisé la communication du club, menant également à de beaux succès d'équipes."
  },
  {
    name: "Jeremy Duc",
    bio: "Président depuis la rentrée 2025, il impulse un renouveau avec la mise en place d'une école d'échecs, la refonte du site web et l'organisation de tournois."
  },
];

export const playerAchievements: PlayerAchievement[] = [
  {
    name: "Valéry Allegro",
    achievements: [
      { year: "1978", title: "Champion Suisse Junior" },
      { year: "1984", title: "Champion Suisse Junior" },
    ]
  },
  {
    name: "Julien Carron",
    achievements: [
      { year: "2005", title: "Champion Suisse Junior" },
      { year: "2005", title: "Maître International (MI)" },
      { year: "2005-06", title: "Champion Valaisan de Blitz Individuel" },
      { year: "2007", title: "Vainqueur de l'Active Chess de Martigny" },
    ]
  },
  {
    name: "Gilles Terreaux",
    achievements: [
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
      { year: "1976", title: "Vainqueur du tournoi junior de la Placette à Sierre" },
      { year: "1977", title: "2ème place au championnat romand junior" },
      { year: "1978 & 1979", title: "Vainqueur de la coupe valaisanne" },
      { year: "1979", title: "Vainqueur du championnat suisse TP1" },
      { year: "1981 & 1994", title: "Vainqueur du championnat valaisan individuel" },
      { year: "1990", title: "Obtention du titre de Maître FIDE (FM)" },
      { year: "1996 & 1999", title: "Finaliste de la coupe suisse" },
      { year: "2000", title: "Victoire sur V. Kortchnoi en simultanée" },
      { year: "2005", title: "Vainqueur de l'Active Chess de Martigny" },
    ]
  },
  {
    name: "Pierre-Marie Rappaz",
    achievements: [
      { year: "1980", title: "Membre de l'équipe vainqueur de la Team-Cup" },
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
      { year: "1972", title: "Vainqueur du championnat valaisan junior" },
      { year: "1974", title: "Vainqueur du championnat valaisan individuel B" },
      { year: "1975 & 1978", title: "Vainqueur du championnat valaisan individuel" },
      { year: "1975-1994", title: "Vainqueur de la coupe valaisanne (5 fois)" },
      { year: "1979", title: "1er valaisan sur le classement de la liste suisse" },
      { year: "2008 & 2012", title: "Champion Valaisan Individuel (rapide)" },
      { year: "2020", title: "Champion Valaisan de Blitz par Paire (avec J-Y. Riand)" },
      { year: "2022", title: "Vainqueur de la coupe Valaisanne Individuelle" },
      { year: "2024", title: "Champion Valaisan de parties lentes, au Grand Prix de Monthey" },
    ]
  },
  {
    name: "Jean-Yves Riand",
    achievements: [
      { year: "1991", title: "Capitaine de l'équipe accédant à la LNA" },
      { year: "1989,1992,2012", title: "Vainqueur de la coupe valaisanne Individuelle" },
      { year: "1990", title: "Vainqueur du championnat valaisan individuel (activ-chess)" },
      { year: "2000", title: "Nulle contre Victor Kortchnoi en simultanée" },
      { year: "2015", title: "Champion Valaisan de Blitz Individuel" },
      { year: "2020-23", title: "Champion Valaisan de Blitz par Paire (3 fois, 1x avec P-M. Rappaz et 2x L. Zaza)" },
      { year: "2023", title: "Champion Valaisan de parties lentes, au Grand Prix de Monthey" },
    ]
  },
  {
    name: "Charles-Henri Amherdt",
    achievements: [
      { year: "1980", title: "Membre de l'équipe vainqueur de la Team-Cup" },
    ]
  },
  {
    name: "Eddy Beney",
    achievements: [
      { year: "1980", title: "Membre de l'équipe vainqueur de la Team-Cup" },
      { year: "1974", title: "Vainqueur du championnat valaisan junior" },
      { year: "1977", title: "Vainqueur du championnat valaisan individuel" },
      { year: "1978", title: "1er valaisan sur la liste de classement suisse" },
      { year: "1985", title: "Vainqueur du championnat valaisan individuel" },
      { year: "1987", title: "Vainqueur de la coupe valaisanne" },
      { year: "2000", title: "Vainqueur du tournoi d'Automne de Crans-Montana" },
      { year: "2000-2002", title: "Vainqueur du ch. valaisan individuel (3 fois)" },
    ]
  },
  {
    name: "Pascal Grand",
    achievements: [
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
    ]
  },
  {
    name: "Pascal Vianin",
    achievements: [
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
    ]
  },
  {
    name: "Roland Levrand",
    achievements: [
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
    ]
  },
  {
    name: "Jean-Michel Paladini",
    achievements: [
      { year: "1991", title: "Membre de l'équipe accédant à la LNA" },
      { year: "1978", title: "Vainqueur du championnat valaisan junior" },
      { year: "1979", title: "Vainqueur du championnat valaisan junior" },
      { year: "1979", title: "Vainqueur de la coupe de Sion" },
      { year: "1981", title: "Vainqueur du tournoi junior de Noël de Sion" },
    ]
  },
  {
    name: "Vlad Popescu",
    achievements: [
      { year: "2023", title: "Champion Valaisan de Blitz par Paire (avec L. Zaza)" },
    ]
  },
  {
    name: "Simon Morand",
    achievements: [
      { year: "2014-15", title: "1er Valaisan de l'Activ Chess du Bouveret" },
      { year: "2015", title: "Vainqueur de la coupe valaisanne Individuelle" },
      { year: "2016-18-19", title: "Champion Valaisan de Blitz par Paire (3 fois, 1x avec M. Bijelic and 2x S. Emery)" },
    ]
  },
];
export const presidents: President[] = [
  { period: "1935-1947", name: "Dr. André de Quay" },
  { period: "1948-1971", name: "Rodolphe Demanega" },
  { period: "1972", name: "Gérald Grand" },
  { period: "1973-1974", name: "Edmond Gränicher" },
  { period: "1975-1978", name: "Gérald Grand" },
  { period: "1979-1980", name: "Jean-Yves Riand" },
  { period: "1981-1990", name: "Charles-Henri Amherdt" },
  { period: "1991", name: "Raphaël Granges" },
  { period: "1992-1995", name: "Olivier Crettenand" },
  { period: "1996-1998", name: "Jean-Michel Paladini" },
  { period: "1999", name: "Valéry Allegro" },
  { period: "2000-2020", name: "Jean-Yves Riand" },
  { period: "2021-2025", name: "Vlad Popescu", isCurrent: false },
  { period: "2025-...", name: "Jeremy Duc", isCurrent: true },
];

export const hallOfFame: HallOfFamePlayer[] = [
  { name: "Philippe Berclaz", title: "Grand Maître International ICCF", elo: "2569" },
  { name: "Gilles Terreaux", title: "Maître International FIDE & ICCF", elo: "2505" },
  { name: "Valéry Allegro", title: "Maître International FIDE", elo: "2416" },
  { name: "Julien Carron", title: "Maître International FIDE", elo: "2416" },
];

export const honoraryMembers: HonoraryMember[] = [
  { name: "Rodolphe Demanega" },
  { name: "Gérald Grand" },
  { name: "Marcel Allegro" },
];

export const notablePlayers: string[] = [
  "Dr. André de Quay", "Rodolphe Demanega", "Gérald Grand", "Marcel Allegro",
  "Charles Partos", "Charles-Henri Amherdt", "Valéry Allegro", "Pierre-Marie Rappaz",
  "Jean-Yves Riand", "Olivier Crettenand", "Jean-Michel Paladini", "Vlad Popescu",
  "Jeremy Duc", "Eddy Beney", "Pascal Grand", "Gilles Terreaux", "Pascal Vianin",
  "Roland Levrand", "Julien Carron", "Philippe Berclaz"
];