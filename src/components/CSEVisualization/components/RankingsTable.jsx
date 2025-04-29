import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';

/**
 * Component for displaying the rankings table
 */
const RankingsTable = ({ rankings, selectedTeamId, getTeamName }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="bg-white rounded-lg overflow-hidden mb-8 shadow-md">
      <div className="bg-gray-800 text-white px-4 py-3">
        <h2 className="font-bold">Classement</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-200">
              <th className="px-4 py-2 text-left col-rank">
                {isMobile ? "#" : "Rang"}
              </th>
              <th className="px-4 py-2 text-left">Équipe</th>
              <th className="px-4 py-2 text-center col-matchpoints">
                {isMobile ? "PM" : "Points de match"}
              </th>
              <th className="px-4 py-2 text-center col-gamepoints">
                {isMobile ? "PI" : "Points individuels"}
              </th>
            </tr>
          </thead>
          <tbody>
            {rankings && rankings.map((rank, index) => (
              <tr
                key={index}
                className={`border-b ${rank.teamId === selectedTeamId ? "bg-red-100" : ""}`}
              >
                <td className="px-4 py-2">{rank.rank}</td>
                <td className="px-4 py-2">
                  {/* Format team name for mobile */}
                  <span title={getTeamName(rank.teamId)}>
                    {isMobile 
                      ? getTeamName(rank.teamId).replace(/^(.*\s)/, '') 
                      : getTeamName(rank.teamId)}
                  </span>
                </td>
                <td className="px-4 py-2 text-center">{rank.matchPoints}</td>
                <td className="px-4 py-2 text-center">{rank.gamePoints}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RankingsTable;