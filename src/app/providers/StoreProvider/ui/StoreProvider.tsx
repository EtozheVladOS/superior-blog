import { FC } from 'react';
import { Provider } from 'react-redux';
import { ReducersMapObject } from '@reduxjs/toolkit';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initState?: StateSchema;
  asyncRedusers?: DeepPartial<ReducersMapObject<StateSchema>>;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initState,
  asyncRedusers,
}) => {
  const store = createReduxStore(
    initState,
    asyncRedusers as ReducersMapObject<StateSchema>,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
