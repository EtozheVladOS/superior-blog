import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getCounterState } from './getCounterState';

describe('counterState', () => {
  test('return counter value', () => {
    const state: DeepPartial<StateSchema> = {
      counter: { value: 5 },
    };

    expect(getCounterState(state as StateSchema)).toEqual({ value: 5 });
  });
});
