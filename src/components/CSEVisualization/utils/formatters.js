/**
 * Format match result into home and away scores
 * @param {string} score - Score in format "2½-5½"
 * @returns {object} - Object with home and away scores
 */
export const formatMatchResult = (score) => {
    if (!score) return { home: 0, away: 0 };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: 0, away: 0 };
    const homeScore = parseFloat(parts[0].replace("½", ".5"));
    const awayScore = parseFloat(parts[1].replace("½", ".5"));
    return { home: homeScore, away: awayScore };
  };
  
  /**
   * Format player name according to display mode
   * @param {string} fullName - Full player name
   * @param {boolean} isMobile - Whether we're in mobile mode
   * @returns {JSX.Element} - Formatted player name
   */
  export const formatPlayerName = (fullName, isMobile) => {
    if (!fullName) return null;
    
    const lastName = fullName.split(' ').pop();
    
    return (
      <span className="player-name" title={fullName}>
        {isMobile ? lastName : fullName}
      </span>
    );
  };