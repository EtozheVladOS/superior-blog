import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AddCommentFormSchema } from '../types/addCommentForm';

const initialState: AddCommentFormSchema = {
  text: '',
};

const addCommentFormSlice = createSlice({
  name: 'addCommentForm',
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload;
    },
  },
  // extraReducers: (builder) => {
  //   builder
  //     .addCase(addCommentFormSlice.pending, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = true;
  //     })
  //     .addCase(addCommentFormSlice.fulfilled, (state, action) => {
  //       state.error = undefined;
  //       state.isLoading = false;
  //     })
  //     .addCase(addCommentFormSlice.rejected, (state, action) => {
  //       state.error = action.payload as string | undefined;
  //       state.isLoading = false;
  //     });
  // },
});

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice;
