import React, { useEffect } from 'react';
import { useMotionValue } from 'framer-motion';

export const useContainerScroll = (ref: React.RefObject<HTMLDivElement>) => {
  const scrollProgress = useMotionValue(0);

  useEffect(() => {
    const container = ref.current
    
    if(!container) return;
    
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const progress = scrollTop / (scrollHeight - clientHeight);
      console.log(progress)
      scrollProgress.set(progress);
    };

    container.addEventListener('scroll', handleScroll);
    return () => container.removeEventListener('scroll', handleScroll);
  }, [ref]);

  return scrollProgress;
}