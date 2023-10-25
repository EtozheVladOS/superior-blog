import { FC, lazy } from 'react';

// чтоб проверить как работает Suspense в App.tsx
export const MainPageAsync = lazy<FC>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./MainPage')), 500);
}));
