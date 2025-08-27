import React, { useState, useEffect } from 'react';
import { ImageOptimizer } from '../utils/ImageOptimizer';

const OptimizedImage = ({ 
  src, 
  alt, 
  width = 'auto', 
  height = 'auto',
  className = '',
  lazy = true,
  context = 'Paraguay'
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [optimizedSrc, setOptimizedSrc] = useState(src);
  
  useEffect(() => {
    if (lazy) {
      ImageOptimizer.initLazyLoading();
    }
  }, [lazy]);
  
  const handleLoad = () => {
    setIsLoaded(true);
  };
  
  const imgStyle = {
    width,
    height,
    opacity: isLoaded ? 1 : 0,
    transition: 'opacity 0.3s ease',
    objectFit: 'cover',
    borderRadius: '8px'
  };
  
  if (lazy) {
    return (
      <img
        data-src={optimizedSrc}
        alt={alt || ImageOptimizer.generateAltText('imagem', context)}
        className={`lazy ${className}`}
        style={imgStyle}
        onLoad={handleLoad}
      />
    );
  }
  
  return (
    <img
      src={optimizedSrc}
      alt={alt || ImageOptimizer.generateAltText('imagem', context)}
      className={className}
      style={imgStyle}
      onLoad={handleLoad}
    />
  );
};

export default OptimizedImage;