import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

/**
 * Navigation component for teams, rounds and views
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
      <div className={`${isMobile ? 'flex flex-col' : 'flex flex-wrap items-center'} bg-gradient-to-r from-gray-50 to-gray-100`}>
        {/* Team selection */}
        <div className={`${isMobile ? 'w-full' : 'flex border-r border-gray-300'}`}>
          <button
            className={`${isMobile ? 'flex-1' : 'px-6'} py-4 font-medium transition-all duration-200 ${
              selectedTeamId === 1
                ? "bg-red-600 text-white shadow-inner"
                : "bg-transparent hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => onTeamChange(1)}
          >
            Sion 1
          </button>
          <button
            className={`${isMobile ? 'flex-1' : 'px-6'} py-4 font-medium transition-all duration-200 ${
              selectedTeamId === 9
                ? "bg-red-600 text-white shadow-inner"
                : "bg-transparent hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => onTeamChange(9)}
          >
            Sion 2
          </button>
        </div>

        {/* Round selection */}
        <div className={`${isMobile ? 'w-full flex overflow-x-auto' : 'flex flex-1 border-r border-gray-300'}`}>
          {[1, 2, 3, 4, 5, 6, 7].map((round) => (
            <button
              key={round}
              className={`${isMobile ? 'min-w-[40px]' : 'flex-1'} py-4 font-medium transition-all duration-200 ${
                currentRound === round
                  ? "bg-red-600 text-white shadow-inner"
                  : "bg-transparent hover:bg-gray-200 text-gray-800"
              }`}
              onClick={() => onRoundChange(round)}
            >
              {round}
            </button>
          ))}
        </div>

        {/* View selection */}
        <div className={`${isMobile ? 'w-full' : 'flex'}`}>
          <button
            className={`${isMobile ? 'flex-1' : 'px-8'} py-4 font-medium transition-all duration-200 ${
              currentView === "rankings"
                ? "bg-red-600 text-white shadow-inner"
                : "bg-transparent hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => onViewChange("rankings")}
          >
            {isMobile ? "Class." : "Classement"}
          </button>
          <button
            className={`${isMobile ? 'flex-1' : 'px-8'} py-4 font-medium transition-all duration-200 ${
              currentView === "results"
                ? "bg-red-600 text-white shadow-inner"
                : "bg-transparent hover:bg-gray-200 text-gray-800"
            }`}
            onClick={() => onViewChange("results")}
          >
            {isMobile ? "Rés." : "Résultats"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;