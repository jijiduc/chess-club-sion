import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, ChevronRight, ChevronLeft, Medal, Clock, Award, Grid, List } from 'lucide-react'

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

// Données du tournoi
const tournoiData = {
  info: {
    titre: "Championnat interne du club",
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
    { id: 5, nom: "Cortada-Garcia Joan", elo: 1824, title: "" },
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
      statut: "terminée",
      appariements: [
        { table: 1, blanc: 4, noir: 1, resultat: "0-1" },
        { table: 2, blanc: 2, noir: 3, resultat: "0-1"},
        { table: 3, blanc: 7, noir: 6, resultat: "0-1" },
        { table: 4, blanc: 8, noir: 5, resultat: "0-1" }
      ]
    },
    {
      numero: 5,
      statut: "terminée",
      appariements: [
        { table: 1, blanc: 1, noir: 6, resultat: "½-½" },
        { table: 2, blanc: 5, noir: 4, resultat: "½-½" },
        { table: 3, blanc: 3, noir: 8, resultat: "1-0" },
        { table: 4, blanc: 7, noir: 2, resultat: "0-1" }
      ]
    },
    {
      numero: 6,
      statut: "terminée",
      appariements: [
        { table: 1, blanc: 1, noir: 7, resultat: "1-0" },
        { table: 2, blanc: 6, noir: 4, resultat: "1-0" },
        { table: 3, blanc: 5, noir: 3, resultat: "1-0" },
        { table: 4, blanc: 2, noir: 8, resultat: "1-0" }
      ]
    },
    {
      numero: 7,
      statut: "terminée",
      appariements: [
        { table: 1, blanc: 8, noir: 1, resultat: "0-1" },
        { table: 2, blanc: 3, noir: 6, resultat: "1-0" },
        { table: 3, blanc: 2, noir: 5, resultat: "1-0" },
        { table: 4, blanc: 4, noir: 7, resultat: "1-0" }
      ]
    }
  ]
}

export default function InternalTournament() {
  // Trouver la ronde en cours ou la dernière ronde terminée
  const getRondeInitiale = () => {
    const rondeEnCours = tournoiData.rondes.find(r => r.statut === "en cours")
    if (rondeEnCours) return rondeEnCours.numero
    
    const rondesTerminees = tournoiData.rondes
      .filter(r => r.statut === "terminée")
      .sort((a, b) => b.numero - a.numero)
    
    return rondesTerminees.length > 0 ? rondesTerminees[0].numero : 1
  }

  const [currentRound, setCurrentRound] = useState(getRondeInitiale())
  const [viewMode, setViewMode] = useState<'rounds' | 'crosstable'>('crosstable')
  const [isExpanded, setIsExpanded] = useState(true)

  const toggleExpanded = () => {
    setIsExpanded(prev => !prev)
  }

  // Calcul des scores
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
    }))

    // Calculer les points pour chaque joueur - uniquement pour les parties terminées
    tournoiData.rondes.forEach(ronde => {
      if (ronde.statut === "terminée") {
        ronde.appariements.forEach(appariement => {
          const idBlanc = appariement.blanc
          const idNoir = appariement.noir
          const resultat = appariement.resultat

          if (resultat === "1-0") {
            scores[idBlanc - 1].points += 1
            scores[idBlanc - 1].resultats[idNoir] = "1"
            scores[idNoir - 1].resultats[idBlanc] = "0"
          } else if (resultat === "0-1") {
            scores[idNoir - 1].points += 1
            scores[idBlanc - 1].resultats[idNoir] = "0"
            scores[idNoir - 1].resultats[idBlanc] = "1"
          } else if (resultat === "½-½") {
            scores[idBlanc - 1].points += 0.5
            scores[idNoir - 1].points += 0.5
            scores[idBlanc - 1].resultats[idNoir] = "½"
            scores[idNoir - 1].resultats[idBlanc] = "½"
          }

          scores[idBlanc - 1].adversaires.push(idNoir)
          scores[idNoir - 1].adversaires.push(idBlanc)
        })
      }
    })

    // Calculer Buchholz
    scores.forEach(joueur => {
      joueur.buchholz = joueur.adversaires.reduce((sum, advId) => {
        return sum + scores[advId - 1].points
      }, 0)
    })

    // Calculer Buchholz Sum
    scores.forEach(joueur => {
      joueur.buchholzSum = joueur.adversaires.reduce((sum, advId) => {
        return sum + scores[advId - 1].buchholz
      }, 0)
    })

    // Trier par points, puis par Buchholz, puis par Buchholz Sum
    scores.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points
      if (b.buchholz !== a.buchholz) return b.buchholz - a.buchholz
      return b.buchholzSum - a.buchholzSum
    })

    // Assigner les rangs
    scores.forEach((joueur, index) => {
      joueur.rang = index + 1
      if (index === 0) joueur.rangAffiche = "🥇"
      else if (index === 1) joueur.rangAffiche = "🥈"
      else if (index === 2) joueur.rangAffiche = "🥉"
      else joueur.rangAffiche = `${index + 1}`
    })

    return scores
  }

  const scores = calculateScores()

  const getPlayerName = (id: number) => {
    const player = tournoiData.joueurs.find(j => j.id === id)
    return player ? player.nom : ""
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
                <th key={j.id} className="px-3 py-3 text-center font-semibold min-w-[40px]">
                  {j.id}
                </th>
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
                <td className="px-4 py-3 font-medium">
                  <span className="flex items-center">
                    {score.rangAffiche}
                  </span>
                </td>
                <td className="px-4 py-3 font-medium text-neutral-900">{score.nom}</td>
                <td className="px-4 py-3 text-center text-neutral-600">{score.elo}</td>
                {tournoiData.joueurs.map(j => (
                  <td key={j.id} className="px-3 py-3 text-center">
                    {score.id === j.id ? (
                      <span className="text-neutral-400">X</span>
                    ) : (
                      <span className={`font-medium ${
                        score.resultats[j.id] === "1" ? "text-success-600" :
                        score.resultats[j.id] === "0" ? "text-red-600" :
                        score.resultats[j.id] === "½" ? "text-accent-600" :
                        "text-neutral-300"
                      }`}>
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
    const round = tournoiData.rondes[currentRound - 1]
    if (!round) return null

    return (
      <div className="space-y-6">
        {/* Round Navigation */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={() => setCurrentRound(Math.max(1, currentRound - 1))}
            disabled={currentRound === 1}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="h-5 w-5 mr-1" />
            Ronde précédente
          </button>
          
          <h3 className="text-xl font-semibold text-neutral-900">
            Ronde {round.numero} - {round.statut}
          </h3>
          
          <button
            onClick={() => setCurrentRound(Math.min(tournoiData.rondes.length, currentRound + 1))}
            disabled={currentRound === tournoiData.rondes.length}
            className="flex items-center px-4 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors disabled:bg-neutral-300 disabled:cursor-not-allowed"
          >
            Ronde suivante
            <ChevronRight className="h-5 w-5 ml-1" />
          </button>
        </div>

        {/* Pairings */}
        <div className="grid md:grid-cols-2 gap-4">
          {round.appariements.map((appariement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-lg shadow-md p-4 border border-neutral-200"
            >
              <div className="flex items-center justify-between">
                <div className="text-sm text-neutral-500 mb-2">Table {appariement.table}</div>
                <div className={`text-2xl font-bold ${
                  appariement.resultat === "1-0" ? "text-success-600" :
                  appariement.resultat === "0-1" ? "text-red-600" :
                  appariement.resultat === "½-½" ? "text-accent-600" :
                  "text-neutral-400"
                }`}>
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
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              {tournoiData.info.titre}
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Tournoi de parties lentes
            </p>
          </motion.div>
        </div>
      </section>

      {/* Tournament Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            
            {/* Unified Tournament Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <button
                onClick={toggleExpanded}
                className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 transition-colors"
              >
                <h3 className="text-2xl font-semibold flex items-center">
                  <Trophy className="h-6 w-6 mr-3" />
                  Tournoi interne de la saison 2024/25
                </h3>
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </button>

              {isExpanded && (
                <motion.div
                  initial={{ height: 0 }}
                  animate={{ height: 'auto' }}
                  exit={{ height: 0 }}
                  className="px-6 py-8"
                >
                  {/* Format Rules */}
                  <div className="mb-12">
                    <h4 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                      <Award className="h-6 w-6 mr-2" />
                      Règles du tournoi
                    </h4>
                    <div className="space-y-3 mb-8">
                      {tournoiData.info.format.map((rule, index) => (
                        <motion.div 
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.1 * index }}
                          className="flex items-start"
                        >
                          <ChevronRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <p className="text-neutral-700" dangerouslySetInnerHTML={{ __html: rule }}></p>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-gradient-to-r from-yellow-50 to-primary-50 rounded-xl p-6 border border-primary-200">
                      <h5 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                        <Medal className="h-6 w-6 mr-2" />
                        Prix du tournoi
                      </h5>
                      <div className="space-y-2">
                        {tournoiData.info.prix.map((prix, index) => (
                          <div 
                            key={index} 
                            className="flex items-start"
                          >
                            <Medal className={`h-5 w-5 mr-2 flex-shrink-0 mt-0.5 ${
                              index === 0 ? 'text-yellow-500' :
                              index === 1 ? 'text-neutral-400' :
                              'text-primary-600'
                            }`} />
                            <p className="text-neutral-700" dangerouslySetInnerHTML={{ __html: prix }}></p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Results Section */}
                  <div>
                    <h4 className="text-xl font-bold text-neutral-900 mb-6 flex items-center">
                      <Trophy className="h-6 w-6 mr-2" />
                      Classement et Rondes
                    </h4>

                    {/* View Toggle */}
                    <div className="flex justify-center mb-8">
                      <div className="bg-neutral-100 rounded-lg p-1 inline-flex">
                        <button
                          onClick={() => setViewMode('rounds')}
                          className={`px-6 py-2 rounded-md flex items-center transition-colors ${
                            viewMode === 'rounds' 
                              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' 
                              : 'text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          <List className="h-5 w-5 mr-2" />
                          Rondes
                        </button>
                        <button
                          onClick={() => setViewMode('crosstable')}
                          className={`px-6 py-2 rounded-md flex items-center transition-colors ${
                            viewMode === 'crosstable' 
                              ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' 
                              : 'text-neutral-700 hover:bg-neutral-200'
                          }`}
                        >
                          <Grid className="h-5 w-5 mr-2" />
                          Classement
                        </button>
                      </div>
                    </div>

                    {/* Content */}
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
  )
}