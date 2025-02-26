import React, { useState, useEffect } from 'react';

// Ce composant s'attend à ce que tournoiData soit disponible dans l'environnement global
// Il utilisera les données définies dans tournoi-data.js

const TournoiVisualisation = () => {
  const [donnees, setDonnees] = useState(null);
  const [rondeSelectionnee, setRondeSelectionnee] = useState(null);
  const [affichage, setAffichage] = useState('classement'); // 'classement' ou 'croisement'

  useEffect(() => {
    // Vérifier si window.tournoiData existe (ajouté par tournoi-data.js)
    if (window.tournoiData) {
      setDonnees(window.tournoiData);
      
      // Sélectionner par défaut la ronde la plus récente en cours
      const rondeEnCours = [...window.tournoiData.rondes]
        .sort((a, b) => b.numero - a.numero)
        .find(r => r.statut === "en cours");
      
      if (rondeEnCours) {
        setRondeSelectionnee(rondeEnCours.numero);
      } else {
        // Sinon, prendre la ronde la plus récente
        const derniere = [...window.tournoiData.rondes]
          .sort((a, b) => b.numero - a.numero)[0];
        setRondeSelectionnee(derniere?.numero || 1);
      }
    }
  }, []);

  if (!donnees) return <div>Chargement des données du tournoi...</div>;

  // Calculer le classement pour une ronde spécifique
  const calculerClassement = (rondeNum) => {
    // Tableau pour stocker les points et performances
    const scores = donnees.joueurs.map(joueur => ({
      id: joueur.id,
      nom: joueur.nom,
      elo: joueur.elo || "-",
      points: 0,
      perf: 0,
      adversaires: []
    }));
    
    // Parcourir toutes les rondes jusqu'à la ronde spécifiée
    for (let i = 0; i < rondeNum; i++) {
      const ronde = donnees.rondes[i];
      if (!ronde) continue;
      
      // Traiter chaque appariement
      ronde.appariements.forEach(app => {
        if (app.resultat) {
          const blanc = scores.find(s => s.id === app.blanc);
          const noir = scores.find(s => s.id === app.noir);
          
          if (!blanc || !noir) return;
          
          // Enregistrer les adversaires pour le départage
          blanc.adversaires.push(app.noir);
          noir.adversaires.push(app.blanc);
          
          // Répartir les points selon le résultat
          if (app.resultat === "1-0") {
            blanc.points += 1;
            // Calcul simplifié de la performance
            const eloNoir = donnees.joueurs.find(j => j.id === app.noir)?.elo || 1500;
            const eloBlanc = donnees.joueurs.find(j => j.id === app.blanc)?.elo || 1500;
            blanc.perf += eloNoir + 400;
            noir.perf += eloBlanc - 400;
          } else if (app.resultat === "0-1") {
            noir.points += 1;
            const eloNoir = donnees.joueurs.find(j => j.id === app.noir)?.elo || 1500;
            const eloBlanc = donnees.joueurs.find(j => j.id === app.blanc)?.elo || 1500;
            noir.perf += eloBlanc + 400;
            blanc.perf += eloNoir - 400;
          } else if (app.resultat === "½-½") {
            blanc.points += 0.5;
            noir.points += 0.5;
            const eloNoir = donnees.joueurs.find(j => j.id === app.noir)?.elo || 1500;
            const eloBlanc = donnees.joueurs.find(j => j.id === app.blanc)?.elo || 1500;
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

  // Obtenir la ronde actuelle
  const getRonde = (num) => {
    return donnees.rondes.find(r => r.numero === num);
  };

  // Obtenir le nom du joueur à partir de son ID
  const getNomJoueur = (id) => {
    const joueur = donnees.joueurs.find(j => j.id === id);
    return joueur ? joueur.nom : `Joueur ${id}`;
  };

  // Obtenir l'ELO du joueur à partir de son ID
  const getEloJoueur = (id) => {
    const joueur = donnees.joueurs.find(j => j.id === id);
    return joueur?.elo || "-";
  };

  // Générer le tableau des appariements pour une ronde
  const TableauAppariements = ({ ronde }) => {
    if (!ronde) return <div>Ronde non trouvée</div>;
    
    return (
      <div className="bg-white rounded-lg shadow p-4 mb-4">
        <h3 className="text-xl font-bold text-red-600 mb-4">Appariements - Ronde {ronde.numero}</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-red-600 text-white">
              <th className="p-2 text-left">Table</th>
              <th className="p-2 text-left">Blancs</th>
              <th className="p-2 text-left">Elo</th>
              <th className="p-2 text-center">Résultat</th>
              <th className="p-2 text-left">Noirs</th>
              <th className="p-2 text-left">Elo</th>
            </tr>
          </thead>
          <tbody>
            {ronde.appariements.map((app) => (
              <tr key={app.table} className="border-b hover:bg-gray-50">
                <td className="p-2">{app.table}</td>
                <td className="p-2">{getNomJoueur(app.blanc)}</td>
                <td className="p-2">{getEloJoueur(app.blanc)}</td>
                <td className="p-2 text-center font-bold">
                  {app.resultat || "-"}
                </td>
                <td className="p-2">{getNomJoueur(app.noir)}</td>
                <td className="p-2">{getEloJoueur(app.noir)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Tableau de classement pour une ronde spécifique
  const TableauClassement = ({ rondeNum }) => {
    const classement = calculerClassement(rondeNum);
    
    return (
      <div className="bg-white rounded-lg shadow p-4">
        <h3 className="text-xl font-bold text-blue-600 mb-4">Classement après Ronde {rondeNum}</h3>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="p-2 text-left">Rang</th>
              <th className="p-2 text-left">Joueur</th>
              <th className="p-2 text-left">Elo</th>
              <th className="p-2 text-left">Perf</th>
              <th className="p-2 text-left">Points</th>
            </tr>
          </thead>
          <tbody>
            {classement.map((joueur, index) => (
              <tr 
                key={joueur.id} 
                className={`border-b hover:bg-gray-50 ${index < 3 ? "bg-blue-50" : ""}`}
              >
                <td className="p-2">{joueur.rang}</td>
                <td className="p-2">{joueur.nom}</td>
                <td className="p-2">{joueur.elo}</td>
                <td className="p-2">{joueur.perf}</td>
                <td className="p-2 font-bold">{joueur.points.toFixed(1)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  // Tableau croisé montrant tous les résultats entre joueurs
  const TableauCroise = () => {
    const joueurs = [...donnees.joueurs].sort((a, b) => 
      calculerClassement(donnees.rondes.length).findIndex(s => s.id === a.id) - 
      calculerClassement(donnees.rondes.length).findIndex(s => s.id === b.id)
    );
    
    // Construire une matrice de résultats
    const resultats = {};
    donnees.rondes.forEach(ronde => {
      ronde.appariements.forEach(app => {
        if (app.resultat) {
          const key1 = `${app.blanc}-${app.noir}`;
          const key2 = `${app.noir}-${app.blanc}`;
          
          if (app.resultat === "1-0") {
            resultats[key1] = 1;
            resultats[key2] = 0;
          } else if (app.resultat === "0-1") {
            resultats[key1] = 0;
            resultats[key2] = 1;
          } else if (app.resultat === "½-½") {
            resultats[key1] = 0.5;
            resultats[key2] = 0.5;
          }
        }
      });
    });
    
    return (
      <div className="bg-white rounded-lg shadow p-4 overflow-x-auto mt-4">
        <h3 className="text-xl font-bold text-purple-600 mb-4">Tableau croisé des résultats</h3>
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-purple-600 text-white">
              <th className="p-2 sticky left-0 bg-purple-600">#</th>
              <th className="p-2 sticky left-12 bg-purple-600">Joueur</th>
              <th className="p-2 text-center">Points</th>
              {joueurs.map((j, index) => (
                <th key={j.id} className="p-2 text-center">{index + 1}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {joueurs.map((joueur, rowIndex) => {
              const score = calculerClassement(donnees.rondes.length).find(s => s.id === joueur.id);
              
              return (
                <tr key={joueur.id} className="border-b hover:bg-gray-50">
                  <td className="p-2 font-medium sticky left-0 bg-white">{rowIndex + 1}</td>
                  <td className="p-2 font-medium sticky left-12 bg-white">{joueur.nom}</td>
                  <td className="p-2 text-center font-bold">{score?.points.toFixed(1) || "0.0"}</td>
                  
                  {joueurs.map((adversaire) => {
                    if (joueur.id === adversaire.id) {
                      return <td key={adversaire.id} className="p-2 text-center bg-gray-200">⬤</td>;
                    }
                    
                    const resultat = resultats[`${joueur.id}-${adversaire.id}`];
                    let cellContent = "-";
                    let cellClass = "p-2 text-center";
                    
                    if (resultat === 1) {
                      cellContent = "1";
                      cellClass += " bg-green-100 text-green-800 font-bold";
                    } else if (resultat === 0) {
                      cellContent = "0";
                      cellClass += " bg-red-100 text-red-800";
                    } else if (resultat === 0.5) {
                      cellContent = "½";
                      cellClass += " bg-yellow-100 text-yellow-800";
                    }
                    
                    return <td key={adversaire.id} className={cellClass}>{cellContent}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  };

  // Sélecteur de ronde
  const SelecteurRonde = () => {
    return (
      <div className="flex flex-wrap justify-between items-center mb-6 gap-4">
        <div className="flex gap-2">
          {donnees.rondes.map((ronde) => (
            <button
              key={ronde.numero}
              onClick={() => setRondeSelectionnee(ronde.numero)}
              className={`px-4 py-2 rounded-full ${
                rondeSelectionnee === ronde.numero
                  ? "bg-red-600 text-white"
                  : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Ronde {ronde.numero}
              {ronde.statut === "en cours" && " ⏳"}
            </button>
          ))}
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => setAffichage("classement")}
            className={`px-4 py-2 rounded-lg ${
              affichage === "classement"
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Vue par ronde
          </button>
          <button
            onClick={() => setAffichage("croisement")}
            className={`px-4 py-2 rounded-lg ${
              affichage === "croisement"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Tableau croisé
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="bg-gray-50 p-4 rounded-xl mb-8">
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
        {donnees.info?.titre || "Tournoi d'échecs"}
      </h2>
      
      <SelecteurRonde />
      
      {affichage === "classement" ? (
        <>
          <TableauAppariements ronde={getRonde(rondeSelectionnee)} />
          
          {rondeSelectionnee > 1 && (
            <TableauClassement rondeNum={rondeSelectionnee > 1 && getRonde(rondeSelectionnee)?.statut === "en cours" 
              ? rondeSelectionnee - 1 
              : rondeSelectionnee} />
          )}
        </>
      ) : (
        <TableauCroise />
      )}
    </div>
  );
};

export default TournoiVisualisation;