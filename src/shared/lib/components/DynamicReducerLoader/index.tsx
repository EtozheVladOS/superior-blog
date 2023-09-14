import { Reducer } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useDispatch, useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';

export type ReducersList = {
  [key in StateSchemaKey]?: Reducer;
};

type ReducersEntries = [StateSchemaKey, Reducer];

export interface DynamicReducerLoaderProps {
  reducersList: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducersList,
  removeAfterUnmount,
}) => {
  const dispatch = useDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const reducersEntries = Object.entries(reducersList);
    reducersEntries.forEach(([key, reducer]: ReducersEntries) => {
      store.reducerManager.add(key, reducer);
      dispatch({ type: `@INIT ${key}` });
    });

    return () => {
      if (removeAfterUnmount) {
        reducersEntries.forEach(([key]: ReducersEntries) => {
          store.reducerManager.remove(key);
          dispatch({ type: `@DESTROY ${key}` });
        });
      }
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
