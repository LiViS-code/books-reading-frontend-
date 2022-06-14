import { combineReducers } from '@reduxjs/toolkit';
import { addBook } from './books-operations';
import { createReducer } from '@reduxjs/toolkit';

const items = createReducer([], {
  [addBook.fulfilled]: (state, { payload }) => [payload, ...state],
});

export default combineReducers({ items });
