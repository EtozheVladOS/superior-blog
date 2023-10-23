import { ProfileSchema, VALIDATE_PROFILE_ERROR } from '@/entities/Profile/model/types/profile';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { profileActions, profileReducer } from './profileSlice';
import { updateProfileData } from '@/entities/Profile/model/services/updateProfileData/updateProfileData';

const mockProfileData = {
  id: '1',
  username: 'Testusername',
  firstname: 'Name',
  lastname: 'Last',
  age: 33,
  country: COUNTRY.Iceland,
  city: 'New-city',
  currency: CURRENCY.EUR,
};

describe('profileSlice', () => {
  test('set readonly', async () => {
    const state: DeepPartial<ProfileSchema> = { readonly: false };
    expect(profileReducer(state as ProfileSchema, profileActions.setReadonly(true)))
      .toEqual({ readonly: true });
  });

  test('cancel edit', async () => {
    const state: DeepPartial<ProfileSchema> = {
      data: mockProfileData,
      editableForm: { username: 'test' },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.cancelEdit()))
      .toEqual({
        readonly: true,
        validateError: undefined,
        data: mockProfileData,
        editableForm: mockProfileData,
      });
  });

  test('update profile', async () => {
    const state: DeepPartial<ProfileSchema> = {
      editableForm: { ...mockProfileData, username: 'test' },
    };

    expect(profileReducer(state as ProfileSchema, profileActions.updateProfile({
      username: 'test_new',
    })))
      .toEqual({
        editableForm: { ...mockProfileData, username: 'test_new' },
      });
  });

  test('updateProfileData pending', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateError: [VALIDATE_PROFILE_ERROR.INCORECT_AGE],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.pending))
      .toEqual({ isLoading: true, validateError: undefined });
  });

  test('updateProfileData fulfilled', async () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateError: [VALIDATE_PROFILE_ERROR.INCORECT_AGE],
    };

    expect(profileReducer(state as ProfileSchema, updateProfileData.fulfilled(mockProfileData, '')))
      .toEqual({
        error: undefined,
        isLoading: false,
        readonly: true,
        data: mockProfileData,
        editableForm: mockProfileData,
      });
  });
});
