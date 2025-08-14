import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// Correction 1: Utilisation de "import type" pour les types uniquement
import {
  GraduationCap,
  Calendar,
  Users,
  BookOpen,
  Brain,
  Trophy,
  Mail,
  ArrowRight,
  Award,
  Shield,
  Star,
  Crown,
  Landmark,
  HandCoins,
  type LucideProps
} from 'lucide-react';
import { type ForwardRefExoticComponent, type RefAttributes } from 'react';

// Définition d'un type plus précis pour les icônes
type IconComponent = ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;

// Types pour les données, pour garantir la cohérence
type Achievement = { year: string; text: string; } | { icon: IconComponent; text: string; };

type Coach = {
  name: string;
  title: string;
  image: string;
  achievements: Achievement[];
  experience?: string;
};

// ... (Les autres types et données restent les mêmes)

const courses = [
  {
    icon: GraduationCap,
    title: "Cours 'Écoliers'",
    audience: "Jeunes joueurs (6ans et +), débutants ou avec un premier niveau de pratique (ELO approximatif < 1400).",
    schedule: "Mercredis : 13h30 - 15h30.",
    frequency: "Toutes les semaines (sauf vacances et exceptions annoncées).",
    price: "100.- CHF pour le semestre."
  },
  {
    icon: Users,
    title: "Cours 'Intermédiaire'",
    audience: "Ouvert à tous les âges, pour joueurs souhaitant renforcer leurs compétences et passer des paliers (ELO environ 1400-1800).",
    schedule: "Vendredis : 18h30 - 20h30.",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "150.- CHF pour le semestre."
  },
  {
    icon: Trophy,
    title: "Cours 'Avancé'",
    audience: "Dédié aux joueurs confirmés de tout âge visant la performance (ELO > 1800).",
    schedule: "Samedis : 09h30 - 11h30.",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "200.- CHF pour le semestre."
  }
];

const coaches: Coach[] = [
  {
    name: "Pierre-Marie Rappaz",
    title: "Coach - Cours 'Écoliers'",
    image: "/picture/coaches/pm.jpg",
    achievements: [
      { icon: Crown, text: "Vainqueur du championnat valaisan junior" },
      { icon: Award, text: "Multiple vainqueur de la coupe valaisanne Individuelle" },
      { icon: Award, text: "Multiple Champion Valaisan par équipe" },
      { icon: Crown, text: "Champion Valaisan de parties lentes 2024" },
    ],
    experience: "Acteur majeur des échecs valaisans et du club depuis plus de 50 ans, Pierre-Marie possède une riche expérience de la compétition et de la formation des jeunes."
  },
  {
    name: "Flavien Sola",
    title: "Coach - Cours 'Intermédiaire' & 'Avancé'",
    image: "/picture/coaches/flavien.jpg",
    achievements: [
      { icon: Crown, text: "Champion Valaisan de parties rapides 2024-25" },
      { icon: Shield, text: "Membre de l’Équipe de France -21 ans (2004–2006)" },
      { icon: Star, text: "Participant au Championnat du Monde junior (2005)" },
      { icon: Award, text: "Formateur expérimenté à Niort et Paris" },
    ],
    experience: "Ayant bientôt 3 décennies d'expérience, Flavien a forgé son expertise dans de nombreux pays et a été entraîné par des maîtres reconnus comme les GMI Demuth et Édouard."
  }
];

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
  }
];


export default function ChessSchool() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Ecole d'Échecs
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
              Découvrez notre offre de formation pour le 1er semestre 2025-26
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeenuhr6cnUsoPFlJoiSVUVpQYtxjLyPZCY4qGIaKIDzZhBgw/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold shadow-lg"
              >
                <GraduationCap className="h-5 w-5 mr-3" />
                S'inscrire aux cours
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Course Offer Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formules</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden" // Ajout de overflow-hidden pour des bords nets
              >
                {/* --- En-tête de la carte --- */}
                <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
                  <div className="flex items-center gap-4">
                    <course.icon className="h-8 w-8 flex-shrink-0" />
                    <h3 className="text-2xl font-bold">{course.title}</h3>
                  </div>
                </div>

                {/* --- Corps de la carte --- */}
                {/* Utilisation de flex-col et flex-grow pour pousser le prix en bas */}
                <div className="p-6 flex flex-col flex-grow">
                  {/* --- Section principale des informations (qui s'agrandit) --- */}
                  <dl className="space-y-4 flex-grow">
                    <div>
                      <dt className="text-sm font-semibold text-neutral-500">Public</dt>
                      <dd className="text-neutral-800">{course.audience}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-neutral-500">Horaires</dt>
                      <dd className="text-neutral-800">{course.schedule}</dd>
                    </div>
                    <div>
                      <dt className="text-sm font-semibold text-neutral-500">Fréquence</dt>
                      <dd className="text-neutral-800">{course.frequency}</dd>
                    </div>
                  </dl>

                  {/* --- Section du prix (alignée en bas) --- */}
                  <div className="mt-6 pt-6 border-t border-neutral-200">
                    <p className="text-sm text-neutral-600">Finance d'inscription</p>
                    <p className="text-l font-bold text-primary-700">{course.price}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Coaches Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nos formateurs passionnés</h2>
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-start">
            {coaches.map((coach) => (
              <motion.div
                key={coach.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-lg p-6"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                  <img src={coach.image} alt={coach.name} className="w-32 h-32 rounded-full object-cover flex-shrink-0 border-4 border-primary-200" />
                  <div className="text-center sm:text-left">
                    <h3 className="text-2xl font-bold text-neutral-900">{coach.name}</h3>
                    <p className="text-primary-700 font-semibold">{coach.title}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <h4 className="font-semibold mb-3">Palmarès et expérience :</h4>
                  <ul className="space-y-2 text-neutral-700">
                    {/* Correction 2: Utilisation de 'in' pour vérifier la présence de la propriété */}
                    {coach.achievements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        {'year' in item ? (
                          <span className="text-primary-600 font-bold w-20 flex-shrink-0">{item.year}</span>
                        ) : (
                          item.icon && <item.icon className="h-5 w-5 text-primary-600 mr-3 flex-shrink-0 mt-0.5" />
                        )}
                        <span>{item.text}</span>
                      </li>
                    ))}
                  </ul>
                  {coach.experience && <p className="mt-4 text-sm italic">{coach.experience}</p>}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Modalités de paiement</h2>
            <p className="text-lg text-neutral-600 mb-10">
              Le règlement de la finance d'inscription finalise l'engagement et doit être effectué au plus tard le 4 septembre.
            </p>
          </div>
          <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">

            {/* --- Option 1: Virement bancaire --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <Landmark className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-semibold">Par virement bancaire</h3>
              </div>
              <p className="text-neutral-600 mb-6">
                Veuillez utiliser les coordonnées ci-dessous pour effectuer le virement.
              </p>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <dt className="font-semibold text-neutral-500">Bénéficiaire</dt>
                  <dd className="text-right text-neutral-800">Club d'échecs de Sion</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-neutral-500">Banque</dt>
                  <dd className="text-right text-neutral-800">Banque Cantonale du Valais</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-neutral-500">IBAN</dt>
                  <dd className="text-right text-neutral-800 font-mono">CH51 0076 5001 0415 0150 2</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="font-semibold text-neutral-500">Compte</dt>
                  <dd className="text-right text-neutral-800 font-mono">19-81-6</dd>
                </div>
              </dl>
              <div className="mt-6 pt-6 border-t border-dashed">
                <p className="text-sm font-semibold text-accent-700">Important : Veuillez indiquer le nom et prénom de l'élève dans la communication du virement.</p>
              </div>
            </motion.div>

            {/* --- Option 2: Paiement en espèces --- */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <div className="flex items-center gap-4 mb-4">
                <HandCoins className="h-8 w-8 text-primary-600" />
                <h3 className="text-2xl font-semibold">En espèces</h3>
              </div>
              <p className="text-neutral-600">
                Il est également possible de régler la finance d'inscription en espèces. Le paiement peut être remis directement à l'un des formateurs lors du premier cours de la saison.
              </p>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Practical Information Section */}
      <section className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8">Informations pratiques</h2>
            <div className="bg-white rounded-xl shadow-lg p-8 space-y-6">
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Calendar className="h-8 w-8 text-primary-600" />
                <p className="text-lg">
                  Le calendrier des cours, mis à jour mensuellement, est disponible sur {' '}
                  <Link to="/programme" className="font-semibold text-primary-600 hover:underline">
                    programme du Club
                  </Link>.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Mail className="h-8 w-8 text-primary-600" />
                <p className="text-lg">
                  Pour toute question, contactez-nous à :{' '}
                  <a href="mailto:ecole-echecs@cesion.ch" className="font-semibold text-primary-600 hover:underline">
                    ecole-echecs@cesion.ch
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi rejoindre notre école ?</h2>
          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
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


      {/* Final Call to Action */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Prêt à faire le bon mouvement ?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Ne manquez pas cette opportunité de progresser. Inscrivez-vous dès maintenant !
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSeenuhr6cnUsoPFlJoiSVUVpQYtxjLyPZCY4qGIaKIDzZhBgw/viewform?usp=dialog"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold"
                >
                  <ArrowRight className="h-5 w-5 mr-3" />
                  Accéder au formulaire d'inscription
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}