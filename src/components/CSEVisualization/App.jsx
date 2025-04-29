import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

/**
 * Version améliorée du composant CSEVisualization avec résultats
 */
const CSEVisualization = () => {
  const [loading, setLoading] = useState(true);
  const [leagueData, setLeagueData] = useState(null);
  const [activeTab, setActiveTab] = useState('rankings');
  const [selectedTeam, setSelectedTeam] = useState(1); // Sion 1 par défaut
  const [selectedMatchId, setSelectedMatchId] = useState(null);
  const [currentRound, setCurrentRound] = useState(3); // Commencer par la ronde 3
  
  // Charger les données de base pour les 3 premières rondes uniquement
  useEffect(() => {
    const loadData = async () => {
      try {
        // Essayer de charger les données de la ronde active
        let module;
        try {
          module = await import(`../../data/rounds/round${currentRound}.js`);
        } catch (e) {
          // Si échec, essayer la ronde 1
          module = await import('../../data/rounds/round1.js');
          setCurrentRound(1);
        }
        
        setLeagueData(module.default);
        setLoading(false);
      } catch (error) {
        console.error("Erreur lors du chargement des données:", error);
        setLoading(false);
      }
    };
    
    loadData();
  }, [currentRound]);
  
  // Fonction sécurisée pour obtenir le nom de l'équipe
  const getTeamName = (teamId) => {
    const TEAMS = {
      1: "Sion 1", 2: "Genève 2", 3: "Neuchâtel 1", 4: "Valais 1",
      5: "Echallens 2", 6: "Grand Echiquier 1", 7: "Köniz-Bubenberg 1", 8: "Fribourg 1",
      9: "Sion 2", 10: "Grand Echiquier 2", 11: "Monthey 1", 12: "Crans-Montana 2",
      13: "Valais 2", 14: "Bulle 3", 15: "Crazy Horse 1", 16: "Payerne 2"
    };
    return TEAMS[teamId] || `Équipe ${teamId}`;
  };
  
  // Format pour le résultat du match
  const formatMatchResult = (score) => {
    if (!score) return { home: 0, away: 0 };
    const parts = score.split("-");
    if (parts.length !== 2) return { home: 0, away: 0 };
    const homeScore = parseFloat(parts[0].replace("½", ".5"));
    const awayScore = parseFloat(parts[1].replace("½", ".5"));
    return { home: homeScore, away: awayScore };
  };
  
  // Si chargement en cours
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
  
  // Si données non disponibles
  if (!leagueData || !leagueData.rankings) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-md">
        <h2 className="text-xl font-bold text-center mb-6">Championnat Suisse par Équipes</h2>
        <div className="text-center">
          <p className="mb-4">Les données du championnat sont en cours de préparation.</p>
          <p>Les résultats seront disponibles prochainement!</p>
        </div>
      </div>
    );
  }
  
  // Données disponibles - préparer les données pour l'affichage
  const leagueId = selectedTeam <= 8 ? 1 : 2; // 1ère ou 3ème ligue
  const rankings = leagueData.rankings[leagueId] || [];
  
  // Filtrer les matchs pour la ligue active
  const leagueMatches = leagueData.matches.filter(match => {
    // Vérifier si au moins une des équipes est dans la ligue
    const homeLeague = Math.ceil(match.homeTeamId / 8);
    const awayLeague = Math.ceil(match.awayTeamId / 8);
    return homeLeague === leagueId || awayLeague === leagueId;
  });

  // Améliorer les matchs avec les noms d'équipes et marquer les matchs de l'équipe sélectionnée
  const enhancedMatches = leagueMatches.map(match => ({
    ...match,
    homeTeam: getTeamName(match.homeTeamId),
    awayTeam: getTeamName(match.awayTeamId),
    isTeamMatch: match.homeTeamId === selectedTeam || match.awayTeamId === selectedTeam
  }));
  
  // Filtrer les boards pour le match sélectionné
  const matchBoards = leagueData.boards.filter(
    board => board.matchId === selectedMatchId
  );
  
  // Obtenir le match sélectionné
  const currentMatch = enhancedMatches.find(m => m.id === selectedMatchId);
  
  return (
    <div>
      {/* Titre de la ligue */}
      <div className="bg-white rounded-lg p-3 mb-4 shadow-md">
        <div className="text-center">
          <h2 className="font-bold text-xl">
            {leagueId === 1 ? "1ère ligue" : "3ème ligue"} Ouest
          </h2>
        </div>
      </div>
      {/* Barre de navigation */}
<div className="mb-6 rounded-lg overflow-hidden shadow-lg">
  <div className="grid grid-cols-2 bg-gray-50">
    <button
      className={`py-5 font-medium transition-all duration-200 ${
        selectedTeam === 1
          ? "bg-red-600 text-white font-bold"
          : "bg-transparent hover:bg-gray-100 text-gray-800"
      }`}
      onClick={() => {setSelectedTeam(1); setSelectedMatchId(null);}}
    >
      Sion 1
    </button>
    <button
      className={`py-5 font-medium transition-all duration-200 ${
        selectedTeam === 9
          ? "bg-red-600 text-white font-bold"
          : "bg-transparent hover:bg-gray-100 text-gray-800"
      }`}
      onClick={() => {setSelectedTeam(9); setSelectedMatchId(null);}}
    >
      Sion 2
    </button>
  </div>

  {/* Sélection de ronde - Style cohérent */}
  <div className="grid grid-cols-3 bg-gray-100 border-t border-b border-gray-200">
    {[1, 2, 3].map((round) => (
      <button
        key={round}
        className={`py-4 font-medium transition-all duration-200 relative ${
          currentRound === round
            ? "bg-red-600 text-white shadow-inner"
            : "bg-transparent hover:bg-gray-200 text-gray-700"
        }`}
        onClick={() => setCurrentRound(round)}
      >
        {round}
        {currentRound === round && (
          <span className="absolute bottom-0 left-0 right-0 h-1 bg-red-700"></span>
        )}
      </button>
    ))}
  </div>

  {/* Sélection vue - Boutons plus grands */}
  <div className="grid grid-cols-2 bg-gray-50">
    <button
      className={`py-5 font-medium transition-all duration-200 ${
        activeTab === "rankings"
          ? "bg-red-600 text-white shadow-inner font-bold"
          : "bg-transparent hover:bg-gray-100 text-gray-800"
      }`}
      onClick={() => setActiveTab("rankings")}
    >
      Classement
    </button>
    <button
      className={`py-5 font-medium transition-all duration-200 ${
        activeTab === "results"
          ? "bg-red-600 text-white shadow-inner font-bold"
          : "bg-transparent hover:bg-gray-100 text-gray-800"
      }`}
      onClick={() => setActiveTab("results")}
    >
      Résultats
    </button>
  </div>
</div>
      
      {/* Contenu principal */}
      {activeTab === 'rankings' ? (
        /* Tableau de classement */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Classement</h2>
          </div>
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
                    className={`border-b ${rank.teamId === selectedTeam ? "bg-red-100" : ""}`}
                  >
                    <td className="px-4 py-2">{rank.rank}</td>
                    <td className="px-4 py-2">{getTeamName(rank.teamId)}</td>
                    <td className="px-4 py-2 text-center">{rank.matchPoints}</td>
                    <td className="px-4 py-2 text-center">{rank.gamePoints}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        /* Matchs et résultats */
        <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
          <div className="bg-gray-800 text-white px-4 py-3">
            <h2 className="font-bold">Résultats - Ronde {currentRound}</h2>
          </div>
          
          {/* Liste des matchs */}
          <div className="p-4 bg-gray-200 border-b">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {enhancedMatches.map((match, index) => (
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
          
          {/* Détails du match */}
          {currentMatch && (
            <div className="p-4">
              {/* Affichage du score */}
              <div className="flex items-center justify-between mb-4">
                <div className="text-lg font-bold text-right w-1/3">
                  {currentMatch.homeTeam}
                </div>
                
                <div className="flex justify-center items-center">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600"
                  >
                    {formatMatchResult(currentMatch.score).home}
                  </div>
                  <div className="mx-2 text-lg">-</div>
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center text-white font-bold bg-gray-600"
                  >
                    {formatMatchResult(currentMatch.score).away}
                  </div>
                </div>
                
                <div className="text-lg font-bold text-left w-1/3">
                  {currentMatch.awayTeam}
                </div>
              </div>
              
              {/* Tableau des parties */}
              {matchBoards.length > 0 && (
                <div className="overflow-x-auto mt-4">
                  <table className="w-full">
                    <thead>
                      <tr className="bg-gray-200">
                        <th className="px-4 py-2 text-center">É</th>
                        <th className="px-4 py-2 text-left">Joueur</th>
                        <th className="px-4 py-2 text-center">Elo</th>
                        <th className="px-4 py-2 text-center">R</th>
                        <th className="px-4 py-2 text-left">Joueur</th>
                        <th className="px-4 py-2 text-center">Elo</th>
                      </tr>
                    </thead>
                    <tbody>
                      {matchBoards.map((board, index) => {
                        // Les couleurs alternent selon l'échiquier
                        const homePlayerHasWhite = board.boardNumber % 2 === 1;
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
                                !homePlayerHasWhite
                                  ? "bg-white border-l-2 border-gray-200"
                                  : "bg-gray-700 text-white"
                              }`}
                            >
                              {board.awayPlayer}
                            </td>
                            <td
                              className={`px-4 py-2 text-center ${
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
              )}
              
              {matchBoards.length === 0 && (
                <div className="text-center text-gray-500 mt-4">
                  Détails des parties non disponibles pour ce match.
                </div>
              )}
            </div>
          )}
          
          {/* Aucun match sélectionné */}
          {!currentMatch && (
            <div className="p-4 text-center text-gray-600">
              Sélectionnez un match pour voir les détails.
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
    const root = createRoot(container);
    
    try {
      root.render(<CSEVisualization />);
      console.log('Rendered successfully');
    } catch (error) {
      console.error('Error rendering component:', error);
      // Afficher un message d'erreur à l'utilisateur
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

export default initializeApp;