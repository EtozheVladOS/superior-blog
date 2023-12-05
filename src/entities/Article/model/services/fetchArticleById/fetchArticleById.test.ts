import { TestAsyncThunk } from '@/shared/lib/unitTest/TestAsyncThunk';
import { Article, ArticleType, ArticleBlockType } from '../../types/article';
import { fetchArticleById } from './fetchArticleById';

const mockArticleData: Article = {
  id: '1',
  creationDate: '12.09.2023',
  img: 'https://test-img-com',
  subtitle: 'New technologies in IT for 2022 year',
  title: 'IT news',
  type: [ArticleType.IT, ArticleType.SCIENCE],
  views: 771,
  user: {
    id: '1',
    username: 'name',
  },
  blocks: [{
    id: '1',
    type: ArticleBlockType.TEXT,
    paragrafs: [],
  }],
};

describe('fetchArticleById', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockArticleData }));

    const result = await thunk.callThunk('1');

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockArticleData);
  });

  test('fail', async () => {
    const thunk = new TestAsyncThunk(fetchArticleById);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk('1');

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
