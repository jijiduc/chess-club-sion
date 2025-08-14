import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Sparkles, Filter, ExternalLink, Shield, Crown } from 'lucide-react'; 
import { motion } from 'framer-motion';
import { programmeEvents, categoryLabels, categoryColors } from '../data/programme';

const categoryImages = {
  CSE: '/picture/events/FSE.png',
  CSG: '/picture/events/FSE.png',
  CVE: '/picture/events/UVE.png',
  CVI: '/picture/events/UVE.png'
};

const Programme: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categoryIcons = {
    formation: GraduationCap,
    'soiree-club': Users,
    tournoi: Crown,
    simultanee: Users,
    CSE: Shield,
    CSG: Shield,
    CVE: Shield,
    CVI: Shield
  };

  const EventVisual: React.FC<{ event: typeof programmeEvents[0]; className?: string }> = ({ event, className = "" }) => {
    const Icon = categoryIcons[event.category as keyof typeof categoryIcons] || Sparkles;
    
    const imageSrc = event.image || categoryImages[event.category as keyof typeof categoryImages];
    
    if (imageSrc) {
      return (
        <img 
          src={imageSrc} 
          alt={event.title}
          className={`w-full h-full object-cover ${className}`}
        />
      );
    }
    
    return <Icon className={`w-8 h-8 text-white ${className}`} />;
  };

  const upcomingEvents = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);
    
    const futureEvents = programmeEvents
      .filter(event => {
        const eventDate = new Date(event.date);
        eventDate.setHours(0, 0, 0, 0);
        
        if (event.endDate) {
          const endDate = new Date(event.endDate);
          endDate.setHours(23, 59, 59, 999);
          return endDate >= now;
        }
        
        return eventDate >= now;
      });

    const filteredEvents = selectedCategory === 'all'
      ? futureEvents
      : futureEvents.filter(event => {
          if (selectedCategory === 'tournoi') {
            return event.category === 'tournoi';
          }
          return event.category === selectedCategory;
        });

    return filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedCategory]);

  const eventsByMonth = useMemo(() => {
    const grouped = new Map<string, (typeof upcomingEvents)>();
    
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
      if (date.getMonth() === endDate.getMonth() && date.getFullYear() === endDate.getFullYear()) {
        const shortDateOptions: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long', year: 'numeric' };
        return `Du ${date.getDate()} au ${endDate.toLocaleDateString('fr-FR', shortDateOptions)}`;
      } else {
        return `Du ${date.toLocaleDateString('fr-FR', dateOptions)} au ${endDate.toLocaleDateString('fr-FR', dateOptions)}`;
      }
    }
    
    return date.toLocaleDateString('fr-FR', dateOptions);
  };

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
            Calendrier du club
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-primary-100 max-w-3xl"
          >
            Référence des soirées, cours ou tournoi à venir
          </motion.p>
        </div>
      </motion.div>

      <div className="container mx-auto px-6 py-16">
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
            {Object.entries(categoryLabels)
              .filter(([key]) => key !== 'competition')
              .map(([key, label]) => {
                const Icon = categoryIcons[key as keyof typeof categoryIcons] || Sparkles;
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
                          whileHover={{ scale: 1.02 }}
                          className="group relative"
                        >
                          <div className="absolute inset-0 bg-gradient-to-r from-primary-600/10 to-transparent rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                          <div className="relative bg-white rounded-xl shadow-lg p-6 border border-primary-100 hover:shadow-xl transition-all overflow-hidden">
                            
                            <div className={`absolute top-6 right-6 w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 overflow-hidden ${
                                event.image ? '' : (
                                  event.category === 'formation' ? 'bg-gradient-to-br from-accent-400 to-accent-500' :
                                  event.category === 'tournoi' ? 'bg-gradient-to-br from-secondary-400 to-secondary-500' :
                                  'bg-gradient-to-br from-success-400 to-success-500'
                                )
                              }`}>
                              <EventVisual event={event} />
                            </div>

                            <span className={`absolute bottom-6 right-6 px-3 py-1 rounded-full text-sm font-medium ${categoryColors[event.category]}`}>
                              {categoryLabels[event.category]}
                            </span>

                            <div className="flex items-start">
                              <div className="flex-grow">
                                <h3 className="text-xl font-bold text-neutral-800 group-hover:text-primary-600 transition-colors mr-20 mb-2">
                                  {event.title}
                                </h3>
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
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:translate-x-1 transition-all"
                                      >
                                        En savoir plus
                                        <ExternalLink className="w-4 h-4 ml-1" />
                                      </a>
                                    </div>
                                  )}
                                </div>
                              </div>
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