import { StateSchema } from '@/app/providers/StoreProvider';
import { getArticlesDetailsData, getArticlesDetailsIsLoading, getArticlesDetailsError } from './articleDetails';

describe('getArticlesDetailsData', () => {
  test('should return article data', () => {
    const mockData = { id: '1', title: 'Title' };
    const state: DeepPartial<StateSchema> = { articleDeatils: { data: mockData } };

    expect(getArticlesDetailsData(state as StateSchema)).toEqual(mockData);
  });

  test('should work with empty articleData state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesDetailsData(state as StateSchema)).toEqual(undefined);
  });

  test('should return isLoading', () => {
    const state: DeepPartial<StateSchema> = { articleDeatils: { isLoading: true } };

    expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(true);
  });

  test('should work with empty lodaing state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesDetailsIsLoading(state as StateSchema)).toEqual(undefined);
  });

  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { articleDeatils: { error: 'test_err' } };

    expect(getArticlesDetailsError(state as StateSchema)).toEqual('test_err');
  });

  test('should work with empty error state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getArticlesDetailsError(state as StateSchema)).toEqual(undefined);
  });
});
