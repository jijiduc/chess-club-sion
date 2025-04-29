// src/components/CSEVisualization/components/MatchDetails.jsx
import React from 'react';
import useMediaQuery from '../hooks/useMediaQuery';
import { useCompactLayout } from '../utils/displayHelpers';
import CompactHorizontalMatchView from './CompactHorizontalMatchView';
import StandardMatchView from './StandardMatchView'; // Votre composant d'affichage standard existant
import StackedMatchView from './StackedMatchView'; // Votre composant d'affichage vertical existant

const MatchDetails = ({ match, boards }) => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 768;
  
  // Décider quel format utiliser
  const shouldUseCompact = useCompactLayout(match, screenWidth);
  
  if (!match) return null;
  
  return (
    <div className="p-2">
      {shouldUseCompact ? (
        <CompactHorizontalMatchView match={match} boards={boards} />
      ) : (
        <StandardMatchView match={match} boards={boards} />
      )}
    </div>
  );
};

export default MatchDetails;