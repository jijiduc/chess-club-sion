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
    id: '2025-11-21-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-11-21',
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
    id: '2025-11-21-cvi-tournoi-rapide',
    title: 'CVI & Tournoi rapide 10+5',
    date: '2025-11-21',
    time: '20h00',
    category: ['CVI', 'soiree-club', 'tournoi-externe'],
    description: 'CVI & Tournoi rapide 10+5 à partir de 20h00',
    location: "Local du club",
    calendarTime: '20:00',
    calendarEndTime: '23:00', // Assuming it ends at 23:00
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'CVI & Tournoi rapide 10+5'
  },
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
  {
    id: 'csg-2025-11-22-valais1',
    title: 'CSG Ronde 2: Valais 1 - Echallens',
    date: '2025-11-22',
    time: '14h00',
    category: ['CSG'],
    description: '2. Bundesliga, Ronde 2',
    location: 'Café du Casino, Martigny',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: 'csg-2025-11-22-valais3',
    title: 'CSG Ronde 2: Echallens 2 - Valais 3',
    date: '2025-11-22',
    time: '14h00',
    category: ['CSG'],
    description: '1. Regionalliga, Ronde 2',
    location: "Echallens (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: 'csg-2025-11-22-sion1',
    title: 'CSG Ronde 2: Sion 1 - Montreux 2',
    date: '2025-11-22',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 2',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2025-11-26-ecolier',
    title: 'Cours écolier',
    date: '2025-11-26',
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
    id: '2025-11-28-intermediaire',
    title: 'Cours intermédiaire',
    date: '2025-11-28',
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
    id: 'cve-2025-11-28-sion1',
    title: 'CVE Ronde 2: Riddes 1 - Sion 1',
    date: '2025-11-28',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 2',
    location: 'Riddes (à l\'extérieur)',
    link: '/competitions/cve',
  },
  {
    id: 'cve-2025-11-28-sion2',
    title: 'CVE Ronde 2: Sion 2 - Martigny 1',
    date: '2025-11-28',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 2',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
  },
  {
    id: 'cve-2025-11-28-sion3',
    title: 'CVE Ronde 2: Sion 3 - Martigny 3',
    date: '2025-11-28',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes, Ronde 2',
    location: 'Local du CE Sion',
    link: '/competitions/cve',
  },
  {
    id: '2025-11-29-avance',
    title: 'Cours avancé',
    date: '2025-11-29',
    time: '9h30 - 11h30',
    category: ['ecole-echecs'],
    description: 'Cours pour les joueurs avancés',
    location: "Local du club",
    calendarTime: '09:30',
    calendarEndTime: '11:30',
    calendarLocation: 'Rue des Châteaux 2, 1950 Sion',
    calendarDetails: 'Ecole d\'échecs de Sion : cours avancés'
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
    id: '2025-12-11-ecolier',
    title: 'Cours écolier',
    date: '2025-12-11',
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
    location: 'Sierre (à l\'extérieur)',
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
    title: 'Championnat interne - Date limite Ronde 1',
    date: '2025-12-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 1 du championnat interne.',
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
    id: 'internal-championship-2025-26-round-2-deadline',
    title: 'Championnat interne - Date limite Ronde 2',
    date: '2026-01-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 2 du championnat interne.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2026-01-09-cvi',
    title: 'CVI 2025-2026: 1/4 de finale',
    date: '2026-01-09',
    endDate: '2026-03-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les 1/4 de finale: 15 Mars.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
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
    id: '2026-01-16-cve',
    title: 'CVE 2025-2026 (ronde 4)',
    date: '2026-01-16',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes de parties classiques, Ronde 4',
    link: '/competitions/cve',
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
  },
  

  // Février 2026
  {
    id: 'internal-championship-2025-26-round-3-deadline',
    title: 'Championnat interne - Date limite Ronde 3',
    date: '2026-02-23',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 3 du championnat interne.',
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
  },
  {
    id: 'csg-2026-02-21-sion1',
    title: 'CSG Ronde 5: Sion 1 - Valais 4',
    date: '2026-02-21',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 5',
    location: 'Local du CE Sion',
    link: 'https://www.swisschess.ch/csg.html',
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
    id: '2026-02-27-cve',
    title: 'CVE 2025-2026 (ronde 5)',
    date: '2026-02-27',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes de parties classiques, Ronde 5',
    link: '/competitions/cve',
  },

  // Mars 2026
  {
    id: 'internal-championship-2025-26-round-4-deadline',
    title: 'Championnat interne - Date limite Ronde 4',
    date: '2026-03-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 4 du championnat interne.',
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
  },
  {
    id: 'csg-2026-03-07-sion1',
    title: 'CSG Ronde 6: Montreux 2 - Sion 1',
    date: '2026-03-07',
    time: '14h00',
    category: ['CSG'],
    description: '3. Regionalliga, Ronde 6',
    location: "Clarens (à l\'extérieur)",
    link: 'https://www.swisschess.ch/csg.html',
  },
  {
    id: '2026-03-14-cse',
    title: 'CSE - Ronde 1',
    date: '2026-03-14',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes (saison 2026), Ronde 1',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2026-03-20-cve',
    title: 'CVE 2025-2026 (ronde 6)',
    date: '2026-03-20',
    time: '20h00',
    category: ['CVE'],
    description: 'Championnat valaisan par équipes de parties classiques, Ronde 6',
    link: '/competitions/cve',
  },

  // Avril 2026
  {
    id: 'internal-championship-2025-26-round-5-deadline',
    title: 'Championnat interne - Date limite Ronde 5',
    date: '2026-04-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 5 du championnat interne.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2026-04-10-cvi',
    title: 'CVI 2025-2026: Demi-finales',
    date: '2026-04-10',
    endDate: '2026-04-15',
    time: 'Soir',
    category: ['CVI'],
    description: 'Date limite pour les demi-finales: 15 Avril.',
    link: 'https://www.uve-wsb.ch/competitions-valaisannes/cvi'
  },
  {
    id: '2026-04-18',
    title: 'CSE - Ronde 2',
    date: '2026-04-18',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes (saison 2026), Ronde 2',
    link: 'https://www.swisschess.ch/cse.html',
  },

  // Mai 2026
  {
    id: 'internal-championship-2025-26-round-6-deadline',
    title: 'Championnat interne - Date limite Ronde 6',
    date: '2026-05-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 6 du championnat interne.',
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
    id: '2026-05-09-cse',
    title: 'CSE - Ronde 3',
    date: '2026-05-09',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes (saison 2026), Ronde 3',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2026-05-10-cvi-finale',
    title: 'CVI 2025-2026: Finale (en Mai)',
    date: '2026-05-15',
    time: 'Date pas encore définie',
    category: ['CVI'],
    description: 'Finale à planifier en Mai.',
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
    title: 'Championnat interne - Date limite Ronde 7 et Remise des prix',
    date: '2026-06-25',
    time: 'Soir',
    category: ['championnat-interne'],
    description: 'Date limite pour les résultats de la ronde 7 du championnat interne. Remise des prix.',
    link: '/competitions/championnat-interne',
    image: '/picture/events/Sion.png'
  },
  {
    id: '2026-06-06',
    title: 'CSE - Ronde 4',
    date: '2026-06-06',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes (saison 2026), Ronde 4',
    link: 'https://www.swisschess.ch/cse.html',
  },
  {
    id: '2026-06-20',
    title: 'CSE - Ronde 5',
    date: '2026-06-20',
    time: '14h00',
    category: ['CSE'],
    description: 'Championnat suisse par équipes (saison 2026), Ronde 5',
    link: 'https://www.swisschess.ch/cse.html',
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
  'ecole-echecs': 'bg-blue-100 text-blue-800',
  'soiree-club': 'bg-green-100 text-green-800',
  'tournoi-externe': 'bg-purple-100 text-purple-800',
  CSE: 'bg-red-100 text-red-800',
  CSG: 'bg-orange-100 text-orange-800',
  CVE: 'bg-pink-100 text-pink-800',
  CVI: 'bg-indigo-100 text-indigo-800',
  GPJV: 'bg-cyan-100 text-cyan-800',
  jubilee: 'bg-teal-100 text-teal-800',
  'championnat-interne': 'bg-yellow-100 text-yellow-800'
}