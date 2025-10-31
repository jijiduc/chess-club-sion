import { motion } from 'framer-motion';
import { Users } from 'lucide-react';
import { Title, Meta } from 'react-head';

// --- Structure de données pour les sponsors (conservée) ---

const sponsors = [
  {
    name: "La Ville de Sion",
    imgSrc: "https://www.sion.ch/dist/sion/2019/images/logo.859646380a5c91ded5e7.svg",
    alt: "Logo de la Ville de Sion",
    href: "https://www.sion.ch/"
  },
  {
    name: "L'Union Valaisanne des Échecs",
    imgSrc: "https://www.uve-wsb.ch/images/systeme/logo-uve.png",
    alt: "Logo de l'Union Valaisanne des Échecs",
    href: "https://www.uve-wsb.ch/"
  },
  {
    name: "La Banque Cantonale du Valais",
    imgSrc: "https://www.bcvs.ch/_assets/769bf0b6ab5a82b47c6bb5d477276626/Assets/Img/logo-standard.svg",
    alt: "Logo de la Banque Cantonal du Valais",
    href: "https://www.bcvs.ch/"
  },
  {
    name: "La Bourgeoisie de Sion",
    imgSrc: "https://www.bourgeoisie-de-sion.ch/Site/Skins/Default/Foundation/logo-desktop.svg",
    alt: "Logo de la Bourgeoisie de Sion",
    href: "https://www.bourgeoisie-de-sion.ch/",
    className: "logo-bourgeoisie"
  },
];


export default function ActivChessSion() {

  return (
    <>
      {/* Style spécifique pour le logo de la Bourgeoisie */}
      <style>{`
        .logo-bourgeoisie {
          filter: drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.4));
        }
      `}</style>

      <Title>Activ Chess de Sion - Merci !</Title>
      <Meta name="description" content="L'Activ Chess de Sion est terminé. Merci à tous les participants et soutiens. Consultez les résultats finaux." />
      
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white font-sans">
        
        {/* Section Principale - Remerciements */}
        <section className="py-24">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary-900">
                Activ Chess de Sion
              </h1>

              <p className="text-l md:text-2xl font-bold mb-8 text-primary-700">
                26 octobre 2025
              </p>

              {/* Image centrale */}
              <img
                src="picture\events\tournoi_plein.png"
                alt="Partie d'échecs"
                className="w-full max-w-lg mx-auto rounded-xl shadow-2xl mb-8 object-cover"
                style={{ aspectRatio: '3/2' }}
              />

              {/* Mot de remerciement */}
              <p className="text-xl text-neutral-700 mb-10">
                Un immense merci à tous les participants, à nos généreux soutiens et à toutes les personnes qui nous ont aidées à faire de cet événement un succès !
              </p>

              {/* Bouton vers les résultats */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://s1.chess-results.com/tnr1249797.aspx?lan=20&art=1&rd=9&SNode=S0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-4 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold shadow-lg text-lg"
                >
                  <Users className="h-5 w-5 mr-3" />
                  Consulter les résultats finaux
                </a>
              </motion.div>

            </motion.div>
          </div>
        </section>

        {/* Section Podium */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-neutral-800">
                Le Podium 2025
              </h2>

              {/* Image du Podium */}
              <img
                src="picture\events\Activ_Chess_2025\podium_top3.jpeg"
                alt="Podium du tournoi Activ Chess de Sion 2025"
                className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl mb-6 object-cover"
                style={{ aspectRatio: '16/9' }}
              />

              {/* Légende */}
              <p className="text-md text-neutral-700 max-w-3xl mx-auto leading-relaxed">
                <strong>Podium du tournoi :</strong> (de g. à dr.) Philippe Varone (président de la Ville de Sion), Flavien Sola 3ème (CE Sion), Romain Gemelli 1er (CE Echallens), Alexandre Iwanesko 2ème (CE Nyon), Nathalie Chavaz-Constantin (présidente de la Bourgeoisie de Sion)
              </p>
            </motion.div>
          </div>
        </section>

        {/* Section Sponsors (Conservée) */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="text-center max-w-4xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-12 text-neutral-800">Merci à nos généreux soutiens</h2>
              <div className="grid grid-cols-2 gap-6">
                {sponsors.map(sponsor => (
                  <a
                    key={sponsor.name}
                    href={sponsor.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={sponsor.name}
                    className="flex justify-center items-center h-32 bg-white rounded-lg p-6 opacity-90 hover:opacity-100 hover:bg-neutral-100 transition-all duration-300 shadow-sm hover:shadow-md"
                  >
                    <img
                      src={sponsor.imgSrc}
                      alt={sponsor.alt}
                      className={`max-h-20 max-w-full object-contain ${sponsor.className || ''}`}
                    />
                  </a>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </>
  )
}