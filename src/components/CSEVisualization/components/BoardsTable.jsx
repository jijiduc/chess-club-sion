import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { formatPlayerName } from '../utils/formatters';

/**
 * Component for displaying the boards table
 */
const BoardsTable = ({ boards }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  if (!boards || boards.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        Détails des parties non disponibles pour ce match.
      </div>
    );
  }

  return (
    <div className="overflow-x-auto mt-4">
      <table className="w-full cse-boards-table">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 text-center col-board">
              {isMobile ? "É" : "Échiquier"}
            </th>
            <th className="px-4 py-2 text-left">Joueur</th>
            <th className="px-4 py-2 text-center col-rating">Elo</th>
            <th className="px-4 py-2 text-center col-result">
              {isMobile ? "R" : "Résultat"}
            </th>
            <th className="px-4 py-2 text-left">Joueur</th>
            <th className="px-4 py-2 text-center col-rating">Elo</th>
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
                  className={`${isMobile ? 'px-2' : 'px-4'} py-2 player-name ${
                    homePlayerHasWhite
                      ? "bg-white border-l-2 border-gray-200 cse-player-white"
                      : "bg-gray-700 text-white cse-player-black"
                  }`}
                >
                  {formatPlayerName(board.homePlayer, isMobile)}
                </td>
                <td
                  className={`${isMobile ? 'px-2' : 'px-4'} py-2 text-center ${
                    homePlayerHasWhite
                      ? "bg-white border-r-2 border-gray-200 cse-player-white"
                      : "bg-gray-700 text-white cse-player-black"
                  }`}
                >
                  {board.homeRating || "-"}
                </td>
                <td className="px-4 py-2 text-center font-bold">
                  {board.result}
                </td>
                <td
                  className={`${isMobile ? 'px-2' : 'px-4'} py-2 player-name ${
                    awayPlayerHasWhite
                      ? "bg-white border-l-2 border-gray-200 cse-player-white"
                      : "bg-gray-700 text-white cse-player-black"
                  }`}
                >
                  {formatPlayerName(board.awayPlayer, isMobile)}
                </td>
                <td
                  className={`${isMobile ? 'px-2' : 'px-4'} py-2 text-center ${
                    awayPlayerHasWhite
                      ? "bg-white border-r-2 border-gray-200 cse-player-white"
                      : "bg-gray-700 text-white cse-player-black"
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
  );
};

export default BoardsTable;