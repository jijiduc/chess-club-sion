// src/data/index.js - Central data management for the chess visualization

// Constants for leagues, teams, and rounds
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
  { id: 1, date: "2025-03-22", roundNumber: 1 },
  { id: 2, date: "2025-04-05", roundNumber: 2 },
  { id: 3, date: "2025-04-26", roundNumber: 3 },
  { id: 4, date: "2025-05-17", roundNumber: 4 },
  { id: 5, date: "2025-06-21", roundNumber: 5 },
  { id: 6, date: "2025-08-23", roundNumber: 6 },
  { id: 7, date: "2025-10-13", roundNumber: 7 }
];

// Sample data for round 1 (fallback data)
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
      id: 3,
      roundId: 1,
      homeTeamId: 1, // Sion 1
      awayTeamId: 6, // Grand Echiquier 1
      score: "1½-6½"
    },
    // 3ème ligue
    {
      id: 6,
      roundId: 1,
      homeTeamId: 9, // Sion 2
      awayTeamId: 12, // Crans-Montana 2
      score: "2-4"
    }
  ],
  
  boards: [
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
    }
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

// Cache for round data
const roundsCache = {};
roundsCache[1] = round1Data;

/**
 * Chess Data Manager class
 * Singleton that manages all chess tournament data
 */
class ChessDataManager {
  constructor() {
    this.leagues = LEAGUES;
    this.teams = TEAMS;
    this.roundsInfo = ROUNDS_INFO;
  }

  /**
   * Get team information by ID
   */
  getTeamInfo(teamId) {
    const team = this.teams.find(t => t.id === teamId);
    if (!team) return null;
    
    const league = this.leagues.find(l => l.id === team.leagueId);
    return { ...team, league };
  }

  /**
   * Get team name by ID
   */
  getTeamName(teamId) {
    const team = this.teams.find(t => t.id === teamId);
    return team ? team.name : "Équipe inconnue";
  }

  /**
   * Load round data (with caching)
   */
  async loadRoundData(roundNumber) {
    // Return from cache if available
    if (roundsCache[roundNumber]) {
      return roundsCache[roundNumber];
    }

    try {
      // Return round1Data as fallback for any round that's not in cache
      console.log(`No data cached for round ${roundNumber}, using fallback data`);
      return round1Data;
    } catch (error) {
      console.error(`Error loading round ${roundNumber}:`, error);
      
      // Fallback to empty data structure
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

  /**
   * Get the latest round number with available data
   */
  async getLatestRoundNumber() {
    return 3; // Always return round 3 as the latest round
  }

  /**
   * Get the latest rankings for a league
   */
  async getLatestRankings(leagueId) {
    return round1Data.rankings[leagueId] || [];
  }
}

// Export a singleton instance
export default new ChessDataManager();