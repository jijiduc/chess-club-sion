// team-navigation.js - Script pour la navigation d'équipes et rondes

document.addEventListener('DOMContentLoaded', function() {
    // Rechercher l'élément existant à améliorer
    const existingElement = document.querySelector('.nav-container');
    
    if (existingElement) {
        // Créer la nouvelle structure améliorée
        createTeamNavigation(existingElement);
    }
});

/**
 * Crée une interface de navigation améliorée
 * @param {HTMLElement} targetElement - Élément à remplacer ou dans lequel insérer la navigation
 */
function createTeamNavigation(targetElement) {
    // Extraire les données actuelles (équipes, ronde active)
    const data = extractCurrentData(targetElement);
    
    // Créer le nouveau conteneur
    const navContainer = document.createElement('div');
    navContainer.className = 'team-nav-container';
    
    // Structure HTML améliorée
    navContainer.innerHTML = `
        <div class="team-nav-header">
            Championnat Suisse par Équipes - 2025
        </div>
        <div class="team-nav-grid">
            <div class="team-nav-teams">
                <button class="team-btn ${data.activeTeam === 'Sion 1' ? 'active' : ''}" data-team="1">Sion 1</button>
                <button class="team-btn ${data.activeTeam === 'Sion 2' ? 'active' : ''}" data-team="2">Sion 2</button>
            </div>
            
            <div class="team-nav-separator"></div>
            
            <div class="round-nav">
                <div class="round-line"></div>
                ${generateRoundButtons(data.activeRound)}
            </div>
        </div>
        <div class="team-nav-footer">
            <a href="#classement" class="action-btn">Classement</a>
        </div>
    `;
    
    // Remplacer l'ancien élément par le nouveau
    targetElement.parentNode.replaceChild(navContainer, targetElement);
    
    // Ajouter les gestionnaires d'événements
    addEventListeners(navContainer);
}

/**
 * Extrait les données de l'interface existante
 * @param {HTMLElement} element - Élément contenant les données
 * @returns {Object} Données extraites
 */
function extractCurrentData(element) {
    // Identifier l'équipe active
    const activeTeam = element.querySelector('a.active')?.textContent.trim() || 'Sion 1';
    
    // Identifier la ronde active
    let activeRound = 1;
    const roundElements = element.querySelectorAll('a[href^="#round"]');
    roundElements.forEach(el => {
        if (el.classList.contains('active')) {
            const match = el.getAttribute('href').match(/\d+/);
            if (match) {
                activeRound = parseInt(match[0], 10);
            }
        }
    });
    
    return {
        activeTeam,
        activeRound
    };
}

/**
 * Génère les boutons de ronde
 * @param {number} activeRound - Numéro de la ronde active
 * @returns {string} HTML des boutons de ronde
 */
function generateRoundButtons(activeRound) {
    let html = '';
    for (let i = 1; i <= 7; i++) {
        html += `
            <button class="round-btn ${i === activeRound ? 'active' : ''}" data-round="${i}">
                ${i}
            </button>
        `;
    }
    return html;
}

/**
 * Ajoute les gestionnaires d'événements aux éléments interactifs
 * @param {HTMLElement} container - Conteneur parent
 */
function addEventListeners(container) {
    // Gestion des clics sur les boutons d'équipe
    const teamButtons = container.querySelectorAll('.team-btn');
    teamButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons d'équipe
            teamButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Charger les données de l'équipe sélectionnée
            const teamId = this.dataset.team;
            // Simulation de navigation vers l'équipe
            console.log(`Chargement des données pour Sion ${teamId}`);
            
            // Dans une implémentation réelle, vous pourriez faire un appel AJAX ou mettre à jour l'URL
            // window.location.href = `equipe${teamId}.html`;
        });
    });
    
    // Gestion des clics sur les boutons de ronde
    const roundButtons = container.querySelectorAll('.round-btn');
    roundButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Retirer la classe active de tous les boutons de ronde
            roundButtons.forEach(btn => btn.classList.remove('active'));
            // Ajouter la classe active au bouton cliqué
            this.classList.add('active');
            
            // Charger les données de la ronde sélectionnée
            const roundId = this.dataset.round;
            // Simulation de navigation vers la ronde
            console.log(`Chargement des données pour la ronde ${roundId}`);
            
            // Dans une implémentation réelle, vous pourriez faire un appel AJAX ou mettre à jour l'URL
            // window.location.href = `ronde${roundId}.html`;
        });
    });
}