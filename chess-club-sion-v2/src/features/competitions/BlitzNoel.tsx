import { motion } from 'framer-motion'
import { Trophy, Calendar, Award, FileText, Users, Camera, List } from 'lucide-react'
import { Title, Meta } from 'react-head';
import Snowfall from '../../components/Snowfall';
import winterBg from '../../assets/images/winter-bg.jpg';

export default function BlitzNoel() {
  const podium = [
    { rank: 1, name: "Pascal Vianin", pts: "6.5", club: "Sion", image: "/picture/events/BlitzNoel2025/blitzNoel2025Vainqueurs.jpeg" },
    { rank: 2, name: "Colin Moesching", pts: "6.0", club: "Sion" },
    { rank: 3, name: "Pierre-Marie Rappaz", pts: "5.5", club: "Sion" },
  ];

  const top10 = [
    { rg: 1, snr: 1, nom: "Vianin Pascal", elo: 2160, pts: "6½", bh: 32 },
    { rg: 2, snr: 9, nom: "Moesching Colin", elo: 1745, pts: "6", bh: 30 },
    { rg: 3, snr: 4, nom: "Rappaz Pierre-M.", elo: 1939, pts: "5½", bh: 28 },
    { rg: 4, snr: 6, nom: "Barrade Jacques", elo: 1826, pts: "5", bh: 29.5 },
    { rg: 5, snr: 5, nom: "Eggel Xavier", elo: 1857, pts: "5", bh: 28.5 },
    { rg: 6, snr: 12, nom: "Koehler Noe", elo: 1665, pts: "5", bh: 24 },
    { rg: 7, snr: 2, nom: "Bijelic Milan", elo: 2072, pts: "4½", bh: 30.5 },
    { rg: 8, snr: 3, nom: "Sola Flavien", elo: 2033, pts: "4½", bh: 29.5 },
    { rg: 9, snr: 8, nom: "Duc Jeremy", elo: 1762, pts: "4½", bh: 28.5 },
    { rg: 10, snr: 41, nom: "Stuyts Mischa", elo: 0, pts: "4½", bh: 26 },
  ];

  return (
    <>
      <Title>Résultats Blitz de Noël 2025 - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez les résultats du Blitz de Noël 2025. Pascal Vianin s'impose dans cette édition record avec 42 participants." />
      
      <div className="min-h-screen bg-neutral-50">
        {/* Hero Section */}
        <section
          className="relative text-white py-24 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 0, 0, 0.7), rgba(20, 0, 0, 0.7)), url(${winterBg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Snowfall />
          <div className="container mx-auto px-4 relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center bg-primary-600/30 backdrop-blur-sm border border-primary-400/30 px-4 py-2 rounded-full mb-6">
                <Calendar className="h-5 w-5 mr-2" />
                <span>21 Décembre 2025</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6">
                Blitz de Noël <span className="text-primary-400">2025</span>
              </h1>
              <p className="text-xl md:text-2xl font-light opacity-90 max-w-2xl mx-auto">
                Une édition mémorable qui a réuni 42 passionnés pour célébrer les fêtes autour de l'échiquier.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Podium Section */}
        <section className="py-20 -mt-10 relative z-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {podium.map((winner, idx) => (
                <motion.div
                  key={winner.rank}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className={`bg-white rounded-2xl p-8 shadow-xl border-t-4 ${
                    winner.rank === 1 ? 'border-primary-500 scale-105 z-10' : 'border-neutral-200'
                  } text-center`}
                >
                  <div className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                    winner.rank === 1 ? 'bg-amber-100 text-amber-600' : 
                    winner.rank === 2 ? 'bg-slate-100 text-slate-600' : 'bg-orange-100 text-orange-600'
                  }`}>
                    <Trophy className="h-8 w-8" />
                  </div>
                  <span className="text-sm font-bold uppercase tracking-wider text-neutral-400">
                    {winner.rank === 1 ? 'Vainqueur' : `${winner.rank}ème place`}
                  </span>
                  <h3 className="text-2xl font-bold text-neutral-900 mt-2">{winner.name}</h3>
                  <div className="flex items-center justify-center mt-4 text-primary-600 font-bold">
                    <Award className="h-5 w-5 mr-2" />
                    <span>{winner.pts} points</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results & Photos */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="grid lg:grid-cols-2 gap-12">
              
              {/* Leaderboard */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg p-8"
              >
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold text-neutral-900 flex items-center">
                    <List className="h-6 w-6 mr-3 text-primary-600" />
                    Classement Final (Top 10)
                  </h2>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left border-collapse">
                    <thead>
                      <tr className="border-b-2 border-neutral-100">
                        <th className="py-3 px-2 font-semibold text-neutral-600">Rang</th>
                        <th className="py-3 px-2 font-semibold text-neutral-600">Nom</th>
                        <th className="py-3 px-2 font-semibold text-neutral-600">Elo</th>
                        <th className="py-3 px-2 font-semibold text-neutral-600 text-right">Pts</th>
                      </tr>
                    </thead>
                    <tbody>
                      {top10.map((player) => (
                        <tr key={player.rg} className="border-b border-neutral-50 hover:bg-neutral-50 transition-colors">
                          <td className="py-3 px-2 font-medium">{player.rg}</td>
                          <td className="py-3 px-2 font-semibold text-neutral-900">{player.nom}</td>
                          <td className="py-3 px-2 text-neutral-500">{player.elo > 0 ? player.elo : 'N/A'}</td>
                          <td className="py-3 px-2 text-right font-bold text-primary-600">{player.pts}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                <div className="mt-8 pt-8 border-t border-neutral-100 flex flex-col sm:flex-row gap-4">
                  <a
                    href="/picture/events/BlitzNoel2025/Blitz_Sion_2025_Liste_de_classement.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center px-6 py-3 bg-neutral-900 text-white rounded-xl font-bold hover:bg-neutral-800 transition-colors flex-1"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Classement Complet (PDF)
                  </a>
                  <div className="flex items-center justify-center px-6 py-3 bg-primary-50 text-primary-700 rounded-xl font-bold flex-1">
                    <Users className="h-5 w-5 mr-2" />
                    42 Participants
                  </div>
                </div>
              </motion.div>

              {/* Photos */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                <div className="bg-white rounded-2xl shadow-lg p-8">
                  <h2 className="text-2xl font-bold text-neutral-900 flex items-center mb-6">
                    <Camera className="h-6 w-6 mr-3 text-primary-600" />
                    En images
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="group relative overflow-hidden rounded-xl bg-neutral-100">
                      <img 
                        src="/picture/events/BlitzNoel2025/blitzNoel2025Vainqueurs.jpeg" 
                        alt="Podium du Blitz de Noël : Colin Moesching, Pascal Vianin, Pierre-Marie Rappaz"
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                        <p className="text-white text-sm font-medium">
                          <span className="block font-bold mb-1">Podium Général</span>
                          g.à.d. : Pierre-Marie Rappaz (3ème), Pascal Vianin (1er) et Colin Moesching (2ème)
                        </p>
                      </div>
                    </div>

                    <div className="group relative overflow-hidden rounded-xl bg-neutral-100">
                      <img 
                        src="/picture/events/BlitzNoel2025/blitzNoel2025VainqueursJuniors.jpeg" 
                        alt="Podium Juniors : Mischa Stuyts, Colin Moesching, Noé Koehler"
                        className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4">
                        <p className="text-white text-sm font-medium">
                          <span className="block font-bold mb-1">Podium Juniors</span>
                          g.à.d. : Noé Koehler (2ème), Jacques Barrade (1er) et Mischa Stuyts (3ème) 
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-primary-600 to-primary-800 rounded-2xl p-8 text-white shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Remerciements</h3>
                  <p className="opacity-90 leading-relaxed">
                    Un immense merci à <strong>Fabrice Lovey</strong> pour l'arbitrage et l'organisation sans faille. 
                    Merci également à l'<strong>Union Valaisanne des Échecs</strong> pour son soutien, ainsi qu'à tous les membres qui ont contribué à la réussite de ce goûter de Noël.
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

      </div>
    </>
  )
}
