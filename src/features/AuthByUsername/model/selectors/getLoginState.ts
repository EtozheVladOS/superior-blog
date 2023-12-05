import { StateSchema } from '@/app/providers/StoreProvider';
import { LoginSchema } from '../types/loginSchema';

const LOGIN_FORM_INIT_STATE: LoginSchema = {
  username: '',
  password: '',
  isLoading: false,
};

export const getLoginState = (state: StateSchema) => state.loginForm ?? LOGIN_FORM_INIT_STATE;
