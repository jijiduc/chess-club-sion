import { Link } from 'react-router-dom'
import { Trophy, Calendar, Users, ChevronRight, MapPin, Clock, Zap, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { newsItems } from '../data/news'
import { programmeEvents } from '../data/programme'
import { useState } from 'react'

export default function Home() {
  const [expandedNews, setExpandedNews] = useState<number | null>(null)
  
  const formatDate = (date: Date) => {
    return date.toLocaleDateString('fr-FR', { 
      day: 'numeric', 
      month: 'long', 
      year: 'numeric' 
    })
  }
  
  const toggleNews = (index: number) => {
    setExpandedNews(expandedNews === index ? null : index)
  }

  // Removed unused formatText function

  const upcomingEvents = programmeEvents
    .filter(event => new Date(event.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 3)

  const activities = [
    {
      icon: Users,
      title: "Formation",
      description: "Cours d'échecs pour jeunes et débutants tous les vendredis",
      time: "19h00-20h00",
      link: "/ecole"
    },
    {
      icon: Zap,
      title: "Soirées Club",
      description: "Blitz, analyses, parties semi-rapides et soirées thématiques",
      time: "20h30",
      link: "/programme"
    },
    {
      icon: Trophy,
      title: "Compétitions",
      description: "CSE, CVE, CSG - Participez aux championnats suisses et valaisans",
      time: "Week-ends",
      link: "/competitions/cse"
    },
    {
      icon: Calendar,
      title: "Tournois",
      description: "Tournois internes et championnats valaisans organisés au club",
      time: "Selon calendrier",
      link: "/programme"
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
            Le club d'échecs sédunois vous accueille pour découvrir 
            ou perfectionner votre passion du jeu d'échecs dans une ambiance conviviale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <Link
              to="/club#devenir-membre"
              className="group bg-white hover:bg-primary-50 text-primary-800 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Devenir membre
              <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/programme"
              className="group bg-primary-700/40 hover:bg-primary-600/50 backdrop-blur text-white border-2 border-white/20 hover:border-white/40 px-8 py-4 rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center"
            >
              Programme & Calendrier
              <Calendar className="ml-2 h-5 w-5 group-hover:scale-110 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
        >
          <div className="flex flex-col items-center space-y-2">
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-1 h-3 bg-white/70 rounded-full mt-2"
              />
            </div>
            <span className="text-sm text-white/70">Découvrir</span>
          </div>
        </motion.div>
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
              Du débutant au joueur confirmé, découvrez toutes nos activités 
              pour progresser et partager votre passion des échecs.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gradient-to-br from-neutral-50 to-neutral-100 hover:from-primary-50 hover:to-primary-100 rounded-2xl p-6 transition-all duration-300 hover:shadow-lg"
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
                  <p className="text-neutral-600 mb-4 leading-relaxed">
                    {activity.description}
                  </p>
                  <Link
                    to={activity.link}
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-transform"
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
              Ne manquez pas nos prochaines activités !
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
              Actualités du club
            </h2>
            <p className="text-xl text-neutral-600 mb-6">
              Suivez les dernières nouvelles et événements marquants
            </p>
            <div className="h-1 w-24 bg-primary-600 mx-auto" />
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.map((item, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
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
                <div className="p-6">
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
                  <h3 className="text-xl font-serif font-bold text-neutral-900 mb-3 group-hover:text-primary-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  {/* Description */}
                  {item.description && (
                    <p className="text-neutral-700 text-base mb-4 leading-relaxed">
                      {item.description}
                    </p>
                  )}
                  
                  {/* Expanded Content */}
                  <AnimatePresence>
                    {expandedNews === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="text-neutral-600 text-sm mb-4 leading-relaxed whitespace-pre-line">
                          {item.text}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
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
                        onClick={() => toggleNews(index)}
                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-all duration-300"
                      >
                        {expandedNews === index ? (
                          <>
                            Réduire
                            <ChevronDown className="ml-1 h-4 w-4 rotate-180 transition-transform" />
                          </>
                        ) : (
                          <>
                            Lire plus
                            <ChevronDown className="ml-1 h-4 w-4 transition-transform" />
                          </>
                        )}
                      </button>
                    )}
                    
                    <div className="flex items-center space-x-2 text-xs text-neutral-400">
                      <div className="w-1.5 h-1.5 bg-primary-400 rounded-full"></div>
                      <span>Actualité</span>
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
                    <h3 className="font-semibold text-lg">Horaires</h3>
                    <p className="text-neutral-300">Vendredis soirs<br />19h00 : Cours jeunes<br />20h30 : Soirée club</p>
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