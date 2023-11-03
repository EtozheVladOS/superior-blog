import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ScrollRestorationSchema } from '../types/ScrollRestoration';

const initialState: ScrollRestorationSchema = {
  scroll: {},
};

const ScrollRestorationSlice = createSlice({
  name: 'scrollRestoration',
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string, position: number }>,
    ) => {
      state.scroll[action.payload.path] = action.payload.position;
    },
  },
});

export const {
  actions: scrollRestorationActions,
  reducer: scrollRestorationReducer,
} = ScrollRestorationSlice;
