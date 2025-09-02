import { useState } from 'react'
import { motion } from 'framer-motion'
import { Users, Calendar, ExternalLink, Shield, Flag } from 'lucide-react'
import { Title, Meta } from 'react-head';

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
      isExpanded: true,
      teams: [
        {
          name: 'Valais 1',
          description: "Fraîchement promue de la 2 ligue fédérale lors saison 2024, l'équipe n'a su se maintenir face à l'adversité du meilleur échelon national.",
          resultsLink: {
            url: 'https://www.swisschess.ch/csg.html?old=L3R1cm5pZXJlL3NnbS5waHA_YWphaHI9MjAyNSZhbGlnYT0xJmFncnVwcGU9MTAxJmFyb3VuZD03',
            text: 'Résultats de Valais 1'
          }
        },
        {
          name: 'Valais 3',
          description: "Au terme d'une saison disputée pour le maintien en 1ère ligue régionale, Valais 3 se sauve de justesse en fin de saison.",
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
    { name: '1ère ligue fédérale', description: '8 joueurs par équipe', valaisTeam: 'Valais 1 (2024/25)' },
    { name: '2ème ligue fédérale', description: '8 joueurs par équipe' },
    { name: '1ère ligue régionale', description: '6 joueurs par équipe', valaisTeam: 'Valais 3 (2024/25)' },
    { name: '2ème ligue régionale', description: '5 joueurs par équipe' },
    { name: '3ème ligue régionale', description: '4 joueurs par équipe' }
  ]

  return (
    <>
      <Title>Championnat Suisse par Groupes (CSG) - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Tout savoir sur le Championnat Suisse par Groupes (CSG). Explorez la hiérarchie des ligues et suivez les résultats des équipes Valais engagées par le club." />
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
                CSG - Compétition nationale par équipes de clubs d'échecs
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
                          className={`flex items-center py-2 ${league.valaisTeam ? 'bg-primary-50 rounded-lg px-2 -mx-2' : ''
                            }`}
                        >
                          <div className="flex items-center flex-1">
                            <div className={`w-${index * 4} mr-2`} style={{ width: `${index * 16}px` }}></div>
                            {index > 0 && (
                              <div className="text-neutral-400 mr-2">└</div>
                            )}
                            <div className={`font-semibold ${league.valaisTeam ? 'text-primary-900' : 'text-neutral-800'
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
                  <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 my-8">
                    <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 mr-2" />
                      Répartition des équipes
                    </h3>
                    <div className="space-y-2 text-neutral-700">
                      <p>
                        Pour cette compétition, les joueurs du club de Sion sont répartis sous l'égide de la bannière <strong>Valais</strong>. Ce regroupement
                        est constitué de joueurs issus des clubs de Sion, Martigny, Bagnes et Monthey. Pendant la saison 2024-2025, les joueurs du club ont été engagés dans les équipes de :
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Valais 1</strong>, avec pour capitaine <strong>Simon Morand</strong>.</li>
                        <li><strong>Valais 3</strong>, avec pour capitaine <strong>Pierre-Marie Rappaz</strong>.</li>
                      </ul>
                    </div>
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
                            className="flex flex-col justify-between bg-gradient-to-br from-primary-50 to-accent-50 rounded-lg p-6 border border-primary-200"
                          >
                            {/* Groupe pour le contenu supérieur */}
                            <div>
                              <h3 className="text-xl font-semibold text-primary-900 mb-3 flex items-center">
                                <Shield className="h-5 w-5 mr-2" />
                                {team.name}
                              </h3>
                              <p className="text-neutral-700 mb-4">{team.description}</p>
                            </div>

                            {/* Groupe pour le bouton */}
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
    </>
  )
}