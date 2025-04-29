import React from 'react';

/**
 * Component for displaying the league header
 */
const LeagueHeader = ({ leagueName }) => {
  return (
    <div className="bg-white rounded-lg p-3 mb-4 shadow-md">
      <div className="text-center">
        <h2 className="font-bold text-xl">
          {leagueName || "?"} Ouest
        </h2>
      </div>
    </div>
  );
};

export default LeagueHeader;