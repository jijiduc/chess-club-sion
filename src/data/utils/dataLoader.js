// Cache pour les rondes chargées
const roundsCache = {};

/**
 * Charge les données d'une ronde spécifique
 */
export const loadRound = async (roundNumber) => {
  if (!roundsCache[roundNumber]) {
    try {
      const module = await import(`../rounds/round${roundNumber}.js`);
      roundsCache[roundNumber] = module.default;
    } catch (error) {
      console.error(`Erreur lors du chargement de la ronde ${roundNumber}:`, error);
      return null;
    }
  }
  return roundsCache[roundNumber];
};

/**
 * Récupère le dernier classement disponible
 */
export const getLatestRankings = async (leagueId) => {
  // Trouver la dernière ronde disponible
  let latestRound = null;
  for (let i = 7; i >= 1; i--) {
    const round = await loadRound(i);
    if (round) {
      latestRound = round;
      break;
    }
  }
  
  if (latestRound && latestRound.rankings && latestRound.rankings[leagueId]) {
    return latestRound.rankings[leagueId];
  }
  
  return [];
};