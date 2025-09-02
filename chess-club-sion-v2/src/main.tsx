// src/main.tsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { HeadProvider } from 'react-head'; // <-- Importer depuis react-head

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HeadProvider> {/* <-- Utiliser HeadProvider */}
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </HeadProvider>
  </React.StrictMode>
);