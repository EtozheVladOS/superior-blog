import { useEffect } from 'react';

export const useInitialEffect = (callback: () => void) => {
  useEffect(() => {
    if (__PROJECT_ENIRONMENT__ !== 'storybook' && __PROJECT_ENIRONMENT__ !== 'jest') {
      callback();
    }
  }, []);
};
