import { configureStore } from '@reduxjs/toolkit';
import resumeReducer from './slices/resumeSlice';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import storage from 'redux-persist/lib/storage';
import authSlice from './slices/authSlice';
import userReducer from './slices/userSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice),
    resume: resumeReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({
      serializableCheck: false,
      // {
      //   ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      // },
    }),
  ],
});

setupListeners(store.dispatch);
export const persistor = persistStore(store);
export default store;
