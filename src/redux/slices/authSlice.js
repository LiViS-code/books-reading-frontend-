import { createSlice } from '@reduxjs/toolkit';
import operations from '../asyncThunks';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRegistered: false,
  isFetchCurrentUser: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [operations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.user.verificationToken;
      state.isRegistered = true;
    },
    [operations.register.pending](state) {
      state.name = null;
      state.email = null;
      state.isRegistered = false;
    },
    [operations.register.rejected](state) {
      state.name = null;
      state.email = null;
      state.isRegistered = false;
    },
    [operations.logIn.fulfilled](state, action) {
      state.user = action.payload;
      state.token = action.payload.user.token;
      state.isLoggedIn = true;
    },
    [operations.googleLogin]: (state, { payload }) => ({
      ...state,
      isLoggedIn: true,
      user: payload.user,
      token: payload.token,
    }),
    [operations.logOut.fulfilled](state) {
      state.user = { name: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
    },
    [operations.fetchCurrentUser.pending](state) {
      state.isFetchCurrentUser = true;
    },
    [operations.fetchCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
    },
    [operations.fetchCurrentUser.rejected](state) {
      state.isFetchCurrentUser = false;
    },
  },
});

export default authSlice.reducer;
