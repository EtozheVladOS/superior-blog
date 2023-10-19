import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { CommentEntity } from '@/entities/Comment';

export const fetchCommentsByArticleId = createAsyncThunk<
  CommentEntity[],
  string | undefined,
  ThunkConfig<string>
>(
  'articleDetailsPage/fetchCommentsByArticleId',
  async (articleId, thunkAPI) => {
    const { extra, rejectWithValue } = thunkAPI;

    if (articleId === undefined) {
      return rejectWithValue('error');
    }

    try {
      const response = await extra.api.get<CommentEntity[]>('/comments', {
        params: {
          articleId,
          _expand: 'user',
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
