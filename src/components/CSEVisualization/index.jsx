import React, { useState, useEffect } from "react";
import ChessDataManager from "../../data";
import useMediaQuery from "./hooks/useMediaQuery";

// Component imports
import LeagueHeader from "./components/LeagueHeader";
import Navigation from "./components/Navigation";
import RankingsTable from "./components/RankingsTable";
import MatchesList from "./components/MatchesList";
import MatchDetails from "./components/MatchDetails";
import BoardsTable from "./components/BoardsTable";

// Main component
const CSEVisualization = () => {
  // State
  const [selectedTeam, setSelectedTeam] = useState({ id: 1, name: "Sion 1" });
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [currentView, setCurrentView] = useState("rankings");
  const [loading, setLoading] = useState(true);
  const [dataError, setDataError] = useState(false);
  const [currentRound, setCurrentRound] = useState(1);
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [boards, setBoards] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [teamInfo, setTeamInfo] = useState(null);
  
  // Responsive detection
  const isMobile = useMediaQuery('(max-width: 768px)');

  // Find the latest round with data available (limited to 1-3)
  useEffect(() => {
    const findLatestRound = async () => {
      try {
        // Start with a safe default round
        let foundRound = 1;
        
        // Try to find the latest round with data (only check 1-3)
        for (let i = 3; i >= 1; i--) {
          try {
            const roundData = await ChessDataManager.loadRoundData(i);
            // Check if this round has valid data
            if (roundData && (
                (roundData.matches && roundData.matches.length > 0) || 
                (roundData.rankings && Object.keys(roundData.rankings).length > 0)
              )) {
              console.log(`Found latest round with data: Round ${i}`);
              foundRound = i;
              break;
            }
          } catch (error) {
            // Continue checking previous rounds
            console.log(`No data for round ${i}, checking previous...`);
            continue;
          }
        }
        
        setCurrentRound(foundRound);
      } catch (error) {
        console.error("Error finding latest round:", error);
        // Ensure a default round is set even if errors occur
        setCurrentRound(1);
      }
    };

    findLatestRound();
  }, []);

  // Load data when team or round changes
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      setDataError(false);

      try {
        // Get team info
        const info = ChessDataManager.getTeamInfo(selectedTeam.id);
        if (!info) {
          throw new Error("Team info not found");
        }
        setTeamInfo(info);

        // Load round data
        const roundData = await ChessDataManager.loadRoundData(currentRound);
        if (!roundData) {
          throw new Error("Round data not found");
        }

        // Get rankings for this league
        if (roundData.rankings && roundData.rankings[info.leagueId]) {
          setRankings(roundData.rankings[info.leagueId]);
        } else {
          setRankings([]);
        }

        // Get matches for this team
        const teamMatches = roundData.matches.filter(
          (m) => m.homeTeamId === selectedTeam.id || m.awayTeamId === selectedTeam.id
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
          isTeamMatch: match.homeTeamId === selectedTeam.id || match.awayTeamId === selectedTeam.id,
        }));

        setMatches(enhancedTeamMatches);
        setAllMatches(enhancedAllMatches);

        // Set default match if none selected
        if (enhancedTeamMatches.length > 0 && !selectedMatchId) {
          setSelectedMatchId(enhancedTeamMatches[0].id);
        }
      } catch (error) {
        console.error("Error loading data:", error);
        setDataError(true);
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
        if (!roundData || !roundData.boards) {
          setBoards([]);
          return;
        }
        
        const matchBoards = roundData.boards.filter(
          (b) => b.matchId === selectedMatchId
        );
        setBoards(matchBoards);
      } catch (error) {
        console.error("Error loading board data:", error);
        setBoards([]);
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
  const handleTeamChange = (teamId) => {
    const teamName = ChessDataManager.getTeamName(teamId);
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

  // Error state
  if (dataError) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <div className="bg-red-100 p-4 rounded-lg">
          <h3 className="text-red-700 font-bold mb-2">Données non disponibles</h3>
          <p className="text-red-600">
            Nous ne pouvons pas charger les données pour cette ronde.
            Les résultats seront disponibles prochainement.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={`container mx-auto ${isMobile ? 'px-2' : 'px-4'} cse-visualization`}>
      {/* League header */}
      <LeagueHeader leagueName={teamInfo?.league?.name} />

      {/* Navigation bar */}
      <Navigation 
        selectedTeamId={selectedTeam.id}
        currentRound={currentRound}
        currentView={currentView}
        onTeamChange={handleTeamChange}
        onRoundChange={setCurrentRound}
        onViewChange={setCurrentView}
      />

      {/* Content based on selected view */}
      {currentView === "rankings" ? (
        /* Rankings Table */
        <RankingsTable 
          rankings={rankings}
          selectedTeamId={selectedTeam.id}
          getTeamName={ChessDataManager.getTeamName}
        />
      ) : (
        /* Matches & Boards */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Résultats - Ronde {currentRound}</h2>
          </div>

          {allMatches.length > 0 ? (
            <>
              {/* Matches list */}
              <MatchesList 
                matches={allMatches}
                selectedMatchId={selectedMatchId}
                onMatchSelect={setSelectedMatchId}
                roundNumber={currentRound}
              />

              {/* Match details */}
              {currentMatch ? (
                <>
                  <MatchDetails match={currentMatch} />
                  <BoardsTable boards={boards} />
                </>
              ) : (
                <div className="p-4 text-center text-gray-600">
                  Aucun match sélectionné.
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

export default CSEVisualization;