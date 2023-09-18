import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { ProfileSchema, Profile } from '../types/profile';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    // setAuthData: (state, action: PayloadAction<Profile>) => {
    // },
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;
