// src/components/CSEVisualization/utils/formatters.js

/**
 * Format match result into home and away scores
 * @param {string} score - Score in format "2½-5½" or "3-5"
 * @returns {object} - Object with home and away scores
 */
export const formatMatchResult = (score) => {
  if (!score) return { home: "0", away: "0" };
  
  const parts = score.split("-");
  if (parts.length !== 2) return { home: "0", away: "0" };
  
  // Traiter les scores avec ou sans décimale
  const homeScore = parts[0].trim().replace("½", ".5");
  const awayScore = parts[1].trim().replace("½", ".5");
  
  return { 
    home: homeScore, 
    away: awayScore,
    // Ajouter des versions numériques pour les calculs
    homeNum: parseFloat(homeScore), 
    awayNum: parseFloat(awayScore) 
  };
};

/**
 * Format player name according to display mode
 * @param {string} fullName - Full player name
 * @param {boolean} isMobile - Whether we're in mobile mode
 * @param {boolean} isExpanded - Whether the name is expanded
 * @returns {string} - Formatted player name
 */
export const formatPlayerName = (fullName, isMobile, isExpanded) => {
  if (!fullName) return "";
  if (!isMobile || isExpanded) return fullName;
  
  const nameParts = fullName.split(' ');
  return nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
};