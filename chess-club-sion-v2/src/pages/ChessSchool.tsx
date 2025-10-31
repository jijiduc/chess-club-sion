import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Title, Meta } from 'react-head';
import {
  GraduationCap,
  Calendar,
  Users,
  BookOpen,
  Brain,
  Trophy,
  Mail,
  ArrowRight,
  Landmark,
  HandCoins,
  User,
  Info
} from 'lucide-react';

const courses = [
  {
    icon: GraduationCap,
    title: "Cours 'Écoliers'",
    audience: "Jeunes joueurs (6 ans et +), débutants ou avec un premier niveau de pratique (ELO approximatif < 1400).",
    schedule: "Mercredis : 13h30 - 15h30.",
    frequency: "3 fois par mois, selon le calendrier du club.",
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
    audience: "Dédié aux joueurs confirmés de tout âge visant la performance, dans l'objectif d'atteindre l'excellence (ELO > 1800).",
    schedule: "Samedis : 09h30 - 11h30.",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "200.- CHF pour le semestre."
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Apprentissage progressif",
    description: "Des cours adaptés à tous les niveaux, du débutant au joueur confirmé."
  },
  {
    icon: Brain,
    title: "Développement cognitif",
    description: "Amélioration de la concentration, de la mémoire et des capacités d'analyse."
  },
  {
    icon: Users,
    title: "Ambiance conviviale",
    description: "Un environnement bienveillant pour apprendre et progresser ensemble."
  }
];

export default function ChessSchool() {
  return (
    <>
      <Title>École d'Échecs - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Rejoignez notre école d'échecs en cours de semestre. Nous proposons des cours pour tous les niveaux : écoliers, intermédiaires et avancés." />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* =================================================================
        // 1. HERO SECTION
        // ================================================================= */}
        <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Rejoignez notre École d'Échecs
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Il n'est pas trop tard pour nous rejoindre ! Les inscriptions restent ouvertes durant le semestre.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="#contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold shadow-lg"
                >
                  <Mail className="h-5 w-5 mr-3" />
                  Demander des informations
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* =================================================================
        // 2. COURSE OFFER SECTION
        // ================================================================= */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Nos formules de cours</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg flex flex-col overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
                    <div className="flex items-center gap-4">
                      <course.icon className="h-8 w-8 flex-shrink-0" />
                      <h3 className="text-2xl font-bold">{course.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
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
                    <div className="mt-6 pt-6 border-t border-neutral-200">
                      <p className="text-sm text-neutral-600">Finance d'inscription</p>
                      <p className="text-l font-bold text-primary-700">{course.price}</p>
                      <div className="mt-4 bg-primary-50 text-primary-800 p-3 rounded-lg flex items-center gap-3 text-sm">
                        <Info className="h-5 w-5 flex-shrink-0" />
                        <span>Il est possible de rejoindre le cours en cours de semestre (tarif au prorata).</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
        // 3. FEATURES SECTION (POURQUOI NOUS REJOINDRE ?)
        // ================================================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Pourquoi nous rejoindre ?</h2>
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

        {/* =================================================================
        // 4. PRACTICAL INFORMATION SECTION
        // ================================================================= */}
        <section id="contact" className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-8">Informations et Inscriptions</h2>
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ul className="space-y-6 text-lg">

                  {/* --- Ligne Responsable --- */}
                  <li className="flex items-center justify-center gap-4">
                    <User className="h-8 w-8 text-primary-600 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Le responsable de l'école est <strong>Pierre-Marie Rappaz</strong>.
                    </p>
                  </li>

                  {/* --- Ligne Email --- */}
                  <li className="flex items-center justify-center gap-4 border-t pt-6">
                    <Mail className="h-8 w-8 text-primary-600 flex-shrink-0" />
                    <a href="mailto:ecole-echecs@cesion.ch" className="font-semibold text-primary-600 hover:underline">
                      ecole-echecs@cesion.ch
                    </a>
                  </li>

                  {/* --- Ligne Calendrier --- */}
                  <li className="flex items-center justify-center gap-4 border-t pt-6">
                    <Calendar className="h-8 w-8 text-primary-600 flex-shrink-0" />
                    <p className="text-neutral-700">
                      Consultez le{' '}
                      <Link to="/programme" className="font-semibold text-primary-600 hover:underline">
                        programme du club
                      </Link>
                      {' '}pour le calendrier.
                    </p>
                  </li>

                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* =================================================================
        // 5. PAYMENT INFORMATION SECTION
        // ================================================================= */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Modalités de paiement</h2>
              <p className="text-lg text-neutral-600 mb-10">
                Le règlement de la finance d'inscription finalise l'engagement. Il est possible de venir assister à un cours d'essai avant de s'inscrire, pour ce faire, veuillez nous contacter.
              </p>
            </div>
            <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                <dl className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <dt className="font-semibold text-neutral-500">Bénéficiaire</dt>
                    <dd className="text-right text-neutral-800">Club d'échecs de Sion</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="font-semibold text-neutral-500">IBAN</dt>
                    <dd className="text-right text-neutral-800 font-mono">CH08 0076 5001 0592 7490 7</dd>
                  </div>
                </dl>
                <div className="mt-6 pt-6 border-t border-dashed">
                  <p className="text-sm font-semibold text-accent-700">Important : Veuillez indiquer le nom et prénom de l'élève dans la communication du virement.</p>
                </div>
              </motion.div>
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
                  Il est également possible de régler la finance d'inscription en espèces. Le paiement peut être remis directement au responsable lors d'un cours.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================================
        // 6. FINAL CALL TO ACTION
        // ================================================================= */}
        <section className="pb-20">
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
                  Contactez-nous pour venir lors d'un cours d'essai ou pour vous inscrire.
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="mailto:ecole-echecs@cesion.ch"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold"
                  >
                    <ArrowRight className="h-5 w-5 mr-3" />
                    Envoyer un email
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}