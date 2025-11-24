import { useState, useMemo } from 'react'
import { Search, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'
import { membresData } from '../lib/data/members'
import { Title, Meta } from 'react-head';

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  const allPlayers = useMemo(() => {
    return membresData.categories.flatMap(cat =>
      cat.players.map(player => ({ ...player, category: cat.title }))
    )
  }, [])

  const filteredPlayers = useMemo(() => {
    return allPlayers.filter(player => {
      const matchesSearch = searchTerm === '' ||
        `${player.prenom} ${player.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.codeFIDE.includes(searchTerm)

      const matchesCategory = selectedCategory === 'all' || player.category === selectedCategory

      return matchesSearch && matchesCategory
    })
  }, [allPlayers, searchTerm, selectedCategory])

  const totalMembers = allPlayers.length
  const playersWithElo = allPlayers.filter(player => player.elo > 0);
  const totalMembersWithElo = playersWithElo.length;
  const averageElo = Math.round(
    playersWithElo.reduce((sum, player) => sum + player.elo, 0) / totalMembersWithElo
  );

  return (
    <>
      <Title>Liste des Membres - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Consultez la liste complète des membres actifs du Club d'Échecs de Sion, avec leurs classements ELO FIDE" />

      <div className="min-h-screen bg-neutral-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
              Liste des Membres
            </h1>
            <p className="text-xl text-neutral-600">
              {totalMembers} membres actifs en compétition • ELO moyen: {averageElo}
            </p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="search" className="block text-sm font-medium text-neutral-700 mb-2">
                  Rechercher un membre
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                  <input
                    type="text"
                    id="search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Nom, prénom, code FSE ou FIDE..."
                    className="pl-10 w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-2">
                  Catégorie
                </label>
                <select
                  id="category"
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full rounded-md border-neutral-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                >
                  <option value="all">Toutes les catégories</option>
                  {membresData.categories.map(cat => (
                    <option key={cat.title} value={cat.title}>
                      {cat.title} ({cat.players.length})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="px-6 py-4 bg-neutral-50 border-b">
              <p className="text-sm text-neutral-600">
                {filteredPlayers.length} membre{filteredPlayers.length > 1 ? 's' : ''} trouvé{filteredPlayers.length > 1 ? 's' : ''}
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-neutral-200">
                <thead className="bg-neutral-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Nom
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      ELO FIDE standard
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Fédération
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Code FIDE
                    </th>
                    <th className="hidden md:table-cell px-6 py-3 text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                      Catégorie
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-neutral-200">
                  {filteredPlayers.map((player, index) => (
                    <motion.tr
                      key={`${player.codeFIDE}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.02 }}
                      className="hover:bg-neutral-50"
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-neutral-900">
                          {player.prenom} {player.nom}
                        </div>
                        {player.note && (
                          <div className="text-xs text-neutral-500">{player.note}</div>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`text-sm font-semibold ${player.note === 'Elo FSE' ? 'text-blue-600' : 'text-neutral-900'
                          }`}>
                          {player.elo}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="text-sm text-neutral-600">{player.federation}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {player.codeFIDE ? (
                          <a
                            href={`https://ratings.fide.com/profile/${player.codeFIDE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-primary-600 hover:text-primary-700 inline-flex items-center"
                          >
                            {player.codeFIDE}
                            <ExternalLink className="ml-1 h-3 w-3" />
                          </a>
                        ) : (
                          <span className="text-sm text-neutral-400">-</span>
                        )}
                      </td>
                      <td className="hidden md:table-cell px-6 py-4 whitespace-nowrap">
                        <span className="text-xs text-neutral-500">{player.category}</span>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}