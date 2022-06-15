import { createSlice } from '@reduxjs/toolkit';
import add from 'date-fns/esm/add/index';
import operations from '../asyncThunks';
import {
  setTrainingBooks,
  addTrainingBook,
  deleteBook,
} from '../books/books-operations';

const initialState = {
  allBooks: null,
  trainingBooks: [],
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: {
    [operations.allBooks.fulfilled](state, action) {
      state.allBooks = action.payload.data.books;
    },
    [setTrainingBooks.fulfilled](state, action) {
      state.trainingBooks = action.payload;
    },
    [addTrainingBook.fulfilled](state, action) {
      state.trainingBooks = [...state.trainingBooks, action.payload];
    },
    [deleteBook.fulfilled](state, action) {
      state.trainingBooks = state.trainingBooks.filter(
        b => b._id !== action.payload
      );
    },
  },
});

export default userSlice.reducer;
