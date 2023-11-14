import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsArticleDetailsRecommendationsLoading = (
  state: StateSchema,
) => state.articleDetailsPage?.recommendations?.isLoading;

export const getArticleDetailsRecommendationsError = (
  state: StateSchema,
) => state.articleDetailsPage?.recommendations?.error;
