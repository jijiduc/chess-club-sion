import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, ChevronRight, ExternalLink, Shield, Flag } from 'lucide-react'

interface Team {
  name: string
  description: string
  resultsLink?: {
    url: string
    text: string
  }
}

interface Season {
  year: string
  isExpanded: boolean
  teams: Team[]
}

export default function CSG() {
  const [seasons, setSeasons] = useState<Season[]>([
    {
      year: '2025',
      isExpanded: false,
      teams: [
        {
          name: 'Valais 1',
          description: "L'équipe de Sion 1 à évoluée en 1LF en 2025. Fraîchement promue de la 2LF lors saison 2024, elle n'a su se maintenir face à l'adversité du meilleur échelon national.",
          resultsLink: {
            url: 'https://www.swisschess.ch/csg.html?old=L3R1cm5pZXJlL3NnbS5waHA_YWphaHI9MjAyNSZhbGlnYT0xJmFncnVwcGU9MTAxJmFyb3VuZD03',
            text: 'Résultats de Valais 1'
          }
        },
        {
          name: 'Valais 3',
          description: "Au terme d'une saison disputée pour le maintien en 1ère ligue régionale, Valais 3 termine antépénultième de son groupe.",
          resultsLink: {
            url: 'https://www.swisschess.ch/csg.html?old=L3R1cm5pZXJlL3NnbS5waHA_YWphaHI9MjAyNSZhcm91bmQ9NyZhbGlnYT0z',
            text: 'Résultats de Valais 3'
          }
        }
      ]
    }
  ])

  const toggleSeason = (yearToToggle: string) => {
    setSeasons(seasons.map(season => 
      season.year === yearToToggle 
        ? { ...season, isExpanded: !season.isExpanded }
        : season
    ))
  }

  const leagueStructure = [
    { name: '1ère ligue fédérale', description: '8 joueurs par équipe', valaisTeam: 'Valais 1 (2025)' },
    { name: '2ème ligue fédérale', description: '8 joueurs par équipe' },
    { name: '1ère ligue régionale', description: '6 joueurs par équipe', valaisTeam: 'Valais 3 (2025)' },
    { name: '2ème ligue régionale', description: '5 joueurs par équipe' },
    { name: '3ème ligue régionale', description: '4 joueurs par équipe' }
  ]

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
              Championnat Suisse par Groupes
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              CSG - Compétition nationale par équipes
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2" />
                <span>5 ligues hiérarchiques</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Bannière "Valais"</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2" />
                <span>Septembre - Avril</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <div className="prose prose-lg max-w-none">
                <p className="text-neutral-700 mb-6">
                  Le Championnat Suisse par Groupes (CSG) est une compétition par équipes structuré en 5 ligues, du
                  niveau régional au niveau national. Elle est organisée par la{' '}
                  <a href="https://www.swisschess.ch/home-fr.html" className="text-primary-600 hover:text-primary-700 underline">
                    Fédération Suisse des Echecs (FSE)
                  </a>.
                  Le championnat se déroule sur 7 rondes, de septembre à avril.
                </p>
                
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                    <Shield className="h-6 w-6 mr-2" />
                    Organisation des ligues
                  </h3>
                  <div className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Au niveau national</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>8 joueurs par équipe en 1ère et 2ème ligue fédérale</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Compétition au plus haut niveau suisse</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary-900 mb-2">Au niveau régional</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>6 joueurs en 1ère ligue régionale</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>5 joueurs en 2ème ligue régionale</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>4 joueurs en 3ème ligue régionale</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                {/* League Structure Tree */}
                <div className="my-8">
                  <h3 className="text-lg font-bold mb-4 text-neutral-900">Hiérarchie des ligues</h3>
                  <div className="bg-white rounded-lg border border-neutral-200 p-4">
                    {leagueStructure.map((league, index) => (
                      <motion.div
                        key={league.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className={`flex items-center py-2 ${
                          league.valaisTeam ? 'bg-primary-50 rounded-lg px-2 -mx-2' : ''
                        }`}
                      >
                        <div className="flex items-center flex-1">
                          <div className={`w-${index * 4} mr-2`} style={{ width: `${index * 16}px` }}></div>
                          {index > 0 && (
                            <div className="text-neutral-400 mr-2">└</div>
                          )}
                          <div className={`font-semibold ${
                            league.valaisTeam ? 'text-primary-900' : 'text-neutral-800'
                          }`}>
                            {league.name}
                          </div>
                          <div className="text-neutral-500 text-sm ml-2">
                            – {league.description}
                          </div>
                          {league.valaisTeam && (
                            <div className="ml-auto text-white text-xs px-3 py-1 rounded-full bg-primary-600 flex items-center">
                              <Flag className="w-3 h-3 mr-1" />
                              {league.valaisTeam}
                            </div>
                          )}
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary-50 border border-primary-200 rounded-lg p-6 mt-8">
                  <p className="text-neutral-700">
                    <strong className="text-primary-900">Note importante :</strong> Pour cette compétition, les joueurs du club de Sion sont répartis sous l'égide de la bannière
                    "Valais" qui regroupe les clubs de Sion, Martigny et Monthey.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Seasons Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Résultats par saison</h2>
          <div className="max-w-6xl mx-auto space-y-6">
            {seasons.map((season, index) => (
              <motion.div
                key={season.year}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Season Header */}
                <button
                  onClick={() => toggleSeason(season.year)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-primary-600 to-accent-600 text-white hover:from-primary-700 hover:to-accent-700 transition-colors"
                >
                  <h3 className="text-2xl font-semibold flex items-center">
                    <Calendar className="h-6 w-6 mr-3" />
                    Saison {season.year}
                  </h3>
                  <motion.svg
                    animate={{ rotate: season.isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </motion.svg>
                </button>

                {/* Season Content */}
                {season.isExpanded && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: 'auto' }}
                    exit={{ height: 0 }}
                    className="px-6 py-8"
                  >
                    <div className="grid md:grid-cols-2 gap-6">
                      {season.teams.map((team) => (
                        <motion.div
                          key={team.name}
                          whileHover={{ scale: 1.02 }}
                          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-200"
                        >
                          <h3 className="text-xl font-semibold text-primary-900 mb-3 flex items-center">
                            <Shield className="h-5 w-5 mr-2" />
                            {team.name}
                          </h3>
                          <p className="text-neutral-700 mb-4">{team.description}</p>
                          
                          {team.resultsLink && (
                            <div className="mt-4">
                              <motion.a
                                href={team.resultsLink.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="inline-flex items-center px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-md hover:from-primary-700 hover:to-accent-700 transition-colors"
                              >
                                <ExternalLink className="h-4 w-4 mr-2" />
                                {team.resultsLink.text}
                              </motion.a>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}

            {/* Historical Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl shadow-lg overflow-hidden"
            >
              <div className="px-6 py-4 bg-gradient-to-r from-neutral-700 to-neutral-800 text-white">
                <h3 className="text-2xl font-semibold">Historique</h3>
              </div>
              
              <div className="p-8">
                <div className="space-y-4 text-neutral-700 mb-6">
                  <p>
                    Le Club d'Echecs de Sion participe régulièrement au Championnat Suisse par Groupes à travers 
                    l'association "Valais" qui unit les forces des principaux clubs valaisans.
                  </p>
                  <p>
                    Les équipes valaisannes ont connu diverses fortunes au fil des années, évoluant entre les 
                    ligues régionales et nationales selon les performances et la disponibilité des joueurs.
                  </p>
                </div>
                <div className="text-center">
                  <motion.a
                    href="https://www.swisschess.ch/csg.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-md hover:from-primary-700 hover:to-accent-700 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Voir tous les résultats CSG sur le site de la FSE
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}