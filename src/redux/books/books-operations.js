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

export const addBook = createAsyncThunk('books/addBook', async credentials => {
  try {
    const { data } = await axios.post('/api/books', credentials);
    token.set(data.user.token);
    return data;
  } catch (error) {
    console.log(error);
  }
});

export const setTrainingBooks = createAsyncThunk('books/set', async list => {
  return list;
});

export const addTrainingBook = createAsyncThunk(
  'books/addTraining',
  async book => {
    return book;
  }
);

export const deleteBook = createAsyncThunk('books/delete', async id => {
  return id;
});

export const countDays = createAsyncThunk('books/days', async days => {
  return days;
});

export const startTraining = createAsyncThunk('training/start', async data => {
  return data;
});

export const endTraining = createAsyncThunk('training/end', async data => {
  return data;
});

export const resultsTraining = createAsyncThunk(
  'training/results',
  async data => {
    return data;
  }
);

export const addTraining = createAsyncThunk(
  'training/addData',
  async ({ start, end }) => {
    try {
      const { data } = await axios.post('api/training/', {
        start: start,
        end: end,
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const addBookToTraining = createAsyncThunk(
  'training/addBook',
  async bookId => {
    try {
      const { data } = await axios.patch(`api/books/${bookId}/wish`, {
        wish: 'Reading now',
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const deleteBookFromTraining = createAsyncThunk(
  'training/deleteBook',
  async bookId => {
    try {
      const { data } = await axios.patch(`api/books/${bookId}/wish`, {
        wish: 'Going to read',
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const addResultToTraining = createAsyncThunk(
  'training/addResult',
  async ({ id, date, page }) => {
    try {
      const { data } = await axios.post(`api/training/${id}`, {
        result: [{ date: date, page: page }],
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const getTrainingData = createAsyncThunk('training/get', async () => {
  try {
    const { data } = await axios.get(`api/training/`);
    if (data.training.length === 0) {
      return [];
    }
    let training = data.training[0];
    data.training.map(el => {
      if (new Date(el.start) > new Date(training.start)) {
        training = el;
      }
    });
    return training;
  } catch (error) {
    return console.log(error);
  }
});

export const getUserInfo = createAsyncThunk('api/users/info', async () => {
  try {
    const { data } = await axios.get(`api/users/info`);
    return data;
  } catch (error) {
    return console.log(error);
  }
});

export const startNewTraining = createAsyncThunk(
  'api/users/newTraining',
  async data => {
    try {
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);

export const changeBookStatus = createAsyncThunk(
  'api/books/changeStatus',
  async id => {
    try {
      const { data } = await axios.patch(`api/books/${id}/wish`, {
        wish: 'Already read',
      });
      return data;
    } catch (error) {
      return console.log(error);
    }
  }
);
