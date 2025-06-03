import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, Trophy, GraduationCap, Sparkles, Filter, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { programmeEvents, categoryLabels, categoryColors } from '../data/programme';

const Programme: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons = {
    formation: GraduationCap,
    competition: Trophy,
    'soiree-club': Users,
    tournoi: Sparkles
  };

  // Component to render either icon or image
  const EventVisual: React.FC<{ event: typeof programmeEvents[0]; className?: string }> = ({ event, className = "" }) => {
    const Icon = categoryIcons[event.category];
    
    if (event.image) {
      return (
        <img 
          src={event.image} 
          alt={event.title}
          className={`w-full h-full object-cover ${className}`}
        />
      );
    }
    
    return <Icon className={`w-8 h-8 text-white ${className}`} />;
  };

  // Filtrer les événements à venir
  const upcomingEvents = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    return programmeEvents
      .filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        
        // If the event has an end date, check if we're within the date range
        if (event.endDate) {
          const endDate = new Date(event.endDate);
          endDate.setHours(23, 59, 59, 999);
          return endDate >= now;
        }
        
        // Otherwise, just check if the event date is in the future
        return eventDate >= now;
      })
      .filter(event => selectedCategory === 'all' || event.category === selectedCategory)
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedCategory]);

  // Grouper les événements par mois
  const eventsByMonth = useMemo(() => {
    const grouped = new Map<string, typeof upcomingEvents>();
    
    upcomingEvents.forEach(event => {
      const date = new Date(event.date);
      const monthKey = date.toLocaleDateString('fr-FR', { month: 'long', year: 'numeric' });
      
      if (!grouped.has(monthKey)) {
        grouped.set(monthKey, []);
      }
      grouped.get(monthKey)!.push(event);
    });
    
    return grouped;
  }, [upcomingEvents]);

  const formatDate = (dateString: string, endDateString?: string) => {
    const date = new Date(dateString);
    const dateOptions: Intl.DateTimeFormatOptions = {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };
    
    if (endDateString) {
      const endDate = new Date(endDateString);
      // If same month and year, format as "Du X au Y month year"
      if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
        return `Du ${date.getDate()} au ${endDate.toLocaleDateString('fr-FR', dateOptions)}`;
      } else {
        // Different months, show full dates
        return `Du ${date.toLocaleDateString('fr-FR', dateOptions)} au ${endDate.toLocaleDateString('fr-FR', dateOptions)}`;
      }
    }
    
    return date.toLocaleDateString('fr-FR', dateOptions);
  };

  const activities = [
    {
      title: "Cours d'échecs",
      description: "Formation pour jeunes et débutants certains vendredis",
      icon: GraduationCap,
      color: "from-accent-500 to-accent-600",
      link: undefined
    },
    {
      title: "Compétitions",
      description: "Tournois de parties blitz, rapides ou lentes",
      icon: Trophy,
      color: "from-primary-500 to-primary-600",
      link: "/competitions/tournoi-interne"
    },
    {
      title: "Analyses",
      description: "Approfondissez votre compréhension du jeu",
      icon: Sparkles,
      color: "from-secondary-500 to-secondary-600",
      link: undefined
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 via-white to-accent-50">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative overflow-hidden bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900 text-white"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500 rounded-full blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-500 rounded-full blur-3xl opacity-20"></div>
        </div>
        <div className="relative container mx-auto px-6 py-24">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-primary-200"
          >
            Programme & Calendrier
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 max-w-3xl"
          >
            Découvrez nos activités hebdomadaires et nos événements tout au long de l'année
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
        {/* Activités régulières */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-4 text-center">
            Nos activités régulières
          </h2>
          <p className="text-xl text-neutral-600 text-center mb-12 max-w-3xl mx-auto">
            Rejoignez-nous chaque vendredi soir pour une soirée dédiée aux échecs
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-accent-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-white rounded-2xl shadow-xl p-8 border border-primary-100 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-br ${activity.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <activity.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-neutral-800 mb-3">{activity.title}</h3>
                  <p className="text-neutral-600 mb-3">{activity.description}</p>
                  {activity.link && (
                    <Link
                      to={activity.link}
                      className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                    >
                      Tournoi interne
                      <ExternalLink className="w-4 h-4 ml-1" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>


        {/* Filtres */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-10"
        >
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Filter className="w-5 h-5 text-neutral-600" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                selectedCategory === 'all'
                  ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg'
                  : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'
              }`}
            >
              Tous les événements
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => {
              const Icon = categoryIcons[key as keyof typeof categoryIcons];
              return (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key)}
                  className={`px-6 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === key
                      ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg'
                      : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {label}
                </button>
              );
            })}
          </div>
        </motion.section>

        {/* Événements à venir */}
        <motion.section 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-4xl font-bold text-neutral-800 mb-4 text-center">
            Événements à Venir
          </h2>
          
          {upcomingEvents.length === 0 ? (
            <div className="text-center py-12 bg-white rounded-2xl shadow-lg">
              <Calendar className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <p className="text-xl text-neutral-600">Aucun événement à venir dans cette catégorie</p>
            </div>
          ) : (
            <div className="space-y-8">
              {Array.from(eventsByMonth.entries()).map(([month, events], monthIndex) => (
                <motion.div
                  key={month}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: monthIndex * 0.1 }}
                >
                  <h3 className="text-2xl font-bold text-neutral-800 mb-4 capitalize">{month}</h3>
                  <div className="space-y-4">
                    {events.map((event, index) => {
                      return (
                        <motion.div
                          key={event.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 10 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative bg-white rounded-xl shadow-lg p-6 border border-primary-100 hover:shadow-xl transition-all">
                            <div className="flex items-start gap-6">
                              <div className={`w-16 h-16 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${
                                event.image ? '' : (
                                  event.category === 'competition' ? 'bg-gradient-to-br from-primary-400 to-primary-500' :
                                  event.category === 'formation' ? 'bg-gradient-to-br from-accent-400 to-accent-500' :
                                  event.category === 'tournoi' ? 'bg-gradient-to-br from-secondary-400 to-secondary-500' :
                                  'bg-gradient-to-br from-success-400 to-success-500'
                                )
                              }`}>
                                <EventVisual event={event} />
                              </div>
                              <div className="flex-grow">
                                <div className="flex items-start justify-between mb-2">
                                  <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors">
                                    {event.title}
                                  </h3>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${categoryColors[event.category]}`}>
                                    {categoryLabels[event.category]}
                                  </span>
                                </div>
                                <div className="space-y-2 text-neutral-600">
                                  <p className="flex items-center">
                                    <Calendar className="w-4 h-4 mr-2 text-primary-500" />
                                    {formatDate(event.date, event.endDate)}
                                  </p>
                                  {event.time && (
                                    <p className="flex items-center">
                                      <Clock className="w-4 h-4 mr-2 text-primary-500" />
                                      {event.time}
                                    </p>
                                  )}
                                  {event.location && (
                                    <p className="flex items-center">
                                      <MapPin className="w-4 h-4 mr-2 text-primary-500" />
                                      {event.location}
                                    </p>
                                  )}
                                  {event.description && (
                                    <p className="text-sm text-neutral-500 mt-2">{event.description}</p>
                                  )}
                                  {event.details && (
                                    <div className="mt-3 pl-4 border-l-2 border-primary-200">
                                      <ul className="space-y-1">
                                        {event.details.map((detail, i) => (
                                          <li key={i} className="text-sm text-neutral-600">
                                            {typeof detail === 'string' ? (
                                              detail
                                            ) : (
                                              <a
                                                href={detail.link}
                                                className="text-primary-600 hover:text-primary-700 underline"
                                              >
                                                {detail.text}
                                              </a>
                                            )}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}
                                  {event.link && (
                                    <div className="mt-3">
                                      <a
                                        href={event.link}
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                                      >
                                        En savoir plus
                                        <ExternalLink className="w-4 h-4 ml-1" />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
                              <Sparkles className="w-6 h-6 text-primary-400 group-hover:rotate-12 transition-transform" />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.section>

      </div>
    </div>
  );
};

export default Programme;