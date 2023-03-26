import { createSelector } from '@reduxjs/toolkit';
import { getCounterState } from '../getCounterState/getCounterState';

export const getCounterValue = createSelector(
  getCounterState,
  (counter) => counter.value,
);
