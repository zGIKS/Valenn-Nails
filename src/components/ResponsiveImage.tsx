import React from 'react';

interface ResponsiveImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  sizes?: string;
  className?: string;
  loading?: 'lazy' | 'eager';
  priority?: boolean;
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 640px) 50vw, (max-width: 768px) 33vw, 25vw",
  className = "",
  loading = 'lazy',
  priority = false
}) => {
  // Use existing images only - no custom sizes
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      sizes={sizes}
      className={className}
      loading={priority ? 'eager' : loading}
      decoding="async"
      onError={(e) => {
        const target = e.target as HTMLImageElement;
        target.style.display = 'none';
      }}
    />
  );
};

export default ResponsiveImage;