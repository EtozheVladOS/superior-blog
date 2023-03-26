import { FC } from 'react';
import { Provider } from 'react-redux';
import { StateSchema } from '../config/StateSchema';
import { createReduxStore } from '../config/store';

interface StoreProviderProps {
  initState?: StateSchema;
}

export const StoreProvider: FC<StoreProviderProps> = ({
  children,
  initState,
}) => {
  const store = createReduxStore(initState);

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
