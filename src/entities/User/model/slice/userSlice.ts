import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { LOCALSTORAGE_USER_KEY } from '@/shared/constants/localStorage';
import { UserSchema, User } from '../types/user';

const initialState: UserSchema = {
  _stateInited: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setAuthData: (state, action: PayloadAction<User>) => {
      state.authData = action.payload;
    },

    initUserData: (state) => {
      const userData = localStorage.getItem(LOCALSTORAGE_USER_KEY);

      if (userData) {
        state.authData = JSON.parse(userData);
      }

      state._stateInited = true;
    },

    logout: (state) => {
      state.authData = undefined;
      localStorage.removeItem(LOCALSTORAGE_USER_KEY);
    },
  },
});

export const {
  actions: userActions,
  reducer: userReducer,
} = userSlice;
