import { StateSchema } from '@/app/providers/StoreProvider';

export const getIsArticleDetailsCommentsLoading = (
  state: StateSchema,
) => state.articleDetaildComments?.isLoading;

export const getArticleDetailsCommentsError = (
  state: StateSchema,
) => state.articleDetaildComments?.error;
