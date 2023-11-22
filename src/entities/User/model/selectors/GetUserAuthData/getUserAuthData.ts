import { StateSchema } from '@/app/providers/StoreProvider';

const getUserAuthData = (state: StateSchema) => state.user.authData;

export { getUserAuthData };
