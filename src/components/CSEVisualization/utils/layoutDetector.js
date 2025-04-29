// src/components/CSEVisualization/utils/layoutDetector.js
export const detectMatchLayout = (match) => {
    // If score has decimal/fractional points (like 4.5-3.5 or 3½-4½)
    // it's likely the stacked layout
    if (match && match.score) {
      return match.score.includes(".") || match.score.includes("½") 
        ? "stacked" 
        : "standard";
    }
    return "standard"; // Default to standard layout
  };