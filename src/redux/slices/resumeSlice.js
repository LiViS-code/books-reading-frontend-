import { createSlice } from '@reduxjs/toolkit';
import operations from '../asyncThunks';

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    values: [],
  },
  extraReducers: {
    [operations.resume.fulfilled](state, action) {
      const index = state.values.findIndex(
        book => book.bookId === action.payload.bookId
      );
      state.values[index].text = action.payload.text;
      state.values[index].rating = action.payload.rating;
    },
    [operations.fetchResume.fulfilled]: (state, action) => {
      state.values = action.payload.values;
    },
  },
});

export default resumeSlice.reducer;
