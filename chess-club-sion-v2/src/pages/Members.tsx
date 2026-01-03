import { useState, useMemo } from 'react'
import { Search, ExternalLink, LayoutGrid, List as ListIcon, Users, Trophy} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { membresData } from '../lib/data/members'
import type { Player } from '../lib/data/members'
import { Title, Meta } from 'react-head';

const getCategoryColor = (category: string) => {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-indigo-100 text-indigo-800',
    'bg-pink-100 text-pink-800',
    'bg-yellow-100 text-yellow-800',
    'bg-cyan-100 text-cyan-800',
  ];
  let hash = 0;
  for (let i = 0; i < category.length; i++) {
    hash = category.charCodeAt(i) + ((hash << 5) - hash);
  }
  return colors[Math.abs(hash) % colors.length];
};

const getBestElo = (player: Player) => {
  if (player.elo > 0) return player.elo;
  if (player.eloRapid && player.eloRapid > 0) return player.eloRapid;
  if (player.eloBlitz && player.eloBlitz > 0) return player.eloBlitz;
  return 0;
};

const getComputedCategory = (elo: number) => {
  if (elo === 0) return "Progresse vers 1er classement";
  if (elo >= 2200) return "Experts (>2200)";
  if (elo >= 2000) return "Classe A (2000-2199)";
  if (elo >= 1800) return "Classe B (1800-1999)";
  if (elo >= 1600) return "Classe C (1600-1799)";
  return "Classe D (<1600)";
};

const CATEGORY_ORDER = [
  "Experts (>2200)",
  "Classe A (2000-2199)",
  "Classe B (1800-1999)",
  "Classe C (1600-1799)",
  "Classe D (<1600)",
  "Progresse vers 1er classement"
];

const EloChangeBadge = ({ change }: { change: number }) => {
  if (change === undefined || change === null || change === 0) return <span className="text-[10px] text-gray-400 ml-1" title="Pas de changement">=</span>;
  const isPositive = change > 0;
  return (
    <span 
      className={`text-[10px] ml-1 font-bold ${isPositive ? 'text-emerald-600' : 'text-red-600'}`}
      title={`Changement dernier mois: ${isPositive ? '+' : ''}${change}`}
    >
      {isPositive ? '+' : ''}{Math.round(change * 10) / 10}
    </span>
  );
};

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const parsePeriod = (period: string) => {
    const parts = period.split('-');
    if (parts.length !== 2) return { year: 0, month: 0 };
    const year = parseInt(parts[0]);
    const month = MONTHS.indexOf(parts[1]);
    return { year, month };
};

const formatPeriod = (year: number, month: number) => {
    return `${year}-${MONTHS[month]}`;
};

const getPreviousPeriod = (period: string) => {
    const { year, month } = parsePeriod(period);
    if (month === 0) return formatPeriod(year - 1, 11);
    return formatPeriod(year, month - 1);
};

const comparePeriods = (p1: string, p2: string) => {
    const d1 = parsePeriod(p1);
    const d2 = parsePeriod(p2);
    if (d1.year !== d2.year) return d1.year - d2.year;
    return d1.month - d2.month;
};

const EloGraph = ({ history, currentElo }: { history: { period: string, std: number }[], currentElo: number }) => {
  if (!history || history.length === 0) return null;

  // Reconstruct continuous history points for the last 18 months
  const points: { month: string, rating: number }[] = [];
  
  // Map history for easy lookup of changes
  const historyMap = new Map(history.map(h => [h.period, h.std]));
  
  // Sort history to find the range
  const sortedHistory = [...history].sort((a, b) => comparePeriods(b.period, a.period)); // Descending
  const newestPeriod = sortedHistory[0].period;
  const oldestPeriod = sortedHistory[sortedHistory.length - 1].period;

  let currentPeriod = newestPeriod;
  let currentRating = currentElo;
  
  // Add the latest point
  points.push({ month: currentPeriod, rating: currentRating });

  // Trace back month by month
  // We want up to 18 months of history (so 19 points roughly, or just cover the 18 month interval)
  for (let i = 0; i < 18; i++) {
    // Stop if we reach the beginning of recorded history
    // If currentPeriod is equal to oldestPeriod, we can calculate the rating BEFORE this period (the base)
    // using the change recorded in oldestPeriod.
    // If currentPeriod is strictly older than oldestPeriod, we have no data to infer further back.
    if (comparePeriods(currentPeriod, oldestPeriod) < 0) {
        break;
    }

    const change = historyMap.get(currentPeriod) || 0;
    const prevRating = currentRating - change;
    const prevPeriod = getPreviousPeriod(currentPeriod);

    points.unshift({ month: prevPeriod, rating: prevRating });
    
    currentPeriod = prevPeriod;
    currentRating = prevRating;
  }
  
  const graphData = points;
  
  const ratings = graphData.map(d => d.rating);
  const min = Math.min(...ratings);
  const max = Math.max(...ratings);
  const range = max - min || 10;
  const padding = range * 0.2; // 20% padding
  const plotMin = min - padding;
  const plotRange = range + 2 * padding;

  const scaleY = (r: number) => 100 - ((r - plotMin) / plotRange) * 100;
  const stepX = 300 / (graphData.length > 1 ? graphData.length - 1 : 1);

  const pathD = graphData.map((d, i) => {
    const x = i * stepX;
    const y = scaleY(d.rating);
    return `${i === 0 ? 'M' : 'L'} ${x} ${y}`;
  }).join(' ');

  return (
     <div className="w-full mt-4 pt-4 border-t border-neutral-100">
        <p className="text-[10px] text-neutral-400 uppercase tracking-wide text-center mb-2">Évolution Elo Standard (18 derniers mois)</p>
        <div className="h-16 w-full relative pr-2">
            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                {/* Grid lines */}
                <line x1="0" y1="0" x2="300" y2="0" stroke="#f5f5f5" strokeWidth="1" />
                <line x1="0" y1="50" x2="300" y2="50" stroke="#f5f5f5" strokeWidth="1" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="#f5f5f5" strokeWidth="1" />
                
                <path d={pathD} fill="none" stroke="#2563eb" strokeWidth="2" vectorEffect="non-scaling-stroke" />
                
                {graphData.map((d, i) => (
                    <circle 
                        key={i} 
                        cx={i * stepX} 
                        cy={scaleY(d.rating)} 
                        r="3" 
                        className="fill-blue-600 stroke-white stroke-2 hover:r-4 transition-all cursor-pointer"
                    >
                        <title>{d.month}: {Math.round(d.rating)}</title>
                    </circle>
                ))}
            </svg>
            <div className="flex justify-between text-[9px] text-neutral-400 mt-1 px-1">
                <span>{graphData[0]?.month}</span>
                <span>{graphData[graphData.length-1]?.month}</span>
            </div>
        </div>
     </div>
  );
};

const getMonthsDiff = (p1: string, p2: string) => {
    const d1 = parsePeriod(p1);
    const d2 = parsePeriod(p2);
    return (d1.year - d2.year) * 12 + (d1.month - d2.month);
};

const RECENT_CHANGE_THRESHOLD = 2;

export default function Members() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')

  const latestPeriod = useMemo(() => {
    const allPlayers = membresData.categories.flatMap(cat => cat.players);
    let maxPeriod = "";
    const monthMap: Record<string, number> = { Jan: 0, Feb: 1, Mar: 2, Apr: 3, May: 4, Jun: 5, Jul: 6, Aug: 7, Sep: 8, Oct: 9, Nov: 10, Dec: 11 };
    
    for (const p of allPlayers) {
      if (p.history && p.history.length > 0) {
         const current = p.history[0].period;
         if (!maxPeriod) {
             maxPeriod = current;
             continue;
         }
         const [yMax, mMax] = maxPeriod.split('-');
         const [yCur, mCur] = current.split('-');
         const yDiff = parseInt(yCur) - parseInt(yMax);
         if (yDiff > 0) maxPeriod = current;
         else if (yDiff === 0) {
             if (monthMap[mCur] > monthMap[mMax]) maxPeriod = current;
         }
      }
    }
    return maxPeriod;
  }, []);

  const processedPlayers = useMemo(() => {
    // Flatten all players from the static categories
    const flatPlayers = membresData.categories.flatMap(cat => cat.players);

    // Compute best ELO and category for each player
    const playersWithMeta = flatPlayers.map(player => {
      const bestElo = getBestElo(player);
      return {
        ...player,
        bestElo,
        computedCategory: getComputedCategory(bestElo)
      };
    });

    // Sort by Best ELO descending
    return playersWithMeta.sort((a, b) => b.bestElo - a.bestElo);
  }, []);

  const filteredPlayers = useMemo(() => {
    return processedPlayers.filter(player => {
      const matchesSearch = searchTerm === '' ||
        `${player.prenom} ${player.nom}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        player.codeFIDE.includes(searchTerm);

      const matchesCategory = selectedCategory === 'all' || player.computedCategory === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [processedPlayers, searchTerm, selectedCategory]);

  // Extract unique categories for the filter dropdown, sorted by our predefined order
  const availableCategories = useMemo(() => {
    const categories = new Set(processedPlayers.map(p => p.computedCategory));
    return CATEGORY_ORDER.filter(cat => categories.has(cat));
  }, [processedPlayers]);

  const totalMembers = processedPlayers.length;
  const playersWithElo = processedPlayers.filter(player => player.bestElo > 0);
  const totalMembersWithElo = playersWithElo.length;
  const averageElo = totalMembersWithElo > 0 
    ? Math.round(playersWithElo.reduce((sum, player) => sum + player.bestElo, 0) / totalMembersWithElo) 
    : 0;

  return (
    <>
      <Title>Liste des Membres - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Consultez la liste complète des membres actifs du Club d'Échecs de Sion." />

      <div className="min-h-screen bg-neutral-50">
        {/* Header Section */}
        <div className="bg-white border-b border-neutral-200 pb-12 pt-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-neutral-900 mb-6">
                Membres actifs
              </h1>
              
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 justify-items-center">
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 bg-primary-50 text-primary-600 rounded-lg">
                  <Users className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500">Membres Actifs</p>
                  <p className="text-2xl font-bold text-neutral-900">{totalMembers}</p>
                </div>
              </div>
              <div className="bg-white rounded-xl p-6 border border-neutral-200 shadow-sm flex items-center space-x-4 w-full max-w-md">
                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg">
                  <Trophy className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-sm font-medium text-neutral-500">ELO Moyen (Max)</p>
                  <p className="text-2xl font-bold text-neutral-900">{averageElo}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 mb-8 shadow-sm">
            <details className="text-neutral-700">
              <summary className="font-semibold cursor-pointer text-lg text-neutral-800">
                Comprendre les métriques des joueurs
              </summary>
              <div className="mt-4 text-neutral-600 space-y-4 leading-relaxed">
                <div>
                  <p className="font-medium text-neutral-800 mb-1">Types de classement :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Std (Standard) :</strong> Parties longues.</li>
                    <li><strong>Rapid (Rapide) :</strong> Parties à cadence rapide.</li>
                    <li><strong>Blitz :</strong> Parties très rapides.</li>
                  </ul>
                  <p className="mt-2 text-sm italic">Note : Le tri et les catégories se basent sur le meilleur des trois classements.</p>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Indicateurs visuels :</p>
                  <ul className="list-disc list-inside ml-4 space-y-1">
                    <li><strong>Elo FIDE :</strong> Le classement officiel international qui permet de comparer le niveau des joueurs mondialement.</li>
                    <li><strong>Variations :</strong> Les chiffres <span className="text-emerald-600 font-bold">+x</span> ou <span className="text-red-600 font-bold">-x</span> indiquent l'évolution du classement lors du dernier mois.</li>
                    <li><strong>Graphique :</strong> L'évolution de l'ELO Standard est tracée sur les 18 derniers mois pour les joueurs actifs.</li>
                    <li><strong>Inactif :</strong> Un joueur est considéré inactif s'il n'a pas joué de partie officielle depuis plus de 12 mois.</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-neutral-800 mb-1">Statistiques de carrière (FIDE) :</p>
                  <p>
                    Les barres colorées détaillent les <strong>Victoires (vert)</strong>, <strong>Nulles (gris)</strong> et <strong>Défaites (rouge)</strong>. 
                    Elles sont séparées par couleur de pièces (Blancs / Noirs) pour analyser les performances globales du joueur.
                  </p>
                </div>
              </div>
            </details>
          </div>
          {/* Filters & Controls */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div className="flex flex-col md:flex-row gap-4 flex-1">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-neutral-400" />
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Rechercher un membre..."
                  className="pl-10 w-full rounded-lg border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5"
                />
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="rounded-lg border-neutral-200 shadow-sm focus:border-primary-500 focus:ring-primary-500 py-2.5 bg-white"
              >
                <option value="all">Toutes les catégories</option>
                {availableCategories.map(cat => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>

            <div className="flex items-center bg-white rounded-lg border border-neutral-200 p-1 shadow-sm self-start md:self-auto">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'grid'
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                title="Vue Grille"
              >
                <LayoutGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-colors ${viewMode === 'list'
                    ? 'bg-neutral-100 text-neutral-900'
                    : 'text-neutral-500 hover:text-neutral-700'
                  }`}
                title="Vue Liste"
              >
                <ListIcon className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Results */}
          {filteredPlayers.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-xl border border-neutral-200 border-dashed">
              <p className="text-neutral-500 text-lg">Aucun membre ne correspond à votre recherche.</p>
              <button
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="mt-4 text-primary-600 hover:text-primary-700 font-medium"
              >
                Réinitialiser les filtres
              </button>
            </div>
          ) : (
            <AnimatePresence mode="wait">
              {viewMode === 'grid' ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredPlayers.map((player, index) => {
                    const isInactive = latestPeriod && player.history && player.history.length > 0
                        ? getMonthsDiff(latestPeriod, player.history[0].period) > 12
                        : false;
                    
                    return (
                    <motion.div
                      key={`${player.codeFIDE}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className={`rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow p-6 flex flex-col items-center text-center group ${isInactive ? 'bg-neutral-50 opacity-75 grayscale-[0.5]' : 'bg-white'}`}
                    >
                      <h3 className="text-lg font-bold text-neutral-900 group-hover:text-primary-600 transition-colors mt-2">
                        {player.prenom} {player.nom}
                      </h3>
                      
                      <div className="mt-1 mb-4 flex flex-wrap justify-center gap-2">
                         {isInactive && (
                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-200 text-neutral-600">
                                Inactif
                            </span>
                         )}
                         {player.category && (
                           <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(player.category)}`}>
                             {player.category}
                           </span>
                         )}
                         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 border border-gray-200">
                           {player.federation}
                         </span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 w-full mb-4 border-t border-b border-neutral-100 py-4">
                        <div className="text-center border-r border-neutral-100 flex flex-col items-center">
                          <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Std</p>
                          <div className="flex items-center justify-center">
                            <p className={`text-base font-bold ${player.note === 'Elo FSE' ? 'text-blue-600' : 'text-neutral-900'}`}>
                                {player.elo > 0 ? player.elo : '-'}
                            </p>
                            {player.history && player.history.length > 0 && (
                                <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].std : 0} />
                            )}
                          </div>
                        </div>
                        <div className="text-center border-r border-neutral-100 flex flex-col items-center">
                          <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Rapid</p>
                          <div className="flex items-center justify-center">
                             <p className="text-base font-bold text-neutral-900">
                                {player.eloRapid && player.eloRapid > 0 ? player.eloRapid : '-'}
                             </p>
                             {player.history && player.history.length > 0 && (
                                <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].rapid : 0} />
                            )}
                          </div>
                        </div>
                        <div className="text-center flex flex-col items-center">
                          <p className="text-[10px] text-neutral-400 uppercase tracking-wide">Blitz</p>
                          <div className="flex items-center justify-center">
                            <p className="text-base font-bold text-neutral-900">
                                {player.eloBlitz && player.eloBlitz > 0 ? player.eloBlitz : '-'}
                            </p>
                            {player.history && player.history.length > 0 && (
                                <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].blitz : 0} />
                            )}
                          </div>
                        </div>
                      </div>

                      {player.stats && (player.stats.white.total > 0 || player.stats.black.total > 0) && (
                        <div className="w-full mb-4 text-xs space-y-2">
                          <p className="text-neutral-500 font-semibold mb-1 text-center text-sm">Statistiques de jeu</p>
                          {player.stats.white.total > 0 && (
                            <div className="flex flex-col">
                              <div className="flex justify-between text-[10px] text-neutral-600 mb-0.5">
                                <span className="font-semibold text-neutral-500">BLANC ({player.stats.white.total} parties)</span>
                                <span>
                                  <span className="text-emerald-600">G: {player.stats.white.win} ({((player.stats.white.win / player.stats.white.total) * 100).toFixed(0)}%)</span>, 
                                  <span className="text-neutral-500"> N: {player.stats.white.draw} ({((player.stats.white.draw / player.stats.white.total) * 100).toFixed(0)}%)</span>, 
                                  <span className="text-red-600"> P: {player.stats.white.loss} ({((player.stats.white.loss / player.stats.white.total) * 100).toFixed(0)}%)</span>
                                </span>
                              </div>
                              <div className="flex-1 flex h-5 rounded-full overflow-hidden bg-neutral-100 text-white text-[10px] font-bold">
                                <div style={{ width: `${(player.stats.white.win / player.stats.white.total) * 100}%` }} className="bg-emerald-500 flex items-center justify-center" title={`Gains: ${player.stats.white.win} (${((player.stats.white.win / player.stats.white.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.white.win > 0 && `${((player.stats.white.win / player.stats.white.total) * 100).toFixed(0)}%`}
                                </div>
                                <div style={{ width: `${(player.stats.white.draw / player.stats.white.total) * 100}%` }} className="bg-neutral-400 flex items-center justify-center" title={`Nulles: ${player.stats.white.draw} (${((player.stats.white.draw / player.stats.white.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.white.draw > 0 && `${((player.stats.white.draw / player.stats.white.total) * 100).toFixed(0)}%`}
                                </div>
                                <div style={{ width: `${(player.stats.white.loss / player.stats.white.total) * 100}%` }} className="bg-red-500 flex items-center justify-center" title={`Pertes: ${player.stats.white.loss} (${((player.stats.white.loss / player.stats.white.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.white.loss > 0 && `${((player.stats.white.loss / player.stats.white.total) * 100).toFixed(0)}%`}
                                </div>
                              </div>
                            </div>
                          )}
                          {player.stats.black.total > 0 && (
                            <div className="flex flex-col">
                              <div className="flex justify-between text-[10px] text-neutral-600 mb-0.5">
                                <span className="font-semibold text-neutral-500">NOIR ({player.stats.black.total} parties)</span>
                                <span>
                                  <span className="text-emerald-600">G: {player.stats.black.win} ({((player.stats.black.win / player.stats.black.total) * 100).toFixed(0)}%)</span>, 
                                  <span className="text-neutral-500"> N: {player.stats.black.draw} ({((player.stats.black.draw / player.stats.black.total) * 100).toFixed(0)}%)</span>, 
                                  <span className="text-red-600"> P: {player.stats.black.loss} ({((player.stats.black.loss / player.stats.black.total) * 100).toFixed(0)}%)</span>
                                </span>
                              </div>
                              <div className="flex-1 flex h-5 rounded-full overflow-hidden bg-neutral-100 text-white text-[10px] font-bold">
                                <div style={{ width: `${(player.stats.black.win / player.stats.black.total) * 100}%` }} className="bg-emerald-500 flex items-center justify-center" title={`Gains: ${player.stats.black.win} (${((player.stats.black.win / player.stats.black.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.black.win > 0 && `${((player.stats.black.win / player.stats.black.total) * 100).toFixed(0)}%`}
                                </div>
                                <div style={{ width: `${(player.stats.black.draw / player.stats.black.total) * 100}%` }} className="bg-neutral-400 flex items-center justify-center" title={`Nulles: ${player.stats.black.draw} (${((player.stats.black.draw / player.stats.black.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.black.draw > 0 && `${((player.stats.black.draw / player.stats.black.total) * 100).toFixed(0)}%`}
                                </div>
                                <div style={{ width: `${(player.stats.black.loss / player.stats.black.total) * 100}%` }} className="bg-red-500 flex items-center justify-center" title={`Pertes: ${player.stats.black.loss} (${((player.stats.black.loss / player.stats.black.total) * 100).toFixed(0)}%)`}>
                                  {player.stats.black.loss > 0 && `${((player.stats.black.loss / player.stats.black.total) * 100).toFixed(0)}%`}
                                </div>
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                      
                      {player.history && player.history.length > 1 && player.elo > 0 && (
                         <EloGraph history={player.history} currentElo={player.elo} />
                      )}

                      {player.codeFIDE ? (
                        <div className="mt-auto max-w-xs mx-auto"> {/* Adjusted wrapper div for width control */}
                          <a
                            href={`https://ratings.fide.com/profile/${player.codeFIDE}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                          >
                            Voir profil FIDE
                            <ExternalLink className="ml-2 h-4 w-4" />
                          </a>
                        </div>
                      ) : (
                        <span className="mt-auto text-sm text-neutral-400 cursor-not-allowed inline-block px-4 py-2 border border-neutral-100 rounded-lg bg-neutral-50">
                          Pas de profil FIDE
                        </span>
                      )}
                    </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="bg-white rounded-xl border border-neutral-200 shadow-sm overflow-hidden"
                >
                  <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-neutral-200">
                      <thead className="bg-neutral-100">
                        <tr>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider rounded-tl-xl">Membre</th>
                          <th className="px-4 py-3 text-center text-xs font-semibold text-neutral-600 uppercase tracking-wider">Std</th>
                          <th className="px-4 py-3 text-center text-xs font-semibold text-neutral-600 uppercase tracking-wider">Rapid</th>
                          <th className="px-4 py-3 text-center text-xs font-semibold text-neutral-600 uppercase tracking-wider">Blitz</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">Groupe</th>
                          <th className="px-6 py-3 text-left text-xs font-semibold text-neutral-600 uppercase tracking-wider">Fédération</th>
                          <th className="px-6 py-3 text-right text-xs font-semibold text-neutral-600 uppercase tracking-wider rounded-tr-xl">Profil</th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-neutral-200">
                        {filteredPlayers.map((player, index) => {
                          const isInactive = latestPeriod && player.history && player.history.length > 0
                              ? getMonthsDiff(latestPeriod, player.history[0].period) > 12
                              : false;

                          return (
                          <motion.tr
                            key={`${player.codeFIDE}-${index}`}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.05 }}
                            className={`${index % 2 === 0 ? (isInactive ? 'bg-neutral-50' : 'bg-white') : 'bg-neutral-50'} ${isInactive ? 'opacity-75 grayscale-[0.5]' : ''} hover:bg-neutral-100 transition-colors`}
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              <div className="text-sm font-medium text-neutral-900">
                                  {player.prenom} {player.nom}
                                  {isInactive && (
                                    <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-neutral-200 text-neutral-600">
                                        Inactif
                                    </span>
                                  )}
                              </div>
                              {player.note && <div className="text-xs text-neutral-500">{player.note}</div>}
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center">
                                  <span className={`text-sm font-bold ${player.note === 'Elo FSE' ? 'text-blue-600' : 'text-neutral-900'}`}>
                                    {player.elo > 0 ? player.elo : '-'}
                                  </span>
                                  {player.history && player.history.length > 0 && (
                                    <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].std : 0} />
                                  )}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center">
                                  <span className="text-sm font-medium text-neutral-700">
                                    {player.eloRapid && player.eloRapid > 0 ? player.eloRapid : '-'}
                                  </span>
                                  {player.history && player.history.length > 0 && (
                                    <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].rapid : 0} />
                                  )}
                              </div>
                            </td>
                            <td className="px-4 py-4 whitespace-nowrap text-center">
                              <div className="flex items-center justify-center">
                                  <span className="text-sm font-medium text-neutral-700">
                                    {player.eloBlitz && player.eloBlitz > 0 ? player.eloBlitz : '-'}
                                  </span>
                                  {player.history && player.history.length > 0 && (
                                    <EloChangeBadge change={latestPeriod && getMonthsDiff(latestPeriod, player.history[0].period) <= RECENT_CHANGE_THRESHOLD ? player.history[0].blitz : 0} />
                                  )}
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                               {/* Display computed category for sorting logic/grouping, OR display the manually assigned age category? 
                                  In the list view, we probably want to show the Group or Age. 
                                  The previous code showed player.category (age). Let's stick to age/manual category in the cell 
                                  but use the computed one for filtering. */}
                              {player.category && (
                                <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryColor(player.category)}`}>
                                  {player.category}
                                </span>
                              )}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-neutral-500">
                              {player.federation}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                              {player.codeFIDE ? (
                                <a
                                  href={`https://ratings.fide.com/profile/${player.codeFIDE}`}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="text-primary-600 hover:text-primary-900 inline-flex items-center"
                                >
                                  FIDE <ExternalLink className="ml-1 h-3 w-3" />
                                </a>
                              ) : (
                                <span className="text-neutral-400">-</span>
                              )}
                            </td>
                          </motion.tr>
                        );
                        })}
                      </tbody>
                    </table>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          )}
        </div>
      </div>
    </>
  )
}