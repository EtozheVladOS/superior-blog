import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Article, ArticleType } from '@/entities/Article';
import { addQueryParams } from '@/shared/lib/addQueryParams/addQueryParams';
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageType,
} from '../../selectors/articlesPageSelectors';

interface FetchArticlesListParams {
  replace?: boolean;
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesListParams,
  ThunkConfig<string>
>(
  'articlesPage/fetchArticlesList',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const limit = getArticlesPageLimit(getState());
    const page = getArticlesPageNumber(getState());
    const sort = getArticlesPageSort(getState());
    const order = getArticlesPageOrder(getState());
    const search = getArticlesPageSearch(getState());
    const type = getArticlesPageType(getState());

    try {
      addQueryParams({
        sort, order, search, type,
      });

      const response = await extra.api.get<Article[]>('/articles', {
        params: {
          _expand: 'user',
          _limit: limit,
          _page: page,
          _sort: sort,
          _order: order,
          q: search,
          type: type === ArticleType.ALL ? undefined : type,
        },
      });

      if (response.data === undefined) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
