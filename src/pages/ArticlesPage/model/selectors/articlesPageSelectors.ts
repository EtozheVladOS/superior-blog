import { StateSchema } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleView } from '@/entities/Article';
import { SortOrder } from '@/shared/types';

export const getArticlesPageView = (state: StateSchema) => (
  state.articlesPage?.view || ArticleView.SMALL
);

export const getIsArticlesPageLoading = (state: StateSchema) => state.articlesPage?.isLoading;
export const getArticlesPageError = (state: StateSchema) => state.articlesPage?.error;

export const getArticlesPageNumber = (state: StateSchema) => state.articlesPage?.page || 1;
export const getArticlesPageLimit = (state: StateSchema) => state.articlesPage?.limit || 9;
export const getArticlesPageSort = (
  state: StateSchema,
): ArticleSortField => state.articlesPage?.sort || ArticleSortField.CREATED_AT;
export const getArticlesPageOrder = (
  state: StateSchema,
): SortOrder => state.articlesPage?.order || 'asc';
export const getArticlesPageSearch = (state: StateSchema) => state.articlesPage?.serach || '';

export const getArticlesPageHasMoreContent = (
  state: StateSchema,
) => state.articlesPage?.hasMoreContent;
export const getArticlesReducerInited = (state: StateSchema) => state.articlesPage?._inited;
