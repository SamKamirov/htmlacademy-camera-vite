import { configureStore } from '@reduxjs/toolkit';
import { createApi } from '../api';
import { rootReducer } from './reducer';

const api = createApi();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      thunk: {
        extraArgument: api,
      },
    }),
});

export const setupStore = (preloadedState?: Partial<ReturnType<typeof rootReducer>>) => configureStore({
  reducer: rootReducer,
  preloadedState
});
