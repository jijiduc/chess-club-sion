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
  
  // Exemple de données pour la ronde 2 (ajoutez vos propres données dans le même format)
  const round2Data = {
    matches: [
      // Ajouter les matches de la ronde 2
    ],
    boards: [
      // Ajouter les parties de la ronde 2
    ],
    rankings: {
      1: [
        // Classement de la ronde 2 pour la ligue 1
      ],
      2: [
        // Classement de la ronde 2 pour la ligue 2
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