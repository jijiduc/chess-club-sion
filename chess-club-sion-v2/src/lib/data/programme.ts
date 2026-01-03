export type EventCategory = 'ecole-echecs' | 'soiree-club' | 'tournoi-externe' | 'CSE' | 'CSG' | 'CVE' | 'CVI' | 'GPJV' | 'jubilee' | 'championnat-interne';

export interface ProgrammeEvent {
  id: string
  title: string
  date: string
  endDate?: string
  time: string       // Ce que l'utilisateur voit (ex: "Soir")
  endTime?: string    // Ce que l'utilisateur voit
  
  calendarTime?: string      // Heure de début précise (ex: "20:00")
  calendarEndTime?: string   // Heure de fin précise (ex: "23:00")
  calendarLocation?: string  // Adresse précise pour Google Maps
  calendarDetails?: string   // Description détaillée pour le calendrier

  category: EventCategory[]
  description?: string
  location?: string   // Ce que l'utilisateur voit (ex: "Local du club")
  link?: string
  details?: Array<string | { text: string; link: string }>
  image?: string
}

export const programmeEvents: ProgrammeEvent[] = [
  
  {
    id: '2025-11-21-cvi',
    title: 'CVI 2025-2026: 1/16 de finale',
    date: '2025-11-21',
    endDate: '2025-12-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les 16èmes de finale: 15 Décembre.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },
  
  // Décembre 2025
  {
    id: '2025-12-05-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-12-05',
    time: '18h30 - 20h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: '2025-12-05-soiree-blitz',
    title: 'Soirée tournoi blitz',
    date: '2025-12-05',
    time: '20h30',
    category: ['soiree-club'],
    description: 'Tournoi mensuel de parties blitz du club',
    location: "Local du club",
    calendarTime: '20:30',
    calendarEndTime: '23:00', // Assuming it ends at 23:00
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Soirée Blitz du club'
  },
  {
    id: '2025-12-06-avance',
    title: 'Cours avancé',
    date: '2025-12-06',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
  },
  {
    id: '2025-12-06-ecole-uve',
    title: "Ecole d'échecs de l'UVE (Session 1)",
    date: '2025-12-06',
    time: '9h00 - 11h45',
    category: ['ecole-echecs'],
    description: "1ère session de l'Ecole d'échecs de l'Union Valaisanne. Ouvert aux niveaux 'Moyens' (<1500 ELO) et 'Avancés' (>1500 ELO).",
    location: 'Riddes',
    link: '/pdf/tournoi_riddes.pdf', // <-- CORRIGÉ
    details: [
      "Finance : Fr. 15.- (payable sur place)",
      "Délai d'inscription : 29 novembre 2025",
      { text: 'Infos & Inscription (J-C Putallaz)', link: 'mailto:jeanchristophe.putallaz@gmail.com' }
    ],
    image : '/picture/events/UVE.png', // <-- CORRIGÉ
    calendarTime: '09:00',
    calendarEndTime: '11:45',
    calendarLocation: 'Nouvelle Ecole, Ruelle de la Poste, Riddes',
    calendarDetails: "Ecole d'échecs de l'UVE (Session 1). Accueil 9h00-9h15. Cours 9h30-10h45. Jeu/simultanées 11h00-11h45."
  },
  {
    id: '2025-12-06-gpjv-riddes',
    title: '2ème Tournoi du Grand Prix Valaisan Jeunes (GPVJ U20)',
    date: '2025-12-06',
    time: '13h30 - 18h00',
    category: ['tournoi-externe', 'GPJV'],
    description: 'Tournoi jeunes U20 organisé par l\'UVE et Riddes-Echecs. 7 rondes.',
    image : '/picture/events/UVE.png', // <-- CORRIGÉ
    location: 'Riddes',
    link: '/pdf/ecole_6.pdf', // <-- CORRIGÉ
    details: [
      "Ouvert aux jeunes nés après le 01.09.2005",
      "Cadence : 7 rondes de 15 minutes par joueur",
      "Finance : Fr. 15.- (payable sur place)",
      "Inscriptions sur place jusqu\'à 13h15",
      { text: 'Infos (J-C Putallaz)', link: 'mailto:jeanchristophe.putallaz@gmail.com' }
    ],
    calendarTime: '13:30',
    calendarEndTime: '18:00',
    calendarLocation: 'Nouvelle Ecole, Ruelle de la Poste, Riddes',
    calendarDetails: "2ème Tournoi GPVJ U20. Clôture inscriptions 13h15. Rondes 1-7 de 13h30 à 17h45. Remise des prix 18h00."
  },

  {
    id: '2025-12-10-ecolier',
    title: 'Cours écolier',
    date: '2025-12-10',
    time: '13h30 - 15h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs débutants',
    location: "Local du club",
    calendarTime: '13:30',
    calendarEndTime: '15:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours écoliers'
  },
  {
    id: '2025-12-12-intermediaire', // Ajouté
    title: 'Cours intermédiaire',
    date: '2025-12-12',
    time: '18h30 - 20h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: 'csg-2025-12-13-valais1',
    title: 'CSG Ronde 3: SK Bern - Valais 1',
    date: '2025-12-13',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 3',
    location: "Berne (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: 'csg-2025-12-13-valais3',
    title: 'CSG Ronde 3: Fribourg - Valais 3',
    date: '2025-12-13',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 3',
    location: "Fribourg (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: 'csg-2025-12-13-sion1',
    title: 'CSG Ronde 3: Sion 1 - Vevey 2',
    date: '2025-12-13',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 3',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2025-12-17-ecolier', // Ajouté
    title: 'Cours écolier',
    date: '2025-12-17',
    time: '13h30 - 15h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs débutants',
    location: "Local du club",
    calendarTime: '13:30',
    calendarEndTime: '15:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours écoliers'
  },
  {
    id: '2025-12-19-intermediaire', // Ajouté
    title: 'Cours intermédiaire',
    date: '2025-12-19',
    time: '18h30 - 20h00',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: 'cve-2025-12-19-sion1',
    title: 'CVE Ronde 3: Sierre 2 - Sion 1',
    date: '2025-12-19',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 3',
    location: "Sierre (à l\'extérieur)",
    link: '/competitions/cve',
  },
  {
    id: 'cve-2025-12-19-sion2',
    title: 'CVE Ronde 3: Sion 2 - Riddes 2',
    date: '2025-12-19',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 3',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
  },
  {
    id: 'cve-2025-12-19-sion3',
    title: 'CVE Ronde 3: Sion 3 - CE Port-Valais',
    date: '2025-12-19',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 3',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
  },
  {
    id: '2025-12-20-avance',
    title: 'Cours avancé',
    date: '2025-12-20',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
  },
  {
    id: '2025-12-20-analyse',
    title: "Séance collective d'analyse",
    date: '2025-12-20',
    time: '14h00 - 18h00',
    category: ['ecole-echecs', 'soiree-club'],
    description: "Séance collective d'analyse de vos parties, animée par notre coach Flavien.",
    location: "Local du club",
    details: [
      "Analyse des parties du 13 décembre et parties lentes récentes.",
      "Flexibilité totale : venez quand vous voulez entre 14h et 18h.",
      { text: "Inscription et envoi des parties (PGN) à : flaviensola@gmail.com", link: "mailto:flaviensola@gmail.com" }
    ],
    calendarTime: '14:00',
    calendarEndTime: '18:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: "Séance collective d'analyse avec Flavien. Inscription obligatoire par mail."
  },
  {
    id: '2025-12-21-blitz-noel',
    title: 'Blitz Populaire de Noël',
    date: '2025-12-21',
    time: '14h00 - 17h00',
    category: ['tournoi-externe'],
    description: 'Tournoi Blitz de Noël. 7 rondes de 5min + 3s. Homologué FIDE.',
    location: "Local du club",
    calendarTime: '14:00',
    calendarEndTime: '17:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Blitz Populaire de Noël. 7 rondes, 5 min + 3 sec/coup. Ouvert à tous.',
    link: '/blitz-noel',
    details: [
        "7 rondes, 5 min + 3 sec/coup.",
        "Arbitre : NA Fabrice Lovey",
        "Finance: Adultes CHF 15.-, Juniors (U20) CHF 5.-",
        "Limite de 40 participants.",
        { text: 'Inscription en ligne', link: 'https://forms.gle/wTn4UmSqD6o6ouBd7' },
        { text: 'Liste des inscrits', link: 'https://docs.google.com/document/d/1r8EbUMybaKIWZyd58Uco4e1I_dodR-5hE96cWdiMraM/edit?usp=sharing' }
    ],
    image: '/picture/events/Sion.png'
  },
  {
    id: 'internal-championship-2025-26-round-1-deadline',
    title: 'Championnat interne - Ronde 1',
    date: '2025-11-25',
    endDate: '2025-12-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 1 du championnat interne à jouer avant le 25 décembre.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2025-12-16-cvi-8',
    title: 'CVI 2025-2026: 1/8 de finale',
    date: '2025-12-16',
    endDate: '2026-02-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les 8èmes de finale: 15 Février.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },

  // Janvier 2026
  {
    id: '2026-01-09-intermediaire',
    title: 'Cours intermédiaire',
    date: '2026-01-09',
    time: '18h30 - 20h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: '2026-01-09-soiree-blitz',
    title: 'Soirée tournoi blitz',
    date: '2026-01-09',
    time: '20h30',
    category: ['soiree-club'],
    description: 'Tournoi mensuel de parties blitz du club',
    location: "Local du club",
    calendarTime: '20:30',
    calendarEndTime: '23:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Soirée Blitz du club'
  },
  {
    id: '2026-01-10-avance',
    title: 'Cours avancé',
    date: '2026-01-10',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
  },
  {
    id: '2026-01-14-ecolier',
    title: 'Cours écolier',
    date: '2026-01-14',
    time: '13h30 - 15h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs débutants',
    location: "Local du club",
    calendarTime: '13:30',
    calendarEndTime: '15:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours écoliers'
  },
  {
    id: '2026-01-16-intermediaire',
    title: 'Cours intermédiaire',
    date: '2026-01-16',
    time: '18h30 - 20h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: '2026-01-17-avance',
    title: 'Cours avancé',
    date: '2026-01-17',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
  },
  {
    id: '2026-01-21-ecolier',
    title: 'Cours écolier',
    date: '2026-01-21',
    time: '13h30 - 15h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs débutants',
    location: "Local du club",
    calendarTime: '13:30',
    calendarEndTime: '15:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours écoliers'
  },
  {
    id: '2026-01-23-intermediaire',
    title: 'Cours intermédiaire',
    date: '2026-01-23',
    time: '18h30 - 20h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs intermédiaires',
    location: "Local du club",
    calendarTime: '18:30',
    calendarEndTime: '20:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours intermédiaire'
  },
  {
    id: '2026-01-23-soiree-championnat',
    title: 'Championnat interne & Parties libres',
    date: '2026-01-23',
    time: '20h00',
    category: ['soiree-club', 'championnat-interne'],
    description: 'Soirée dédiée à la ronde 2 du championnat interne et parties libres.',
    location: "Local du club",
    calendarTime: '20:00',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Championnat interne Ronde 2 et parties libres.'
  },
  {
    id: '2026-01-28-ecolier',
    title: 'Cours écolier',
    date: '2026-01-28',
    time: '13h30 - 15h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs débutants',
    location: "Local du club",
    calendarTime: '13:30',
    calendarEndTime: '15:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours écoliers'
  },
  {
    id: '2026-01-30-soiree-analyses',
    title: 'Parties libres & Analyses',
    date: '2026-01-30',
    time: '20h00',
    category: ['soiree-club'],
    description: 'Soirée parties libres et analyses.',
    location: "Local du club",
    calendarTime: '20:00',
    calendarEndTime: '23:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Soirée parties libres et analyses.'
  },
  {
    id: '2026-01-31-avance',
    title: 'Cours avancé',
    date: '2026-01-31',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
  },
  {
    id: 'internal-championship-2025-26-round-2-deadline',
    title: 'Championnat interne - Ronde 2',
    date: '2025-12-26',
    endDate: '2026-01-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 2 du championnat interne à jouer avant le 25 janvier.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2026-01-11-bagnes',
    title: 'Tournoi de Bagnes',
    date: '2026-01-11',
    time: 'Toute la journée',
    category: ['tournoi-externe','GPJV'],
    location: 'Préau du Collège de Bagnes au Châble (sous Verbier)',
    image: '/picture/events/Bagnes.png',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/tib',
    calendarTime: '08:30',
    calendarEndTime: '18:00',
    calendarLocation: 'Chem. du Collège 17, 1934 Bagnes',
    calendarDetails: '7 rondes de 20 minutes par joueur + 5 sec par coup'
  },
  {
    id: 'cve-2026-01-16-sion1-2',
    title: 'CVE Ronde 4: Sion 1 - Sion 2',
    date: '2026-01-16',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 4',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVE Ronde 4: Sion 1 vs Sion 2'
  },
  {
    id: 'cve-2026-01-16-sion3',
    title: 'CVE Ronde 4: Bagnes - Sion 3',
    date: '2026-01-16',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 4',
    location: "Bagnes (à l\'extérieur)",
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Chem. du Collège 17, 1934 Bagnes',
    calendarDetails: 'CVE Ronde 4: Bagnes vs Sion 3'
  },
  {
    id: 'csg-2026-01-24-valais1',
    title: 'CSG Ronde 4: Valais 1 - Schwarz-Weiss Bern',
    date: '2026-01-24',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 4',
    location: 'Café du Casino, Martigny',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Café du Casino, Rue du Grand-Verger 2, 1920 Martigny',
    calendarDetails: 'CSG Ronde 4: Valais 1 vs Schwarz-Weiss Bern'
  },
  {
    id: 'csg-2026-01-24-valais3',
    title: 'CSG Ronde 4: Valais 3 - Schwarz-Weiss Bern 2',
    date: '2026-01-24',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 4',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSG Ronde 4: Valais 3 vs Schwarz-Weiss Bern 2'
  },
  {
    id: 'csg-2026-01-24-sion1',
    title: 'CSG Ronde 4: Vevey 2 - Sion 1',
    date: '2026-01-24',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 4',
    location: "Vevey (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Vevey',
    calendarDetails: 'CSG Ronde 4: Vevey 2 vs Sion 1'
  },
  

  // Février 2026
  {
    id: 'internal-championship-2025-26-round-3-deadline',
    title: 'Championnat interne - Ronde 3',
    date: '2026-01-26',
    endDate: '2026-02-23',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 3 du championnat interne à jouer avant le 23 février.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: 'csg-2026-02-07-valais1',
    title: 'CSG Ronde 5: Valais 1 - Nyon',
    date: '2026-02-07',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 5',
    location: 'Café du Casino, Martigny',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Café du Casino, Rue du Grand-Verger 2, 1920 Martigny',
    calendarDetails: 'CSG Ronde 5: Valais 1 vs Nyon'
  },
  {
    id: 'csg-2026-02-07-valais3',
    title: 'CSG Ronde 5: Valais 3 - Köniz Bubenberg',
    date: '2026-02-07',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 5',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSG Ronde 5: Valais 3 vs Köniz Bubenberg'
  },
  {
    id: '2026-02-16-cvi-4',
    title: 'CVI 2025-2026: 1/4 de finale',
    date: '2026-02-16',
    endDate: '2026-03-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les 1/4 de finale: 15 Mars.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },
  {
    id: 'csg-2026-02-21-valais1',
    title: 'CSG Ronde 6: La Chaux-de-Fonds - Valais 1',
    date: '2026-02-21',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 6',
    location: "La Chaux-de-Fonds (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'La Chaux-de-Fonds',
    calendarDetails: 'CSG Ronde 6: La Chaux-de-Fonds vs Valais 1'
  },
  {
    id: 'csg-2026-02-21-valais3',
    title: 'CSG Ronde 6: Valais 3 - Grand Echiquier',
    date: '2026-02-21',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 6',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSG Ronde 6: Valais 3 vs Grand Echiquier'
  },
  {
    id: 'csg-2026-02-21-sion1',
    title: 'CSG Ronde 6: Sion 1 - Valais 4',
    date: '2026-02-21',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 6',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSG Ronde 6: Sion 1 vs Valais 4'
  },
  {
    id: '2026-02-22-bouveret',
    title: '18ème Active Chess du Bouveret',
    date: '2026-02-22',
    time: 'Toute la journée',
    category: ['tournoi-externe','GPJV'],
    location: 'Bouveret',
    image: '/picture/events/CEPV.png'
  },
  {
    id: 'cve-2026-02-27-sion1',
    title: 'CVE Ronde 5: Sion 1 - Martigny 3',
    date: '2026-02-27',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 5',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVE Ronde 5: Sion 1 vs Martigny 3'
  },
  {
    id: 'cve-2026-02-27-sion2',
    title: 'CVE Ronde 5: Sion 2 - Sierre 1',
    date: '2026-02-27',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 5',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVE Ronde 5: Sion 2 vs Sierre 1'
  },
  {
    id: 'cve-2026-02-27-sion3',
    title: 'CVE Ronde 5: Sion 3 - Riddes 1',
    date: '2026-02-27',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 5',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVE Ronde 5: Sion 3 vs Riddes 1'
  },

  // Mars 2026
  {
    id: 'internal-championship-2025-26-round-4-deadline',
    title: 'Championnat interne - Ronde 4',
    date: '2026-02-24',
    endDate: '2026-03-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 4 du championnat interne à jouer avant le 25 mars.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: 'csg-2026-03-07-valais1',
    title: 'CSG Ronde 7: Valais 1 - Olten',
    date: '2026-03-07',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 7',
    location: 'Café du Casino, Martigny',
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Café du Casino, Rue du Grand-Verger 2, 1920 Martigny',
    calendarDetails: 'CSG Ronde 7: Valais 1 vs Olten'
  },
  {
    id: 'csg-2026-03-07-valais3',
    title: 'CSG Ronde 7: Neuchâtel - Valais 3',
    date: '2026-03-07',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 7',
    location: "Neuchâtel (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Neuchâtel',
    calendarDetails: 'CSG Ronde 7: Neuchâtel vs Valais 3'
  },
  {
    id: 'csg-2026-03-07-sion1',
    title: 'CSG Ronde 7: Montreux 2 - Sion 1',
    date: '2026-03-07',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 7',
    location: "Clarens (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Clarens',
    calendarDetails: 'CSG Ronde 7: Montreux 2 vs Sion 1'
  },
  {
    id: 'cse-2026-03-14-sion1',
    title: 'CSE Ronde 1: Bantiger - Sion 1',
    date: '2026-03-14',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 1',
    location: "Ittigen (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Pulferstube Talgutzentrum Ittigen, Talgutzentrum, 3063 Ittigen',
    calendarDetails: 'CSE Ronde 1: Bantiger vs Sion 1'
  },
  {
    id: 'cse-2026-03-14-sion2',
    title: 'CSE Ronde 1: Sion 2 - Fribourg',
    date: '2026-03-14',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 1',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 1: Sion 2 vs Fribourg'
  },
  {
    id: '2026-03-16-cvi-2',
    title: 'CVI 2025-2026: Demi-finales',
    date: '2026-03-16',
    endDate: '2026-04-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les demi-finales: 15 Avril.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },
  {
    id: 'cve-2026-03-20-sion1',
    title: 'CVE Ronde 6: Sierre 1 - Sion 1',
    date: '2026-03-20',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 6',
    location: "Sierre (à l\'extérieur)",
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Hôtel de Ville, Rue du Bourg 14, 3960 Sierre',
    calendarDetails: 'CVE Ronde 6: Sierre 1 vs Sion 1'
  },
  {
    id: 'cve-2026-03-20-sion2',
    title: 'CVE Ronde 6: Martigny 3 - Sion 2',
    date: '2026-03-20',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 6',
    location: "Martigny (à l\'extérieur)",
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Café du Casino, Rue du Grand-Verger 2, 1920 Martigny',
    calendarDetails: 'CVE Ronde 6: Martigny 3 vs Sion 2'
  },
  {
    id: 'cve-2026-03-20-sion3',
    title: 'CVE Ronde 6: Sion 3 - Montana 2',
    date: '2026-03-20',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 6',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
    calendarTime: '19:45',
    calendarEndTime: '23:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVE Ronde 6: Sion 3 vs Montana 2'
  },

  // Avril 2026
  {
    id: 'internal-championship-2025-26-round-5-deadline',
    title: 'Championnat interne - Ronde 5',
    date: '2026-03-26',
    endDate: '2026-04-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 5 du championnat interne à jouer avant le 25 avril.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: 'cse-2026-04-18-sion1',
    title: 'CSE Ronde 2: Sion 1 - Brig',
    date: '2026-04-18',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 2',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 2: Sion 1 vs Brig'
  },
  {
    id: 'cse-2026-04-18-sion2',
    title: 'CSE Ronde 2: Vevey - Sion 2',
    date: '2026-04-18',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 2',
    location: "Vevey (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Foyer ASLN, Rue Hotel de Ville 1, 1800 Vevey',
    calendarDetails: 'CSE Ronde 2: Vevey vs Sion 2'
  },

  // Mai 2026
  {
    id: 'internal-championship-2025-26-round-6-deadline',
    title: 'Championnat interne - Ronde 6',
    date: '2026-04-26',
    endDate: '2026-05-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 6 du championnat interne à jouer avant le 25 mai.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2026-05-02-cve',
    title: 'Finales du CVE & Championnat CVER',
    date: '2026-05-02',
    time: 'Toute la journée',
    category: ['CVE'],
    description: "Finales du Championnat valaisan par équipes et Championnat valaisan par équipes de parties rapides",
    location: 'Riddes',
    link: '/competitions/cve',
  },
  {
    id: 'cse-2026-05-09-sion1',
    title: 'CSE Ronde 3: Sion 1 - Bern',
    date: '2026-05-09',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 3',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 3: Sion 1 vs Bern'
  },
  {
    id: 'cse-2026-05-09-sion2',
    title: 'CSE Ronde 3: Romont - Sion 2',
    date: '2026-05-09',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 3',
    location: "Romont (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Cafe Suisse, Rue du Château 105, 1680 Romont',
    calendarDetails: 'CSE Ronde 3: Romont vs Sion 2'
  },
  {
    id: '2026-05-01-cvi-finale',
    title: 'CVI 2025-2026: Finale',
    date: '2026-05-01',
    time: 'Date à définir',
    category: ['CVI'],
    description: 'A planifier en Mai.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },
  {
    id: '2026-05-14',
    title: 'Tournoi Fédéral',
    date: '2026-05-14',
    endDate: '2026-05-16',
    time: 'Toute la journée',
    category: ['tournoi-externe'],
    description: "Tournoi Fédéral d'échecs",
    location: 'Bâle',
    link: 'https://www.swisschess.ch/federal.html',
    image: '/picture/events/FSE.png',
  },

  // Juin 2026
  {
    id: 'internal-championship-2025-26-round-7-deadline',
    title: 'Championnat interne - Ronde 7',
    date: '2026-05-26',
    endDate: '2026-06-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Ronde 7 du championnat interne à jouer avant le 25 juin. Remise des prix.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: 'cse-2026-06-06-sion1',
    title: 'CSE Ronde 4: Sion 1 - Monthey',
    date: '2026-06-06',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 4',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 4: Sion 1 vs Monthey'
  },
  {
    id: 'cse-2026-06-06-sion2',
    title: 'CSE Ronde 4: Sion 2 - Valais',
    date: '2026-06-06',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 4',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 4: Sion 2 vs Valais'
  },
  {
    id: 'cse-2026-06-20-sion1',
    title: 'CSE Ronde 5: Düdingen - Sion 1',
    date: '2026-06-20',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 5',
    location: "Düdingen (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Begegnungszentrum, Horiastr. 1, 3186 Düdingen',
    calendarDetails: 'CSE Ronde 5: Düdingen vs Sion 1'
  },
  {
    id: 'cse-2026-06-20-sion2',
    title: 'CSE Ronde 5: Grand Echiquier - Sion 2',
    date: '2026-06-20',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 5',
    location: "Lausanne (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Cercle de la Cité, Avenue du Grey 1, 1004 Lausanne',
    calendarDetails: 'CSE Ronde 5: Grand Echiquier vs Sion 2'
  },

  // Juillet 2026
  {
    id: '2026-07-11',
    title: 'Championnat Suisse Individuel',
    date: '2026-07-11',
    endDate: '2026-07-19',
    time: 'Toute la journée',
    category: ['tournoi-externe'],
    description: 'Championnat Suisse Individuel (CSI)',
    location: 'Grächen',
    link: 'https://www.swisschess.ch/csi.html',
    image: '/picture/events/FSE.png',
  },

  // Août 2026
  {
    id: 'cse-2026-08-22-sion1',
    title: 'CSE Ronde 6: Fribourg - Sion 1',
    date: '2026-08-22',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 6',
    location: "Fribourg (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Centre de Pro Senectute, Passage du Cardinal 18, 1700 Fribourg',
    calendarDetails: 'CSE Ronde 6: Fribourg vs Sion 1'
  },
  {
    id: 'cse-2026-08-22-sion2',
    title: 'CSE Ronde 6: Sion 2 - Bulle',
    date: '2026-08-22',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 6',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CSE Ronde 6: Sion 2 vs Bulle'
  },

  // Septembre 2026
  {
    id: 'cse-2026-09-12-sion1',
    title: 'CSE Ronde 7: Valais - Sion 1',
    date: '2026-09-12',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 7',
    location: "Monthey (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Local du CE Monthey, Place centrale 3, 1870 Monthey',
    calendarDetails: 'CSE Ronde 7: Valais vs Sion 1'
  },
  {
    id: 'cse-2026-09-12-sion2',
    title: 'CSE Ronde 7: Crans-Montana - Sion 2',
    date: '2026-09-12',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes, Ronde 7',
    location: "Crans-Montana (à l\'extérieur)",
    link: 'https://www.swisschess.ch/cse.html',
    calendarTime: '14:00',
    calendarEndTime: '19:00',
    calendarLocation: 'Buvette Camping de la Moubra, Impasse de la Plage 2, 3963 Crans-Montana',
    calendarDetails: 'CSE Ronde 7: Crans-Montana vs Sion 2'
  }
]

export const categoryLabels = {
  'ecole-echecs': 'Ecole d\'échecs',
  'soiree-club': 'Soirée club',
  'tournoi-externe': 'Tournoi externe',
  CSE: 'CSE',
  CSG: 'CSG',
  CVE: 'CVE',
  CVI: 'CVI',
  GPJV: 'GPJV',
  jubilee: 'Jubilée',
  'championnat-interne': 'Championnat interne'
}

export const categoryColors = {
  'ecole-echecs': 'bg-cyan-100 text-cyan-800',
  'soiree-club': 'bg-slate-100 text-slate-800',
  'tournoi-externe': 'bg-violet-100 text-purple-800',
  CSE: 'bg-blue-100 text-blue-800',
  CSG: 'bg-green-100 text-green-800',
  CVE: 'bg-red-100 text-red-800',
  CVI: 'bg-purple-100 text-purple-800',
  GPJV: 'bg-orange-100 text-orange-800',
  jubilee: 'bg-teal-100 text-teal-800',
  'championnat-interne': 'bg-amber-100 text-amber-800'
}