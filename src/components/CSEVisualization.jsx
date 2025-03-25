import React, { useState } from 'react';

// Complete embedded dataset from CSVs
const EMBEDDED_DATA = {
  sion1: {
    info: [{ league: "1ère ligue", round: 1 }],
    matches: [
      { matchId: 1, homeTeam: "Genève 2", awayTeam: "Neuchâtel 1", score: "5½-2½" },
      { matchId: 2, homeTeam: "Valais 1", awayTeam: "Echallens 2", score: "3½-4½" },
      { matchId: 3, homeTeam: "Sion 1", awayTeam: "Grand Echiquier 1", score: "1½-6½" },
      { matchId: 4, homeTeam: "Köniz-Bubenberg 1", awayTeam: "Fribourg 1", score: "2-6" }
    ],
    boards: [
      // Match 1: Genève 2 vs Neuchâtel 1
      { matchId: 1, boardNumber: 1, homePlayer: "Dominique Li", homeRating: 2292, result: "1-0", awayPlayer: "Robin Voland", awayRating: 2057 },
      { matchId: 1, boardNumber: 2, homePlayer: "Richard Gerber", homeRating: 2233, result: "1-0", awayPlayer: "Bertrand Banderet", awayRating: 1942 },
      { matchId: 1, boardNumber: 3, homePlayer: "Laurent Geiser", homeRating: 2210, result: "0-1", awayPlayer: "Roland Hauser", awayRating: 2026 },
      { matchId: 1, boardNumber: 4, homePlayer: "Daniel Chiriac", homeRating: 2075, result: "1-0", awayPlayer: "Hassan Roger Sadeghi", awayRating: 2098 },
      { matchId: 1, boardNumber: 5, homePlayer: "Christophe Rivaud", homeRating: 1986, result: "0-1", awayPlayer: "Roman Tkhoruk", awayRating: 1896 },
      { matchId: 1, boardNumber: 6, homePlayer: "Tiziano Frei", homeRating: 1920, result: "1-0", awayPlayer: "Jason Weber", awayRating: 1838 },
      { matchId: 1, boardNumber: 7, homePlayer: "Jeremy Broome", homeRating: 1885, result: "½-½", awayPlayer: "Luca Srdjenovic", awayRating: 1882 },
      { matchId: 1, boardNumber: 8, homePlayer: "Hugo Jelicic", homeRating: 1894, result: "1-0", awayPlayer: "Mohamad Al-Dourobi", awayRating: 1770 },
      
      // Match 2: Valais 1 vs Echallens 2
      { matchId: 2, boardNumber: 1, homePlayer: "Ludovic Zaza", homeRating: 2140, result: "½-½", awayPlayer: "Lindo Duratti", awayRating: 2134 },
      { matchId: 2, boardNumber: 2, homePlayer: "Jean-Daniel Delacroix", homeRating: 1938, result: "0-1", awayPlayer: "Nicolas Perréard", awayRating: 2033 },
      { matchId: 2, boardNumber: 3, homePlayer: "Alexan Floure", homeRating: 1913, result: "0-1", awayPlayer: "Jan Steenhuis", awayRating: 2057 },
      { matchId: 2, boardNumber: 4, homePlayer: "Jean-Paul Moret", homeRating: 1969, result: "½-½", awayPlayer: "Steve Monthoux", awayRating: 2013 },
      { matchId: 2, boardNumber: 5, homePlayer: "Xavier Perruchoud", homeRating: 1898, result: "½-½", awayPlayer: "Colin Cordey", awayRating: 1951 },
      { matchId: 2, boardNumber: 6, homePlayer: "Jacob Planchamp", homeRating: 1964, result: "½-½", awayPlayer: "Stéphane Coletta", awayRating: 1928 },
      { matchId: 2, boardNumber: 7, homePlayer: "Pierre Perruchoud", homeRating: 1890, result: "½-½", awayPlayer: "Julien Coletta", awayRating: 1829 },
      { matchId: 2, boardNumber: 8, homePlayer: "Fabrice Lovey", homeRating: 1821, result: "1-0", awayPlayer: "N.N.", awayRating: null },
      
      // Match 3: Sion 1 vs Grand Echiquier 1
      { matchId: 3, boardNumber: 1, homePlayer: "Flavien Sola", homeRating: 2167, result: "0-1", awayPlayer: "Guillaume Chauvon", awayRating: 2076 },
      { matchId: 3, boardNumber: 2, homePlayer: "Vlad Popescu", homeRating: 1990, result: "0-1", awayPlayer: "Ferran Rocamora Martorell", awayRating: 2126 },
      { matchId: 3, boardNumber: 3, homePlayer: "Pierre-M. Rappaz", homeRating: 1933, result: "½-½", awayPlayer: "Jonathan Jaccard", awayRating: 1949 },
      { matchId: 3, boardNumber: 4, homePlayer: "Jean-Yves Riand", homeRating: 1877, result: "½-½", awayPlayer: "Jean-Manuel Segura", awayRating: 2066 },
      { matchId: 3, boardNumber: 5, homePlayer: "Max Chappaz", homeRating: 1904, result: "0-1", awayPlayer: "Sébastien Vasey", awayRating: 1956 },
      { matchId: 3, boardNumber: 6, homePlayer: "Yves Roduit", homeRating: 1910, result: "0-1", awayPlayer: "Vincent Conrad", awayRating: 1904 },
      { matchId: 3, boardNumber: 7, homePlayer: "Olivier Ulmann", homeRating: 1788, result: "0-1", awayPlayer: "Pierpaolo Ranieri", awayRating: 1893 },
      { matchId: 3, boardNumber: 8, homePlayer: "Jeremy Duc", homeRating: 1829, result: "½-½", awayPlayer: "Mathis Soubeyrand", awayRating: 1547 },
      
      // Match 4: Köniz-Bubenberg 1 vs Fribourg 1
      { matchId: 4, boardNumber: 1, homePlayer: "Igor Yarmonov", homeRating: 2342, result: "0-1", awayPlayer: "Sylvain Julmy", awayRating: 2179 },
      { matchId: 4, boardNumber: 2, homePlayer: "Jörg Brauchli", homeRating: 1915, result: "½-½", awayPlayer: "Yves Deschenaux", awayRating: 2121 },
      { matchId: 4, boardNumber: 3, homePlayer: "Hansjürg Känel", homeRating: 2226, result: "½-½", awayPlayer: "Salvatore Cruceli", awayRating: 2083 },
      { matchId: 4, boardNumber: 4, homePlayer: "Marc Tillmann", homeRating: 1921, result: "0-1", awayPlayer: "Joseph Edoecs", awayRating: 2035 },
      { matchId: 4, boardNumber: 5, homePlayer: "Mike Jäger", homeRating: 2114, result: "1-0", awayPlayer: "Bernard Deschenaux", awayRating: 2002 },
      { matchId: 4, boardNumber: 6, homePlayer: "Martin Hess", homeRating: 1905, result: "0-1", awayPlayer: "Thierry Bonferroni", awayRating: 1965 },
      { matchId: 4, boardNumber: 7, homePlayer: "Thomas Mani", homeRating: 1949, result: "0-1", awayPlayer: "Achim Schneuwly", awayRating: 1943 },
      { matchId: 4, boardNumber: 8, homePlayer: "Nahom Demoz", homeRating: 1738, result: "0-1", awayPlayer: "Marius Cornée", awayRating: 1894 }
    ],
    rankings: [
      { rank: 1, team: "Grand Echiquier 1", matchPoints: 2, gamePoints: "6½" },
      { rank: 2, team: "Fribourg 1", matchPoints: 2, gamePoints: "6" },
      { rank: 3, team: "Genève 2", matchPoints: 2, gamePoints: "5½" },
      { rank: 4, team: "Echallens 2", matchPoints: 2, gamePoints: "4½" },
      { rank: 5, team: "Valais 1", matchPoints: 0, gamePoints: "3½" },
      { rank: 6, team: "Neuchâtel 1", matchPoints: 0, gamePoints: "2½" },
      { rank: 7, team: "Köniz-Bubenberg 1", matchPoints: 0, gamePoints: "2" },
      { rank: 8, team: "Sion 1", matchPoints: 0, gamePoints: "1½" }
    ]
  },
  sion2: {
    info: [{ league: "3ème ligue", round: 1 }],
    matches: [
      { matchId: 1, homeTeam: "Grand Echiquier 2", awayTeam: "Monthey 1", score: "1-5" },
      { matchId: 2, homeTeam: "Sion 2", awayTeam: "Crans-Montana 2", score: "2-4" },
      { matchId: 3, homeTeam: "Valais 2", awayTeam: "Bulle 3", score: "5-1" },
      { matchId: 4, homeTeam: "Crazy Horse 1", awayTeam: "Payerne 2", score: "3½-2½" }
    ],
    boards: [
      // Match 1: Grand Echiquier 2 vs Monthey 1
      { matchId: 1, boardNumber: 1, homePlayer: "Olivier Dubuis", homeRating: 1778, result: "0-1", awayPlayer: "Jorel Martin", awayRating: 1827 },
      { matchId: 1, boardNumber: 2, homePlayer: "Emil Ungureanu", homeRating: null, result: "0-1", awayPlayer: "Fabien Tordeur", awayRating: 1977 },
      { matchId: 1, boardNumber: 3, homePlayer: "Paolo Braconi", homeRating: 1529, result: "0-1", awayPlayer: "Dorian Turner", awayRating: null },
      { matchId: 1, boardNumber: 4, homePlayer: "Alban Hessler", homeRating: 1470, result: "0-1", awayPlayer: "Colin Moesching", awayRating: 1891 },
      { matchId: 1, boardNumber: 5, homePlayer: "Adam Nasrallah", homeRating: null, result: "0-1", awayPlayer: "Samuel Favre", awayRating: 1595 },
      { matchId: 1, boardNumber: 6, homePlayer: "José Martinez", homeRating: 1662, result: "1-0", awayPlayer: "N.N.", awayRating: null },
      
      // Match 2: Sion 2 vs Crans-Montana 2
      { matchId: 2, boardNumber: 1, homePlayer: "Alexandre Briguet", homeRating: 1828, result: "0-1", awayPlayer: "Alessandro Bonalli", awayRating: 1621 },
      { matchId: 2, boardNumber: 2, homePlayer: "Olivier Crettenand", homeRating: 1826, result: "1-0", awayPlayer: "Timur Gökok", awayRating: null },
      { matchId: 2, boardNumber: 3, homePlayer: "Mazlum Tosun", homeRating: 1689, result: "1-0", awayPlayer: "Hervé Frainay", awayRating: 1561 },
      { matchId: 2, boardNumber: 4, homePlayer: "Sandro Bétrisey", homeRating: 1745, result: "0-1", awayPlayer: "Luc Udry", awayRating: 1523 },
      { matchId: 2, boardNumber: 5, homePlayer: "Akram Ben Salem", homeRating: null, result: "0-1", awayPlayer: "Jean-Claude Zermatten", awayRating: 1559 },
      { matchId: 2, boardNumber: 6, homePlayer: "Florian Clavien", homeRating: null, result: "0-1", awayPlayer: "Claude-Alain Bonvin", awayRating: 1629 },
      
      // Match 3: Valais 2 vs Bulle 3
      { matchId: 3, boardNumber: 1, homePlayer: "Jean-Marie Carron", homeRating: 1852, result: "1-0", awayPlayer: "Laurent Geib", awayRating: 1660 },
      { matchId: 3, boardNumber: 2, homePlayer: "Cyril Dorsaz", homeRating: 1819, result: "½-½", awayPlayer: "Charles-François Feller", awayRating: 1670 },
      { matchId: 3, boardNumber: 3, homePlayer: "Hervé Lanois", homeRating: 1781, result: "1-0", awayPlayer: "Alfred Senff", awayRating: 1544 },
      { matchId: 3, boardNumber: 4, homePlayer: "François Perruchoud", homeRating: 1921, result: "½-½", awayPlayer: "Gael Grangier", awayRating: null },
      { matchId: 3, boardNumber: 5, homePlayer: "Stephan Major", homeRating: 1797, result: "1-0", awayPlayer: "Aurélie Conod", awayRating: null },
      { matchId: 3, boardNumber: 6, homePlayer: "Michel Steiner", homeRating: 1803, result: "1-0", awayPlayer: "N.N.", awayRating: null },
      
      // Match 4: Crazy Horse 1 vs Payerne 2
      { matchId: 4, boardNumber: 1, homePlayer: "Adrian Silva", homeRating: 1857, result: "0-1", awayPlayer: "Vivian Rochat", awayRating: 1942 },
      { matchId: 4, boardNumber: 2, homePlayer: "Alain Tcheau", homeRating: 2011, result: "1-0", awayPlayer: "Lucas Bueche", awayRating: 1841 },
      { matchId: 4, boardNumber: 3, homePlayer: "Daniel Jaquier", homeRating: 1871, result: "½-½", awayPlayer: "Karel Bourban", awayRating: 1818 },
      { matchId: 4, boardNumber: 4, homePlayer: "Dzevad Osmic", homeRating: 1841, result: "1-0", awayPlayer: "Kiril Solomatin", awayRating: null },
      { matchId: 4, boardNumber: 5, homePlayer: "Alain Chollet", homeRating: 1783, result: "1-0", awayPlayer: "Alex Garfield", awayRating: 1786 },
      { matchId: 4, boardNumber: 6, homePlayer: "Joël Loba", homeRating: 1833, result: "0-1", awayPlayer: "Carlo Bonferroni", awayRating: 1774 }
    ],
    rankings: [
      { rank: 1, team: "Monthey 1", matchPoints: 2, gamePoints: "5" },
      { rank: 1, team: "Valais 2", matchPoints: 2, gamePoints: "5" },
      { rank: 3, team: "Crans-Montana 2", matchPoints: 2, gamePoints: "4" },
      { rank: 4, team: "Crazy Horse 1", matchPoints: 2, gamePoints: "3½" },
      { rank: 5, team: "Payerne 2", matchPoints: 0, gamePoints: "2½" },
      { rank: 6, team: "Sion 2", matchPoints: 0, gamePoints: "2" },
      { rank: 7, team: "Bulle 3", matchPoints: 0, gamePoints: "1" },
      { rank: 7, team: "Grand Echiquier 2", matchPoints: 0, gamePoints: "1" }
    ]
  }
};

// Main component
const CSEVisualization = () => {
  // State
  const [selectedTeam, setSelectedTeam] = useState('Sion 1');
  const [data] = useState(EMBEDDED_DATA);
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  // Set initial match ID
  React.useEffect(() => {
    const teamData = selectedTeam === 'Sion 1' ? data.sion1 : data.sion2;
    const teamMatch = teamData.matches.find(m => m.homeTeam === selectedTeam || m.awayTeam === selectedTeam);
    if (teamMatch && !selectedMatchId) {
      setSelectedMatchId(teamMatch.matchId);
    }
  }, [selectedTeam, data, selectedMatchId]);

  // Helper functions
  const formatMatchResult = (score) => {
    if (!score) return { home: 0, away: 0 };
    const parts = score.split('-');
    if (parts.length !== 2) return { home: 0, away: 0 };
    const homeScore = parseFloat(parts[0].replace('½', '.5'));
    const awayScore = parseFloat(parts[1].replace('½', '.5'));
    return { home: homeScore, away: awayScore };
  };

  // Handle team change
  const handleTeamChange = (team) => {
    setSelectedTeam(team);
    const matches = team === 'Sion 1' ? data.sion1.matches : data.sion2.matches;
    const teamMatch = matches.find(m => m.homeTeam === team || m.awayTeam === team);
    if (teamMatch) {
      setSelectedMatchId(teamMatch.matchId);
    }
  };

  // Get current data
  const currentData = selectedTeam === 'Sion 1' ? data.sion1 : data.sion2;
  const currentMatch = currentData.matches.find(m => m.matchId === selectedMatchId);
  const currentBoards = currentData.boards.filter(b => b.matchId === selectedMatchId);

  return (
    <div className="container mx-auto px-4">
      {/* Team selection */}
      <div className="flex justify-center mb-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <button 
            className={`px-6 py-3 ${selectedTeam === 'Sion 1' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => handleTeamChange('Sion 1')}
          >
            Sion 1
          </button>
          <button 
            className={`px-6 py-3 ${selectedTeam === 'Sion 2' ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'}`}
            onClick={() => handleTeamChange('Sion 2')}
          >
            Sion 2
          </button>
        </div>
      </div>
      
      {/* League & Round Info */}
      <div className="bg-white rounded-lg p-4 mb-8 shadow-md">
        <div className="text-center">
          <h2 className="font-bold text-xl mb-2">
            {currentData.info[0]?.league || '?'} - Ronde {currentData.info[0]?.round || '?'}
          </h2>
        </div>
      </div>
      
      {/* Rankings Table */}
      <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h2 className="font-bold">Classement</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-200">
                <th className="px-4 py-2 text-left">Rang</th>
                <th className="px-4 py-2 text-left">Équipe</th>
                <th className="px-4 py-2 text-center">Points de match</th>
                <th className="px-4 py-2 text-center">Points de jeu</th>
              </tr>
            </thead>
            <tbody>
              {currentData.rankings.map((rank, index) => (
                <tr 
                  key={index} 
                  className={`border-b ${rank.team === selectedTeam ? 'bg-red-100' : ''}`}
                >
                  <td className="px-4 py-2">{rank.rank}</td>
                  <td className="px-4 py-2">{rank.team}</td>
                  <td className="px-4 py-2 text-center">{rank.matchPoints}</td>
                  <td className="px-4 py-2 text-center">{rank.gamePoints}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      {/* Matches & Boards */}
      <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
        <div className="bg-gray-800 text-white px-4 py-3">
          <h2 className="font-bold">Résultats</h2>
        </div>
        
        {/* Match selection */}
        <div className="p-4 bg-gray-100 border-b">
          <label className="block mb-2 font-semibold">Sélectionnez un match:</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentData.matches.map((match, index) => (
              <button
                key={index}
                className={`p-3 rounded border ${selectedMatchId === match.matchId ? 'bg-red-600 text-white border-red-700' : 'bg-white border-gray-300 hover:bg-gray-200'}`}
                onClick={() => setSelectedMatchId(match.matchId)}
              >
                <div className="font-semibold">{match.homeTeam} - {match.awayTeam}</div>
                <div className="text-sm mt-1">{match.score}</div>
              </button>
            ))}
          </div>
        </div>
        
        {/* Match details */}
        {currentMatch && (
          <div className="p-4">
            <div className="text-center mb-4">
              <h3 className="text-xl font-bold">{currentMatch.homeTeam} - {currentMatch.awayTeam}</h3>
              <p className="text-lg font-semibold">{currentMatch.score}</p>
              
              {/* Match result visualization */}
              {currentMatch.score && (
                <div className="flex justify-center items-center mt-2">
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                    currentMatch.homeTeam === selectedTeam ? 'bg-red-600' : 'bg-gray-600'
                  }`}>
                    {formatMatchResult(currentMatch.score).home}
                  </div>
                  <div className="mx-2 text-lg">-</div>
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                    currentMatch.awayTeam === selectedTeam ? 'bg-red-600' : 'bg-gray-600'
                  }`}>
                    {formatMatchResult(currentMatch.score).away}
                  </div>
                </div>
              )}
            </div>
            
            {/* Boards */}
            {currentBoards.length > 0 && (
              <div className="overflow-x-auto mt-4">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2 text-center">Échiquier</th>
                      <th className="px-4 py-2 text-left">Joueur (Blanc)</th>
                      <th className="px-4 py-2 text-center">Elo</th>
                      <th className="px-4 py-2 text-center">Résultat</th>
                      <th className="px-4 py-2 text-left">Joueur (Noir)</th>
                      <th className="px-4 py-2 text-center">Elo</th>
                    </tr>
                  </thead>
                  <tbody>
                    {currentBoards.map((board, index) => {
                      // Determine if this game involves a Sion player
                      const isSionHomePlayer = currentMatch.homeTeam === selectedTeam;
                      const isSionAwayPlayer = currentMatch.awayTeam === selectedTeam;
                      
                      return (
                        <tr key={index} className="border-b hover:bg-gray-50">
                          <td className="px-4 py-2 text-center">{board.boardNumber}</td>
                          <td className={`px-4 py-2 ${isSionHomePlayer ? 'font-bold bg-red-50' : ''}`}>
                            {board.homePlayer}
                          </td>
                          <td className={`px-4 py-2 text-center ${isSionHomePlayer ? 'font-bold bg-red-50' : ''}`}>
                            {board.homeRating || '-'}
                          </td>
                          <td className="px-4 py-2 text-center font-bold">{board.result}</td>
                          <td className={`px-4 py-2 ${isSionAwayPlayer ? 'font-bold bg-red-50' : ''}`}>
                            {board.awayPlayer}
                          </td>
                          <td className={`px-4 py-2 text-center ${isSionAwayPlayer ? 'font-bold bg-red-50' : ''}`}>
                            {board.awayRating || '-'}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            )}
            
            {currentBoards.length === 0 && (
              <div className="text-center text-gray-500 mt-4">
                Détails des parties non disponibles pour ce match.
              </div>
            )}
          </div>
        )}
        
        {/* No match selected */}
        {!currentMatch && (
          <div className="p-4 text-center text-gray-600">
            Aucun match sélectionné.
          </div>
        )}
      </div>
    </div>
  );
};

export default CSEVisualization;