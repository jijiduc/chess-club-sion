import { motion } from 'framer-motion'
import { Calendar, User, ShieldCheck, Award } from 'lucide-react'

// --- Structures de données pour le contenu ---

const timelineEvents = [
  { year: "1935", description: "Création d’un club d’échecs à Sion sous la présidence du Dr. André de Quay." },
  { year: "1947", description: "Fondation d’un deuxième club à Sion, nommé Club d’échecs de Valère." },
  { year: "1968", description: "Après quelques années d’inactivité, les deux clubs de Sion Valère et Sion Planta se réunissent sous la forme actuelle du Club d’échecs de Sion grâce à l’initiative conjointe de Gérald Grand et Marcel Allegro." },
  { year: "1972", description: "Organisation du premier tournoi d’échecs des jeunes de Noël à Sion qui connaîtra 22 éditions consécutives jusqu’en 1994." },
  { year: "1977", description: "Charles Partos, Roumain d’origine, s’établit en Suisse lors d’une ronde préliminaire du championnat d’Europe par équipes organisé à Montana. Il sera ensuite professeur d’échecs dans les cycles en Valais et jouera pour les équipes de Sion et de Martigny." },
  { year: "1978", description: "Première accession de l’équipe de Sion en finale de la Team-Cup suisse et défaite contre Ostschweiz Junioren. Joueurs : Ch.H. Amherdt, E. Beney, P.M. Rappaz, G. Terreaux, G. Grand. Capitaine : J.Y. Riand." },
  { year: "1978", description: "Valéry Allegro, champion suisse junior à St. Moritz, 2ème Pascal Grand et 3ème François Rossier." },
  { year: "1979", description: "2ème finale de la Team-Cup contre Winterthur Assurances, perdue 2,5 à 1,5 après un premier match nul 2 à 2." },
  { year: "1979", description: "Valery Allegro, champion suisse juniors B." },
  { year: "1980", description: "Inauguration du nouveau local du club à la rue des Châteaux 2" },
  { year: "1980", description: "Sion, vainqueur de la finale de la Team-Cup contre Winterthur Assurances sur le score de 3 à 1." },
  { year: "1984", description: "Valéry Allegro, champion suisse junior." },
  { year: "1988", description: "Organisation de trois tournois internationaux d’échecs à Sion opposant une sélection sédunoise à des joueurs internationaux entre 1988-1990." },
  { year: "1991", description: "Sion accède à la LNA en Championnat suisse par équipes. Joueurs : V. Allegro, P. Grand, G. Terreaux, P.M Rappaz, P. Vianin, R. Levrand, J.M. Paladini. Capitaine J.Y. Riand." },
  { year: "1996", description: "Olivier Crettenand, membre du club, prend la présidence de l'UVE jusqu'en 2001" },
  { year: "1997", description: "Fin de la rubrique d’échecs dans le Nouvelliste tenue pendant plus de 10 ans par J.Y Riand, après G. Grand." },
  { year: "2006", description: "Rénovation du local du CE Sion de la rue des Châteaux 2." },
  { year: "2022", description: "Sion remporte la finale du championnat valaisan par équipes."},
  { year: "2023", description: "Sion remporte la finale du championnat valaisan par équipes pour la deuxième fois consécutive."},
  { year: "2024", description: "Sion remporte la finale du championnat valaisan par équipes pour la troisième fois consécutive."},
  { year: "2025", description: "Sion remporte la finale du championnat valaisan par équipes pour la quatrième fois consécutive."},
];

const personalities = [
  { 
    name: "Rodolphe Demanega", 
    bio: "Après avoir présidé le club pendant deux décennies (1948-1968), il a joué un rôle clé en prenant la tête du club fraîchement réunifié jusqu'en 1971. Son dévouement a été salué par le titre de membre d'honneur." 
  },
  { 
    name: "Gérald Grand", 
    bio: "Figure centrale des années 70-80 et artisan de la fusion des clubs en 1968. Polyvalent, il a partagé sa passion comme président, fondateur de l'UVE, auteur et rédacteur pour le Nouvelliste. Une immense contribution reconnue par les titres de président et membre d'honneur." 
  },
  { 
    name: "Jean-Yves Riand", 
    bio: "Il incarne la continuité du club, avec plus de 20 ans de présidence, notamment de 2000 à 2020. Ancien président de l'UVE et rédacteur échiquéen, il est surtout connu comme un capitaine emblématique, guidant les équipes avec passion." 
  },
  { 
    name: "Pierre-Marie Rappaz", 
    bio: "Membre actif depuis 1969, il est l'un des grands piliers du club. Infatigable, il a consacré d'innombrables heures à l'organisation et au capitanat, formant avec Jean-Yves Riand un tandem d'une fidélité historique." 
  },
];

const presidents = [
  { period: "1935-1947", name: "Dr. André de Quay" },
  { period: "1948-1971", name: "Rodolphe Demanega" },
  { period: "1972", name: "Gérald Grand" },
  { period: "1973-1974", name: "Edmond Gränicher" },
  { period: "1975-1978", name: "Gérald Grand" },
  { period: "1979-1980", name: "Jean-Yves Riand" },
  { period: "1981-1990", name: "Charles-Henri Amherdt" },
  { period: "1991", name: "Raphaël Granges" },
  { period: "1992-1995", name: "Olivier Crettenand" },
  { period: "1996-1998", name: "Jean-Michel Paladini" },
  { period: "1999", name: "Valéry Allegro" },
  { period: "2000-2020", name: "Jean-Yves Riand" },
  { period: "2021-2025", name: "Vlad Popescu" },
];

const hallOfFame = [
  { name: "Philippe Berclaz", title: "Grand Maître international ICCF", elo: "2569" },
  { name: "Gilles Terreaux", title: "Maître International FIDE & ICCF", elo: "2505" },
  { name: "Valery Allegro", title: "Maître International FIDE", elo: "2416" },
  { name: "Julien Carron", title: "Maître International FIDE", elo: "2416" },
  { name: "Roland Levrand", title: "Meilleur elo FIDE", elo: "2216" },
  { name: "Patrick Gaulé", title: "Meilleur elo FIDE", elo: "2203" },
  { name: "Eddy Beney", title: "Meilleur elo FIDE", elo: "2172" },
  { name: "David Philippoz", title: "Meilleur elo FIDE", elo: "2139" },
  { name: "Jean-Yves Riand", title: "Meilleur elo FIDE", elo: "2135" },
];

const notablePlayers = [
  "Valéry Allegro", "Charles-Henri Amherdt", "Eddy Beney", "Philippe Berclaz", 
  "Julien Carron", "Stéphane Emery", "Patrick Gaulé", "Pascal Grand", "Roland Levrand", 
  "Simon Morand", "Jean-Michel Paladini", "David Philippoz", "Pierre-Marie Rappaz", 
  "Jean-Yves Riand", "Pascal Vianin", "Gilles Terreaux"
];


export default function Histoire() {
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
            L'Histoire du Club
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-100 max-w-3xl"
          >
            De 1935 à aujourd'hui, revivez les différents moments clés et découvrez les figures qui ont façonné le Club d'Échecs de Sion.
          </motion.p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Timeline Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Frise chronologique</h2>
            <div className="relative wrap overflow-hidden p-10 h-full">
              <div className="border-2-2 absolute border-opacity-20 border-primary-700 h-full border" style={{left: '50%'}}></div>
              {timelineEvents.map((event, index) => (
                <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'flex-row-reverse left-timeline' : 'right-timeline'}`}>
                  <div className="order-1 w-5/12"></div>
                  <div className="z-20 flex items-center order-1 bg-primary-600 shadow-xl w-12 h-12 rounded-full">
                    <h3 className="mx-auto font-semibold text-lg text-white">{event.year}</h3>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} 
                    transition={{ duration: 0.5 }}
                    className="order-1 bg-white rounded-lg shadow-xl w-5/12 px-6 py-4"
                  >
                    <p className="text-sm leading-snug tracking-wide text-neutral-700">{event.description}</p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Personalities Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-12 text-center">Personnalités Marquantes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {personalities.map((person, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg text-center"
                >
                  <User className="h-10 w-10 text-primary-600 mx-auto mb-4"/>
                  <h3 className="font-bold text-xl text-neutral-900 mb-2">{person.name}</h3>
                  <p className="text-neutral-600 text-sm">{person.bio}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          {/* Presidents & Hall of Fame */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            {/* Presidents */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Présidence du Club</h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ul className="space-y-3">
                  {presidents.map((p, i) => (
                    <li key={i} className="flex justify-between items-center border-b border-neutral-100 pb-2">
                      <span className="font-mono text-sm text-neutral-600">{p.period}</span>
                      <span className="font-semibold text-primary-800 text-right">{p.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Hall of Fame */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Hall of Fame</h2>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <ul className="space-y-3">
                  {hallOfFame.map((player, i) => (
                    <li key={i} className="flex items-center space-x-4">
                      <Award className={`h-6 w-6 ${player.title.includes('Grand Maître') ? 'text-amber-500' : 'text-primary-600'}`} />
                      <div className="flex-grow">
                        <p className="font-bold text-neutral-900">{player.name}</p>
                        <p className="text-xs text-neutral-500">{player.title}</p>
                      </div>
                      <div className="text-sm font-mono bg-neutral-100 px-2 py-1 rounded text-neutral-800">{player.elo}</div>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Notable Players */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-serif font-bold text-neutral-900 mb-8 text-center">Joueurs Ayant Brillé au Club</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {notablePlayers.map((name, i) => (
                <span key={i} className="bg-white text-primary-800 font-medium px-4 py-2 rounded-full shadow-sm border border-neutral-200">
                  {name}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Footer */}
          <div className="text-center mt-20 text-sm text-neutral-400">
            <p>Un remerciement à Jean-Yves Riand pour son travail d'archiviste</p>
          </div>

        </div>
      </section>
    </>
  )
}