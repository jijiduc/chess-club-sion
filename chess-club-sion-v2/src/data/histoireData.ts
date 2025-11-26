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


// --- Structures de données pour le contenu ---

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