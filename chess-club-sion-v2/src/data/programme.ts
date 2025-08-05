export interface ProgrammeEvent {
  id: string
  title: string
  date: string
  endDate?: string
  time: string
  category: 'formation' | 'soiree-club' | 'tournoi' | 'simultanee' | 'CSE' | 'CSG' | 'CVE'
  description?: string
  location?: string
  link?: string
  details?: Array<string | { text: string; link: string }>
  image?: string
}

export const programmeEvents: ProgrammeEvent[] = [
  // Août 2025
  {
    id: '2025-08-09',
    title: 'Active Chess de Martigny',
    date: '2025-08-09',
    time: '9h00',
    category: 'tournoi',
    description: 'Tournoi de parties rapides',
    location: 'Salle communale de Martigny',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/active-chess-de-martigny',
    details: ['7 rondes, cadence 20m+5s/cps'],
    image: '/picture/events/Martigny.png'
  },
  {
    id: '2025-08-23',
    title: 'CSE ronde 6',
    date: '2025-08-23',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes',
    location: 'Échallens et Sion',
    link: 'https://www.swisschess.ch/cse.html',
    details: ['Sion 1 - Echallens 2', 'Sion 2 - Crazy Horse 1'],
    image: '/picture/events/FSE.png'
  },
  {
    id: '2025-08-26-ecolier',
    title: 'Cours écolier',
    date: '2025-08-26',
    time: '13h00',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h00 à 15h00'
  },
  {
    id: '2025-08-29-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-08-29',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30'
  },
  {
    id: '2025-08-29-blitz',
    title: 'Tournoi blitz de la rentrée',
    date: '2025-08-29',
    time: '20h30',
    category: 'tournoi'
  },
  {
    id: '2025-08-30-avance',
    title: 'Cours avancé',
    date: '2025-08-30',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30'
  },

  // Septembre 2025
  {
    id: '2025-09-03-ecolier',
    title: 'Cours écolier',
    date: '2025-09-03',
    time: '13h00',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h00 à 15h00'
  },
  {
    id: '2025-09-05-ag',
    title: 'Assemblée générale',
    date: '2025-09-05',
    time: '19h00',
    category: 'soiree-club',
    description: "Assemblée générale du club, suivie d'une verrée"
  },
  {
    id: '2025-09-10-ecolier',
    title: 'Cours écolier',
    date: '2025-09-10',
    time: '13h00',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h00 à 15h00'
  },
  {
    id: '2025-09-12-speciale',
    title: 'Soirée spéciale : combativité',
    date: '2025-09-12',
    time: '20h00',
    category: 'soiree-club'
  },
  {
    id: '2025-09-17-ecolier',
    title: 'Cours écolier',
    date: '2025-09-17',
    time: '13h00',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h00 à 15h00'
  },
  {
    id: '2025-09-19-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-09-19',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30'
  },
  {
    id: '2025-09-19-analyse',
    title: 'Soirée analyse & jeu libre',
    date: '2025-09-19',
    time: '20h00',
    category: 'soiree-club'
  },
  {
    id: '2025-09-20-avance',
    title: 'Cours avancé',
    date: '2025-09-20',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30'
  },
  {
    id: '2025-09-24-ecolier',
    title: 'Cours écolier',
    date: '2025-09-24',
    time: '13h00',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h00 à 15h00'
  },
  {
    id: '2025-09-26-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-09-26',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30'
  },
  {
    id: '2025-09-26-blitz4',
    title: 'Soirée blitz à 4',
    date: '2025-09-26',
    time: '20h00',
    category: 'soiree-club'
  },
  {
    id: '2025-09-27-avance',
    title: 'Cours avancé',
    date: '2025-09-27',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30'
  },

  // Octobre 2025
  {
    id: '2025-10-11-tournoi',
    title: "Tournoi Populaire du Centenaire de Monthey",
    date: '2025-10-11',
    time: '9h30',
    category: 'tournoi',
    description: "Tournoi populaire par équipe de 3 pour célébrer les 100 ans du club.",
    location: "Théâtre du Crochetan, Monthey",
    link: 'https://www.chessmonthey.ch',
    details: [
      "Accueil des participants dès 9h30.",
      "7 rondes de 10h00 à 16h05.",
      "Remise des prix à 16h30."
    ],
    image: '/picture/events/100Monthey.png'
  },
  {
    id: '2025-10-11-gala',
    title: "Soirée de Gala du Centenaire de Monthey",
    date: '2025-10-11',
    time: '18h00',
    category: 'soiree-club',
    description: "Soirée de gala avec partie officielle, repas, DJ et animations.",
    location: "Théâtre du Crochetan, Monthey",
    link: 'https://www.chessmonthey.ch',
    details: [
      "Partie officielle à 18h00.",
      "Repas de gala dès 19h30.",
      "Soirée dansante jusqu'à 02h00."
    ],
    image: '/picture/events/100Monthey.png'
  },
  {
    id: '2025-10-12',
    title: "Simultanée du Centenaire de Monthey",
    date: '2025-10-12',
    time: '14h00',
    category: 'simultanee',
    description: "Parties simultanées avec le GMI Pierre Laurent-Paoli et Ludovic Zaza.",
    location: "Monthey",
    link: 'https://www.chessmonthey.ch',
    details: [
        "Pierre Laurent-Paoli affrontera 30 joueurs classés.",
        "Ludovic Zaza affrontera les jeunes de l'école d'échecs."
    ],
    image: '/picture/events/100Monthey.png'
  },
  {
    id: '2025-10-13',
    title: 'CSE ronde 7',
    date: '2025-10-13',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes - Dernière ronde',
    location: 'Sion et Payerne',
    link: 'https://www.swisschess.ch/cse.html',
    details: ['Sion 1 - Genève 2', 'Sion 2 - Payerne 2'],
    image: '/picture/events/FSE.png'
  },

  // Novembre 2025
  {
    id: '2025-11-01',
    title: 'CSG - Ronde 1',
    date: '2025-11-01',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },
  {
    id: '2025-11-14',
    title: "Tournoi du Centenaire - 14e Grand Prix de Monthey",
    date: '2025-11-14',
    endDate: '2025-11-16',
    time: '19h15',
    category: 'tournoi',
    description: "Tournoi open en 7 rondes, homologué FIDE et FSE.",
    location: "Monthey",
    link: 'https://www.chessmonthey.ch',
    details: [
        "Rondes 1-3 le vendredi, rondes 4-5 le samedi, rondes 6-7 le dimanche.",
        "Inscription : 80.- Adultes / 40.- Jeunes.",
        { text: 'Infos & inscriptions : jddelacroix@netplus.ch', link: 'mailto:jddelacroix@netplus.ch' }
    ],
    image: '/picture/events/100Monthey.png'
  },
  {
    id: '2025-11-22',
    title: 'CSG - Ronde 2',
    date: '2025-11-22',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },

  // Décembre 2025
  {
    id: '2025-12-13',
    title: 'CSG - Ronde 3',
    date: '2025-12-13',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },

  // Janvier 2026
  {
    id: '2026-01-24',
    title: 'CSG - Ronde 4',
    date: '2026-01-24',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },

  // Février 2026
  {
    id: '2026-02-07',
    title: 'CSG - Ronde 5',
    date: '2026-02-07',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },
  {
    id: '2026-02-21',
    title: 'CSG - Ronde 6',
    date: '2026-02-21',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },

  // Mars 2026
  {
    id: '2026-03-07',
    title: 'CSG - Ronde 7',
    date: '2026-03-07',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },
  {
    id: '2026-03-21',
    title: 'CSG - Matchs de barrage',
    date: '2026-03-21',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe - Matchs de barrage éventuels',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },

  // Avril 2026
  {
    id: '2026-04-11',
    title: 'CSG - Matchs de promotion',
    date: '2026-04-11',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe - Matchs de promotion éventuels',
    link: 'https://www.swisschess.ch/csg.html',
    image: '/picture/events/FSE.png'
  },
  {
    id: '2026-04-18',
    title: 'CSE - Ronde 2',
    date: '2026-04-18',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
    image: '/picture/events/FSE.png'
  },

  // Mai 2026
  {
    id: '2026-05-14',
    title: 'Tournoi Fédéral',
    date: '2026-05-14',
    endDate: '2026-05-17',
    time: 'Toute la journée',
    category: 'tournoi',
    description: "Tournoi Fédéral d'échecs",
    location: 'Bâle',
    link: 'https://www.swisschess.ch/federal.html',
    image: '/picture/events/FSE.png'
  },

  // Juin 2026
  {
    id: '2026-06-06',
    title: 'CSE - Ronde 4',
    date: '2026-06-06',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
    image: '/picture/events/FSE.png'
  },
  {
    id: '2026-06-20',
    title: 'CSE - Ronde 5',
    date: '2026-06-20',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
    image: '/picture/events/FSE.png'
  },

  // Juillet 2026
  {
    id: '2026-07-11',
    title: 'Championnat Suisse Individuel',
    date: '2026-07-11',
    endDate: '2026-07-19',
    time: 'Toute la journée',
    category: 'tournoi',
    description: 'Championnat Suisse Individuel (CSI)',
    location: 'Grächen',
    link: 'https://www.swisschess.ch/csi.html',
    image: '/picture/events/FSE.png'
  }
]

export const categoryLabels = {
  formation: 'Formation',
  competition: 'Compétition',
  'soiree-club': 'Soirée club',
  tournoi: 'Tournoi',
  simultanee: 'Simultanée',
  CSE: 'CSE',
  CSG: 'CSG',
  CVE: 'CVE'
}

export const categoryColors = {
  formation: 'bg-blue-100 text-blue-800',
  competition: 'bg-orange-100 text-orange-800',
  'soiree-club': 'bg-green-100 text-green-800',
  tournoi: 'bg-purple-100 text-purple-800',
  simultanee: 'bg-blue-100 text-blue-800',
  CSE: 'bg-red-100 text-red-800',
  CSG: 'bg-yellow-100 text-yellow-800',
  CVE: 'bg-pink-100 text-pink-800'
}