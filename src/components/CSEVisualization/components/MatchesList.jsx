import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

/**
 * Component for displaying the list of matches
 */
const MatchesList = ({ 
  matches, 
  selectedMatchId, 
  onMatchSelect,
  roundNumber
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Function to format team name for mobile
  const formatTeamName = (teamName) => {
    if (!isMobile) return teamName;
    // Return just the team number (e.g., "Sion 1" -> "1")
    return teamName.split(' ').pop();
  };

  return (
    <div className="p-4 bg-gray-200 border-b">
      <div className={`grid ${isMobile ? 'grid-cols-2 gap-2' : 'grid-cols-1 md:grid-cols-2 gap-4'} cse-match-grid`}>
        {matches.map((match, index) => (
          <button
            key={index}
            className={`${isMobile ? 'p-2 text-sm' : 'p-3'} rounded border cse-match-card ${
              selectedMatchId === match.id
                ? "bg-red-600 text-white border-red-700 hover:bg-red-700 active"
                : match.isTeamMatch
                ? "bg-red-50 border-red-200 hover:bg-red-100 team-match"
                : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
            onClick={() => onMatchSelect(match.id)}
          >
            <div className={`${isMobile ? 'text-xs' : 'font-semibold'}`}>
              {formatTeamName(match.homeTeam)} - {formatTeamName(match.awayTeam)}
            </div>
            <div className={`${isMobile ? 'text-xs' : 'text-sm'} mt-1`}>{match.score}</div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default MatchesList;