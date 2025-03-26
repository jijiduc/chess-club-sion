import React from 'react';
import { createRoot } from 'react-dom/client';
import CSEVisualization from './index';

/**
 * Initialize the CSE Visualization React app
 * This function finds the container element and mounts the React app
 */
const initializeApp = () => {
  // Find the container element
  const container = document.getElementById('cse-react');
  
  if (container) {
    // Create a root
    const root = createRoot(container);
    
    // Render the component
    root.render(<CSEVisualization />);
  } else {
    console.error('Container element with id "cse-react" not found');
  }
};

// Wait for DOM to be fully loaded before initializing
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // If DOM is already loaded, initialize immediately
  initializeApp();
}

export default initializeApp;