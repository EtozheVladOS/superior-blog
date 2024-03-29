import { StateSchema } from '@/app/providers/StoreProvider';
import { getProfileError } from './getProfileError';

describe('getProfileError', () => {
  test('should return error', () => {
    const state: DeepPartial<StateSchema> = { profile: { error: 'testErr' } };

    expect(getProfileError(state as StateSchema)).toEqual('testErr');
  });

  test('should work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getProfileError(state as StateSchema)).toEqual(undefined);
  });
});
