import { configureStore } from '@reduxjs/toolkit';
import authDataReducer from '../features/authData/authDataSlice';
import langReducer from '../features/langData/langSlice'

export const store = configureStore({
  reducer: {
    authData: authDataReducer,
    language: langReducer,
  },
});