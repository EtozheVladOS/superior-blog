import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import {
  getArticlesPageHasMoreContent,
  getArticlesPageNumber,
  getIsArticlesPageLoading,
} from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const fetchNextArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/fetchNextArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isLoading = getIsArticlesPageLoading(getState());
    const page = getArticlesPageNumber(getState());
    const hasMoreContent = getArticlesPageHasMoreContent(getState());

    if (hasMoreContent && !isLoading) {
      const newPageValue = page + 1;

      dispatch(articlesPageActions.setPage(newPageValue));
      dispatch(fetchArticlesList({ page: newPageValue }));
    }
  },
);
