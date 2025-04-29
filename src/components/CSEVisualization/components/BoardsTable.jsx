// src/components/CSEVisualization/components/BoardsTable.jsx
import React, { useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

const BoardsTable = ({ boards }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const [expandedRows, setExpandedRows] = useState({});
  
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
    
    // Return last name only for mobile
    const nameParts = fullName.split(' ');
    return nameParts.length > 1 ? nameParts[nameParts.length - 1] : fullName;
  };

  if (!boards || boards.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        Détails des parties non disponibles pour ce match.
      </div>
    );
  }

  return (
    <div className={isMobile ? "overflow-x-auto mt-4 cse-boards-compact" : "overflow-x-auto mt-4"}>
      <table className={isMobile ? "w-full cse-board-table-compact" : "w-full cse-boards-table"}>
        <thead>
          <tr>
            <th className="col-board">
              {isMobile ? "É" : "Échiquier"}
            </th>
            <th>Joueur</th>
            <th className="col-elo">Elo</th>
            <th className="col-result">
              {isMobile ? "R" : "Résultat"}
            </th>
            <th>Joueur</th>
            <th className="col-elo">Elo</th>
          </tr>
        </thead>
        <tbody>
          {boards.map((board) => {
            // Pour les couleurs d'échecs traditionnelles - le joueur à domicile a les blancs sur les échiquiers impairs
            const homePlayerHasWhite = board.boardNumber % 2 === 1;
            
            return (
              <tr key={board.boardNumber} className="border-b hover:bg-gray-50">
                <td className="text-center">
                  {board.boardNumber}
                </td>
                
                {/* Joueur à domicile */}
                <td
                  className={`${
                    homePlayerHasWhite
                      ? "cse-player-white"
                      : "cse-player-black"
                  }`}
                  onClick={() => togglePlayerName(board.boardNumber)}
                >
                  <div className={`player-name ${expandedRows[board.boardNumber] ? 'expanded' : ''}`}>
                    {formatPlayerName(board.homePlayer, board.boardNumber)}
                  </div>
                </td>
                
                {/* Elo du joueur à domicile */}
                <td
                  className={`text-center ${
                    homePlayerHasWhite
                      ? "cse-player-white"
                      : "cse-player-black"
                  }`}
                >
                  {board.homeRating || "-"}
                </td>
                
                {/* Résultat */}
                <td className="text-center font-bold">
                  {board.result}
                </td>
                
                {/* Joueur à l'extérieur */}
                <td
                  className={`${
                    !homePlayerHasWhite
                      ? "cse-player-white"
                      : "cse-player-black"
                  }`}
                  onClick={() => togglePlayerName(board.boardNumber+100)} // +100 pour différencier des joueurs à domicile
                >
                  <div className={`player-name ${expandedRows[board.boardNumber+100] ? 'expanded' : ''}`}>
                    {formatPlayerName(board.awayPlayer, board.boardNumber+100)}
                  </div>
                </td>
                
                {/* Elo du joueur à l'extérieur */}
                <td
                  className={`text-center ${
                    !homePlayerHasWhite
                      ? "cse-player-white"
                      : "cse-player-black"
                  }`}
                >
                  {board.awayRating || "-"}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      
      {/* Aide à l'utilisateur pour mobile */}
      {isMobile && (
        <div className="p-1 text-center text-xs text-gray-500 italic bg-gray-50">
          Tap sur les noms pour voir le nom complet
        </div>
      )}
    </div>
  );
};

export default BoardsTable;