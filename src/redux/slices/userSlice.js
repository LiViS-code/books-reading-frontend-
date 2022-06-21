import { createSlice } from '@reduxjs/toolkit';
import operations from '../asyncThunks';
import {
  setTrainingBooks,
  addTrainingBook,
  deleteBook,
  countDays,
  startTraining,
  endTraining,
  resultsTraining,
  // addTraining,
  getTrainingData,
  getUserInfo,
  startNewTraining,
  changeBookStatus,
  trainingResult,
  addTrainingResult,
} from '../books/books-operations';

const initialState = {
  allBooks: null,
  trainingBooks: [],
  daysLeft: 0,
  start: null,
  end: null,
  results: [],
  training: [],
  trainingId: null,
  userInfo: null,
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
    [countDays.fulfilled](state, action) {
      state.daysLeft = action.payload;
    },
    [startTraining.fulfilled](state, action) {
      state.start = action.payload;
    },
    [endTraining.fulfilled](state, action) {
      state.end = action.payload;
    },
    [resultsTraining.fulfilled](state, action) {
      state.results = action.payload;
    },
    // [addTraining.fulfilled](state, action) {
    //   state.trainingId = action.payload.owner;
    // },
    [getTrainingData.fulfilled](state, action) {
      state.training = action.payload.training;
    },
    [getUserInfo.fulfilled](state, action) {
      state.userInfo = action.payload;
    },
    [startNewTraining.fulfilled](state, action) {
      state.training = [];
    },
    [changeBookStatus.fulfilled](state, { payload }) {
      state.training = state.training.filter(el => el._id !== payload._id);
    },
  },
});

export default userSlice.reducer;
