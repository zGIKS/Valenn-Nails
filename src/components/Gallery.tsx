import React, { useState, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { getMediaAssets, type MediaItem } from '../utils/mediaAssets';
import { translations } from '../utils/translations';

const Gallery: React.FC = () => {
  const { t, language } = useLanguage();
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null);
  const [clickPosition, setClickPosition] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(galleryRef, { once: true, margin: "-100px" });

  const mediaItems = getMediaAssets(translations[language].designDescriptions);

  const getRandomDelay = (index: number) => {
    return (index % 8) * 0.1;
  };

  return (
    <section 
      id="gallery" 
      className="py-20 bg-gray-50 dark:bg-gray-900" 
      ref={galleryRef}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-contrast-dark-rose to-contrast-dark-lilac bg-clip-text text-transparent">
            {t('galleryTitle')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('galleryDescription')}
          </p>
        </motion.div>

        {/* Mobile: Two columns like VSCO */}
        <div className="block sm:hidden columns-2 gap-2 space-y-2">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: {
                    duration: 0.4,
                    delay: getRandomDelay(index)
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group relative break-inside-avoid mb-2"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setClickPosition({
                  x: rect.left,
                  y: rect.top,
                  width: rect.width,
                  height: rect.height
                });
                setSelectedMedia(item);
              }}
            >
              <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-all duration-300 group-active:scale-95 rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-auto object-cover transition-all duration-300 group-active:scale-95 rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
                
                {/* Play icon for videos */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-black/70 rounded-full p-1">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop: Masonry columns */}
        <div className="hidden sm:block columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {mediaItems.map((item, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, scale: 0.9 },
                visible: { 
                  opacity: 1, 
                  scale: 1,
                  transition: {
                    duration: 0.4,
                    delay: getRandomDelay(index)
                  }
                }
              }}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              whileHover={{ 
                scale: 1.02,
                transition: { 
                  type: "spring",
                  stiffness: 400,
                  damping: 25
                }
              }}
              whileTap={{ scale: 0.98 }}
              className="cursor-pointer group relative break-inside-avoid mb-4"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setClickPosition({
                  x: rect.left,
                  y: rect.top,
                  width: rect.width,
                  height: rect.height
                });
                setSelectedMedia(item);
              }}
            >
              <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                {item.type === 'image' ? (
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    loading="lazy"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                    }}
                  />
                ) : (
                  <video
                    src={item.src}
                    className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105 rounded-lg"
                    autoPlay
                    loop
                    muted
                    playsInline
                    preload="metadata"
                    onError={(e) => {
                      const target = e.target as HTMLVideoElement;
                      target.style.display = 'none';
                    }}
                  />
                )}
                
                {/* Overlay simple en hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white text-center">
                    <svg className="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                </div>

                {/* Play icon for videos */}
                {item.type === 'video' && (
                  <div className="absolute top-2 right-2">
                    <div className="bg-black/70 rounded-full p-1">
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-screen modal using portal */}
      {selectedMedia && clickPosition && createPortal(
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: '100vw',
            height: '100vh'
          }}
          onClick={() => {
            setSelectedMedia(null);
            setClickPosition(null);
          }}
        >
          {/* Close button - fixed position */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setSelectedMedia(null);
              setClickPosition(null);
            }}
            className="fixed top-6 right-6 z-[10000] text-white hover:text-gray-300 transition-colors p-3 rounded-full bg-black/60 backdrop-blur-sm"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.2 }}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </motion.button>

          {/* Content container - popup style */}
          <motion.div
            initial={{ 
              scale: 0.8,
              opacity: 0
            }}
            animate={{ 
              scale: 1,
              opacity: 1
            }}
            exit={{ 
              scale: 0.8,
              opacity: 0
            }}
            transition={{
              duration: 0.3,
              ease: [0.25, 0.1, 0.25, 1]
            }}
            className="relative max-w-[90vw] max-h-[90vh] bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedMedia.type === 'image' ? (
              <img
                src={selectedMedia.src}
                alt={selectedMedia.alt}
                className="w-full h-full object-contain"
                style={{ 
                  maxWidth: '90vw', 
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
              />
            ) : (
              <video
                src={selectedMedia.src}
                className="w-full h-full object-contain"
                style={{ 
                  maxWidth: '90vw', 
                  maxHeight: '90vh',
                  objectFit: 'contain'
                }}
                controls
                autoPlay
                loop
              />
            )}
            
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-2xl">
              <p className="text-white text-sm md:text-base font-medium">
                {selectedMedia.alt}
              </p>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </section>
  );
};

export default Gallery;