import { FC, lazy } from 'react';

export const ArticlesPageAsync = lazy<FC>(() => import('./ArticlesPage'));
