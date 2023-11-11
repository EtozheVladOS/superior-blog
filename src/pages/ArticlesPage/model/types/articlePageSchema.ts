import { EntityState } from '@reduxjs/toolkit';
import { Article, ArticleSortField, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { ArticleType } from '@/entities/Article/model/types/article';

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
  type: ArticleType;
  // default
  isLoading?: boolean;
  error?: string;
  _inited?: boolean;
}
