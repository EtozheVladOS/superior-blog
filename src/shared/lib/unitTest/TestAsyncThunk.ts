import { AsyncThunkAction } from '@reduxjs/toolkit/dist/createAsyncThunk';
import axios, { AxiosStatic } from 'axios';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ThunkExtraArg } from '@/app/providers/StoreProvider/config/StateSchema';

jest.mock('axios');

const mockedAxios = jest.mocked(axios, true);

type ActionCreatorType<ReturnValue, Arg, RejectValue> = (arg: Arg) =>
  AsyncThunkAction<
    ReturnValue,
    Arg,
    {
      rejectValue: RejectValue,
      extra: ThunkExtraArg,
      state: StateSchema
    }>;

export class TestAsyncThunk<ReturnValue, Arg, RejectValue> {
  actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>;

  dispatch: jest.MockedFn<any>;

  navigate: jest.MockedFn<any>;

  api: jest.MockedFunctionDeep<AxiosStatic>;

  getState: () => StateSchema;

  constructor(
    actionCreator: ActionCreatorType<ReturnValue, Arg, RejectValue>,
    state?: DeepPartial<StateSchema>,
  ) {
    this.actionCreator = actionCreator;
    // dispatch, getState, navigate - mock for redux working
    this.dispatch = jest.fn();
    this.getState = jest.fn(() => state as StateSchema);
    this.navigate = jest.fn();
    this.api = mockedAxios;
  }

  async callThunk(arg: Arg) {
    // get action from actionCreator
    const action = this.actionCreator(arg);
    // get thunk to call it in testing file
    const thunk = await action(
      this.dispatch,
      this.getState,
      { api: this.api, navigate: this.navigate },
    );
    return thunk;
  }
}
