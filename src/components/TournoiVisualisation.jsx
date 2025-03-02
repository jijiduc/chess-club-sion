// TournoiVisualisation.jsx
import React, { useEffect } from 'react';

// Données du tournoi
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
                { table: 2, blanc: 2, noir: 3, resultat: null },
                { table: 3, blanc: 7, noir: 6, resultat: null },
                { table: 4, blanc: 8, noir: 5, resultat: null }
            ]
        }
    ]
};

// Calcul du classement après une ronde spécifique
const calculerClassement = (rondeNum) => {
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
};

// Composant React principal
const TournoiVisualisation = () => {
    // Effect pour optimiser les tableaux sur mobile
    useEffect(() => {
        const optimizeTablesForMobile = () => {
            // Vérifier si l'écran est en mode mobile
            if (window.innerWidth <= 768) {
                // Sélectionner tous les en-têtes de tableau pertinents
                const tableHeaders = document.querySelectorAll('.results-table th, .tournament-table th');
                
                // Modifier les textes des en-têtes pour économiser de l'espace
                tableHeaders.forEach((header) => {
                    if (header.textContent.trim() === 'Table') {
                        header.textContent = 'T.';
                    } else if (header.textContent.trim() === 'Résultat') {
                        header.textContent = 'R.';
                    }
                });
                
                // Optimiser l'affichage des noms des joueurs (ne garder que le nom de famille)
                const playerCells = document.querySelectorAll('.results-table td:nth-child(2), .results-table td:nth-child(5), .tournament-table td:nth-child(2), .tournament-table td:nth-child(5)');
                
                playerCells.forEach(cell => {
                    const fullName = cell.textContent.trim();
                    // Stocker le nom complet comme attribut data pour pouvoir le restaurer si nécessaire
                    cell.setAttribute('data-full-name', fullName);
                    
                    // Extraire le nom de famille (en supposant que le format est "Prénom Nom")
                    const nameParts = fullName.split(' ');
                    if (nameParts.length > 1) {
                        cell.textContent = nameParts[nameParts.length - 1];
                    }
                });
            } else {
                // Restaurer les en-têtes complets sur les grands écrans
                const tableHeaders = document.querySelectorAll('.results-table th, .tournament-table th');
                tableHeaders.forEach((header) => {
                    if (header.textContent.trim() === 'T.') {
                        header.textContent = 'Table';
                    } else if (header.textContent.trim() === 'R.') {
                        header.textContent = 'Résultat';
                    }
                });
                
                // Restaurer les noms complets
                const playerCells = document.querySelectorAll('[data-full-name]');
                playerCells.forEach(cell => {
                    cell.textContent = cell.getAttribute('data-full-name');
                });
            }
        };
        
        // Exécuter après le rendu initial
        setTimeout(optimizeTablesForMobile, 100);
        
        // Animations pour les conteneurs de ronde
        const roundContainers = document.querySelectorAll('.round-container');
        roundContainers.forEach((container, index) => {
            setTimeout(() => {
                container.style.opacity = "1";
                container.style.transform = "translateY(0)";
            }, 100 * index);
        });
        
        // Ajouter l'écouteur pour le redimensionnement
        window.addEventListener('resize', optimizeTablesForMobile);
        
        // Nettoyage lors du démontage du composant
        return () => {
            window.removeEventListener('resize', optimizeTablesForMobile);
        };
    }, []);

    // Composant pour les informations générales
    const InfoGenerale = () => {
        return (
            <section className="intro-section">
                <h2>{tournoiData.info.titre}</h2>
                <div className="season-container">
                    <h3>Format du tournoi</h3>
                    <div className="season-content">
                        <ul className="enhanced-list">
                            {tournoiData.info.format.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="season-container">
                    <h3>Prix</h3>
                    <div className="season-content">
                        <ul className="enhanced-list">
                            {tournoiData.info.prix.map((item, index) => (
                                <li key={index} dangerouslySetInnerHTML={{ __html: item }}></li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        );
    };

    // Composant pour les appariements
    const Appariements = ({ ronde }) => {
        return (
            <div className="results-table">
                <h3>Appariements</h3>
                <table className="w-full">
                    <thead>
                        <tr className="bg-indigo-600 text-white">
                            <th className="px-4 py-2 text-left text-white">Table</th>
                            <th className="px-4 py-2 text-left text-white">Blancs</th>
                            <th className="px-4 py-2 text-left text-white">Elo</th>
                            <th className="px-4 py-2 text-center text-white">Résultat</th>
                            <th className="px-4 py-2 text-left text-white">Noirs</th>
                            <th className="px-4 py-2 text-left text-white">Elo</th>
                        </tr>
                    </thead>
                    <tbody>
                        {ronde.appariements.map((app) => {
                            const joueurBlanc = tournoiData.joueurs.find(j => j.id === app.blanc);
                            const joueurNoir = tournoiData.joueurs.find(j => j.id === app.noir);
                            const resultat = app.resultat || "-";
                            const resultClass = app.resultat ? "font-semibold" : "";
                            
                            return (
                                <tr key={app.table} className="border-b">
                                    <td className="px-4 py-2">{app.table}</td>
                                    <td className="px-4 py-2">{joueurBlanc.nom}</td>
                                    <td className="px-4 py-2">{joueurBlanc.elo || "-"}</td>
                                    <td className={`px-4 py-2 text-center ${resultClass}`}>{resultat}</td>
                                    <td className="px-4 py-2">{joueurNoir.nom}</td>
                                    <td className="px-4 py-2">{joueurNoir.elo || "-"}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    };

    // Composant pour le classement
    const Classement = ({ rondeNum }) => {
        const scores = calculerClassement(rondeNum);
        
        return (
            <div className="results-table">
                <h3>Classement après Ronde {rondeNum}</h3>
                <table className="w-full">
                    <thead>
                        <tr className="bg-blue-500 text-white">
                            <th className="px-4 py-2 text-left">Rang</th>
                            <th className="px-4 py-2 text-left">Joueur</th>
                            <th className="px-4 py-2 text-left">Elo</th>
                            <th className="px-4 py-2 text-left">Perf</th>
                            <th className="px-4 py-2 text-left">Points</th>
                        </tr>
                    </thead>
                    <tbody>
                        {scores.map((score, index) => (
                            <tr key={index} className="border-b">
                                <td className="px-4 py-2">{score.rang}</td>
                                <td className="px-4 py-2">{score.nom}</td>
                                <td className="px-4 py-2">{score.elo}</td>
                                <td className="px-4 py-2">{score.perf}</td>
                                <td className="px-4 py-2">{score.points.toFixed(1)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    };

    // Composant pour une ronde complète
    const Ronde = ({ ronde }) => {
        const estEnCours = ronde.statut === "en cours";
        
        return (
            <div className="season-container round-container">
                <h3>Ronde {ronde.numero}</h3>
                <div className="season-content round-content">
                    {estEnCours && (
                        <div className="round-alert">
                            <p>Ronde en cours</p>
                        </div>
                    )}
                    <div className="tournament-grid">
                        <Appariements ronde={ronde} />
                        {(ronde.numero > 1 || estEnCours) && (
                            <Classement rondeNum={estEnCours ? ronde.numero - 1 : ronde.numero} />
                        )}
                    </div>
                </div>
            </div>
        );
    };

    // Rondes triées par numéro décroissant (la plus récente en premier)
    const rondesTriees = [...tournoiData.rondes].sort((a, b) => b.numero - a.numero);

    return (
        <>
            <InfoGenerale />
            <section className="seasons-section">
                {rondesTriees.map(ronde => (
                    <Ronde key={ronde.numero} ronde={ronde} />
                ))}
            </section>
        </>
    );
};

export default TournoiVisualisation;