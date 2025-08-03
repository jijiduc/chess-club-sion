export interface ProgrammeEvent {
  id: string
  title: string
  date: string
  endDate?: string
  time: string
  category: 'formation' | 'competition' | 'soiree-club' | 'tournoi'
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
    category: 'competition',
    description: 'Tournoi de parties rapides',
    location: 'Salle communale de Martigny',
    link: '/competitions/https://www.uve-wsb.ch/competitions-valaisannes/active-chess-de-martigny',
    details: ['7 rondes, cadence 20m+5s/cps'],
    image: '/picture/events/Martigny.png'
  },
  {
    id: '2025-08-23',
    title: 'CSE ronde 6',
    date: '2025-08-23',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Échallens et Sion',
    link: '/competitions/cse',
    details: ['Sion 1 - Echallens 2', 'Sion 2 - Crazy Horse 1'],
    image: '/picture/events/FSE.png'
  },

  // Septembre 2025

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
    category: 'formation',
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
    category: 'competition',
    description: 'Championnat suisse par équipes - Dernière ronde',
    location: 'Sion et Payerne',
    link: '/competitions/cse',
    details: ['Sion 1 - Genève 2', 'Sion 2 - Payerne 2'],
    image: '/picture/events/FSE.png'
  },

  // Novembre 2025
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
  }
]

export const categoryLabels = {
  formation: 'Formation',
  competition: 'Compétition',
  'soiree-club': 'Soirée club',
  tournoi: 'Tournoi'
}

export const categoryColors = {
  formation: 'bg-blue-100 text-blue-800',
  competition: 'bg-red-100 text-red-800',
  'soiree-club': 'bg-green-100 text-green-800',
  tournoi: 'bg-purple-100 text-purple-800'
}