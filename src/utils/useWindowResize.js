import React, { useEffect, useRef, useState } from 'react';

export function useWindowResize() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const timer = useRef(null);

  const handleResize = () => {
    clearTimeout(timer);
    timer.current = setTimeout(() => {
      setWindowSize(window.innerWidth);
    }, 100);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [handleResize]);

  return {
    windowSize,
  }
}