import React, { useState, useEffect } from 'react';

// Main component
const CSEVisualization = () => {
  // State
  const [selectedTeam, setSelectedTeam] = useState('Sion 1');
  const [data, setData] = useState({
    sion1: { info: [], matches: [], boards: [], rankings: [] },
    sion2: { info: [], matches: [], boards: [], rankings: [] }
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedMatchId, setSelectedMatchId] = useState(null);

  // Simple CSV parser
  const parseCSV = (content) => {
    try {
      console.log("Parsing CSV content:", content.substring(0, 100) + "...");
      
      const lines = content.split('\n');
      const headers = lines[0].split(',').map(h => h.trim());
      
      const results = [];
      for (let i = 1; i < lines.length; i++) {
        const line = lines[i].trim();
        if (!line) continue;
        
        const values = line.split(',');
        const obj = {};
        
        headers.forEach((header, index) => {
          let value = values[index] ? values[index].trim() : '';
          if (!isNaN(value) && value !== '') {
            value = Number(value);
          }
          obj[header] = value;
        });
        
        results.push(obj);
      }
      
      return results.filter(row => Object.values(row).some(val => val !== null && val !== undefined && val !== ""));
    } catch (error) {
      console.error("CSV parsing error:", error);
      return [];
    }
  };

  // Load data
  useEffect(() => {
    const loadFile = async (filePath) => {
      try {
        // For files in a specific directory
        const fullPath = `src/components/CSV/${filePath}`;
        const response = await window.fs.readFile(fullPath, { encoding: 'utf8' });
        return response;
      } catch (err) {
        console.error(`Error loading ${filePath}:`, err);
        throw err;
      }
    };

    const loadAllData = async () => {
      try {
        setLoading(true);
        console.log("Starting data load...");
        
        // Explicitly try to load each file with error handling
        let sion1InfoContent, sion1MatchesContent, sion1BoardsContent, sion1RankingsContent;
        let sion2InfoContent, sion2MatchesContent, sion2BoardsContent, sion2RankingsContent;
        
        try {
          sion1InfoContent = await loadFile('Sion1_info.csv');
          console.log("Loaded Sion1_info.csv");
        } catch (e) {
          console.error("Failed to load Sion1_info.csv:", e);
          sion1InfoContent = "league,round\n1ère ligue,1\n";
        }
        
        try {
          sion1MatchesContent = await loadFile('Sion1_matches.csv');
          console.log("Loaded Sion1_matches.csv");
        } catch (e) {
          console.error("Failed to load Sion1_matches.csv:", e);
          sion1MatchesContent = "matchId,homeTeam,awayTeam,score\n3,Sion 1,Grand Echiquier 1,1½-6½\n";
        }
        
        try {
          sion1BoardsContent = await loadFile('Sion1_boards.csv');
          console.log("Loaded Sion1_boards.csv");
        } catch (e) {
          console.error("Failed to load Sion1_boards.csv:", e);
          sion1BoardsContent = "matchId,boardNumber,homePlayer,homeRating,result,awayPlayer,awayRating\n";
        }
        
        try {
          sion1RankingsContent = await loadFile('Sion1_rankings.csv');
          console.log("Loaded Sion1_rankings.csv");
        } catch (e) {
          console.error("Failed to load Sion1_rankings.csv:", e);
          sion1RankingsContent = "rank,team,matchPoints,gamePoints\n1,Grand Echiquier 1,2,6½\n8,Sion 1,0,1½\n";
        }
        
        try {
          sion2InfoContent = await loadFile('Sion2_info.csv');
          console.log("Loaded Sion2_info.csv");
        } catch (e) {
          console.error("Failed to load Sion2_info.csv:", e);
          sion2InfoContent = "league,round\n3ème ligue,1\n";
        }
        
        try {
          sion2MatchesContent = await loadFile('Sion2_matches.csv');
          console.log("Loaded Sion2_matches.csv");
        } catch (e) {
          console.error("Failed to load Sion2_matches.csv:", e);
          sion2MatchesContent = "matchId,homeTeam,awayTeam,score\n2,Sion 2,Crans-Montana 2,2-4\n";
        }
        
        try {
          sion2BoardsContent = await loadFile('Sion2_boards.csv');
          console.log("Loaded Sion2_boards.csv");
        } catch (e) {
          console.error("Failed to load Sion2_boards.csv:", e);
          sion2BoardsContent = "matchId,boardNumber,homePlayer,homeRating,result,awayPlayer,awayRating\n";
        }
        
        try {
          sion2RankingsContent = await loadFile('Sion2_rankings.csv');
          console.log("Loaded Sion2_rankings.csv");
        } catch (e) {
          console.error("Failed to load Sion2_rankings.csv:", e);
          sion2RankingsContent = "rank,team,matchPoints,gamePoints\n6,Sion 2,0,2\n";
        }
        
        // Parse all data
        const sion1Info = parseCSV(sion1InfoContent);
        const sion1Matches = parseCSV(sion1MatchesContent);
        const sion1Boards = parseCSV(sion1BoardsContent);
        const sion1Rankings = parseCSV(sion1RankingsContent);
        
        const sion2Info = parseCSV(sion2InfoContent);
        const sion2Matches = parseCSV(sion2MatchesContent);
        const sion2Boards = parseCSV(sion2BoardsContent);
        const sion2Rankings = parseCSV(sion2RankingsContent);
        
        // Log data status
        console.log("Parsed data counts:", {
          sion1: {
            info: sion1Info.length,
            matches: sion1Matches.length,
            boards: sion1Boards.length,
            rankings: sion1Rankings.length
          },
          sion2: {
            info: sion2Info.length,
            matches: sion2Matches.length,
            boards: sion2Boards.length,
            rankings: sion2Rankings.length
          }
        });
        
        setData({
          sion1: { info: sion1Info, matches: sion1Matches, boards: sion1Boards, rankings: sion1Rankings },
          sion2: { info: sion2Info, matches: sion2Matches, boards: sion2Boards, rankings: sion2Rankings }
        });
        
        // Set initial selected match ID
        if (sion1Matches.length > 0) {
          const sion1Match = sion1Matches.find(m => m.homeTeam === 'Sion 1' || m.awayTeam === 'Sion 1');
          if (sion1Match) {
            setSelectedMatchId(sion1Match.matchId);
          }
        }
        
        setLoading(false);
      } catch (err) {
        console.error("Data loading error:", err);
        setError(err.message);
        setLoading(false);
      }
    };
    
    loadAllData();
  }, []);

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
    } else {
      setSelectedMatchId(null);
    }
  };

  // Get current data
  const currentData = selectedTeam === 'Sion 1' ? data.sion1 : data.sion2;
  const currentMatch = currentData.matches.find(m => m.matchId === selectedMatchId);
  const currentBoards = currentData.boards.filter(b => b.matchId === selectedMatchId);

  // UI Rendering
  if (loading) {
    return (
      <div className="text-center p-4">
        <div className="text-xl font-bold">Chargement des données...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 text-red-700 p-4 rounded-lg">
        <div className="font-bold">Erreur:</div>
        <div>{error}</div>
      </div>
    );
  }

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
            {currentData.info[0]?.league?.trim() || '?'} - Ronde {currentData.info[0]?.round || '?'}
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
            <div className="overflow-x-auto mt-4">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">Échiquier</th>
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
                        <td className="px-4 py-2">Échiquier {board.boardNumber}</td>
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