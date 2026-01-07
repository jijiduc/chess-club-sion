import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ChevronRight, ExternalLink, MapPin } from 'lucide-react';
import { Title, Meta } from 'react-head';
import TableOfContents from '../../components/navigation/TableOfContents';

const CSE: React.FC = () => {
  const [is2025Expanded, setIs2025Expanded] = useState(false);

  const leagueStructure = [
    { name: 'LNA', description: 'Ligue Nationale A - Élite des échecs suisses' },
    { name: 'LNB', description: 'Ligue Nationale B' },
    { name: '1ère ligue', description: 'Niveau régional supérieur' },
    { name: '2ème ligue', description: 'Niveau régional', sionTeam: 'Sion 1' },
    { name: '3ème ligue', description: 'Niveau régional', sionTeam: 'Sion 2' },
    { name: '4ème ligue', description: 'Niveau d\'entrée' }
  ];

  return (
    <>
      <Title>Championnat Suisse par Équipes (CSE) - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez le Championnat Suisse par Équipes (CSE). Informations sur la structure des ligues, le format de la compétition et les équipes engagées par le CE Sion." />
      <TableOfContents />

      <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-5xl font-bold mb-4">Championnat Suisse par Équipes</h1>
              <p className="text-xl text-blue-100 mb-8">
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
              <h2 id="structure" className="text-3xl font-bold text-center mb-12">Structure du championnat</h2>

              {/* Competition Explanation */}
              <div className="max-w-4xl mx-auto mb-12">
                <div className="bg-white rounded-xl shadow-lg p-8 border border-blue-100">
                  <h3 id="format" className="text-xl font-bold mb-4 text-neutral-900">Format de la compétition</h3>
                  <div className="space-y-4 text-neutral-700">
                    <p>
                      Le Championnat Suisse par Équipes (CSE/SMM) est une compétition officielle de la Fédération Suisse des Échecs
                      où les clubs s'affrontent par équipes de 6 à 8 joueurs.
                    </p>
                    <div className="grid md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Organisation</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>7 rondes de mars à septembre</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Matches à domicile et à l'extérieur</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>6 à 8 échiquiers par rencontre</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>Système de promotion/relégation</span>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-900 mb-2">Points et classement</h4>
                        <ul className="space-y-2 text-sm">
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Points de match (MP):</strong> 2 pts pour une victoire, 1 pt pour un nul</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span><strong>Points individuels (EP):</strong> Somme des résultats sur les échiquiers</span>
                          </li>
                          <li className="flex items-start">
                            <ChevronRight className="h-4 w-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                            <span>En cas d'égalité de MP, les EP départagent les équipes</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* League Structure Tree */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-100">
                  <h3 id="hierarchie" className="text-lg font-bold mb-4 text-neutral-900">Hiérarchie des ligues</h3>
                  <div className="space-y-3">
                    {leagueStructure.map((league, index) => (
                      <motion.div
                        key={league.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.05 * index }}
                        className={`flex items-center ${league.sionTeam ? 'bg-blue-50 rounded-lg p-2 -mx-2' : ''
                          }`}
                      >
                        <div className="flex items-center flex-1">
                          <div className={`w-${index * 4} mr-2`} style={{ width: `${index * 16}px` }}></div>
                          {index > 0 && (
                            <div className="text-neutral-400 mr-2">└</div>
                          )}
                          <div className={`font-semibold ${league.sionTeam ? 'text-blue-900' : 'text-neutral-800'}`}>
                            {league.name}
                          </div>
                          <div className="text-neutral-500 text-sm ml-2">
                            – {league.description}
                          </div>
                          {league.sionTeam && (
                            <div className={`ml-auto text-white text-xs px-3 py-1 rounded-full flex items-center ${league.sionTeam === 'Sion 1' ? 'bg-blue-700' : 'bg-blue-600'}`}>
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
                  <div className="bg-blue-50 rounded-xl p-6 my-8 border border-blue-100">
                    <h3 id="repartition" className="text-xl font-bold text-blue-900 mb-4 flex items-center">
                      <Users className="h-6 w-6 mr-2" />
                      Répartition des équipes 2026
                    </h3>
                    <div className="space-y-2 text-neutral-700">
                      <p>
                        Pour la saison 2026, le club a engagé deux équipes dans le championnat.
                      </p>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><strong>Sion 1</strong> (2ème ligue), avec pour capitaine <strong>Jeremy Duc</strong>.</li>
                        <li><strong>Sion 2</strong> (3ème ligue), avec pour capitaine <strong>Sandro Bétrisey</strong>.</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 2026 Season Schedule */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4">
            <h2 id="calendrier-2026" className="text-3xl font-bold text-center mb-12 text-blue-900">Saison 2026 - Calendrier & Résultats</h2>
            
            <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
              {/* Sion 1 Card */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-600"
              >
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">Sion 1</h3>
                      <p className="text-blue-600 font-medium">2ème Ligue - Ouest 1</p>
                    </div>
                    <div className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Groupe 407
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600 mb-2">
                     <Users className="h-4 w-4 mr-2" />
                     Capitaine : <span className="font-semibold text-neutral-900 ml-1">Jeremy Duc</span>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600">
                     <MapPin className="h-4 w-4 mr-2" />
                     Local : Rue des Châteaux 2, 1950 Sion
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50 text-neutral-500">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Ronde</th>
                        <th className="px-6 py-3 text-left font-semibold">Date</th>
                        <th className="px-6 py-3 text-left font-semibold">Adversaire</th>
                        <th className="px-6 py-3 text-center font-semibold">Lieu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="px-6 py-4 font-medium">1</td>
                        <td className="px-6 py-4 text-neutral-600">14.03.2026</td>
                        <td className="px-6 py-4">Bantiger - <span className="font-bold text-blue-700">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">2</td>
                        <td className="px-6 py-4 text-neutral-600">18.04.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-700">Sion</span> - Brig</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">3</td>
                        <td className="px-6 py-4 text-neutral-600">09.05.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-700">Sion</span> - Bern</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">4</td>
                        <td className="px-6 py-4 text-neutral-600">06.06.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-700">Sion</span> - Monthey</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">5</td>
                        <td className="px-6 py-4 text-neutral-600">20.06.2026</td>
                        <td className="px-6 py-4">Düdingen - <span className="font-bold text-blue-700">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">6</td>
                        <td className="px-6 py-4 text-neutral-600">22.08.2026</td>
                        <td className="px-6 py-4">Fribourg - <span className="font-bold text-blue-700">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">7</td>
                        <td className="px-6 py-4 text-neutral-600">12.09.2026</td>
                        <td className="px-6 py-4">Valais - <span className="font-bold text-blue-700">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>

              {/* Sion 2 Card */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden border-t-4 border-blue-400"
              >
                <div className="p-6 border-b border-neutral-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900">Sion 2</h3>
                      <p className="text-blue-500 font-medium">3ème Ligue - Ouest 2</p>
                    </div>
                    <div className="bg-blue-50 text-blue-600 text-xs font-bold px-3 py-1 rounded-full uppercase">
                      Groupe 514
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-neutral-600 mb-2">
                     <Users className="h-4 w-4 mr-2" />
                     Capitaine : <span className="font-semibold text-neutral-900 ml-1">Sandro Bétrisey</span>
                  </div>
                   <div className="flex items-center text-sm text-neutral-600">
                     <MapPin className="h-4 w-4 mr-2" />
                     Local : Rue des Châteaux 2, 1950 Sion
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-neutral-50 text-neutral-500">
                      <tr>
                        <th className="px-6 py-3 text-left font-semibold">Ronde</th>
                        <th className="px-6 py-3 text-left font-semibold">Date</th>
                        <th className="px-6 py-3 text-left font-semibold">Adversaire</th>
                        <th className="px-6 py-3 text-center font-semibold">Lieu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-neutral-100">
                      <tr>
                        <td className="px-6 py-4 font-medium">1</td>
                        <td className="px-6 py-4 text-neutral-600">14.03.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-600">Sion</span> - Fribourg</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">2</td>
                        <td className="px-6 py-4 text-neutral-600">18.04.2026</td>
                        <td className="px-6 py-4">Vevey - <span className="font-bold text-blue-600">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">3</td>
                        <td className="px-6 py-4 text-neutral-600">09.05.2026</td>
                        <td className="px-6 py-4">Romont - <span className="font-bold text-blue-600">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">4</td>
                        <td className="px-6 py-4 text-neutral-600">06.06.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-600">Sion</span> - Valais</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">5</td>
                        <td className="px-6 py-4 text-neutral-600">20.06.2026</td>
                        <td className="px-6 py-4">Grand Echiquier - <span className="font-bold text-blue-600">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">6</td>
                        <td className="px-6 py-4 text-neutral-600">22.08.2026</td>
                        <td className="px-6 py-4"><span className="font-bold text-blue-600">Sion</span> - Bulle</td>
                        <td className="px-6 py-4 text-center text-neutral-500">Dom.</td>
                      </tr>
                      <tr>
                        <td className="px-6 py-4 font-medium">7</td>
                        <td className="px-6 py-4 text-neutral-600">12.09.2026</td>
                        <td className="px-6 py-4">Crans-Montana - <span className="font-bold text-blue-600">Sion</span></td>
                        <td className="px-6 py-4 text-center text-neutral-500">Ext.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 2025 Archives Section */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
             <div className="max-w-6xl mx-auto">
                <motion.div
                  className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-200"
                >
                  <button
                    onClick={() => setIs2025Expanded(!is2025Expanded)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-neutral-100 hover:bg-neutral-200 transition-colors"
                  >
                    <h3 id="archives-2025" className="text-xl font-semibold text-neutral-800 flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-neutral-500" />
                      Archives Saison 2025
                    </h3>
                    <motion.svg
                      animate={{ rotate: is2025Expanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-5 h-5 text-neutral-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {is2025Expanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="p-8 bg-white"
                    >
                      <div className="grid lg:grid-cols-2 gap-8">
                        {/* 1ère ligue standings */}
                        <div className="rounded-xl overflow-hidden border border-neutral-200">
                          <div className="bg-neutral-800 text-white p-4">
                            <h3 className="font-bold">1ère ligue - Groupe Ouest 2025</h3>
                            <p className="text-sm opacity-80">Classement final</p>
                          </div>
                          <div className="p-4 overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-left text-neutral-600 border-b">
                                  <th className="pb-2">Rang</th>
                                  <th className="pb-2">Club</th>
                                  <th className="pb-2 text-center">MP</th>
                                  <th className="pb-2 text-center">EP</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b bg-green-50">
                                  <td className="py-2 font-semibold">1.</td>
                                  <td className="py-2 font-semibold">Genève 2</td>
                                  <td className="py-2 text-center font-bold">12</td>
                                  <td className="py-2 text-center">37</td>
                                </tr>
                                <tr className="border-b"><td className="py-2">2.</td><td className="py-2">Grand Echiquier 1</td><td className="py-2 text-center">9</td><td className="py-2 text-center">31</td></tr>
                                <tr className="border-b"><td className="py-2">3.</td><td className="py-2">Echallens 2</td><td className="py-2 text-center">9</td><td className="py-2 text-center">28½</td></tr>
                                <tr className="border-b"><td className="py-2">4.</td><td className="py-2">Fribourg 1</td><td className="py-2 text-center">8</td><td className="py-2 text-center">29½</td></tr>
                                <tr className="border-b"><td className="py-2">5.</td><td className="py-2">Köniz-Bubenberg 1</td><td className="py-2 text-center">8</td><td className="py-2 text-center">28</td></tr>
                                <tr className="border-b"><td className="py-2">6.</td><td className="py-2">Neuchâtel 1</td><td className="py-2 text-center">7</td><td className="py-2 text-center">29½</td></tr>
                                <tr className="font-semibold border-b bg-red-50 text-red-900">
                                  <td className="py-2 pl-2">7.</td>
                                  <td className="py-2">Sion 1</td>
                                  <td className="py-2 text-center">2</td>
                                  <td className="py-2 text-center">20</td>
                                </tr>
                                <tr className="bg-red-50 text-neutral-600"><td className="py-2">8.</td><td className="py-2">Valais 1</td><td className="py-2 text-center">1</td><td className="py-2 text-center">20½</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>

                        {/* 3ème ligue standings */}
                        <div className="rounded-xl overflow-hidden border border-neutral-200">
                          <div className="bg-neutral-800 text-white p-4">
                            <h3 className="font-bold">3ème ligue - Groupe Ouest 2 2025</h3>
                            <p className="text-sm opacity-80">Classement final</p>
                          </div>
                          <div className="p-4 overflow-x-auto">
                            <table className="w-full text-sm">
                              <thead>
                                <tr className="text-left text-neutral-600 border-b">
                                  <th className="pb-2">Rang</th>
                                  <th className="pb-2">Club</th>
                                  <th className="pb-2 text-center">MP</th>
                                  <th className="pb-2 text-center">EP</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr className="border-b bg-green-50">
                                  <td className="py-2 font-semibold">1.</td>
                                  <td className="py-2 font-semibold">Monthey 1</td>
                                  <td className="py-2 text-center font-bold">12</td>
                                  <td className="py-2 text-center">30½</td>
                                </tr>
                                <tr className="border-b"><td className="py-2">2.</td><td className="py-2">Crazy Horse 1</td><td className="py-2 text-center">10</td><td className="py-2 text-center">27</td></tr>
                                <tr className="border-b"><td className="py-2">3.</td><td className="py-2">Payerne 2</td><td className="py-2 text-center">9</td><td className="py-2 text-center">28½</td></tr>
                                <tr className="border-b"><td className="py-2">4.</td><td className="py-2">Grand Echiquier 2</td><td className="py-2 text-center">9</td><td className="py-2 text-center">21½</td></tr>
                                <tr className="border-b"><td className="py-2">5.</td><td className="py-2">Valais 2</td><td className="py-2 text-center">7</td><td className="py-2 text-center">22½</td></tr>
                                <tr className="font-semibold border-b text-blue-900">
                                  <td className="py-2 pl-2">6.</td>
                                  <td className="py-2">Sion 2</td>
                                  <td className="py-2 text-center">5</td>
                                  <td className="py-2 text-center">17</td>
                                </tr>
                                <tr className="border-b bg-red-50 text-neutral-600"><td className="py-2">7.</td><td className="py-2">Bulle 3</td><td className="py-2 text-center">2</td><td className="py-2 text-center">11</td></tr>
                                <tr className="bg-red-50 text-neutral-600"><td className="py-2">8.</td><td className="py-2">Crans-Montana 2</td><td className="py-2 text-center">2</td><td className="py-2 text-center">10</td></tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
             </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 text-white rounded-2xl p-8 text-center">
              <h3 id="infos-officielles" className="text-2xl font-bold mb-4">Informations officielles</h3>
              <p className="text-neutral-300 mb-6">
                Retrouvez tous les résultats et classements sur le site de la Fédération Suisse des Échecs
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://www.swisschess.ch/cse.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-neutral-900 px-6 py-3 rounded-lg font-semibold hover:bg-neutral-100 transition-colors flex items-center space-x-2"
                >
                  <span>Site officiel du CSE</span>
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CSE;
