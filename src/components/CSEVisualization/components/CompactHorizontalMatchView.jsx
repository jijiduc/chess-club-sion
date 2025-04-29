// src/components/CSEVisualization/components/CompactHorizontalMatchView.jsx
import React, { useState } from 'react';
import { formatMatchResult } from '../utils/formatters';

const CompactHorizontalMatchView = ({ match, boards }) => {
  // États pour la gestion des noms de joueurs
  const [expandedRows, setExpandedRows] = useState({});
  
  if (!match) return null;
  
  // Formatage du résultat
  const result = formatMatchResult(match.score);
  
  // Toggle pour les noms de joueurs
  const togglePlayerName = (boardNumber, side) => {
    const key = `${boardNumber}-${side}`;
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Formatage des noms de joueurs
  const formatPlayerName = (fullName, boardNumber, side) => {
    const key = `${boardNumber}-${side}`;
    const isExpanded = expandedRows[key];
    
    if (isExpanded) return fullName;
    
    const nameParts = fullName.split(' ');
    if (nameParts.length <= 1) return fullName;
    
    // Retourne seulement le nom de famille par défaut
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
      {/* Affichage du score horizontal */}
      <div className="cse-score-horizontal">
        <div className="cse-team-name-compact">{match.homeTeam}</div>
        <div className="cse-score-circle-compact">{result.home}</div>
        <div className="cse-separator-compact">-</div>
        <div className="cse-score-circle-compact">{result.away}</div>
        <div className="cse-team-name-compact">{match.awayTeam}</div>
      </div>
      
      {/* Table des détails d'échiquier compacte */}
      {boards && boards.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="cse-board-table-compact">
            <thead>
              <tr>
                <th>É</th>
                <th>Joueur</th>
                <th className="col-elo">Elo</th>
                <th className="col-result">R</th>
                <th>Joueur</th>
                <th className="col-elo">Elo</th>
              </tr>
            </thead>
            <tbody>
              {boards.map((board) => {
                // Couleurs d'échiquier: les échiquiers impairs ont les blancs pour le joueur à domicile
                const homePlayerHasWhite = board.boardNumber % 2 === 1;
                
                return (
                  <tr key={board.boardNumber}>
                    {/* Numéro d'échiquier */}
                    <td>{board.boardNumber}</td>
                    
                    {/* Joueur à domicile */}
                    <td 
                      className={homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}
                      onClick={() => togglePlayerName(board.boardNumber, 'home')}
                    >
                      <div className={`cse-player-name-compact ${expandedRows[`${board.boardNumber}-home`] ? 'expanded' : ''}`}>
                        {formatPlayerName(board.homePlayer, board.boardNumber, 'home')}
                      </div>
                    </td>
                    
                    {/* Classement Elo à domicile */}
                    <td className={`col-elo ${homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}`}>
                      {board.homeRating || "-"}
                    </td>
                    
                    {/* Résultat */}
                    <td className="col-result cse-result-compact">
                      {board.result}
                    </td>
                    
                    {/* Joueur à l'extérieur */}
                    <td 
                      className={!homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}
                      onClick={() => togglePlayerName(board.boardNumber, 'away')}
                    >
                      <div className={`cse-player-name-compact ${expandedRows[`${board.boardNumber}-away`] ? 'expanded' : ''}`}>
                        {formatPlayerName(board.awayPlayer, board.boardNumber, 'away')}
                      </div>
                    </td>
                    
                    {/* Classement Elo à l'extérieur */}
                    <td className={`col-elo ${!homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}`}>
                      {board.awayRating || "-"}
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
      
      {/* Instruction discrète pour l'utilisateur */}
      {boards && boards.length > 0 && (
        <div className="p-1 text-center text-xs text-gray-500 italic bg-gray-50">
          Tap sur les noms pour voir le nom complet
        </div>
      )}
    </div>
  );
};

export default CompactHorizontalMatchView;