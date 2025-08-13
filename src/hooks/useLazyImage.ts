import { useEffect, useRef, useState } from 'react';

interface UseLazyImageOptions {
  rootMargin?: string;
  threshold?: number;
  preload?: boolean;
}

export const useLazyImage = (src: string, options: UseLazyImageOptions = {}) => {
  const { rootMargin = '50px', threshold = 0.1, preload = false } = options;
  const [imageSrc, setImageSrc] = useState<string | undefined>(preload ? src : undefined);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isError, setIsError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!imgRef.current || imageSrc) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setImageSrc(src);
          observer.disconnect();
        }
      },
      { rootMargin, threshold }
    );

    observer.observe(imgRef.current);

    return () => observer.disconnect();
  }, [src, rootMargin, threshold, imageSrc]);

  const handleLoad = () => setIsLoaded(true);
  const handleError = () => setIsError(true);

  return {
    imgRef,
    imageSrc,
    isLoaded,
    isError,
    handleLoad,
    handleError
  };
};