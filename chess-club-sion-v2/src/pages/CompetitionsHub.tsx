import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Title, Meta } from 'react-head';
import { Trophy, Users, Calendar, ChevronRight, Shield, Target, MapPin } from 'lucide-react';

export default function CompetitionsHub() {
  const competitions = [
    {
      id: 'cse',
      title: 'Championnat Suisse par Équipes (CSE)',
      shortTitle: 'CSE',
      description: 'La compétition interclubs de référence en Suisse. Les équipes s\'affrontent de la Ligue Nationale à la 4ème ligue.',
      period: 'Mars - Septembre',
      format: 'Équipes de 6 à 8 joueurs',
      link: '/competitions/cse',
      icon: Trophy,
      color: 'from-blue-500 to-blue-700',
      badge: 'National'
    },
    {
      id: 'csg',
      title: 'Championnat Suisse par Groupes (CSG)',
      shortTitle: 'CSG',
      description: 'Une compétition hivernale dynamique avec des équipes plus restreintes et une structure hiérarchique unique.',
      period: 'Novembre - Avril',
      format: 'Équipes de 4 à 8 joueurs',
      link: '/competitions/csg',
      icon: Shield,
      color: 'from-red-500 to-red-700',
      badge: 'National'
    },
    {
      id: 'cve',
      title: 'Championnat Valaisan par Équipes (CVE)',
      shortTitle: 'CVE',
      description: 'Le championnat cantonal où règne une ambiance de derby et de convivialité. Idéal pour découvrir la compétition.',
      period: 'Novembre - Mai',
      format: 'Équipes de 4 joueurs',
      link: '/competitions/cve',
      icon: MapPin,
      color: 'from-amber-500 to-amber-700',
      badge: 'Régional'
    }
  ];

  return (
    <>
      <Title>Compétitions par Équipes - Club d'Échecs de Sion</Title>
      <Meta name="description" content="Découvrez les compétitions par équipes du Club d'Échecs de Sion : CSE, CSG et CVE. Rejoignez nos équipes et participez aux championnats suisses et valaisans." />

      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950">
           <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
             <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-primary-100 text-sm font-medium tracking-[0.2em] mb-8 backdrop-blur-sm uppercase">
              Esprit d'équipe
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
              Compétitions par Équipes
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8 opacity-80" />
            <p className="text-xl text-primary-100 font-light max-w-3xl mx-auto leading-relaxed">
              Le Club d'Échecs de Sion est fier d'aligner plusieurs équipes dans les championnats nationaux et cantonaux. Quel que soit votre niveau, il y a une place pour vous.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid gap-12">
            {competitions.map((comp, index) => (
              <motion.div
                key={comp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={comp.link} className="group block">
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-neutral-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 relative">
                    <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${comp.color}`} />
                    
                    <div className="p-8 md:p-10 grid md:grid-cols-[1fr_auto] gap-8 items-center">
                      <div>
                        <div className="flex items-center gap-4 mb-4">
                          <span className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${comp.color} text-white shadow-lg`}>
                            <comp.icon className="h-8 w-8" />
                          </span>
                          <span className="px-3 py-1 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium uppercase tracking-wider">
                            {comp.badge}
                          </span>
                        </div>
                        
                        <h2 className="text-3xl font-serif font-bold text-primary-900 mb-4 group-hover:text-primary-700 transition-colors">
                          {comp.title}
                        </h2>
                        <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
                          {comp.description}
                        </p>
                        
                        <div className="flex flex-wrap gap-6 text-sm font-medium text-neutral-500">
                          <div className="flex items-center">
                            <Calendar className="h-5 w-5 mr-2 text-primary-500" />
                            {comp.period}
                          </div>
                          <div className="flex items-center">
                            <Users className="h-5 w-5 mr-2 text-primary-500" />
                            {comp.format}
                          </div>
                        </div>
                      </div>

                      <div className="flex items-center justify-center md:justify-end">
                        <div className="bg-primary-50 p-4 rounded-full group-hover:bg-primary-100 transition-colors">
                          <ChevronRight className="h-8 w-8 text-primary-600 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Internal Tournament Teaser */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-20"
          >
            <div className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-2xl shadow-xl p-8 md:p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] pointer-events-none" />
              <div className="relative z-10">
                <Target className="h-12 w-12 text-accent-400 mx-auto mb-6" />
                <h2 className="text-3xl font-serif font-bold text-white mb-4">Tournoi Interne</h2>
                <p className="text-neutral-300 text-lg max-w-2xl mx-auto mb-8">
                  Envie de vous mesurer aux autres membres du club dans un cadre plus détendu ?
                  Participez à notre championnat interne annuel.
                </p>
                <Link
                  to="/competitions/tournoi-interne"
                  className="inline-flex items-center px-8 py-3 bg-white text-neutral-900 rounded-full font-bold hover:bg-accent-50 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                >
                  En savoir plus
                  <ChevronRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
          </motion.div>

        </div>
      </section>
    </>
  );
}
