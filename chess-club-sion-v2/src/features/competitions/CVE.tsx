import { useState } from 'react'
import { motion } from 'framer-motion'
import { Trophy, Users, Calendar, ChevronRight, ExternalLink, Medal, MapPin, FileText, LayoutGrid, CalendarDays, Flag, Target } from 'lucide-react'
import { Title, Meta } from 'react-head';

interface TeamResult {
  teamName: string
  position: string
  isChampion?: boolean
  description: string
  matchDetails?: {
    title: string
    pairings: Array<{
      board: number
      white: string
      black: string
      result: string
    }>
  }
}

interface Season {
  year: string
  isExpanded: boolean
  hasVictory?: boolean
  victoryTitle?: string
  victoryDescription?: string
  photo?: {
    src: string
    alt: string
    caption: string
  }
  teams: TeamResult[]
  documents?: Array<{
    title: string
    url: string
  }>
}

export default function CVE() {
  const [seasons, setSeasons] = useState<Season[]>([
    {
      year: '2025',
      isExpanded: true,
      hasVictory: true,
      victoryTitle: 'Sion réalise le doublé en 2025 !',
      victoryDescription: 'Le CE Sion remporte le titre en parties classiques (pour la 4ème année consécutive) et en parties rapides lors des finales valaisannes du 3 mai 2025.',
      photo: {
        src: '/picture/gallery/CVE/cve_2025.jpg',
        alt: "L'équipe victorieuse du tournoi rapide",
        caption: "L'équipe victorieuse du tournoi rapide"
      },
      teams: [
        {
          teamName: 'Équipe Sion 1',
          position: 'Champion 2025',
          isChampion: true,
          description: "Après une qualification en poule haute, Sion 1 a brillamment terminé en tête de sa poule avant de remporter la finale face à Martigny sur le score de 2.5 - 1.5.",
          matchDetails: {
            title: 'Finale pour le titre (Martigny 1 - Sion 1)',
            pairings: [
              { board: 1, white: 'Lovey Fabrice', black: 'Sola Flavien', result: '0-1' },
              { board: 2, white: 'Floure Alexan', black: 'Roduit Yves', result: '1-0' },
              { board: 3, white: 'Perruchoud Pierre', black: 'Rappaz Pierre-Marie', result: '0.5-0.5' },
              { board: 4, white: 'Moret Jean-Paul', black: 'Duc Jeremy', result: '0-1' }
            ]
          }
        },
        {
          teamName: 'Équipe Sion 2',
          position: '7ème place',
          description: "Après une belle phase initiale, Sion 2 a terminé sa saison en remportant le match de classement pour la 7ème place face à Riddes sur le score de 3-1.",
          matchDetails: {
            title: 'Match pour la 7ème place (Sion 2 - Riddes 1)',
            pairings: [
              { board: 1, white: 'Crettenand Olivier', black: 'Bonvin Pierre-Etienne', result: '1-0' },
              { board: 2, white: 'Cortada Garcia Joan', black: 'Vouillamoz Eric', result: '0.5-0.5' },
              { board: 3, white: 'Ben Salem Akram', black: 'Favre Christian', result: '0.5-0.5' },
              { board: 4, white: 'Moerschell Simon', black: 'Droz Philippe', result: '1-0' }
            ]
          }
        }
      ],
      documents: [
        {
          title: 'Classement final 2025',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2024-2025/20250503_cve_classement.pdf'
        },
        {
          title: 'Détails de toutes les rondes',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2024-2025/20250503_res_det_cve.pdf'
        }
      ]
    },
    {
      year: '2024',
      isExpanded: false,
      hasVictory: true,
      victoryTitle: 'Sion champion valaisan 2024',
      victoryDescription: 'Pour la troisième année consécutive, le CE Sion remporte le titre de champion valaisan par équipes!',
      teams: [
        {
          teamName: 'Équipe Sion',
          position: 'Champion 2024',
          isChampion: true,
          description: "Après un parcours maîtrisé tout au long de la saison, Sion a confirmé sa domination sur les échiquiers valaisans en remportant la finale contre Martigny.",
          matchDetails: {
            title: 'Finale pour le titre (Martigny 1 - Sion)',
            pairings: [
              { board: 1, white: 'Floure Alexan', black: 'Rappaz Pierre-Marie', result: '0-1' },
              { board: 2, white: 'Perruchoud Xavier', black: 'Riand Jean-Yves', result: '1-0' },
              { board: 3, white: 'Perruchoud Pierre', black: 'Duc Jeremy', result: '1-0' },
              { board: 4, white: 'Lovey Fabrice', black: 'Roduit Yves', result: '0-1' }
            ]
          }
        }
      ],
      documents: [
        {
          title: 'Résultats complets 2024',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2023-2024/20240518_cve_resdet.pdf'
        },
        {
          title: 'Classement final',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2023-2024/20240504_res_r7.pdf'
        }
      ]
    },
    {
      year: '2023',
      isExpanded: false,
      hasVictory: true,
      victoryTitle: 'Sion 1 champion valaisan 2023 !',
      victoryDescription: 'Pour la deuxième année consécutive, le CE Sion remporte le titre de champion valaisan par équipes!',
      photo: {
        src: '/picture/gallery/CVE/cve_2023.png',
        alt: "L'équipe victorieuse",
        caption: "L'équipe de Sion 1, de g.à.d. Simon Morand, Vlad Popescu, Jean-Yves Riand et Stéphane Emery"
      },
      teams: [
        {
          teamName: 'Équipe Sion 1',
          position: 'Champion 2023',
          isChampion: true,
          description: "Sion couronne sa bonne saison en remportant la finale contre Montana sur le score de 3.5-0.5."
        },
        {
          teamName: 'Équipe Sion 2',
          position: '9ème place',
          description: "Sion 2 remporte son match finale contre CE Port-Valais 3-1 et termine en 9ème place."
        }
      ],
      documents: [
        {
          title: 'Classement final',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2022-2023/20230507_-actifs_de_parties_classiques_classement_final.pdf'
        }
      ]
    },
    {
      year: '2022',
      isExpanded: false,
      hasVictory: true,
      victoryTitle: 'Sion 1 champion valaisan 2022 !',
      victoryDescription: 'Le CE Sion remporte le titre de champion par équipe en parties classiques lors de la finale valaisannes.',
      photo: {
        src: '/picture/gallery/CVE/cve_2022.png',
        alt: "L'équipe victorieuse",
        caption: "L'équipe de Sion 1 lors de la finale, de g.à.d. Vlad Popescu, Pierre-Marie Rappaz, Simon Morand et Stéphane Emery"
      },
      teams: [
        {
          teamName: 'Équipe Sion 1',
          position: 'Champion 2022',
          isChampion: true,
          description: "Sion 1 à maîtrisé sa saison et remporte la finale face à Martigny sur le score de 3.5-0.5",
          matchDetails: {
            title: 'Finale pour le titre (Martigny 1 - Sion 1)',
            pairings: [
              { board: 1, white: 'Besse Léonard', black: 'Emery Stéphane', result: '0-1' },
              { board: 2, white: 'Perruchoud Xavier', black: 'Morand Simon', result: '0-1' },
              { board: 3, white: 'Perruchoud Pierre', black: 'Popescu Vlad', result: '0.5-0.5' },
              { board: 4, white: 'Moret Jean-Paul', black: 'Rappaz Pierre-Marie', result: '0-1' }
            ]
          }
        },
        {
          teamName: 'Équipe Sion 2',
          position: '12ème place',
          description: "Sion 2 conclu une saison compliquée, sur une note décevante, terminant à la 12ème et dernière place.",
          matchDetails: {
            title: 'Match pour la 11ème place (Martigny 4 - Sion 2)',
            pairings: [
              { board: 1, white: 'Weber Stéphane', black: 'Duc Jeremy', result: '1-0' },
              { board: 2, white: 'Moret Christian', black: 'Capt Pierre-André', result: '0.5-0.5' },
              { board: 3, white: 'Putallaz Jean-Christophe', black: 'Moerschell Simon', result: '0-1' },
              { board: 4, white: 'Saudan César', black: 'Pannatier Samuel', result: '0.5-0.5' }
            ]
          }
        }
      ],
      documents: [
        {
          title: 'Classement final 2022',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2022/20220521_cve_classement.pdf'
        },
        {
          title: 'Détails de toutes les rondes',
          url: 'https://www.uve-wsb.ch/images/competitions/Resultats/CVE/2022/20230117_cve_2021-2022.pdf'
        }
      ]
    }
  ])

  const toggleSeason = (yearToToggle: string) => {
    setSeasons(seasons.map(season =>
      season.year === yearToToggle
        ? { ...season, isExpanded: !season.isExpanded }
        : season
    ))
  }

  return (
    <>
      <Title>Championnat Valaisan par Équipes (CVE) - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Suivez les performances du Club d'Échecs de Sion au Championnat Valaisan par Équipes (CVE). Retrouvez les résultats, les classements et le palmarès de nos équipes." />
      <div className="min-h-screen bg-gradient-to-b from-red-50 to-white">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-red-900 to-red-800 text-white py-24">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Championnat Valaisan par Équipes
              </h1>
              <p className="text-xl md:text-2xl opacity-90 mb-8">
                CVE - Compétition par équipes du Valais
              </p>
              <div className="flex flex-wrap justify-center gap-6 text-sm md:text-base">
                <div className="flex items-center">
                  <Trophy className="h-5 w-5 mr-2" />
                  <span>Champions 2022-2025</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  <span>3 équipes engagées</span>
                </div>
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 mr-2" />
                  <span>Novembre - Mai</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="max-w-4xl mx-auto"
            >
              {/* Intro Description */}
              <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 border border-red-100 mb-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-neutral-700 text-lg leading-relaxed">
                    Organisé par <a href="https://www.uve-wsb.ch/" className="text-red-600 hover:text-red-700 font-semibold underline decoration-red-200 hover:decoration-red-600 transition-all">
                      l'Union Valaisanne des Echecs (UVE)
                    </a>, le Championnat Valaisan par Equipes (CVE) est le rendez-vous incontournable des clubs du canton. 
                    De novembre à mai, les équipes s'affrontent dans un format convivial mais compétitif, où chaque match se joue sur 4 échiquiers.
                  </p>
                </div>
              </div>

              {/* Format de la compétition - Cartes */}
              <div className="mb-16">
                <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <LayoutGrid className="h-8 w-8 mr-3 text-red-600" />
                  Format de la compétition
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 font-bold text-xl">1</div>
                    <h4 className="font-bold text-lg text-red-900 mb-3">Phase Initiale</h4>
                    <p className="text-neutral-600 text-sm">
                      <strong>Rondes 1 à 3</strong><br/>
                      Les équipes sont réparties dans des groupes initiaux. Ces premiers matchs déterminent la qualification pour les poules "Hautes" ou "Basses".
                    </p>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 font-bold text-xl">2</div>
                    <h4 className="font-bold text-lg text-red-900 mb-3">Phase de Poules</h4>
                    <p className="text-neutral-600 text-sm">
                      <strong>Rondes 4 à 6</strong><br/>
                      Les équipes s'affrontent au sein de leurs nouvelles poules (A/B pour le titre, C/D pour le classement) pour déterminer les finalistes.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 hover:shadow-xl transition-shadow">
                     <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-4 text-red-600 font-bold text-xl">3</div>
                     <h4 className="font-bold text-lg text-red-900 mb-3">Phase Finale</h4>
                     <p className="text-neutral-600 text-sm">
                      <strong>Ronde 7</strong><br/>
                      La grande finale ! Les vainqueurs de poules s'affrontent pour le titre de Champion Valaisan, et chaque équipe joue un match de classement final.
                     </p>
                  </div>
                </div>
              </div>

              {/* Équipes Engagées - Cartes */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <Users className="h-8 w-8 mr-3 text-red-600" />
                  Nos Équipes 2025/2026
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                   {[
                     { name: "Sion 1", group: "Groupe A", captain: "Pierre-Marie Rappaz", desc: "Équipe première visant le titre." },
                     { name: "Sion 2", group: "Groupe B", captain: "Simon Moerschell", desc: "Équipe compétitive visant la poule haute." },
                     { name: "Sion 3", group: "Groupe D", captain: "Jeremy Duc", desc: "Équipe de formation pour les juniors." }
                   ].map((team, idx) => (
                     <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-md border border-neutral-200 hover:border-red-300 transition-colors group">
                        <div className="bg-red-600 px-6 py-3">
                          <h4 className="text-white font-bold text-xl flex justify-between items-center">
                            {team.name}
                            <Flag className="h-5 w-5 opacity-80" />
                          </h4>
                        </div>
                        <div className="p-6">
                           <div className="flex items-center mb-4">
                             <span className="bg-red-100 text-red-800 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                               {team.group}
                             </span>
                           </div>
                           <p className="text-neutral-600 mb-6 text-sm min-h-[40px]">{team.desc}</p>
                           <div className="flex items-center text-sm text-neutral-500 border-t pt-4">
                             Capitaine : <span className="font-medium text-neutral-900 ml-1">{team.captain}</span>
                           </div>
                        </div>
                     </div>
                   ))}
                </div>
              </div>

              {/* Composition des Groupes - Grid Améliorée */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <Target className="h-8 w-8 mr-3 text-red-600" />
                  Phase initiale : groupes et classement
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Groupe A */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="h-1 bg-red-500 w-full"></div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-neutral-800 mb-4">Groupe A</h4>
                      <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-neutral-200 text-neutral-500">
                              <th className="pb-2 text-left w-8 font-semibold">#</th>
                              <th className="pb-2 text-left font-semibold">Équipe</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Éq.</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Ind.</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100">
                            <tr className="bg-red-50/50">
                              <td className="py-3 font-medium text-neutral-600">1</td>
                              <td className="py-3 font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 1</td>
                              <td className="py-3 text-center font-medium text-neutral-800">6</td>
                              <td className="py-3 text-center text-neutral-600">9.5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">2</td>
                              <td className="py-3 text-neutral-800">Martigny 2</td>
                              <td className="py-3 text-center font-medium text-neutral-800">4</td>
                              <td className="py-3 text-center text-neutral-600">8</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">3</td>
                              <td className="py-3 text-neutral-800">Riddes 1</td>
                              <td className="py-3 text-center font-medium text-neutral-800">2</td>
                              <td className="py-3 text-center text-neutral-600">5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">4</td>
                              <td className="py-3 text-neutral-800">Sierre 2</td>
                              <td className="py-3 text-center font-medium text-neutral-800">0</td>
                              <td className="py-3 text-center text-neutral-600">1.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Groupe B */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="h-1 bg-red-500 w-full"></div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-neutral-800 mb-4">Groupe B</h4>
                       <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-neutral-200 text-neutral-500">
                              <th className="pb-2 text-left w-8 font-semibold">#</th>
                              <th className="pb-2 text-left font-semibold">Équipe</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Éq.</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Ind.</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100">
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">1</td>
                              <td className="py-3 text-neutral-800">Martigny 1</td>
                              <td className="py-3 text-center font-medium text-neutral-800">6</td>
                              <td className="py-3 text-center text-neutral-600">8.5</td>
                            </tr>
                            <tr className="bg-red-50/50">
                              <td className="py-3 font-medium text-neutral-600">2</td>
                              <td className="py-3 font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 2</td>
                              <td className="py-3 text-center font-medium text-neutral-800">4</td>
                              <td className="py-3 text-center text-neutral-600">7</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">3</td>
                              <td className="py-3 text-neutral-800">Riddes 2</td>
                              <td className="py-3 text-center font-medium text-neutral-800">2</td>
                              <td className="py-3 text-center text-neutral-600">5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">4</td>
                              <td className="py-3 text-neutral-800">Montana 2</td>
                              <td className="py-3 text-center font-medium text-neutral-800">0</td>
                              <td className="py-3 text-center text-neutral-600">3.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Groupe C */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="h-1 bg-neutral-300 w-full"></div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-neutral-800 mb-4">Groupe C</h4>
                       <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-neutral-200 text-neutral-500">
                              <th className="pb-2 text-left w-8 font-semibold">#</th>
                              <th className="pb-2 text-left font-semibold">Équipe</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Éq.</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Ind.</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100">
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">1</td>
                              <td className="py-3 text-neutral-800">Sierre 1</td>
                              <td className="py-3 text-center font-medium text-neutral-800">5</td>
                              <td className="py-3 text-center text-neutral-600">8.5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">2</td>
                              <td className="py-3 text-neutral-800">Montana 1</td>
                              <td className="py-3 text-center font-medium text-neutral-800">4</td>
                              <td className="py-3 text-center text-neutral-600">6.5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">3</td>
                              <td className="py-3 text-neutral-800">Bagnes</td>
                              <td className="py-3 text-center font-medium text-neutral-800">3</td>
                              <td className="py-3 text-center text-neutral-600">6.5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">4</td>
                              <td className="py-3 text-neutral-800">Martigny 4</td>
                              <td className="py-3 text-center font-medium text-neutral-800">0</td>
                              <td className="py-3 text-center text-neutral-600">2.5</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Groupe D */}
                  <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                    <div className="h-1 bg-red-500 w-full"></div>
                    <div className="p-6">
                      <h4 className="font-bold text-lg text-neutral-800 mb-4">Groupe D</h4>
                       <div className="overflow-x-auto">
                        <table className="w-full text-sm">
                          <thead>
                            <tr className="border-b border-neutral-200 text-neutral-500">
                              <th className="pb-2 text-left w-8 font-semibold">#</th>
                              <th className="pb-2 text-left font-semibold">Équipe</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Éq.</th>
                              <th className="pb-2 text-center w-20 font-semibold">Pt. Ind.</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-neutral-100">
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">1</td>
                              <td className="py-3 text-neutral-800">Monthey</td>
                              <td className="py-3 text-center font-medium text-neutral-800">6</td>
                              <td className="py-3 text-center text-neutral-600">10.5</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">2</td>
                              <td className="py-3 text-neutral-800">Martigny 3</td>
                              <td className="py-3 text-center font-medium text-neutral-800">4</td>
                              <td className="py-3 text-center text-neutral-600">8</td>
                            </tr>
                            <tr>
                              <td className="py-3 font-medium text-neutral-600">3</td>
                              <td className="py-3 text-neutral-800">CE Port-Valais</td>
                              <td className="py-3 text-center font-medium text-neutral-800">2</td>
                              <td className="py-3 text-center text-neutral-600">5.5</td>
                            </tr>
                            <tr className="bg-red-50/50">
                              <td className="py-3 font-medium text-neutral-600">4</td>
                              <td className="py-3 font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 3</td>
                              <td className="py-3 text-center font-medium text-neutral-800">0</td>
                              <td className="py-3 text-center text-neutral-600">0</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase de Poules - Composition */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <Target className="h-8 w-8 mr-3 text-red-600" />
                  Phase de poules : composition
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Poule Haute (E & F) */}
                  <div className="space-y-8">
                    {/* Groupe E */}
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="h-1 bg-red-600 w-full"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="font-bold text-lg text-neutral-800">Groupe E (Poule Haute)</h4>
                           <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-medium">A1, C1, B2, D2</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center p-2 bg-red-50 rounded text-red-900 font-semibold"><span className="w-6 text-center text-red-400 mr-2">1</span>Sion 1</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">2</span>Sierre 1</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">3</span>Sion 2</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">4</span>Martigny 3</li>
                        </ul>
                      </div>
                    </div>

                    {/* Groupe F */}
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="h-1 bg-red-600 w-full"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="font-bold text-lg text-neutral-800">Groupe F (Poule Haute)</h4>
                           <span className="text-xs bg-red-100 text-red-700 px-2 py-1 rounded font-medium">B1, D1, A2, C2</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">1</span>Martigny 1</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">2</span>Monthey</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">3</span>Martigny 2</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">4</span>Montana 1</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Poule Basse (G & H) */}
                  <div className="space-y-8">
                    {/* Groupe G */}
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="h-1 bg-neutral-400 w-full"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="font-bold text-lg text-neutral-800">Groupe G (Poule Basse)</h4>
                           <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded font-medium">A3, C3, B4, D4</span>
                        </div>
                         <ul className="space-y-2">
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">1</span>Riddes 1</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">2</span>Bagnes</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">3</span>Montana 2</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">4</span>Sion 3</li>
                        </ul>
                      </div>
                    </div>

                    {/* Groupe H */}
                    <div className="bg-white rounded-xl shadow-sm border border-neutral-200 overflow-hidden">
                      <div className="h-1 bg-neutral-400 w-full"></div>
                      <div className="p-6">
                        <div className="flex justify-between items-center mb-4">
                           <h4 className="font-bold text-lg text-neutral-800">Groupe H (Poule Basse)</h4>
                           <span className="text-xs bg-neutral-100 text-neutral-600 px-2 py-1 rounded font-medium">B3, D3, A4, C4</span>
                        </div>
                        <ul className="space-y-2">
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">1</span>Riddes 2</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">2</span>CE Port-Valais</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">3</span>Sierre 2</li>
                          <li className="flex items-center p-2 hover:bg-neutral-50 rounded"><span className="w-6 text-center text-neutral-400 mr-2">4</span>Martigny 4</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Phase Finale - Structure */}
              <div className="mb-16">
                 <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <Trophy className="h-8 w-8 mr-3 text-red-600" />
                  Phase finale : appariements
                </h3>
                <div className="bg-white rounded-xl shadow-lg border border-red-100 p-8">
                  <div className="grid md:grid-cols-2 gap-12">
                     <div>
                       <h4 className="font-bold text-xl text-red-800 mb-6 flex items-center border-b pb-2">
                         <Medal className="h-5 w-5 mr-2" />
                         Matchs de classement (Haut)
                       </h4>
                       <ul className="space-y-4">
                         <li className="flex justify-between items-center p-3 bg-gradient-to-r from-yellow-50 to-white rounded-lg border border-yellow-100">
                           <span className="font-bold text-neutral-900">Places 1-2 (Finale)</span>
                           <span className="font-mono text-red-600 font-bold bg-white px-3 py-1 rounded shadow-sm">1er E vs 1er F</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 3-4</span>
                           <span className="font-mono text-neutral-500">2ème E vs 2ème F</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 5-6</span>
                           <span className="font-mono text-neutral-500">3ème E vs 3ème F</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 7-8</span>
                           <span className="font-mono text-neutral-500">4ème E vs 4ème F</span>
                         </li>
                       </ul>
                     </div>

                     <div>
                       <h4 className="font-bold text-xl text-neutral-700 mb-6 flex items-center border-b pb-2">
                         <Users className="h-5 w-5 mr-2" />
                         Matchs de classement (Bas)
                       </h4>
                       <ul className="space-y-4">
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 9-10</span>
                           <span className="font-mono text-neutral-500">1er G vs 1er H</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 11-12</span>
                           <span className="font-mono text-neutral-500">2ème G vs 2ème H</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 13-14</span>
                           <span className="font-mono text-neutral-500">3ème G vs 3ème H</span>
                         </li>
                         <li className="flex justify-between items-center p-3 hover:bg-neutral-50 rounded-lg border border-transparent hover:border-neutral-100">
                           <span className="font-medium text-neutral-700">Places 15-16</span>
                           <span className="font-mono text-neutral-500">4ème G vs 4ème H</span>
                         </li>
                       </ul>
                     </div>
                  </div>
                </div>
              </div>

              {/* Programme des Rencontres - Timeline/Cards */}
              <div>
                <h3 className="text-2xl font-bold text-center mb-10 text-neutral-900 flex items-center justify-center">
                  <CalendarDays className="h-8 w-8 mr-3 text-red-600" />
                  Calendrier 2025
                </h3>
                <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-300 before:to-transparent">
                  
                  {/* Ronde 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-red-600 font-bold">1</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 1</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">07.11.2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe A</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Sierre 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">0.5 - 3.5</span>
                               <span className="text-left">Riddes 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700 mt-1">
                               <span className="text-right">Sion 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">3 - 1</span>
                               <span className="text-left">Martigny 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe B</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Montana 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">1 - 3</span>
                               <span className="text-left">Sion 2</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">2.5 - 1.5</span>
                               <span className="text-left">Riddes 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe D</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Monthey</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">4 - 0</span>
                               <span className="text-left font-bold text-red-700">Sion 3</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">3 - 1</span>
                               <span className="text-left">CE Port-Valais</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 2 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-red-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-red-600 font-bold">2</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 2</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">28.11.2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe A</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Riddes 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">0.5 - 3.5</span>
                               <span className="text-left">Sion 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">4 - 0</span>
                               <span className="text-left">Sierre 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe B</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Sion 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">1 - 3</span>
                               <span className="text-left">Martigny 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Riddes 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">2.5 - 1.5</span>
                               <span className="text-left">Montana 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe D</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">CE Port-Valais</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">0.5 - 3.5</span>
                               <span className="text-left">Monthey</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700 mt-1">
                               <span className="text-right">Sion 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">0 - 4</span>
                               <span className="text-left">Martigny 3</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 3 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-neutral-400 font-bold">3</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 3</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">19.12.2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe A</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Sierre 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">1 - 3</span>
                               <span className="text-left">Sion 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Riddes 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">1 - 3</span>
                               <span className="text-left">Martigny 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe B</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Sion 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">3 - 1</span>
                               <span className="text-left">Riddes 2</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">3 - 1</span>
                               <span className="text-left">Montana 2</span>
                             </div>
                           </div>
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe D</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Sion 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">0 - 4</span>
                               <span className="text-left">CE Port-Valais</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold">1 - 3</span>
                               <span className="text-left">Monthey</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 4 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-neutral-400 font-bold">4</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 4</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">16.01.2026</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe E</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 font-bold text-red-700">
                               <span className="text-right">Sion 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Sion 2</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Sierre 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 3</span>
                             </div>
                           </div>

                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe F</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Monthey</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Montana 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 2</span>
                             </div>
                           </div>

                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe G</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Riddes 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Montana 2</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Bagnes</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left font-bold text-red-700">Sion 3</span>
                             </div>
                           </div>
                           
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe H</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Riddes 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 4</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">CE Port-Valais</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Sierre 2</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 5 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-neutral-400 font-bold">5</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 5</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">27.02.2026</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe E</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right font-bold text-red-700">Sion 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Sierre 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right font-bold text-red-700">Sion 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 3</span>
                             </div>
                           </div>

                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe F</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Monthey</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Montana 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 2</span>
                             </div>
                           </div>

                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe G</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Montana 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Bagnes</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right font-bold text-red-700">Sion 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Riddes 1</span>
                             </div>
                           </div>
                           
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe H</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">CE Port-Valais</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Riddes 2</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 4</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Sierre 2</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 6 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-neutral-400 font-bold">6</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 6</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">20.03.2026</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe E</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Sierre 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left font-bold text-red-700">Sion 1</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Martigny 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left font-bold text-red-700">Sion 2</span>
                             </div>
                           </div>

                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe F</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Martigny 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Monthey</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Montana 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Martigny 1</span>
                             </div>
                           </div>

                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe G</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Riddes 1</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Bagnes</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right font-bold text-red-700">Sion 3</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Montana 2</span>
                             </div>
                           </div>
                           
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe H</div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2">
                               <span className="text-right">Martigny 4</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">CE Port-Valais</span>
                             </div>
                             <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-2 mt-1">
                               <span className="text-right">Sierre 2</span>
                               <span className="font-mono bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full font-bold text-xs">-</span>
                               <span className="text-left">Riddes 2</span>
                             </div>
                           </div>
                        </div>
                     </div>
                  </div>

                </div>
              </div>
              
            </motion.div>
          </div>
        </section>

        {/* Seasons Section */}
        <section className="py-16 bg-neutral-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Saisons précédentes</h2>
            <div className="max-w-6xl mx-auto space-y-6">
              {seasons.map((season, index) => (
                <motion.div
                  key={season.year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  {/* Season Header */}
                  <button
                    onClick={() => toggleSeason(season.year)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-gradient-to-r from-red-600 to-red-700 text-white hover:bg-red-700 transition-colors"
                  >
                    <h3 className="text-2xl font-semibold flex items-center">
                      <Calendar className="h-6 w-6 mr-3" />
                      Saison {season.year}
                      {season.hasVictory && (
                        <Trophy className="h-5 w-5 ml-3 text-yellow-300" />
                      )}
                    </h3>
                    <motion.svg
                      animate={{ rotate: season.isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="w-6 h-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </motion.svg>
                  </button>

                  {/* Season Content */}
                  {season.isExpanded && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: 'auto' }}
                      exit={{ height: 0 }}
                      className="px-6 py-8"
                    >
                      {/* Victory Announcement */}
                      {season.hasVictory && (
                        <div className="text-center mb-8">
                          <div className="inline-block">
                            <h3 className="text-2xl font-bold text-red-900 mb-2 flex items-center">
                              <Trophy className="h-8 w-8 mr-3 text-yellow-500" />
                              {season.victoryTitle}
                            </h3>
                            <p className="text-neutral-700">{season.victoryDescription}</p>
                          </div>
                        </div>
                      )}

                      {/* Photo */}
                      {season.photo && (
                        <div className="max-w-2xl mx-auto mb-8">
                          <img
                            src={season.photo.src}
                            alt={season.photo.alt}
                            className="w-full rounded-lg shadow-md"
                          />
                          <p className="text-center text-sm text-neutral-600 mt-2">{season.photo.caption}</p>
                        </div>
                      )}

                      {/* Teams */}
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        {season.teams.map((team) => (
                          <motion.div
                            key={team.teamName}
                            whileHover={{ scale: 1.02 }}
                            className={`rounded-lg p-6 ${team.isChampion
                              ? 'bg-gradient-to-br from-yellow-50 to-red-50 border-2 border-red-400'
                              : 'bg-neutral-50 border border-neutral-200'
                              }`}
                          >
                            <div className="flex justify-between items-start mb-4">
                              <h3 className="text-xl font-semibold text-neutral-900">{team.teamName}</h3>
                              <span className={`px-3 py-1 rounded-full text-sm font-medium flex items-center ${team.isChampion
                                ? 'bg-gradient-to-r from-yellow-400 to-red-400 text-white'
                                : 'bg-neutral-200 text-neutral-700'
                                }`}>
                                {team.isChampion && <Medal className="h-4 w-4 mr-1" />}
                                {team.position}
                              </span>
                            </div>

                            <p className="text-neutral-700 mb-4">{team.description}</p>

                            {team.matchDetails && (
                              <div className="bg-white rounded-md p-4 border border-neutral-200">
                                <h4 className="text-sm font-semibold text-neutral-700 mb-3 flex items-center">
                                  <MapPin className="h-4 w-4 mr-2" />
                                  {team.matchDetails.title}
                                </h4>
                                <ul className="space-y-2">
                                  {team.matchDetails.pairings.map((pairing) => (
                                    <li key={pairing.board} className="flex justify-between text-sm">
                                      <span className="text-neutral-600">
                                        {pairing.board}. {pairing.white} - {pairing.black}
                                      </span>
                                      <span className="font-semibold text-red-900">({pairing.result})</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        ))}
                      </div>

                      {/* Documents */}
                      {season.documents && (
                        <div className="border-t pt-6">
                          <h3 className="text-xl font-semibold text-center mb-6 flex items-center justify-center">
                            <FileText className="h-6 w-6 mr-2" />
                            Documents officiels
                          </h3>
                          <div className="flex flex-wrap justify-center gap-4">
                            {season.documents.map((doc) => (
                              <motion.a
                                key={doc.title}
                                href={doc.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center px-6 py-3 bg-gradient-to-r from-red-100 to-red-50 rounded-lg hover:bg-red-200 transition-colors"
                              >
                                <ExternalLink className="h-5 w-5 mr-3 text-red-600" />
                                <span className="text-red-900 font-medium">{doc.title}</span>
                              </motion.a>
                            ))}
                          </div>
                        </div>
                      )}
                    </motion.div>
                  )}
                </motion.div>
              ))}

              {/* Previous Seasons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="px-6 py-4 bg-gradient-to-r from-neutral-700 to-neutral-800 text-white">
                  <h3 className="text-2xl font-semibold">Saisons antérieures</h3>
                </div>

                <div className="p-8 text-center">
                  <p className="text-neutral-700 mb-6">
                    Consultez l'historique complet des championnats valaisans sur le site officiel de l'UVE.
                  </p>
                  <motion.a
                    href="https://www.uve-wsb.ch/competitions-valaisannes/cve"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-md hover:bg-red-700 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5 mr-2" />
                    Historique complet sur le site de l'UVE
                  </motion.a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}