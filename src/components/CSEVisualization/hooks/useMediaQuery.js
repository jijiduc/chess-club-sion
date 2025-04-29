import { useState, useEffect } from 'react';

/**
 * Hook to detect if the media query matches
 * @param {string} query - CSS media query string (e.g. '(max-width: 768px)')
 * @returns {boolean} - Whether the query matches or not
 */
const useMediaQuery = (query) => {
  const [matches, setMatches] = useState(
    // Set initial value based on current match
    () => window.matchMedia(query).matches
  );

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    
    // Handler for media query changes
    const updateMatch = (event) => {
      setMatches(event.matches);
    };

    // Add listener
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', updateMatch);
    } else {
      // For older browsers
      mediaQuery.addListener(updateMatch);
    }

    // Update initially in case it doesn't match the initial value
    setMatches(mediaQuery.matches);

    // Cleanup
    return () => {
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', updateMatch);
      } else {
        // For older browsers
        mediaQuery.removeListener(updateMatch);
      }
    };
  }, [query]);

  return matches;
};

export default useMediaQuery;