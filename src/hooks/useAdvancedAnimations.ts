import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface AnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  margin?: string;
}

export const useAdvancedAnimations = (options: AnimationOptions = {}) => {
  const ref = useRef<HTMLElement>(null);
  
  const defaultOptions = {
    threshold: 0.1,
    triggerOnce: false,
    margin: '-50px',
    ...options
  };
  
  const isInView = useInView(ref, {
    once: defaultOptions.triggerOnce,
    margin: defaultOptions.margin as any,
    amount: defaultOptions.threshold
  });

  // Optimized animation variants
  const variants = {
    fadeInUp: {
      hidden: { opacity: 0, y: 30 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    },
    fadeInLeft: {
      hidden: { opacity: 0, x: -40 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6 }
      }
    },
    fadeInRight: {
      hidden: { opacity: 0, x: 40 },
      visible: { 
        opacity: 1, 
        x: 0,
        transition: { duration: 0.6 }
      }
    },
    scaleIn: {
      hidden: { opacity: 0, scale: 0.9 },
      visible: { 
        opacity: 1, 
        scale: 1,
        transition: { duration: 0.5 }
      }
    },
    slideInUp: {
      hidden: { opacity: 0, y: 50 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    },
    staggerContainer: {
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.1,
          delayChildren: 0.2
        }
      }
    },
    staggerItem: {
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.5 }
      }
    }
  };

  return { ref, isInView, variants };
};

export default useAdvancedAnimations;