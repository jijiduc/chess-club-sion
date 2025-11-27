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
                  <span>2 équipes engagées</span>
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
                     { name: "Sion 2", group: "Groupe B", captain: "Simon Moerschell", desc: "Équipe compétitive en poule haute." },
                     { name: "Sion 3", group: "Groupe D", captain: "Jeremy Duc", desc: "Équipe de formation et plaisir." }
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
                             <Medal className="h-4 w-4 mr-2 text-red-500" />
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
                  Composition des Groupes
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {/* Groupe A */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className="font-bold text-lg text-neutral-800 mb-4 pb-2 border-b border-neutral-100">Groupe A</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 1</li>
                      <li className="text-neutral-600 pl-4">Riddes 1</li>
                      <li className="text-neutral-600 pl-4">Martigny 2</li>
                      <li className="text-neutral-600 pl-4">Sierre 2</li>
                    </ul>
                  </div>
                  {/* Groupe B */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className="font-bold text-lg text-neutral-800 mb-4 pb-2 border-b border-neutral-100">Groupe B</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="text-neutral-600 pl-4">Martigny 1</li>
                      <li className="font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 2</li>
                      <li className="text-neutral-600 pl-4">Riddes 2</li>
                      <li className="text-neutral-600 pl-4">Montana 2</li>
                    </ul>
                  </div>
                  {/* Groupe C */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-neutral-300"></div>
                    <h4 className="font-bold text-lg text-neutral-800 mb-4 pb-2 border-b border-neutral-100">Groupe C</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="text-neutral-600 pl-4">Sierre 1</li>
                      <li className="text-neutral-600 pl-4">Montana 1</li>
                      <li className="text-neutral-600 pl-4">Bagnes</li>
                      <li className="text-neutral-600 pl-4">Martigny 4</li>
                    </ul>
                  </div>
                  {/* Groupe D */}
                  <div className="bg-white p-5 rounded-xl shadow-sm border border-neutral-200 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-red-500"></div>
                    <h4 className="font-bold text-lg text-neutral-800 mb-4 pb-2 border-b border-neutral-100">Groupe D</h4>
                    <ul className="space-y-2 text-sm">
                      <li className="text-neutral-600 pl-4">CE Port-Valais</li>
                      <li className="text-neutral-600 pl-4">Monthey</li>
                      <li className="text-neutral-600 pl-4">Martigny 3</li>
                      <li className="font-bold text-red-700 flex items-center"><ChevronRight className="h-3 w-3 mr-1"/> Sion 3</li>
                    </ul>
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
                             <div className="flex justify-between"><span>Sierre 2</span> <span className="font-mono font-bold">0.5 - 3.5</span> <span>Riddes 1</span></div>
                             <div className="flex justify-between font-bold text-red-700 mt-1"><span>Sion 1</span> <span className="font-mono">3 - 1</span> <span>Martigny 2</span></div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg">
                             <div className="flex justify-between font-semibold mb-1 text-red-900">Groupe B</div>
                             <div className="flex justify-between font-bold text-red-700"><span>Montana 2</span> <span className="font-mono">1 - 3</span> <span>Sion 2</span></div>
                             <div className="flex justify-between mt-1"><span>Martigny 1</span> <span className="font-mono font-bold">2.5 - 1.5</span> <span>Riddes 2</span></div>
                           </div>
                           <div className="p-3 bg-neutral-50 rounded-lg opacity-80 hover:opacity-100 transition-opacity">
                             <div className="flex justify-between font-semibold mb-1 text-neutral-600">Groupe D</div>
                             <div className="flex justify-between"><span>Monthey</span> <span className="font-mono">4 - 0</span> <span className="font-bold text-red-700">Sion 3</span></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Ronde 2 */}
                   <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                     <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 text-neutral-400 font-bold">2</div>
                     
                     <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-6 rounded-xl shadow-md border border-neutral-100">
                        <div className="flex justify-between items-center mb-4">
                          <h4 className="font-bold text-lg text-neutral-800">Ronde 2</h4>
                          <span className="px-3 py-1 bg-neutral-100 text-neutral-600 text-xs rounded-full font-medium">28.11.2025</span>
                        </div>
                        <div className="space-y-4 text-sm">
                           <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span>Riddes 1</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span className="font-bold text-red-700">Sion 1</span>
                             </div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span className="font-bold text-red-700">Sion 2</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span>Martigny 1</span>
                             </div>
                           </div>
                             <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span className="font-bold text-red-700">Sion 3</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span>Martigny 3</span>
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
                           <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span>Sierre 2</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span className="font-bold text-red-700">Sion 1</span>
                             </div>
                           </div>
                           <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span className="font-bold text-red-700">Sion 2</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span>Riddes 2</span>
                             </div>
                           </div>
                            <div className="p-3 bg-red-50/50 rounded-lg border-l-2 border-red-300">
                             <div className="flex justify-between items-center">
                               <span className="font-bold text-red-700">Sion 3</span>
                               <span className="text-xs font-bold bg-white px-2 py-1 rounded border text-neutral-500">VS</span>
                               <span>CE Port-Valais</span>
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