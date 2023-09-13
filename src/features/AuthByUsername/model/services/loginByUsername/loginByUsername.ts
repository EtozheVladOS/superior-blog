import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User, userActions } from '@/entities/User';
import { LOCALSTORAGE_USER_KEY } from '@/shared/constants/localStorage';

interface LoginByUsernameArgs {
  username: string;
  password: string;
}

export const loginByUsername = createAsyncThunk<User, LoginByUsernameArgs, { rejectValue: string }>(
  'loginForm/loginByUsername',
  async (requestParams, thunkAPI) => {
    try {
      const response = await axios.post<User>(
        'http://localhost:8080/login',
        requestParams,
      );

      if (response.data === undefined) {
        throw new Error();
      }

      localStorage.setItem(LOCALSTORAGE_USER_KEY, JSON.stringify(response.data));
      thunkAPI.dispatch(userActions.setAuthData(response.data));

      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue('wrong.auth.data');
    }
  },
);
