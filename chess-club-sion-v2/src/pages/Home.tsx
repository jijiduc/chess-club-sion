import { Link } from 'react-router-dom'
// MODIFICATION 1: Ajout des icônes pour la navigation du carrousel
import { Trophy, Calendar, Users, ChevronRight, MapPin, Clock, Zap, X, ArrowRight, ChevronUp, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { newsItems } from '../data/news'
import { programmeEvents } from '../data/programme'
import { useState } from 'react'
import { Title, Meta } from 'react-head';

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  // MODIFICATION 2: Ajout d'un état pour l'index de la carte active dans le carrousel
  const [activeIndex, setActiveIndex] = useState(0);

  // MODIFICATION 3: Trier les actualités par date, de la plus récente à la plus ancienne
  // Nous utilisons une copie avec [...] pour ne pas muter l'array original importé
  const sortedNews = [...newsItems].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // MODIFICATION 4: Fonctions pour naviguer dans le carrousel
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % sortedNews.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + sortedNews.length) % sortedNews.length);
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
  }

  const openNewsModal = (newsItem: any) => {
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

  const renderTextWithLinks = (text: string) => {
    return text.split('\n').map((line, index) => {
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="font-bold text-neutral-800 mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      }
      if (line.startsWith('•')) {
        return (
          <p key={index} className="ml-4 mb-1">
            {line}
          </p>
        )
      }
      if (line.match(/^[✓=✗]/)) {
        return (
          <p key={index} className="font-semibold mb-1 mt-2">
            {line}
          </p>
        )
      }
      return line.trim() ? (
        <p key={index} className="mb-2">
          {line}
        </p>
      ) : (
        <br key={index} />
      )
    })
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const upcomingEvents = programmeEvents
    .filter(event => new Date(event.date) >= today)
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

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
      link: "/competitions/cse"
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
              className="mt-12"
            >
              <div className="bg-black/20 backdrop-blur-sm border border-white/20 rounded-2xl p-6 max-w-2xl mx-auto">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="text-left">
                    <p className="font-semibold text-primary-200 flex items-center"><Trophy className="h-5 w-5 mr-2" /> Ne manquez pas</p>
                    <p className="text-xl text-white">Activ Chess de Sion - 26 Octobre 2025</p>
                  </div>
                  <Link
                    to="/activ-chess"
                    className="group bg-primary-500 hover:bg-primary-400 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 w-full md:w-auto"
                  >
                    Informations
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
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
              {upcomingEvents.map((event, index) => (
                <motion.div
                  key={event.id}
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
                      {event.title}
                    </h3>
                    <p className="text-neutral-600 text-sm mb-4">
                      {event.description}
                    </p>
                  </div>

                  {event.location && (
                    <div className="flex items-center text-sm text-neutral-500">
                      <MapPin className="h-4 w-4 mr-1" />
                      {event.location}
                    </div>
                  )}
                </motion.div>
              ))}
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

        {/* MODIFICATION 5: Remplacement de la section Actualités */}
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

            <div className="relative flex flex-col items-center justify-center max-w-3xl mx-auto">
              {/* Conteneur pour les boutons de navigation */}
              <div className="z-30 flex flex-col gap-4 absolute top-1/2 -translate-y-1/2 right-0 md:-right-24">
                <button onClick={handlePrev} className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all transform hover:scale-110">
                  <ChevronUp className="h-6 w-6 text-neutral-700" />
                </button>
                <button onClick={handleNext} className="bg-white/80 backdrop-blur-sm hover:bg-white rounded-full p-3 shadow-md hover:shadow-lg transition-all transform hover:scale-110">
                  <ChevronDown className="h-6 w-6 text-neutral-700" />
                </button>
              </div>

              {/* Stack de cartes */}
              <div className="relative w-full max-w-lg min-h-[400px]">
                {sortedNews.map((item, index) => {
                  const offset = index - activeIndex;
                  // On affiche seulement 3 cartes à la fois pour la performance
                  if (offset < 0 || offset > 2) return null;

                  return (
                    <motion.article
                      key={item.title} // Utiliser un ID unique si possible
                      className="group absolute top-0 flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg w-full" // ❌ h-full retiré
                      initial={{
                        y: 0,
                        scale: 1,
                        opacity: 0
                      }}
                      animate={{
                        y: offset * 30,
                        scale: 1 - (offset * 0.1),
                        opacity: 1 - (offset * 0.3),
                        zIndex: sortedNews.length - index,
                      }}
                      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
                    >
                      {item.hasImage && item.image && (
                        <div className="relative overflow-hidden h-48">
                          <img
                            src={item.image.src}
                            alt={item.image.alt || ''}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="p-6 flex flex-col flex-grow">
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full self-start mb-3">
                          {formatDate(item.date)}
                        </span>

                        <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3 line-clamp-2">
                          {item.title}
                        </h3>

                        {item.description && (
                          // ❌ flex-grow retiré d'ici
                          <p className="text-neutral-700 text-base mb-4 leading-relaxed line-clamp-3">
                            {item.description}
                          </p>
                        )}

                        {/* mt-auto va maintenant pousser le bouton juste après le contenu, pas au fond d'un conteneur de 500px */}
                        <div className="mt-auto pt-2">
                          <button
                            onClick={() => openNewsModal(item)}
                            className={`inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-300 ${index !== activeIndex ? 'pointer-events-none' : ''
                              }`}
                          >
                            Lire l'article au complet
                            <ChevronRight className="ml-1 h-4 w-4" />
                          </button>
                        </div>
                      </div>
                    </motion.article>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* News Modal (INCHANGÉ) */}
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
                className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  onClick={closeNewsModal}
                  className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
                >
                  <X className="h-5 w-5 text-neutral-700" />
                </button>

                {newsItems[selectedNews].hasImage && newsItems[selectedNews].image && (
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={newsItems[selectedNews].image.src}
                      alt={newsItems[selectedNews].image.alt || ''}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                )}

                <div className="p-8">
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

                  <div className="text-neutral-600 leading-relaxed overflow-y-auto max-h-[50vh] space-y-1">
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