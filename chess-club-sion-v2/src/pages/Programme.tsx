import React, { useState, useMemo } from 'react';
import { Calendar, Clock, MapPin, Users, GraduationCap, Sparkles, Filter, ExternalLink, Shield, Crown, CalendarPlus, PartyPopper, Timer, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { programmeEvents, categoryLabels, categoryColors, type EventCategory } from '../lib/data/programme';

// --- FONCTION UTILITAIRE pour le lien Google Calendar ---
// ... (pas de changement ici) ...
const createGoogleCalendarLink = (event: typeof programmeEvents[0]) => {
  const formatGoogleDate = (date: Date) => {
    return date.toISOString().replace(/-|:|\.\d+/g, '');
  };

  const startDate = new Date(event.date);
  
  const timeToParse = event.calendarTime || event.time;

  if (timeToParse) {
    const timeParts = timeToParse.match(/(\d{1,2})[h:](\d{2})?/);
    if (timeParts) {
      startDate.setHours(parseInt(timeParts[1], 10));
      startDate.setMinutes(timeParts[2] ? parseInt(timeParts[2], 10) : 0);
    }
  }

  let endDate;
  
  const endTimeToParse = event.calendarEndTime || event.endTime;

  if (endTimeToParse) {
    endDate = new Date(startDate); 
    const endTimeParts = endTimeToParse.match(/(\d{1,2})[h:](\d{2})?/);
    if (endTimeParts) {
      endDate.setHours(parseInt(endTimeParts[1], 10));
      endDate.setMinutes(endTimeParts[2] ? parseInt(endTimeParts[2], 10) : 0);
    } else {
      endDate = new Date(startDate.getTime() + 2 * 60 * 60 * 1000); 
    }
  } else {
    const isTournament = event.category.some(cat => 
      ['CSE', 'CSG', 'CVE', 'CVI', 'tournoi'].includes(cat)
    );
    const durationHours = isTournament ? 4 : 2;
    endDate = new Date(startDate.getTime() + durationHours * 60 * 60 * 1000);
  }

  const details = event.calendarDetails || event.description || '';
  const location = event.calendarLocation || event.location || '';

  const baseUrl = 'https://www.google.com/calendar/render?action=TEMPLATE';
  const params = new URLSearchParams({
    text: event.title,
    dates: `${formatGoogleDate(startDate)}/${formatGoogleDate(endDate)}`,
    details: details,
    location: location
  });

  return `${baseUrl}&${params.toString()}`;
};


// --- COMPOSANT EventCard ---
// ... (pas de changement ici) ...
const EventCard = ({ event, index }: { event: typeof programmeEvents[0], index: number }) => {
  
  const primaryCategory = event.category[0]; 

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

  const Icon = categoryIcons[primaryCategory as keyof typeof categoryIcons] || Sparkles;
  const imageSrc =
    event.image ||
    (primaryCategory in categoryImages
      ? categoryImages[primaryCategory as keyof typeof categoryImages]
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
        
        <div className="absolute top-3 right-3 flex flex-col items-end gap-1.5">
          {event.category.map((cat) => (
            <span
              key={cat}
              className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryColors[cat]}`}
            >
              {categoryLabels[cat]}
            </span>
          ))}
        </div>
        
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
              <span>{event.endTime ? `${event.time} - ${event.endTime}` : event.time}</span>
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
          {(event.calendarTime || event.calendarEndTime || event.calendarLocation || event.calendarDetails) && (
            <a
              href={googleCalendarLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-secondary-600 hover:text-secondary-700 font-semibold text-sm group"
            >
              Ajouter au calendrier
              <CalendarPlus className="w-4 h-4 ml-1.5 group-hover:scale-110 transition-transform" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

// --- COMPOSANT BARRE DE PROGRESSION ÉVÉNEMENT EN COURS ---
const OngoingEventBar = ({ event }: { event: typeof programmeEvents[0] }) => {
  const now = new Date();
  const startDate = new Date(event.date);
  const endDate = event.endDate ? new Date(event.endDate) : new Date(event.date);
  
  // Normaliser les dates pour couvrir la journée entière
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const totalDuration = endDate.getTime() - startDate.getTime();
  const elapsed = now.getTime() - startDate.getTime();
  
  // Calculer le pourcentage (entre 0 et 100)
  const progress = Math.min(100, Math.max(0, (elapsed / totalDuration) * 100));

  // Jours restants
  const daysLeft = Math.ceil((endDate.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));

  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="bg-white rounded-xl p-6 shadow-md border border-primary-100 mb-6 relative overflow-hidden"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-3 relative z-10">
        <div>
            <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded text-xs font-bold text-white ${categoryColors[event.category[0]] || 'bg-neutral-500'}`}>
                    En cours
                </span>
                <h3 className="font-bold text-lg text-neutral-800">{event.title}</h3>
            </div>
            <p className="text-sm text-neutral-500">
                Fin le {endDate.toLocaleDateString('fr-FR', { day: 'numeric', month: 'long' })} · <span className="font-medium text-primary-600">{daysLeft > 0 ? `${daysLeft} jours restants` : 'Dernier jour !'}</span>
            </p>
        </div>
        {event.link && (
            <a href={event.link} target="_blank" rel="noopener noreferrer" className="flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700 transition-colors">
                Voir les détails <ArrowRight className="w-4 h-4 ml-1" />
            </a>
        )}
      </div>
      
      {/* Barre de progression */}
      <div className="h-2 bg-neutral-100 rounded-full overflow-hidden relative z-10">
        <motion.div 
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"
        />
      </div>

      {/* Décoration d'arrière-plan */}
      <div className="absolute -right-6 -bottom-6 text-primary-50 opacity-50 rotate-12 pointer-events-none">
         <Timer className="w-32 h-32" />
      </div>
    </motion.div>
  );
};

// --- COMPOSANT GROUPED EVENT CARD (POUR CVE/CSG) ---
const GroupedEventCard = ({ events, index }: { events: typeof programmeEvents[0][], index: number }) => {
  if (events.length === 0) return null;
  const mainEvent = events[0];
  
  // Utiliser la description générique (ex: "Championnat valaisan par équipes, Ronde 2")
  const title = mainEvent.description || mainEvent.title;
  const date = mainEvent.date;
  
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

  const primaryCategory = mainEvent.category[0];
  const Icon = categoryIcons[primaryCategory as keyof typeof categoryIcons] || Sparkles;

  const formatDate = (dateString: string) => {
    const d = new Date(dateString);
    return d.toLocaleDateString('fr-FR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col h-full border border-transparent hover:border-primary-300 transition-all col-span-1 md:col-span-2 lg:col-span-2"
    >
      {/* Header commun */}
      <div className="bg-gradient-to-r from-primary-50 to-white p-6 border-b border-neutral-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-center gap-4">
             <div className={`w-12 h-12 rounded-full flex items-center justify-center ${categoryColors[primaryCategory] || 'bg-gray-100'}`}>
                <Icon className="w-6 h-6" />
             </div>
             <div>
                <div className="flex items-center gap-2 mb-1">
                   {mainEvent.category.map(cat => (
                       <span key={cat} className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${categoryColors[cat]}`}>
                           {categoryLabels[cat]}
                       </span>
                   ))}
                </div>
                <h3 className="text-xl font-bold text-neutral-800">{title}</h3>
                <p className="text-neutral-500 text-sm flex items-center gap-2">
                   <Calendar className="w-4 h-4" />
                   {formatDate(date)}
                </p>
             </div>
        </div>
        {mainEvent.link && (
             <a href={mainEvent.link} className="text-sm font-semibold text-primary-600 hover:text-primary-700 flex items-center gap-1 whitespace-nowrap">
                Voir les détails <ArrowRight className="w-4 h-4" />
             </a>
        )}
      </div>

      {/* Grille des matchs */}
      <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 bg-neutral-50/50">
         {events.map((subEvent) => (
             <div key={subEvent.id} className="bg-white p-4 rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-shadow">
                 <h4 className="font-bold text-neutral-800 mb-2 line-clamp-2 h-12 flex items-center">
                    {/* Extraction du titre spécifique (ex: "Sion 1 - Martigny 1") si possible, sinon titre complet */}
                    {subEvent.title.includes(':') ? subEvent.title.split(':')[1].trim() : subEvent.title}
                 </h4>
                 <div className="space-y-1 text-sm text-neutral-600">
                     {subEvent.time && (
                        <div className="flex items-center gap-2">
                           <Clock className="w-3 h-3 text-primary-400" />
                           {subEvent.time}
                        </div>
                     )}
                     {subEvent.location && (
                        <div className="flex items-center gap-2">
                           <MapPin className="w-3 h-3 text-primary-400" />
                           <span className="line-clamp-1" title={subEvent.location}>{subEvent.location}</span>
                        </div>
                     )}
                 </div>
                 {(subEvent.calendarTime || subEvent.calendarLocation) && (
                    <div className="mt-3 pt-3 border-t border-neutral-100">
                        <a href={createGoogleCalendarLink(subEvent)} target="_blank" rel="noopener noreferrer" className="text-xs font-medium text-secondary-600 hover:text-secondary-800 flex items-center gap-1">
                             <CalendarPlus className="w-3 h-3" /> Ajouter
                        </a>
                    </div>
                 )}
             </div>
         ))}
      </div>
    </motion.div>
  );
};

// --- COMPOSANT PRINCIPAL DE LA PAGE ---
const Programme: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');

  // MODIFICATION 1.1: Calculer d'abord TOUS les événements à venir
  const allUpcomingEvents = useMemo(() => {
    const now = new Date();
    // Nous sommes le 6 Nov. Pour démo, on recule de 7 jours
    // now.setDate(now.getDate() - 7); 
    now.setHours(0, 0, 0, 0);

    const futureEvents = programmeEvents.filter(event => {
      const eventDate = new Date(event.date);
      const endDate = event.endDate ? new Date(event.endDate) : eventDate;
      endDate.setHours(23, 59, 59, 999);
      return endDate >= now;
    });

    return futureEvents.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  }, []); // Dépendance vide car programmeEvents est statique

  // NOUVEAU: Identifier les événements en cours (multi-jours)
  const ongoingEvents = useMemo(() => {
    const now = new Date();
    return allUpcomingEvents.filter(event => {
      // On ne considère "en cours" que les événements avec une date de fin explicite (multi-jours)
      if (!event.endDate) return false;
      
      const start = new Date(event.date);
      start.setHours(0, 0, 0, 0);
      const end = new Date(event.endDate);
      end.setHours(23, 59, 59, 999);
      
      return start <= now && end >= now;
    });
  }, [allUpcomingEvents]);

  // MODIFICATION 1.2: Extraire les catégories uniques de ces événements
  const availableCategories = useMemo(() => {
    const categories = new Set<EventCategory>();
    allUpcomingEvents.forEach(event => {
      event.category.forEach(cat => categories.add(cat));
    });
    return categories;
  }, [allUpcomingEvents]);

  // MODIFICATION 1.3: Filtrer les événements pour l'affichage final
  const filteredEvents = useMemo(() => {
    // On exclut les événements qui sont déjà affichés dans "En cours"
    const ongoingIds = new Set(ongoingEvents.map(e => e.id));
    const candidates = allUpcomingEvents.filter(e => !ongoingIds.has(e.id));

    let filtered = candidates;
    if (selectedCategory !== 'all') {
        filtered = candidates.filter(event => event.category.includes(selectedCategory));
    }

    // GROUPEMENT DES ÉVÉNEMENTS (CVE / CSG)
    // On regroupe les événements CVE ou CSG qui ont la même date et la même catégorie principale
    const grouped: (typeof programmeEvents[0] | typeof programmeEvents[0][])[] = [];
    
    filtered.forEach(event => {
        const isGroupable = event.category.includes('CVE') || event.category.includes('CSG');
        
        if (isGroupable) {
            const lastGroup = grouped[grouped.length - 1];
            if (Array.isArray(lastGroup) && lastGroup.length > 0) {
                 const firstInGroup = lastGroup[0];
                 // Vérifier même date et catégorie compatible
                 if (firstInGroup.date === event.date && 
                     firstInGroup.category.some(c => ['CVE', 'CSG'].includes(c) && event.category.includes(c))) {
                     lastGroup.push(event);
                     return;
                 }
            }
            // Démarrer un nouveau groupe
            grouped.push([event]);
        } else {
            grouped.push(event);
        }
    });
    
    // Aplatir les groupes de 1 seul élément pour qu'ils redeviennent des événements simples
    return grouped.map(item => (Array.isArray(item) && item.length === 1) ? item[0] : item);
  }, [allUpcomingEvents, selectedCategory, ongoingEvents]);

  return (
    <>
      <div className="min-h-screen bg-neutral-50">
        <section className="bg-gradient-to-b from-primary-50 to-white py-24">
          <div className="container mx-auto px-6 text-center">
            {/* ... (Titre) ... */}
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
          
          {/* SECTION ÉVÉNEMENTS EN COURS */}
          {ongoingEvents.length > 0 && (
            <div className="mb-16">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-2xl font-bold text-neutral-800 mb-6 flex items-center gap-2"
              >
                <Timer className="w-6 h-6 text-primary-600" />
                Compétitions en cours
              </motion.h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {ongoingEvents.map(event => (
                  <OngoingEventBar key={event.id} event={event} />
                ))}
              </div>
            </div>
          )}

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
            
            {/* MODIFICATION 1.4: Filtrer les boutons de catégorie */}
            {Object.entries(categoryLabels)
              .filter(([key]) => availableCategories.has(key as EventCategory))
              .map(([key, label]) => (
                <button
                  key={key}
                  onClick={() => setSelectedCategory(key as EventCategory)}
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

          {/* MODIFICATION 2: Ajout de la légende des acronymes */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center -mt-8 mb-12 px-6"
          >
            <p className="text-sm text-neutral-500 max-w-3xl mx-auto leading-relaxed">
              <span className="font-medium text-neutral-600">Acronymes :</span>
              <a href="/competitions/gpjv" className="font-medium text-neutral-600 hover:text-primary-600 underline decoration-dotted underline-offset-2 ml-2">GPJV</a> 
              &nbsp;(Grand Prix Junior) ·
              <a href="/competitions/csg" className="font-medium text-neutral-600 hover:text-primary-600 underline decoration-dotted underline-offset-2 ml-2">CSG</a> 
              &nbsp;(Chp. Suisse Groupe) ·
              <a href="/competitions/cse" className="font-medium text-neutral-600 hover:text-primary-600 underline decoration-dotted underline-offset-2 ml-2">CSE</a> 
              &nbsp;(Chp. Suisse Equipe) ·
              <a href="/competitions/cvi" className="font-medium text-neutral-600 hover:text-primary-600 underline decoration-dotted underline-offset-2 ml-2">CVI</a> 
              &nbsp;(Coupe Valaisanne) ·
              <a href="/competitions/cve" className="font-medium text-neutral-600 hover:text-primary-600 underline decoration-dotted underline-offset-2 ml-2">CVE</a> 
              &nbsp;(Chp. Valaisan Equipe)
            </p>
          </motion.div>


          {/* MODIFICATION 1.5: Utiliser 'filteredEvents' pour l'affichage */}
          {filteredEvents.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredEvents.map((item, index) => {
                 if (Array.isArray(item)) {
                     return <GroupedEventCard key={item[0].id + '-group'} events={item} index={index} />;
                 } else {
                     return <EventCard key={item.id} event={item} index={index} />;
                 }
              })}
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