import { FC, lazy } from 'react';

export const ArticleEditPageAsync = lazy<FC>(() => import('./ArticleEditPage'));
