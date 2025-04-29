import React, { useState, useEffect } from "react";

// Import data manager
import ChessDataManager from "../../data";

// Main component
const CSEVisualization = () => {
  // State
  const [selectedTeam, setSelectedTeam] = useState({ id: 1, name: "Sion 1" });
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [currentView, setCurrentView] = useState("rankings");
  const [loading, setLoading] = useState(true);
  const [currentRound, setCurrentRound] = useState(1); // Initial value, will be updated
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [boards, setBoards] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [teamInfo, setTeamInfo] = useState(null);

  // Find the latest round with data available
  useEffect(() => {
    const findLatestRound = async () => {
      try {
        // Get max possible round from total number of rounds (should be 7)
        const maxRound = ChessDataManager.roundsInfo.length;
        
        // Try to find the latest round with data by checking each round
        // starting from the highest number
        for (let i = maxRound; i >= 1; i--) {
          try {
            const roundData = await ChessDataManager.loadRoundData(i);
            // Check if this round has valid data
            if (roundData && (
                (roundData.matches && roundData.matches.length > 0) || 
                (roundData.rankings && Object.keys(roundData.rankings).length > 0)
              )) {
              console.log(`Found latest round with data: Round ${i}`);
              setCurrentRound(i);
              break;
            }
          } catch (error) {
            // Continue checking previous rounds
            console.log(`No data for round ${i}, checking previous...`);
            continue;
          }
        }
      } catch (error) {
        console.error("Error finding latest round:", error);
      }
    };

    findLatestRound();
  }, []);

  // Load data when team or round changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        // Get team info
        const info = ChessDataManager.getTeamInfo(selectedTeam.id);
        setTeamInfo(info);

        // Load round data
        const roundData = await ChessDataManager.loadRoundData(currentRound);

        // Get rankings for this league
        setRankings(roundData.rankings[info.leagueId]);

        // Get matches for this team
        const teamMatches = roundData.matches.filter(
          (m) =>
            m.homeTeamId === selectedTeam.id || m.awayTeamId === selectedTeam.id
        );

        // Get all matches for the current league
        const leagueMatches = roundData.matches.filter((m) => {
          const homeTeam = ChessDataManager.getTeamInfo(m.homeTeamId);
          return homeTeam && homeTeam.leagueId === info.leagueId;
        });

        // Add team names to both match lists
        const enhancedTeamMatches = teamMatches.map((match) => ({
          ...match,
          homeTeam: ChessDataManager.getTeamName(match.homeTeamId),
          awayTeam: ChessDataManager.getTeamName(match.awayTeamId),
        }));

        const enhancedAllMatches = leagueMatches.map((match) => ({
          ...match,
          homeTeam: ChessDataManager.getTeamName(match.homeTeamId),
          awayTeam: ChessDataManager.getTeamName(match.awayTeamId),
          isTeamMatch:
            match.homeTeamId === selectedTeam.id ||
            match.awayTeamId === selectedTeam.id,
        }));

        setMatches(enhancedTeamMatches);
        setAllMatches(enhancedAllMatches);

        // Set default match if none selected
        if (enhancedTeamMatches.length > 0 && !selectedMatchId) {
          setSelectedMatchId(enhancedTeamMatches[0].id);
        }
      } catch (error) {
        console.error("Error loading data:", error);
      }

      setLoading(false);
    };

    loadData();
  }, [selectedTeam.id, currentRound]);

  // Load board data when match selection changes
  useEffect(() => {
    const loadBoardData = async () => {
      if (!selectedMatchId) return;

      try {
        const roundData = await ChessDataManager.loadRoundData(currentRound);
        const matchBoards = roundData.boards.filter(
          (b) => b.matchId === selectedMatchId
        );
        setBoards(matchBoards);
      } catch (error) {
        console.error("Error loading board data:", error);
      }
    };

    loadBoardData();
  }, [selectedMatchId, currentRound]);

  // Helper functions
  const formatMatchResult = (score) => {
    if (!score) return { home: 0, away: 0 };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: 0, away: 0 };
    const homeScore = parseFloat(parts[0].replace("½", ".5"));
    const awayScore = parseFloat(parts[1].replace("½", ".5"));
    return { home: homeScore, away: awayScore };
  };

  // Handle team change
  const handleTeamChange = (teamId, teamName) => {
    setSelectedTeam({ id: teamId, name: teamName });
    setSelectedMatchId(null); // Reset selected match
  };

  // Get current match
  const currentMatch =
    matches.find((m) => m.id === selectedMatchId) ||
    allMatches.find((m) => m.id === selectedMatchId);

  // Loading indicator
  if (loading) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-300 rounded w-1/3 mx-auto mb-4"></div>
          <div className="h-48 bg-gray-300 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4">
      {/* League info */}
      <div className="bg-white rounded-lg p-3 mb-4 shadow-md">
        <div className="text-center">
          <h2 className="font-bold text-xl">
            {teamInfo?.league?.name || "?"} Ouest
          </h2>
        </div>
      </div>

      {/* Elegant Navigation Bar */}
      <div className="mb-6 rounded-lg overflow-hidden shadow-lg border border-gray-200">
        <div className="flex flex-wrap items-center bg-gradient-to-r from-gray-50 to-gray-100">
          {/* Team selection - Left side */}
          <div className="flex border-r border-gray-300">
            <button
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                selectedTeam.id === 1
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTeamChange(1, "Sion 1")}
            >
              Sion 1
            </button>
            <button
              className={`px-6 py-4 font-medium transition-all duration-200 ${
                selectedTeam.id === 9
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => handleTeamChange(9, "Sion 2")}
            >
              Sion 2
            </button>
          </div>

          {/* Round selection - Center */}
          <div className="flex flex-1 border-r border-gray-300">
            {[1, 2, 3, 4, 5, 6, 7].map((round) => (
              <button
                key={round}
                className={`flex-1 py-4 font-medium transition-all duration-200 ${
                  currentRound === round
                    ? "bg-red-600 text-white shadow-inner"
                    : "bg-transparent hover:bg-gray-200 text-gray-800"
                }`}
                onClick={() => setCurrentRound(round)}
              >
                {round}
              </button>
            ))}
          </div>

          {/* View selection - Right side */}
          <div className="flex">
            <button
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                currentView === "rankings"
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentView("rankings")}
            >
              Classement
            </button>
            <button
              className={`px-8 py-4 font-medium transition-all duration-200 ${
                currentView === "results"
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => setCurrentView("results")}
            >
              Résultats
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
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="px-4 py-2 text-left">Rang</th>
                  <th className="px-4 py-2 text-left">Équipe</th>
                  <th className="px-4 py-2 text-center">Points de match</th>
                  <th className="px-4 py-2 text-center">Points individuels</th>
                </tr>
              </thead>
              <tbody>
                {rankings &&
                  rankings.map((rank, index) => (
                    <tr
                      key={index}
                      className={`border-b ${
                        rank.teamId === selectedTeam.id ? "bg-red-100" : ""
                      }`}
                    >
                      <td className="px-4 py-2">{rank.rank}</td>
                      <td className="px-4 py-2">
                        {ChessDataManager.getTeamName(rank.teamId)}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {rank.matchPoints}
                      </td>
                      <td className="px-4 py-2 text-center">
                        {rank.gamePoints}
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Matches & Boards */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Résultats - Ronde {currentRound}</h2>
          </div>

          {/* Match selection - Now showing all matches, with team matches highlighted */}
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
          {currentMatch && (
            <div className="p-4">
              {/* Score display */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-right w-1/3">
                  {currentMatch.homeTeam}
                </div>

                <div className="flex justify-center items-center">
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600`}
                  >
                    {formatMatchResult(currentMatch.score).home}
                  </div>
                  <div className="mx-2 text-lg">-</div>
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600`}
                  >
                    {formatMatchResult(currentMatch.score).away}
                  </div>
                </div>

                <div className="text-lg font-bold text-left w-1/3">
                  {currentMatch.awayTeam}
                </div>
              </div>

              {/* Boards */}
              {boards.length > 0 && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-center">Échiquier</th>
                        <th className="px-4 py-2 text-left">Joueur</th>
                        <th className="px-4 py-2 text-center">Elo</th>
                        <th className="px-4 py-2 text-center">Résultat</th>
                        <th className="px-4 py-2 text-left">Joueur</th>
                        <th className="px-4 py-2 text-center">Elo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {boards.map((board, index) => {
                        // For traditional chess color alternation - home player on odd boards has white
                        const homePlayerHasWhite = board.boardNumber % 2 === 1;
                        const awayPlayerHasWhite = !homePlayerHasWhite;

                        return (
                          <tr key={index} className="border-b hover:bg-gray-50">
                            <td className="px-4 py-2 text-center">
                              {board.boardNumber}
                            </td>
                            <td
                              className={`px-4 py-2 ${
                                homePlayerHasWhite
                                  ? "bg-white border-l-2 border-gray-200"
                                  : "bg-gray-700 text-white"
                              }`}
                            >
                              {board.homePlayer}
                            </td>
                            <td
                              className={`px-4 py-2 text-center ${
                                homePlayerHasWhite
                                  ? "bg-white border-r-2 border-gray-200"
                                  : "bg-gray-700 text-white"
                              }`}
                            >
                              {board.homeRating || "-"}
                            </td>
                            <td className="px-4 py-2 text-center font-bold">
                              {board.result}
                            </td>
                            <td
                              className={`px-4 py-2 ${
                                awayPlayerHasWhite
                                  ? "bg-white border-l-2 border-gray-200"
                                  : "bg-gray-700 text-white"
                              }`}
                            >
                              {board.awayPlayer}
                            </td>
                            <td
                              className={`px-4 py-2 text-center ${
                                awayPlayerHasWhite
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
              )}

              {boards.length === 0 && (
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
      )}
    </div>
  );
};

export default CSEVisualization;