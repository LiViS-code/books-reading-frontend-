import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slices/resumeSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';

export const store = configureStore({
  reducer: {
    resume: resumeReducer,
  },
});

setupListeners(store.dispatch);
export default store;
