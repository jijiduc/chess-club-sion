// tournoi-data.js - Données et logique pour le tournoi interne

// Structure des données du tournoi
const tournoiData = {
    // Informations générales sur le tournoi
    info: {
        titre: "Tournoi Interne 2025",
        format: [
            "Format Round Robin avec une cadence de <strong>60 minutes + 30 secondes par coups</strong>, pour toute la partie.",
            "1 partie par mois. Se jouant soit lors de la soirée du club réservée ou possibilité d'avancer / de rattraper la partie dans un délai indiqué à chaque ronde.",
            "Le joueur avec les blancs aura la charge de transmettre le résultat de la rencontre.",
            "Si la date prévue ne convient pas, il incombe aux participants de trouver une alternative dans le délai communiqué pour la ronde.",
            "Si la partie n'est pas jouée dans le temps imparti, dans le but de permettre au tournoi d'avancer, les résultats manquants vaudront 0 point. Si l'un des deux joueurs est responsables de l'impossibilité de jouer la partie, cela entrainera forfait de sa part sur la partie."
        ],
        prix: [
            "<strong>1er prix :</strong> 1 livre d'échecs ainsi que 30 francs / Champion du tournoi interne",
            "<strong>2ème prix :</strong> 1 livre d'échecs ainsi que 20 francs",
            "<strong>3ème prix :</strong> 1 livre d'échecs"
        ]
    },
    
    // Liste des joueurs (pour référence facile)
    joueurs: [
        { id: 1, nom: "Sola Flavien", elo: 2027, title: ""},
        { id: 2, nom: "Rappaz Pierre-Marie", elo: 1951, title: ""},
        { id: 3, nom: "Riand Jean-Yves", elo: 1837, title: ""},
        { id: 4, nom: "Duc Jeremy", elo: 1762, title: ""},
        { id: 5, nom: "Cortada-Garcia Joan", elo: 1749, title: ""},
        { id: 6, nom: "Ulmann Olivier", elo: 1597, title: ""},
        { id: 7, nom: "Moerschell Simon", elo: 1534, title: ""},
        { id: 8, nom: "Ben Salem Akram", elo: null, title: ""}
    ],
    
    // Rondes avec appariements et résultats
    rondes: [
        {
            numero: 1,
            statut: "terminée",
            appariements: [
                { table: 1, blanc: 1, noir: 5, resultat: "1-0" },
                { table: 2, blanc: 6, noir: 2, resultat: "0-1" },
                { table: 3, blanc: 3, noir: 7, resultat: "1-0" },
                { table: 4, blanc: 8, noir: 4, resultat: "0-1" }
            ]
        },
        {
            numero: 2,
            statut: "terminée",
            appariements: [
                { table: 1, blanc: 3, noir: 1, resultat: "0-1" },
                { table: 2, blanc: 2, noir: 4, resultat: "1-0" },
                { table: 3, blanc: 7, noir: 5, resultat: "0-1" },
                { table: 4, blanc: 8, noir: 6, resultat: "0-1" }
            ]
        },
        {
            numero: 3,
            statut: "terminée",
            appariements: [
                { table: 1, blanc: 1, noir: 2, resultat: "1-0" },
                { table: 2, blanc: 4, noir: 3, resultat: "1-0" },
                { table: 3, blanc: 5, noir: 6, resultat: "0-1" },
                { table: 4, blanc: 7, noir: 8, resultat: "1-0" }
            ]
        },
        {
            numero: 4,
            statut: "en cours",
            appariements: [
                { table: 1, blanc: 4, noir: 1, resultat: null },
                { table: 2, blanc: 6, noir: 2, resultat: null },
                { table: 3, blanc: 7, noir: 3, resultat: null },
                { table: 4, blanc: 8, noir: 5, resultat: null }
            ]
        }
    ]
};

// Exposer tournoiData au niveau global pour le composant React
window.tournoiData = tournoiData;

// Calcul du classement après une ronde spécifique
function calculerClassement(rondeNum) {
    // Tableau pour stocker les points et performances de chaque joueur
    const scores = tournoiData.joueurs.map(joueur => ({
        id: joueur.id,
        nom: joueur.nom,
        elo: joueur.elo || "-",
        points: 0,
        perf: 0, // Valeur simplifiée de performance
        adversaires: [] // Pour calculer le départage
    }));
    
    // Parcourir toutes les rondes jusqu'à la ronde spécifiée
    for (let i = 0; i < rondeNum; i++) {
        const ronde = tournoiData.rondes[i];
        
        // Traiter chaque appariement
        ronde.appariements.forEach(app => {
            if (app.resultat) {
                const blanc = scores.find(s => s.id === app.blanc);
                const noir = scores.find(s => s.id === app.noir);
                
                // Enregistrer les adversaires pour le départage
                blanc.adversaires.push(app.noir);
                noir.adversaires.push(app.blanc);
                
                // Répartir les points selon le résultat
                if (app.resultat === "1-0") {
                    blanc.points += 1;
                    // Bonus de performance pour avoir battu un joueur plus fort
                    const eloNoir = tournoiData.joueurs.find(j => j.id === app.noir).elo || 1500;
                    const eloBlanc = tournoiData.joueurs.find(j => j.id === app.blanc).elo || 1500;
                    blanc.perf += eloNoir + 400; // Bonus pour victoire
                    noir.perf += eloBlanc - 400; // Malus pour défaite
                } else if (app.resultat === "0-1") {
                    noir.points += 1;
                    const eloNoir = tournoiData.joueurs.find(j => j.id === app.noir).elo || 1500;
                    const eloBlanc = tournoiData.joueurs.find(j => j.id === app.blanc).elo || 1500;
                    noir.perf += eloBlanc + 400; // Bonus pour victoire
                    blanc.perf += eloNoir - 400; // Malus pour défaite
                } else if (app.resultat === "½-½") {
                    blanc.points += 0.5;
                    noir.points += 0.5;
                    const eloNoir = tournoiData.joueurs.find(j => j.id === app.noir).elo || 1500;
                    const eloBlanc = tournoiData.joueurs.find(j => j.id === app.blanc).elo || 1500;
                    blanc.perf += eloNoir;
                    noir.perf += eloBlanc;
                }
            }
        });
    }
    
    // Calcul de la performance moyenne
    scores.forEach(s => {
        if (s.adversaires.length > 0) {
            s.perf = Math.round(s.perf / s.adversaires.length);
        } else {
            s.perf = 0;
        }
    });
    
    // Trier par points (décroissant) puis par performance (décroissant)
    scores.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.perf - a.perf;
    });
    
    // Ajouter le rang avec gestion des ex-aequo
    let lastPoints = -1;
    let lastRank = 0;
    let sameRankCount = 0;
    
    scores.forEach((s, index) => {
        if (s.points === lastPoints) {
            sameRankCount++;
            s.rang = `${lastRank}-${lastRank + sameRankCount}`;
        } else {
            lastPoints = s.points;
            lastRank = index + 1;
            sameRankCount = 0;
            s.rang = lastRank;
        }
    });
    
    return scores;
}

// Génération du HTML pour les sections du tournoi
function genererHtmlTournoi() {
    // Générer le HTML pour les informations générales
    function genererInfoGenerale() {
        const formatList = tournoiData.info.format.map(item => `<li>${item}</li>`).join('');
        const prixList = tournoiData.info.prix.map(item => `<li>${item}</li>`).join('');
        
        return `
        <section class="intro-section">
            <h2>${tournoiData.info.titre}</h2>

            <div class="season-container">
                <h3>Format du tournoi</h3>
                <div class="season-content">
                    <ul class="enhanced-list">
                        ${formatList}
                    </ul>
                </div>
            </div>

            <div class="season-container">
                <h3>Prix</h3>
                <div class="season-content">
                    <ul class="enhanced-list">
                        ${prixList}
                    </ul>
                </div>
            </div>
        </section>
        `;
    }
    
    // Générer le HTML pour les appariements d'une ronde
    function genererAppariements(ronde) {
        let html = `
        <div class="results-table">
            <h3>Appariements</h3>
            <table class="w-full">
                <thead>
                    <tr class="bg-indigo-600 text-white">
                        <th class="px-4 py-2 text-left text-white">Table</th>
                        <th class="px-4 py-2 text-left text-white">Blancs</th>
                        <th class="px-4 py-2 text-left text-white">Elo</th>
                        <th class="px-4 py-2 text-center text-white">Résultat</th>
                        <th class="px-4 py-2 text-left text-white">Noirs</th>
                        <th class="px-4 py-2 text-left text-white">Elo</th>
                    </tr>
                </thead>
                <tbody>`;
                
        ronde.appariements.forEach(app => {
            const joueurBlanc = tournoiData.joueurs.find(j => j.id === app.blanc);
            const joueurNoir = tournoiData.joueurs.find(j => j.id === app.noir);
            const resultat = app.resultat || "-";
            const resultClass = app.resultat ? "font-semibold" : "";
            
            html += `
            <tr class="border-b">
                <td class="px-4 py-2">${app.table}</td>
                <td class="px-4 py-2">${joueurBlanc.nom}</td>
                <td class="px-4 py-2">${joueurBlanc.elo || "-"}</td>
                <td class="px-4 py-2 text-center ${resultClass}">${resultat}</td>
                <td class="px-4 py-2">${joueurNoir.nom}</td>
                <td class="px-4 py-2">${joueurNoir.elo || "-"}</td>
            </tr>`;
        });
        
        html += `
                </tbody>
            </table>
        </div>`;
        
        return html;
    }
    
    // Générer le HTML pour le classement après une ronde
    function genererClassement(rondeNum) {
        const scores = calculerClassement(rondeNum);
        
        let html = `
        <div class="results-table">
            <h3>Classement après Ronde ${rondeNum}</h3>
            <table class="w-full">
                <thead>
                    <tr class="bg-blue-500 text-white">
                        <th class="px-4 py-2 text-left">Rang</th>
                        <th class="px-4 py-2 text-left">Joueur</th>
                        <th class="px-4 py-2 text-left">Elo</th>
                        <th class="px-4 py-2 text-left">Perf</th>
                        <th class="px-4 py-2 text-left">Points</th>
                    </tr>
                </thead>
                <tbody>`;
                
        scores.forEach(score => {
            html += `
            <tr class="border-b">
                <td class="px-4 py-2">${score.rang}</td>
                <td class="px-4 py-2">${score.nom}</td>
                <td class="px-4 py-2">${score.elo}</td>
                <td class="px-4 py-2">${score.perf}</td>
                <td class="px-4 py-2">${score.points.toFixed(1)}</td>
            </tr>`;
        });
        
        html += `
                </tbody>
            </table>
        </div>`;
        
        return html;
    }
    
    // Générer le HTML pour une ronde complète
    function genererRonde(ronde) {
        const estEnCours = ronde.statut === "en cours";
        let html = `
        <div class="season-container">
            <h3>Ronde ${ronde.numero}</h3>
            <div class="season-content">`;
            
        if (estEnCours) {
            html += `
            <div class="info-banner">
                <p>Ronde en cours</p>
            </div>`;
        }
        
        html += `
            <div class="teams-grid">
                ${genererAppariements(ronde)}`;
                
        // Ajouter le classement seulement si c'est pas la première ronde
        // ou si c'est une ronde en cours (dans ce cas, on affiche le classement après la ronde précédente)
        if (ronde.numero > 1 || estEnCours) {
            const classeNum = estEnCours ? ronde.numero - 1 : ronde.numero;
            html += genererClassement(classeNum);
        }
        
        html += `
            </div>
            </div>
        </div>`;
        
        return html;
    }
    
    // Générer toutes les rondes
    function genererToutesRondes() {
        // Trier les rondes par numéro décroissant (la plus récente en premier)
        const rondesTriees = [...tournoiData.rondes].sort((a, b) => b.numero - a.numero);
        return rondesTriees.map(ronde => genererRonde(ronde)).join('');
    }
    
    // Assembler toutes les parties
    const htmlComplet = `
        ${genererInfoGenerale()}
        
        <section class="seasons-section">
            ${genererToutesRondes()}
        </section>
    `;
    
    return htmlComplet;
}

// Injection du contenu au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('tournoi-content');
    if (container) {
        container.innerHTML = genererHtmlTournoi();
    }
});