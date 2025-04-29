// src/components/CSEVisualization/utils/displayHelpers.js

/**
 * Détermine si on doit utiliser le layout compact
 * @param {object} match - Les données du match
 * @param {number} screenWidth - Largeur de l'écran
 * @returns {boolean} - True si on doit utiliser le layout compact
 */
export const useCompactLayout = (match, screenWidth) => {
    // Toujours utiliser le format compact sur mobile
    if (screenWidth <= 480) return true;
    
    // Utiliser le format compact si beaucoup d'échiquiers (>6)
    if (match?.boards?.length > 6) return true;
    
    // Utiliser le format compact si scores avec décimales
    if (match?.score && (match.score.includes(".") || match.score.includes("½"))) {
      return true;
    }
    
    return false;
  };
  
  /**
   * Détermine si on doit utiliser le layout en stack vertical
   * @param {object} match - Les données du match
   * @returns {boolean} - True si on doit utiliser le layout en stack
   */
  export const useStackedLayout = (match) => {
    // Détecter si le match utilise des demi-points ou des décimales
    return match?.score && (match.score.includes(".") || match.score.includes("½"));
  };