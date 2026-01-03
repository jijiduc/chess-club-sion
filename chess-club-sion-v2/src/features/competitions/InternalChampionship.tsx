import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Trophy, ChevronRight, ChevronLeft, Award, Grid, List, CalendarPlus, AlertCircle, Clock, CheckCircle2, ExternalLink } from 'lucide-react'
import { Title, Meta } from 'react-head';

interface Score {
  id: number
  nom: string
  elo: number | string
  points: number
  perf: number
  buchholz: number
  buchholzSum: number
  rang?: number
  rangAffiche?: string
  adversaires: number[]
  resultats: { [key: number]: string }
}

// Données du tournoi 2024/25 (Conservées telles quelles pour l'historique)
const tournoiData = {
  info: {
    titre: "Championnat interne du club",
    format: [
      "Le tournoi s'est joué en 7 rondes (Round Robin).",
      "La cadence des parties était de <strong>60 minutes + 30 secondes par coup</strong>."
    ],
    prix: []
  },
  joueurs: [
    { id: 1, nom: "Sola Flavien", elo: 2027, title: "" },
    { id: 2, nom: "Rappaz Pierre-Marie", elo: 1951, title: "" },
    { id: 3, nom: "Riand Jean-Yves", elo: 1837, title: "" },
    { id: 4, nom: "Duc Jeremy", elo: 1762, title: "" },
    { id: 5, nom: "Cortada-Garcia Joan", elo: 1824, title: "" },
    { id: 6, nom: "Ulmann Olivier", elo: 1597, title: "" },
    { id: 7, nom: "Moerschell Simon", elo: 1534, title: "" },
    { id: 8, nom: "Ben Salem Akram", elo: null, title: "" }
  ],
  rondes: [
    { numero: 1, statut: "terminée", appariements: [{ table: 1, blanc: 1, noir: 5, resultat: "1-0" }, { table: 2, blanc: 6, noir: 2, resultat: "0-1" }, { table: 3, blanc: 3, noir: 7, resultat: "1-0" }, { table: 4, blanc: 8, noir: 4, resultat: "0-1" }] },
    { numero: 2, statut: "terminée", appariements: [{ table: 1, blanc: 3, noir: 1, resultat: "0-1" }, { table: 2, blanc: 2, noir: 4, resultat: "1-0" }, { table: 3, blanc: 7, noir: 5, resultat: "0-1" }, { table: 4, blanc: 8, noir: 6, resultat: "0-1" }] },
    { numero: 3, statut: "terminée", appariements: [{ table: 1, blanc: 1, noir: 2, resultat: "1-0" }, { table: 2, blanc: 4, noir: 3, resultat: "1-0" }, { table: 3, blanc: 5, noir: 6, resultat: "0-1" }, { table: 4, blanc: 7, noir: 8, resultat: "1-0" }] },
    { numero: 4, statut: "terminée", appariements: [{ table: 1, blanc: 4, noir: 1, resultat: "0-1" }, { table: 2, blanc: 2, noir: 3, resultat: "0-1" }, { table: 3, blanc: 7, noir: 6, resultat: "0-1" }, { table: 4, blanc: 8, noir: 5, resultat: "0-1" }] },
    { numero: 5, statut: "terminée", appariements: [{ table: 1, blanc: 1, noir: 6, resultat: "½-½" }, { table: 2, blanc: 5, noir: 4, resultat: "½-½" }, { table: 3, blanc: 3, noir: 8, resultat: "1-0" }, { table: 4, blanc: 7, noir: 2, resultat: "0-1" }] },
    { numero: 6, statut: "terminée", appariements: [{ table: 1, blanc: 1, noir: 7, resultat: "1-0" }, { table: 2, blanc: 6, noir: 4, resultat: "1-0" }, { table: 3, blanc: 5, noir: 3, resultat: "1-0" }, { table: 4, blanc: 2, noir: 8, resultat: "1-0" }] },
    { numero: 7, statut: "terminée", appariements: [{ table: 1, blanc: 8, noir: 1, resultat: "0-1" }, { table: 2, blanc: 3, noir: 6, resultat: "1-0" }, { table: 3, blanc: 2, noir: 5, resultat: "1-0" }, { table: 4, blanc: 4, noir: 7, resultat: "1-0" }] }
  ]
}

export default function InternalChampionship() {
  const getRondeInitiale = () => {
    const rondesTerminees = tournoiData.rondes
      .filter(r => r.statut === "terminée")
      .sort((a, b) => b.numero - a.numero)

    return rondesTerminees.length > 0 ? rondesTerminees[0].numero : 1
  }

  const [currentRound, setCurrentRound] = useState(getRondeInitiale());
  const [viewMode, setViewMode] = useState<'rounds' | 'crosstable'>('crosstable');
  
  const [isNewSeasonExpanded, setIsNewSeasonExpanded] = useState(true);
  const [isPastSeasonExpanded, setIsPastSeasonExpanded] = useState(false);

  useEffect(() => {
    document.title = "Championnat Interne - Club d'Échecs de Sion";
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', "Participez au championnat interne 2025/26 et consultez les résultats complets de la saison 2024/25 du Club d'Échecs de Sion.");
    }
  }, []);

  const calculateScores = (): Score[] => {
    const scores: Score[] = tournoiData.joueurs.map(joueur => ({
      id: joueur.id,
      nom: joueur.nom,
      elo: joueur.elo || "NC",
      points: 0,
      perf: 0,
      buchholz: 0,
      buchholzSum: 0,
      adversaires: [],
      resultats: {}
    }));

    tournoiData.rondes.forEach(ronde => {
      if (ronde.statut === "terminée") {
        ronde.appariements.forEach(appariement => {
          const idBlanc = appariement.blanc;
          const idNoir = appariement.noir;
          const resultat = appariement.resultat;

          if (resultat === "1-0") {
            scores[idBlanc - 1].points += 1;
            scores[idBlanc - 1].resultats[idNoir] = "1";
            scores[idNoir - 1].resultats[idBlanc] = "0";
          } else if (resultat === "0-1") {
            scores[idNoir - 1].points += 1;
            scores[idBlanc - 1].resultats[idNoir] = "0";
            scores[idNoir - 1].resultats[idBlanc] = "1";
          } else if (resultat === "½-½") {
            scores[idBlanc - 1].points += 0.5;
            scores[idNoir - 1].points += 0.5;
            scores[idBlanc - 1].resultats[idNoir] = "½";
            scores[idNoir - 1].resultats[idBlanc] = "½";
          }

          scores[idBlanc - 1].adversaires.push(idNoir);
          scores[idNoir - 1].adversaires.push(idBlanc);
        });
      }
    });

    scores.forEach(joueur => {
      joueur.buchholz = joueur.adversaires.reduce((sum, advId) => sum + scores[advId - 1].points, 0);
    });

    scores.forEach(joueur => {
      joueur.buchholzSum = joueur.adversaires.reduce((sum, advId) => sum + scores[advId - 1].buchholz, 0);
    });

    scores.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      if (b.buchholz !== a.buchholz) return b.buchholz - a.buchholz;
      return b.buchholzSum - a.buchholzSum;
    });

    scores.forEach((joueur, index) => {
      joueur.rang = index + 1;
      if (index === 0) joueur.rangAffiche = "🥇";
      else if (index === 1) joueur.rangAffiche = "🥈";
      else if (index === 2) joueur.rangAffiche = "🥉";
      else joueur.rangAffiche = `${index + 1}`;
    });

    return scores;
  }

  const scores = calculateScores();
  const podium = scores.slice(0, 3);

  const getPlayerName = (id: number) => {
    const player = tournoiData.joueurs.find(j => j.id === id);
    return player ? player.nom : "";
  }

  const renderCrosstable = () => {
    return (
      <div className="overflow-x-auto">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="bg-amber-100 text-amber-900">
              <th className="px-4 py-3 text-left font-bold rounded-tl-lg">#</th>
              <th className="px-4 py-3 text-left font-bold">Joueur</th>
              <th className="px-4 py-3 text-center font-bold">Elo</th>
              {tournoiData.joueurs.map(j => (
                <th key={j.id} className="px-2 py-3 text-center font-bold min-w-[30px] hidden md:table-cell">{j.id}</th>
              ))}
              <th className="px-4 py-3 text-center font-bold rounded-tr-lg">Pts</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <motion.tr
                key={score.id}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.03 * index }}
                className={`border-b border-amber-100 hover:bg-amber-50 transition-colors ${index < 3 ? 'bg-amber-50/30' : ''}`}
              >
                <td className="px-4 py-3 font-bold text-amber-800">
                    {score.rangAffiche}
                </td>
                <td className="px-4 py-3 font-medium text-neutral-900">
                    {score.nom}
                </td>
                <td className="px-4 py-3 text-center text-neutral-600 font-mono text-xs">{score.elo}</td>
                {tournoiData.joueurs.map(j => (
                  <td key={j.id} className="px-2 py-3 text-center hidden md:table-cell">
                    {score.id === j.id ? (
                      <span className="text-neutral-300">●</span>
                    ) : (
                      <span className={`font-bold ${score.resultats[j.id] === "1" ? "text-green-600" : score.resultats[j.id] === "0" ? "text-red-500" : score.resultats[j.id] === "½" ? "text-amber-600" : "text-neutral-200"}`}>
                        {score.resultats[j.id] || "·"}
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-4 py-3 text-center font-bold text-amber-900 bg-amber-50/50">{score.points}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    )
  }

  const renderRounds = () => {
    const round = tournoiData.rondes[currentRound - 1];
    if (!round) return null;

    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between mb-6 bg-amber-50 p-4 rounded-xl border border-amber-100">
          <button 
            onClick={() => setCurrentRound(Math.max(1, currentRound - 1))} 
            disabled={currentRound === 1} 
            className="p-2 text-amber-700 hover:bg-amber-100 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <div className="text-center">
             <h3 className="text-lg font-bold text-amber-900">Ronde {round.numero}</h3>
             <span className="text-xs font-medium text-amber-600 uppercase tracking-wider">{round.statut}</span>
          </div>
          <button 
            onClick={() => setCurrentRound(Math.min(tournoiData.rondes.length, currentRound + 1))} 
            disabled={currentRound === tournoiData.rondes.length} 
            className="p-2 text-amber-700 hover:bg-amber-100 rounded-full disabled:opacity-30 disabled:hover:bg-transparent transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
        
        <div className="grid md:grid-cols-2 gap-4">
          {round.appariements.map((appariement, index) => (
            <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 10 }} 
                animate={{ opacity: 1, y: 0 }} 
                transition={{ delay: 0.05 * index }} 
                className="bg-white rounded-xl shadow-sm p-4 border border-neutral-100 hover:border-amber-200 hover:shadow-md transition-all"
            >
              <div className="flex justify-between items-center mb-3 text-xs text-neutral-400 font-medium uppercase tracking-wider">
                <span>Table {appariement.table}</span>
                {appariement.resultat ? (
                    <span className="text-amber-600 font-bold bg-amber-50 px-2 py-0.5 rounded">Terminé</span>
                ) : (
                    <span>À venir</span>
                )}
              </div>
              
              <div className="flex items-center justify-between">
                <div className={`flex-1 ${appariement.resultat === "1-0" ? "font-bold text-neutral-900" : "text-neutral-600"}`}>
                  {getPlayerName(appariement.blanc)}
                  <div className="text-[10px] text-neutral-400 font-normal mt-0.5">Blanc</div>
                </div>
                
                <div className={`mx-4 text-lg font-bold px-3 py-1 rounded-lg ${appariement.resultat ? 'bg-neutral-100 text-neutral-800' : 'bg-neutral-50 text-neutral-300'}`}>
                  {appariement.resultat || "-"}
                </div>
                
                <div className={`flex-1 text-right ${appariement.resultat === "0-1" ? "font-bold text-neutral-900" : "text-neutral-600"}`}>
                  {getPlayerName(appariement.noir)}
                  <div className="text-[10px] text-neutral-400 font-normal mt-0.5">Noir</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <>
      <Title>Championnat Interne - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Informations et résultats du Championnat interne du CE Sion. Une compétition amicale mais sérieuse pour tous les membres." />
      
      <div className="min-h-screen bg-neutral-50">
        {/* HERO SECTION (Amber Theme) */}
        <section className="relative bg-gradient-to-r from-amber-600 to-orange-700 text-white py-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }} 
                className="text-center max-w-3xl mx-auto"
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-amber-50 text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
                Compétition Club
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display shadow-sm">
                Championnat Interne
              </h1>
              <p className="text-xl text-amber-100 leading-relaxed">
                Le rendez-vous mensuel incontournable des membres. <br/>
                Une compétition en parties lentes pour déterminer le champion du club.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 max-w-5xl">
            
            {/* --- CARTE NOUVELLE SAISON --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-2xl shadow-lg border border-amber-100 overflow-hidden mb-12"
            >
                <div 
                    className="bg-white px-8 py-6 border-b border-neutral-100 flex justify-between items-center cursor-pointer hover:bg-neutral-50 transition-colors"
                    onClick={() => setIsNewSeasonExpanded(!isNewSeasonExpanded)}
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-amber-100 p-3 rounded-xl text-amber-600">
                            <CalendarPlus className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-neutral-900">Saison 2025/2026</h3>
                            <p className="text-neutral-500 text-sm">Informations</p>
                        </div>
                    </div>
                    <motion.div animate={{ rotate: isNewSeasonExpanded ? 180 : 0 }}>
                        <ChevronRight className="h-6 w-6 text-neutral-400" transform="rotate(90)" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isNewSeasonExpanded && (
                        <motion.div 
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8 grid md:grid-cols-2 gap-12">
                                
                                {/* Info Colonne 1 */}
                                <div>
                                    <h4 className="font-bold text-lg text-amber-900 mb-6 flex items-center">
                                        <AlertCircle className="h-5 w-5 mr-2" />
                                        L'essentiel
                                    </h4>
                                    <ul className="space-y-4">
                                        <li className="flex items-start">
                                            <div className="bg-amber-50 p-1.5 rounded-lg mr-3 mt-0.5">
                                                <Clock className="h-4 w-4 text-amber-600" />
                                            </div>
                                            <div>
                                                <span className="block font-semibold text-neutral-900">Cadence</span>
                                                <span className="text-neutral-600 text-sm">45 min + 30 sec/coup</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-amber-50 p-1.5 rounded-lg mr-3 mt-0.5">
                                                <Grid className="h-4 w-4 text-amber-600" />
                                            </div>
                                            <div>
                                                <span className="block font-semibold text-neutral-900">Format</span>
                                                <span className="text-neutral-600 text-sm">7 rondes (Système Suisse)</span>
                                            </div>
                                        </li>
                                        <li className="flex items-start">
                                            <div className="bg-amber-50 p-1.5 rounded-lg mr-3 mt-0.5">
                                                <CheckCircle2 className="h-4 w-4 text-amber-600" />
                                            </div>
                                            <div>
                                                <span className="block font-semibold text-neutral-900">Homologation</span>
                                                <span className="text-neutral-600 text-sm">Comptabilisé pour le classement FIDE</span>
                                            </div>
                                        </li>
                                    </ul>
                                </div>

                                {/* Info Colonne 2 */}
                                <div>
                                    <h4 className="font-bold text-lg text-amber-900 mb-6 flex items-center">
                                        <List className="h-5 w-5 mr-2" />
                                        Règlement & Absences
                                    </h4>
                                    <div className="bg-neutral-50 rounded-xl p-5 text-sm text-neutral-700 space-y-3 border border-neutral-100">
                                        <p>• <strong>Organisation des parties :</strong> Par défaut, les parties se jouent toujours lors de la soirée du club dédiée (ex: 23 janvier pour la ronde 2).</p>
                                        <p>• <strong>Absence lors de la soirée dédiée :</strong>
                                            <ul className="list-disc list-inside ml-2 mt-1 space-y-1 text-neutral-600">
                                                <li>Si un joueur est présent mais que son adversaire ne se présente pas (sans annonce préalable), il gagne par forfait.</li>
                                                <li>Si aucun des deux joueurs n'est présent et qu'aucun report n'a été annoncé au préalable au directeur, la partie est déclarée double forfait (0-0).</li>
                                            </ul>
                                        </p>
                                        <p>• <strong>Flexibilité et report :</strong> Il est possible de jouer sa partie en amont ou après la soirée dédiée, dans la limite des dates de la ronde. Ce déplacement doit impérativement être annoncé au directeur du tournoi.</p>
                                        <p>• <strong>Résultats :</strong> Le gagnant transmet le résultat avec une photo de la feuille de partie avant la date butoire de la ronde. Passé ce délai, le match est enregistré 0-0.</p>
                                        <div className="pt-3 border-t border-neutral-200 mt-2">
                                            <p className="font-medium text-amber-800">Directeur du tournoi : Olivier Ulmann</p>
                                            <p className="font-medium text-amber-800">Arbitre : Fabrice Lovey</p>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-6">
                                        <a 
                                            href="https://s3.chess-results.com/tnr1288454.aspx?lan=20&art=2&rd=2&SNode=S0" 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="flex items-center justify-center w-full py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-xl font-semibold transition-colors shadow-sm"
                                        >
                                            Voir les appariements (Chess-Results)
                                            <ExternalLink className="h-4 w-4 ml-2" />
                                        </a>
                                    </div>
                                </div>

                                {/* Planning (Full Width) */}
                                <div className="md:col-span-2">
                                    <h4 className="font-bold text-lg text-amber-900 mb-6 flex items-center">
                                        <CalendarPlus className="h-5 w-5 mr-2" />
                                        Planning des rondes
                                    </h4>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                                        {[
                                            { r: 1, d: "25.11 - 25.12" },
                                            { r: 2, d: "26.12 - 25.01" },
                                            { r: 3, d: "26.01 - 23.02" },
                                            { r: 4, d: "24.02 - 25.03" },
                                            { r: 5, d: "26.03 - 25.04" },
                                            { r: 6, d: "26.04 - 25.05" },
                                            { r: 7, d: "26.05 - 25.06" },
                                        ].map((item, idx) => (
                                            <div key={idx} className="bg-white border border-neutral-200 rounded-lg p-3 text-center">
                                                <span className="block text-xs font-bold text-amber-600 uppercase mb-1">Ronde {item.r}</span>
                                                <span className="text-sm text-neutral-800 font-medium">{item.d}</span>
                                            </div>
                                        ))}
                                        <div className="bg-amber-50 border border-amber-100 rounded-lg p-3 text-center flex items-center justify-center">
                                            <span className="text-sm font-bold text-amber-800">Remise des prix 🏆</span>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

            {/* --- CARTE SAISON PASSÉE --- */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden"
            >
                <div 
                    className="bg-neutral-900 text-white px-8 py-6 flex justify-between items-center cursor-pointer hover:bg-neutral-800 transition-colors"
                    onClick={() => setIsPastSeasonExpanded(!isPastSeasonExpanded)}
                >
                    <div className="flex items-center gap-4">
                        <div className="bg-white/10 p-3 rounded-xl text-amber-400">
                            <Trophy className="h-6 w-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold">Résultats 2024/2025</h3>
                            <p className="text-neutral-400 text-sm">Classements et Historique</p>
                        </div>
                    </div>
                    <motion.div animate={{ rotate: isPastSeasonExpanded ? 180 : 0 }}>
                        <ChevronRight className="h-6 w-6 text-neutral-400" transform="rotate(90)" />
                    </motion.div>
                </div>

                <AnimatePresence>
                    {isPastSeasonExpanded && (
                        <motion.div
                            initial={{ height: 0 }}
                            animate={{ height: 'auto' }}
                            exit={{ height: 0 }}
                            className="overflow-hidden"
                        >
                            <div className="p-8">
                                
                                {/* Podium Card */}
                                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100 mb-10 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 -mt-4 -mr-4 opacity-10">
                                        <Trophy className="h-32 w-32 text-amber-600" />
                                    </div>
                                    
                                    <h4 className="text-xl font-bold text-amber-900 mb-6 relative z-10">Podium Final</h4>
                                    <div className="space-y-4 relative z-10">
                                        {podium.map((joueur) => (
                                            <div key={joueur.id} className="flex items-center bg-white/60 backdrop-blur-sm p-3 rounded-lg shadow-sm border border-amber-100/50">
                                                <span className="text-2xl mr-4 filter drop-shadow-sm">{joueur.rangAffiche}</span>
                                                <span className="font-bold text-neutral-900 text-lg">{joueur.nom}</span>
                                                <span className="ml-auto font-mono font-bold text-amber-700 bg-amber-100/50 px-3 py-1 rounded-md">{joueur.points} pts</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="mb-10">
                                    <h4 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                                        <Award className="h-5 w-5 mr-2 text-amber-600" />
                                        Résumé de la saison
                                    </h4>
                                    <div className="prose prose-amber text-neutral-600 max-w-none">
                                        <p><strong>Flavien Sola</strong> a dominé le tournoi de manière impressionnante, terminant invaincu avec 6,5 points sur 7. Ses victoires clés contre ses poursuivants directs ont rapidement scellé sa première place.</p>
                                        <p>La lutte pour la deuxième place a été intense. <strong>Pierre-Marie Rappaz</strong> a su se relever après deux défaites consécutives à mi-parcours pour s'assurer la médaille d'argent.</p>
                                    </div>
                                </div>

                                {/* Toggle View Buttons */}
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <h4 className="text-lg font-bold text-neutral-900 flex items-center">
                                            <Grid className="h-5 w-5 mr-2 text-amber-600" />
                                            Détails du tournoi
                                        </h4>
                                        <div className="bg-neutral-100 p-1 rounded-lg flex text-sm">
                                            <button 
                                                onClick={() => setViewMode('crosstable')}
                                                className={`px-4 py-1.5 rounded-md font-medium transition-all ${viewMode === 'crosstable' ? 'bg-white text-amber-700 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                                            >
                                                Classement
                                            </button>
                                            <button 
                                                onClick={() => setViewMode('rounds')}
                                                className={`px-4 py-1.5 rounded-md font-medium transition-all ${viewMode === 'rounds' ? 'bg-white text-amber-700 shadow-sm' : 'text-neutral-500 hover:text-neutral-700'}`}
                                            >
                                                Rondes
                                            </button>
                                        </div>
                                    </div>

                                    <div className="bg-white rounded-xl border border-neutral-200 p-1 overflow-hidden">
                                        {viewMode === 'rounds' ? renderRounds() : renderCrosstable()}
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>

          </div>
        </section>
      </div>
    </>
  )
}