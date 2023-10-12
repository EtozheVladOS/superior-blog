import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ArticleDetailsSchema } from '../types/ArticleDetailsSchema';
import { fetchArticleById } from '../services/fetchArticleById/fetchArticleById';
import { Article } from '../types/article';

const initialState: ArticleDetailsSchema = {
  isLoading: false,
};

const articleDeatilsSlice = createSlice({
  name: 'artilceDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticleById.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchArticleById.fulfilled, (state, action: PayloadAction<Article>) => {
        state.error = undefined;
        state.isLoading = false;
        state.data = action.payload;
      })
      .addCase(fetchArticleById.rejected, (state, action) => {
        state.error = action.payload as string | undefined;
        state.isLoading = false;
      });
  },
});

export const {
  actions: articleDeatilsActions,
  reducer: articleDeatilsReducer,
} = articleDeatilsSlice;
