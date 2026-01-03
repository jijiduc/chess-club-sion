import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden py-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat fixed"
        style={{
          backgroundImage: 'url("/picture/background/valere.webp")',
        }}
      >
        {/* Dark Gradient Overlay for legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-900/80 to-neutral-900/90" />
      </div>

      {/* Subtle Texture Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none" />

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <span className="inline-block py-1 px-4 rounded-full bg-white/10 border border-white/20 text-primary-100 text-sm font-medium tracking-[0.2em] mb-8 backdrop-blur-sm uppercase">
            Depuis 1935
          </span>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-8 leading-tight">
            Notre Histoire, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-200 via-amber-100 to-primary-200 bg-300% animate-gradient">
              Une Passion
            </span>
          </h1>

          {/* Decorative Line */}
          <div className="h-1 w-24 bg-gradient-to-r from-transparent via-primary-400 to-transparent mx-auto mb-8 opacity-80" />

          {/* Description */}
          <p className="text-lg md:text-xl text-primary-100/90 font-light max-w-2xl mx-auto leading-relaxed">
            De la fondation du premier club par le Dr. André de Quay à nos succès récents, 
            découvrez les moments et les visages qui ont façonné le Club d'Échecs de Sion 
            à travers les décennies.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="text-primary-200/60 hover:text-primary-100 cursor-pointer transition-colors"
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.div>
    </section>
  );
}