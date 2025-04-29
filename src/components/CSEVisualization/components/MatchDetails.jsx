import React from 'react';
import { formatMatchResult } from '../utils/formatters';
import useMediaQuery from '../hooks/useMediaQuery';

/**
 * Component for displaying match details and score
 */
const MatchDetails = ({ match }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  
  if (!match) return null;
  
  const result = formatMatchResult(match.score);

  // Format team name for mobile
  const formatTeamName = (teamName) => {
    if (!isMobile) return teamName;
    // Keep only last word for mobile view
    return teamName.split(' ').pop();
  };

  return (
    <div className="p-4">
      {/* Score display */}
      <div className="flex items-center justify-between mb-4 cse-match-score">
        <div className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-right w-1/3 cse-team-name`}>
          {formatTeamName(match.homeTeam)}
        </div>

        <div className="flex justify-center items-center cse-score-display">
          <div
            className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full flex items-center justify-center text-white font-bold bg-gray-600 cse-score-value`}
          >
            {result.home}
          </div>
          <div className="mx-2 text-lg cse-score-separator">-</div>
          <div
            className={`${isMobile ? 'w-12 h-12' : 'w-16 h-16'} rounded-full flex items-center justify-center text-white font-bold bg-gray-600 cse-score-value`}
          >
            {result.away}
          </div>
        </div>

        <div className={`${isMobile ? 'text-base' : 'text-lg'} font-bold text-left w-1/3 cse-team-name`}>
          {formatTeamName(match.awayTeam)}
        </div>
      </div>
    </div>
  );
};

export default MatchDetails;