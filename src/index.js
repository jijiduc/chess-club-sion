// src/index.js - Main entry point for the application

// Export CSE Visualization components
export { default as CSEVisualization } from './components/CSEVisualization';
export { default as initCSEVisualization } from './components/CSEVisualization/App';

// Export TournoiVisualization component (keeping original behavior)
export { default as TournoiVisualization } from './components/TournoiVisualization';

// Export data manager for direct access if needed
export { default as ChessDataManager } from './data';

// Initialize visualizations automatically when included in a page
import './components/CSEVisualization/App';
// TournoiVisualization initializes itself when included in a page