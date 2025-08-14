import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ChevronRight, ExternalLink} from 'lucide-react';


const CSE: React.FC = () => {
  const leagueStructure = [
    { name: 'LNA', description: 'Ligue Nationale A - Élite des échecs suisses' },
    { name: 'LNB', description: 'Ligue Nationale B' },
    { name: '1ère ligue', description: 'Niveau régional supérieur', sionTeam: 'Sion 1' },
    { name: '2ème ligue', description: 'Niveau régional' },
    { name: '3ème ligue', description: 'Niveau régional', sionTeam: 'Sion 2' },
    { name: '4ème ligue', description: 'Niveau d\'entrée' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-accent-900 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-4">Championnat Suisse par Équipes</h1>
            <p className="text-xl text-primary-100 mb-8">
              CSE - Compétition nationale par équipes de clubs d'échecs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2">
                <Trophy className="h-5 w-5" />
                <span>Compétition officielle FSE</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2">
                <Users className="h-5 w-5" />
                <span>6 à 8 joueurs par équipe</span>
              </div>
              <div className="bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full flex items-center space-x-2">
                <Calendar className="h-5 w-5" />
                <span>Mars à Septembre</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Championship Structure and Explanation */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">Structure du championnat</h2>
            
            {/* Competition Explanation */}
            <div className="max-w-4xl mx-auto mb-12">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-xl font-bold mb-4 text-neutral-900">Format de la compétition</h3>
                <div className="space-y-4 text-neutral-700">
                  <p>
                    Le Championnat Suisse par Équipes (CSE/SMM) est une compétition officielle de la Fédération Suisse des Échecs 
                    où les clubs s'affrontent par équipes de 6 à 8 joueurs.
                  </p>
                  <div className="grid md:grid-cols-2 gap-6 mt-6">
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">Organisation</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>7 rondes de mars à septembre</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Matches à domicile et à l'extérieur</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>6 à 8 échiquiers par rencontre</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>Système de promotion/relégation</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary-900 mb-2">Points et classement</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Points de match:</strong> 2 pts pour une victoire, 1 pt pour un nul</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span><strong>Points individuels:</strong> Somme des résultats sur les 8 échiquiers</span>
                        </li>
                        <li className="flex items-start">
                          <ChevronRight className="h-4 w-4 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                          <span>En cas d'égalité, les points individuels départagent</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* League Structure Tree */}
            <div className="max-w-3xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4 text-neutral-900">Hiérarchie des ligues</h3>
                <div className="space-y-3">
                  {leagueStructure.map((league, index) => (
                    <motion.div
                      key={league.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                      className={`flex items-center ${
                        league.sionTeam ? 'bg-primary-50 rounded-lg p-2 -mx-2' : ''
                      }`}
                    >
                      <div className="flex items-center flex-1">
                        <div className={`w-${index * 4} mr-2`} style={{ width: `${index * 16}px` }}></div>
                        {index > 0 && (
                          <div className="text-neutral-400 mr-2">└</div>
                        )}
                        <div className={`font-semibold ${
                          league.sionTeam ? 'text-primary-900' : 'text-neutral-800'
                        }`}>
                          {league.name}
                        </div>
                        <div className="text-neutral-500 text-sm ml-2">
                          – {league.description}
                        </div>
                        {league.sionTeam && (
                          <div className={`ml-auto text-white text-xs px-3 py-1 rounded-full flex items-center ${
                            league.sionTeam === 'Sion 1' ? 'bg-accent-600' : 'bg-primary-600'
                          }`}>
                            <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            {league.sionTeam}
                          </div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 my-8">
                  <h3 className="text-xl font-bold text-primary-900 mb-4 flex items-center">
                    <Users className="h-6 w-6 mr-2" />
                    Répartition des équipes
                  </h3>
                  <div className="space-y-2 text-neutral-700">
                    <p>
                      Pour la saison 2025, le club a engagé deux équipes dans le championnat.
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                      <li><strong>Sion 1</strong>, avec pour capitaine <strong>Pierre-Marie Rappaz</strong>.</li>
                      <li><strong>Sion 2</strong>, avec pour capitaine <strong>Sandro Bétrisey</strong>.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Standings */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Classements actuels</h2>
          <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* 1ère ligue standings */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">1ère ligue - Groupe Ouest</h3>
                <p className="text-sm opacity-90">Après 5 rondes</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-neutral-600 border-b">
                      <th className="pb-2">Pos</th>
                      <th className="pb-2">Équipe</th>
                      <th className="pb-2 text-center">Pts match</th>
                      <th className="pb-2 text-center">Pts ind.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1</td>
                      <td className="py-2">Genève 2</td>
                      <td className="py-2 text-center font-semibold">8</td>
                      <td className="py-2 text-center">24½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2</td>
                      <td className="py-2">Echallens 2</td>
                      <td className="py-2 text-center font-semibold">8</td>
                      <td className="py-2 text-center">22½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">3</td>
                      <td className="py-2">Grand Echiquier 1</td>
                      <td className="py-2 text-center font-semibold">7</td>
                      <td className="py-2 text-center">24½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4</td>
                      <td className="py-2">Köniz-Bubenberg 1</td>
                      <td className="py-2 text-center font-semibold">6</td>
                      <td className="py-2 text-center">20</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">5</td>
                      <td className="py-2">Neuchâtel 1</td>
                      <td className="py-2 text-center font-semibold">5</td>
                      <td className="py-2 text-center">18½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">6</td>
                      <td className="py-2">Fribourg 1</td>
                      <td className="py-2 text-center font-semibold">4</td>
                      <td className="py-2 text-center">19</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">7</td>
                      <td className="py-2">Valais 1</td>
                      <td className="py-2 text-center font-semibold">1</td>
                      <td className="py-2 text-center">16½</td>
                    </tr>
                    <tr className="bg-red-50 font-semibold">
                      <td className="py-2">8</td>
                      <td className="py-2 text-red-900">Sion 1</td>
                      <td className="py-2 text-center text-red-900">1</td>
                      <td className="py-2 text-center text-red-900">14½</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* 3ème ligue standings */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-gradient-to-r from-accent-600 to-primary-600 text-white p-4">
                <h3 className="text-xl font-bold">3ème ligue - Groupe Ouest 2</h3>
                <p className="text-sm opacity-90">Après 5 rondes</p>
              </div>
              <div className="p-6">
                <table className="w-full">
                  <thead>
                    <tr className="text-left text-neutral-600 border-b">
                      <th className="pb-2">Pos</th>
                      <th className="pb-2">Équipe</th>
                      <th className="pb-2 text-center">Pts match</th>
                      <th className="pb-2 text-center">Pts ind.</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-2">1</td>
                      <td className="py-2">Monthey 1</td>
                      <td className="py-2 text-center font-semibold">8</td>
                      <td className="py-2 text-center">21½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">2</td>
                      <td className="py-2">Crazy Horse 1</td>
                      <td className="py-2 text-center font-semibold">8</td>
                      <td className="py-2 text-center">20</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">3</td>
                      <td className="py-2">Payerne 2</td>
                      <td className="py-2 text-center font-semibold">6</td>
                      <td className="py-2 text-center">21½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">4</td>
                      <td className="py-2">Valais 2</td>
                      <td className="py-2 text-center font-semibold">5</td>
                      <td className="py-2 text-center">16½</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">5</td>
                      <td className="py-2 text-yellow-900">Grand Echiquier 2</td>
                      <td className="py-2 text-center font-semibold">5</td>
                      <td className="py-2 text-center">12</td>
                    </tr>
                    <tr className="bg-yellow-50 font-semibold">
                      <td className="py-2">6</td>
                      <td className="py-2">Sion 2</td>
                      <td className="py-2 text-center text-yellow-900">4</td>
                      <td className="py-2 text-center text-yellow-900">13</td>
                    </tr>t
                    <tr className="border-b">
                      <td className="py-2">7</td>
                      <td className="py-2">Crans-Montana 2</td>
                      <td className="py-2 text-center font-semibold">2</td>
                      <td className="py-2 text-center">8</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2">8</td>
                      <td className="py-2">Bulle 3</td>
                      <td className="py-2 text-center font-semibold">2</td>
                      <td className="py-2 text-center">7½</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Links Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-2xl p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Informations officielles</h3>
            <p className="text-neutral-300 mb-6">
              Retrouvez tous les résultats et classements sur le site de la Fédération Suisse des Échecs
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhZ3J1cHBlPTMwNCZhbGlnYT0zJmFyb3VuZD01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors flex items-center space-x-2"
              >
                <span>Résultats de Sion 1</span>
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.swisschess.ch/cse.html?old=L3R1cm5pZXJlL3NtbS5waHA_YWphaHI9MjAyNSZhZ3J1cHBlPTUxNCZhbGlnYT01JmFyb3VuZD01"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors flex items-center space-x-2"
              >
                <span>Résultats de Sion 2</span>
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CSE;