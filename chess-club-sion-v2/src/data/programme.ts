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
  // Avril 2025
  {
    id: '2025-04-04-1',
    title: "Cours d'échecs",
    date: '2025-04-04',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours hebdomadaire pour les jeunes joueurs et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-04-04-2',
    title: 'Soirée analyse',
    date: '2025-04-04',
    time: '20h00',
    category: 'soiree-club',
    description: 'Discussion des parties lentes jouées dans le courant du mois de mars',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-04-05',
    title: 'CSE ronde 2',
    date: '2025-04-05',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Fribourg et Bulle',
    link: '/competitions/cse',
    details: ['Fribourg 1 - Sion 1', 'Bulle 3 - Sion 2'],
    image: '/picture/events/FSE.png'
  },
  {
    id: '2025-04-11',
    title: 'Soirée blitz',
    date: '2025-04-11',
    time: '20h00',
    category: 'soiree-club',
    description: 'Échauffement à la journée du lendemain',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-04-12',
    title: 'Journée Valaisanne du Blitz',
    date: '2025-04-12',
    time: '09h00',
    category: 'competition',
    description: 'Championnat valaisan de blitz',
    location: 'Monthey',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/championnats-valaisans-de-blitz'
  },
  {
    id: '2025-04-18-1',
    title: "Cours d'échecs",
    date: '2025-04-18',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours hebdomadaire pour les jeunes joueurs et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-04-18-2',
    title: 'Open interne',
    date: '2025-04-18',
    time: '20h00',
    category: 'competition',
    description: 'Parties lentes',
    location: 'Rue des Châteaux 2, Sion',
    link: '/competitions/tournoi-interne'
  },
  {
    id: '2025-04-25',
    title: 'Soirée analyse',
    date: '2025-04-25',
    time: '20h00',
    category: 'soiree-club',
    description: "Discussion des parties de CSE et CVI jouées en début du mois d'avril",
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-04-26',
    title: 'CSE ronde 3',
    date: '2025-04-26',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Sion',
    link: '/competitions/cse',
    details: ['Sion 1 - Köniz-Bubenberg 1', 'Sion 2 - Grand Echiquier 2'],
    image: '/picture/events/FSE.png'
  },

  // Mai 2025
  {
    id: '2025-05-02-1',
    title: "Cours d'échecs",
    date: '2025-05-02',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours hebdomadaire pour les jeunes joueurs et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-05-02-2',
    title: 'Soirée blitz',
    date: '2025-05-02',
    time: '20h00',
    category: 'soiree-club',
    description: 'Tournoi de blitz interne',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-05-03',
    title: 'CVE ronde finale',
    date: '2025-05-03',
    time: '09h00',
    category: 'competition',
    description: 'Championnat Valaisan par Équipes - Finale',
    location: 'À déterminer selon adversaire',
    link: '/competitions/cve',
    details: ['Martigny 1 - Sion 1 : pour la 1ère-2ème place', 'Sion 2 - Riddes 1 : pour la 7ème-8ème place']
  },
  {
    id: '2025-05-09',
    title: 'Soirée analyse',
    date: '2025-05-09',
    time: '20h00',
    category: 'soiree-club',
    description: 'Analyses des parties jouées en CVE le week-end précédent',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-05-16-1',
    title: "Cours d'échecs",
    date: '2025-05-16',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours hebdomadaire pour les jeunes joueurs et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-05-16-2',
    title: 'Soirée de parties rapide + open interne',
    date: '2025-05-16',
    time: '20h00',
    category: 'competition',
    description: 'Parties rapides et tournoi interne',
    location: 'Rue des Châteaux 2, Sion',
    link: '/competitions/tournoi-interne'
  },
  {
    id: '2025-05-17',
    title: 'CSE ronde 4',
    date: '2025-05-17',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Sion et autres lieux',
    link: '/competitions/cse',
    details: ['Sion 1 - Neuchâtel 1', 'Sion 2 - Valais 2'],
    image: '/picture/events/FSE.png'
  },
  {
    id: '2025-05-23',
    title: 'Soirée analyse',
    date: '2025-05-23',
    time: '20h00',
    category: 'soiree-club',
    description: "Discussion des parties jouées en CSE ou pour l'Open interne",
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-05-30',
    title: 'Soirée blitz',
    date: '2025-05-30',
    time: '20h00',
    category: 'soiree-club',
    description: 'Tournoi de blitz interne',
    location: 'Rue des Châteaux 2, Sion'
  },

  // Juin 2025
  {
    id: '2025-06-06-1',
    title: "Cours d'échecs pour les plus jeunes et débutants",
    date: '2025-06-06',
    time: '18h00-19h00',
    category: 'formation',
    description: 'Cours pour les plus jeunes et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-06-2',
    title: "Cours d'échecs pour les jeunes (et adultes) plus avancés",
    date: '2025-06-06',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours pour les jeunes (et adultes) plus avancés',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-06-3',
    title: 'Soirée semi-rapides',
    date: '2025-06-06',
    time: '20h00',
    category: 'soiree-club',
    description: 'Tournoi de parties semi-rapides',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-07',
    title: '70 ans du CE Sierre',
    date: '2025-06-07',
    time: '09h00',
    category: 'tournoi',
    description: 'Tournoi juniors, simultanée avec Pascal Vianin, partie officielle et repas',
    location: 'Hôtel-de-ville, Sierre',
    details: [
      '09h00-12h45: Tournoi semi-rapides juniors (7 rondes, 15 min/joueur)',
      '13h00-14h00: Repas offert au restaurant "Le Bourgeois"',
      '14h15-17h15: Simultanée avec Pascal Vianin',
      '17h00-18h00: Partie officielle et distribution des prix',
      '19h00-23h00: Repas officiel du 70e anniversaire',
      'Inscriptions: eddy.beney@icloud.com (15.- CHF)'
    ],
    image: '/picture/events/CESierre.png'
  },
  {
    id: '2025-06-13',
    title: 'Soirée blitz',
    date: '2025-06-13',
    time: '20h00',
    category: 'soiree-club',
    description: 'Tournoi de blitz interne',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-20-1',
    title: "Cours d'échecs pour les plus jeunes et débutants",
    date: '2025-06-20',
    time: '18h00-19h00',
    category: 'formation',
    description: 'Cours pour les plus jeunes et débutants',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-20-2',
    title: "Cours d'échecs pour les jeunes (et adultes) plus avancés",
    date: '2025-06-20',
    time: '19h00-20h00',
    category: 'formation',
    description: 'Cours pour les jeunes (et adultes) plus avancés',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-20-3',
    title: 'Soirée semi-rapides',
    date: '2025-06-20',
    time: '20h00',
    category: 'soiree-club',
    description: 'Tournoi de parties semi-rapides',
    location: 'Rue des Châteaux 2, Sion'
  },
  {
    id: '2025-06-21',
    title: 'CSE ronde 5',
    date: '2025-06-21',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Lieu à déterminer et Sion',
    link: '/competitions/cse',
    details: ['Sion 1 - Valais 1', 'Sion 2 - Monthey 1'],
    image: '/picture/events/FSE.png'
  },
  {
    id: '2025-06-27',
    title: 'Soirée analyse',
    date: '2025-06-27',
    time: '20h00',
    category: 'soiree-club',
    description: 'Discussion des parties jouées en CSE',
    location: 'Rue des Châteaux 2, Sion'
  },

  // Juillet 2025
  {
    id: '2025-07-12-20',
    title: '125e Championnats suisses individuels à Disentis',
    date: '2025-07-12',
    endDate: '2025-07-20',
    time: '',
    category: 'competition',
    description: 'CSI plan de jeu 2025',
    location: 'Center Fontauna, Via Alpsu 51, 7180 Disentis/Mustér',
    link: 'https://www.swisschess.ch/csi_2025.html',
    image: '/picture/events/FSE.png'
  },

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