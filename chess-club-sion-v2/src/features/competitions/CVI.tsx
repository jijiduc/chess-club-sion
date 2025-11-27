import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FileText, Calendar, Trophy, UserCheck, AlertCircle, ExternalLink, Clock } from 'lucide-react'

export default function CVI() {
  useEffect(() => {
    document.title = "Coupe Valaisanne Individuelle (CVI) - Club d'Échecs de Sion";
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 text-purple-100 text-sm font-medium mb-6 backdrop-blur-sm uppercase tracking-wider">
              Compétition Individuelle
            </span>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-display">Coupe Valaisanne Individuelle</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
              Le défi ultime du canton. Une compétition à élimination directe pour couronner le meilleur joueur valaisan.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content Column */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Introduction / Base */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <Trophy className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Le Format CVI</h2>
              </div>
              <div className="prose prose-neutral max-w-none text-neutral-600">
                <p>
                  La Coupe Valaisanne Individuelle (CVI) est organisée annuellement par l'Union Valaisanne des Échecs (UVE).
                  C'est une compétition prestigieuse basée sur le principe de l'<strong>élimination directe</strong> (système coupe).
                </p>
              </div>
            </motion.div>

            {/* Règlement Détails */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-neutral-100"
            >
              <div className="flex items-center mb-6">
                <div className="bg-purple-100 p-3 rounded-xl mr-4">
                  <FileText className="h-6 w-6 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-neutral-900">Règlement & Organisation</h2>
              </div>
              
              <div className="space-y-6">
                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">Qui peut participer ?</h3>
                  <p className="text-neutral-600">
                    La participation est réservée aux joueurs(ses) valaisans-nes, membres d’un club de l'UVE ou membres individuels de l'UVE.
                  </p>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                  <h3 className="font-semibold text-neutral-900 text-lg mb-2">Cadence de jeu</h3>
                  <p className="text-neutral-600 mb-2">
                    <strong>90 minutes + 30 secondes</strong> par coup dès le premier coup.
                  </p>
                  <p className="text-sm text-neutral-500 bg-neutral-50 p-3 rounded-lg">
                    <AlertCircle className="inline h-4 w-4 mr-1 text-neutral-400" />
                    En cas de nulle : Une seconde partie est immédiatement disputée (couleurs inversées) à la cadence de 15 minutes. Répétition jusqu'à désignation d'un vainqueur.
                  </p>
                </div>

                <div className="border-l-4 border-purple-200 pl-4">
                   <h3 className="font-semibold text-neutral-900 text-lg mb-2">Lieu et Dates</h3>
                   <ul className="list-disc list-inside text-neutral-600 space-y-1">
                     <li>Les parties ont lieu au <strong>local du joueur avec les Noirs</strong>.</li>
                     <li>Le premier nommé joue avec les Blancs (donc à l'extérieur).</li>
                     <li>Les parties sont agendées généralement le <strong>vendredi soir à 20h00</strong>.</li>
                     <li>Les juniors jouent à domicile jusqu'aux ¼ de finale.</li>
                   </ul>
                </div>
              </div>
            </motion.div>

            {/* Résultats Button Mobile */}
             <div className="lg:hidden">
                <a 
                  href="https://docs.google.com/spreadsheets/d/1j26Hjl2k0O_LU0dUEgwAucx3yarmtoNyRTLokU7BGhc/edit?gid=0#gid=0" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center px-6 py-4 bg-green-600 text-white font-bold rounded-xl hover:bg-green-700 transition-colors shadow-lg"
                >
                  <ExternalLink className="h-5 w-5 mr-2" />
                  Voir les appariements & Résultats
                </a>
             </div>

          </div>

          {/* Sidebar Information */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Status Card */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border-t-4 border-green-500">
              <h3 className="text-lg font-bold text-neutral-900 mb-4 flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-green-600" />
                Saison 2025-2026
              </h3>
              <div className="space-y-4">
                 <div className="flex items-start">
                    <Clock className="h-5 w-5 text-neutral-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Prochaine Ronde</p>
                      <p className="text-sm text-neutral-600">Consultez le tableau officiel</p>
                    </div>
                 </div>
                 <div className="flex items-start">
                    <UserCheck className="h-5 w-5 text-neutral-400 mr-3 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Directeur du Tournoi</p>
                      <p className="text-sm text-neutral-600">Xavier Bollin</p>
                    </div>
                 </div>
                 
                 <div className="pt-4 mt-4 border-t border-neutral-100">
                    <a 
                      href="https://docs.google.com/spreadsheets/d/1j26Hjl2k0O_LU0dUEgwAucx3yarmtoNyRTLokU7BGhc/edit?gid=0#gid=0" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 bg-green-50 text-green-700 font-bold rounded-lg hover:bg-green-100 transition-colors border border-green-200"
                    >
                      Tableau des Matchs
                      <ExternalLink className="inline h-4 w-4 ml-2" />
                    </a>
                 </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="bg-neutral-800 rounded-2xl p-6 text-white">
               <h3 className="text-lg font-bold mb-4">Liens Utiles</h3>
               <ul className="space-y-3">
                 <li>
                   <a href="https://www.uve-wsb.ch/competitions-valaisannes/cvi" target="_blank" rel="noopener noreferrer" className="flex items-center text-neutral-300 hover:text-white transition-colors">
                     <ExternalLink className="h-4 w-4 mr-2" />
                     Site dédié de l'UVE
                   </a>
                 </li>
               </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
