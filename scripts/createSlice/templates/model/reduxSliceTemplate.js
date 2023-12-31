const firstCharUppercase = require('../../firstCharUppercase');

module.exports = (sliceName) => {
  const upperSliceName = firstCharUppercase(sliceName);

  return `import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ${upperSliceName}Schema } from '../types/${sliceName}Schema';

const initialState: ${upperSliceName}Schema = {

};

const ${sliceName}Slice = createSlice({
  name: '',
  initialState,
  reducers: {
    setState: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(${sliceName}.pending, (state, action) => {
        state.error = undefined;
        state.isLoading = true;
      })
      .addCase(${sliceName}.fulfilled, (state, action) => {
        state.error = undefined;
        state.isLoading = false;
      })
      .addCase(${sliceName}.rejected, (state, action) => {
        state.error = action.payload as string | undefined;
        state.isLoading = false;
      });
  },
});

export const {
  actions,
  reducer,
} = ${sliceName}Slice;
`;
};
