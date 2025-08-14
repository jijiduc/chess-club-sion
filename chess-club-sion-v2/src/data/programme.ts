export interface ProgrammeEvent {
  id: string
  title: string
  date: string
  endDate?: string
  time: string
  category: 'formation' | 'soiree-club' | 'tournoi' | 'simultanee' | 'CSE' | 'CSG' | 'CVE' | 'CVI'
  description?: string
  location?: string
  link?: string
  details?: Array<string | { text: string; link: string }>
  image?: string
}

export const programmeEvents: ProgrammeEvent[] = [
  // Août 2025
  {
    id: '2025-08-23',
    title: 'CSE ronde 6',
    date: '2025-08-23',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes',
    location: 'Sion 1 : Sion - Sion 2 : Echallens',
    link: 'https://www.swisschess.ch/cse.html',
    details: ['Sion 1 - Echallens 2', 'Sion 2 - Crazy Horse 1'],
  },
  {
    id: '2025-08-27-ecolier',
    title: 'Cours écolier',
    date: '2025-08-27',
    time: '13h30',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h30 à 15h30',
    location: "Local du club"
  },
  {
    id: '2025-08-29-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-08-29',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30',
    location: "Local du club"
  },
  {
    id: '2025-08-29-blitz',
    title: 'Tournoi blitz de la rentrée',
    date: '2025-08-29',
    time: '20h30',
    category: 'tournoi',
    location: "Local du club"
  },
  {
    id: '2025-08-30-avance',
    title: 'Cours avancé',
    date: '2025-08-30',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30',
    location: "Local du club"
  },

  // Septembre 2025
  {
    id: '2025-09-03-ecolier',
    title: 'Cours écolier',
    date: '2025-09-03',
    time: '13h30',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h30 à 15h30',
    location: "Local du club"
  },
  {
    id: '2025-09-05-ag',
    title: 'Assemblée générale',
    date: '2025-09-05',
    time: '19h00',
    category: 'soiree-club',
    description: "Assemblée générale du club, suivie d'une verrée",
    location: "Local du club"
  },
  {
    id: '2025-09-10-ecolier',
    title: 'Cours écolier',
    date: '2025-09-10',
    time: '13h30',
    category: 'formation',
    description: 'Cours pour les écoliers, de 13h30 à 15h30',
    location: "Local du club"
  },
  {
    id: '2025-09-12-speciale',
    title: 'Soirée spéciale : combativité',
    date: '2025-09-12',
    time: '20h00',
    category: 'soiree-club',
    location: "Local du club"
  },
  {
    id: '2025-09-13',
    title: 'CSE - Ronde 7',
    date: '2025-09-13',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes - Dernière ronde',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2025-09-17-ecolier',
    title: 'Cours écolier',
    date: '2025-09-17',
    time: '13h30',
    category: 'formation',
    description: 'Cours pour les écoliers, de de 13h30 à 15h30',
    location: "Local du club"
  },
  {
    id: '2025-09-19-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-09-19',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30',
    location: "Local du club"
  },
  {
    id: '2025-09-19-analyse',
    title: 'Soirée analyse & jeu libre',
    date: '2025-09-19',
    time: '20h00',
    category: 'soiree-club',
    location: "Local du club"
  },
  {
    id: '2025-09-19-geneve',
    title: 'Open de Genève CEG',
    date: '2025-09-19',
    endDate: '2025-09-21',
    time: 'Soir',
    category: 'tournoi',
    location: 'Genève',
  },
  {
    id: '2025-09-20-avance',
    title: 'Cours avancé',
    date: '2025-09-20',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30',
    location: "Local du club"
  },
  {
    id: '2025-09-20-echallens',
    title: 'Active Chess Echallens',
    date: '2025-09-20',
    time: 'Toute la journée',
    category: 'tournoi',
    location: 'Echallens',
  },
  {
    id: '2025-09-24-ecolier',
    title: 'Cours écolier',
    date: '2025-09-24',
    time: '13h30',
    category: 'formation',
    description: 'Cours pour les écoliers, de de 13h30 à 15h30',
    location: "Local du club"
  },
  {
    id: '2025-09-26-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-09-26',
    time: '18h30',
    category: 'formation',
    description: 'Cours pour les joueurs intermédiaires, de 18h30 à 20h30',
    location: "Local du club"
  },
  {
    id: '2025-09-26-blitz4',
    title: 'Soirée blitz à 4',
    date: '2025-09-26',
    time: '20h00',
    category: 'soiree-club',
    location: "Local du club"
  },
  {
    id: '2025-09-27-avance',
    title: 'Cours avancé',
    date: '2025-09-27',
    time: '9h30',
    category: 'formation',
    description: 'Cours pour les joueurs avancés, de 9h30 à 11h30',
    location: "Local du club"
  },

  // Octobre 2025
  {
    id: '2025-10-04-portvalais',
    title: 'Anniversaire du CE Port-Valais',
    date: '2025-10-04',
    time: 'Toute la journée',
    category: 'soiree-club',
    location: 'Bouveret',
  },
  {
    id: '2025-10-04-blitz',
    title: 'Championnat suisse de blitz',
    date: '2025-10-04',
    time: 'Toute la journée',
    category: 'tournoi',
  },
  {
    id: '2025-10-10-cvi',
    title: 'CVI 2025-2026: Ronde préliminaire',
    date: '2025-10-10',
    time: 'Soir',
    category: 'CVI',
    description: 'Coupe valaisanne individuelle',
  },
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

  // Novembre 2025
  {
    id: '2025-11-01',
    title: 'CSG - Ronde 1',
    date: '2025-11-01',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2025-11-07-cve',
    title: 'CVE 2025-2026 (ronde 1)',
    date: '2025-11-07',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
  },
  {
    id: '2025-11-14',
    title: "14e Grand Prix de Monthey",
    date: '2025-11-14',
    endDate: '2025-11-16',
    time: '19h15',
    category: 'tournoi',
    description: "Tournoi open, aussi Championnat valaisan individuel.",
    location: "Monthey",
    link: 'https://www.chessmonthey.ch',
    details: [
        "Inscription : 80.- Adultes / 40.- Jeunes.",
        { text: 'Infos & inscriptions : jddelacroix@netplus.ch', link: 'mailto:jddelacroix@netplus.ch' }
    ],
    image: '/picture/events/100Monthey.png'
  },
  {
    id: '2025-11-21-cvi',
    title: 'CVI 2025-2026: 1/8',
    date: '2025-11-21',
    time: 'Soir',
    category: 'CVI',
    description: 'Coupe valaisanne individuelle',
  },
  {
    id: '2025-11-22',
    title: 'CSG - Ronde 2',
    date: '2025-11-22',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2025-11-28-cve',
    title: 'CVE 2025-2026 (ronde 2)',
    date: '2025-11-28',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
  },
  {
    id: '2025-11-28-jura',
    title: 'Open du Jura',
    date: '2025-11-28',
    endDate: '2025-11-30',
    time: 'Soir',
    category: 'tournoi',
  },

  // Décembre 2025
  {
    id: '2025-12-06-gp',
    title: "Ecole d'échecs de l'UVE et 2ème Tournoi du Grand Prix Jeunes",
    date: '2025-12-06',
    time: 'Toute la journée',
    category: 'formation',
    location: 'Riddes'
  },
  {
    id: '2025-12-13',
    title: 'CSG - Ronde 3',
    date: '2025-12-13',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2025-12-19-cve',
    title: 'CVE 2025-2026 (ronde 3)',
    date: '2025-12-19',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
  },

  // Janvier 2026
  {
    id: '2026-01-09-cvi',
    title: 'CVI 2025-2026: 1/4',
    date: '2026-01-09',
    time: 'Soir',
    category: 'CVI',
    description: 'Coupe valaisanne individuelle',
  },
  {
    id: '2026-01-16-cve',
    title: 'CVE 2025-2026 (ronde 4)',
    date: '2026-01-16',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
  },
  {
    id: '2026-01-24',
    title: 'CSG - Ronde 4',
    date: '2026-01-24',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2026-01-25-bagnes',
    title: 'Tournoi de Bagnes',
    date: '2026-01-25',
    time: 'Toute la journée',
    category: 'tournoi',
    location: 'Le Châble',
  },
  {
    id: '2026-01-30-nyon',
    title: 'Tournois de Nyon',
    date: '2026-01-30',
    endDate: '2026-01-31',
    time: 'Soir',
    category: 'tournoi',
    location: 'Nyon',
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
  },
  {
    id: '2026-02-21',
    title: 'CSG - Ronde 6',
    date: '2026-02-21',
    time: '14h00',
    category: 'CSG',
    description: 'Championnat suisse de groupe par équipes',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2026-02-22-bouveret',
    title: '18ème Active Chess du Bouveret',
    date: '2026-02-22',
    time: 'Toute la journée',
    category: 'tournoi',
    location: 'Bouveret',
  },
  {
    id: '2026-02-27-cve',
    title: 'CVE 2025-2026 (ronde 5)',
    date: '2026-02-27',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
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
  },
  {
    id: '2026-03-14-cse',
    title: 'CSE - Ronde 1',
    date: '2026-03-14',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2026-03-20-cve',
    title: 'CVE 2025-2026 (ronde 6)',
    date: '2026-03-20',
    time: 'Soir',
    category: 'CVE',
    description: 'Championnat valaisan par équipes de parties classiques',
  },
  {
    id: '2026-03-27-broye',
    title: 'Open de la Broye',
    date: '2026-03-27',
    endDate: '2026-03-29',
    time: 'Soir',
    category: 'tournoi',
    location: 'Payerne',
  },

  // Avril 2026
  {
    id: '2026-04-10-cvi',
    title: 'CVI 2025-2026: 1/2',
    date: '2026-04-10',
    time: 'Soir',
    category: 'CVI',
    description: 'Coupe valaisanne individuelle',
  },
  {
    id: '2026-04-18',
    title: 'CSE - Ronde 2',
    date: '2026-04-18',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
  },

  // Mai 2026
  {
    id: '2026-05-02-cve',
    title: 'Finales du CVE & Championnat CVER',
    date: '2026-05-02',
    time: 'Toute la journée',
    category: 'CVE',
    description: "Finales du Championnat valaisan par équipes et Championnat valaisan par équipes de parties rapides",
    location: 'Riddes',
  },
  {
    id: '2026-05-09-cse',
    title: 'CSE - Ronde 3',
    date: '2026-05-09',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2026-05-14',
    title: 'Tournoi Fédéral',
    date: '2026-05-14',
    endDate: '2026-05-16',
    time: 'Toute la journée',
    category: 'tournoi',
    description: "Tournoi Fédéral d'échecs",
    location: 'Bâle',
    link: 'https://www.swisschess.ch/federal.html',
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
  },
  {
    id: '2026-06-20',
    title: 'CSE - Ronde 5',
    date: '2026-06-20',
    time: '14h00',
    category: 'CSE',
    description: 'Championnat suisse par équipes (saison 2026)',
    link: 'https://www.swisschess.ch/cse.html',
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
  }
]

export const categoryLabels = {
  formation: 'Formation',
  'soiree-club': 'Soirée club',
  tournoi: 'Tournoi',
  simultanee: 'Simultanée',
  CSE: 'CSE',
  CSG: 'CSG',
  CVE: 'CVE',
  CVI: 'CVI',
}

export const categoryColors = {
  formation: 'bg-blue-100 text-blue-800',
  'soiree-club': 'bg-green-100 text-green-800',
  tournoi: 'bg-purple-100 text-purple-800',
  simultanee: 'bg-blue-100 text-blue-800',
  CSE: 'bg-red-100 text-red-800',
  CSG: 'bg-yellow-100 text-yellow-800',
  CVE: 'bg-pink-100 text-pink-800',
  CVI: 'bg-indigo-100 text-indigo-800'
}