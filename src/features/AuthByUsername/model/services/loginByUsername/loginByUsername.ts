import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { LOCALSTORAGE_USER_KEY } from '@/shared/constants/localStorage';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface LoginByUsernameArgs {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameArgs, ThunkConfig<string>>(
  'loginForm/loginByUsername',
  async (requestParams, thunkAPI) => {
    const { dispatch, extra, rejectWithValue } = thunkAPI;

    try {
      const response = await extra.api.post<User>('/login', requestParams);

      if (response.data === undefined) {
        throw new Error();
      }

      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
      dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return rejectWithValue('wrong.auth.data');
    }
  },
);
