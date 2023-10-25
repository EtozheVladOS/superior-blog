import { fetchArticleById } from '@/entities/Article/model/services/fetchArticleById/fetchArticleById';
import { ArticleDetailsSchema } from '@/entities/Article/model/types/ArticleDetailsSchema';
import { Article, ArticleBlockType, ArticleType } from '@/entities/Article/model/types/article';
import { articleDeatilsReducer } from './articleDetailsSlice';

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

describe('profileSlice', () => {
  test('articleDeatils pending', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
      error: 'test_err',
    };

    expect(articleDeatilsReducer(state as ArticleDetailsSchema, fetchArticleById.pending))
      .toEqual({ error: undefined, isLoading: true });
  });

  test('articleDeatils fulfilled', async () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
      error: 'test_err',
    };

    expect(articleDeatilsReducer(state as ArticleDetailsSchema, fetchArticleById.fulfilled(mockArticleData, '', '')))
      .toEqual({
        isLoading: false,
        error: undefined,
        data: mockArticleData,
      });
  });
});
