import { FC, lazy } from 'react';

export const ArticlesPageAsync = lazy<FC>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./ArticlesPage')), 500);
}));
