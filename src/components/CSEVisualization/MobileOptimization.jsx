import React, { useEffect } from "react";

/**
 * Composant d'optimisation mobile pour CSEVisualization
 * Ce composant s'assure que le contenu s'adapte correctement aux écrans mobiles
 */
const MobileOptimization = () => {
  useEffect(() => {
    // Fonction pour déterminer si l'appareil est mobile
    const isMobile = () => window.innerWidth <= 768;
    
    // Fonction pour adapter les titres de tableau sur mobile
    const adaptTableHeaders = () => {
      if (!isMobile()) return;
      
      // Trouver tous les en-têtes de tableau dans le composant
      const tableHeaders = document.querySelectorAll('#cse-react th');
      
      tableHeaders.forEach(header => {
        const text = header.textContent.trim();
        
        // Remplacer les textes longs par des abréviations sur mobile
        switch (text) {
          case 'Rang':
            header.innerHTML = '<span title="Rang">#</span>';
            break;
          case 'Points de match':
            header.innerHTML = '<span title="Points de match">MP</span>';
            break;
          case 'Points individuels':
            header.innerHTML = '<span title="Points individuels">GP</span>';
            break;
          case 'Échiquier':
            header.innerHTML = '<span title="Échiquier">É</span>';
            break;
          case 'Résultat':
            header.innerHTML = '<span title="Résultat">R</span>';
            break;
        }
      });
    };
    
    // Fonction pour optimiser les noms des joueurs dans les tableaux
    const optimizePlayerNames = () => {
      if (!isMobile()) return;
      
      // Trouver toutes les cellules contenant des noms de joueurs
      const playerCells = document.querySelectorAll('#cse-react td:nth-child(2), #cse-react td:nth-child(5)');
      
      playerCells.forEach(cell => {
        const fullName = cell.textContent.trim();
        
        // Stocker le nom complet comme attribut data pour les tooltips
        cell.setAttribute('title', fullName);
        
        // Sur mobile, n'afficher que le nom de famille
        if (isMobile()) {
          const nameParts = fullName.split(' ');
          if (nameParts.length > 1) {
            // Prendre le dernier mot comme nom de famille
            cell.textContent = nameParts[nameParts.length - 1];
          }
        }
      });
    };
    
    // Fonction pour reconfigurer la mise en page pour mobile
    const reconfigureLayout = () => {
      if (!isMobile()) return;
      
      // Améliorer l'affichage des scores
      const scoreDisplay = document.querySelector('#cse-react .flex.items-center.justify-between');
      if (scoreDisplay) {
        // Assurer que l'affichage des noms d'équipes utilise tout l'espace disponible
        const teamNames = scoreDisplay.querySelectorAll('.text-lg.font-bold');
        teamNames.forEach(name => {
          name.style.fontSize = '0.9rem';
          name.style.width = '40%';
          name.style.display = 'block';
          name.style.textAlign = 'center';
        });
      }
    };
    
    // Fonction d'optimisation principale
    const optimizeForMobile = () => {
      if (isMobile()) {
        document.getElementById('cse-react')?.classList.add('mobile-view');
        adaptTableHeaders();
        optimizePlayerNames();
        reconfigureLayout();
      } else {
        document.getElementById('cse-react')?.classList.remove('mobile-view');
      }
    };
    
    // Appliquer les optimisations initialement et lors des redimensionnements
    optimizeForMobile();
    window.addEventListener('resize', optimizeForMobile);
    
    // Observer les changements dans le DOM pour réappliquer les optimisations
    // quand le contenu est mis à jour par React
    const observer = new MutationObserver(mutations => {
      for (const mutation of mutations) {
        if (mutation.type === 'childList' && 
            (mutation.target.tagName === 'TABLE' || 
             mutation.target.classList.contains('flex'))) {
          optimizeForMobile();
          break;
        }
      }
    });
    
    // Démarrer l'observation du composant
    const container = document.getElementById('cse-react');
    if (container) {
      observer.observe(container, { 
        childList: true, 
        subtree: true,
        attributes: true,
        attributeFilter: ['class']
      });
    }
    
    // Nettoyage
    return () => {
      window.removeEventListener('resize', optimizeForMobile);
      observer.disconnect();
    };
  }, []);
  
  // Ce composant ne rend rien visuellement
  return null;
};

export default MobileOptimization;