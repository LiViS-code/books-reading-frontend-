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
      console.log(action.payload);
      state.allBooks = action.payload.data;
      console.log(state.allBooks);
    },
  },
});
