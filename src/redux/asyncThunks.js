import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';
import { createAction } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://book-reader-team.herokuapp.com/';

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/signup', credentials);
    token.set(data.user.verificationToken);
    return data;
  } catch (error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>{' '}
      </Stack>
    );
  }
});

const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const { data } = await axios.post('/api/auth/signin', credentials);
    token.set(data.user.token);
    return data;
  } catch (error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>{' '}
      </Stack>
    );
  }
});

const googleLogin = createAction('auth/google', ({ name, email, token }) => {
  return {
    payload: { token, user: { name, email } },
  };
});

const logOut = createAsyncThunk('auth/logout', async () => {
  try {
    await axios.get('/api/auth/logout');
    token.unset();
  } catch (error) {
    return (
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>{' '}
      </Stack>
    );
  }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    token.set(persistedToken);
    try {
      const { data } = await axios.get('/api/users/current');
      return data;
    } catch (error) {
      return (
        <Stack sx={{ width: '100%' }} spacing={2}>
          <Alert severity="error">
            <AlertTitle>Error</AlertTitle>
            This is an error alert — <strong>check it out!</strong>
          </Alert>{' '}
        </Stack>
      );
    }
  }
);

const resume = createAsyncThunk(
  '/books/resume',
  async ({ bookId, text, rating }, thunkAPI) => {
    try {
      const { data } = await axios.patch(`/api/books/${bookId}/rating`, {
        resume: text,
        rating,
      });
      return data;
    } catch (error) {
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        {'Error'}
      </Stack>;
      return thunkAPI.rejectWithValue();
    }
  }
);

export const fetchResume = createAsyncThunk(
  '/books/getResume',
  async (bookId, thunkAPI) => {
    try {
      const { data } = await axios.get(`/api/books/${bookId}`);
      return data;
    } catch (error) {
      <Stack sx={{ width: '100%' }} spacing={2}>
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          This is an error alert — <strong>check it out!</strong>
        </Alert>
        {'Error'}
      </Stack>;
      return thunkAPI.rejectWithValue();
    }
  }
);

const allBooks = createAsyncThunk('user/books', async () => {
  try {
    const { data } = await axios.get('api/books/');
    return data;
  } catch (error) {
    return console.log(error);
  }
});

const operations = {
  register,
  logOut,
  logIn,
  googleLogin,
  fetchCurrentUser,
  resume,
  fetchResume,
  allBooks,
};
export default operations;
