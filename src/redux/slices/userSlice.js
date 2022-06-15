import { createSlice } from '@reduxjs/toolkit';
import operations from '../asyncThunks';

const initialState = {
  allBooks: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [operations.allBooks.fulfilled](state, action) {
      state.allBooks = action.payload.data.books;
    },
  },
});

export default userSlice.reducer;
