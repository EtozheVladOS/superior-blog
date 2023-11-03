import { createSelector } from '@reduxjs/toolkit';
import { StateSchema } from '@/app/providers/StoreProvider';
import { ScrollSchema } from '../types/ScrollRestoration';

export const getSctollRestorationScroll = (state: StateSchema) => state.sctollRestoration.scroll;

export const getSctollRestorationByPath = createSelector(
  getSctollRestorationScroll,
  (state: StateSchema, path: string) => path,
  (scroll: ScrollSchema, path) => scroll[path] ?? 0,
);
