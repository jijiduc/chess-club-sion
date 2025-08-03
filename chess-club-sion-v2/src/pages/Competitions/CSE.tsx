import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Users, Calendar, ChevronRight, ExternalLink, Medal, MapPin } from 'lucide-react';

interface TeamResult {
  round: number;
  date: string;
  opponent: string;
  venue: 'home' | 'away';
  location: string;
  result: string;
  boards: {
    player: string;
    opponent: string;
    result: string;
    playerElo?: number;
    opponentElo?: number;
  }[];
}

interface TeamData {
  name: string;
  league: string;
  captain: string;
  players: string[];
  currentSeason: string;
  results: TeamResult[];
}

const CSE: React.FC = () => {
  const [selectedTeam, setSelectedTeam] = useState<'sion1' | 'sion2'>('sion1');

  const teams: Record<'sion1' | 'sion2', TeamData> = {
    sion1: {
      name: 'Sion 1',
      league: '1ère ligue',
      captain: 'Pierre-Marie Rappaz',
      players: [
        'Christophe Sochacki (2458)',
        'Flavien Sola (2167)',
        'Vlad Popescu (1990)',
        'Jean-Michel Paladini (1983)',
        'Pierre-M. Rappaz (1933)',
        'Pierre-Marie Rappaz (1933)',
        'Yves Roduit (1910)',
        'Max Chappaz (1904)',
        'Yann Bourban (1885)',
        'Jean-Yves Riand (1877)',
        'Jeremy Duc (1829)',
        'Alexandre Briguet (1828)',
        'Olivier Crettenand (1826)',
        'Joan Cortada Garcia (1824)',
        'Olivier Ulmann (1788)',
        'Claude Bétrisey (1697)'
      ],
      currentSeason: '2024-2025',
      results: [
        {
          round: 1,
          date: '22.03.2025',
          opponent: 'Grand Echiquier 1',
          venue: 'home',
          location: 'Sion',
          result: '1½-6½',
          boards: [
            { player: 'Flavien Sola', opponent: 'Guillaume Chauvon', result: '0-1', playerElo: 2167, opponentElo: 2111 },
            { player: 'Vlad Popescu', opponent: 'Ferran Rocamora Martorell', result: '0-1', playerElo: 1990, opponentElo: 2111 },
            { player: 'Pierre-M. Rappaz', opponent: 'Jonathan Jaccard', result: '½-½', playerElo: 1933, opponentElo: 1953 },
            { player: 'Jean-Yves Riand', opponent: 'Jean-Manuel Segura', result: '½-½', playerElo: 1877, opponentElo: 2090 },
            { player: 'Max Chappaz', opponent: 'Sébastien Vasey', result: '0-1', playerElo: 1904, opponentElo: 1966 },
            { player: 'Yves Roduit', opponent: 'Vincent Conrad', result: '0-1', playerElo: 1910, opponentElo: 1904 },
            { player: 'Olivier Ulmann', opponent: 'Pierpaolo Ranieri', result: '0-1', playerElo: 1788, opponentElo: 1891 },
            { player: 'Jeremy Duc', opponent: 'Mathis Soubeyrand', result: '½-½', playerElo: 1829, opponentElo: 1533 }
          ]
        },
        {
          round: 2,
          date: '05.04.2025',
          opponent: 'Fribourg 1',
          venue: 'away',
          location: 'Fribourg',
          result: '5½-2½',
          boards: [
            { player: 'Vlad Popescu', opponent: 'Sylvain Julmy', result: '0-1', playerElo: 1990, opponentElo: 2187 },
            { player: 'Max Chappaz', opponent: 'Yves Deschenaux', result: '½-½', playerElo: 1904, opponentElo: 2121 },
            { player: 'Olivier Ulmann', opponent: 'Bernard Deschenaux', result: '0-1', playerElo: 1788, opponentElo: 2002 },
            { player: 'Jean-Michel Paladini', opponent: 'Thierry Bonferroni', result: '½-½', playerElo: 1983, opponentElo: 1954 },
            { player: 'Claude Bétrisey', opponent: 'Achim Schneuwly', result: '0-1', playerElo: 1697, opponentElo: 1930 },
            { player: 'Jean-Yves Riand', opponent: 'Raphaël Perrin', result: '0-1', playerElo: 1877, opponentElo: 1944 },
            { player: 'Olivier Crettenand', opponent: 'Jean-Pierre Dorand', result: '½-½', playerElo: 1826, opponentElo: 1800 },
            { player: 'Yves Roduit', opponent: 'Marius Cornée', result: '1-0', playerElo: 1910, opponentElo: 1894 }
          ]
        },
        {
          round: 3,
          date: '26.04.2025',
          opponent: 'Köniz-Bubenberg 1',
          venue: 'home',
          location: 'Sion',
          result: '3-5',
          boards: [
            { player: 'Jean-Yves Riand', opponent: 'Igor Yarmonov', result: '0-1', playerElo: 1877, opponentElo: 2342 },
            { player: 'Jeremy Duc', opponent: 'Mike Jäger', result: '0-1', playerElo: 1829, opponentElo: 2114 },
            { player: 'Flavien Sola', opponent: 'Gabriel Vergelin Soler', result: '1-0', playerElo: 2167, opponentElo: 1950 },
            { player: 'Jean-Michel Paladini', opponent: 'Hansjürg Känel', result: '0-1', playerElo: 1983, opponentElo: 2226 },
            { player: 'Vlad Popescu', opponent: 'Jörg Brauchli', result: '½-½', playerElo: 1990, opponentElo: 1915 },
            { player: 'Yves Roduit', opponent: 'Sandor Kaszas', result: '0-1', playerElo: 1910, opponentElo: 2008 },
            { player: 'Yann Bourban', opponent: 'Thomas Mani', result: '½-½', playerElo: 1885, opponentElo: 1949 },
            { player: 'Olivier Ulmann', opponent: 'Marc Tillmann', result: '1-0', playerElo: 1788, opponentElo: 1921 }
          ]
        },
        {
          round: 4,
          date: '17.05.2025',
          opponent: 'Neuchâtel 1',
          venue: 'home',
          location: 'Sion',
          result: '3½-4½',
          boards: [
            { player: 'Christophe Sochacki', opponent: 'Raphael Erne', result: '0-1', playerElo: 2458, opponentElo: 2164 },
            { player: 'Jean-Michel Paladini', opponent: 'Robin Voland', result: '0-1', playerElo: 1983, opponentElo: 2057 },
            { player: 'Flavien Sola', opponent: 'Roland Hauser', result: '1-0', playerElo: 2167, opponentElo: 2026 },
            { player: 'Vlad Popescu', opponent: 'Hassan Roger Sadeghi', result: '1-0', playerElo: 1990, opponentElo: 2098 },
            { player: 'Max Chappaz', opponent: 'Luca Srdjenovic', result: '½-½', playerElo: 1904, opponentElo: 1882 },
            { player: 'Pierre-M. Rappaz', opponent: 'Bertrand Banderet', result: '½-½', playerElo: 1933, opponentElo: 1942 },
            { player: 'Jeremy Duc', opponent: 'Jason Weber', result: '½-½', playerElo: 1829, opponentElo: 1838 },
            { player: 'Jean-Yves Riand', opponent: 'Jeremy Butet', result: '0-1', playerElo: 1877, opponentElo: 1930 }
          ]
        }
      ]
    },
    sion2: {
      name: 'Sion 2',
      league: '3ème ligue',
      captain: 'Sandro Bétrisey',
      players: [
        'Jeremy Duc (1829)',
        'Alexandre Briguet (1828)',
        'Olivier Crettenand (1826)',
        'Joan Cortada Garcia (1824)',
        'Olivier Ulmann (1788)',
        'Sandro Bétrisey (1745)',
        'Claude Bétrisey (1697)',
        'Mazlum Tosun (1689)',
        'Simon Moerschell (1663)',
        'Akram Ben Salem (sans ELO)',
        'Florian Clavien (sans ELO)'
      ],
      currentSeason: '2024-2025',
      results: [
        {
          round: 1,
          date: '22.03.2025',
          opponent: 'Crans-Montana 2',
          venue: 'home',
          location: 'Sion',
          result: '2-4',
          boards: [
            { player: 'Alexandre Briguet', opponent: 'Alessandro Bonalli', result: '0-1', playerElo: 1828, opponentElo: 1621 },
            { player: 'Olivier Crettenand', opponent: 'Timur Gökok', result: '1-0', playerElo: 1826, opponentElo: 1650 },
            { player: 'Mazlum Tosun', opponent: 'Hervé Frainay', result: '1-0', playerElo: 1689, opponentElo: 1561 },
            { player: 'Sandro Bétrisey', opponent: 'Luc Udry', result: '0-1', playerElo: 1745, opponentElo: 1523 },
            { player: 'Akram Ben Salem', opponent: 'Jean-Claude Zermatten', result: '0-1', opponentElo: 1559 },
            { player: 'Florian Clavien', opponent: 'Claude-Alain Bonvin', result: '0-1', opponentElo: 1629 }
          ]
        },
        {
          round: 2,
          date: '05.04.2025',
          opponent: 'Bulle 3',
          venue: 'away',
          location: 'Bulle',
          result: '2-4',
          boards: [
            { player: 'Alexandre Briguet', opponent: 'Philippe Defferrard', result: '½-½', playerElo: 1828, opponentElo: 1750 },
            { player: 'Sandro Bétrisey', opponent: 'Bert Jansen', result: '1-0', playerElo: 1745, opponentElo: 1650 },
            { player: 'Mazlum Tosun', opponent: 'Charles-François Feller', result: '1-0', playerElo: 1689, opponentElo: 1670 },
            { player: 'Akram Ben Salem', opponent: 'Thomas Christen', result: '½-½', opponentElo: 1700 },
            { player: 'Simon Moerschell', opponent: 'Arno Jankowski', result: '1-0', playerElo: 1663, opponentElo: 1600 },
            { player: 'N.N.', opponent: 'Alfred Senff', result: '0-1', opponentElo: 1544 }
          ]
        },
        {
          round: 3,
          date: '26.04.2025',
          opponent: 'Grand Echiquier 2',
          venue: 'home',
          location: 'Sion',
          result: '1½-4½',
          boards: [
            { player: 'Olivier Crettenand', opponent: 'Andrea Giananti', result: '½-½', playerElo: 1826, opponentElo: 1867 },
            { player: 'Mazlum Tosun', opponent: 'Vincent Conrad', result: '0-1', playerElo: 1689, opponentElo: 1904 },
            { player: 'Alexandre Briguet', opponent: 'Olivier Dubuis', result: '1-0', playerElo: 1828, opponentElo: 1778 },
            { player: 'Claude Bétrisey', opponent: 'David Bovet', result: '0-1', playerElo: 1697, opponentElo: 1741 },
            { player: 'Akram Ben Salem', opponent: 'Emil Ungureanu', result: '0-1', opponentElo: 1650 },
            { player: 'Sandro Bétrisey', opponent: 'José Martinez', result: '0-1', playerElo: 1745, opponentElo: 1662 }
          ]
        },
        {
          round: 4,
          date: '17.05.2025',
          opponent: 'Valais 2',
          venue: 'away',
          location: 'Valais',
          result: '2½-3½',
          boards: [
            { player: 'Joan Cortada Garcia', opponent: 'Hervé Lanois', result: '0-1', playerElo: 1824, opponentElo: 1781 },
            { player: 'Mazlum Tosun', opponent: 'Stephan Major', result: '1-0', playerElo: 1689, opponentElo: 1797 },
            { player: 'Olivier Crettenand', opponent: 'Christian Favre', result: '½-½', playerElo: 1826, opponentElo: 1750 },
            { player: 'Sandro Bétrisey', opponent: 'Renzo Cerda', result: '1-0', playerElo: 1745, opponentElo: 1650 },
            { player: 'Alexandre Briguet', opponent: 'Cyril Dorsaz', result: '1-0', playerElo: 1828, opponentElo: 1819 },
            { player: 'Simon Moerschell', opponent: 'Michel Steiner', result: '0-1', playerElo: 1663, opponentElo: 1803 }
          ]
        }
      ]
    }
  };

  const currentTeam = teams[selectedTeam];

  const leagueStructure = [
    { name: 'LNA', description: 'Ligue Nationale A - Élite des échecs suisses' },
    { name: 'LNB', description: 'Ligue Nationale B' },
    { name: '1ère ligue', description: 'Niveau régional supérieur', sionTeam: 'Sion 1' },
    { name: '2ème ligue', description: 'Niveau régional' },
    { name: '3ème ligue', description: 'Niveau régional', sionTeam: 'Sion 2' },
    { name: '4ème ligue', description: 'Niveau d\'entrée' }
  ];

  // Current standings after 4 rounds
  const standings = {
    sion1: {
      position: 8,
      total: 8,
      matchPoints: '0',
      individualPoints: '10½'
    },
    sion2: {
      position: 5,
      total: 8,
      matchPoints: '4',
      individualPoints: '11'
    }
  };

  const currentStanding = standings[selectedTeam];

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
              Le CE Sion engage deux équipes dans la compétition nationale
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
                      <td className="py-2 text-center text-yellow-900">5</td>
                      <td className="py-2 text-center text-yellow-900">12</td>
                    </tr>
                    <tr className="bg-yellow-50 font-semibold">
                      <td className="py-2">6</td>
                      <td className="py-2">Sion 2</td>
                      <td className="py-2 text-center font-semibold">4</td>
                      <td className="py-2 text-center">13</td>
                    </tr>
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