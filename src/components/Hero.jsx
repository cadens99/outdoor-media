// src/components/HeroSection.jsx
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.webp')" }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 mix-blend-multiply" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        className="relative z-10 flex flex-col justify-center items-start h-full px-8 max-w-4xl mx-auto"
      >
        <p className="text-green-400 uppercase tracking-widest text-sm mb-2">
          Est. 2024
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
          Outdoor Reach Media
        </h1>
        <p className="mt-4 text-lg font-serif text-gray-200 max-w-xl drop-shadow">
          Through the lens of the backcountry — raw moments, real hunts.
        </p>
        <a
          href="#gallery"
          className="scroll-smooth mt-8 inline-block bg-white text-black font-semibold font-serif px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          View Gallery
        </a>
      </motion.div>

      {/* Scroll Cue */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <span className="animate-bounce text-white text-sm font-serif font-thin">▼ Scroll</span>
      </div>
    </div>
  );
}
