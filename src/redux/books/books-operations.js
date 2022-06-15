import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'https://book-reader-team.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export const addBook = createAsyncThunk(
  'books/addBook',
  async (values, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    token.set(persistedToken);
    const book = {
      title: values.title,
      author: values.author,
      year: values.year,
      pages: values.pages,
    };
    try {
      const { data } = await axios.post('/api/books', book);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
