import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { validateProfileData } from './validateProfileData';
import { VALIDATE_PROFILE_ERROR } from '../../types/profile';

const mockProfileData = {
  username: 'Testusername',
  firstname: 'Name',
  lastname: 'Last',
  age: 33,
  country: COUNTRY.Iceland,
  city: 'New-city',
  currency: CURRENCY.EUR,
};

describe('validateProfileData', () => {
  test('success', async () => {
    const result = validateProfileData(mockProfileData);

    expect(result).toEqual([]);
  });

  test('without first and last name', async () => {
    const result = validateProfileData({ ...mockProfileData, firstname: '', lastname: '' });

    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORECT_PROFILE_DATA]);
  });

  test('incorrect age', async () => {
    const result = validateProfileData({ ...mockProfileData, age: 0 });

    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORECT_AGE]);
  });

  test('incorrect country', async () => {
    const result = validateProfileData({ ...mockProfileData, country: undefined });

    expect(result).toEqual([VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY]);
  });

  test('empty form', async () => {
    const result = validateProfileData({});

    expect(result).toEqual([
      VALIDATE_PROFILE_ERROR.INCORECT_PROFILE_DATA,
      VALIDATE_PROFILE_ERROR.INCORECT_AGE,
      VALIDATE_PROFILE_ERROR.INCORECT_COUNTRY,
    ]);
  });

  test('undefined data', async () => {
    const result = validateProfileData();

    expect(result).toEqual([VALIDATE_PROFILE_ERROR.NONE_DATA]);
  });
});
