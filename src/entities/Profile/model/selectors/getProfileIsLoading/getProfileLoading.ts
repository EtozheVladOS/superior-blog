import { StateSchema } from '@/app/providers/StoreProvider';

export const getProfileIsLoadnig = (state: StateSchema) => state.profile?.isLoading;
