import { DeepPartial } from '@reduxjs/toolkit';
import { LoginSchema } from '@/features/AuthByUsername/model/types/loginSchema';
import { loginActions, loginReducer } from './loginSlice';

describe('loginSlice', () => {
  test('set username', async () => {
    const state: DeepPartial<LoginSchema> = { username: 'test' };
    expect(loginReducer(state as LoginSchema, loginActions.setUsername('new_value')))
      .toEqual({ username: 'new_value' });
  });

  test('set password', async () => {
    const state: DeepPartial<LoginSchema> = { password: 'test' };
    expect(loginReducer(state as LoginSchema, loginActions.setPassword('new_value')))
      .toEqual({ password: 'new_value' });
  });
});
