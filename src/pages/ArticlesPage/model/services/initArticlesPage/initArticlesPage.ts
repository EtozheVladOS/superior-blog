import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';
import { getArticlesReducerInited } from '../../selectors/articlesPageSelectors';
import { articlesPageActions } from '../../slices/articlesPageSlice';

export const initArticlesPage = createAsyncThunk<
  void,
  void,
  ThunkConfig<string>
>(
  'articlesPage/initArticlesPage',
  async (_, thunkAPI) => {
    const { getState, dispatch } = thunkAPI;

    const isReducerInited = getArticlesReducerInited(getState());

    if (!isReducerInited) {
      dispatch(articlesPageActions.initState());
      dispatch(fetchArticlesList({}));
    }
  },
);
