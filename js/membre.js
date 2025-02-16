// Import des données des membres
import { membresData } from './member-data.js';

/**
 * Crée une carte de membre pour un joueur
 * @param {Object} player - Données du joueur
 * @returns {string} - HTML de la carte de membre
 */
function createMemberCard(player) {
  if (!player) return '';

  const hasEloFide = !player.note;
  const eloLabel = hasEloFide ? 'FIDE' : 'FSE';
  const eloClass = hasEloFide ? 'elo-fide' : 'elo-fse';
  
  return `
      <div class="membre-card">
          <div class="membre-info">
              <div class="membre-nom">${player.prenom} ${player.nom}</div>
              <div class="membre-details">
                  <span class="code">FSE: ${player.codeFSE} | FIDE: ${player.codeFIDE}</span>
              </div>
              <div class="membre-details rating-row">
                  <span class="elo ${eloClass}">${eloLabel}: ${player.elo.toLocaleString()}</span>
                  <span class="federation">${player.federation}</span>
              </div>
          </div>
      </div>
  `;
}

/**
 * Crée le résumé statistique des membres
 * @param {Array} categories - Liste des catégories
 * @returns {string} - HTML du résumé statistique
 */
function createStatsSummary(categories) {
    const totalPlayers = categories.reduce((sum, cat) => 
        sum + (Array.isArray(cat.players) ? cat.players.length : 0), 0);
    
    const allPlayers = categories.flatMap(cat => cat.players || []);
    const avgElo = Math.round(
        allPlayers.reduce((sum, player) => sum + player.elo, 0) / totalPlayers
    );

    // Calculer les joueurs avec ELO FIDE vs FSE
    const fidePlayers = allPlayers.filter(p => !p.note).length;
    const fsePlayers = allPlayers.filter(p => p.note).length;

    return `
        <div class="stats-summary">
            <div class="stat-item">
                <div class="stat-value">${totalPlayers}</div>
                <div class="stat-label">Membres actifs</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${avgElo}</div>
                <div class="stat-label">ELO moyen</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${fidePlayers}</div>
                <div class="stat-label">Classés FIDE</div>
            </div>
            <div class="stat-item">
                <div class="stat-value">${fsePlayers}</div>
                <div class="stat-label">Classés FSE uniquement</div>
            </div>
        </div>
    `;
}

/**
 * Crée une section pour une catégorie de joueurs
 * @param {Object} category - Données de la catégorie
 * @returns {string} - HTML de la section de catégorie
 */
function createCategorySection(category) {
  if (!category || !Array.isArray(category.players)) {
      return '';
  }

  const validPlayers = category.players
      .filter(player => player)
      .sort((a, b) => b.elo - a.elo);

  if (validPlayers.length === 0) {
      return '';
  }

  return `
      <div class="category-section">
          <h2>${category.title}</h2>
          <div class="membres-grid">
              ${validPlayers.map(player => createMemberCard(player)).join('')}
          </div>
      </div>
  `;
}
/**
 * Rendu principal de la liste des membres
 */
export function renderMembres() {
    const container = document.getElementById('membres-container');
    
    if (!container) {
        console.error('Container #membres-container non trouvé');
        return;
    }

    try {
        if (!membresData || !Array.isArray(membresData.categories)) {
            throw new Error('Format de données invalide');
        }

        const nonEmptyCategories = membresData.categories.filter(category => 
            Array.isArray(category.players) && category.players.length > 0
        );

        const lastUpdate = new Date().toLocaleDateString('fr-CH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });

        const membresHTML = `
            <div class="membres-header">
                <h1>Liste des membres licenciés du Club d'Échecs de Sion</h1>
            </div>
            
            ${createStatsSummary(membresData.categories)}
            
            <div class="info-message">
                Les classements affichés sont les classements FIDE officiels si disponibles, sinon les classements FSE.
                <br>
                Dernière mise à jour: ${lastUpdate}
            </div>
    
            ${nonEmptyCategories.map(category => createCategorySection(category)).join('')}
        `;

        container.innerHTML = membresHTML;

    } catch (error) {
        console.error('Erreur lors du rendu des membres:', error);
        container.innerHTML = createErrorMessage('Une erreur est survenue lors du chargement des données.');
    }
}

// Initialisation au chargement du DOM
document.addEventListener('DOMContentLoaded', renderMembres);