import { Link } from 'react-router-dom'
// MODIFICATION 1: Ajout des icônes pour la navigation du carrousel
import { Trophy, Calendar, Users, ChevronRight, MapPin, Clock, Zap, X, ChevronDown, ArrowRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { newsItems, type NewsItem } from '../lib/data/news'
import { programmeEvents } from '../lib/data/programme'
import { useState, useEffect } from 'react'
import { Title, Meta } from 'react-head';

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  // MODIFICATION 2: Ajout d'un état pour gérer le nombre d'actualités visibles
  const [visibleNewsCount, setVisibleNewsCount] = useState(3);

  // --- COMPTEUR (LOGIQUE JSONP ADAPTÉE) ---
  const [inscritCount, setInscritCount] = useState<number | string | null>(null);
  const countOffset = 1;
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtU43O1Qth1iCLkf8iEzVZRt9sTVvt3YWsKcOalSvwB6ob5OVpbLJJfTP39NmldCZy/exec";

  interface JsonpResponse {
    count: number;
  }

  useEffect(() => {
    const callbackName = 'jsonpCallback_home'; 

    (window as unknown as Record<string, (data: JsonpResponse) => void>)[callbackName] = (data: JsonpResponse) => {
      if (data && typeof data.count === 'number') {
        setInscritCount(data.count);
      } else {
        setInscritCount('?');
      }
      delete (window as unknown as Record<string, (data: JsonpResponse) => void>)[callbackName];
      document.body.removeChild(script);
    };

    const script = document.createElement('script');
    script.src = `${APPS_SCRIPT_URL}?callback=${callbackName}`;
    document.body.appendChild(script);

    script.onerror = () => {
      setInscritCount('?');
      delete (window as unknown as Record<string, (data: JsonpResponse) => void>)[callbackName];
      document.body.removeChild(script);
    };

    return () => {
      if ((window as unknown as Record<string, (data: JsonpResponse) => void>)[callbackName]) {
        delete (window as unknown as Record<string, (data: JsonpResponse) => void>)[callbackName];
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  const displayCount = inscritCount !== null && typeof inscritCount === 'number'
    ? inscritCount - countOffset
    : inscritCount;
  // --- FIN COMPTEUR ---

  // MODIFICATION 3: Trier les actualités par date, de la plus récente à la plus ancienne
  // Nous utilisons une copie avec [...] pour ne pas muter l'array original importé
  const sortedNews = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  const handleLoadMore = () => {
    setVisibleNewsCount((prev) => prev + 3);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const openNewsModal = (newsItem: NewsItem) => {
    // Pour s'assurer que le modal fonctionne toujours, on retrouve l'index
    // de l'article sélectionné dans l'array original non trié.
    const originalIndex = newsItems.findIndex(item => item.title === newsItem.title); // Assurez-vous d'avoir un ID unique si les titres ne le sont pas
    if (originalIndex !== -1) {
      setSelectedNews(originalIndex);
    }
  }

  const closeNewsModal = () => {
    setSelectedNews(null)
  }
  
  // ... (renderTextWithLinks code stays here implicitly as it was not part of the removed block in instruction, 
  // but wait, the 'old_string' must cover what I want to remove.
  // I will target the state definitions and the helper functions first, then the render part separately if needed, 
  // OR I can do a large replacement if I am careful.
  // The user prompt asked to refactor the SECTION.
  // I will replace the state initialization and the `handleNext`/`handlePrev` with `handleLoadMore`.
  
  // Actually, simpler: I will keep `renderTextWithLinks` and `formatDate` untouched if possible, 
  // but the `activeIndex` state and `handleNext`/`handlePrev` are at the top of the component.
  
  // Let's replace the top part of the component first.
  
  const renderTextWithLinks = (text: string) => {
    const lines = text.split('\n');
    const renderedElements = [];
    // La déclaration 'let isTable = false;' a été supprimée d'ici.

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];

      if (line.startsWith('|') && lines[i + 1]?.startsWith('|-')) {
        // L'assignation 'isTable = true;' a été supprimée d'ici.

        const headerLine = lines[i];
        const headers = headerLine.split('|').map(h => h.trim()).slice(1, -1);

        const tableRows = [];
        let j = i + 2;
        while (j < lines.length && lines[j].startsWith('|')) {
          const rowLine = lines[j];
          const cells = rowLine.split('|').map(c => c.trim()).slice(1, -1);
          tableRows.push(cells);
          j++;
        }

        renderedElements.push(
          <div key={`table-${i}`} className="my-6 overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr>
                  {headers.map((header, index) => (
                    <th key={index} className="border-b-2 border-primary-200 pb-3 pr-3 text-sm font-semibold text-neutral-800">
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {tableRows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="border-b border-neutral-200 py-3 pr-3 text-sm text-neutral-600">
                        {cell.split(/\*\*/).map((part, partIndex) =>
                          partIndex % 2 === 1 ? <strong key={partIndex}>{part}</strong> : part
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );

        i = j - 1;
        continue;
      }

      if (line.startsWith('**') && line.endsWith('**')) {
        renderedElements.push(
          <p key={i} className="font-bold text-neutral-800 mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        );
      } else if (line.startsWith('* ')) {
        const parts = line.substring(2).split(/\*\*/);
        renderedElements.push(
          <p key={i} className="ml-4 mb-1">
            <span className="mr-2">•</span>
            {parts.map((part, k) =>
              k % 2 === 1 ? <strong key={k}>{part}</strong> : part
            )}
          </p>
        );
      } else if (line.trim()) {
        const parts = line.split(/\*\*/);
        renderedElements.push(
          <p key={i} className="mb-2">
            {parts.map((part, k) =>
              k % 2 === 1 ? <strong key={k}>{part}</strong> : part
            )}
          </p>
        );
      } else {
        renderedElements.push(<br key={i} />);
      }
    }

    return renderedElements;
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  // MODIFICATION: Logique de groupement pour les événements de la page d'accueil
  const rawUpcoming = programmeEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const groupedEvents: (typeof programmeEvents[0] | typeof programmeEvents[0][])[] = [];
  
  rawUpcoming.forEach(event => {
     const isGroupable = event.category.includes('CVE') || event.category.includes('CSG');
     if (isGroupable) {
         const last = groupedEvents[groupedEvents.length - 1];
         if (Array.isArray(last) && last.length > 0) {
             const first = last[0];
             if (first.date === event.date && first.category.some(c => ['CVE', 'CSG'].includes(c) && event.category.includes(c))) {
                 last.push(event);
                 return;
             }
         }
         groupedEvents.push([event]);
     } else {
         groupedEvents.push(event);
     }
  });

  const upcomingEvents = groupedEvents
     .map(item => (Array.isArray(item) && item.length === 1) ? item[0] : item)
     .slice(0, 3);

  const activities = [
    {
      icon: Zap,
      title: "Les soirées du club",
      description: "Club ouvert à tous dès 20h00. Soirées blitz, rapides, analyses ou thématiques",
      time: "vendredi 20h30",
      link: "/programme"
    },
    {
      icon: Users,
      title: "Pôle formation",
      description: "Cours pour écoliers, joueurs intermédiaires et avancés. Programme pour jeunes et adultes.",
      time: "mercredi, vendredi, samedi",
      link: "/ecole"
    },
    {
      icon: Trophy,
      title: "Pôle compétition",
      description: "Participez aux diverses championnats suisses et valaisans par équipes",
      time: "vendredi soir, samedi",
      link: "/competitions"
    }
  ]

  return (
    <>
      {/* Balises Meta */}
      <Title>Accueil - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Bienvenue au Club d'Échecs de Sion. Découvrez nos activités, tournois, cours pour juniors et adultes, et rejoignez notre société de passionnés depuis 1935." />

      <div className="overflow-hidden">
        {/* Hero Section (INCHANGÉ) */}
        <section className="relative min-h-screen flex items-center justify-center">
          <div
            className="absolute inset-0 bg-cover bg-center bg-fixed"
            style={{
              backgroundImage: 'url("./picture/background/valere.webp")',
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-700/65" />
          </div>

          <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="mb-8"
            >
              <h1 className="text-6xl md:text-8xl font-serif font-bold mb-6 leading-tight">
                Club d'Échecs
                <span className="block text-primary-300">de Sion</span>
              </h1>
              <div className="h-1 w-24 bg-primary-400 mx-auto mb-3" />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-2xl md:text-2xl mb-12 text-primary-200 font-light"
            >
              Au coeur de la capitale valaisanne depuis 1935 <br />
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-16"
            >
              <div className="relative group max-w-3xl mx-auto">
                {/* Glow effect behind */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
                
                <div className="relative bg-neutral-900/80 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="text-left flex-1">
                      <div className="flex flex-wrap gap-3 mb-3">
                        {displayCount !== null && typeof displayCount === 'number' && displayCount >= 40 ? (
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/20 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
                              <Trophy className="h-3.5 w-3.5 text-red-400" />
                              <span>Tournoi Complet !</span>
                           </div>
                        ) : (
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-500/20 border border-primary-500/30 text-primary-300 text-xs font-bold uppercase tracking-wider">
                              <Trophy className="h-3.5 w-3.5 text-primary-400" />
                              <span>Ne manquez pas !</span>
                           </div>
                        )}

                        {displayCount !== null && (
                           <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 border border-amber-500/30 text-amber-300 text-xs font-bold uppercase tracking-wider">
                             <Users className="h-3.5 w-3.5 text-amber-400" />
                             <span>{displayCount === '?' ? '...' : (typeof displayCount === 'number' && displayCount >= 40 ? `Merci aux ${displayCount} inscrits` : `déjà ${displayCount} inscrits sur 40 places`)}</span>
                           </div>
                        )}
                      </div>
                      <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
                        Tournoi blitz de Noël
                        <span className="block text-lg sm:text-xl font-sans font-normal text-neutral-300 mt-1">Dimanche 21 décembre 2025</span>
                      </h3>
                    </div>
                    
                    <div className="flex-shrink-0 w-full md:w-auto">
                      <a
                        href="/blitz-noel"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn relative inline-flex items-center justify-center w-full md:w-auto px-8 py-4 bg-white text-neutral-900 rounded-xl font-bold shadow-lg overflow-hidden transition-all duration-300 hover:bg-primary-50 hover:text-primary-700 hover:scale-[1.02]"
                      >
                        <span className="relative z-10 flex items-center">
                          Toutes les infos
                          <ArrowRight className="ml-2 h-5 w-5 group-hover/btn:translate-x-1 transition-transform" />
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </section>

        {/* Activities Section (INCHANGÉ) */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
                Nos activités
              </h2>
              <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
                Du débutant au joueur confirmé, découvrez nos diverses activités
                pour progresser et vous amusez avec le noble jeu.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {activities.map((activity, index) => {
                const IconComponent = activity.icon
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-gradient-to-br from-neutral-50 to-neutral-100 hover:from-primary-50 hover:to-primary-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg flex flex-col h-full"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <IconComponent className="h-8 w-8 text-primary-600 group-hover:scale-110 transition-transform" />
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {activity.time}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-neutral-900 mb-3">
                      {activity.title}
                    </h3>
                    <p className="text-neutral-600 mb-4 leading-relaxed flex-grow">
                      {activity.description}
                    </p>
                    <Link
                      to={activity.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform mt-auto"
                    >
                      En savoir plus
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </motion.div>
                )
              })}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/club"
                className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Découvrir le club
                <ChevronRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Upcoming Events (INCHANGÉ) */}
        <section className="py-24 bg-gradient-to-br from-primary-50 via-primary-50 to-accent-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
                Prochains événements
              </h2>
              <p className="text-xl text-neutral-600">
                Voici les trois prochains rendez-vous du calendrier
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {upcomingEvents.map((eventOrGroup, index) => {
                const isGroup = Array.isArray(eventOrGroup);
                const event = isGroup ? eventOrGroup[0] : eventOrGroup;
                
                return (
                  <motion.div
                    key={event.id + (isGroup ? '-group' : '')}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                        {new Date(event.date).toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'short' })}
                      </span>
                      <span className="text-sm text-neutral-500">{event.time}</span>
                    </div>

                    <div className="flex-grow">
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {isGroup ? (event.description || event.title) : event.title}
                      </h3>
                      
                      {isGroup ? (
                         <div className="space-y-2 mb-4">
                            {(eventOrGroup as typeof programmeEvents[0][]).map(subEvent => (
                                <div key={subEvent.id} className="bg-neutral-50 rounded p-2 border border-neutral-100">
                                    <p className="text-sm font-medium text-neutral-800">
                                        {subEvent.title.includes(':') ? subEvent.title.split(':')[1].trim() : subEvent.title}
                                    </p>
                                    {subEvent.location && (
                                        <div className="flex items-center text-xs text-neutral-500 mt-1">
                                            <MapPin className="h-3 w-3 mr-1" />
                                            {subEvent.location}
                                        </div>
                                    )}
                                </div>
                            ))}
                         </div>
                      ) : (
                        <>
                            <p className="text-neutral-600 text-sm mb-4">
                                {event.description}
                            </p>
                            {event.location && (
                                <div className="flex items-center text-sm text-neutral-500">
                                <MapPin className="h-4 w-4 mr-1" />
                                {event.location}
                                </div>
                            )}
                        </>
                      )}
                    </div>

                  </motion.div>
                );
              })}
            </div>

            <div className="text-center">
              <Link
                to="/programme"
                className="inline-flex items-center bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
              >
                Voir tout le programme
                <Calendar className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* MODIFICATION 5: Remplacement de la section Actualités par une Grille */}
        <section className="py-24 bg-gradient-to-br from-neutral-50 to-secondary-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-serif font-bold text-neutral-900 mb-4">
                Actualités échiquéennes du club
              </h2>
              <p className="text-xl text-neutral-600 mb-6">
                Restez informé des dernières nouvelles, tournois, et événements du club
              </p>
              <div className="h-1 w-24 bg-primary-600 mx-auto" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {sortedNews.slice(0, visibleNewsCount).map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col h-full group"
                >
                  {/* Image de couverture */}
                  <div className="relative h-48 overflow-hidden bg-neutral-200">
                     {item.hasImage && item.image ? (
                        <img 
                          src={item.image.src} 
                          alt={item.image.alt || item.title} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                     ) : (
                        <div className="w-full h-full flex items-center justify-center bg-primary-50">
                           <Trophy className="w-12 h-12 text-primary-200" />
                        </div>
                     )}
                     <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary-700 shadow-sm">
                        {new Date(item.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })}
                     </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-neutral-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-neutral-600 text-sm mb-4 line-clamp-3 flex-grow">
                      {item.description}
                    </p>

                    <div className="pt-4 border-t border-neutral-100 mt-auto">
                       <button
                          onClick={() => openNewsModal(item)}
                          className="text-primary-600 font-semibold text-sm hover:text-primary-700 flex items-center gap-1 group/btn"
                       >
                          Lire l'article
                          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                       </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {visibleNewsCount < sortedNews.length && (
              <div className="text-center">
                <button
                  onClick={handleLoadMore}
                  className="inline-flex items-center bg-white hover:bg-neutral-50 text-neutral-700 border border-neutral-300 px-8 py-3 rounded-full font-semibold transition-all duration-300 shadow-sm hover:shadow-md"
                >
                  Voir plus d'actualités
                  <ChevronDown className="ml-2 h-5 w-5" />
                </button>
              </div>
            )}

          </div>
        </section>

        {/* News Modal (CORRIGÉ) */}
        <AnimatePresence>
          {selectedNews !== null && newsItems[selectedNews] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4"
              onClick={closeNewsModal}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-md"
              />

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                // MODIFICATION 1: Ajout de flex et flex-col ici
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeNewsModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <X className="h-5 w-5 text-neutral-700" />
                </button>

                {newsItems[selectedNews].hasImage && newsItems[selectedNews].image && (
                  // flex-shrink-0 empêche l'image de rétrécir
                  <div className="relative h-64 overflow-hidden flex-shrink-0">
                    <img
                      src={newsItems[selectedNews].image.src}
                      alt={newsItems[selectedNews].image.alt || ''}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                {/* MODIFICATION 2: Ce conteneur devient le parent scrollable */}
                <div className="p-8 overflow-y-auto">
                  <div className="flex items-center space-x-2 mb-4">
                    <Trophy className="h-5 w-5 text-primary-600" />
                    <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                      {formatDate(newsItems[selectedNews].date)}
                    </span>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                    {newsItems[selectedNews].title}
                  </h2>

                  {newsItems[selectedNews].description && (
                    <p className="text-lg text-neutral-700 mb-6 font-medium">
                      {newsItems[selectedNews].description}
                    </p>
                  )}

                  {/* MODIFICATION 3: Suppression de la div scrollable qui était ici */}
                  <div className="text-neutral-600 leading-relaxed space-y-1">
                    {renderTextWithLinks(newsItems[selectedNews].text)}
                  </div>

                  {newsItems[selectedNews].hasLink && newsItems[selectedNews].link && (
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <Link
                        to={newsItems[selectedNews].link}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-all duration-300"
                      >
                        {newsItems[selectedNews].linkText || 'Voir détails'}
                        <ChevronRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  )}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Contact & Location (INCHANGÉ) */}
        <section className="py-24 bg-gradient-to-br from-neutral-900 via-neutral-950 to-primary-950 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-serif font-bold mb-6">
                  Venez nous rendre visite
                </h2>
                <p className="text-xl text-neutral-300 mb-8 leading-relaxed">
                  Notre local vous accueille tous les vendredis soirs dans une ambiance
                  conviviale au cœur de Sion.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Adresse</h3>
                      <p className="text-neutral-300">Rue des Châteaux 2<br />1950 Sion</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-primary-400 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Soirées du club</h3>
                      <p className="text-neutral-300">Ouvert à tous, vendredi dès 20h30</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <Link
                  to="/club#devenir-membre"
                  className="block w-full bg-white hover:bg-neutral-50 text-neutral-900 text-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Devenir membre
                </Link>
                <Link
                  to="/contact"
                  className="block w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white text-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
                >
                  Nous contacter
                </Link>
                <Link
                  to="/club"
                  className="block w-full border-2 border-white/30 hover:border-white/50 text-white text-center px-8 py-4 rounded-2xl font-semibold transition-all duration-300 transform hover:-translate-y-1"
                >
                  Découvrir le club
                </Link>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}