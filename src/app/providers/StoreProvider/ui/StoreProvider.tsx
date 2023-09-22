import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const store = createReduxStore(
    initState,
    asyncRedusers as ReducersMapObject<StateSchema>,
    navigate,
  );

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};
