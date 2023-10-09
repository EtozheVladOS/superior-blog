import { FC, lazy } from 'react';

export const ArticleDetailsPageAsync = lazy<FC>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./ArticleDetailsPage')), 1000);
}));
