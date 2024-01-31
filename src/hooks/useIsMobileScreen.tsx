import { useState, useEffect } from 'react';

const useIsMobileScreen = (): boolean => {
  // Define a threshold for mobile screen width
  const mobileWidthThreshold = 768;

  // Initial state is set based on the assumption of a mobile screen
  // Adjust this based on your most common use case
  const [width, setWidth] = useState(mobileWidthThreshold);

  useEffect(() => {
    // Ensure window is defined (this is for SSR)
    const hasWindow = typeof window !== 'undefined';

    const handleResize = () => {
      if (hasWindow) {
        setWidth(window.innerWidth);
      }
    };

    if (hasWindow) {
      window.addEventListener('resize', handleResize);
      // Set the initial width
      handleResize();
    }

    return () => {
      if (hasWindow) {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []); // Empty array ensures this runs once on mount and unmount

  return width <= mobileWidthThreshold;
};

export default useIsMobileScreen;
