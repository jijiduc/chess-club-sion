// TournoiVisualisation.jsx
import React, { useState, useEffect } from 'react';
import { createRoot } from 'react-dom/client';

// Composant principal pour visualiser le tournoi
const TournoiVisualisation = () => {
    // Données du tournoi - définies avant les états pour pouvoir les utiliser dans l'initialisation
    const tournoiData = {
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

        joueurs: [
            { id: 1, nom: "Sola Flavien", elo: 2027, title: "" },
            { id: 2, nom: "Rappaz Pierre-Marie", elo: 1951, title: "" },
            { id: 3, nom: "Riand Jean-Yves", elo: 1837, title: "" },
            { id: 4, nom: "Duc Jeremy", elo: 1762, title: "" },
            { id: 5, nom: "Cortada-Garcia Joan", elo: 1749, title: "" },
            { id: 6, nom: "Ulmann Olivier", elo: 1597, title: "" },
            { id: 7, nom: "Moerschell Simon", elo: 1534, title: "" },
            { id: 8, nom: "Ben Salem Akram", elo: null, title: "" }
        ],

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
                    { table: 1, blanc: 4, noir: 1, resultat: "0-1" },
                    { table: 2, blanc: 2, noir: 3, resultat: null },
                    { table: 3, blanc: 7, noir: 6, resultat: "0-1" },
                    { table: 4, blanc: 8, noir: 5, resultat: "0-1" }
                ]
            }
        ]
    };

    // Fonction pour déterminer la ronde active par défaut
    const getRondeInitiale = () => {
        // Chercher une ronde avec le statut "en cours"
        const rondeEnCours = tournoiData.rondes.find(r => r.statut === "en cours");
        if (rondeEnCours) return rondeEnCours.numero;

        // Si aucune ronde n'est en cours, prendre la dernière ronde terminée
        const rondesTerminees = tournoiData.rondes
            .filter(r => r.statut === "terminée")
            .sort((a, b) => b.numero - a.numero);

        if (rondesTerminees.length > 0) return rondesTerminees[0].numero;

        // Sinon, prendre la dernière ronde du tournoi
        return tournoiData.rondes.length > 0 ?
            tournoiData.rondes[tournoiData.rondes.length - 1].numero : 1;
    };

    // États pour la gestion de l'interface - avec initialisation dynamique
    const [rondeActive, setRondeActive] = useState(getRondeInitiale());
    const [vue, setVue] = useState('appariements'); // 'appariements' ou 'crosstable'
    const [donnees] = useState(tournoiData);

    // Calcul du classement après une ronde spécifique
    const calculerClassement = (rondeNum) => {
        // Tableau pour stocker les points et performances de chaque joueur
        const scores = donnees.joueurs.map(joueur => ({
            id: joueur.id,
            nom: joueur.nom,
            elo: joueur.elo || "-",
            points: 0,
            perf: 0,
            buchholz: 0,          // Tiebreak 1: Buchholz
            buchholzSum: 0,       // Tiebreak 2: Somme des Buchholz des adversaires
            adversaires: [],
            resultats: {} // Pour stocker les résultats contre chaque adversaire
        }));

        // Parcourir toutes les rondes jusqu'à la ronde spécifiée
        for (let i = 0; i < donnees.rondes.length; i++) {
            const ronde = donnees.rondes[i];

            // Ne traiter que les rondes jusqu'à la ronde spécifiée et avec un statut approprié
            if (i >= rondeNum || (ronde.statut !== "terminée" && ronde.statut !== "en cours")) {
                continue;
            }

            // Traiter chaque appariement
            ronde.appariements.forEach(app => {
                if (app.resultat) {
                    const blanc = scores.find(s => s.id === app.blanc);
                    const noir = scores.find(s => s.id === app.noir);

                    // Enregistrer les adversaires pour le départage
                    blanc.adversaires.push(app.noir);
                    noir.adversaires.push(app.blanc);

                    // Stocker les résultats pour la cross-table
                    if (app.resultat === "1-0") {
                        blanc.resultats[app.noir] = "1";
                        noir.resultats[app.blanc] = "0";
                        blanc.points += 1;
                    } else if (app.resultat === "0-1") {
                        blanc.resultats[app.noir] = "0";
                        noir.resultats[app.blanc] = "1";
                        noir.points += 1;
                    } else if (app.resultat === "½-½") {
                        blanc.resultats[app.noir] = "½";
                        noir.resultats[app.blanc] = "½";
                        blanc.points += 0.5;
                        noir.points += 0.5;
                    }

                    // Calcul de performance simplifié
                    const eloNoir = donnees.joueurs.find(j => j.id === app.noir).elo || 1500;
                    const eloBlanc = donnees.joueurs.find(j => j.id === app.blanc).elo || 1500;

                    if (app.resultat === "1-0") {
                        blanc.perf += eloNoir + 400;
                        noir.perf += eloBlanc - 400;
                    } else if (app.resultat === "0-1") {
                        noir.perf += eloBlanc + 400;
                        blanc.perf += eloNoir - 400;
                    } else if (app.resultat === "½-½") {
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

        // Calcul du Buchholz (somme des points des adversaires)
        scores.forEach(joueur => {
            joueur.buchholz = joueur.adversaires.reduce((sum, advId) => {
                const adv = scores.find(s => s.id === advId);
                return sum + adv.points;
            }, 0);
        });

        // Calcul de la somme des Buchholz des adversaires
        scores.forEach(joueur => {
            joueur.buchholzSum = joueur.adversaires.reduce((sum, advId) => {
                const adv = scores.find(s => s.id === advId);
                return sum + adv.buchholz;
            }, 0);
        });

        // Trier par points (décroissant), puis par Buchholz, puis par somme des Buchholz, puis par performance
        scores.sort((a, b) => {
            if (b.points !== a.points) return b.points - a.points;
            if (b.buchholz !== a.buchholz) return b.buchholz - a.buchholz;
            if (b.buchholzSum !== a.buchholzSum) return b.buchholzSum - a.buchholzSum;
            return b.perf - a.perf;
        });

        // Déterminer les rangs avec gestion des ex aequo
        let tieGroups = [];
        let currentTie = [0];

        for (let i = 1; i < scores.length; i++) {
            if (scores[i].points === scores[i - 1].points &&
                scores[i].buchholz === scores[i - 1].buchholz &&
                scores[i].buchholzSum === scores[i - 1].buchholzSum) {
                // C'est une égalité
                currentTie.push(i);
            } else {
                // Fin de l'égalité précédente
                if (currentTie.length > 1) {
                    tieGroups.push([...currentTie]);
                }
                // Démarrer une nouvelle égalité potentielle
                currentTie = [i];
            }
        }

        // Vérifier la dernière égalité potentielle
        if (currentTie.length > 1) {
            tieGroups.push([...currentTie]);
        }

        // Assigner les rangs standards d'abord
        scores.forEach((s, index) => {
            s.rang = index + 1;
            s.rangAffiche = s.rang.toString();
        });

        // Puis modifier les affichages de rang pour les ex aequo
        tieGroups.forEach(group => {
            const firstRank = scores[group[0]].rang;
            const lastRank = scores[group[group.length - 1]].rang;
            const displayRank = `${firstRank}-${lastRank}`;

            group.forEach(idx => {
                scores[idx].rangAffiche = displayRank;
            });
        });

        return scores;
    };

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

    // Composant pour les informations générales du tournoi
    const InfoGenerale = () => {
        return (
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
                <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">{donnees.info.titre}</h2>

                <div className="mb-6">
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b border-gray-300 pb-2">Format du tournoi</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        {donnees.info.format.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="text-gray-700"></li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 border-b border-gray-300 pb-2">Prix</h3>
                    <ul className="list-disc pl-6 space-y-2">
                        {donnees.info.prix.map((item, index) => (
                            <li key={index} dangerouslySetInnerHTML={{ __html: item }} className="text-gray-700"></li>
                        ))}
                    </ul>
                </div>
            </div>
        );
    };

    // Composant de navigation entre les rondes
    const RondeNavigation = () => {
        return (
            <div className="flex justify-center items-center gap-4 my-4 bg-gray-800 p-4 rounded-md">
                <button
                    onClick={() => setRondeActive(prev => Math.max(1, prev - 1))}
                    className="text-white px-3 py-1 bg-red-700 rounded hover:bg-red-800"
                    disabled={rondeActive === 1}
                >
                    &lt;
                </button>

                {donnees.rondes.map(ronde => (
                    <button
                        key={ronde.numero}
                        onClick={() => setRondeActive(ronde.numero)}
                        className={`px-3 py-1 rounded ${rondeActive === ronde.numero
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-700 text-white hover:bg-gray-600'}`}
                    >
                        {ronde.numero}
                    </button>
                ))}

                <button
                    onClick={() => setRondeActive(prev => Math.min(donnees.rondes.length, prev + 1))}
                    className="text-white px-3 py-1 bg-red-700 rounded hover:bg-red-800"
                    disabled={rondeActive === donnees.rondes.length}
                >
                    &gt;
                </button>
            </div>
        );
    };

    // Composant pour les appariements de la ronde active
    const AppariementsRonde = ({ ronde }) => {
        const rondeObj = donnees.rondes.find(r => r.numero === ronde);
        if (!rondeObj) return <div>Ronde non trouvée</div>;

        return (
            <div className="bg-gray-100 rounded-lg shadow-md p-4">
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Ronde {rondeObj.numero} {rondeObj.statut === "en cours" ? "(en cours)" : ""}</h3>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-4 text-left">#</th>
                                <th className="py-2 px-4 text-left">Blancs</th>
                                <th className="py-2 px-4 text-left">Elo</th>
                                <th className="py-2 px-4 text-center">Résultat</th>
                                <th className="py-2 px-4 text-left">Noirs</th>
                                <th className="py-2 px-4 text-left">Elo</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rondeObj.appariements.map((app) => {
                                const joueurBlanc = donnees.joueurs.find(j => j.id === app.blanc);
                                const joueurNoir = donnees.joueurs.find(j => j.id === app.noir);
                                const resultat = app.resultat || "";

                                return (
                                    <tr key={app.table} className="border-b border-gray-300 hover:bg-gray-200">
                                        <td className="py-2 px-4">{app.table}</td>
                                        <td className="py-2 px-4 font-medium">{joueurBlanc.nom}</td>
                                        <td className="py-2 px-4 text-gray-600">({joueurBlanc.elo || "-"})</td>
                                        <td className="py-2 px-4 text-center font-bold">
                                            {resultat ? (
                                                <div className="flex items-center justify-center">
                                                    <div className={`w-8 h-8 flex items-center justify-center ${resultat === "1-0" ? "bg-green-100 text-green-800" :
                                                        resultat === "0-1" ? "bg-red-100 text-red-800" :
                                                            "bg-yellow-100 text-yellow-800"
                                                        } rounded-md mx-1`}>
                                                        {resultat === "1-0" ? "1" : resultat === "0-1" ? "0" : "½"}
                                                    </div>
                                                    <div className={`w-8 h-8 flex items-center justify-center ${resultat === "0-1" ? "bg-green-100 text-green-800" :
                                                        resultat === "1-0" ? "bg-red-100 text-red-800" :
                                                            "bg-yellow-100 text-yellow-800"
                                                        } rounded-md mx-1`}>
                                                        {resultat === "0-1" ? "1" : resultat === "1-0" ? "0" : "½"}
                                                    </div>
                                                </div>
                                            ) : (
                                                <span className="text-gray-400">À jouer</span>
                                            )}
                                        </td>
                                        <td className="py-2 px-4 font-medium">{joueurNoir.nom}</td>
                                        <td className="py-2 px-4 text-gray-600">({joueurNoir.elo || "-"})</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Composant pour le tableau de classement
    const ClassementTable = () => {
        const rondeActuelle = donnees.rondes.filter(r => r.statut === "terminée" || r.statut === "en cours").length;
        const scores = calculerClassement(rondeActuelle);

        return (
            <div className="bg-gray-100 rounded-lg shadow-md p-4 mt-8">
                <h3 className="text-xl font-bold text-red-600 mb-4 text-center">Classement général</h3>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-800 text-white">
                            <tr>
                                <th className="py-2 px-2 text-center">#</th>
                                <th className="py-2 px-3 text-left">Joueur</th>
                                <th className="py-2 px-2 text-center">Elo</th>
                                <th className="py-2 px-2 text-center">Pts</th>
                                <th className="py-2 px-2 text-center">Perf</th>
                                <th className="py-2 px-2 text-center">TB1</th>
                                <th className="py-2 px-2 text-center">TB2</th>
                                {/* Remplacer les IDs des joueurs par leur position dans le classement (de 1 à 8) */}
                                {Array.from({ length: scores.length }, (_, index) => (
                                    <th key={index} className="py-2 px-2 text-center">{index + 1}</th>
                                ))}
                            </tr>
                        </thead>
                        <tbody>
                            {scores.map((joueur, rowIndex) => (
                                <tr key={joueur.id} className="border-b border-gray-300 hover:bg-gray-200">
                                    <td className="py-2 px-2 text-center font-medium">{joueur.rangAffiche}</td>
                                    <td className="py-2 px-3 font-medium">{joueur.nom}</td>
                                    <td className="py-2 px-2 text-center text-gray-600">{joueur.elo}</td>
                                    <td className="py-2 px-2 text-center font-bold">{joueur.points.toFixed(1)}</td>
                                    <td className="py-2 px-2 text-center">{joueur.perf}</td>
                                    <td className="py-2 px-2 text-center">{joueur.buchholz.toFixed(1)}</td>
                                    <td className="py-2 px-2 text-center">{joueur.buchholzSum.toFixed(1)}</td>

                                    {scores.map((adversaire, colIndex) => {
                                        // Cases diagonales (même joueur)
                                        if (rowIndex === colIndex) {
                                            return <td key={colIndex} className="py-2 px-2 text-center bg-gray-300">×</td>;
                                        }

                                        // Résultat connu
                                        const resultat = joueur.resultats[adversaire.id];
                                        if (resultat) {
                                            let cellClass = "";
                                            if (resultat === "1") {
                                                cellClass = "bg-green-100 text-green-800 font-bold";
                                            } else if (resultat === "0") {
                                                cellClass = "bg-red-100 text-red-800";
                                            } else if (resultat === "½") {
                                                cellClass = "bg-yellow-100 text-yellow-800 font-bold";
                                            }

                                            return (
                                                <td key={colIndex} className={`py-1 px-2 text-center ${cellClass}`}>
                                                    {resultat}
                                                </td>
                                            );
                                        }

                                        // Partie à jouer
                                        return <td key={colIndex} className="py-1 px-2 text-center text-gray-400">-</td>;
                                    })}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    };

    // Composant principal
    return (
        <>
            {/* Section d'information générale */}
            <InfoGenerale />

            {/* Section de visualisation des résultats */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">Résultats et Classement</h2>

                {/* Navigation des vues */}
                <div className="flex justify-center gap-4 mb-6">
                    <button
                        onClick={() => setVue('appariements')}
                        className={`px-4 py-2 rounded-md ${vue === 'appariements'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        Appariements par Ronde
                    </button>
                    <button
                        onClick={() => setVue('crosstable')}
                        className={`px-4 py-2 rounded-md ${vue === 'crosstable'
                            ? 'bg-red-600 text-white'
                            : 'bg-gray-200 hover:bg-gray-300'}`}
                    >
                        Table de Résultats
                    </button>
                </div>

                {vue === 'appariements' ? (
                    <>
                        <RondeNavigation />
                        <AppariementsRonde ronde={rondeActive} />
                    </>
                ) : (
                    <ClassementTable />
                )}
            </div>
        </>
    );
};

// Fonction d'initialisation moderne pour React 18
function initializeApp() {
    console.log('Initializing React application...');

    try {
        const container = document.getElementById('tournoi-react');

        if (!container) {
            throw new Error("Container element #tournoi-react not found");
        }

        console.log('Container found, creating React root');
        const root = createRoot(container);

        console.log('Rendering TournoiVisualisation component');
        root.render(
            <React.StrictMode>
                <TournoiVisualisation />
            </React.StrictMode>
        );

        console.log('TournoiVisualisation rendered successfully');
    } catch (error) {
        console.error('Error initializing React application:', error);
    }
}

// S'assurer que le DOM est chargé avant d'initialiser React
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeApp);
} else {
    console.log('DOM already loaded, initializing immediately');
    initializeApp();
}

export default TournoiVisualisation;