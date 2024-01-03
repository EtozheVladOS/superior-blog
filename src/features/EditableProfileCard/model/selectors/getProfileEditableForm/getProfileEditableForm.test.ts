import { StateSchema } from '@/app/providers/StoreProvider';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { getProfileEditableForm } from './getProfileEditableForm';

describe('getProfileEditableForm', () => {
  test('should return value', () => {
    const stateProfileData = {
      username: 'Testusername',
      firstname: 'Name',
      lastname: 'Last',
      age: 33,
      country: COUNTRY.Iceland,
      city: 'New-city',
      currency: CURRENCY.EUR,
    };

    const state: DeepPartial<StateSchema> = { profile: { editableForm: stateProfileData } };

    expect(getProfileEditableForm(state as StateSchema)).toEqual(stateProfileData);
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileEditableForm(state as StateSchema)).toEqual(undefined);
  });
});
