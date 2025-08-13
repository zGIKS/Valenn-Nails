import React, { useState, useEffect, lazy, Suspense } from 'react';

const HeroAnimated = lazy(() => import('./Hero'));

const HeroLight: React.FC = () => {
  const [loadAnimated, setLoadAnimated] = useState(false);

  useEffect(() => {
    // Load animated version immediately to avoid flashing
    setLoadAnimated(true);
  }, []);

  if (loadAnimated) {
    return (
      <Suspense fallback={<div className="min-h-screen bg-gradient-to-br from-pastel-cream via-pastel-honey to-pastel-lavender dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />}>
        <HeroAnimated />
      </Suspense>
    );
  }

  return <div className="min-h-screen bg-gradient-to-br from-pastel-cream via-pastel-honey to-pastel-lavender dark:from-gray-900 dark:via-gray-800 dark:to-purple-900" />;
};

export default HeroLight;