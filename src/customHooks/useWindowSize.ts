import { useEffect, useState } from 'react';
import { WindowSizeValues } from '@/custom-types';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<WindowSizeValues>({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  });

  return windowSize;
}