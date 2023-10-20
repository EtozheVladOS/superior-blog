import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CommentEntity } from '@/entities/Comment';
import { getUserAuthData } from '@/entities/User';
import { getArticlesDetailsData } from '@/entities/Article/model/selectors/articleDetails';
import { fetchCommentsByArticleId } from '../fetchCommentsByArticleId/fetchCommentsByArticleId';

export const addCommentForArticle = createAsyncThunk<
  CommentEntity,
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsPage/addCommentForArticle',
  async (text, thunkAPI) => {
    const {
      extra,
      rejectWithValue,
      getState,
      dispatch,
    } = thunkAPI;

    const { id: userId } = getUserAuthData(getState()) || {};
    const { id: articleId } = getArticlesDetailsData(getState()) || {};

    if (!userId || !text || !articleId) {
      return rejectWithValue('no data');
    }

    try {
      const response = await extra.api.post<CommentEntity>('/comments', {
        articleId,
        userId,
        text,
      });

      if (response.data === undefined) {
        throw new Error();
      }

      dispatch(fetchCommentsByArticleId(articleId));

      return response.data;
    } catch (e) {
      return rejectWithValue('error');
    }
  },
);
