import React, { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { motion, useInView } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import valeMeImage from '../assets/me/vale-me-optimized.webp?url';

const About: React.FC = () => {
  const { t, language } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileClickPosition, setProfileClickPosition] = useState<{x: number, y: number, width: number, height: number} | null>(null);
  const currentTranslations = translations[language];

  const services = [
    { 
      key: currentTranslations.services.traditionalGel, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2" />
        </svg>
      )
    },
    { 
      key: currentTranslations.services.pedicureAesthetic, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    { 
      key: currentTranslations.services.customNailArt, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
        </svg>
      )
    },
    { 
      key: currentTranslations.services.semiPermanentPolish, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    { 
      key: currentTranslations.services.extensionsDecoration, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
        </svg>
      )
    },
    { 
      key: currentTranslations.services.personalizedConsulting, 
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
        </svg>
      )
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-800" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-contrast-dark-rose to-contrast-dark-lilac bg-clip-text text-transparent">
              {t('aboutTitle')}
            </h2>
            
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              {t('aboutDescription')}
            </p>

            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
              {t('specializedServices')}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {services.map((service, index) => (
                <motion.div
                  key={service.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-4 bg-gray-50 dark:bg-gray-700 rounded-xl hover:shadow-md transition-all duration-300"
                >
                  <div className="text-contrast-dark-rose mr-3">{service.icon}</div>
                  <span className="font-medium text-gray-800 dark:text-gray-200">
                    {service.key}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Experience Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-12"
            >
              <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-200">
                {t('workExperience')}
              </h3>
              
              <div className="space-y-6">
                <div className="border-l-4 border-contrast-dark-rose pl-6">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {currentTranslations.jobs.independent.title}
                    </h4>
                    <span className="ml-auto text-sm text-contrast-dark-rose font-medium">
                      {currentTranslations.jobs.independent.period}
                    </span>
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    {currentTranslations.jobs.independent.tasks.map((task: string, index: number) => (
                      <li key={index}>• {task}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-contrast-dark-lavender pl-6">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {currentTranslations.jobs.blancs.title}
                    </h4>
                    <span className="ml-auto text-sm text-contrast-dark-lavender font-medium">
                      {currentTranslations.jobs.blancs.period}
                    </span>
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    {currentTranslations.jobs.blancs.tasks.map((task: string, index: number) => (
                      <li key={index}>• {task}</li>
                    ))}
                  </ul>
                </div>

                <div className="border-l-4 border-contrast-dark-mint pl-6">
                  <div className="flex items-center mb-2">
                    <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {currentTranslations.jobs.vera.title}
                    </h4>
                    <span className="ml-auto text-sm text-contrast-dark-mint font-medium">
                      {currentTranslations.jobs.vera.period}
                    </span>
                  </div>
                  <ul className="text-gray-600 dark:text-gray-400 text-sm space-y-1">
                    {currentTranslations.jobs.vera.tasks.map((task: string, index: number) => (
                      <li key={index}>• {task}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div 
              className="relative rounded-3xl overflow-hidden shadow-2xl cursor-pointer group"
              onClick={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                setProfileClickPosition({
                  x: rect.left,
                  y: rect.top,
                  width: rect.width,
                  height: rect.height
                });
                setShowProfileModal(true);
              }}
            >
              <img 
                src={valeMeImage} 
                alt={currentTranslations.profileAlt}
                width={380}
                height={507}
                sizes="(max-width: 768px) 380px, (max-width: 1024px) 507px, 380px"
                className="w-full h-full object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h4 className="text-2xl font-bold mb-2">
                  {currentTranslations.fullName}
                </h4>
                <p className="text-gray-100">
                  {currentTranslations.profession}
                </p>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-pastel-peach/50 rounded-full blur-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pastel-lavender/50 rounded-full blur-xl"></div>
            </div>

            {/* Floating elements */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
            >
              <svg className="w-6 h-6 text-contrast-dark-rose" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </motion.div>
            
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-full p-3 shadow-lg"
            >
              <svg className="w-6 h-6 text-pastel-lilac" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM7 3V1m0 18v2m8-10h6m-3-3v6" />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Profile Photo Modal using portal */}
      {showProfileModal && profileClickPosition && createPortal(
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
            setShowProfileModal(false);
            setProfileClickPosition(null);
          }}
        >
          {/* Close button - fixed position */}
          <motion.button
            onClick={(e) => {
              e.stopPropagation();
              setShowProfileModal(false);
              setProfileClickPosition(null);
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
            <img
              src={valeMeImage}
              alt={currentTranslations.profileAlt}
              width={800}
              height={800}
              className="w-full h-full object-contain"
              style={{ 
                maxWidth: '90vw', 
                maxHeight: '90vh',
                objectFit: 'contain'
              }}
            />
            
            {/* Caption overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-6 rounded-b-2xl">
              <h4 className="text-white text-xl md:text-2xl font-bold mb-2">
                {currentTranslations.fullName}
              </h4>
              <p className="text-gray-100 text-sm md:text-base">
                {currentTranslations.profession}
              </p>
            </div>
          </motion.div>
        </motion.div>,
        document.body
      )}
    </section>
  );
};

export default About;