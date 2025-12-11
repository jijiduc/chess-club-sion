import { motion } from 'framer-motion'
import { Trophy, Calendar, Users, Clock, ExternalLink, MapPin, Star, AlertCircle, CheckCircle2 } from 'lucide-react'
import { Title, Meta } from 'react-head';

export default function GPV() {
  // Données des tournois basées sur l'input utilisateur
  const tournaments = [
    { id: 1, location: "Bovernier", date: "19.10.2025", status: "completed" },
    { id: 2, location: "Active Chess de Sion", date: "26.10.2025", status: "completed" },
    { id: 3, location: "Riddes", date: "06.12.2025", status: "completed" },
    { id: 4, location: "Active Chess de Bagnes", date: "11.01.2026", status: "upcoming" },
    { id: 5, location: "Active Chess du Bouveret", date: "22.02.2026", status: "upcoming" },
    { id: 6, location: "Sierre", date: "TBD", status: "tbd" },
    { id: 7, location: "Active Chess de Martigny", date: "TBD", status: "tbd" },
  ];

  return (
    <>
      <Title>Grand Prix Valaisan Jeunes (GPV) - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez le Grand Prix Valaisan Jeunes (GPV/U20). Le circuit de tournois de référence pour les jeunes joueurs d'échecs du Valais." />
      
      <div className="min-h-screen bg-neutral-50">
        
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-amber-600 text-white py-24">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-white/20 border border-white/30 text-white text-sm font-bold mb-6 backdrop-blur-md uppercase tracking-wider">
                Circuit Junior U20
              </span>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">
                Grand Prix Valaisan Jeunes
              </h1>
              <p className="text-xl text-orange-100 max-w-2xl mx-auto">
                Le circuit officiel de tournois pour la relève des échecs en Valais. 
                Une série d'événements pour démarrer dans la compétition.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Left Column: Info & Rules */}
              <div className="lg:col-span-2 space-y-8">
                
                {/* Presentation Card */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl shadow-sm border border-neutral-200 p-8"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                      <Trophy className="h-6 w-6" />
                    </div>
                    <h2 className="text-2xl font-bold text-neutral-900">Le Format GPV</h2>
                  </div>
                  <div className="prose prose-orange text-neutral-600">
                    <p>
                      Le <strong>Grand Prix Valaisan Jeunes (GPV / U20)</strong> est organisé chaque saison par l'Union Valaisanne des Échecs (UVE). 
                      Il se dispute sous la forme d'un circuit comprenant plusieurs tournois répartis sur la saison (de septembre à août).
                    </p>
                    <p>
                      Ces tournois sont des événements conviviaux, se déroulant généralement sur une demi-journée ou une journée, permettant aux jeunes de s'initier à la compétition ou de perfectionner leur jeu.
                    </p>
                    <p>
                      Les événement nommé "Active Chess" sont des tournois ou des joueurs de tout âge peuvent participer. Cependant, seuls les joueurs âgés de moins de 20 ans au 1er septembre de la saison sont éligibles pour marquer des points dans le cadre du Grand Prix Valaisan Jeunes. Les tournois non labellisés "Active Chess" sont exclusivement réservés aux jeunes participants.
                    </p>
                  </div>
                </motion.div>

                {/* Rules Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6"
                  >
                    <h3 className="font-bold text-lg text-neutral-900 mb-4 flex items-center">
                      <Users className="h-5 w-5 mr-2 text-orange-500" />
                      Participation
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Ouvert à tous les jeunes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Âge maximum : <strong>20 ans révolus</strong> (au 1er septembre de la saison)</span>
                      </li>
                    </ul>
                  </motion.div>

                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6"
                  >
                    <h3 className="font-bold text-lg text-neutral-900 mb-4 flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-orange-500" />
                      Cadence & Format
                    </h3>
                    <ul className="space-y-2 text-sm text-neutral-600">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>Parties rapides : <strong>15 min.</strong> par joueur</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-green-500 mt-0.5" />
                        <span>7 à 9 rondes par tournoi</span>
                      </li>
                    </ul>
                  </motion.div>
                </div>

                {/* Ranking System */}
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-orange-50 rounded-2xl p-8 border border-orange-100"
                >
                  <h3 className="text-xl font-bold text-orange-900 mb-4 flex items-center">
                    <Star className="h-6 w-6 mr-2" />
                    Classement Final du Grand Prix
                  </h3>
                  <p className="text-orange-800 mb-4">
                    Pour figurer dans le classement final de la saison et prétendre au titre, un joueur doit avoir disputé au moins <strong>3 tournois</strong>.
                  </p>
                  <div className="bg-white rounded-xl p-4 border border-orange-200 shadow-sm">
                    <p className="text-sm font-medium text-neutral-700">
                      <AlertCircle className="h-4 w-4 inline mr-2 text-orange-500" />
                      Le classement final est établi en prenant en compte les <strong>3 meilleurs résultats individuels</strong> de chaque joueur sur l'ensemble de la saison.
                    </p>
                  </div>
                </motion.div>

              </div>

              {/* Right Column: Calendar */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-lg border border-neutral-200 overflow-hidden sticky top-24">
                  <div className="bg-neutral-900 text-white p-6">
                    <h3 className="text-xl font-bold flex items-center">
                      <Calendar className="h-5 w-5 mr-3 text-orange-400" />
                      Saison 2025-2026
                    </h3>
                    <p className="text-neutral-400 text-sm mt-1">Calendrier des étapes</p>
                  </div>
                  
                  <div className="divide-y divide-neutral-100">
                    {tournaments.map((event) => (
                      <div key={event.id} className="p-4 hover:bg-neutral-50 transition-colors">
                        <div className="flex justify-between items-start mb-2">
                          <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                            event.status === 'completed' ? 'bg-green-100 text-green-700' :
                            event.status === 'upcoming' ? 'bg-blue-100 text-blue-700' :
                            'bg-neutral-100 text-neutral-500'
                          }`}>
                            {event.status === 'completed' ? 'Terminé' : 
                             event.status === 'upcoming' ? 'À venir' : 'TBD'}
                          </span>
                          <span className="text-sm font-medium text-neutral-900">{event.date}</span>
                        </div>
                        <h4 className="font-bold text-neutral-800 mb-1 flex items-start">
                          <MapPin className="h-4 w-4 mr-1.5 mt-0.5 text-neutral-400 flex-shrink-0" />
                          {event.location}
                        </h4>
                      </div>
                    ))}
                  </div>

                  <div className="p-6 bg-neutral-50 border-t border-neutral-200">
                    <a 
                      href="https://www.uve-wsb.ch/competitions-valaisannes/grand-prix-valaisan-jeunes" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center w-full px-4 py-3 bg-white border border-neutral-300 text-neutral-700 font-semibold rounded-xl hover:bg-neutral-100 hover:text-orange-600 transition-all shadow-sm group"
                    >
                      Tableau officiel UVE
                      <ExternalLink className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}