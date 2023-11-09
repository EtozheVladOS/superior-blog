import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export interface ArticlePageSchema extends EntityState<Article> {
  // paginaton
  page: number;
  hasMoreContent: boolean;
  limit: number;
  // filters
  view: ArticleView;
  order: SortOrder;
  sort: ArticleSortField;
  serach: string;
  // default
  isLoading?: boolean;
  error?: string;
  _inited?: boolean;
}
