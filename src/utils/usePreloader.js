import { useState } from 'react';

export function usePreloader() {
  const [isLoading, setIsLoading] = useState();

  return {
    isLoading,
    setIsLoading,
  }
}