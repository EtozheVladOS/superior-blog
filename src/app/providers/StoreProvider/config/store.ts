import { configureStore, ReducersMapObject } from '@reduxjs/toolkit';
import { counterReducer } from '@/entities/Counter';
import { StateSchema } from './StateSchema';
import { userReducer } from '@/entities/User';

export const createReduxStore = (
  initState?: StateSchema,
) => {
  const reducer: ReducersMapObject<StateSchema> = {
    counter: counterReducer,
    user: userReducer,
  };

  return configureStore<StateSchema>({
    reducer,
    devTools: __IS_DEV__,
    preloadedState: initState,
  });
};
