import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { Calendar, Users, ArrowRight, Target, Medal, Shield, Trophy } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function CompetitionsHub() {
  useEffect(() => {
    document.title = "Compétitions - Club d'Échecs de Sion";
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="relative bg-neutral-900 text-white py-24 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-neutral-900/50 to-neutral-50/5"></div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-primary-300 text-sm font-bold uppercase tracking-widest mb-8 backdrop-blur-md"
            >
              <Trophy className="h-4 w-4" />
              <span>Saison 2025-2026</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 font-display tracking-tight leading-tight">
              Le Pôle <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400">Compétition</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-neutral-300 mb-12 leading-relaxed max-w-2xl mx-auto font-light">
              Du jeu par équipes aux tournois individuels, découvrez toutes les opportunités de représenter le club et de progresser.
            </p>

            {/* Quick Navigation */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-6 text-sm font-medium text-neutral-400"
            >
               <a href="#equipes" className="hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                 <Users className="h-4 w-4 text-primary-400" /> Équipes
               </a>
               <a href="#club" className="hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                 <Target className="h-4 w-4 text-amber-400" /> Club
               </a>
               <a href="#individuel" className="hover:text-white transition-colors flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-white/5">
                 <Shield className="h-4 w-4 text-purple-400" /> Individuel
               </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-20"
        >
          
          {/* 1. Compétitions par équipes */}
          <motion.div variants={itemVariants} id="equipes">
            <div className="flex items-center mb-8">
              <div className="bg-primary-100 p-3 rounded-xl mr-4">
                <Users className="h-8 w-8 text-primary-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900">Compétitions par Équipes</h2>
                <p className="text-neutral-600 text-lg">Représentez le club dans les championnats suisses et valaisans</p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "CSE",
                  subtitle: "Championnat Suisse par Équipes",
                  desc: "La compétition phare nationale. Nos équipes affrontent d'autres clubs de la région et de Suisse.",
                  link: "/competitions/cse",
                  color: "bg-blue-50 border-blue-100 hover:border-blue-300",
                  iconColor: "text-blue-600"
                },
                {
                  title: "CSG",
                  subtitle: "Championnat Suisse de Groupes",
                  desc: "Format par équipes de 4 joueurs, favorisant la cohésion et la tactique collective.",
                  link: "/competitions/csg",
                  color: "bg-green-50 border-green-100 hover:border-green-300",
                  iconColor: "text-green-600"
                },
                {
                  title: "CVE",
                  subtitle: "Championnat Valaisan par Équipes",
                  desc: "Le derby cantonal. Une compétition conviviale et disputée entre les clubs du Valais.",
                  link: "/competitions/cve",
                  color: "bg-red-50 border-red-100 hover:border-red-300",
                  iconColor: "text-red-600"
                },
              ].map((item, idx) => (
                <Link key={idx} to={item.link} className={`block p-6 rounded-xl border ${item.color} transition-all duration-300 hover:-translate-y-1 hover:shadow-md group h-full flex flex-col`}>
                  <h3 className={`text-2xl font-bold ${item.iconColor} mb-2`}>{item.title}</h3>
                  <h4 className="text-lg font-semibold text-neutral-900 mb-3">{item.subtitle}</h4>
                  <p className="text-neutral-600 mb-6 flex-grow">{item.desc}</p>
                  <span className={`inline-flex items-center font-medium ${item.iconColor} group-hover:underline`}>
                    En savoir plus <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

          {/* 2. Tournois du Club */}
          <motion.div variants={itemVariants} id="club">
            <div className="flex items-center mb-8">
              <div className="bg-amber-100 p-3 rounded-xl mr-4">
                <Target className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900">Tournois organisés par le club</h2>
                <p className="text-neutral-600 text-lg">Participez à la vie du club et progressez à votre rythme</p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
               <Link to="/competitions/championnat-interne" className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 overflow-hidden group flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-amber-400 to-amber-600" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-neutral-900">Championnat Interne</h3>
                      <Medal className="h-6 w-6 text-amber-500" />
                    </div>
                    <p className="text-neutral-600 mb-6 flex-grow">
                      Le tournoi classique du club. Une partie par mois (cadence lente) pour déterminer le champion du club. Idéal pour s'initier à la compétition sérieuse.
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Voir le classement <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
               </Link>

               <Link to="/activ-chess" className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 overflow-hidden group flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-primary-400 to-primary-600" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-neutral-900">Activ Chess de Sion</h3>
                      <Calendar className="h-6 w-6 text-primary-500" />
                    </div>
                    <p className="text-neutral-600 mb-6 flex-grow">
                      Un tournoi de parties rapides. La 1ère édition a eu lieu le 26 octobre 2025. Edition 2026 à suivre !
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Calendrier et résultats <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
               </Link>

               <Link to="/blitz-noel" className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 overflow-hidden group flex flex-col">
                  <div className="h-2 bg-gradient-to-r from-red-500 to-red-700" />
                  <div className="p-6 flex-grow flex flex-col">
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="text-xl font-bold text-neutral-900">Blitz de Noël</h3>
                      <span className="text-2xl">🎅</span>
                    </div>
                    <p className="text-neutral-600 mb-6 flex-grow">
                      L'événement festif de fin d'année ! Des parties blitz, de la bonne ambiance pour terminer l'année le 21 décembre 2025.
                    </p>
                    <span className="inline-flex items-center text-primary-600 font-semibold group-hover:text-primary-700">
                      Détails de l'événement <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </span>
                  </div>
               </Link>
            </div>
          </motion.div>

          {/* 3. Compétitions Individuelles Externes */}
          <motion.div variants={itemVariants} id="individuel">
            <div className="flex items-center mb-8">
              <div className="bg-purple-100 p-3 rounded-xl mr-4">
                <Shield className="h-8 w-8 text-purple-600" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-neutral-900">Compétitions Individuelles</h2>
                <p className="text-neutral-600 text-lg">Affrontez les meilleurs joueurs du canton</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
               <Link to="/competitions/cvi" className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 overflow-hidden group flex flex-col h-full">
                  <div className="h-2 bg-gradient-to-r from-purple-500 to-purple-700" />
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-neutral-900 mr-3">Coupe Valaisanne (CVI)</h3>
                        <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs font-bold uppercase rounded-full">Prestigieux</span>
                      </div>
                      <p className="text-neutral-600 mb-6 text-lg">
                        La compétition à élimination directe ouverte à tous les valaisans. Un format "Coupe" passionnant pour le titre cantonal.
                      </p>
                    </div>
                    <div className="mt-auto">
                        <span className="inline-flex items-center text-purple-600 font-semibold group-hover:text-purple-700">
                        Règlement et Infos <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                  </div>
               </Link>

               <Link to="/competitions/gpv" className="block bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-neutral-200 overflow-hidden group flex flex-col h-full">
                  <div className="h-2 bg-gradient-to-r from-orange-500 to-amber-500" />
                  <div className="p-8 flex flex-col h-full">
                    <div className="flex-1">
                      <div className="flex items-center mb-4">
                        <h3 className="text-2xl font-bold text-neutral-900 mr-3">Grand Prix Jeunes (GPV)</h3>
                        <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs font-bold uppercase rounded-full">Junior U20</span>
                      </div>
                      <p className="text-neutral-600 mb-6 text-lg">
                        Le circuit de référence pour la relève ! Une série de tournois rapides à travers le canton pour former la jeunesse.
                      </p>
                    </div>
                    <div className="mt-auto">
                        <span className="inline-flex items-center text-orange-600 font-semibold group-hover:text-orange-700">
                        Calendrier et Classement <ArrowRight className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </div>
                  </div>
               </Link>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </div>
  )
}