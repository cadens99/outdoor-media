import { useState } from 'react';

const images = [
  { src: '/images/fishing0.webp', alt: 'Fishing' },
  { src: '/images/fishing1.webp', alt: 'Fishing' },
  { src: '/images/fishing2.webp', alt: 'Fishing' },
  { src: '/images/hunting1.webp', alt: 'Hunting' },
  { src: '/images/fishing3.webp', alt: 'Fishing' },
  { src: '/images/fishing4.webp', alt: 'Fishing' },
  { src: '/images/hunting2.webp', alt: 'Hunting' },
  { src: '/images/knife3.webp', alt: 'Knife 3' },
  { src: '/images/hunting3.webp', alt: 'Hunting' },
  { src: '/images/hunting4.webp', alt: 'Hunting' },
  { src: '/images/hunting5.webp', alt: 'Hunting' },
  { src: '/images/hunting6.webp', alt: 'Hunting' },
  { src: '/images/knife4.webp', alt: 'Knife 4' },
  { src: '/images/hunting7.webp', alt: 'Hunting' },
  { src: '/images/knife1.webp', alt: 'Knife 1' },
  { src: '/images/knife5.webp', alt: 'Gun and gear' },
];

const columns = [
  [0, 6, 7, 13],
  [3, 1, 9, 14],
  [4, 10, 5, 12],
  [8, 2, 11, 15],
];

export default function PhotoGallery() {
  const [fullscreenSrc, setFullscreenSrc] = useState(null);

  const getFallback = (src) => src.replace('.webp', '.jpg');

  return (
    <section>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center text-white mb-12 font-serif">Gallery</h2>

        {/* Grid Layout */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {columns.map((col, colIdx) => (
            <div key={colIdx} className="grid gap-4">
              {col.map((imgIndex) => {
                const { src, alt } = images[imgIndex];
                const jpgFallback = getFallback(src);

                return (
                  <div
                    key={imgIndex}
                    className="relative group overflow-hidden rounded-lg cursor-pointer transition duration-300"
                    onClick={() => setFullscreenSrc(src)}
                  >
                    <picture>
                      <source srcSet={src} type="image/webp" />
                      <img
                        src={jpgFallback}
                        alt={alt}
                        loading="lazy"
                        width="400"
                        height="300"
                        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                      />
                    </picture>

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 z-10" />
                  </div>
                );
              })}
            </div>
          ))}
        </div>

        {/* Fullscreen Modal */}
        {fullscreenSrc && (
          <div
            className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center cursor-zoom-out"
            onClick={() => setFullscreenSrc(null)}
          >
            <picture>
              <source srcSet={fullscreenSrc} type="image/webp" />
              <img
                src={getFallback(fullscreenSrc)}
                alt="Fullscreen"
                className="max-w-full max-h-full object-contain rounded shadow-lg"
              />
            </picture>
          </div>
        )}
      </div>
    </section>
  );
}
