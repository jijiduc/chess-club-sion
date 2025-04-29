// cse-visualization.js - Adaptation mobile pour la visualisation du CSE

document.addEventListener('DOMContentLoaded', function() {
    /**
     * Optimise l'affichage du CSE Visualization pour les écrans mobiles
     */
    function initCSEVisualization() {
        // Vérifier si le composant est présent sur la page
        const container = document.getElementById('cse-react');
        if (!container) return;

        // Observer les changements dans le DOM pour détecter quand le composant React est rendu
        const observer = new MutationObserver(function(mutations) {
            for (const mutation of mutations) {
                if (mutation.type === 'childList' && container.querySelector('table')) {
                    applyMobileStyling();
                    break;
                }
            }
        });

        // Configuration de l'observateur
        observer.observe(container, { childList: true, subtree: true });

        // Appliquer également au chargement au cas où le composant est déjà rendu
        setTimeout(applyMobileStyling, 500);
    }

    /**
     * Applique les styles optimisés pour mobile au composant React
     */
    function applyMobileStyling() {
        // Wrapper le contenu dans notre classe CSS personnalisée
        const container = document.getElementById('cse-react');
        if (!container) return;

        // Ne pas réappliquer si déjà fait
        if (container.classList.contains('cse-visualization')) return;
        
        // Ajouter la classe principale
        container.classList.add('cse-visualization');
        
        // Styliser les éléments de navigation
        const navigationBar = container.querySelector('.rounded-lg.overflow-hidden.shadow-lg.border');
        if (navigationBar) {
            navigationBar.classList.add('cse-nav');
            
            // Sections de navigation
            const sections = navigationBar.querySelectorAll('.flex');
            sections.forEach(section => {
                section.classList.add('cse-nav-section');
            });
            
            // Boutons
            const buttons = navigationBar.querySelectorAll('button');
            buttons.forEach(button => {
                button.classList.add('cse-nav-button');
                if (button.classList.contains('bg-red-600')) {
                    button.classList.add('active');
                }
            });
        }
        
        // Info de la ligue
        const leagueInfo = container.querySelector('.bg-white.rounded-lg.p-3.mb-4');
        if (leagueInfo) {
            leagueInfo.classList.add('cse-league-info');
            const title = leagueInfo.querySelector('h2');
            if (title) title.classList.add('cse-league-title');
        }
        
        // Conteneurs de tables
        const tableContainers = container.querySelectorAll('.bg-white.rounded-lg.overflow-hidden.mb-8');
        tableContainers.forEach(tableContainer => {
            tableContainer.classList.add('cse-table-container');
            
            // En-tête de la table
            const header = tableContainer.querySelector('.bg-gray-800');
            if (header) header.classList.add('cse-table-header');
            
            // Tables
            const tables = tableContainer.querySelectorAll('table');
            tables.forEach(table => {
                table.classList.add('cse-table');
                
                // Optimisation des en-têtes de colonnes pour mobile
                const headers = table.querySelectorAll('th');
                headers.forEach(th => {
                    // Ajouter des classes pour les colonnes spécifiques
                    const text = th.textContent.trim().toLowerCase();
                    if (text === 'rang' || text === '#') {
                        th.classList.add('col-short', 'col-rank');
                        th.innerHTML = '<span>Rang</span>';
                    } else if (text.includes('match')) {
                        th.classList.add('col-matchpoints');
                        th.innerHTML = '<span>Points de match</span>';
                    } else if (text.includes('individu')) {
                        th.classList.add('col-gamepoints');
                        th.innerHTML = '<span>Points individuels</span>';
                    } else if (text === 'échiquier' || text === '#') {
                        th.classList.add('col-short', 'col-board');
                    } else if (text === 'elo') {
                        th.classList.add('col-rating');
                    } else if (text === 'résultat') {
                        th.classList.add('col-result');
                    }
                    
                    // Cacher certaines colonnes sur très petits écrans
                    if (text.includes('perf') || text.includes('tb')) {
                        th.classList.add('mobile-hide');
                        
                        // Cacher aussi les cellules correspondantes
                        const index = Array.from(th.parentNode.children).indexOf(th);
                        const rows = table.querySelectorAll('tbody tr');
                        rows.forEach(row => {
                            const cell = row.cells[index];
                            if (cell) cell.classList.add('mobile-hide');
                        });
                    }
                });
                
                // Traitement des noms de joueurs dans les cellules pour les rendre plus compacts
                const playerCells = table.querySelectorAll('td.player-name, td:nth-child(2):not(.col-short)');
                playerCells.forEach(cell => {
                    cell.classList.add('player-name');
                });
            });
            
            // Affichage des scores
            const scoreDisplay = tableContainer.querySelector('.flex.items-center.justify-between.mb-4');
            if (scoreDisplay) {
                scoreDisplay.classList.add('cse-match-score');
                
                // Noms d'équipes
                const teamNames = scoreDisplay.querySelectorAll('.text-lg.font-bold');
                teamNames.forEach(name => name.classList.add('cse-team-name'));
                
                // Valeurs des scores
                const scoreValues = scoreDisplay.querySelectorAll('.w-16.h-16.rounded-full');
                if (scoreValues.length > 0) {
                    // Créer un wrapper pour les scores s'il n'existe pas déjà
                    const scoreContainer = document.createElement('div');
                    scoreContainer.classList.add('cse-score-display');
                    
                    // Wrapper le premier score
                    if (scoreValues[0]) {
                        scoreValues[0].classList.add('cse-score-value');
                        scoreContainer.appendChild(scoreValues[0]);
                    }
                    
                    // Ajouter le séparateur
                    const separator = scoreDisplay.querySelector('.mx-2.text-lg') || document.createElement('div');
                    separator.classList.add('cse-score-separator');
                    separator.textContent = '-';
                    scoreContainer.appendChild(separator);
                    
                    // Wrapper le deuxième score
                    if (scoreValues[1]) {
                        scoreValues[1].classList.add('cse-score-value');
                        scoreContainer.appendChild(scoreValues[1]);
                    }
                    
                    // Insérer le conteneur des scores au bon endroit
                    if (teamNames[0] && teamNames[0].nextSibling) {
                        scoreDisplay.insertBefore(scoreContainer, teamNames[0].nextSibling);
                    } else {
                        scoreDisplay.appendChild(scoreContainer);
                    }
                }
            }
            
            // Grille de matches
            const matchGrid = tableContainer.querySelector('.grid.grid-cols-1.md\\:grid-cols-2.gap-4');
            if (matchGrid) {
                matchGrid.classList.add('cse-match-grid');
                
                // Cartes de match
                const matchCards = matchGrid.querySelectorAll('button');
                matchCards.forEach(card => {
                    card.classList.add('cse-match-card');
                    
                    // Match actif
                    if (card.classList.contains('bg-red-600')) {
                        card.classList.add('active');
                    }
                    // Match de l'équipe sélectionnée
                    else if (card.classList.contains('bg-red-50')) {
                        card.classList.add('team-match');
                    }
                });
            }
            
            // Table d'échiquiers
            const boardsTable = tableContainer.querySelector('table:not(.cse-table)');
            if (boardsTable) {
                boardsTable.classList.add('cse-boards-table', 'cse-table');
                
                // Styles pour les joueurs blanc/noir
                const rows = boardsTable.querySelectorAll('tr');
                rows.forEach(row => {
                    // Cellules pour les joueurs blancs/noirs
                    const whiteCells = row.querySelectorAll('td.bg-white');
                    whiteCells.forEach(cell => cell.classList.add('cse-player-white'));
                    
                    const blackCells = row.querySelectorAll('td.bg-gray-700');
                    blackCells.forEach(cell => cell.classList.add('cse-player-black'));
                });
            }
        });
    }

    // Initialiser l'adaptation mobile
    initCSEVisualization();
    
    // Réappliquer les styles lors du redimensionnement
    window.addEventListener('resize', function() {
        requestAnimationFrame(applyMobileStyling);
    });
});