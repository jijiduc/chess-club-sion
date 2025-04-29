import React, { useState } from 'react';
import { formatMatchResult } from '../utils/formatters';
import useMediaQuery from '../hooks/useMediaQuery';

const StackedMatchView = ({ match, boards }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [expandedRows, setExpandedRows] = useState({});
  
  if (!match) return null;
  
  // Parse the match result
  const result = formatMatchResult(match.score);
  
  // Toggle player name expansion
  const togglePlayerName = (boardNumber) => {
    setExpandedRows(prev => ({
      ...prev,
      [boardNumber]: !prev[boardNumber]
    }));
  };
  
  // Format player name for display
  const formatPlayerName = (fullName, boardNumber) => {
    const isExpanded = expandedRows[boardNumber];
    if (!isMobile || isExpanded) return fullName;
    
    // Return last name only when not expanded
    const nameParts = fullName.split(' ');
    return nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
  };

  // Format result for better display
  const getResultClass = (result) => {
    if (result === "1-0") return "cse-result-win";
    if (result === "0-1") return "cse-result-loss";
    if (result === "½-½") return "cse-result-draw";
    return "";
  };

  return (
    <>
      {/* Stacked score display */}
      <div className="cse-team-display">
        <div className="cse-team-name">{match.homeTeam}</div>
        <div className="cse-score-circle cse-score-home">{result.home}</div>
        
        <div className="cse-separator">-</div>
        
        <div className="cse-score-circle cse-score-away">{result.away}</div>
        <div className="cse-team-name">{match.awayTeam}</div>
      </div>
      
      {/* Players table */}
      {boards && boards.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="cse-board-table">
            <thead>
              <tr>
                <th>Joueur</th>
                <th className="text-center">Elo</th>
                <th className="text-center">R</th>
                <th>Joueur</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
                // Chess board colors: odd-numbered boards have white pieces for home player
                const homePlayerHasWhite = board.boardNumber % 2 === 1;
                
                return (
                  <tr key={board.boardNumber}>
                    {/* Home player */}
                    <td
                      className={homePlayerHasWhite ? "cse-white-player" : "cse-black-player"}
                      onClick={() => togglePlayerName(board.boardNumber)}
                    >
                      <div className={`cse-player-name ${expandedRows[board.boardNumber] ? 'expanded' : ''}`}>
                        {formatPlayerName(board.homePlayer, board.boardNumber)}
                      </div>
                    </td>
                    
                    {/* Home rating */}
                    <td
                      className={`text-center ${homePlayerHasWhite ? "cse-white-player" : "cse-black-player"}`}
                    >
                      {board.homeRating || "-"}
                    </td>
                    
                    {/* Result */}
                    <td className="cse-result">
                      <span className={`cse-result-indicator ${getResultClass(board.result)}`}>
                        {board.result}
                      </span>
                    </td>
                    
                    {/* Away player */}
                    <td
                      className={!homePlayerHasWhite ? "cse-white-player" : "cse-black-player"}
                      onClick={() => togglePlayerName(board.boardNumber + 100)} // Use boardNumber+100 to differentiate from home player
                    >
                      <div className={`cse-player-name ${expandedRows[board.boardNumber + 100] ? 'expanded' : ''}`}>
                        {formatPlayerName(board.awayPlayer, board.boardNumber + 100)}
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-500 mt-4 p-4">
          Détails des parties non disponibles pour ce match.
        </div>
      )}
      
      {/* Help text for mobile */}
      {isMobile && boards && boards.length > 0 && (
        <div className="p-2 text-center text-xs text-gray-500 italic bg-gray-50">
          Tap sur les noms pour voir le nom complet
        </div>
      )}
    </>
  );
};

export default StackedMatchView;