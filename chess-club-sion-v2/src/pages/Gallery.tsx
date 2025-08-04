import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Calendar, Trophy, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  // La catégorie n'est plus utilisée pour le filtrage mais peut être conservée pour la sémantique
  category: 'team' | 'tournament' | 'event' | 'member' | 'venue' | 'historic' | 'top_player'
  title: string
  description?: string
  date?: string
  event?: string
}

const galleryImages: GalleryImage[] = [
  // CSE
  {
    id: 'cse-2002-1a',
    src: '/picture/gallery/CSE_2002/cse20021a.jpg',
    category: 'team',
    title: 'Position difficile contre Fribourg',
    description: 'Analyse intense durant le match Sion I - Fribourg en Championnat Suisse par Équipes.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1b',
    src: '/picture/gallery/CSE_2002/cse20021b.jpg',
    category: 'team',
    title: 'Julien Carron en pleine concentration',
    description: 'Julien Carron, absorbé par sa partie lors du Championnat Suisse.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1h',
    src: '/picture/gallery/CSE_2002/cse20021h.jpg',
    category: 'team',
    title: 'Vue d\'ensemble du match',
    description: 'La salle de jeu lors de la rencontre Sion I - Fribourg.',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2a',
    src: '/picture/gallery/CSE_2002/cse20022a.jpg',
    category: 'team',
    title: 'Le capitaine en action',
    description: 'Match à l\'extérieur contre Lausanne Le Joueur.',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2j',
    src: '/picture/gallery/CSE_2002/cse20022j.jpg',
    category: 'team',
    title: 'Un coup de Maître',
    description: 'C\'est dans cette position que Pascal jouera le coup de GM d6-d5 !',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },

  // CVE
  {
    id: 'cve-2022',
    src: '/picture/gallery/CVE/cve_2022.png',
    category: 'team',
    title: 'Champions Valaisans 2022',
    description: 'L\'équipe victorieuse de la finale du CVE 2022 (g.à.d Vlad, Pierre-Marie, Simon et Stéphane).',
    date: 'mai 2022',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2023',
    src: '/picture/gallery/CVE/cve_2023.png',
    category: 'team',
    title: 'Champions Valaisans 2023',
    description: 'L\'équipe victorieuse de la finale du CVE 2023 (g.à.d Simon, Vlad, Jean-Yves et Stéphane).',
    date: 'mai 2023',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2025',
    src: '/picture/gallery/CVE/cve_2025.jpg',
    category: 'team',
    title: 'Champions Valaisans 2025',
    description: 'L\'équipe victorieuse de la finale du CVE 2025 (g.à.d Jeremy, Pierre-Marie, Flavien et Jean-Yves).',
    date: 'mai 2025',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'sion-crans-cve-2025',
    src: '/picture/gallery/CVE/SionMontana-cve2025.jpg',
    category: 'team',
    title: 'Tension en finale',
    description: 'Pierre-Marie et Xavier se battant pour la victoire, sous l\'oeil d\'Yves et Jean-Daniel lors du match Sion 1 - Montana 1. Le point sera finalement partagé.',
    date: 'mai 2025',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2000-3',
    src: '/picture/gallery/CVE/cve2000-3.jpg',
    category: 'team',
    title: 'Sion II promu en groupe A',
    description: 'L\'équipe Sion II (Olivier Crettenand, David Campanile, Eder et Renzo Cerda) célèbre sa promotion en 2000.',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2000-4',
    src: '/picture/gallery/CVE/cve2000-4.jpg',
    category: 'team',
    title: 'Fair-play avec Martigny I',
    description: 'L\'équipe Sion II pose avec les vainqueurs du groupe A, Martigny I.',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },

  // AG 1998
  {
    id: 'ag-1998-jmp',
    src: '/picture/gallery/AG/ag98jmp.jpg',
    category: 'event',
    title: 'Le Président Jean-Michel Paladini',
    description: 'Le président prépare son discours lors de l\'Assemblée Générale de 1998.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },
  {
    id: 'ag-1998-pg',
    src: '/picture/gallery/AG/ag98pg.jpg',
    category: 'event',
    title: 'Le Trésorier Pascal Grand',
    description: 'Pascal Grand, trésorier, attentif au discours du président.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },
  {
    id: 'ag-1998-fc',
    src: '/picture/gallery/AG/ag98fc.jpg',
    category: 'event',
    title: 'Fritz Karafiat, responsable interne',
    description: 'Fritz Karafiat, dévoué aux jeunes du club.',
    date: '1998',
    event: 'Assemblée Générale 1998'
  },

  // Local du club
  { id: 'local-1', src: '/picture/gallery/Local/local1.jpg', category: 'venue', title: 'Le bâtiment du club', description: 'Vue extérieure du bâtiment (nous sommes au dernier étage).', event: 'Local du Club (avant 2006)' },
  { id: 'local-2', src: '/picture/gallery/Local/local2.jpg', category: 'venue', title: 'Le bâtiment du club, autre vue', description: 'Une autre perspective de notre local historique.', event: 'Local du Club (avant 2006)' },
  { id: 'local-3', src: '/picture/gallery/Local/local3.jpg', category: 'venue', title: 'L\'entrée des gladiateurs', description: 'Après la porte d\'entrée, il ne reste plus que 64 marches à grimper.', event: 'Local du Club (avant 2006)' },
  { id: 'local-4', src: '/picture/gallery/Local/local4.jpg', category: 'venue', title: 'Salle secondaire', description: 'La salle secondaire, avant la grande rénovation de 2006.', event: 'Local du Club (avant 2006)' },
  { id: 'local-5', src: '/picture/gallery/Local/local5.jpg', category: 'venue', title: 'Salle de jeu principale', description: 'La salle principale et son charme d\'antan, avant la rénovation de 2006.', event: 'Local du Club (avant 2006)' },

  // Simultanée Kortchnoi 2000
  { id: 'kortchnoi-2000-a', src: '/picture/gallery/Simultanee/Korchnoi/k2000a.jpg', category: 'tournament', title: 'Face au Maître', description: 'De vaillants compétiteurs face au légendaire Viktor Kortchnoi.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-b', src: '/picture/gallery/Simultanee/Korchnoi/k2000b.jpg', category: 'tournament', title: 'Le regard du Maître', description: 'Le grand maître Viktor Kortchnoi en pleine contemplation.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-c', src: '/picture/gallery/Simultanee/Korchnoi/k2000c.jpg', category: 'tournament', title: 'Kortchnoi contre Gilles Terreaux', description: 'Viktor Kortchnoi face à notre membre Gilles Terreaux.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-e', src: '/picture/gallery/Simultanee/Korchnoi/k2000e.jpg', category: 'tournament', title: 'La jeunesse s\'interroge', description: 'Eddy Beney, son fils et Olivier Crettenand face à un problème posé par le GMI.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-f', src: '/picture/gallery/Simultanee/Korchnoi/k2000f.jpg', category: 'tournament', title: 'Une poussée vigoureuse', description: 'Jean-Yves Riand et Léonard Besse en pleine collaboration contre Viktor Kortchnoi.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-g', src: '/picture/gallery/Simultanee/Korchnoi/k2000g.jpg', category: 'tournament', title: 'Moment de réflexion', description: 'Kortchnoi analyse la position face à Jean-Yves Riand.', date: '2000', event: 'Simultanée Kortchnoi' },
  { id: 'kortchnoi-2000-h', src: '/picture/gallery/Simultanee/Korchnoi/k2000h.jpg', category: 'tournament', title: 'Le Maître et ses adversaires', description: 'Kortchnoi se penche sur une position complexe.', date: '2000', event: 'Simultanée Kortchnoi' },
  
  // Simultanée Nemet Ivan
  { id: 'nemet-ivan-2005', src: '/picture/gallery/Simultanee/Nemet/simnemet.jpg', category: 'top_player', title: 'Simultanée d\'Ivan Nemet', description: 'Le GMI Ivan Nemet, Champion Suisse 1990, lors d\'une simultanée.', date: '2005', event: 'Simultanée Nemet Ivan' },
  
  // Championnat blitz par paires 2000 - Données mises à jour
  {
    id: 'blitz-2000-1',
    src: '/picture/gallery/Blitz/blitzp2-2000.jpg',
    category: 'tournament',
    title: 'La vieille garde en action',
    description: 'La paire expérimentée formée par Pierre-Marie Rappaz et Jean-Yves Riand.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-2',
    src: '/picture/gallery/Blitz/blitzp3-2000.jpg',
    category: 'tournament',
    title: 'Prix Junior pour Carron & Campanile',
    description: 'La paire de jeunes talents, Julien Carron et David Campanile, remporte le premier prix junior.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-3',
    src: '/picture/gallery/Blitz/blitzp4-2000.jpg',
    category: 'tournament',
    title: 'Association inter-club',
    description: 'La paire formée de Gilles Terreaux et Jean-Paul Moret lors du tournoi.',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },
  {
    id: 'blitz-2000-4',
    src: '/picture/gallery/Blitz/blitzp5-2000.jpg',
    category: 'tournament',
    title: 'Pause publicitaire',
    description: 'Après le garage Mistral, une page de pub pour Coca Cola...',
    date: '25 mars 2000',
    event: 'Ch. Valaisan de Blitz par Paire'
  },

  // Championnat Valaisan 1979
  { id: 'cv-1979-gt', src: '/picture/gallery/Championnat_Valaisan/gt79.jpg', category: 'historic', title: 'Gilles Terreaux, Champion 1979', description: 'Gilles Terreaux, vainqueur du championnat toutes catégories confondues en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },
  { id: 'cv-1979-pg', src: '/picture/gallery/Championnat_Valaisan/pg79.jpg', category: 'historic', title: 'Pascal Grand, Champion du tournoi 2', description: 'Pascal Grand, champion valaisan du tournoi 2 en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },
  { id: 'cv-1979-jmp', src: '/picture/gallery/Championnat_Valaisan/jmp79.jpg', category: 'historic', title: 'Jean-Michel Paladini, Champion Junior', description: 'Jean-Michel Paladini, sacré champion valaisan junior en 1979.', date: '1979', event: 'Championnat Valaisan 1979' },

  // Fête des promotions 2001
  { id: 'promo-2001-f1', src: '/picture/gallery/Promotion_2001/promo2001-f1.jpg', category: 'event', title: 'Célébration des promotions', description: 'Des membres du club lors de la fête des promotions de Sion I & II.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f2', src: '/picture/gallery/Promotion_2001/promo2001-f2.jpg', category: 'event', title: 'Le banquet des champions', description: 'Plusieurs membres, dont Eddy Beney à gauche, partagent un repas.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f3', src: '/picture/gallery/Promotion_2001/promo2001-f3.jpg', category: 'event', title: 'Un moment convivial', description: 'Les promotions de Sion I & II sont dignement arrosées.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f4', src: '/picture/gallery/Promotion_2001/promo2001-f4.jpg', category: 'event', title: 'La tablée des joueurs', description: 'Plusieurs membres, dont Julien Carron tout à gauche, célèbrent la montée.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f5', src: '/picture/gallery/Promotion_2001/promo2001-f5.jpg', category: 'event', title: 'Souvenirs de promotion', description: 'Plusieurs membres, dont Jean-Yves Riand à gauche.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f6', src: '/picture/gallery/Promotion_2001/promo2001-f6.jpg', category: 'event', title: 'Vue d\'ensemble de la fête', description: 'Une grande tablée pour une grande occasion.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f7', src: '/picture/gallery/Promotion_2001/promo2001-f7.jpg', category: 'event', title: 'Gilles Terreaux, le sourire du vainqueur', description: 'Plusieurs membres, dont Gilles Terreaux à gauche.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f8', src: '/picture/gallery/Promotion_2001/promo2001-f8.jpg', category: 'event', title: 'Une belle soirée', description: 'Une belle tablée de membres pour fêter les promotions.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001-f9', src: '/picture/gallery/Promotion_2001/promo2001-f9.jpg', category: 'event', title: 'Gilles Terreaux, prêt au combat', description: 'Même à table, l\'esprit de compétition est là.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001a', src: '/picture/gallery/Promotion_2001/promo2001a.jpg', category: 'event', title: 'L\'équipe de la promotion', description: 'L\'équipe de Sion I victorieuse 5,5-2,5 contre Berne II.', date: '2001', event: 'Fête des promotions 2001' },
  { id: 'promo-2001b', src: '/picture/gallery/Promotion_2001/promo2001b.jpg', category: 'event', title: 'La feuille de match historique', description: 'Le détail du match Sion I - Berne II qui a scellé la promotion.', date: '2001', event: 'Fête des promotions 2001' },

  // Julien Carron Champion
  { id: 'julien-cs1-2005', src: '/picture/gallery/Julien_Carron/csi2005.jpg', category: 'top_player', title: 'Julien Carron, Champion Suisse Junior', description: 'Julien Carron avec les différents champions suisses de l\'année 2005.', date: '2005', event: 'Championnat Suisse Individuel' },
]


export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('Toutes')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [imageError, setImageError] = useState<Set<string>>(new Set())

  // Création dynamique des filtres basés sur le champ 'event'
  const filterOptions = useMemo(() => {
    const isString = (value: string | undefined): value is string => typeof value === 'string';
    const events = new Set(galleryImages.map(img => img.event).filter(isString));
    return ['Toutes', ...Array.from(events).sort()];
  }, []);

  const parseDate = (dateString?: string): Date => {
    if (!dateString) return new Date(0);
    const monthMap: { [key: string]: number } = { 'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5, 'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11 };
    const parts = dateString.toLowerCase().split(' ');
    if (parts.length === 1 && /^\d{4}$/.test(parts[0])) return new Date(parseInt(parts[0]), 0, 1);
    if (parts.length === 2 && monthMap.hasOwnProperty(parts[0])) return new Date(parseInt(parts[1]), monthMap[parts[0]], 1);
    if (parts.length === 3 && monthMap.hasOwnProperty(parts[1])) return new Date(parseInt(parts[2]), monthMap[parts[1]], parseInt(parts[0]));
    return new Date(0);
  };
  
  const filteredImages = useMemo(() => {
    const imagesToFilter = selectedFilter === 'Toutes'
      ? galleryImages
      : galleryImages.filter(img => img.event === selectedFilter);
  
    return imagesToFilter.sort((a, b) => {
      const dateA = parseDate(a.date).getTime();
      const dateB = parseDate(b.date).getTime();
      return dateB - dateA;
    });
  }, [selectedFilter]);

  const handleImageError = (imageId: string) => {
    setImageError(prev => new Set(prev).add(imageId))
  }

  const navigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id)
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % filteredImages.length
      : (currentIndex - 1 + filteredImages.length) % filteredImages.length
    setSelectedImage(filteredImages[newIndex])
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-neutral-50 to-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary-800 to-primary-900 text-white py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Galerie Photos
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-4">
              Archives historiques du Club d'Échecs de Sion
            </p>
            <p className="text-lg opacity-75">
              Notre histoire en images
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Filter className="h-5 w-5 text-neutral-600 hidden md:block" />
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-4 py-2 rounded-full font-medium transition-all text-sm md:text-base ${
                  selectedFilter === filter
                    ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg'
                    : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image) => (
                <motion.div
                  layout
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ scale: 1.05 }}
                  className="cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="aspect-w-16 aspect-h-12 bg-neutral-100 relative">
                      {imageError.has(image.id) ? (
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center p-4">
                            <Camera className="h-12 w-12 text-neutral-400 mx-auto mb-2" />
                            <p className="text-sm text-neutral-500">Image non disponible</p>
                          </div>
                        </div>
                      ) : (
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-48 object-cover group-hover:opacity-90 transition-opacity"
                          onError={() => handleImageError(image.id)}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="p-4">
                      <h3 className="font-semibold text-neutral-900 mb-1 truncate">{image.title}</h3>
                      {image.date && (
                        <p className="text-sm text-neutral-500 mb-1">{image.date}</p>
                      )}
                      {image.event && (
                        <p className="text-xs text-primary-600">{image.event}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button onClick={() => setSelectedImage(null)} className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                <X className="h-6 w-6" />
              </button>
              <button onClick={() => navigate('prev')} className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button onClick={() => navigate('next')} className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors">
                <ChevronRight className="h-6 w-6" />
              </button>
              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-2/3 bg-black flex items-center justify-center">
                  {imageError.has(selectedImage.id) ? (
                    <div className="text-center p-8">
                      <Camera className="h-16 w-16 text-neutral-400 mx-auto mb-4" />
                      <p className="text-neutral-300">Image non disponible</p>
                    </div>
                  ) : (
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.title}
                      className="max-w-full max-h-[70vh] object-contain"
                      onError={() => handleImageError(selectedImage.id)}
                    />
                  )}
                </div>
                <div className="lg:w-1/3 p-6 lg:p-8">
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">{selectedImage.title}</h2>
                  {selectedImage.description && (
                    <p className="text-neutral-700 mb-4">{selectedImage.description}</p>
                  )}
                  <div className="space-y-2 text-sm">
                    {selectedImage.date && (
                      <div className="flex items-center text-neutral-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        {selectedImage.date}
                      </div>
                    )}
                    {selectedImage.event && (
                      <div className="flex items-center text-primary-600">
                        <Trophy className="h-4 w-4 mr-2" />
                        {selectedImage.event}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}