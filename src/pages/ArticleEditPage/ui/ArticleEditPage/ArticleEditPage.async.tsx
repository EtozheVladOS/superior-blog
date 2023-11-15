import { FC, lazy } from 'react';

export const ArticleEditPageAsync = lazy<FC>(() => new Promise((resolve) => {
  setTimeout(() => resolve(import('./ArticleEditPage')), 500);
}));
