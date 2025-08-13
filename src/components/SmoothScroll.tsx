import React from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

interface SmoothScrollProps {
  children: React.ReactNode;
}

const SmoothScroll: React.FC<SmoothScrollProps> = ({ children }) => {
  const { scrollYProgress } = useScroll();
  
  // Smooth spring animation for scroll progress
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 30,
    stiffness: 300,
    mass: 0.5
  });

  return (
    <div className="smooth-scroll-container">
      {/* Scroll progress indicator */}
      <motion.div
        style={{
          scaleX: smoothProgress,
          transformOrigin: '0%'
        }}
      />
      
      {/* Main content */}
      <div className="smooth-scroll-content">
        {children}
      </div>

      <style>{`
        .smooth-scroll-container {
          position: relative;
          overflow-x: hidden;
        }
        
        .smooth-scroll-content {
          will-change: transform;
          backface-visibility: hidden;
          perspective: 1000px;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .smooth-scroll-content {
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SmoothScroll;