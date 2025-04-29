// src/components/CSEVisualization/components/MatchDetails.jsx
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import CompactHorizontalMatchView from './CompactHorizontalMatchView';
import StandardMatchView from './StandardMatchView';

/**
 * Component for displaying match details in either standard or compact format
 * @param {Object} match - The match data object
 * @param {Array} boards - Array of boards/games for this match
 */
const MatchDetails = ({ match, boards }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isSmallMobile = useMediaQuery('(max-width: 480px)');
  
  // Decide which format to use based on screen size
  const useCompactLayout = isMobile || isSmallMobile;
  
  if (!match) {
    return (
      <div className="p-4 text-center text-gray-600">
        Aucun match sélectionné.
      </div>
    );
  }
  
  return (
    <div className={`match-details ${isSmallMobile ? 'p-2' : 'p-4'}`}>
      {useCompactLayout ? (
        <CompactHorizontalMatchView match={match} boards={boards} />
      ) : (
        <StandardMatchView match={match} boards={boards} />
      )}
    </div>
  );
};

export default MatchDetails;