import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { ArticleSortField, ArticleType } from '@/entities/Article';
import { SortOrder } from '@/shared/types';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesReducerInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  URLSearchParams,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (searchParams, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isReducerInited = getArticlesReducerInited(getState());

    if (!isReducerInited) {
      const sortFromUrl = searchParams.get('sort') as ArticleSortField;
      const orderFromUrl = searchParams.get('order') as SortOrder;
      const searchFromUrl = searchParams.get('search');
      const typeFromUrl = searchParams.get('type') as ArticleType;

      if (sortFromUrl) {
        dispatch(articlesPageActions.setSort(sortFromUrl));
      }
      if (orderFromUrl) {
        dispatch(articlesPageActions.setOrder(orderFromUrl));
      }
      if (typeFromUrl) {
        dispatch(articlesPageActions.setType(typeFromUrl));
      }
      dispatch(articlesPageActions.setSearch(searchFromUrl ?? ''));

      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
