import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { type ArchiveImage } from '~/data/histoireData';

interface HistoricalGalleryProps {
  images: ArchiveImage[];
  className?: string;
}

export function HistoricalGallery({ images, className = '' }: HistoricalGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<ArchiveImage | null>(null);
  const [imageError, setImageError] = useState<Set<string>>(new Set());

  const handleImageError = (imageId: string) => {
    setImageError(prev => new Set(prev).add(imageId));
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (!selectedImage) return;
    const currentIndex = images.findIndex(img => img.id === selectedImage.id);
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % images.length
      : (currentIndex - 1 + images.length) % images.length;
    setSelectedImage(images[newIndex]);
  };

  return (
    <section className={`py-12 ${className}`}>
      <div className="text-center mb-10">
        <h2 id="archives-photos" className="text-3xl font-bold text-neutral-800 mb-4">Archives Photos</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Une plongée en images dans les moments marquants de l'histoire du club avant 2010.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image) => (
          <motion.div
            key={image.id}
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="cursor-pointer group bg-white rounded-lg shadow-md overflow-hidden"
            onClick={() => setSelectedImage(image)}
          >
            <div className="aspect-w-4 aspect-h-3 bg-neutral-100 relative overflow-hidden">
              {imageError.has(image.id) ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center p-4">
                    <Camera className="h-8 w-8 text-neutral-400 mx-auto mb-2" />
                    <p className="text-xs text-neutral-500">Image non disponible</p>
                  </div>
                </div>
              ) : (
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
                  onError={() => handleImageError(image.id)}
                />
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <p className="text-white font-medium text-sm truncate">{image.title}</p>
                {image.date && <p className="text-white/80 text-xs">{image.date}</p>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] flex flex-col md:flex-row bg-neutral-900 rounded-lg overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Navigation buttons */}
              <button
                onClick={(e) => { e.stopPropagation(); setSelectedImage(null); }}
                className="absolute top-4 right-4 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              
              <button
                onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronLeft className="h-8 w-8" />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); navigate('next'); }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-white/20 rounded-full text-white transition-colors"
              >
                <ChevronRight className="h-8 w-8" />
              </button>

              {/* Image Container */}
              <div className="flex-1 bg-black flex items-center justify-center relative min-h-[40vh] md:min-h-[70vh]">
                {imageError.has(selectedImage.id) ? (
                  <div className="text-center text-neutral-500">
                    <Camera className="h-16 w-16 mx-auto mb-4 opacity-50" />
                    <p>Image non disponible</p>
                  </div>
                ) : (
                  <img
                    src={selectedImage.src}
                    alt={selectedImage.title}
                    className="max-w-full max-h-full object-contain"
                    onError={() => handleImageError(selectedImage.id)}
                  />
                )}
              </div>

              {/* Info Sidebar */}
              <div className="md:w-80 bg-neutral-800 p-6 md:border-l border-neutral-700 overflow-y-auto">
                <h3 className="text-xl font-bold text-white mb-2">{selectedImage.title}</h3>
                {selectedImage.date && (
                  <p className="text-primary-400 text-sm font-medium mb-4">{selectedImage.date}</p>
                )}
                {selectedImage.event && (
                  <div className="inline-block bg-neutral-700 rounded px-2 py-1 text-xs text-neutral-300 mb-4">
                    {selectedImage.event}
                  </div>
                )}
                {selectedImage.description && (
                  <p className="text-neutral-300 text-sm leading-relaxed border-t border-neutral-700 pt-4">
                    {selectedImage.description}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
