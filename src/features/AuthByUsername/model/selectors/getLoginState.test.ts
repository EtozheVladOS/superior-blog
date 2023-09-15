import { DeepPartial } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { getLoginState } from './getLoginState';

describe('getLoginError', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        error: 'test_error',
      },
    };

    expect(getLoginState(state as StateSchema).error).toEqual('test_error');
  });

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema).error).toEqual(undefined);
  });
});

describe('getLogisLoading', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        isLoading: true,
      },
    };

    expect(getLoginState(state as StateSchema).isLoading).toEqual(true);
  });

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema).isLoading).toEqual(false);
  });
});

describe('getLogisUsername', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        username: 'test',
      },
    };

    expect(getLoginState(state as StateSchema).username).toEqual('test');
  });

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema).username).toEqual('');
  });
});

describe('getLogisPassword', () => {
  test('should return value', () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: {
        password: 'test',
      },
    };

    expect(getLoginState(state as StateSchema).password).toEqual('test');
  });

  test('with empty state', () => {
    const state: DeepPartial<StateSchema> = {};

    expect(getLoginState(state as StateSchema).password).toEqual('');
  });
});
