import React from 'react';
import { createRoot } from 'react-dom/client';
import CSEVisualization from './CSEVisualization';

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
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
});