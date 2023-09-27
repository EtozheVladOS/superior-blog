import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile } from '../../types/profile';
import { getProfileEditableForm } from
  '../../selectors/getProfileEditableForm/getProfileEditableForm';

export const updateProfileData = createAsyncThunk<Profile, void, ThunkConfig<string>>(
  'profile/updateProfileData',
  async (_, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;
    const editableForm = getProfileEditableForm(getState());

    try {
      const response = await extra.api.put<Profile>('/profile', editableForm);
      return response.data;
    } catch (e) {
      return rejectWithValue('wrong.auth.data');
    }
  },
);
