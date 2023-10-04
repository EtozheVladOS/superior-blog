import { TestAsyncThunk } from '@/shared/lib/unitTest/TestAsyncThunk';
import { COUNTRY } from '@/entities/Country';
import { CURRENCY } from '@/entities/Currency';
import { fetchProfileData } from './fetchProfileData';

const mockProfileData = {
  username: 'Testusername',
  firstname: 'Name',
  lastname: 'Last',
  age: 33,
  country: COUNTRY.Iceland,
  city: 'New-city',
  currency: CURRENCY.EUR,
};

describe('fetchProfileData', () => {
  test('success', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ data: mockProfileData }));

    const result = await thunk.callThunk();

    expect(thunk.api.get).toHaveBeenCalled();
    expect(result.meta.requestStatus).toBe('fulfilled');
    expect(result.payload).toEqual(mockProfileData);
  });

  test('fail', async () => {
    const thunk = new TestAsyncThunk(fetchProfileData);

    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }));

    const result = await thunk.callThunk();

    expect(result.meta.requestStatus).toBe('rejected');
  });
});
