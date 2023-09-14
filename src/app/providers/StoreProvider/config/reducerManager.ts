import {
  AnyAction, Reducer, ReducersMapObject, combineReducers,
} from '@reduxjs/toolkit';
import { ReducerManager, StateSchema, StateSchemaKey } from './StateSchema';

export function createReducerManager(
  initialReducers: ReducersMapObject<StateSchema>,
): ReducerManager {
  const reducers = { ...initialReducers };

  let localCombinedReducer = combineReducers(reducers);

  let keysToRemove: StateSchemaKey[] = [];

  return {
    getReducerMap: () => reducers,
    reduce: (state: StateSchema, action: AnyAction) => {
      if (keysToRemove.length > 0) {
        state = { ...state };

        keysToRemove.forEach((key) => {
          delete state[key];
        });

        keysToRemove = [];
      }

      return localCombinedReducer(state, action);
    },

    add: (key: StateSchemaKey, reducer: Reducer) => {
      if (!key || reducers[key]) {
        return;
      }

      reducers[key] = reducer;
      localCombinedReducer = combineReducers(reducers);
    },

    remove: (key: StateSchemaKey) => {
      if (!key || !reducers[key]) {
        return;
      }

      delete reducers[key];
      keysToRemove.push(key);
      localCombinedReducer = combineReducers(reducers);
    },
  };
}
