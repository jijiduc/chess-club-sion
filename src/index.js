// src/data/index.js - Central data management for the chess visualization
import { LEAGUES, TEAMS, ROUNDS_INFO } from './constants';

// Cache for round data
const roundsCache = {};

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
      // Dynamic import for the specific round
      const module = await import(`./rounds/round${roundNumber}.js`);
      roundsCache[roundNumber] = module.default;
      return module.default;
    } catch (error) {
      console.error(`Error loading round ${roundNumber}:`, error);
      
      // Fallback to empty data structure
      return {
        matches: [],
        boards: [],
        rankings: {}
      };
    }
  }

  /**
   * Get the latest round number with available data
   */
  async getLatestRoundNumber() {
    // Start from the highest round and check if data exists
    for (let i = this.roundsInfo.length; i >= 1; i--) {
      try {
        const roundData = await this.loadRoundData(i);
        // If we have matches or rankings, consider this round as valid
        if (roundData && (
            (roundData.matches && roundData.matches.length > 0) || 
            (roundData.rankings && Object.keys(roundData.rankings).length > 0)
          )) {
          return i;
        }
      } catch (error) {
        // Continue checking previous rounds
        continue;
      }
    }
    // If no round data is found, return round 1 as default
    return 1;
  }

  /**
   * Get the latest rankings for a league
   */
  async getLatestRankings(leagueId) {
    // Try to find the latest round with data
    for (let i = 7; i >= 1; i--) {
      const round = await this.loadRoundData(i);
      if (round && round.rankings && round.rankings[leagueId]) {
        return round.rankings[leagueId];
      }
    }
    return [];
  }

  /**
   * Get all matches for a team across all rounds
   */
  async getAllTeamMatches(teamId) {
    const allMatches = [];
    
    for (const round of this.roundsInfo) {
      const roundData = await this.loadRoundData(round.roundNumber);
      if (!roundData || !roundData.matches) continue;
      
      const matches = roundData.matches.filter(
        m => m.homeTeamId === teamId || m.awayTeamId === teamId
      );
      
      const enhancedMatches = matches.map(match => ({
        ...match,
        roundNumber: round.roundNumber,
        roundDate: round.date,
        homeTeam: this.getTeamName(match.homeTeamId),
        awayTeam: this.getTeamName(match.awayTeamId),
      }));
      
      allMatches.push(...enhancedMatches);
    }
    
    return allMatches;
  }
}

// Export a singleton instance
export default new ChessDataManager();