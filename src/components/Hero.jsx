// src/components/HeroSection.jsx
export default function HeroSection() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('/images/hero.jpg')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center items-start h-full px-8 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white drop-shadow-lg">
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
      </div>
    </div>
  );
}
