import { StateSchema } from '@/app/providers/StoreProvider';

export const getArticlesDetailsData = (state: StateSchema) => state?.articleDeatils?.data;

export const getArticlesDetailsIsLoading = (state: StateSchema) => state?.articleDeatils?.isLoading;

export const getArticlesDetailsError = (state: StateSchema) => state?.articleDeatils?.error;
