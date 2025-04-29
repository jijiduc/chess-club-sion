import React, { useState } from 'react';

const CompactHorizontalMatchView = () => {
  // Sample data based on your screenshots
  const matchData = {
    homeTeam: "Sion 1",
    homeScore: "3",
    awayTeam: "Köniz-Bubenberg 1",
    awayScore: "5",
    boards: [
      {
        boardNumber: 1,
        homePlayer: "Jean-Yves Riand",
        homeRating: 1877,
        result: "0-1",
        awayPlayer: "Igor Yarmonov",
        awayRating: 2342
      },
      {
        boardNumber: 2,
        homePlayer: "Jeremy Duc",
        homeRating: 1829,
        result: "0-1",
        awayPlayer: "Mike Jäger",
        awayRating: 2114
      },
      {
        boardNumber: 3,
        homePlayer: "Flavien Sola",
        homeRating: 2167,
        result: "1-0",
        awayPlayer: "Gabriel Vergelin",
        awayRating: 2100
      },
      {
        boardNumber: 4,
        homePlayer: "Jean-Michel Paladini",
        homeRating: 1983,
        result: "0-1",
        awayPlayer: "Hansjürg Känel",
        awayRating: 2226
      },
      {
        boardNumber: 5,
        homePlayer: "Vlad Popescu",
        homeRating: 1990,
        result: "½-½",
        awayPlayer: "Jörg Brauchli",
        awayRating: 1915
      },
      {
        boardNumber: 6,
        homePlayer: "Yves Roduit",
        homeRating: 1910,
        result: "0-1",
        awayPlayer: "Sandor Kaszas",
        awayRating: 2008
      },
      {
        boardNumber: 7,
        homePlayer: "Yann Bourban",
        homeRating: 1885,
        result: "½-½",
        awayPlayer: "Thomas Mani",
        awayRating: 1949
      },
      {
        boardNumber: 8,
        homePlayer: "Olivier Ulmann",
        homeRating: 1788,
        result: "1-0",
        awayPlayer: "Marc Tillmann",
        awayRating: 1921
      }
    ]
  };
  
  // Toggle expanded player names
  const [expandedRows, setExpandedRows] = useState({});
  
  const togglePlayerName = (boardNumber, side) => {
    const key = `${boardNumber}-${side}`;
    setExpandedRows(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  
  // Format player name for display - split first and last name
  const formatPlayerName = (fullName, boardNumber, side) => {
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
      <div className="cse-score-horizontal">
        <div className="cse-team-name-compact">{matchData.homeTeam}</div>
        <div className="cse-score-circle-compact">{matchData.homeScore}</div>
        <div className="cse-separator-compact">-</div>
        <div className="cse-score-circle-compact">{matchData.awayScore}</div>
        <div className="cse-team-name-compact">{matchData.awayTeam}</div>
      </div>
      
      {/* Compact chessboard details table */}
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
            {matchData.boards.map((board) => {
              // Chess board colors: odd-numbered boards have white pieces for home player
              const homePlayerHasWhite = board.boardNumber % 2 === 1;
              
              return (
                <tr key={board.boardNumber}>
                  {/* Board number */}
                  <td>{board.boardNumber}</td>
                  
                  {/* Home player */}
                  <td 
                    className={homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}
                    onClick={() => togglePlayerName(board.boardNumber, 'home')}
                  >
                    <div className={`cse-player-name-compact ${expandedRows[`${board.boardNumber}-home`] ? 'expanded' : ''}`}>
                      {formatPlayerName(board.homePlayer, board.boardNumber, 'home')}
                    </div>
                  </td>
                  
                  {/* Home rating */}
                  <td 
                    className={`col-elo ${homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}`}
                  >
                    {board.homeRating}
                  </td>
                  
                  {/* Result */}
                  <td className="col-result cse-result-compact">
                    {board.result}
                  </td>
                  
                  {/* Away player */}
                  <td 
                    className={!homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}
                    onClick={() => togglePlayerName(board.boardNumber, 'away')}
                  >
                    <div className={`cse-player-name-compact ${expandedRows[`${board.boardNumber}-away`] ? 'expanded' : ''}`}>
                      {formatPlayerName(board.awayPlayer, board.boardNumber, 'away')}
                    </div>
                  </td>
                  
                  {/* Away rating */}
                  <td 
                    className={`col-elo ${!homePlayerHasWhite ? "cse-player-white-compact" : "cse-player-black-compact"}`}
                  >
                    {board.awayRating}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      
      {/* Instruction pour l'utilisateur */}
      <div className="p-1 text-center text-xs text-gray-500 italic bg-gray-50">
        Tap sur les noms pour voir le nom complet
      </div>
    </div>
  );
};

export default CompactHorizontalMatchView;