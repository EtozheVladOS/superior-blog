import { Reducer } from '@reduxjs/toolkit';
import { FC, useEffect } from 'react';
import { useStore } from 'react-redux';
import { ReduxStoreWithManager } from '@/app/providers/StoreProvider';
import { StateSchema, StateSchemaKey } from '@/app/providers/StoreProvider/config/StateSchema';
import { useAppDispatch } from '../../hooks/useAppDispatch/useAppDispatch';

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>;
};

export interface DynamicReducerLoaderProps {
  reducersList: ReducersList;
  removeAfterUnmount?: boolean;
}

export const DynamicReducerLoader: FC<DynamicReducerLoaderProps> = ({
  children,
  reducersList,
  removeAfterUnmount = true,
}) => {
  const dispatch = useAppDispatch();
  const store = useStore() as ReduxStoreWithManager;

  useEffect(() => {
    const reducersEntries = Object.entries(reducersList);
    reducersEntries.forEach(([key, reducer]) => {
      const isMounted = store.reducerManager.getReducerMap()[key as StateSchemaKey];

      if (!isMounted) {
        store.reducerManager.add(key as StateSchemaKey, reducer);
        dispatch({ type: `@INIT ${key}` });
      }
    });

    return () => {
      if (removeAfterUnmount) {
        reducersEntries.forEach(([key]) => {
          store.reducerManager.remove(key as StateSchemaKey);
          dispatch({ type: `@DESTROY ${key}` });
        });
      }
    };
  }, []);

  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <>{children}</>;
};
