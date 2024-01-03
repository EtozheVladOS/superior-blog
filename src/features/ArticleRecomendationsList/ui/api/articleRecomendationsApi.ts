import { Article } from '@/entities/Article';
import { rtkApi } from '@/shared/api/rtkApi';

const recomandationsListApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getArticleRecomandationsList: build.query<Article[], number>({
      query: (limit) => ({
        url: '/articles',
        params: {
          _limit: limit,
        },
      }),
    }),
  }),
  overrideExisting: false,
});

export const { useGetArticleRecomandationsListQuery } = recomandationsListApi;
