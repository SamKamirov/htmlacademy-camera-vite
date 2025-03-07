import { AxiosInstance } from 'axios';
import { store } from '../store';
import { TCameraList } from './camera';
import { Nullable } from 'vitest';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAsyncThunk = {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
};

export type InitialState = {
  cameras: Nullable<TCameraList>;
  isLoading: boolean;
}
