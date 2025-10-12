import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Trophy, ChevronRight, ChevronLeft, Award, Grid, List, CalendarPlus, Edit } from 'lucide-react'

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

// Données du tournoi 2024/25
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

export default function InternalTournament() {
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
        <table className="min-w-full">
          <thead>
            <tr className="bg-gradient-to-r from-primary-600 to-accent-600 text-white">
              <th className="px-4 py-3 text-left font-semibold">#</th>
              <th className="px-4 py-3 text-left font-semibold">Joueur</th>
              <th className="px-4 py-3 text-center font-semibold">Elo</th>
              {tournoiData.joueurs.map(j => (
                <th key={j.id} className="px-3 py-3 text-center font-semibold min-w-[40px]">{j.id}</th>
              ))}
              <th className="px-4 py-3 text-center font-semibold">Pts</th>
              <th className="px-4 py-3 text-center font-semibold">Bu</th>
              <th className="px-4 py-3 text-center font-semibold">BuS</th>
            </tr>
          </thead>
          <tbody>
            {scores.map((score, index) => (
              <motion.tr
                key={score.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className={`border-b ${index < 3 ? 'bg-gradient-to-r from-yellow-50 to-primary-50' : 'hover:bg-neutral-50'}`}
              >
                <td className="px-4 py-3 font-medium"><span className="flex items-center">{score.rangAffiche}</span></td>
                <td className="px-4 py-3 font-medium text-neutral-900">{score.nom}</td>
                <td className="px-4 py-3 text-center text-neutral-600">{score.elo}</td>
                {tournoiData.joueurs.map(j => (
                  <td key={j.id} className="px-3 py-3 text-center">
                    {score.id === j.id ? (
                      <span className="text-neutral-400">X</span>
                    ) : (
                      <span className={`font-medium ${score.resultats[j.id] === "1" ? "text-success-600" : score.resultats[j.id] === "0" ? "text-red-600" : score.resultats[j.id] === "½" ? "text-accent-600" : "text-neutral-300"}`}>
                        {score.resultats[j.id] || "-"}
                      </span>
                    )}
                  </td>
                ))}
                <td className="px-4 py-3 text-center font-bold text-primary-900">{score.points}</td>
                <td className="px-4 py-3 text-center text-neutral-600">{score.buchholz}</td>
                <td className="px-4 py-3 text-center text-neutral-600">{score.buchholzSum}</td>
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
        <div className="flex items-center justify-between mb-6">
          <button onClick={() => setCurrentRound(Math.max(1, currentRound - 1))} disabled={currentRound === 1} className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed">
            <ChevronLeft className="h-5 w-5 mr-1" /> Ronde précédente
          </button>
          <h3 className="text-xl font-semibold text-neutral-900">Ronde {round.numero} - {round.statut}</h3>
          <button onClick={() => setCurrentRound(Math.min(tournoiData.rondes.length, currentRound + 1))} disabled={currentRound === tournoiData.rondes.length} className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed">
            Ronde suivante <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {round.appariements.map((appariement, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 * index }} whileHover={{ scale: 1.02 }} className="bg-white rounded-lg shadow-md p-4 border border-neutral-200">
              <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-500 mb-2">Table {appariement.table}</div>
                <div className={`text-2xl font-bold ${appariement.resultat === "1-0" ? "text-success-600" : appariement.resultat === "0-1" ? "text-red-600" : appariement.resultat === "½-½" ? "text-accent-600" : "text-neutral-400"}`}>
                  {appariement.resultat || "À jouer"}
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className={`flex-1 ${appariement.resultat === "1-0" ? "font-semibold" : ""}`}>
                  <div className="text-neutral-900">{getPlayerName(appariement.blanc)}</div>
                  <div className="text-xs text-neutral-500">Blancs</div>
                </div>
                <div className="mx-4 text-neutral-400">vs</div>
                <div className={`flex-1 text-right ${appariement.resultat === "0-1" ? "font-semibold" : ""}`}>
                  <div className="text-neutral-900">{getPlayerName(appariement.noir)}</div>
                  <div className="text-xs text-neutral-500">Noirs</div>
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
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">{tournoiData.info.titre}</h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">Tournoi de parties lentes</p>
            </motion.div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">

              {/* SECTION NOUVELLE SAISON 2025/26 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden mb-8"
              >
                <button
                  onClick={() => setIsNewSeasonExpanded(prev => !prev)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 transition-colors"
                >
                  <h3 className="text-2xl font-semibold flex items-center">
                    <CalendarPlus className="h-6 w-6 mr-3" />
                    Championnat interne 2025/26 : Inscriptions
                  </h3>
                  <motion.svg animate={{ rotate: isNewSeasonExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {isNewSeasonExpanded && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-6 py-8">
                    <p className="text-neutral-700 mb-6">
                      La saison 2025-2026 de notre championnat interne approche ! Ce tournoi est l'événement interne phare de notre club, une occasion parfaite de se mesurer dans une ambiance amicale et compétitive.
                    </p>
                    <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                      <List className="h-6 w-6 mr-2" />
                      Informations clés
                    </h4>
                    <div className="space-y-3 mb-8">
                      {[
                        "<strong>Format :</strong> Tournoi en 7 rondes.",
                        "<strong>Homologation :</strong> Les parties seront comptabilisées pour le classement FIDE.",
                        "<strong>Début :</strong> Novembre 2025.",
                        "<strong>Fréquence :</strong> 1 ronde par mois, sur une soirée du club dédiée ou dans le délai de jeu indiqué.",
                        "<strong>Cadence :</strong> 45 minutes + 45 secondes par coup."
                      ].map((info, index) => (
                        <div key={index} className="flex items-start">
                          <ChevronRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-neutral-700" dangerouslySetInnerHTML={{ __html: info }}></p>
                        </div>
                      ))}
                    </div>
                    <div className="bg-primary-50 border-l-4 border-primary-500 rounded-r-lg p-4 mb-8">
                      <p className="font-semibold text-primary-800">
                        Date limite d'inscription : <span className="font-bold">15 octobre</span>.
                      </p>
                    </div>
                    <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                      <a href="https://forms.gle/BKNBX9XzUC7HhMQC7" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold shadow-lg">
                        <Edit className="h-5 w-5 mr-3" />
                        S'inscrire au tournoi
                      </a>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>

              {/* SECTION RÉSULTATS 2024/25 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => setIsPastSeasonExpanded(prev => !prev)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-neutral-600 to-neutral-800 text-white hover:from-neutral-700 hover:to-neutral-900 transition-colors"
                >
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Trophy className="h-6 w-6 mr-3" />
                    Résultats de la saison 2024/25
                  </h3>
                  <motion.svg animate={{ rotate: isPastSeasonExpanded ? 180 : 0 }} transition={{ duration: 0.3 }} className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {isPastSeasonExpanded && (
                  <motion.div initial={{ height: 0 }} animate={{ height: 'auto' }} exit={{ height: 0 }} className="px-6 py-8">
                    <div className="bg-gradient-to-r from-yellow-50 to-primary-50 rounded-xl p-6 border border-primary-200 mb-12">
                      <h4 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                        <Trophy className="h-6 w-6 mr-2" />Résultats du championnat
                      </h4>
                      <div className="space-y-3">
                        {podium.map((joueur) => (
                          <div key={joueur.id} className="flex items-center text-lg">
                            <span className="w-8">{joueur.rangAffiche}</span>
                            <span className="font-semibold text-neutral-900">{joueur.nom}</span>
                            <span className="ml-auto font-bold text-primary-800">{joueur.points} pts</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="mb-12">
                      <h4 className="text-xl font-bold text-neutral-900 mb-4 flex items-center">
                        <Award className="h-6 w-6 mr-2" />Résumé du déroulement
                      </h4>
                      <div className="prose prose-neutral max-w-none text-neutral-700 space-y-4">
                        <p><strong>Flavien Sola</strong> a dominé le tournoi de manière impressionnante, terminant invaincu avec 6,5 points sur 7. Ses victoires clés contre ses poursuivants directs, notamment Pierre-Marie Rappaz (ronde 3), ont rapidement scellé sa première place.</p>
                        <p>La lutte pour la deuxième place a été intense. <strong>Pierre-Marie Rappaz</strong> a su se relever après deux défaites consécutives à mi-parcours, en remportant ses trois derniers matchs pour s'assurer la médaille d'argent avec 5 points.</p>
                        <p><strong>Olivier Ulmann</strong>, quant à lui, a réalisé une solide performance pour prendre la troisième place. Son parcours inclut une nulle précieuse contre le champion à la ronde 5 et des victoires décisives qui lui ont permis de finir sur le podium avec 4,5 points.</p>
                      </div>
                    </div>
                    <div className="mb-12">
                      <h4 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                        <List className="h-6 w-6 mr-2" />Format du tournoi
                      </h4>
                      <div className="space-y-3">
                        {tournoiData.info.format.map((rule, index) => (
                          <motion.div key={index} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 * index }} className="flex items-start">
                            <ChevronRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <p className="text-neutral-700" dangerouslySetInnerHTML={{ __html: rule }}></p>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                        <Grid className="h-6 w-6 mr-2" />Classement détaillé et Rondes
                      </h4>
                      <div className="flex justify-center mb-8">
                        <div className="bg-neutral-100 rounded-lg p-1 inline-flex">
                          <button onClick={() => setViewMode('rounds')} className={`px-6 py-2 rounded-md flex items-center transition-colors ${viewMode === 'rounds' ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' : 'text-neutral-700 hover:bg-neutral-200'}`}>
                            <List className="h-5 w-5 mr-2" />Rondes
                          </button>
                          <button onClick={() => setViewMode('crosstable')} className={`px-6 py-2 rounded-md flex items-center transition-colors ${viewMode === 'crosstable' ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' : 'text-neutral-700 hover:bg-neutral-200'}`}>
                            <Grid className="h-5 w-5 mr-2" />Classement
                          </button>
                        </div>
                      </div>
                      <div className="bg-neutral-50 rounded-lg p-6">
                        {viewMode === 'rounds' ? renderRounds() : renderCrosstable()}
                      </div>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

