import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { Profile } from '@/entities/Profile';
import { ProfileSchema, VALIDATE_PROFILE_ERROR } from '../types/EditableProfileCardSchema';
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData';
import { updateProfileData } from '../services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
  isLoading: false,
  readonly: true,
};

const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {
    setReadonly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload;
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.editableForm = { ...state.editableForm, ...action.payload };
    },
    cancelEdit: (state) => {
      state.readonly = true;
      state.editableForm = state.data;
      state.validateError = undefined;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfileData.pending, (state) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.error = undefined;
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.editableForm = action.payload;
      })
      .addCase(fetchProfileData.rejected, (state, action) => {
        state.error = action.payload as string | undefined;
        state.isLoading = false;
      })

      .addCase(updateProfileData.pending, (state) => {
        state.validateError = undefined;
        state.isLoading = true;
      })
      .addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
        state.validateError = undefined;
        state.isLoading = false;
        state.readonly = true;
        state.data = action.payload;
        state.editableForm = action.payload;
      })
      .addCase(updateProfileData.rejected, (state, action) => {
        state.validateError = action.payload as VALIDATE_PROFILE_ERROR[];
        state.isLoading = false;
      });
  },
});

export const {
  actions: profileActions,
  reducer: profileReducer,
} = profileSlice;
