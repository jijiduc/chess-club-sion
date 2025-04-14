// dataManager.js

// Données statiques
const LEAGUES = [
  { id: 1, name: "1ère ligue" },
  { id: 2, name: "3ème ligue" }
];

const TEAMS = [
  // 1ère ligue
  { id: 1, name: "Sion 1", leagueId: 1 },
  { id: 2, name: "Genève 2", leagueId: 1 },
  { id: 3, name: "Neuchâtel 1", leagueId: 1 },
  { id: 4, name: "Valais 1", leagueId: 1 },
  { id: 5, name: "Echallens 2", leagueId: 1 },
  { id: 6, name: "Grand Echiquier 1", leagueId: 1 },
  { id: 7, name: "Köniz-Bubenberg 1", leagueId: 1 },
  { id: 8, name: "Fribourg 1", leagueId: 1 },
  
  // 3ème ligue
  { id: 9, name: "Sion 2", leagueId: 2 },
  { id: 10, name: "Grand Echiquier 2", leagueId: 2 },
  { id: 11, name: "Monthey 1", leagueId: 2 },
  { id: 12, name: "Crans-Montana 2", leagueId: 2 },
  { id: 13, name: "Valais 2", leagueId: 2 },
  { id: 14, name: "Bulle 3", leagueId: 2 },
  { id: 15, name: "Crazy Horse 1", leagueId: 2 },
  { id: 16, name: "Payerne 2", leagueId: 2 }
];

const ROUNDS_INFO = [
  { id: 1, date: "2023-09-15", roundNumber: 1 },
  { id: 2, date: "2023-10-20", roundNumber: 2 },
  { id: 3, date: "2023-11-17", roundNumber: 3 },
  { id: 4, date: "2023-12-15", roundNumber: 4 },
  { id: 5, date: "2024-01-19", roundNumber: 5 },
  { id: 6, date: "2024-02-16", roundNumber: 6 },
  { id: 7, date: "2024-03-22", roundNumber: 7 }
];

// Cache pour les données des rondes
const roundsCache = {};

// Exemple de données pour la ronde 1 (normalement dans un fichier séparé)
const round1Data = {
  matches: [
    // 1ère ligue
    {
      id: 1,
      roundId: 1,
      homeTeamId: 2, // Genève 2
      awayTeamId: 3, // Neuchâtel 1
      score: "5½-2½"
    },
    {
      id: 2,
      roundId: 1,
      homeTeamId: 4, // Valais 1
      awayTeamId: 5, // Echallens 2
      score: "3½-4½"
    },
    {
      id: 3,
      roundId: 1,
      homeTeamId: 1, // Sion 1
      awayTeamId: 6, // Grand Echiquier 1
      score: "1½-6½"
    },
    {
      id: 4,
      roundId: 1,
      homeTeamId: 7, // Köniz-Bubenberg 1
      awayTeamId: 8, // Fribourg 1
      score: "2-6"
    },
    
    // 3ème ligue
    {
      id: 5,
      roundId: 1,
      homeTeamId: 10, // Grand Echiquier 2
      awayTeamId: 11, // Monthey 1
      score: "1-5"
    },
    {
      id: 6,
      roundId: 1,
      homeTeamId: 9, // Sion 2
      awayTeamId: 12, // Crans-Montana 2
      score: "2-4"
    },
    {
      id: 7,
      roundId: 1,
      homeTeamId: 13, // Valais 2
      awayTeamId: 14, // Bulle 3
      score: "5-1"
    },
    {
      id: 8,
      roundId: 1,
      homeTeamId: 15, // Crazy Horse 1
      awayTeamId: 16, // Payerne 2
      score: "3½-2½"
    }
  ],
  
  boards: [
    // Match 1: Genève 2 vs Neuchâtel 1
    {
      matchId: 1,
      boardNumber: 1,
      homePlayer: "Dominique Li",
      homeRating: 2292,
      result: "1-0",
      awayPlayer: "Robin Voland",
      awayRating: 2057
    },
    {
      matchId: 1,
      boardNumber: 2,
      homePlayer: "Richard Gerber",
      homeRating: 2233,
      result: "1-0",
      awayPlayer: "Bertrand Banderet",
      awayRating: 1942
    },
    {
      matchId: 1,
      boardNumber: 3,
      homePlayer: "Laurent Geiser",
      homeRating: 2210,
      result: "0-1",
      awayPlayer: "Roland Hauser",
      awayRating: 2026
    },
    {
      matchId: 1,
      boardNumber: 4,
      homePlayer: "Daniel Chiriac",
      homeRating: 2075,
      result: "1-0",
      awayPlayer: "Hassan Roger Sadeghi",
      awayRating: 2098
    },
    {
      matchId: 1,
      boardNumber: 5,
      homePlayer: "Christophe Rivaud",
      homeRating: 1986,
      result: "0-1",
      awayPlayer: "Roman Tkhoruk",
      awayRating: 1896
    },
    {
      matchId: 1,
      boardNumber: 6,
      homePlayer: "Tiziano Frei",
      homeRating: 1920,
      result: "1-0",
      awayPlayer: "Jason Weber",
      awayRating: 1838
    },
    {
      matchId: 1,
      boardNumber: 7,
      homePlayer: "Jeremy Broome",
      homeRating: 1885,
      result: "½-½",
      awayPlayer: "Luca Srdjenovic",
      awayRating: 1882
    },
    {
      matchId: 1,
      boardNumber: 8,
      homePlayer: "Hugo Jelicic",
      homeRating: 1894,
      result: "1-0",
      awayPlayer: "Mohamad Al-Dourobi",
      awayRating: 1770
    },

    // Match 2: Valais 1 vs Echallens 2
    {
      matchId: 2,
      boardNumber: 1,
      homePlayer: "Ludovic Zaza",
      homeRating: 2140,
      result: "½-½",
      awayPlayer: "Lindo Duratti",
      awayRating: 2134
    },
    // ... autres parties du match 2
    
    // Match 3: Sion 1 vs Grand Echiquier 1
    {
      matchId: 3,
      boardNumber: 1,
      homePlayer: "Flavien Sola",
      homeRating: 2167,
      result: "0-1",
      awayPlayer: "Guillaume Chauvon",
      awayRating: 2076
    },
    {
      matchId: 3,
      boardNumber: 2,
      homePlayer: "Vlad Popescu",
      homeRating: 1990,
      result: "0-1",
      awayPlayer: "Ferran Rocamora Martorell",
      awayRating: 2126
    },
    {
      matchId: 3,
      boardNumber: 3,
      homePlayer: "Pierre-M. Rappaz",
      homeRating: 1933,
      result: "½-½",
      awayPlayer: "Jonathan Jaccard",
      awayRating: 1949
    },
    {
      matchId: 3,
      boardNumber: 4,
      homePlayer: "Jean-Yves Riand",
      homeRating: 1877,
      result: "½-½",
      awayPlayer: "Jean-Manuel Segura",
      awayRating: 2066
    },
    {
      matchId: 3,
      boardNumber: 5,
      homePlayer: "Max Chappaz",
      homeRating: 1904,
      result: "0-1",
      awayPlayer: "Sébastien Vasey",
      awayRating: 1956
    },
    {
      matchId: 3,
      boardNumber: 6,
      homePlayer: "Yves Roduit",
      homeRating: 1910,
      result: "0-1",
      awayPlayer: "Vincent Conrad",
      awayRating: 1904
    },
    {
      matchId: 3,
      boardNumber: 7,
      homePlayer: "Olivier Ulmann",
      homeRating: 1788,
      result: "0-1",
      awayPlayer: "Pierpaolo Ranieri",
      awayRating: 1893
    },
    {
      matchId: 3,
      boardNumber: 8,
      homePlayer: "Jeremy Duc",
      homeRating: 1829,
      result: "½-½",
      awayPlayer: "Mathis Soubeyrand",
      awayRating: 1547
    },
    
    // ... autres matches et parties

    // Match 6: Sion 2 vs Crans-Montana 2
    {
      matchId: 6,
      boardNumber: 1,
      homePlayer: "Alexandre Briguet",
      homeRating: 1828,
      result: "0-1",
      awayPlayer: "Alessandro Bonalli",
      awayRating: 1621
    },
    {
      matchId: 6,
      boardNumber: 2,
      homePlayer: "Olivier Crettenand",
      homeRating: 1826,
      result: "1-0",
      awayPlayer: "Timur Gökok",
      awayRating: null
    },
    {
      matchId: 6,
      boardNumber: 3,
      homePlayer: "Mazlum Tosun",
      homeRating: 1689,
      result: "1-0",
      awayPlayer: "Hervé Frainay",
      awayRating: 1561
    },
    {
      matchId: 6,
      boardNumber: 4,
      homePlayer: "Sandro Bétrisey",
      homeRating: 1745,
      result: "0-1",
      awayPlayer: "Luc Udry",
      awayRating: 1523
    },
    {
      matchId: 6,
      boardNumber: 5,
      homePlayer: "Akram Ben Salem",
      homeRating: null,
      result: "0-1",
      awayPlayer: "Jean-Claude Zermatten",
      awayRating: 1559
    },
    {
      matchId: 6,
      boardNumber: 6,
      homePlayer: "Florian Clavien",
      homeRating: null,
      result: "0-1",
      awayPlayer: "Claude-Alain Bonvin",
      awayRating: 1629
    }

    // ... autres parties pour les autres matches
  ],
  
  rankings: {
    1: [ // 1ère ligue
      { rank: 1, teamId: 6, matchPoints: 2, gamePoints: "6½" },
      { rank: 2, teamId: 8, matchPoints: 2, gamePoints: "6" },
      { rank: 3, teamId: 2, matchPoints: 2, gamePoints: "5½" },
      { rank: 4, teamId: 5, matchPoints: 2, gamePoints: "4½" },
      { rank: 5, teamId: 4, matchPoints: 0, gamePoints: "3½" },
      { rank: 6, teamId: 3, matchPoints: 0, gamePoints: "2½" },
      { rank: 7, teamId: 7, matchPoints: 0, gamePoints: "2" },
      { rank: 8, teamId: 1, matchPoints: 0, gamePoints: "1½" }
    ],
    2: [ // 3ème ligue
      { rank: 1, teamId: 11, matchPoints: 2, gamePoints: "5" },
      { rank: 1, teamId: 13, matchPoints: 2, gamePoints: "5" },
      { rank: 3, teamId: 12, matchPoints: 2, gamePoints: "4" },
      { rank: 4, teamId: 15, matchPoints: 2, gamePoints: "3½" },
      { rank: 5, teamId: 16, matchPoints: 0, gamePoints: "2½" },
      { rank: 6, teamId: 9, matchPoints: 0, gamePoints: "2" },
      { rank: 7, teamId: 14, matchPoints: 0, gamePoints: "1" },
      { rank: 7, teamId: 10, matchPoints: 0, gamePoints: "1" }
    ]
  }
};

// Données pour la ronde 2 - basées sur les fichiers CSV
const round2Data = {
  matches: [
    // 1ère ligue (Sion1) - basé sur Sion1_ronde2_matches.csv
    {
      id: 1,
      roundId: 2,
      homeTeamId: 2, // Genève 2
      awayTeamId: 8, // Fribourg 1
      score: "3-5"
    },
    {
      id: 2,
      roundId: 2,
      homeTeamId: 6, // Grand Echiquier 1
      awayTeamId: 5, // Echallens 2
      score: "6-2"
    },
    {
      id: 3,
      roundId: 2,
      homeTeamId: 3, // Neuchâtel 1
      awayTeamId: 4, // Valais 1
      score: "5-3"
    },
    {
      id: 4,
      roundId: 2,
      homeTeamId: 1, // Sion 1
      awayTeamId: 7, // Köniz-Bubenberg 1
      score: "3½-4½"
    },
    
    // 3ème ligue (Sion2) - basé sur Sion2_ronde2_matches.csv
    {
      id: 5,
      roundId: 2,
      homeTeamId: 14, // Bulle 3
      awayTeamId: 12, // Crans-Montana 2
      score: "0-6"
    },
    {
      id: 6,
      roundId: 2,
      homeTeamId: 11, // Monthey 1
      awayTeamId: 13, // Valais 2
      score: "3-3"
    },
    {
      id: 7,
      roundId: 2,
      homeTeamId: 10, // Grand Echiquier 2
      awayTeamId: 16, // Payerne 2
      score: "3-3"
    },
    {
      id: 8,
      roundId: 2,
      homeTeamId: 9, // Sion 2
      awayTeamId: 15, // Crazy Horse 1
      score: "4½-1½"
    }
  ],
  
  boards: [
    // 1ère ligue - Match 4: Sion 1 vs Köniz-Bubenberg 1
    {
      matchId: 4,
      boardNumber: 1,
      homePlayer: "Flavien Sola",
      homeRating: 2167,
      result: "1-0",
      awayPlayer: "Dimitrij Petrovic",
      awayRating: 1933
    },
    {
      matchId: 4,
      boardNumber: 2,
      homePlayer: "Vlad Popescu",
      homeRating: 1990,
      result: "0-1",
      awayPlayer: "Yann Werro",
      awayRating: 1892
    },
    {
      matchId: 4,
      boardNumber: 3,
      homePlayer: "Pierre-M. Rappaz",
      homeRating: 1933,
      result: "0-1",
      awayPlayer: "Andreas Stalder",
      awayRating: 1914
    },
    {
      matchId: 4,
      boardNumber: 4,
      homePlayer: "Jean-Yves Riand",
      homeRating: 1877,
      result: "0-1",
      awayPlayer: "Michael Jost",
      awayRating: 1880
    },
    {
      matchId: 4,
      boardNumber: 5,
      homePlayer: "Max Chappaz",
      homeRating: 1904,
      result: "½-½",
      awayPlayer: "Hubert Graber",
      awayRating: 1881
    },
    {
      matchId: 4,
      boardNumber: 6,
      homePlayer: "Yves Roduit",
      homeRating: 1910,
      result: "½-½",
      awayPlayer: "Ueli von Allmen",
      awayRating: 1864
    },
    {
      matchId: 4,
      boardNumber: 7,
      homePlayer: "Olivier Ulmann",
      homeRating: 1788,
      result: "1-0",
      awayPlayer: "Emanuell Schwarz",
      awayRating: 1781
    },
    {
      matchId: 4,
      boardNumber: 8,
      homePlayer: "Jeremy Duc",
      homeRating: 1829,
      result: "½-½",
      awayPlayer: "Stefan Müller",
      awayRating: 1694
    },
    
    // Autres matches 1ère ligue
    {
      matchId: 1,
      boardNumber: 1,
      homePlayer: "Dominique Li",
      homeRating: 2292,
      result: "0-1",
      awayPlayer: "Yuri Garrett",
      awayRating: 2177
    },
    {
      matchId: 1,
      boardNumber: 2,
      homePlayer: "Richard Gerber",
      homeRating: 2233,
      result: "1-0",
      awayPlayer: "Nikola Mitkov",
      awayRating: 2133
    },
    {
      matchId: 1,
      boardNumber: 3,
      homePlayer: "Laurent Geiser",
      homeRating: 2210,
      result: "0-1",
      awayPlayer: "Claude Landenbergue",
      awayRating: 2074
    },
    {
      matchId: 1,
      boardNumber: 4,
      homePlayer: "Daniel Chiriac",
      homeRating: 2075,
      result: "0-1",
      awayPlayer: "Valeri Atlas",
      awayRating: 2148
    },
    {
      matchId: 1,
      boardNumber: 5,
      homePlayer: "Christophe Rivaud",
      homeRating: 1986,
      result: "1-0",
      awayPlayer: "Pierre-Jean Charra",
      awayRating: 2049
    },
    {
      matchId: 1,
      boardNumber: 6,
      homePlayer: "Tiziano Frei",
      homeRating: 1920,
      result: "0-1",
      awayPlayer: "Slobodan Milovanovic",
      awayRating: 2002
    },
    {
      matchId: 1,
      boardNumber: 7,
      homePlayer: "Jeremy Broome",
      homeRating: 1885,
      result: "0-1",
      awayPlayer: "Christophe Wolfer",
      awayRating: 1858
    },
    {
      matchId: 1,
      boardNumber: 8,
      homePlayer: "Hugo Jelicic",
      homeRating: 1894,
      result: "1-0",
      awayPlayer: "Gabriel Marcacci",
      awayRating: 1772
    },
    
    {
      matchId: 2,
      boardNumber: 1,
      homePlayer: "Guillaume Chauvon",
      homeRating: 2076,
      result: "1-0",
      awayPlayer: "Lindo Duratti",
      awayRating: 2134
    },
    {
      matchId: 2,
      boardNumber: 2,
      homePlayer: "Ferran Rocamora Martorell",
      homeRating: 2126,
      result: "1-0",
      awayPlayer: "Marc Petitpierre",
      awayRating: 2010
    },
    {
      matchId: 2,
      boardNumber: 3,
      homePlayer: "Jonathan Jaccard",
      homeRating: 1949,
      result: "1-0",
      awayPlayer: "Noel Studer",
      awayRating: 2118
    },
    {
      matchId: 2,
      boardNumber: 4,
      homePlayer: "Jean-Manuel Segura",
      homeRating: 2066,
      result: "1-0",
      awayPlayer: "Claude Winkler",
      awayRating: 1915
    },
    {
      matchId: 2,
      boardNumber: 5,
      homePlayer: "Sébastien Vasey",
      homeRating: 1956,
      result: "0-1",
      awayPlayer: "Jean-Paul Grangier",
      awayRating: 1886
    },
    {
      matchId: 2,
      boardNumber: 6,
      homePlayer: "Vincent Conrad",
      homeRating: 1904,
      result: "1-0",
      awayPlayer: "Félix Carruzzo",
      awayRating: 1873
    },
    {
      matchId: 2,
      boardNumber: 7,
      homePlayer: "Pierpaolo Ranieri",
      homeRating: 1893,
      result: "1-0",
      awayPlayer: "Attaulah Ziyaee",
      awayRating: 1789
    },
    {
      matchId: 2,
      boardNumber: 8,
      homePlayer: "Mathis Soubeyrand",
      homeRating: 1547,
      result: "0-1",
      awayPlayer: "Enrico Sonzogni",
      awayRating: 1772
    },
    
    {
      matchId: 3,
      boardNumber: 1,
      homePlayer: "Robin Voland",
      homeRating: 2057,
      result: "1-0",
      awayPlayer: "Ludovic Zaza",
      awayRating: 2140
    },
    {
      matchId: 3,
      boardNumber: 2,
      homePlayer: "Bertrand Banderet",
      homeRating: 1942,
      result: "1-0",
      awayPlayer: "Jean-Christophe Putallaz",
      awayRating: 2096
    },
    {
      matchId: 3,
      boardNumber: 3,
      homePlayer: "Roland Hauser",
      homeRating: 2026,
      result: "1-0",
      awayPlayer: "Marco Sannitz",
      awayRating: 1932
    },
    {
      matchId: 3,
      boardNumber: 4,
      homePlayer: "Hassan Roger Sadeghi",
      homeRating: 2098,
      result: "1-0",
      awayPlayer: "Pierre Molleyres",
      awayRating: 1874
    },
    {
      matchId: 3,
      boardNumber: 5,
      homePlayer: "Roman Tkhoruk",
      homeRating: 1896,
      result: "0-1",
      awayPlayer: "Philippe Berclaz",
      awayRating: 1855
    },
    {
      matchId: 3,
      boardNumber: 6,
      homePlayer: "Jason Weber",
      homeRating: 1838,
      result: "0-1",
      awayPlayer: "Nicolas Salamin",
      awayRating: 1857
    },
    {
      matchId: 3,
      boardNumber: 7,
      homePlayer: "Luca Srdjenovic",
      homeRating: 1882,
      result: "1-0",
      awayPlayer: "David Roduit",
      awayRating: 1790
    },
    {
      matchId: 3,
      boardNumber: 8,
      homePlayer: "Mohamad Al-Dourobi",
      homeRating: 1770,
      result: "0-1",
      awayPlayer: "Frédéric Bonvin",
      awayRating: 1684
    },
    
    // 3ème ligue - Match 8: Sion 2 vs Crazy Horse 1
    {
      matchId: 8,
      boardNumber: 1,
      homePlayer: "Alexandre Briguet",
      homeRating: 1828,
      result: "1-0",
      awayPlayer: "Horia Butuianu",
      awayRating: 1615
    },
    {
      matchId: 8,
      boardNumber: 2,
      homePlayer: "Olivier Crettenand",
      homeRating: 1826,
      result: "1-0",
      awayPlayer: "Matija Srdjenovic",
      awayRating: 1605
    },
    {
      matchId: 8,
      boardNumber: 3,
      homePlayer: "Mazlum Tosun",
      homeRating: 1689,
      result: "1-0",
      awayPlayer: "Dominique Ruefenacht",
      awayRating: 1529
    },
    {
      matchId: 8,
      boardNumber: 4,
      homePlayer: "Sandro Bétrisey",
      homeRating: 1745,
      result: "1-0",
      awayPlayer: "Philippe Aeberhard",
      awayRating: 1540
    },
    {
      matchId: 8,
      boardNumber: 5,
      homePlayer: "Akram Ben Salem",
      homeRating: null,
      result: "0-1",
      awayPlayer: "Leonel Fanucchi",
      awayRating: 1539
    },
    {
      matchId: 8,
      boardNumber: 6,
      homePlayer: "Florian Clavien",
      homeRating: null,
      result: "½-½",
      awayPlayer: "Bernard Kaufmann",
      awayRating: 1483
    },
    
    // Autres matches 3ème ligue
    {
      matchId: 5,
      boardNumber: 1,
      homePlayer: "Laszlo Lampert",
      homeRating: 1581,
      result: "0-1",
      awayPlayer: "Alessandro Bonalli",
      awayRating: 1621
    },
    {
      matchId: 5,
      boardNumber: 2,
      homePlayer: "Martin Zbinden",
      homeRating: 1533,
      result: "0-1",
      awayPlayer: "Timur Gökok",
      awayRating: null
    },
    {
      matchId: 5,
      boardNumber: 3,
      homePlayer: "Olivier Muller",
      homeRating: 1472,
      result: "0-1",
      awayPlayer: "Hervé Frainay",
      awayRating: 1561
    },
    {
      matchId: 5,
      boardNumber: 4,
      homePlayer: "Gérard Donnet",
      homeRating: 1462,
      result: "0-1",
      awayPlayer: "Luc Udry",
      awayRating: 1523
    },
    {
      matchId: 5,
      boardNumber: 5,
      homePlayer: "Claude Egger",
      homeRating: 1513,
      result: "0-1",
      awayPlayer: "Jean-Claude Zermatten",
      awayRating: 1559
    },
    {
      matchId: 5,
      boardNumber: 6,
      homePlayer: "Adrian Dietrich",
      homeRating: 1475,
      result: "0-1",
      awayPlayer: "Claude-Alain Bonvin",
      awayRating: 1629
    },
    
    {
      matchId: 6,
      boardNumber: 1,
      homePlayer: "Andreas Wörner",
      homeRating: 1812,
      result: "½-½",
      awayPlayer: "Narcisse Dubuis",
      awayRating: 1826
    },
    {
      matchId: 6,
      boardNumber: 2,
      homePlayer: "Daniel Gaehwiler",
      homeRating: 1753,
      result: "1-0",
      awayPlayer: "Jean-Yves Loup",
      awayRating: 1703
    },
    {
      matchId: 6,
      boardNumber: 3,
      homePlayer: "Robert Castella",
      homeRating: 1606,
      result: "½-½",
      awayPlayer: "Jean-Philippe Jocallaz",
      awayRating: 1677
    },
    {
      matchId: 6,
      boardNumber: 4,
      homePlayer: "Jean-Luc Descloux",
      homeRating: 1531,
      result: "0-1",
      awayPlayer: "Léonard von Werra",
      awayRating: 1565
    },
    {
      matchId: 6,
      boardNumber: 5,
      homePlayer: "Pascal Perritaz",
      homeRating: 1517,
      result: "1-0",
      awayPlayer: "Eddy Beney",
      awayRating: 1533
    },
    {
      matchId: 6,
      boardNumber: 6,
      homePlayer: "Dominique Schweizer",
      homeRating: 1553,
      result: "0-1",
      awayPlayer: "Michel Sallami",
      awayRating: 1466
    },
    
    {
      matchId: 7,
      boardNumber: 1,
      homePlayer: "Thibault Castella",
      homeRating: 1621,
      result: "1-0",
      awayPlayer: "Alois Billet",
      awayRating: 1626
    },
    {
      matchId: 7,
      boardNumber: 2,
      homePlayer: "Stéphane Volery",
      homeRating: 1614,
      result: "1-0",
      awayPlayer: "Javier Garcia",
      awayRating: 1550
    },
    {
      matchId: 7,
      boardNumber: 3,
      homePlayer: "Valérie Sigrist",
      homeRating: 1461,
      result: "0-1",
      awayPlayer: "Thierry Stalder",
      awayRating: 1549
    },
    {
      matchId: 7,
      boardNumber: 4,
      homePlayer: "Yvonne Brönnimann",
      homeRating: 1439,
      result: "0-1",
      awayPlayer: "Jean-François Helfer",
      awayRating: 1544
    },
    {
      matchId: 7,
      boardNumber: 5,
      homePlayer: "Christian Iacino",
      homeRating: 1346,
      result: "0-1",
      awayPlayer: "Christian Gaignat",
      awayRating: 1526
    },
    {
      matchId: 7,
      boardNumber: 6,
      homePlayer: "Jean-Michel Bubloz",
      homeRating: 1366,
      result: "1-0",
      awayPlayer: "Pascal Savoy",
      awayRating: 1440
    }
  ],
  
  rankings: {
    1: [ // 1ère ligue
      { rank: 1, teamId: 6, matchPoints: 4, gamePoints: "12½" },
      { rank: 2, teamId: 8, matchPoints: 4, gamePoints: "11" },
      { rank: 3, teamId: 3, matchPoints: 2, gamePoints: "7½" },
      { rank: 4, teamId: 2, matchPoints: 2, gamePoints: "8½" },
      { rank: 5, teamId: 5, matchPoints: 2, gamePoints: "6½" },
      { rank: 6, teamId: 7, matchPoints: 2, gamePoints: "6½" },
      { rank: 7, teamId: 4, matchPoints: 0, gamePoints: "6½" },
      { rank: 8, teamId: 1, matchPoints: 0, gamePoints: "5" }
    ],
    2: [ // 3ème ligue
      { rank: 1, teamId: 12, matchPoints: 4, gamePoints: "10" },
      { rank: 2, teamId: 9, matchPoints: 2, gamePoints: "6½" },
      { rank: 3, teamId: 13, matchPoints: 3, gamePoints: "8" },
      { rank: 4, teamId: 11, matchPoints: 3, gamePoints: "8" },
      { rank: 5, teamId: 10, matchPoints: 1, gamePoints: "4" },
      { rank: 5, teamId: 16, matchPoints: 1, gamePoints: "5½" },
      { rank: 7, teamId: 15, matchPoints: 1, gamePoints: "5" },
      { rank: 8, teamId: 14, matchPoints: 1, gamePoints: "1" }
    ]
  }
};

// Gestionnaire de données d'échecs
class ChessDataManager {
  constructor() {
    this.leagues = LEAGUES;
    this.teams = TEAMS;
    this.roundsInfo = ROUNDS_INFO;
    
    // Pré-charger la ronde 1 dans le cache
    roundsCache[1] = round1Data;
    roundsCache[2] = round2Data;
  }

  /**
   * Obtenir les informations sur une équipe
   */
  getTeamInfo(teamId) {
    const team = this.teams.find(t => t.id === teamId);
    if (!team) return null;
    
    const league = this.leagues.find(l => l.id === team.leagueId);
    return { ...team, league };
  }
  
  /**
   * Obtenir le nom d'une équipe par son ID
   */
  getTeamName(teamId) {
    const team = this.teams.find(t => t.id === teamId);
    return team ? team.name : "Équipe inconnue";
  }

  /**
   * Charger les données d'une ronde
   */
  async loadRoundData(roundNumber) {
    // Retourner du cache si disponible
    if (roundsCache[roundNumber]) {
      return roundsCache[roundNumber];
    }

    // Dans une implémentation réelle, charger depuis un fichier externe
    // Pour cet exemple, retourner des données vides si la ronde n'est pas dans le cache
    console.log(`Données pour la ronde ${roundNumber} non disponibles`);
    return {
      matches: [],
      boards: [],
      rankings: {
        1: [],
        2: []
      }
    };
  }
  
  /**
   * Créer une structure pour une nouvelle ronde
   */
  createRoundTemplate(roundNumber) {
    return {
      matches: [],
      boards: [],
      rankings: {
        1: [],
        2: []
      }
    };
  }
}

// Exporter une instance singleton
export default new ChessDataManager();