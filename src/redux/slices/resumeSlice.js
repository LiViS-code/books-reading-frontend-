import { createSlice } from '@reduxjs/toolkit';

export const resumeSlice = createSlice({
  name: 'resume',
  initialState: {
    values: null,
  },
  reducers: {
    resume: (state, action) => {
      state.values = action.payload.values;
    },
    ratingStars: (state, action) => {
      state.values = action.payload.values;
    },
  },
});

export const { resume, ratingStars } = resumeSlice.actions;

export default resumeSlice.reducer;
