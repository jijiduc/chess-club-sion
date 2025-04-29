// src/components/CSEVisualization/components/CompactHorizontalMatchView.jsx
import React, { useState } from 'react';

/**
 * Compact mobile-friendly layout for match details
 * @param {Object} match - The match data object
 * @param {Array} boards - Array of boards/games for this match
 */
const CompactHorizontalMatchView = ({ match, boards = [] }) => {
  // States for expandable player names
  const [expandedRows, setExpandedRows] = useState({});
  
  if (!match) return null;
  
  // Format match result for display
  const formatMatchResult = (score) => {
    if (!score) return { home: "0", away: "0" };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: "0", away: "0" };
    
    // Handle scores with or without decimals
    const homeScore = parts[0].trim().replace("½", ".5");
    const awayScore = parts[1].trim().replace("½", ".5");
    
    return { home: homeScore, away: awayScore };
  };
  
  const result = formatMatchResult(match.score);
  
  // Toggle function for player names
  const togglePlayerName = (boardNumber, side) => {
    const key = `${boardNumber}-${side}`;
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Format player name for display
  const formatPlayerName = (fullName, boardNumber, side) => {
    if (!fullName) return "";
    
    const key = `${boardNumber}-${side}`;
    const isExpanded = expandedRows[key];
    
    if (isExpanded) return fullName;
    
    const nameParts = fullName.split(' ');
    if (nameParts.length <= 1) return fullName;
    
    // Return only last name by default
    const lastName = nameParts[nameParts.length - 1];
    const firstNames = nameParts.slice(0, nameParts.length - 1).join(' ');
    
    return (
      <>
        <span className="cse-player-first-name">{firstNames} </span>
        <span className="cse-player-last-name">{lastName}</span>
      </>
    );
  };

  return (
    <div className="cse-match-compact">
      {/* Horizontal score display */}
      <div className="flex items-center justify-center p-3 bg-gray-50 rounded-lg mb-4">
        <div className="text-sm font-medium px-2 text-right">{match.homeTeam}</div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white font-bold rounded-full mx-1">
          {result.home}
        </div>
        <div className="mx-1 font-bold">-</div>
        <div className="w-10 h-10 flex items-center justify-center bg-gray-600 text-white font-bold rounded-full mx-1">
          {result.away}
        </div>
        <div className="text-sm font-medium px-2 text-left">{match.awayTeam}</div>
      </div>
      
      {/* Chess boards table */}
      {boards && boards.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="py-2 px-1 text-center text-xs">#</th>
                <th className="py-2 px-2 text-left text-xs">Joueur</th>
                <th className="py-2 px-1 text-center text-xs">Elo</th>
                <th className="py-2 px-1 text-center text-xs">R</th>
                <th className="py-2 px-2 text-left text-xs">Joueur</th>
                <th className="py-2 px-1 text-center text-xs">Elo</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
                // Chess board colors: odd-numbered boards have white pieces for home player
                const homePlayerHasWhite = board.boardNumber % 2 === 1;
                
                return (
                  <tr key={board.boardNumber} className="border-b border-gray-200">
                    {/* Board number */}
                    <td className="py-2 px-1 text-center text-xs">{board.boardNumber}</td>
                    
                    {/* Home player */}
                    <td 
                      className={`py-2 px-2 text-xs ${homePlayerHasWhite 
                        ? "bg-white" 
                        : "bg-gray-700 text-white"}`}
                      onClick={() => togglePlayerName(board.boardNumber, 'home')}
                    >
                      <div className={`truncate ${expandedRows[`${board.boardNumber}-home`] ? '' : 'max-w-[80px]'}`}>
                        {formatPlayerName(board.homePlayer, board.boardNumber, 'home')}
                      </div>
                    </td>
                    
                    {/* Home rating */}
                    <td 
                      className={`py-2 px-1 text-center text-xs ${homePlayerHasWhite 
                        ? "bg-white" 
                        : "bg-gray-700 text-white"}`}
                    >
                      {board.homeRating || "-"}
                    </td>
                    
                    {/* Result */}
                    <td className="py-2 px-1 text-center font-bold text-xs">
                      {board.result}
                    </td>
                    
                    {/* Away player */}
                    <td 
                      className={`py-2 px-2 text-xs ${!homePlayerHasWhite 
                        ? "bg-white" 
                        : "bg-gray-700 text-white"}`}
                      onClick={() => togglePlayerName(board.boardNumber, 'away')}
                    >
                      <div className={`truncate ${expandedRows[`${board.boardNumber}-away`] ? '' : 'max-w-[80px]'}`}>
                        {formatPlayerName(board.awayPlayer, board.boardNumber, 'away')}
                      </div>
                    </td>
                    
                    {/* Away rating */}
                    <td 
                      className={`py-2 px-1 text-center text-xs ${!homePlayerHasWhite 
                        ? "bg-white" 
                        : "bg-gray-700 text-white"}`}
                    >
                      {board.awayRating || "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 p-4 text-sm">
          Détails des parties non disponibles pour ce match.
        </div>
      )}
      
      {/* Instruction for user */}
      {boards && boards.length > 0 && (
        <div className="p-1 text-center text-xs text-gray-500 italic bg-gray-50 mt-2 rounded">
          Tap sur les noms pour voir le nom complet
        </div>
      )}
    </div>
  );
};

export default CompactHorizontalMatchView;