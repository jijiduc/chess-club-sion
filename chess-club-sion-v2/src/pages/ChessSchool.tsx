import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Title, Meta } from 'react-head';
import TableOfContents from '~/components/navigation/TableOfContents';
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
  Info,
  CheckCircle2,
  Clock,
  Sparkles,
  Banknote
} from 'lucide-react';

const courses = [
  {
    icon: GraduationCap,
    title: "Cours 'Écoliers'",
    audience: "Jeunes joueurs (6 ans et +), débutants ou avec un premier niveau de pratique (ELO approximatif < 1400).",
    schedule: "Mercredis : 13h30 - 15h30",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "100.- CHF",
    period: "par semestre",
    // Thème Vert (Croissance / Débutant)
    color: "from-emerald-500 to-emerald-600",
    lightColor: "bg-emerald-50 text-emerald-700",
    borderColor: "border-emerald-100"
  },
  {
    icon: Users,
    title: "Cours 'Intermédiaire'",
    audience: "Ouvert à tous les âges, pour joueurs souhaitant renforcer leurs compétences et passer des paliers (ELO environ 1400-1800).",
    schedule: "Vendredis : 18h30 - 20h30",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "150.- CHF",
    period: "par semestre",
    // Thème Ambre (Progression / Intermédiaire)
    color: "from-amber-500 to-amber-600",
    lightColor: "bg-amber-50 text-amber-700",
    borderColor: "border-amber-100"
  },
  {
    icon: Trophy,
    title: "Cours 'Avancé'",
    audience: "Dédié aux joueurs confirmés de tout âge visant la performance, dans l'objectif d'atteindre l'excellence (ELO > 1800).",
    schedule: "Samedis : 09h30 - 11h30",
    frequency: "3 fois par mois, selon le calendrier du club.",
    price: "200.- CHF",
    period: "par semestre",
    // Thème Rouge (Maîtrise / Excellence / Couleur du Club)
    color: "from-primary-600 to-primary-700",
    lightColor: "bg-primary-50 text-primary-700",
    borderColor: "border-primary-100"
  }
];

const features = [
  {
    icon: BookOpen,
    title: "Apprentissage progressif",
    description: "Des cours structurés et adaptés à tous les niveaux pour une progression constante."
  },
  {
    icon: Brain,
    title: "Développement cognitif",
    description: "Amélioration de la concentration, de la mémoire, de la logique et des capacités d'analyse."
  },
  {
    icon: Sparkles,
    title: "Ambiance conviviale",
    description: "Un environnement bienveillant et stimulant pour apprendre et partager sa passion."
  }
];

export default function ChessSchool() {
  return (
    <>
      <Title>École d'Échecs - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Rejoignez notre école d'échecs en cours de semestre. Nous proposons des cours pour tous les niveaux : écoliers, intermédiaires et avancés." />
      <TableOfContents />
      
      <div className="min-h-screen bg-neutral-50">
        
        {/* =================================================================
        // 1. HERO SECTION
        // ================================================================= */}
        <section className="relative overflow-hidden bg-neutral-900 text-white py-32">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
             <img 
               src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
               alt="Jeu d'échecs"
               className="w-full h-full object-cover opacity-30"
             />
             <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-neutral-900/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-neutral-200 text-sm font-medium mb-6 backdrop-blur-sm uppercase tracking-wider">
                  Formation & Excellence
                </span>
                <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display tracking-tight leading-tight">
                  L'École d'Échecs
                  <span className="block text-primary-500 mt-2">du CE Sion</span>
                </h1>
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-xl md:text-2xl text-neutral-300 mb-10 leading-relaxed max-w-2xl mx-auto"
              >
                Développez votre potentiel stratégique avec nos cours structurés. 
                <br className="hidden md:block"/>
                Ouverts à tous les âges et tous les niveaux.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center gap-4"
              >
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-all font-bold shadow-lg shadow-primary-900/20 hover:shadow-xl transform hover:-translate-y-1"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  S'inscrire maintenant
                </a>
                <a
                  href="#programmes"
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 text-white border border-white/20 rounded-xl hover:bg-white/20 transition-all font-semibold backdrop-blur-sm"
                >
                  Découvrir les cours
                  <ArrowRight className="h-5 w-5 ml-2" />
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* =================================================================
        // 2. WHY CHOOSE US (FEATURES)
        // ================================================================= */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                  className="bg-white rounded-2xl p-8 shadow-xl border border-neutral-100 hover:border-primary-200 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-neutral-100 rounded-2xl flex items-center justify-center mb-6 text-neutral-800 rotate-3 hover:rotate-6 transition-transform">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 mb-3">{feature.title}</h3>
                  <p className="text-neutral-600 leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
        // 3. COURSE OFFER SECTION
        // ================================================================= */}
        <section id="programmes" className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="nos-formules" className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Offre de cours 2025-2026</h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto mb-10">
                Nos cours sont organisés par semestre. Les offres ci-dessous concernent le <strong>Semestre I</strong> (en cours). 
                La programmation du <strong>Semestre II</strong> est actuellement en préparation.
              </p>
              
              {/* Calendrier des semestres intégré */}
              <div className="inline-flex flex-wrap justify-center gap-4 md:gap-8 bg-white border border-neutral-200 rounded-2xl p-6 shadow-sm">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600 border border-emerald-100">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] uppercase font-black tracking-widest text-emerald-600 bg-emerald-100/50 px-2 py-0.5 rounded">Actuel</p>
                    </div>
                    <p className="text-base font-bold text-neutral-800">Semestre I : 2025-26</p>
                    <p className="text-xs text-neutral-500">Fin Août à Janvier</p>
                  </div>
                </div>
                
                <div className="hidden md:block w-px h-12 bg-neutral-200 self-center"></div>
                
                <div className="flex items-center gap-4 opacity-75">
                  <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center text-amber-600 border border-amber-100">
                    <Clock className="w-6 h-6 animate-pulse" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <p className="text-[10px] uppercase font-black tracking-widest text-amber-600 bg-amber-100/50 px-2 py-0.5 rounded">En préparation</p>
                    </div>
                    <p className="text-base font-bold text-neutral-800 text-neutral-400">Semestre II : 2025-26</p>
                    <p className="text-xs text-neutral-500">Février à Juin</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {courses.map((course, index) => (
                <motion.div
                  key={course.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden border ${course.borderColor}`}
                >
                  <div className={`bg-gradient-to-r ${course.color} p-1 h-2`}></div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex justify-between items-start mb-6">
                      <div className={`p-3 rounded-xl ${course.lightColor}`}>
                        <course.icon className="h-8 w-8" />
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-neutral-900">{course.price}</p>
                        <p className="text-xs text-neutral-500 font-medium uppercase">{course.period}</p>
                      </div>
                    </div>

                    <div className="mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-2 py-1 rounded border border-emerald-100">
                        Offre Semestre I
                      </span>
                      <h3 className="text-2xl font-bold text-neutral-900 mt-2">{course.title}</h3>
                    </div>
                    
                    <div className="space-y-6 flex-grow">
                      <div>
                        <h4 className="text-sm font-semibold text-neutral-400 uppercase tracking-wider mb-2">Public Cible</h4>
                        <p className="text-neutral-700 leading-relaxed">{course.audience}</p>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <Clock className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900">Horaires</h4>
                          <p className="text-neutral-600">{course.schedule}</p>
                        </div>
                      </div>

                      <div className="flex items-start gap-3">
                        <Calendar className="h-5 w-5 text-neutral-400 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="text-sm font-semibold text-neutral-900">Fréquence</h4>
                          <p className="text-neutral-600">{course.frequency}</p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-8 pt-6 border-t border-neutral-100">
                      <div className="bg-neutral-50 rounded-lg p-3 text-sm text-neutral-600 flex items-start gap-2">
                        <Info className="h-4 w-4 text-neutral-500 flex-shrink-0 mt-0.5" />
                        <span>Inscription possible en cours de semestre (tarif au prorata).</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* =================================================================
        // 4. PRACTICAL INFORMATION & PAYMENT
        // ================================================================= */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
              
              {/* Contact Info */}
              <div>
                <h2 id="inscription" className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                  <span className="bg-neutral-100 text-neutral-700 p-2 rounded-lg mr-4">
                    <Mail className="h-6 w-6" />
                  </span>
                  Contact & Inscription
                </h2>
                
                <div className="bg-neutral-50 rounded-2xl p-8 border border-neutral-100">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-12 w-12 rounded-full bg-white border border-neutral-200 flex items-center justify-center text-primary-700 font-bold text-xl shadow-sm">
                      PR
                    </div>
                    <div>
                      <p className="text-sm text-neutral-500 font-medium uppercase">Responsable de l'école</p>
                      <p className="text-lg font-bold text-neutral-900">Pierre-Marie Rappaz</p>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <a 
                      href="mailto:ecole-echecs@cesion.ch" 
                      className="flex items-center p-4 bg-white rounded-xl border border-neutral-200 hover:border-primary-300 hover:shadow-md transition-all group"
                    >
                      <div className="bg-primary-50 p-3 rounded-lg text-primary-600 mr-4 group-hover:bg-primary-100 transition-colors">
                        <Mail className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Email</p>
                        <p className="text-primary-700 font-semibold">ecole-echecs@cesion.ch</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-neutral-300 ml-auto group-hover:text-primary-500 transition-colors" />
                    </a>

                    <Link 
                      to="/programme" 
                      className="flex items-center p-4 bg-white rounded-xl border border-neutral-200 hover:border-neutral-300 hover:shadow-md transition-all group"
                    >
                      <div className="bg-neutral-100 p-3 rounded-lg text-neutral-600 mr-4 group-hover:bg-neutral-200 transition-colors">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-sm text-neutral-500">Calendrier</p>
                        <p className="text-neutral-900 font-semibold">Consulter les dates des cours</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-neutral-300 ml-auto group-hover:text-neutral-600 transition-colors" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Payment Info */}
              <div>
                <h2 id="paiement" className="text-3xl font-bold text-neutral-900 mb-8 flex items-center">
                  <span className="bg-neutral-100 text-neutral-700 p-2 rounded-lg mr-4">
                    <Landmark className="h-6 w-6" />
                  </span>
                  Paiement
                </h2>

                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-100 p-3 rounded-xl">
                        <Landmark className="h-6 w-6 text-neutral-600" />
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Virement Bancaire</h3>
                        <div className="space-y-2 text-sm text-neutral-600 bg-neutral-50 p-4 rounded-lg font-mono border border-neutral-200">
                          <div className="flex justify-between">
                            <span>IBAN:</span>
                            <span className="font-bold text-neutral-900">CH08 0076 5001 0592 7490 7</span>
                          </div>
                          <div className="flex justify-between">
                            <span>Bénéficiaire:</span>
                            <span>Club d'échecs de Sion</span>
                          </div>
                        </div>
                        <p className="text-xs text-neutral-500 mt-2 font-medium italic">
                          * Merci d'indiquer le nom de l'élève en communication.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-100 p-3 rounded-xl">
                        <HandCoins className="h-6 w-6 text-neutral-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Paiement Cash</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          Le règlement peut s'effectuer directement en espèces auprès du responsable lors du premier cours. </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-6 border border-neutral-200 shadow-sm">
                    <div className="flex items-start gap-4">
                      <div className="bg-neutral-100 p-3 rounded-xl">
                        <Banknote className="h-6 w-6 text-neutral-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-neutral-900 mb-2">Chèques Sports-Cultures</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">
                          Le règlement peut aussi s'effectuer à l'aide des chèques sports-cultures distribués aux élèves de la commune de Sion.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3 p-4 bg-neutral-100 text-neutral-700 rounded-xl text-sm border border-neutral-200">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5 text-primary-600" />
                    <p>
                      Le règlement de la finance d'inscription valide définitivement l'engagement pour le semestre.
                    </p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =================================================================
        // 5. FINAL CALL TO ACTION
        // ================================================================= */}
        <section className="py-20 bg-neutral-900 text-white overflow-hidden relative">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display">
              Envie d'essayer avant de vous engager ?
            </h2>
            <p className="text-xl text-neutral-400 mb-10 max-w-2xl mx-auto">
              Nous proposons un cours d'essai gratuit pour vous permettre de découvrir notre pédagogie et l'ambiance du club.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a
                href="mailto:ecole-echecs@cesion.ch?subject=Demande%20de%20cours%20d'essai"
                className="inline-flex items-center px-10 py-5 bg-primary-600 text-white rounded-2xl hover:bg-primary-700 transition-colors font-bold shadow-lg shadow-primary-900/20 text-lg"
              >
                <Mail className="h-6 w-6 mr-3" />
                Demander un cours d'essai
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}