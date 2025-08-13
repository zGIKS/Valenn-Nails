import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import useAdvancedAnimations from '../hooks/useAdvancedAnimations';

const Hero: React.FC = () => {
  const { t } = useLanguage();
  const { ref, isInView, variants } = useAdvancedAnimations({ 
    threshold: 0.3, 
    triggerOnce: true 
  });
  
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 1000], [0, -200]);
  const floatingY = useTransform(scrollY, [0, 1000], [0, -100]);

  return (
    <motion.section 
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pastel-cream via-pastel-honey to-pastel-lavender dark:from-gray-900 dark:via-gray-800 dark:to-purple-900"
      style={{ y: backgroundY }}
    >
      {/* Enhanced Background Pattern with Parallax */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        style={{ y: floatingY }}
      >
        <motion.div 
          className="absolute top-20 left-20 w-32 h-32 bg-pastel-peach rounded-full blur-3xl"
          animate={{
            y: [-5, 5, -5],
            rotateZ: [-1, 1, -1]
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-48 h-48 bg-pastel-lavender rounded-full blur-3xl"
          animate={{
            y: [-8, 8, -8],
            rotateZ: [-1.5, 1.5, -1.5]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse",
            delay: 1
          }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-pastel-blush to-pastel-mint rounded-full blur-3xl"
          animate={{
            scale: [1, 1.03, 1],
            opacity: [0.7, 0.9, 0.7]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            repeatType: "reverse"
          }}
        />
      </motion.div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={variants.staggerContainer}
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={variants.staggerItem}
          >
            <motion.span 
              className="bg-gradient-to-r from-contrast-dark-rose via-contrast-dark-lilac to-contrast-dark-peach bg-clip-text text-transparent"
              variants={variants.scaleIn}
            >
              {t('title').split(' - ')[0]}
            </motion.span>
            <br />
            <motion.span 
              className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-700 dark:text-gray-300"
              variants={variants.fadeInUp}
            >
              {t('title').split(' - ')[1]}
            </motion.span>
          </motion.h1>
          
          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
            variants={variants.fadeInUp}
          >
            {t('heroDescription')}
          </motion.p>

          <motion.div
            variants={variants.slideInUp}
          >
            <motion.a
              href="#gallery"
              onClick={(e) => {
                e.preventDefault();
                
                const element = document.getElementById('gallery');
                if (element) {
                  // Enhanced smooth scroll with easing
                  element.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                  });
                  
                  // Adjust for header after scroll
                  setTimeout(() => {
                    window.scrollBy(0, -100);
                  }, 300);
                }
              }}
              whileHover={{ 
                scale: 1.08, 
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                y: -5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 300, 
                damping: 25 
              }}
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-contrast-dark-peach to-contrast-dark-lavender text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer no-underline transform hover:rotate-1"
            >
              {t('viewPortfolio')}
              <motion.svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                animate={{ y: [0, 3, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse"
                }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </motion.svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        whileHover={{ scale: 1.2 }}
      >
        <motion.div
          animate={{ y: [0, 15, 0] }}
          transition={{ 
            duration: 2.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-8 h-12 border-2 border-gray-400 dark:border-gray-500 rounded-full flex justify-center relative overflow-hidden backdrop-blur-sm bg-white/10 dark:bg-gray-900/20"
        >
          <motion.div
            animate={{ 
              y: [0, 16, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2.5, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="w-2 h-4 bg-gradient-to-b from-contrast-dark-rose to-contrast-dark-lavender rounded-full mt-2"
          />
          
          {/* Glowing effect */}
          <motion.div
            animate={{ 
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 2, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="absolute inset-0 rounded-full bg-gradient-to-b from-contrast-dark-rose/20 to-contrast-dark-lavender/20 blur-sm"
          />
        </motion.div>
        
        <motion.p 
          className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ 
            duration: 3, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
        >
          Scroll
        </motion.p>
      </motion.div>
    </motion.section>
  );
};

export default Hero;