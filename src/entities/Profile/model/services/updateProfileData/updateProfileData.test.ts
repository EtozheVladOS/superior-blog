import { TestAsyncThunk } from '@/shared/lib/unitTest/TestAsyncThunk';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { updateProfileData } from './updateProfileData';
import { VALIDATE_PROFILE_ERROR } from '@/entities/Profile/model/types/profile';

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

describe('updateProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editableForm: mockProfileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ data: mockProfileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.put).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockProfileData);
  });

  test('server error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editableForm: mockProfileData,
      },
    });

    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([VALIDATE_PROFILE_ERROR.SERVER_ERROR]);
  });

  test('validate error', async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: {
        editableForm: { ...mockProfileData, firstname: '', lastname: '' },
      },
    });

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
    expect(result.payload).toEqual([VALIDATE_PROFILE_ERROR.INCORECT_PROFILE_DATA]);
  });
});
