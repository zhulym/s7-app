import { configureStore } from '@reduxjs/toolkit';
import linesReducer from './slices/linesSlice';
import usersReducer from './slices/usersSlice';

export const store = configureStore({
  reducer: {
    lines: linesReducer,
    users: usersReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
