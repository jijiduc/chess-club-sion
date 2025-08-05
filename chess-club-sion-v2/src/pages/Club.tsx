import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Users, Trophy, MapPin, ChevronRight, Clock, CheckCircle } from 'lucide-react'

export default function Club() {
  const localImage = { src: './picture/local/local3.jpg', alt: 'Entrée du club' }
  const activities = [
    { text: "Des cours d'échecs structurées dans le pôle formation", link: "/ecole" },
    { text: "Des soirées du club : blitz, analyses, parties semi-rapides ou thématiques ", link: "/programme" },
    { text: "Participation aux championnats suisses par équipes et par groupes", link: "/competitions/cse" },
    { text: "Participation aux diverses championnats valaisan par équipes", link: "/competitions/cve" },
    { text: "Un championnat interne au club", link: "/competitions/tournoi-interne" }
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl font-serif font-bold mb-6"
          >
            Club d'Échecs de Sion
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-3xl"
          >
            Depuis 1935, le lieu de rencontre autour de l'échiquier à Sion
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Presentation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Présentation</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-neutral-700 mb-4 leading-relaxed">
                Le Club d'Échecs de Sion, fondé en 1935, est le lieu de rencontre pour tous les passionnés d'échecs dans la capitale valaisanne.
              </p>
              <p className="mb-6">
                <Link to="/histoire" className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 hover:underline transition-colors">
                  En savoir plus sur l'histoire du club, les joueurs et les événements marquants
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Link>
              </p>
              
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">Nous proposons :</h3>
              <ul className="space-y-3">
                {activities.map((activity, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start"
                  >
                    <CheckCircle className="h-5 w-5 text-primary-600 mt-0.5 mr-3 flex-shrink-0" />
                    <Link to={activity.link} className="text-neutral-700 hover:text-primary-600 transition-colors">
                      {activity.text}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
          >
            <Link to="/membres" className="block bg-white rounded-xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
              <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-primary-600 mb-2">28</h3>
              <p className="text-neutral-600 underline">Membres actifs en compétition</p>
            </Link>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Trophy className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">90</h3>
              <p className="text-neutral-600">Années d'histoire</p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8 text-center">
              <Trophy className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-3xl font-bold text-neutral-900 mb-2">6</h3>
              <p className="text-neutral-600">Équipes en championnat</p>
              <p className="text-sm text-neutral-500 mt-2">2 CSE • 2 CSG • 2 CVE</p>
            </div>
          </motion.div>

          {/* Devenir membre */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="devenir-membre"
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Devenir Membre</h2>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <p className="text-lg text-neutral-700 mb-8 leading-relaxed">
                Nous vous proposons de venir participer au soirées du club 
                afin nous découvrir, prendre contact et vous familiariser avec notre ambiance et nos activités. Une fois ce premier contact effectué, nous nous réjouissons de vous acceuillir parmi nous.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-primary-900 mb-4">Cotisations annuelles</h3>
                  <ul className="space-y-3">
                    <li className="flex justify-between items-center">
                      <span className="text-neutral-700">Adultes</span>
                      <span className="font-semibold text-primary-900">CHF 250.-</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-neutral-700">Juniors (- 20 ans)</span>
                      <span className="font-semibold text-primary-900">CHF 150.-</span>
                    </li>
                  </ul>
                  <p className="text-sm text-neutral-600 mt-3 pt-3 border-t border-primary-200">
                    Pour les juniors, la cotisation est de <strong>CHF 100.-</strong> la première année.
                  </p>
                </div>
                
                <div className="bg-gradient-to-br from-neutral-50 to-neutral-100 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-neutral-900 mb-4">Adhésion</h3>
                  <p className="text-neutral-700 mb-4">
                    Pour devenir membre, vous pouvez :
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      <Link to="/programme" className="text-primary-600 hover:text-primary-700">
                        Venir aux soirées du club
                      </Link>
                    </li>
                    <li className="flex items-center">
                      <ChevronRight className="h-4 w-4 text-primary-600 mr-2" />
                      <Link to="/contact" className="text-primary-600 hover:text-primary-700">
                        Nous contacter directement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Local du club */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="local-jeu"
            className="mb-16"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8">Local du Club</h2>
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Information Section */}
                <div className="p-8 border-b-[3px] lg:border-b-0 lg:border-r-[3px] border-primary-600">
                  <div className="flex items-start mb-6">
                    <MapPin className="h-6 w-6 text-primary-600 mt-1 mr-3" />
                    <div>
                      <p className="text-lg text-neutral-700 mb-2">
                        Le local est au dernier étage de la maison des Penaudiers.
                      </p>
                      <address className="text-neutral-600 not-italic">
                        Rue des Châteaux 2<br />
                        1950 Sion
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-center text-neutral-600 mb-6">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>Ouvert tous les vendredis dès 20h</span>
                  </div>
                  
                  <a 
                    href="https://www.google.com/maps/place/Rue+des+Ch%C3%A2teaux+2,+1950+Sion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary-600 hover:text-primary-700 text-sm"
                  >
                    Ouvrir dans Google Maps
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </a>
                </div>
                
                {/* Building Photo */}
                <div className="relative h-full min-h-[400px] lg:min-h-0 bg-neutral-100">
                  <div className="relative h-full">
                    <img 
                      src={localImage.src}
                      alt={localImage.alt}
                      className="w-full h-full object-contain"
                    />
                    
                    {/* Caption */}
                    <div className="absolute bottom-4 left-4 right-4 text-center">
                      <p className="text-sm font-medium text-neutral-700 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full inline-block">
                        {localImage.alt}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Map Section */}
              <div className="w-full h-96 relative bg-neutral-100 border-t-[3px] border-primary-600">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.440083544647!2d7.355490776721072!3d46.23375377108091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478edc44826a14cd%3A0x5ad7276f0d90b279!2sRue%20des%20Ch%C3%A2teaux%202%2C%201950%20Sion!5e0!3m2!1sfr!2sch!4v1707342008370!5m2!1sfr!2sch"
                  className="w-full h-full border-0"
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation du Club d'Échecs de Sion"
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="bg-white bg-opacity-90 rounded-lg p-4 text-center hidden">
                    <MapPin className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                    <p className="text-neutral-700">Carte en cours de chargement...</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}