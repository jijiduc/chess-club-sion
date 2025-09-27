import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Sparkles, Filter, ExternalLink, Shield, Crown, CalendarPlus, PartyPopper } from 'lucide-react';
import { motion } from 'framer-motion';
import { programmeEvents, categoryLabels, categoryColors } from '../data/programme';

// --- FONCTION UTILITAIRE pour le lien Google Calendar ---
const createGoogleCalendarLink = (event: typeof programmeEvents[0]) => {
  const formatGoogleDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const startDate = new Date(event.date);
  if (event.time) {
    const timeParts = event.time.match(/(\d{1,2})h(\d{2})?/);
    if (timeParts) {
      startDate.setHours(parseInt(timeParts[1], 10));
      startDate.setMinutes(timeParts[2] ? parseInt(timeParts[2], 10) : 0);
    }
  }

  // Durée par défaut de 3h pour un tournoi/match, 2h sinon
  const isTournament = ['CSE', 'CSG', 'CVE', 'CVI', 'tournoi'].includes(event.category);
  const durationHours = isTournament ? 4 : 2;
  const endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);

  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: event.title,
    dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
    details: event.description || '',
    location: event.location || ''
  });

  return `${baseUrl}&${params.toString()}`;
};


// --- COMPOSANT EventCard ---
const EventCard = ({ event, index }: { event: typeof programmeEvents[0], index: number }) => {
  const categoryImages = {
    CSE: '/picture/events/FSE.png',
    CSG: '/picture/events/FSE.png',
    CVE: '/picture/events/UVE.png',
    CVI: '/picture/events/UVE.png',
    'soiree-club': '/picture/events/Sion.png',
    'ecole-echecs': '/picture/events/Sion.png'
  };

  const categoryIcons = {
    'ecole-echecs': GraduationCap,
    'soiree-club': Users,
    tournoi: Crown,
    CSE: Shield,
    CSG: Shield,
    CVE: Shield,
    CVI: Shield,
    GPJV: Crown,
    jubilee: PartyPopper
  };

  const Icon = categoryIcons[event.category as keyof typeof categoryIcons] || Sparkles;
  const imageSrc =
    event.image ||
    (event.category in categoryImages
      ? categoryImages[event.category as keyof typeof categoryImages]
      : undefined);
  const googleCalendarLink = createGoogleCalendarLink(event);

  const formatDate = (dateString: string, endDateString?: string) => {
    const date = new Date(dateString);
    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', day: 'numeric', month: 'long' };

    if (endDateString) {
      const endDate = new Date(endDateString);
      if (date.getMonth() === endDate.getMonth()) {
        return `Du ${date.getDate()} au ${endDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })}`;
      }
      return `Du ${date.toLocaleDateString('fr-FR', dateOptions)} au ${endDate.toLocaleDateString('fr-FR', { ...dateOptions, year: 'numeric' })}`;
    }
    return date.toLocaleDateString('fr-FR', { ...dateOptions, year: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-transparent hover:border-primary-300 transition-all"
    >
      <div className="relative w-full h-32 bg-gradient-to-br from-primary-100 to-accent-100 flex items-center justify-center p-4">
        {imageSrc ? (
          <div className="w-full h-full max-w-[80%] max-h-[80%] bg-white rounded-lg shadow-md flex items-center justify-center overflow-hidden">
             <img 
               src={imageSrc} 
               alt={event.title} 
               className="w-full h-full object-contain"
             />
          </div>
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <Icon className="w-10 h-10 text-primary-500 opacity-50" />
          </div>
        )}
        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[event.category]}`}>
          {categoryLabels[event.category]}
        </span>
      </div>

      <div className="p-4 flex-grow flex flex-col">
        <h3 className="text-lg font-bold text-neutral-800 mb-2">{event.title}</h3>
        
        <div className="space-y-2 text-neutral-600 text-sm flex-grow">
          <p className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-primary-500 flex-shrink-0" />
            <span>{formatDate(event.date, event.endDate)}</span>
          </p>
          {event.time && (
            <p className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>{event.time}</span>
            </p>
          )}
          {event.location && (
            <p className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary-500 flex-shrink-0" />
              <span>{event.location}</span>
            </p>
          )}
        </div>

        <div className="mt-4 pt-3 border-t border-neutral-100 flex flex-wrap gap-4">
          {event.link && (
            <a
              href={event.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-semibold text-sm group"
            >
              En savoir plus
              <ExternalLink className="w-4 h-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
            </a>
          )}
          <a
            href={googleCalendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold text-sm group"
          >
            Ajouter au calendrier
            <CalendarPlus className="w-4 h-4 ml-1.5 group-hover:scale-110 transition-transform" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL DE LA PAGE ---
const Programme: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const upcomingEvents = useMemo(() => {
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    const futureEvents = programmeEvents.filter(event => {
      const eventDate = new Date(event.date);
      const endDate = event.endDate ? new Date(event.endDate) : eventDate;
      endDate.setHours(23, 59, 59, 999);
      return endDate >= now;
    });

    const filteredEvents = selectedCategory === 'all'
      ? futureEvents
      : futureEvents.filter(event => event.category === selectedCategory);

    return filteredEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, [selectedCategory]);

  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        <section className="bg-gradient-to-b from-primary-50 to-white py-24">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-6xl font-bold text-primary-900 mb-4"
            >
              Calendrier du club
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg md:text-xl text-neutral-600 max-w-2xl mx-auto"
            >
              Retrouvez toutes les dates importantes : soirées club, formations et tournois à venir.
            </motion.p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center justify-center gap-3 mb-12"
          >
            <Filter className="w-5 h-5 text-neutral-500" />
            <button
              onClick={() => setSelectedCategory('all')}
              className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                selectedCategory === 'all'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'bg-white text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              Tous
            </button>
            {Object.entries(categoryLabels).map(([key, label]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`px-5 py-2 rounded-full font-semibold text-sm transition-all ${
                  selectedCategory === key
                    ? 'bg-primary-600 text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {label}
              </button>
            ))}
          </motion.div>

          {upcomingEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-16 bg-white rounded-2xl shadow-sm"
            >
              <Calendar className="w-16 h-16 text-neutral-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-700">Aucun événement à venir</h3>
              <p className="text-neutral-500 mt-2">Revenez bientôt ou sélectionnez une autre catégorie.</p>
            </motion.div>
          )}
        </div>
      </div>
    </>
  );
};

export default Programme;