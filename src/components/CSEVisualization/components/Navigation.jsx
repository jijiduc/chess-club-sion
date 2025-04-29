import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

/**
 * Improved navigation component with better visual separation
 */
const Navigation = ({ 
  selectedTeamId, 
  currentRound, 
  currentView,
  onTeamChange,
  onRoundChange,
  onViewChange
}) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="mb-6 rounded-lg overflow-hidden shadow-lg border border-gray-200">
      {/* Team selection section */}
      <div className="grid grid-cols-2 border-b border-gray-200">
        <button
          className={`py-4 px-4 font-medium transition-all duration-200 ${
            selectedTeamId === 1
              ? "bg-red-600 text-white"
              : "bg-transparent hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => onTeamChange(1)}
        >
          <span className="relative z-10">Sion 1</span>
        </button>
        <button
          className={`py-4 px-4 font-medium transition-all duration-200 ${
            selectedTeamId === 9
              ? "bg-red-600 text-white"
              : "bg-transparent hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => onTeamChange(9)}
        >
          <span className="relative z-10">Sion 2</span>
        </button>
      </div>

      {/* Round selection - optional section
      <div className="border-b border-gray-200 flex">
        {[1, 2, 3, 4, 5, 6, 7].map((round) => (
          <button
            key={round}
            className={`py-3 px-2 flex-1 font-medium transition-all duration-200 ${
              currentRound === round
                ? "bg-red-600 text-white"
                : "bg-transparent hover:bg-gray-100 text-gray-800"
            }`}
            onClick={() => onRoundChange(round)}
          >
            <span className="relative z-10">{round}</span>
          </button>
        ))}
      </div>
      */}

      {/* View selection section */}
      <div className="grid grid-cols-2">
        <button
          className={`py-4 px-4 font-medium transition-all duration-200 ${
            currentView === "rankings"
              ? "bg-red-600 text-white"
              : "bg-transparent hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => onViewChange("rankings")}
        >
          <span className="relative z-10">
            {isMobile ? "Class." : "Classement"}
          </span>
        </button>
        <button
          className={`py-4 px-4 font-medium transition-all duration-200 ${
            currentView === "results"
              ? "bg-red-600 text-white"
              : "bg-transparent hover:bg-gray-100 text-gray-800"
          }`}
          onClick={() => onViewChange("results")}
        >
          <span className="relative z-10">
            {isMobile ? "Rés." : "Résultats"}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navigation;