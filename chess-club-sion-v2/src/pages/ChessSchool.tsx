import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { GraduationCap, Calendar, MapPin, Clock, Users, ChevronRight, BookOpen, Brain, Target, Sparkles } from 'lucide-react'

export default function ChessSchool() {
  const features = [
    {
      icon: BookOpen,
      title: "Apprentissage progressif",
      description: "Des cours adaptés à tous les niveaux, du débutant au joueur confirmé"
    },
    {
      icon: Brain,
      title: "Développement cognitif",
      description: "Amélioration de la concentration, de la mémoire et des capacités d'analyse"
    },
    {
      icon: Users,
      title: "Ambiance conviviale",
      description: "Un environnement bienveillant pour apprendre et progresser ensemble"
    },
    {
      icon: Target,
      title: "Objectifs personnalisés",
      description: "Un suivi adapté aux besoins et aux ambitions de chaque joueur"
    }
  ]

  const programContent = [
    "Règles du jeu et mouvements des pièces",
    "Principes fondamentaux d'ouverture",
    "Tactiques de base (fourchette, clouage, enfilade)",
    "Finales élémentaires",
    "Notation algébrique et analyse de parties",
    "Introduction à la stratégie",
    "Exercices pratiques et puzzles",
    "Parties commentées et simultanées"
  ]

  const targetAudience = [
    {
      title: "Débutants complets",
      description: "Découvrez les règles et les premiers concepts du jeu"
    },
    {
      title: "Joueurs occasionnels",
      description: "Structurez vos connaissances et progressez rapidement"
    },
    {
      title: "Joueurs de club",
      description: "Perfectionnez votre jeu et atteignez de nouveaux paliers"
    },
    {
      title: "Jeunes talents",
      description: "Développez votre potentiel dans un cadre stimulant"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              École d'Échecs
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Apprenez, progressez et partagez votre passion
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
              <div className="flex items-center">
                <GraduationCap className="h-5 w-5 mr-2" />
                <span>Depuis janvier 2025</span>
              </div>
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2" />
                <span>Vendredi 19h00</span>
              </div>
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2" />
                <span>Tous niveaux</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
              <h2 className="text-3xl font-bold text-neutral-900 mb-6 text-center">
                Bienvenue à l'école d'échecs du CE Sion !
              </h2>
              <div className="prose prose-lg max-w-none text-neutral-700 space-y-4">
                <p>
                  Notre école, qui a pris son envol en <strong>janvier 2025</strong>, propose des cours accessibles 
                  à des joueurs débutants et amateurs. Les cours sont donnés par des joueurs expérimentés et 
                  passionnés, qui transmettent leur savoir-faire et leur passion pour ce jeu millénaire.
                </p>
                <p>
                  Notre structure est en constante évolution pour s'adapter au mieux aux besoins de nos 
                  participants. Nous sommes à l'écoute de vos retours pour améliorer continuellement 
                  notre offre de formation.
                </p>
                <div className="mt-8 text-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-block"
                  >
                    <Link
                      to="/contact"
                      className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-primary-600 to-accent-600 text-white rounded-md hover:from-primary-700 hover:to-accent-700 transition-colors"
                    >
                      <Sparkles className="h-5 w-5 mr-2" />
                      Rejoignez-nous !
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi rejoindre notre école ?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg shadow-lg p-6 text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-4">
                  <feature.icon className="h-8 w-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-3">{feature.title}</h3>
                <p className="text-neutral-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Practical Information */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Informations pratiques</h2>
            
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Schedule and Location */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Calendar className="h-6 w-6 mr-3" />
                    Horaires et lieu
                  </h3>
                </div>
                <div className="p-6 space-y-6">
                  <div className="flex items-start">
                    <Clock className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Quand ?</h4>
                      <p className="text-neutral-700">
                        Vendredi à 19h00, selon le{' '}
                        <Link to="/programme" className="text-primary-600 hover:text-primary-700 underline">
                          programme du club
                        </Link>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-6 w-6 text-primary-600 mr-3 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Où ?</h4>
                      <p className="text-neutral-700">
                        <Link to="/club" className="text-primary-600 hover:text-primary-700 underline">
                          Local du club
                        </Link>
                        <br />
                        <span className="text-sm text-neutral-600">
                          Ambiance chaleureuse et équipement complet à disposition
                        </span>
                      </p>
                    </div>
                  </div>
                  <div className="bg-primary-50 rounded-lg p-4">
                    <p className="text-sm text-primary-900">
                      <strong>Note :</strong> N'hésitez pas à venir assister à un cours pour découvrir notre école !
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Target Audience */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
                  <h3 className="text-2xl font-bold flex items-center">
                    <Users className="h-6 w-6 mr-3" />
                    Pour qui ?
                  </h3>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    {targetAudience.map((audience, index) => (
                      <motion.div
                        key={audience.title}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 * index }}
                        className="flex items-start"
                      >
                        <ChevronRight className="h-5 w-5 text-primary-600 mr-2 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-neutral-900">{audience.title}</h4>
                          <p className="text-neutral-600 text-sm">{audience.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Content */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Programme des cours</h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="grid md:grid-cols-2 gap-6">
                {programContent.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="flex items-center"
                  >
                    <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center flex-shrink-0 mr-3">
                      <span className="text-primary-600 font-semibold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-neutral-700">{item}</p>
                  </motion.div>
                ))}
              </div>
              <div className="mt-8 text-center">
                <p className="text-neutral-600 italic">
                  Le programme s'adapte au niveau et aux besoins du groupe
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à faire vos premiers pas ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Venez découvrir ou redécouvrir les échecs dans une ambiance conviviale et bienveillante.
                Nos formateurs passionnés vous accompagneront dans votre progression.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/contact"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold"
                  >
                    <GraduationCap className="h-5 w-5 mr-2" />
                    S'inscrire aux cours
                  </Link>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    to="/programme"
                    className="inline-flex items-center px-8 py-4 bg-primary-700 text-white rounded-md hover:bg-primary-800 transition-colors font-semibold"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Voir le programme
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}