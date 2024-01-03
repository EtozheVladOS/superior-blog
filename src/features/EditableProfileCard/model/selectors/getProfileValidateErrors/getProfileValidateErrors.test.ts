import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileValidateErrors } from './getProfileValidateErrors';
import { VALIDATE_PROFILE_ERROR } from '../../types/EditableProfileCardSchema';

describe('getProfileValidateErrors', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      profile:
      {
        validateError: [
          VALIDATE_PROFILE_ERROR.INCORECT_AGE,
          VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY,
        ],
      },
    };

    expect(getProfileValidateErrors(state as StateSchema)).toEqual([
      VALIDATE_PROFILE_ERROR.INCORECT_AGE,
      VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY,
    ]);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileValidateErrors(state as StateSchema)).toEqual(undefined);
  });
});
