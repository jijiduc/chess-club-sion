import { useState, useEffect } from "react";
import ChessDataManager from "../../../data";

/**
 * Custom hook to load and manage chess tournament data
 * @param {number} initialTeamId - Initial team ID to select
 * @param {number} initialRound - Initial round to display
 * @returns {object} - Data and state handlers for the tournament
 */
const useChessData = (initialTeamId = 1, initialRound = null) => {
  // State
  const [selectedTeam, setSelectedTeam] = useState({
    id: initialTeamId,
    name: ChessDataManager.getTeamName(initialTeamId),
  });
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [currentView, setCurrentView] = useState("rankings");
  const [loading, setLoading] = useState(true);
  const [currentRound, setCurrentRound] = useState(initialRound || 1);
  const [matches, setMatches] = useState([]);
  const [allMatches, setAllMatches] = useState([]);
  const [boards, setBoards] = useState([]);
  const [rankings, setRankings] = useState([]);
  const [teamInfo, setTeamInfo] = useState(null);

  // Find the latest round with data available
  useEffect(() => {
    const findLatestRound = async () => {
      if (initialRound) return; // Skip if initial round is provided

      try {
        // Commencer avec une ronde par défaut sûre
        let foundRound = 1; // Utiliser ronde 1 par défaut (on sait qu'elle existe)

        // Essayer de trouver la dernière ronde disponible (3 au lieu de 7)
        for (let i = 3; i >= 1; i--) {
          try {
            const roundData = await ChessDataManager.loadRoundData(i);
            // Check if this round has valid data
            if (
              roundData &&
              ((roundData.matches && roundData.matches.length > 0) ||
                (roundData.rankings &&
                  Object.keys(roundData.rankings).length > 0))
            ) {
              console.log(`Found latest round with data: Round ${i}`);
              foundRound = i;
              break;
            }
          } catch (error) {
            // Juste continuer à chercher la ronde précédente
            console.log(`No data for round ${i}, checking previous...`);
            continue;
          }
        }

        // Définir la ronde trouvée
        setCurrentRound(foundRound);
      } catch (error) {
        console.error("Error finding latest round:", error);
        // S'assurer qu'une ronde par défaut est définie même en cas d'erreur
        setCurrentRound(1);
      }
    };

    findLatestRound();
  }, [initialRound]);

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
        setRankings(roundData.rankings[info.leagueId] || []);

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

  return {
    selectedTeam,
    selectedMatchId,
    currentView,
    loading,
    currentRound,
    matches,
    allMatches,
    boards,
    rankings,
    teamInfo,
    currentMatch,
    setSelectedMatchId,
    setCurrentView,
    setCurrentRound,
    handleTeamChange,
  };
};

export default useChessData;
