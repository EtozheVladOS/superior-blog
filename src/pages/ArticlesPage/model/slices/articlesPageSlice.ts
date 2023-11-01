import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { Article, ArticleView } from '@/entities/Article';
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from '@/shared/constants/localStorage';
import { ArticlePageSchema } from '../types/articlePageSchema';
import { fetchArticlesList } from '../services/fetchArticlesList/fetchArticlesList';

const articlesPageAdapter = createEntityAdapter<Article>({
  selectId: (article) => article.id,
});

export const getArticles = articlesPageAdapter.getSelectors<StateSchema>(
  (state) => state.articlesPage || articlesPageAdapter.getInitialState(),
);

const articlePageSlice = createSlice({
  name: 'articlePageSlice',
  initialState: articlesPageAdapter.getInitialState<ArticlePageSchema>({
    view: ArticleView.SMALL,
    isLoading: false,
    error: undefined,
    ids: [],
    entities: {},
    page: 1,
    hasMoreContent: true,
    _inited: false,
  }),
  reducers: {
    initState: (state) => {
      const view = localStorage.getItem(LOCALSTORAGE_ARTICLES_VIEW_KEY) as ArticleView;

      state.view = view;
      state.limit = view === ArticleView.BIG ? 3 : 9;
      state._inited = true;
    },
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload;
      localStorage.setItem(LOCALSTORAGE_ARTICLES_VIEW_KEY, action.payload);
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action: PayloadAction<Article[]>) => {
          state.error = undefined;
          state.isLoading = false;
          state.hasMoreContent = action.payload?.length > 0;
          articlesPageAdapter.addMany(state, action.payload);
        },
      )
      .addCase(fetchArticlesList.rejected, (state, action) => {
        state.error = action.payload as string | undefined;
        state.isLoading = false;
      });
  },
});

export const {
  reducer: articlesPageReducer,
  actions: articlesPageActions,
} = articlePageSlice;
