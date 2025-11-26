import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { Title, Meta } from 'react-head';
import { Users, Trophy, MapPin, ChevronRight, Clock, CheckCircle2, CreditCard, Mail, Map } from 'lucide-react'

export default function Club() {
  const localImage = { src: './picture/local/entree.jpg', alt: 'Entrée du club' }
  const activities = [
    { text: "Des cours d'échecs structurés dans le pôle formation", link: "/ecole" },
    { text: "Des soirées du club : blitz, analyses, parties semi-rapides ou thématiques ", link: "/programme" },
    { text: "Participation aux championnats suisses par équipes et par groupes", link: "/competitions/cse" },
    { text: "Participation aux divers championnats valaisans par équipes", link: "/competitions/cve" },
    { text: "Un championnat interne au club", link: "/competitions/tournoi-interne" }
  ]

  return (
    <>
      {/* Balises Meta */}
      <Title>Le Club - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez le Club d'Échecs de Sion. Informations sur nos activités, les cotisations pour devenir membre et l'emplacement de notre local de jeu." />

      {/* Hero Section */}
      <section className="relative min-h-[30vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-primary-100 text-sm font-medium tracking-[0.2em] mb-8 backdrop-blur-sm uppercase">
              Depuis 1935
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Club d'Échecs de Sion
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8 opacity-80" />
            <p className="text-xl text-primary-100 font-light max-w-3xl mx-auto leading-relaxed">
              Le cœur battant des échecs en Valais. Un lieu de rencontre, de formation et de compétition pour tous les passionnés.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Presentation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-neutral-100 relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400" />
               
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-900 mb-6">Notre Vision</h2>
                    <p className="text-lg text-neutral-700 mb-6 leading-relaxed">
                        Le Club d'Échecs de Sion est plus qu'un simple club sportif; c'est une institution qui perpétue une tradition intellectuelle et sociale depuis près d'un siècle au cœur de la capitale valaisanne.
                    </p>
                    <p className="mb-8">
                        <Link to="/histoire" className="inline-flex items-center font-semibold text-primary-600 hover:text-primary-700 hover:underline transition-colors group-hover:translate-x-1 duration-300">
                        Découvrir notre histoire
                        <ChevronRight className="h-4 w-4 ml-1" />
                        </Link>
                    </p>

                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-4">Ce que nous offrons :</h3>
                    <ul className="space-y-4">
                        {activities.map((activity, index) => (
                        <li key={index} className="flex items-start group/item">
                            <CheckCircle2 className="h-6 w-6 text-primary-500 mt-0.5 mr-3 flex-shrink-0 group-hover/item:text-primary-600 transition-colors" />
                            <Link to={activity.link} className="text-neutral-700 hover:text-primary-600 transition-colors font-medium">
                            {activity.text}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div>
                <div className="relative h-full min-h-[300px] rounded-xl overflow-hidden shadow-md rotate-2 hover:rotate-0 transition-transform duration-500">
                    <img 
                        src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                        alt="Jeu d'échecs" 
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary-900/20 hover:bg-transparent transition-colors duration-300" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
          >
            <Link to="/membres" className="group block bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100">
              <div className="inline-flex p-4 rounded-full bg-primary-50 text-primary-600 mb-6 group-hover:bg-primary-100 group-hover:scale-110 transition-all duration-300">
                 <Users className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-primary-900 mb-2 group-hover:text-primary-600 transition-colors">30+</h3>
              <p className="text-neutral-600 font-medium">Membres actifs</p>
            </Link>
            
            <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100">
               <div className="inline-flex p-4 rounded-full bg-amber-50 text-amber-600 mb-6 group-hover:bg-amber-100 group-hover:scale-110 transition-all duration-300">
                 <Clock className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-primary-900 mb-2">90</h3>
              <p className="text-neutral-600 font-medium">Années d'existence</p>
            </div>
            
            <div className="group bg-white rounded-2xl shadow-lg p-8 text-center hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border border-neutral-100">
               <div className="inline-flex p-4 rounded-full bg-emerald-50 text-emerald-600 mb-6 group-hover:bg-emerald-100 group-hover:scale-110 transition-all duration-300">
                 <Trophy className="h-10 w-10" />
              </div>
              <h3 className="text-4xl font-bold text-primary-900 mb-2">7</h3>
              <p className="text-neutral-600 font-medium">Équipes en lice</p>
              <p className="text-xs text-neutral-400 mt-2 font-mono uppercase tracking-wider">CSE • CSG • CVE</p>
            </div>
          </motion.div>

          {/* Devenir membre */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            id="devenir-membre"
            className="mb-20"
          >
            <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold text-primary-900 mb-4">Rejoignez-nous</h2>
                <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
                    Venez découvrir l'ambiance du club lors d'une soirée d'essai sans engagement.
                </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-stretch">
                {/* Cotisations Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col">
                   <div className="bg-primary-900 p-6 text-white text-center">
                      <CreditCard className="h-8 w-8 mx-auto mb-3 opacity-80" />
                      <h3 className="text-2xl font-serif font-bold">Cotisations Annuelles</h3>
                   </div>
                   <div className="p-8 flex-grow flex flex-col justify-center">
                      <ul className="space-y-6">
                        <li className="flex justify-between items-center p-4 bg-primary-50/50 rounded-xl hover:bg-primary-50 transition-colors">
                          <div className="flex flex-col">
                             <span className="text-lg font-bold text-primary-900">Adultes</span>
                             <span className="text-sm text-neutral-500">Dès 20 ans</span>
                          </div>
                          <span className="text-2xl font-bold text-primary-700">CHF 250.-</span>
                        </li>
                        <li className="flex justify-between items-center p-4 bg-amber-50/50 rounded-xl hover:bg-amber-50 transition-colors">
                          <div className="flex flex-col">
                             <span className="text-lg font-bold text-primary-900">Juniors</span>
                             <span className="text-sm text-neutral-500">Moins de 20 ans</span>
                          </div>
                          <span className="text-2xl font-bold text-amber-600">CHF 150.-</span>
                        </li>
                      </ul>
                      <div className="mt-6 text-center">
                         <span className="inline-block px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-bold">
                            Offre Spéciale : 1ère année Junior à CHF 100.-
                         </span>
                      </div>
                   </div>
                </div>

                {/* Adhésion Card */}
                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 flex flex-col">
                   <div className="bg-neutral-800 p-6 text-white text-center">
                      <Mail className="h-8 w-8 mx-auto mb-3 opacity-80" />
                      <h3 className="text-2xl font-serif font-bold">Comment adhérer ?</h3>
                   </div>
                   <div className="p-8 flex-grow flex flex-col justify-center items-center text-center">
                      <p className="text-lg text-neutral-600 mb-8">
                        La meilleure façon de nous rejoindre est de passer nous voir. L'ambiance est conviviale et nous accueillons les joueurs de tous niveaux.
                      </p>
                      <div className="space-y-4 w-full max-w-md">
                         <Link to="/programme" className="group flex items-center justify-between w-full p-4 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary-500 hover:shadow-md transition-all duration-300">
                            <span className="font-medium text-neutral-800">Consulter le programme</span>
                            <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                         </Link>
                         <Link to="/contact" className="group flex items-center justify-between w-full p-4 bg-neutral-50 rounded-xl border border-neutral-200 hover:border-primary-500 hover:shadow-md transition-all duration-300">
                            <span className="font-medium text-neutral-800">Contacter le comité</span>
                            <ChevronRight className="h-5 w-5 text-neutral-400 group-hover:text-primary-600 transition-colors" />
                         </Link>
                      </div>
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
            className="mb-12"
          >
            <h2 className="text-4xl font-serif font-bold text-primary-900 mb-8 text-center">Notre Local</h2>
            <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100">
              {/* Info and Image Row */}
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Information Section */}
                <div className="p-10 flex flex-col justify-center bg-gradient-to-br from-white to-neutral-50">
                   <div className="mb-8">
                       <h3 className="text-2xl font-bold text-primary-900 mb-2">Maison des Penaudiers</h3>
                       <div className="h-1 w-16 bg-primary-500 rounded-full mb-6" />
                       
                       <div className="flex items-start mb-6">
                        <div className="p-3 bg-primary-100 rounded-lg mr-4 text-primary-700">
                            <MapPin className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-neutral-900">Adresse</p>
                          <address className="text-neutral-600 not-italic text-lg">
                            Rue des Châteaux 2<br />
                            1950 Sion (Dernier étage)
                          </address>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <div className="p-3 bg-amber-100 rounded-lg mr-4 text-amber-700">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div>
                          <p className="text-lg font-medium text-neutral-900">Horaires</p>
                          <p className="text-neutral-600 text-lg">
                            Tous les vendredis dès 20h00
                          </p>
                        </div>
                      </div>
                   </div>

                  <a
                    href="https://www.google.com/maps/place/Rue+des+Ch%C3%A2teaux+2,+1950+Sion"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
                  >
                    <Map className="mr-2 h-5 w-5" />
                    Itinéraire via Google Maps
                  </a>
                </div>

                {/* Image Section */}
                <div className="relative h-full min-h-[400px] lg:min-h-0 bg-neutral-100">
                  <img
                    src={localImage.src}
                    alt={localImage.alt}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                     <p className="text-white font-medium text-center">{localImage.alt}</p>
                  </div>
                </div>
              </div>

              {/* Map Section */}
              <div className="w-full h-96 relative bg-neutral-100 border-t-4 border-primary-600">
                   <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2764.440083544647!2d7.355490776721072!3d46.23375377108091!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478edc44826a14cd%3A0x5ad7276f0d90b279!2sRue%20des%20Ch%C3%A2teaux%202%2C%201950%20Sion!5e0!3m2!1sfr!2sch!4v1707342008370!5m2!1sfr!2sch"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-500"
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Localisation du Club d'Échecs de Sion"
                  />
                   {/* Overlay Label */}
                   <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-lg shadow-lg text-xs font-bold text-primary-900 border border-white/50 pointer-events-none">
                      📍 Centre Historique
                   </div>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  )
}