import {
  PayloadAction,
  createEntityAdapter,
  createSlice,
} from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import {
  Article,
  ArticleSortField,
  ArticleView,
  ArticleType,
} from '@/entities/Article';
import { LOCALSTORAGE_ARTICLES_VIEW_KEY } from '@/shared/constants/localStorage';
import { SortOrder } from '@/shared/types';
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
    limit: 9,
    order: 'asc',
    sort: ArticleSortField.CREATED_AT,
    serach: '',
    type: ArticleType.ALL,
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
    setOrder: (state, action: PayloadAction<SortOrder>) => {
      state.order = action.payload;
    },
    setSort: (state, action: PayloadAction<ArticleSortField>) => {
      state.sort = action.payload;
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.serach = action.payload;
    },
    setType: (state, action: PayloadAction<ArticleType>) => {
      state.type = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticlesList.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;

        if (action.meta.arg.replace) {
          articlesPageAdapter.removeAll(state);
        }
      })
      .addCase(
        fetchArticlesList.fulfilled,
        (state, action) => {
          state.error = undefined;
          state.isLoading = false;
          state.hasMoreContent = action.payload?.length >= state.limit;

          if (action.meta.arg.replace) {
            articlesPageAdapter.setAll(state, action.payload);
          } else {
            articlesPageAdapter.addMany(state, action.payload);
          }
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
