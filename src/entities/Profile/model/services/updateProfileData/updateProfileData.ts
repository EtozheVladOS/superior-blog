import { createAsyncThunk } from '@reduxjs/toolkit';
import { ThunkConfig } from '@/app/providers/StoreProvider';
import { Profile, VALIDATE_PROFILE_ERROR } from '../../types/profile';
import { getProfileEditableForm } from
  '../../selectors/getProfileEditableForm/getProfileEditableForm';
import { validateProfileData } from '../validateProfileData/validateProfileData';

export const updateProfileData = createAsyncThunk<
  Profile,
  void,
  ThunkConfig<VALIDATE_PROFILE_ERROR[]>
>(
  'profile/updateProfileData',
  async (profileId, thunkAPI) => {
    const { extra, rejectWithValue, getState } = thunkAPI;

    const editableForm = getProfileEditableForm(getState());

    const errorList = validateProfileData(editableForm);

    if (errorList.length) {
      return rejectWithValue(errorList);
    }

    try {
      const response = await extra.api.put<Profile>(`/profile/${editableForm?.id}`, editableForm);

      if (response.data === undefined) {
        throw new Error();
      }

      return response.data;
    } catch (e) {
      return rejectWithValue([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
    }
  },
);
