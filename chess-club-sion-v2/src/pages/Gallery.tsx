import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, Calendar, Users, Trophy, MapPin, X, ChevronLeft, ChevronRight, Filter } from 'lucide-react'

interface GalleryImage {
  id: string
  src: string
  category: 'team' | 'tournament' | 'event' | 'member' | 'venue' | 'historic'
  title: string
  description?: string
  date?: string
  event?: string
}

const galleryImages: GalleryImage[] = [
  // Team Competition Photos (CSE)
  {
    id: 'cse-2002-1a',
    src: '/picture/gallery/cse20021a.jpg',
    category: 'team',
    title: 'Position difficile',
    description: 'Une position difficile lors du match Sion I - Fribourg',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1b',
    src: '/picture/gallery/cse20021b.jpg',
    category: 'team',
    title: 'Julien en action',
    description: 'Julien a oublié son T-Shirt ICC',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-1h',
    src: '/picture/gallery/cse20021h.jpg',
    category: 'team',
    title: 'Vue d\'ensemble',
    description: 'Vue d\'ensemble du match Sion I - Fribourg',
    date: '3 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2a',
    src: '/picture/gallery/cse20022a.jpg',
    category: 'team',
    title: 'Honneur au capitaine',
    description: 'Match Lausanne Le Joueur - Sion',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },
  {
    id: 'cse-2002-2j',
    src: '/picture/gallery/cse20022j.jpg',
    category: 'team',
    title: 'Coup de maître',
    description: 'C\'est dans cette position que Pascal va jouer le coup de GM d6-d5 !',
    date: '24 mars 2002',
    event: 'Championnat Suisse par Équipes'
  },

  // CVE
  {
    id: 'cve-2022',
    src: '/picture/gallery/cve_2022.png',
    category: 'team',
    title: 'Finale CVE 2022',
    description: 'L\' équipe victorieuse lors de la finale (g.à.d Vlad, Pierre-Marie, Simon et Stéphane)',
    date: 'mai 2022',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2023',
    src: '/picture/gallery/cve_2023.png',
    category: 'team',
    title: 'Finale CVE 2023',
    description: 'L\' équipe victorieuse lors de la finale (g.à.d Simon, Vlad, Jean-Yves et Stéphane)',
    date: 'mai 2023',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'sion-crans-cve-2025',
    src: '/picture/gallery/cve_2025.jpg',
    category: 'team',
    title: 'Finale CVE 2025',
    description: 'L\' équipe victorieuse lors de la finale (g.à.d Jeremy, Pierre-Marie, Flavien et Jean-Yves)',
    date: 'mai 2025',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2025',
    src: '/picture/gallery/SionMontana-cve2025.jpg',
    category: 'team',
    title: 'Tension finale',
    description: 'Pierre-Marie et Xavier se battant pour donner la victoire à leur équipe, sous l\'oeil attentif d\'Yves et Jean-daniel lors du match Sion 1 - Montana 1. Le point sera finalement partagé',
    date: 'mai 2025',
    event: 'Championnat Valaisan par Équipes'
  },
  
  // Valais Team Championship
  {
    id: 'cve-2000-3',
    src: '/picture/gallery/cve2000-3.jpg',
    category: 'team',
    title: 'Sion II promu',
    description: 'L\'équipe Sion II promue en groupe A (Olivier Crettenand, David Campanile, Eder et Renzo Cerda)',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },
  {
    id: 'cve-2000-4',
    src: '/picture/gallery/cve2000-4.jpg',
    category: 'team',
    title: 'Sion II avec Martigny I',
    description: 'Équipe Sion II avec l\'équipe Martigny I (vainqueurs du groupe A)',
    date: '2000',
    event: 'Championnat Valaisan par Équipes'
  },
  
  // General Assembly 1998
  {
    id: 'ag-1998-jmp',
    src: '/picture/gallery/ag98jmp.jpg',
    category: 'event',
    title: 'Président Jean-Michel Paladini',
    description: 'Le président Jean-Michel Paladini prépare son discours',
    date: '1998',
    event: 'Assemblée Générale'
  },
  {
    id: 'ag-1998-pg',
    src: '/picture/gallery/ag98pg.jpg',
    category: 'event',
    title: 'Trésorier Pascal Grand',
    description: 'Pascal Grand, trésorier passionné par le discours du président',
    date: '1998',
    event: 'Assemblée Générale'
  },
  {
    id: 'ag-1998-fc',
    src: '/picture/gallery/ag98fc.jpg',
    category: 'event',
    title: 'Fritz Karafiat',
    description: 'Fritz Karafiat, responsable des activités internes, dévoué aux jeunes du club',
    date: '1998',
    event: 'Assemblée Générale'
  },
  
  // Club Local
  {
    id: 'local-1',
    src: '/picture/gallery/local1.jpg',
    category: 'venue',
    title: 'Bâtiment du club',
    description: 'Vue extérieure du bâtiment (nous sommes au dernier étage)',
    event: 'Local du club'
  },
  {
    id: 'local-3',
    src: '/picture/gallery/local3.jpg',
    category: 'venue',
    title: 'Entrée du club',
    description: 'Après la porte d\'entrée, plus que 64 marches à grimper',
    event: 'Local du club'
  },
  {
    id: 'local-5',
    src: '/picture/gallery/local5.jpg',
    category: 'venue',
    title: 'Salle principale',
    description: 'Salle de jeu principale avant la rénovation de 2006',
    event: 'Local du club'
  },
  
  // Kortchnoi Simultaneous Exhibition
  {
    id: 'kortchnoi-2000-a',
    src: '/picture/gallery/k2000a.jpg',
    category: 'tournament',
    title: 'Simultanée Kortchnoi',
    description: 'Joueurs incluant G Terreaux, P Vianin et autres',
    date: '2000',
    event: 'Simultanée Kortchnoi - Bagnes'
  },
  {
    id: 'kortchnoi-2000-e',
    src: '/picture/gallery/k2000e.jpg',
    category: 'tournament',
    title: 'E Beney et O Crettenand',
    description: 'E Beney, son fils et O Crettenand',
    date: '2000',
    event: 'Simultanée Kortchnoi - Bagnes'
  },
  {
    id: 'kortchnoi-2000-f',
    src: '/picture/gallery/k2000f.jpg',
    category: 'tournament',
    title: 'J-Y Riand et L Besse',
    description: 'J-Y Riand et L Besse contre Kortchnoi',
    date: '2000',
    event: 'Simultanée Kortchnoi - Bagnes'
  },
  
  // Historic Championship 1979
  {
    id: 'cv-1979-gt',
    src: '/picture/gallery/gt79.jpg',
    category: 'historic',
    title: 'Championnat Valaisan 1979',
    description: 'Photo historique du championnat',
    date: '1979',
    event: 'Championnat Valaisan'
  },
  {
    id: 'cv-1979-pg',
    src: '/picture/gallery/pg79.jpg',
    category: 'historic',
    title: 'Championnat Valaisan 1979',
    description: 'Photo historique du championnat',
    date: '1979',
    event: 'Championnat Valaisan'
  },
  {
    id: 'cv-1979-jmp',
    src: '/picture/gallery/jmp79.jpg',
    category: 'historic',
    title: 'Championnat Valaisan 1979',
    description: 'Photo historique du championnat',
    date: '1979',
    event: 'Championnat Valaisan'
  },
  
  // Promotions Celebration 2001
  {
    id: 'promo-2001-f6',
    src: '/archives/ancient_site/promo2001-f6.jpg',
    category: 'event',
    title: 'Fête des promotions',
    description: 'Vue d\'ensemble de la célébration des promotions',
    date: '2001',
    event: 'Fête des promotions Sion I & II'
  },
  {
    id: 'promo-2001-f5',
    src: '/archives/ancient_site/promo2001-f5.jpg',
    category: 'event',
    title: 'Discours imminent',
    description: 'Le discours du président semble imminent',
    date: '2001',
    event: 'Fête des promotions Sion I & II'
  },
  
  // Mérite Sportif Sédunois 2002
  {
    id: 'ms-2002-7',
    src: '/archives/ancient_site/ms2002-7.jpg',
    category: 'event',
    title: 'Julien appelé',
    description: 'Julien est appelé pour recevoir son prix',
    date: '2002',
    event: 'Mérite Sportif Sédunois'
  },
  {
    id: 'ms-2002-6',
    src: '/archives/ancient_site/ms2002-6.jpg',
    category: 'event',
    title: 'Remise du prix',
    description: 'Julien reçoit son prix des mains du président Mudry',
    date: '2002',
    event: 'Mérite Sportif Sédunois'
  },
  
  // Member Portraits
  {
    id: 'member-vlad',
    src: '/archives/ancient_site/Vlad.jpg',
    category: 'member',
    title: 'Popescu Vlad',
    description: 'Président du club',
    event: 'Portraits des membres'
  },
  {
    id: 'member-sandro',
    src: '/archives/ancient_site/Sandro.jpg',
    category: 'member',
    title: 'Bétrisey Sandro',
    description: 'Vice-président du club',
    event: 'Portraits des membres'
  },
  {
    id: 'member-jyr',
    src: '/archives/ancient_site/c-jyr2001.jpg',
    category: 'member',
    title: 'Jean-Yves Riand',
    description: 'Capitaine d\'équipe',
    date: '2001',
    event: 'Portraits des membres'
  },
  
  // Other Notable Images
  {
    id: 'anand-2008',
    src: '/archives/ancient_site/anand2008.jpg',
    category: 'tournament',
    title: 'Anand 2008',
    description: 'Champion du monde Viswanathan Anand',
    date: '2008',
    event: 'Championnat du monde'
  },
  {
    id: 'julien-winterthur-2008',
    src: '/archives/ancient_site/julienwinterthur2008.jpg',
    category: 'tournament',
    title: 'Julien à Winterthur',
    description: 'Julien Carron au tournoi de Winterthur',
    date: '2008',
    event: 'Tournoi de Winterthur'
  },
  {
    id: 'cvblitz-2019',
    src: '/archives/ancient_site/cvblitz2019.JPG',
    category: 'tournament',
    title: 'Championnat Valaisan Blitz',
    description: 'Championnat Valaisan de Blitz',
    date: '2019',
    event: 'Championnat Valaisan Blitz'
  },
  {
    id: 'jyr-monthey-2017',
    src: '/archives/ancient_site/jyrmonthey2017.JPG',
    category: 'tournament',
    title: 'J-Y Riand à Monthey',
    description: 'Jean-Yves Riand au tournoi de Monthey',
    date: '2017',
    event: 'Tournoi de Monthey'
  }
]

const categories = [
  { id: 'all', label: 'Toutes', icon: Camera },
  { id: 'team', label: 'Compétition par équipes', icon: Users },
  { id: 'tournament', label: 'Tournois', icon: Trophy },
  { id: 'event', label: 'Événements', icon: Calendar },
  { id: 'member', label: 'Membres', icon: Users },
  { id: 'venue', label: 'Local', icon: MapPin },
  { id: 'historic', label: 'Historique', icon: Calendar }
]

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [imageError, setImageError] = useState<Set<string>>(new Set())

  const parseDate = (dateString?: string): Date => {
    if (!dateString) {
      return new Date(0);
    }
  
    const monthMap: { [key: string]: number } = {
      'janvier': 0, 'février': 1, 'mars': 2, 'avril': 3, 'mai': 4, 'juin': 5,
      'juillet': 6, 'août': 7, 'septembre': 8, 'octobre': 9, 'novembre': 10, 'décembre': 11
    };
  
    const parts = dateString.toLowerCase().split(' ');
  
    if (parts.length === 1 && /^\d{4}$/.test(parts[0])) {
      return new Date(parseInt(parts[0]), 0, 1);
    }
    
    if (parts.length === 2 && monthMap.hasOwnProperty(parts[0])) {
      const year = parseInt(parts[1]);
      const month = monthMap[parts[0]];
      return new Date(year, month, 1);
    }
  
    if (parts.length === 3 && monthMap.hasOwnProperty(parts[1])) {
      const year = parseInt(parts[2]);
      const month = monthMap[parts[1]];
      const day = parseInt(parts[0]);
      return new Date(year, month, day);
    }
  
    return new Date(0);
  };
  
  const filteredImages = useMemo(() => {
    const imagesToFilter = selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(img => img.category === selectedCategory);
  
    return imagesToFilter.sort((a, b) => {
      const dateA = parseDate(a.date).getTime();
      const dateB = parseDate(b.date).getTime();
      return dateB - dateA;
    });
  }, [selectedCategory]);

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
      <section className="py-8 bg-white shadow-sm sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center flex-wrap gap-3">
            <Filter className="h-5 w-5 text-neutral-600" />
            {categories.map((cat) => {
              const Icon = cat.icon
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-4 py-2 rounded-full font-medium transition-all flex items-center gap-2 ${
                    selectedCategory === cat.id
                      ? 'bg-gradient-to-r from-primary-600 to-primary-800 text-white shadow-lg'
                      : 'bg-white text-neutral-700 hover:bg-neutral-50 border border-neutral-300'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {cat.label}
                </button>
              )
            })}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
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
                    <h3 className="font-semibold text-neutral-900 mb-1">{image.title}</h3>
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
              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>

              {/* Navigation buttons */}
              <button
                onClick={() => navigate('prev')}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                onClick={() => navigate('next')}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
              >
                <ChevronRight className="h-6 w-6" />
              </button>

              {/* Image and details */}
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
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    {selectedImage.title}
                  </h2>
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