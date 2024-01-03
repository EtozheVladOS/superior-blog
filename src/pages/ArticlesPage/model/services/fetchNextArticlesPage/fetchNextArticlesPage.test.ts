import { TestAsyncThunk } from '@/shared/lib/unitTest/TestAsyncThunk';
import { fetchNextArticlesPage } from './fetchNextArticlesPage';
import { fetchArticlesList } from '../fetchArticlesList/fetchArticlesList';

jest.mock('../fetchArticlesList/fetchArticlesList');

describe('fetchNextArticlesPage', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 3,
        isLoading: false,
        hasMoreContent: true,
      },
    });

    const result = await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(4);
    expect(fetchArticlesList).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
  });

  test('fetchArticlesList havn\'t called (not enought data)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 3,
        isLoading: false,
        hasMoreContent: false,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalledWith({ page: 3 });
  });

  test('fetchArticlesList havn\'t called (isLoading)', async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        ids: [],
        entities: {},
        page: 2,
        limit: 3,
        isLoading: true,
        hasMoreContent: true,
      },
    });

    await thunk.callThunk();

    expect(thunk.dispatch).toBeCalledTimes(2);
    expect(fetchArticlesList).not.toHaveBeenCalledWith({ page: 3 });
  });
});
