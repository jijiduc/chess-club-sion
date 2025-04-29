import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * CSE Visualization with built-in data fallbacks
 * Robust version that doesn't rely on external data imports
 */
const CSEVisualization = () => {
  // Built-in data (as fallbacks if imports fail)
  const FALLBACK_DATA = {
    LEAGUES: [
      { id: 1, name: "1ère ligue" },
      { id: 2, name: "3ème ligue" }
    ],
    TEAMS: [
      // 1ère ligue
      { id: 1, name: "Sion 1", leagueId: 1 },
      { id: 2, name: "Genève 2", leagueId: 1 },
      { id: 3, name: "Neuchâtel 1", leagueId: 1 },
      { id: 4, name: "Valais 1", leagueId: 1 },
      { id: 5, name: "Echallens 2", leagueId: 1 },
      { id: 6, name: "Grand Echiquier 1", leagueId: 1 },
      { id: 7, name: "Köniz-Bubenberg 1", leagueId: 1 },
      { id: 8, name: "Fribourg 1", leagueId: 1 },
      
      // 3ème ligue
      { id: 9, name: "Sion 2", leagueId: 2 },
      { id: 10, name: "Grand Echiquier 2", leagueId: 2 },
      { id: 11, name: "Monthey 1", leagueId: 2 },
      { id: 12, name: "Crans-Montana 2", leagueId: 2 },
      { id: 13, name: "Valais 2", leagueId: 2 },
      { id: 14, name: "Bulle 3", leagueId: 2 },
      { id: 15, name: "Crazy Horse 1", leagueId: 2 },
      { id: 16, name: "Payerne 2", leagueId: 2 }
    ],
    ROUND_DATA: {
      matches: [
        {
          id: 3,
          roundId: 1,
          homeTeamId: 1, // Sion 1
          awayTeamId: 6, // Grand Echiquier 1
          score: "1½-6½"
        },
        {
          id: 6,
          roundId: 1,
          homeTeamId: 9, // Sion 2
          awayTeamId: 12, // Crans-Montana 2
          score: "2-4"
        }
      ],
      boards: [
        // Match 3: Sion 1 vs Grand Echiquier 1
        {
          matchId: 3,
          boardNumber: 1,
          homePlayer: "Flavien Sola",
          homeRating: 2167,
          result: "0-1",
          awayPlayer: "Guillaume Chauvon",
          awayRating: 2076
        },
        {
          matchId: 3,
          boardNumber: 2,
          homePlayer: "Vlad Popescu",
          homeRating: 1990,
          result: "0-1",
          awayPlayer: "Ferran Rocamora Martorell",
          awayRating: 2126
        },
        {
          matchId: 3,
          boardNumber: 3,
          homePlayer: "Pierre-M. Rappaz",
          homeRating: 1933,
          result: "½-½",
          awayPlayer: "Jonathan Jaccard",
          awayRating: 1949
        },
        {
          matchId: 3,
          boardNumber: 4,
          homePlayer: "Jean-Yves Riand",
          homeRating: 1877,
          result: "½-½",
          awayPlayer: "Jean-Manuel Segura",
          awayRating: 2066
        },
        // Match 6: Sion 2 vs Crans-Montana 2
        {
          matchId: 6,
          boardNumber: 1,
          homePlayer: "Alexandre Briguet",
          homeRating: 1828,
          result: "0-1",
          awayPlayer: "Alessandro Bonalli",
          awayRating: 1621
        },
        {
          matchId: 6,
          boardNumber: 2,
          homePlayer: "Olivier Crettenand",
          homeRating: 1826,
          result: "1-0",
          awayPlayer: "Timur Gökok",
          awayRating: null
        }
      ],
      rankings: {
        1: [ // 1ère ligue
          { rank: 1, teamId: 6, matchPoints: 2, gamePoints: "6½" },
          { rank: 8, teamId: 1, matchPoints: 0, gamePoints: "1½" }
        ],
        2: [ // 3ème ligue
          { rank: 3, teamId: 12, matchPoints: 2, gamePoints: "4" },
          { rank: 6, teamId: 9, matchPoints: 0, gamePoints: "2" }
        ]
      }
    }
  };

  // State
  const [selectedTeam, setSelectedTeam] = useState({ id: 1, name: "Sion 1" });
  const [selectedMatchId, setSelectedMatchId] = useState(3); // Default to match 3
  const [currentView, setCurrentView] = useState("results"); // Start with results view
  const [isMobile, setIsMobile] = useState(false);
  const [isSmallMobile, setIsSmallMobile] = useState(false);
  const [loading, setLoading] = useState(false);

  // First, try to dynamically import the data manager
  const [dataManager, setDataManager] = useState(null);
  const [usingFallbackData, setUsingFallbackData] = useState(false);
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [boards, setBoards] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [teamInfo, setTeamInfo] = useState(null);

  // Check screen size on mount and resize
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
  }, []);

  // Try to import the data manager on mount
  useEffect(() => {
    const tryImportDataManager = async () => {
      try {
        // Try to dynamically import the data manager
        setLoading(true);
        
        // First, try to use the data manager if available
        try {
          const importedModule = await import('../../data');
          const manager = importedModule.default;
          
          // Test that the data manager works
          if (manager && manager.teams && manager.getTeamInfo) {
            console.log("Using external data manager");
            setDataManager(manager);
            setUsingFallbackData(false);
          } else {
            throw new Error("Data manager imported but is missing required properties");
          }
        } catch (error) {
          console.error("Error importing data manager, using fallback data", error);
          setUsingFallbackData(true);
          
          // Create a simple data manager using the fallback data
          setDataManager({
            leagues: FALLBACK_DATA.LEAGUES,
            teams: FALLBACK_DATA.TEAMS,
            roundData: FALLBACK_DATA.ROUND_DATA,
            getTeamInfo: (teamId) => {
              const team = FALLBACK_DATA.TEAMS.find(t => t.id === teamId);
              if (!team) return null;
              
              const league = FALLBACK_DATA.LEAGUES.find(l => l.id === team.leagueId);
              return { ...team, league };
            },
            getTeamName: (teamId) => {
              const team = FALLBACK_DATA.TEAMS.find(t => t.id === teamId);
              return team ? team.name : "Équipe inconnue";
            },
            loadRoundData: async () => FALLBACK_DATA.ROUND_DATA
          });
        }
      } catch (error) {
        console.error("Critical error in data initialization", error);
      } finally {
        setLoading(false);
      }
    };

    tryImportDataManager();
  }, []);

  // Load data when team or data manager changes
  useEffect(() => {
    const loadTeamData = async () => {
      if (!dataManager) return;
      
      try {
        // Get team info
        const info = dataManager.getTeamInfo(selectedTeam.id);
        setTeamInfo(info);

        // Load round data - either from the data manager or fallback
        let roundData;
        if (usingFallbackData) {
          roundData = FALLBACK_DATA.ROUND_DATA;
        } else {
          try {
            roundData = await dataManager.loadRoundData(1);
          } catch (error) {
            console.error("Error loading round data, using fallback", error);
            roundData = FALLBACK_DATA.ROUND_DATA;
          }
        }

        // Get rankings for this league
        if (info && roundData.rankings && roundData.rankings[info.leagueId]) {
          setRankings(roundData.rankings[info.leagueId]);
        } else {
          setRankings([]);
        }

        // Get matches for this team
        const teamMatches = roundData.matches.filter(
          (m) => m.homeTeamId === selectedTeam.id || m.awayTeamId === selectedTeam.id
        );

        // Get all matches for the current league
        const leagueMatches = info 
          ? roundData.matches.filter(m => {
              const homeTeam = dataManager.getTeamInfo(m.homeTeamId);
              return homeTeam && homeTeam.leagueId === info.leagueId;
            })
          : [];

        // Add team names to both match lists
        const enhancedTeamMatches = teamMatches.map((match) => ({
          ...match,
          homeTeam: dataManager.getTeamName(match.homeTeamId),
          awayTeam: dataManager.getTeamName(match.awayTeamId),
        }));

        const enhancedAllMatches = leagueMatches.map((match) => ({
          ...match,
          homeTeam: dataManager.getTeamName(match.homeTeamId),
          awayTeam: dataManager.getTeamName(match.awayTeamId),
          isTeamMatch: match.homeTeamId === selectedTeam.id || match.awayTeamId === selectedTeam.id,
        }));

        setMatches(enhancedTeamMatches);
        setAllMatches(enhancedAllMatches);

        // Set default match if none selected
        if (enhancedTeamMatches.length > 0 && !selectedMatchId) {
          setSelectedMatchId(enhancedTeamMatches[0].id);
        } else if (selectedTeam.id === 1) {
          setSelectedMatchId(3); // Default match for Sion 1
        } else if (selectedTeam.id === 9) {
          setSelectedMatchId(6); // Default match for Sion 2
        }
        
        // Load boards for selected match
        loadBoardData(selectedMatchId, roundData);
      } catch (error) {
        console.error("Error in loadTeamData", error);
      }
    };

    loadTeamData();
  }, [dataManager, selectedTeam.id]);

  // Load board data when match selection changes
  const loadBoardData = (matchId, roundData) => {
    if (!matchId) return;
    
    try {
      const data = roundData || (usingFallbackData ? FALLBACK_DATA.ROUND_DATA : null);
      
      if (!data || !data.boards) {
        setBoards([]);
        return;
      }
      
      const matchBoards = data.boards.filter(b => b.matchId === matchId);
      setBoards(matchBoards);
    } catch (error) {
      console.error("Error loading board data", error);
      setBoards([]);
    }
  };

  // Update boards when match selection changes
  useEffect(() => {
    if (usingFallbackData) {
      loadBoardData(selectedMatchId, FALLBACK_DATA.ROUND_DATA);
    } else if (dataManager) {
      dataManager.loadRoundData(1).then(roundData => {
        loadBoardData(selectedMatchId, roundData);
      }).catch(error => {
        console.error("Error loading round data for boards", error);
        loadBoardData(selectedMatchId, FALLBACK_DATA.ROUND_DATA);
      });
    }
  }, [selectedMatchId, usingFallbackData, dataManager]);

  // Handle team change
  const handleTeamChange = (teamId) => {
    if (!dataManager) return;
    
    const teamName = dataManager.getTeamName(teamId);
    setSelectedTeam({ id: teamId, name: teamName });
    
    // Set appropriate default match
    if (teamId === 1) {
      setSelectedMatchId(3);
    } else if (teamId === 9) {
      setSelectedMatchId(6);
    } else {
      setSelectedMatchId(null);
    }
  };

  // Get current match
  const currentMatch = 
    matches.find(m => m.id === selectedMatchId) ||
    allMatches.find(m => m.id === selectedMatchId);

  // Format match result
  const formatMatchResult = (score) => {
    if (!score) return { home: "0", away: "0" };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: "0", away: "0" };
    
    const homeScore = parts[0].trim().replace("½", ".5");
    const awayScore = parts[1].trim().replace("½", ".5");
    
    return { home: homeScore, away: awayScore };
  };

  // Loading indicator
  if (loading || !dataManager) {
    return (
      <div className={`container mx-auto ${isSmallMobile ? 'px-2' : 'px-4'} py-4 text-center`}>
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`container mx-auto ${isSmallMobile ? 'px-2' : 'px-4'} cse-visualization`}>
      {/* League header */}
      <div className="bg-white rounded-lg p-3 mb-4 shadow-md">
        <div className="text-center">
          <h2 className="font-bold text-xl">
            {teamInfo?.league?.name || "?"} Ouest
          </h2>
        </div>
      </div>

      {/* Navigation */}
      <div className="mb-6 rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <div className={`${isMobile ? 'flex flex-col' : 'flex'} bg-gradient-to-r from-gray-50 to-gray-100`}>
          {/* Team selection */}
          <div className={`${isMobile ? 'w-full' : 'flex border-r border-gray-300'}`}>
            <button
              className={`${isMobile ? 'flex-1' : 'px-6'} py-4 font-medium transition-all duration-200 ${
                selectedTeam.id === 1
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTeamChange(1)}
            >
              Sion 1
            </button>
            <button
              className={`${isMobile ? 'flex-1' : 'px-6'} py-4 font-medium transition-all duration-200 ${
                selectedTeam.id === 9
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTeamChange(9)}
            >
              Sion 2
            </button>
          </div>

          {/* View selection */}
          <div className={`${isMobile ? 'w-full' : 'flex'}`}>
            <button
              className={`${isMobile ? 'flex-1' : 'px-8'} py-4 font-medium transition-all duration-200 ${
                currentView === "rankings"
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentView("rankings")}
            >
              {isMobile ? "Class." : "Classement"}
            </button>
            <button
              className={`${isMobile ? 'flex-1' : 'px-8'} py-4 font-medium transition-all duration-200 ${
                currentView === "results"
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentView("results")}
            >
              {isMobile ? "Rés." : "Résultats"}
            </button>
          </div>
        </div>
      </div>

      {/* Content based on selected view */}
      {currentView === "rankings" ? (
        /* Rankings Table */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Classement</h2>
          </div>
          {rankings.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="px-4 py-2 text-left">#</th>
                    <th className="px-4 py-2 text-left">Équipe</th>
                    <th className="px-4 py-2 text-center">PM</th>
                    <th className="px-4 py-2 text-center">PI</th>
                  </tr>
                </thead>
                <tbody>
                  {rankings.map((rank, index) => (
                    <tr
                      key={index}
                      className={`border-b ${rank.teamId === selectedTeam.id ? "bg-red-100" : ""}`}
                    >
                      <td className="px-4 py-2">{rank.rank}</td>
                      <td className="px-4 py-2">{dataManager.getTeamName(rank.teamId)}</td>
                      <td className="px-4 py-2 text-center">{rank.matchPoints}</td>
                      <td className="px-4 py-2 text-center">{rank.gamePoints}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="p-4 text-center text-gray-600">
              Aucun classement disponible.
            </div>
          )}
        </div>
      ) : (
        /* Matches & Boards */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Résultats - Ronde 1</h2>
          </div>

          {allMatches.length > 0 ? (
            <>
              {/* Matches list */}
              <div className="p-4 bg-gray-200 border-b">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {allMatches.map((match, index) => (
                    <button
                      key={index}
                      className={`p-3 rounded border ${
                        selectedMatchId === match.id
                          ? "bg-red-600 text-white border-red-700 hover:bg-red-700"
                          : match.isTeamMatch
                          ? "bg-red-50 border-red-200 hover:bg-red-100"
                          : "bg-white border-gray-300 hover:bg-gray-100"
                      }`}
                      onClick={() => setSelectedMatchId(match.id)}
                    >
                      <div className="font-semibold">
                        {match.homeTeam} - {match.awayTeam}
                      </div>
                      <div className="text-sm mt-1">{match.score}</div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Match details */}
              {currentMatch ? (
                <div className={isSmallMobile ? 'p-2' : 'p-4'}>
                  {/* Score display */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`${isSmallMobile ? 'text-sm' : 'text-lg'} font-bold text-right w-1/3`}>
                      {currentMatch.homeTeam}
                    </div>
                    
                    <div className="flex justify-center items-center">
                      <div className={`${isSmallMobile ? 'w-10 h-10' : 'w-16 h-16'} rounded-full flex items-center justify-center text-white font-bold bg-gray-600`}>
                        {formatMatchResult(currentMatch.score).home}
                      </div>
                      <div className={`mx-2 ${isSmallMobile ? 'text-base' : 'text-lg'}`}>-</div>
                      <div className={`${isSmallMobile ? 'w-10 h-10' : 'w-16 h-16'} rounded-full flex items-center justify-center text-white font-bold bg-gray-600`}>
                        {formatMatchResult(currentMatch.score).away}
                      </div>
                    </div>
                    
                    <div className={`${isSmallMobile ? 'text-sm' : 'text-lg'} font-bold text-left w-1/3`}>
                      {currentMatch.awayTeam}
                    </div>
                  </div>
                  
                  {/* Boards table */}
                  {boards.length > 0 ? (
                    <div className="overflow-x-auto mt-4">
                      <table className="w-full">
                        <thead>
                          <tr className="bg-gray-200">
                            <th className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center`}>É</th>
                            <th className={`${isSmallMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2'} text-left`}>Joueur</th>
                            <th className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center`}>Elo</th>
                            <th className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center`}>R</th>
                            <th className={`${isSmallMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2'} text-left`}>Joueur</th>
                            <th className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center`}>Elo</th>
                          </tr>
                        </thead>
                        <tbody>
                          {boards.map((board) => {
                            // Colors alternate by board number
                            const homePlayerHasWhite = board.boardNumber % 2 === 1;
                            
                            return (
                              <tr key={board.boardNumber} className="border-b hover:bg-gray-50">
                                <td className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center`}>
                                  {board.boardNumber}
                                </td>
                                <td
                                  className={`${isSmallMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2'} ${
                                    homePlayerHasWhite
                                      ? "bg-white border-l-2 border-gray-200"
                                      : "bg-gray-700 text-white"
                                  }`}
                                >
                                  {isSmallMobile 
                                    ? board.homePlayer.split(' ').pop() // Just the last name on small screens
                                    : board.homePlayer}
                                </td>
                                <td
                                  className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center ${
                                    homePlayerHasWhite
                                      ? "bg-white border-r-2 border-gray-200"
                                      : "bg-gray-700 text-white"
                                  }`}
                                >
                                  {board.homeRating || "-"}
                                </td>
                                <td className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center font-bold`}>
                                  {board.result}
                                </td>
                                <td
                                  className={`${isSmallMobile ? 'px-2 py-1 text-xs' : 'px-4 py-2'} ${
                                    !homePlayerHasWhite
                                      ? "bg-white border-l-2 border-gray-200"
                                      : "bg-gray-700 text-white"
                                  }`}
                                >
                                  {isSmallMobile 
                                    ? board.awayPlayer.split(' ').pop() // Just the last name on small screens
                                    : board.awayPlayer}
                                </td>
                                <td
                                  className={`${isSmallMobile ? 'px-1 py-1 text-xs' : 'px-4 py-2'} text-center ${
                                    !homePlayerHasWhite
                                      ? "bg-white border-r-2 border-gray-200"
                                      : "bg-gray-700 text-white"
                                  }`}
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
                    <div className="text-center text-gray-500 my-4">
                      Détails des parties non disponibles pour ce match.
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-4 text-center text-gray-600">
                  Sélectionnez un match pour voir les détails.
                </div>
              )}
            </>
          ) : (
            <div className="p-4 text-center text-gray-600">
              Aucun match disponible pour cette ronde.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

/**
 * Initialize the CSE Visualization React app
 */
const initializeApp = () => {
  console.log('Initializing CSE app...');
  const container = document.getElementById('cse-react');
  
  if (container) {
    console.log('Container found, creating root');
    
    try {
      const root = createRoot(container);
      root.render(<CSEVisualization />);
      console.log('Rendered successfully');
    } catch (error) {
      console.error('Error rendering component:', error);
      // Display error message to user
      container.innerHTML = `
        <div class="bg-red-100 p-4 rounded-lg text-center">
          <h3 class="text-red-700 font-bold mb-2">Une erreur est survenue</h3>
          <p class="text-red-600">Impossible d'afficher les données du championnat.</p>
        </div>
      `;
    }
  } else {
    console.error('Container element with id "cse-react" not found');
  }
};

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // If DOM is already loaded, initialize immediately
  initializeApp();
}

export default CSEVisualization;