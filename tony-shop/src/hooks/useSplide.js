import { useEffect, useState } from 'react';

// hook for slider
const getNumberOfSlides = () => {
  const width = window.innerWidth;
  if (width > 1200) {
    return 4;
  } else if (width > 900) {
    return 3;
  } else if (width > 600) {
    return 2;
  } else {
    return 1;
  }
};

export const useSplide = () => {
  const [numberOfSlides, setNumberOfSlides] = useState(getNumberOfSlides());

  useEffect(() => {
    const handleResize = () => {
      console.log('activando');
      setNumberOfSlides(getNumberOfSlides());
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return numberOfSlides;
};
