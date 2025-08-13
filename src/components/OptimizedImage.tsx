import React from 'react';
import { useLazyImage } from '../hooks/useLazyImage';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  loading?: 'lazy' | 'eager';
  sizes?: string;
  style?: React.CSSProperties;
  placeholder?: string;
  preload?: boolean;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  loading = 'lazy',
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  style,
  placeholder,
  preload = false
}) => {
  const { imgRef, imageSrc, isLoaded, isError, handleLoad, handleError } = useLazyImage(src, { preload });

  if (loading === 'eager') {
    return (
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={className}
        loading={loading}
        decoding="async"
        sizes={sizes}
        style={style}
      />
    );
  }

  return (
    <div className="relative overflow-hidden" style={{ width, height, ...style }}>
      {(!isLoaded && !isError) && placeholder && (
        <div 
          className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect fill='%23f3f4f6' width='100' height='100'/%3E%3C/svg%3E")`
          }}
        />
      )}
      <img
        ref={imgRef}
        src={imageSrc}
        alt={alt}
        width={width}
        height={height}
        className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
        loading="lazy"
        decoding="async"
        sizes={sizes}
        onLoad={handleLoad}
        onError={handleError}
        style={{ display: isError ? 'none' : 'block' }}
      />
    </div>
  );
};

export default OptimizedImage;