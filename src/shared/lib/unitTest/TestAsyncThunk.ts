import { Dispatch, AsyncThunkAction } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';

type ActionCreatorType<ReturnValue, Arg, RejectValue> = (arg: Arg) =>
  AsyncThunkAction<ReturnValue, Arg, { rejectValue: RejectValue }>;

export class TestAsyncThunk<ReturnValue, Arg, RejectValue> {
  actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>;

  dispatch: Dispatch;

  getState: () => StateSchema;

  constructor(actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>) {
    this.actionCreator = actionCreator;
    // dispatch, getState - mock for redux working
    this.dispatch = jest.fn();
    this.getState = jest.fn();
  }

  async callThunk(arg: Arg) {
    // get action from actionCreator
    const action = this.actionCreator(arg);
    // get thunk to call it in testing file
    const thunk = await action(this.dispatch, this.getState, undefined);
    return thunk;
  }
}
