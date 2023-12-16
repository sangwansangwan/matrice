import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const token = localStorage.getItem('token') || null;

export const store = configureStore({
  reducer: rootReducer,
  preloadedState: {
    auth: {
      isLoading: false,
      token: token, // Load the user token from local storage, or set it to null if it's not found
      userId:''
    },
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
