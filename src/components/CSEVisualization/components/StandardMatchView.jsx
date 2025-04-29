// src/components/CSEVisualization/components/StandardMatchView.jsx
import React from 'react';
import BoardsTable from './BoardsTable';

/**
 * Standard desktop layout for match details
 * @param {Object} match - The match data object
 * @param {Array} boards - Array of boards/games for this match
 */
const StandardMatchView = ({ match, boards }) => {
  if (!match) return null;
  
  // Format match score for display
  const formatMatchResult = (score) => {
    if (!score) return { home: 0, away: 0 };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: 0, away: 0 };
    const homeScore = parseFloat(parts[0].replace("½", ".5"));
    const awayScore = parseFloat(parts[1].replace("½", ".5"));
    return { home: homeScore, away: awayScore };
  };
  
  const result = formatMatchResult(match.score);

  return (
    <div className="standard-match-view">
      {/* Score display with team names */}
      <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-lg">
        <div className="text-lg font-bold text-right w-1/3">
          {match.homeTeam}
        </div>
        
        <div className="flex justify-center items-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600"
          >
            {result.home}
          </div>
          <div className="mx-2 text-lg">-</div>
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600"
          >
            {result.away}
          </div>
        </div>
        
        <div className="text-lg font-bold text-left w-1/3">
          {match.awayTeam}
        </div>
      </div>
      
      {/* Display boards table */}
      <BoardsTable boards={boards} />
    </div>
  );
};

export default StandardMatchView;