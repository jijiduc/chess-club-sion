import { motion } from 'framer-motion'
import { useEffect, useState } from 'react';
// MODIFIÉ: Ajout de 'List'
import { Users, Calendar, Clock, MapPin, ClipboardCheck, Euro, Award, List } from 'lucide-react'
import { Title, Meta } from 'react-head';
import Snowfall from '../components/Snowfall';

// --- COMPOSANT TWINT (inchangé) ---
function TwintEmbed() {
  useEffect(() => {
    // On vérifie si le script n'est pas déjà chargé pour éviter les doublons
    if (document.getElementById('raisenow-embed-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'raisenow-embed-script';
    script.type = 'module';

    script.textContent = `
      try {
        const { SolutionEmbed } = await import("https://cdn.jsdelivr.net/npm/@raisenow/solution-embed@1/dist/index.js");
        if (document.getElementById("rnw-solution-embed-xdqqt")) {
          SolutionEmbed.render("#rnw-solution-embed-xdqqt", {
            "url": "https://pay.raisenow.io/xdqqt?lng=fr",
            "info": true,
          });
        }
      } catch (e) {
        console.error("Erreur lors du chargement du widget RaiseNow (TWINT):", e);
      }
    `;

    document.body.appendChild(script);

    return () => {
      const existingScript = document.getElementById('raisenow-embed-script');
      if (existingScript) {
        const container = document.getElementById("rnw-solution-embed-xdqqt");
        if (container) container.innerHTML = "";
      }
    };
  }, []);

  return (
    <div
      id="rnw-solution-embed-xdqqt"
      style={{
        width: '100%',
        margin: '0 auto',
        maxWidth: '580px',
        filter: 'drop-shadow(0px 40px 100px rgba(0, 0, 0, 0.15))'
      }}
    >
      <p className="text-center text-neutral-600">Chargement du module de paiement...</p>
    </div>
  );
}
// --- FIN TWINT ---


export default function BlitzNoel() {

  // --- COMPTEUR (LOGIQUE JSONP) ---
  const [inscritCount, setInscritCount] = useState<number | string | null>(null);
 
  // !! AJOUT: Constante pour décaler le nombre d'inscrits
  const countOffset = 2;
  
  // !! MODIFIÉ: Mise à jour avec votre NOUVELLE URL !!
  const APPS_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxtU43O1Qth1iCLkf8iEzVZRt9sTVvt3YWsKcOalSvwB6ob5OVpbLJJfTP39NmldCZy/exec";

  useEffect(() => {
    // Nom unique pour notre fonction de callback JSONP
    const callbackName = 'jsonpCallback_blitznoel';

    // On crée la fonction sur l'objet global 'window'
    (window as any)[callbackName] = (data: any) => {
      if (data && typeof data.count === 'number') {
        setInscritCount(data.count);
      } else {
        setInscritCount('?');
      }
      // Nettoyage
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    // On crée et injecte la balise <script>
    const script = document.createElement('script');
    script.src = `${APPS_SCRIPT_URL}?callback=${callbackName}`;
    document.body.appendChild(script);

    // Gestion d'erreur
    script.onerror = () => {
      setInscritCount('?');
      delete (window as any)[callbackName];
      document.body.removeChild(script);
    };

    // Nettoyage
    return () => {
      if ((window as any)[callbackName]) {
        delete (window as any)[callbackName];
      }
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []); // Le tableau vide [] signifie que cet effet ne s'exécute qu'une seule fois
  // --- FIN COMPTEUR ---

  // Crée une variable pour l'affichage, en appliquant le décalage
  const displayCount = inscritCount !== null && typeof inscritCount === 'number'
    ? inscritCount - countOffset
    : inscritCount;

  // Programme
  const schedule = [
    { time: '14h00', event: 'Accueil et confirmation des inscriptions' },
    { time: '14h20', event: 'Finalisation de la liste des participants sur place' },
    { time: '14h30', event: 'Début du tournoi' },
    { time: 'env. 17h00', event: 'Remise des prix' },
  ];

  return (
    <>
      <Title>Blitz Populaire de Noël - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Participez au tournoi Blitz de Noël du CE Sion ! 7 rondes en 5+3, ouvert à tous, le dimanche 21 décembre." />
      <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
        {/* Hero Section (inchangée) */}
        <section
          className="relative text-white py-24 overflow-hidden"
          style={{
            backgroundImage: `linear-gradient(rgba(20, 0, 0, 0.6), rgba(20, 0, 0, 0.6)), url('/picture/backgrounds/winter-bg.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Snowfall />
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Blitz Populaire de Noël
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                Homologué FIDE
              </p>

              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Dimanche 21 décembre</span>
                </div>
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Clock className="h-5 w-5 mr-2" />
                  <span>7 rondes • 5 min + 3 sec</span>
                </div>

                {/* AFFICHAGE COMPTEUR (MODIFIÉ) */}
                <div className="flex items-center bg-white/10 px-3 py-1 rounded-full">
                  <Users className="h-5 w-5 mr-2" />
                  <span>
                    {displayCount !== null ? (
                      <>
                        <strong>{displayCount}</strong> {displayCount === '?' ? 'inscrits' : 'inscrit(s)'}
                      </>
                    ) : (
                      '...'
                    )} / 40 max.
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">

                {/* Introduction (inchangée) */}
                <div className="prose prose-lg max-w-none mb-12 text-center">
                  <p className="text-neutral-700">
                    Pour célébrer la fin de l'année, le Club d'Échecs de Sion organise un tournoi Blitz de Noël.
                    Sept rondes dans une ambiance amicale et festive, ouvertes à toutes et tous.
                  </p>
                </div>

                {/* Informations Clés (inchangées) */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 md:p-8 mb-12">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
                    Informations Clés
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {/* (Date, Lieu, Format, Prix, Finance - inchangés) */}
                    <div className="flex items-start">
                      <Calendar className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Date & Heure</h4>
                        <p className="text-neutral-700">Dimanche 21 décembre. Accueil dès 14h00, début à 14h30.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Lieu</h4>
                        <p className="text-neutral-700">Au local du Club d'Échecs de Sion.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Format & Cadence</h4>
                        <div>
                          <p className="text-neutral-700">
                            Tournoi Blitz en 7 rondes. Cadence 5 minutes + 3 secondes/coup.
                          </p>
                          <p className="text-neutral-700">
                            Arbitre : NA Fabrice Lovey
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Award className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Prix</h4>
                        <p className="text-neutral-700">Prix pour les 3 premiers du classement général et les 3 meilleurs juniors (U20). Non-cumulables.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <Euro className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Finance</h4>
                        <p className="text-neutral-700">Adultes : <strong>CHF 15.-</strong></p>
                        <p className="text-neutral-700">Juniors (U20) : <strong>CHF 5.-</strong></p>
                        <p className="text-neutral-600 text-sm mt-1">
                          Inscription validée après paiement (voir modalités ci-dessous).
                        </p>
                      </div>
                    </div>

                    {/* AFFICHAGE COMPTEUR (MODIFIÉ) */}
                    <div className="flex items-start">
                      <ClipboardCheck className="h-6 w-6 mr-3 text-primary-600 flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-primary-900">Inscriptions</h4>
                        <p className="text-neutral-700">Capacité limitée à 40 participants.</p>
                        <div className="mt-2 bg-primary-100 p-2 rounded-md">
                          <p className="font-semibold text-primary-800 text-center">
                            Inscrits validés actuels : {
                              displayCount === null ? 'Chargement...' :
                                (displayCount === '?' ? 'N/A' : `${displayCount} / 40`)
                            }
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Support UVE */}
                  <div className="mt-8 flex flex-col items-center justify-center">
                    <p className="text-center text-neutral-600 text-sm mb-2">sous l'égide et avec le soutien de</p>
                    <img src="/picture/events/UVE.png" alt="Logo UVE - Union Valaisanne des Echecs" className="h-16 mx-auto" />
                  </div>
                </div>

                {/* --- MODIFIÉ: Call to Action (avec 2 boutons) --- */}
                <div className="text-center mb-12">
                  {/* Conteneur Flex pour aligner les boutons */}
                  <div className="flex flex-col sm:flex-row justify-center items-center gap-4">

                    {/* Bouton 1: S'inscrire (conditionnel) */}
                    {displayCount !== null && typeof displayCount === 'number' && displayCount < 40 && (
                      <motion.a
                        href="https://forms.gle/wTn4UmSqD6o6ouBd7"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-red-600 to-primary-600 text-white font-bold rounded-lg shadow-lg hover:from-red-700 hover:to-primary-700 transition-colors w-full sm:w-auto"
                      >
                        <ClipboardCheck className="h-5 w-5 mr-3" />
                        S'inscrire en ligne
                      </motion.a>
                    )}

                    {/* NOUVEAU BOUTON: Liste des inscrits */}
                    <motion.a
                      href="https://docs.google.com/document/d/1r8EbUMybaKIWZyd58Uco4e1I_dodR-5hE96cWdiMraM/edit?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center justify-center px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-lg border border-primary-200 hover:bg-primary-50 transition-colors w-full sm:w-auto"
                    >
                      <List className="h-5 w-5 mr-3" />
                      Voir la liste des inscriptions validées
                    </motion.a>
                  </div>

                  <p className="text-sm text-neutral-600 mt-4">Date limite des inscriptions en ligne : vendredi 19 décembre.</p>
                </div>
                {/* --- FIN Call to Action --- */}


                {/* SECTION PAIEMENT (inchangée) */}
                <div className="my-16">
                  <h3 className="text-3xl font-bold text-primary-900 mb-8 text-center">
                    Modalités de Paiement
                  </h3>
                  <p className="text-lg text-neutral-700 text-center max-w-3xl mx-auto mb-10">
                    Pour finaliser votre inscription, veuillez régler la finance via l'une des méthodes ci-dessous.
                    Votre inscription n'est validée qu'à réception du paiement.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">

                    {/* Colonne 1: TWINT */}
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 md:p-8 h-full">
                      <h4 className="text-2xl font-semibold text-primary-900 mb-4 text-center">
                        Paiement par TWINT
                      </h4>
                      <p className="text-neutral-700 text-center mb-6">Utilisez le formulaire sécurisé ci-dessous.</p>

                      <TwintEmbed />
                    </div>

                    {/* Colonne 2: Virement Bancaire */}
                    <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 md:p-8 h-full">
                      <h4 className="text-2xl font-semibold text-primary-900 mb-4 text-center">
                        Virement Bancaire
                      </h4>
                      <p className="text-neutral-700 text-center mb-6">Veuillez utiliser les coordonnées suivantes :</p>
                      <ul className="space-y-3">
                        <li className="flex flex-col p-3 bg-white rounded-md shadow-sm">
                          <span className="text-sm font-semibold text-primary-800">Titulaire</span>
                          <span className="text-neutral-700 text-lg">Club d'échec de Sion</span>
                        </li>
                        <li className="flex flex-col p-3 bg-white rounded-md shadow-sm">
                          <span className="text-sm font-semibold text-primary-800">IBAN</span>
                          <span className="text-neutral-700 text-lg font-mono break-all">CH08 0076 5001 0592 7490 7</span>
                        </li>
                      </ul>
                      <p className="text-sm text-neutral-600 mt-4 text-center">
                        N'oubliez pas la communication : "Blitz Noël + Votre Nom".
                      </p>
                    </div>
                  </div>
                </div>
                {/* --- FIN SECTION PAIEMENT --- */}


                {/* Programme Détaillé (inchangé) */}
                <div className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-xl p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-primary-900 mb-6 text-center">
                    Programme détaillé
                  </h3>
                  <div className="max-w-md mx-auto">
                    <ul className="space-y-3">
                      {schedule.map((item, index) => (
                        <li key={index} className="flex items-center p-3 bg-white rounded-md shadow-sm">
                          <span className="font-semibold text-primary-800 w-28">{item.time}</span>
                          <span className="text-neutral-700 flex-1">{item.event}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}