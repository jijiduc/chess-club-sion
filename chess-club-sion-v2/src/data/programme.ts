export interface ProgrammeEvent {
  id: string
  title: string
  date: string
  time: string
  category: 'formation' | 'competition' | 'soiree-club' | 'tournoi'
  description?: string
  location?: string
  link?: string
  details?: Array<string | { text: string; link: string }>
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
    details: ['Fribourg 1 - Sion 1', 'Bulle 3 - Sion 2']
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
    details: ['Sion 1 - Köniz-Bubenberg 1', 'Sion 2 - Grand Echiquier 2']
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
    details: ['Sion 1 - Neuchâtel 1', 'Valais 2 - Sion 2']
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
    id: '2025-06-21',
    title: 'CSE ronde 5',
    date: '2025-06-21',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Valais et Sion',
    link: '/competitions/cse',
    details: ['Valais 1 - Sion 1', 'Sion 2 - Monthey 1']
  },

  // Août 2025
  {
    id: '2025-08-23',
    title: 'CSE ronde 6',
    date: '2025-08-23',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes',
    location: 'Échallens et Sion',
    link: '/competitions/cse',
    details: ['Echallens 2 - Sion 1', 'Sion 2 - Crazy Horse 1']
  },

  // Septembre 2025
  {
    id: '2025-09-13',
    title: 'CSE ronde 7',
    date: '2025-09-13',
    time: '14h00',
    category: 'competition',
    description: 'Championnat suisse par équipes - Dernière ronde',
    location: 'Sion et Payerne',
    link: '/competitions/cse',
    details: ['Sion 1 - Genève 2', 'Payerne 2 - Sion 2']
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