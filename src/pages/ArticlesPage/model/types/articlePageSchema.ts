import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleView } from '@/entities/Article';

export interface ArticlePageSchema extends EntityState<Article> {
  view: ArticleView;
  // paginaton
  page: number;
  hasMoreContent: boolean;
  limit?: number;
  // default
  isLoading?: boolean;
  error?: string;
  _inited?: boolean;
}
