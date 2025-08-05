import { Link } from 'react-router-dom'
import { Trophy, Calendar, Users, ChevronRight, MapPin, Clock, Zap, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { newsItems } from '../data/news'
import { programmeEvents } from '../data/programme'
import { useState } from 'react'

export default function Home() {
  const [selectedNews, setSelectedNews] = useState<number | null>(null)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }
  
  const openNewsModal = (index: number) => {
    setSelectedNews(index)
  }
  
  const closeNewsModal = () => {
    setSelectedNews(null)
  }
  
  const renderTextWithLinks = (text: string) => {
    // Séparer le texte principal du lien final
    const linkMatch = text.match(/\n→ (.+) : (\/\S+)$/)
    let mainText = text
    let linkElement = null
    
    if (linkMatch) {
      mainText = text.substring(0, text.lastIndexOf('\n→'))
      const [, linkText, url] = linkMatch
      linkElement = (
        <div className="mt-4 pt-4 border-t border-neutral-200">
          <Link 
            to={url}
            className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-all duration-300"
          >
            → {linkText}
            <ChevronRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      )
    }
    
    // Traiter le texte principal en préservant le formatage
    const processedText = mainText.split('\n').map((line, index) => {
      // Gérer les titres en gras
      if (line.startsWith('**') && line.endsWith('**')) {
        return (
          <p key={index} className="font-bold text-neutral-800 mt-4 mb-2">
            {line.replace(/\*\*/g, '')}
          </p>
        )
      }
      // Gérer les listes avec puces
      if (line.startsWith('•')) {
        return (
          <p key={index} className="ml-4 mb-1">
            {line}
          </p>
        )
      }
      // Gérer les listes avec symboles
      if (line.match(/^[✓=✗]/)) {
        return (
          <p key={index} className="font-semibold mb-1 mt-2">
            {line}
          </p>
        )
      }
      // Paragraphes normaux
      return line.trim() ? (
        <p key={index} className="mb-2">
          {line}
        </p>
      ) : (
        <br key={index} />
      )
    })
    
    return (
      <>
        {processedText}
        {linkElement}
      </>
    )
  }

  const upcomingEvents = programmeEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  const activities = [
    {
      icon: Zap,
      title: "Les soirées du club",
      description: "Soirées blitz, analyses, parties semi-rapides ou thématiques",
      time: "vendredi dès 20h00",
      link: "/programme"
    },
    {
      icon: Users,
      title: "Pôle formation",
      description: "Cours pour écoliers, joueurs intermédiaires et avancés, jeunes ou adultes",
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
    <div className="overflow-hidden">
      {/* Hero Section with Parallax Effect */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: 'url("./picture/background/valere.webp")',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary-900/85 via-primary-800/75 to-primary-700/65" />
        </div>

        {/* Content */}
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
            <div className="h-1 w-24 bg-primary-400 mx-auto mb-6" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-2xl md:text-3xl mb-4 text-primary-200 font-light"
          >
            Fondé en 1935
          </motion.p>

          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg md:text-xl mb-12 text-primary-100 max-w-3xl mx-auto leading-relaxed"
          >
            Bienvenue, le club reprend ses activités dès le 26 août avec la rentrée des cours.


          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/club"
              className="group bg-white hover:bg-primary-50 text-primary-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Découvrir le club
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/programme"
              className="group bg-primary-700/40 hover:bg-primary-600/50 backdrop-blur text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Programme
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>

      </section>


      {/* Activities Section */}
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

      {/* Upcoming Events */}
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
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-primary-600 bg-primary-100 px-3 py-1 rounded-full">
                    {new Date(event.date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                  </span>
                  <span className="text-sm text-neutral-500">{event.time}</span>
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {event.title}
                </h3>
                <p className="text-neutral-600 text-sm mb-4">
                  {event.description}
                </p>
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

      {/* News Section - Card Layout */}
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
              Voici les dernières nouvelles 
            </p>
            <div className="h-1 w-24 bg-primary-600 mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={`news-${index}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group flex flex-col bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              >
                {/* Image Section */}
                {item.hasImage && item.image && (
                  <div className="relative overflow-hidden h-48">
                    <img
                      src={item.image.src}
                      alt={item.image.alt || ''}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                
                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="bg-primary-100 group-hover:bg-primary-200 p-2 rounded-xl transition-colors duration-300">
                        <Trophy className="h-5 w-5 text-primary-600" />
                      </div>
                      <div className="flex-1">
                        <span className="text-xs font-medium text-primary-600 bg-primary-50 px-2 py-1 rounded-full">
                          {formatDate(item.date)}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                    {item.title}
                  </h3>

                  {/* Wrapper pour le contenu du bas (description + footer) */}
                  <div className="mt-auto pt-2">
                    {/* Description */}
                    {item.description && (
                      <p className="text-neutral-700 text-base mb-4 leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    
                    {/* Footer */}
                    <div className="flex items-center justify-between">
                      {item.hasLink && item.link ? (
                        <Link
                          to={item.link}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-300"
                        >
                          {item.linkText || 'Voir détails'}
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </Link>
                      ) : (
                        <button 
                          onClick={() => openNewsModal(index)}
                          className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-300"
                        >
                          Lire l'article au complet
                          <ChevronRight className="ml-1 h-4 w-4" />
                        </button>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* News Modal */}
      <AnimatePresence>
        {selectedNews !== null && newsItems[selectedNews] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={closeNewsModal}
          >
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-md"
            />
            
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeNewsModal}
                className="absolute top-4 right-4 z-10 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-200 hover:scale-110"
              >
                <X className="h-5 w-5 text-neutral-700" />
              </button>
              
              {/* Image */}
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
              
              {/* Content */}
              <div className="p-8">
                {/* Date */}
                <div className="flex items-center space-x-2 mb-4">
                  <Trophy className="h-5 w-5 text-primary-600" />
                  <span className="text-sm font-medium text-primary-600 bg-primary-50 px-3 py-1 rounded-full">
                    {formatDate(newsItems[selectedNews].date)}
                  </span>
                </div>
                
                {/* Title */}
                <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-4">
                  {newsItems[selectedNews].title}
                </h2>
                
                {/* Description */}
                {newsItems[selectedNews].description && (
                  <p className="text-lg text-neutral-700 mb-6 font-medium">
                    {newsItems[selectedNews].description}
                  </p>
                )}
                
                {/* Full Text */}
                <div className="text-neutral-600 leading-relaxed overflow-y-auto max-h-[50vh] space-y-1">
                  {renderTextWithLinks(newsItems[selectedNews].text)}
                </div>
                
                {/* Link if available */}
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

      {/* Contact & Location */}
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
                    <p className="text-neutral-300">Tous les vendredis soirs dès 20h00</p>
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
  )
}