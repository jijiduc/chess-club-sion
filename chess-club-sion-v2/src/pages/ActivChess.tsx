import { motion } from 'framer-motion';
import {
  Trophy,
  CalendarDays,
  MapPin,
  Clock,
  Users,
  Swords,
  ShieldCheck,
  Award,
  Star,
  UtensilsCrossed,
  Ticket,
  ArrowRight,
  User,
  Cake,
  Car,
  TrainTrack,
  CalendarPlus
} from 'lucide-react';
import { Title, Meta } from 'react-head';

// --- Structures de données pour le contenu de la page ---

const keyInfo = [
  {
    icon: CalendarDays,
    label: "Date",
    value: "Dimanche 26 Octobre 2025",
  },
  {
    icon: MapPin,
    label: "Lieu",
    value: "Bâtiment scolaire de Champsec, Sion",
  },
  {
    icon: Swords,
    label: "Cadence",
    value: "15 minutes + 3 secondes par coup",
  },
  {
    icon: Users,
    label: "Format",
    value: "9 rondes, système suisse",
  },
];

const schedule = [
  { time: "8h00 - 8h30", event: "Contrôle des inscriptions" },
  { time: "9h00", event: "Rondes 1 à 4" },
  { time: "12h00", event: "Pause de midi" },
  { time: "13h00", event: "Rondes 5 à 9" },
  { time: "18h00", event: "Remise des prix" },
];

const registrationFees = [
  { category: "Adultes", price: "30 CHF" },
  { category: "Juniors (U20)", price: "20 CHF" },
  { category: "GMI & MI", price: "Gratuit" },
];

const prizeCategories = [
  {
    title: "Top 10",
    icon: Trophy,
    prizes: [
      "1er: 350 CHF",
      "2ème: 275 CHF",
      "3ème: 200 CHF",
      "4ème: 150 CHF",
      "5ème: 100 CHF",
      "6ème au 10ème: 50 CHF",
    ],
  },
  {
    title: "Top Valaisans",
    icon: Award,
    prizes: [
      "Cat. Open: 100.- / 50.- / 30.-",
      "Cat. Seniors: 50.-",
      "Cat. Juniors: 50.- / 30.- / 25.- / 15.-",
    ],
  },
  {
    title: "Autres Prix",
    icon: Star,
    prizes: [
      "1ère Féminine: 50 CHF",
      "1er <2000 Elo: 50 CHF",
      "1er <1600 Elo: 50 CHF",
    ],
  },
];

// MODIFICATION: Utilisation d'images pour les sponsors
const sponsors = [
  { name: "La Ville de Sion", imgSrc: "https://www.sion.ch/dist/sion/2019/images/logo.859646380a5c91ded5e7.svg", alt: "Logo de la Ville de Sion" },
  { name: "L'Union Valaisanne des Échecs", imgSrc: "https://www.uve-wsb.ch/images/systeme/logo-uve.png", alt: "Logo de l'Union Valaisanne des Échecs" },
];


export default function ActivChessSion() {
  const tournamentAddress = "Bâtiment scolaire de Champsec, Chemin des Pâquerettes 12, 1950 Sion";
  const googleMapsLink = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(tournamentAddress)}`;
  const parkingLink = "https://maps.app.goo.gl/M93ERqxUomGuwFid6";
  const trainDirectionsLink = `https://www.google.com/maps/dir/?api=1&origin=Gare+de+Sion&destination=${encodeURIComponent(tournamentAddress)}&travelmode=walking`;
  const eventDetails = {
    title: "Activ Chess de Sion",
    location: tournamentAddress,
    details: "Tournoi d'échecs rapide. 9 rondes, 15min + 3s/coup. Plus d'infos sur www.cesion.ch",
    // Le 26 octobre 2025, la Suisse sera en CET (UTC+1)
    // Début: 09:00 CET -> 08:00 UTC
    // Fin: 18:30 CET -> 17:30 UTC
    startDate: "20251026T080000Z",
    endDate: "20251026T173000Z",
  };
  const addToCalendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(eventDetails.title)}&dates=${eventDetails.startDate}/${eventDetails.endDate}&details=${encodeURIComponent(eventDetails.details)}&location=${encodeURIComponent(eventDetails.location)}`;


  return (
    <>
      <Title>Activ Chess de Sion - Tournoi Rapide</Title>
      <Meta name="description" content="Participez à l'Activ Chess de Sion le 26 octobre 2025. Toutes les informations sur notre tournoi d'échecs rapide : programme, inscriptions et prix." />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white font-sans">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-primary-900 to-accent-900 text-white py-24">
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Activ Chess de Sion
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-3xl mx-auto">
                Tournoi de parties rapides ouvert à tous, limité à 100 participants.
              </p>

              {/* --- MODIFICATION COMMENCE ICI --- */}
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                {/* Bouton Inscriptions */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://forms.gle/hRwbY3kyT9qy7hrv9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold shadow-lg"
                  >
                    <Ticket className="h-5 w-5 mr-3" />
                    Inscriptions
                  </a>
                </motion.div>

                {/* Nouveau Bouton: Liste des inscrits */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://s2.chess-results.com/tnr1249797.aspx?lan=20"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors font-semibold shadow-lg"
                  >
                    <Users className="h-5 w-5 mr-3" />
                    Liste des inscrits
                  </a>
                </motion.div>
              </div>
              {/* --- MODIFICATION TERMINE ICI --- */}

            </motion.div>
          </div>
        </section>

        {/* Key Information Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              {keyInfo.map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg p-6 text-center flex flex-col"
                >
                  <div className="flex-grow">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full mb-4">
                      <item.icon className="h-8 w-8 text-primary-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-500">{item.label}</h3>
                    <p className="text-xl font-bold text-neutral-800">{item.value}</p>
                  </div>
                  {item.label === "Date" && (
                    <a
                      href={addToCalendarLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center justify-center text-sm text-primary-600 hover:underline font-semibold"
                    >
                      <CalendarPlus className="h-4 w-4 mr-2" />
                      Ajouter au calendrier
                    </a>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Schedule & Fees Section */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-5 gap-12 max-w-7xl mx-auto items-start">
              {/* Schedule */}
              <div className="lg:col-span-3">
                <h2 className="text-3xl font-bold text-center mb-12">Programme de la journée</h2>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl shadow-lg p-8 space-y-6"
                >
                  {schedule.map((item, index) => (
                    <div key={item.time} className={`flex items-center gap-6 ${index < schedule.length - 1 ? 'pb-6 border-b border-dashed border-neutral-200' : ''}`}>
                      <Clock className="h-8 w-8 text-primary-600 flex-shrink-0" />
                      <div className="flex flex-col sm:flex-row justify-between w-full items-baseline">
                        <p className="font-mono text-lg text-primary-700 font-semibold">{item.time}</p>
                        <p className="text-lg text-neutral-800 sm:text-right">{item.event}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Fees */}
              <div className="lg:col-span-2">
                <h2 className="text-3xl font-bold text-center mb-12">Frais d'inscription</h2>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6">
                    <h3 className="text-2xl font-bold flex items-center gap-3"><Ticket /> Inscriptions</h3>
                  </div>
                  <div className="p-6">
                    <ul className="space-y-4">
                      {registrationFees.map((fee) => (
                        <li key={fee.category} className="flex justify-between items-center text-lg pb-2 border-b border-neutral-100">
                          <span className="text-neutral-700">{fee.category}</span>
                          <span className="font-bold text-primary-700">{fee.price}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-sm mt-6 text-neutral-600">
                      Le tournoi compte pour le Elo FIDE, le championnat valaisan rapide 2025-26 et le Grand Prix Valaisan Jeunes U20 2025-26.
                    </p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* On-site Food & Sponsors Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
              {/* Food */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-xl shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-4">
                  <UtensilsCrossed className="h-8 w-8 text-primary-600" />
                  <h3 className="text-2xl font-semibold">Restauration sur place</h3>
                </div>
                <p className="text-neutral-600 mb-6">
                  Un menu complet pour <strong>20 CHF</strong> vous est proposé pour la pause de midi.
                </p>
                <div className="space-y-3 text-neutral-800">
                  <p className="flex items-center gap-3"><User className="h-5 w-5 text-accent-500" />Buffet de salades</p>
                  <p className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-accent-500" />Cordon bleu artisanal, légumes et pommes de terre sautées</p>
                  <p className="flex items-center gap-3"><Cake className="h-5 w-5 text-accent-500" />Gâteaux et café</p>
                </div>
                <div className="mt-6 pt-6 border-t border-dashed">
                  <p className="text-sm font-semibold text-accent-700">Option végétarienne disponible. Viande préparée par la Boucherie Délitroz.</p>
                </div>
              </motion.div>

              {/* Sponsors */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.1 }}
                className="text-center"
              >
                <h2 className="text-3xl font-bold mb-8">Merci à nos généreux soutiens</h2>
                <div className="flex justify-center items-center gap-8 flex-wrap">
                  {sponsors.map(sponsor => (
                    <div key={sponsor.name} className="flex flex-col items-center gap-2 text-neutral-700">
                      <img src={sponsor.imgSrc} alt={sponsor.alt} className="h-20 object-contain" />
                      <p className="font-semibold">{sponsor.name}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>


        {/* Prizes Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-5">Distribution des prix</h2>
            <p className="text-center text-neutral-600 mb-10 max-w-2xl mx-auto">
              Les prix ne sont pas cumulables.
            </p>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {prizeCategories.map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg flex flex-col"
                >
                  <div className="bg-gradient-to-r from-primary-600 to-accent-600 text-white p-6 rounded-t-xl">
                    <div className="flex items-center gap-4">
                      <category.icon className="h-8 w-8 flex-shrink-0" />
                      <h3 className="text-2xl font-bold">{category.title}</h3>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <ul className="space-y-3">
                      {category.prizes.map((prize) => (
                        <li key={prize} className="flex items-center">
                          <ShieldCheck className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                          <span className="text-neutral-700">{prize}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* MODIFICATION: Section Informations Pratiques */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Informations pratiques</h2>
            <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Carte Adresse */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0 }}
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <MapPin className="h-8 w-8 text-primary-600" />
                    <h3 className="text-2xl font-semibold">Adresse</h3>
                  </div>
                  <p className="text-neutral-700 text-lg mb-6">{tournamentAddress}</p>
                </div>
                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold"
                >
                  Ouvrir dans Google Maps
                </a>
              </motion.div>
              {/* Carte Parking */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <Car className="h-8 w-8 text-primary-600" />
                    <h3 className="text-2xl font-semibold">Parking</h3>
                  </div>
                  <p className="text-neutral-700 text-lg mb-6">
                    Un parking gratuit se trouve à environ 2 minutes à pied.
                  </p>
                </div>
                <a
                  href={parkingLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold"
                >
                  Itinéraire vers le parking
                </a>
              </motion.div>
              {/* Carte Accès en Train */}
              <motion.div
                className="bg-white rounded-xl shadow-lg p-8 flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="flex-grow">
                  <div className="flex items-center gap-4 mb-4">
                    <TrainTrack className="h-8 w-8 text-primary-600" />
                    <h3 className="text-2xl font-semibold">Accès en train</h3>
                  </div>
                  <p className="text-neutral-700 text-lg mb-6">
                    Depuis la gare de Sion, la salle de tournoi est accessible en ~25 minutes de marche.
                  </p>
                </div>
                <a
                  href={trainDirectionsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-md hover:bg-primary-700 transition-colors font-semibold"
                >
                  Itinéraire depuis la gare
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Final Call to Action */}
        <section className="py-20 bg-neutral-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl shadow-2xl p-8 md:p-12 text-center text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Prêt pour le tournoi ?
                </h2>
                <p className="text-xl mb-8 opacity-90">
                  Les places sont limitées. Assurez la vôtre dès maintenant !
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="https://forms.gle/hRwbY3kyT9qy7hrv9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-8 py-4 bg-white text-primary-600 rounded-md hover:bg-neutral-100 transition-colors font-semibold"
                  >
                    <ArrowRight className="h-5 w-5 mr-3" />
                    S'inscrire
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
