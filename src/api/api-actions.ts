import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCameraList } from '../types/camera';
import { TAsyncThunk } from '../types/state';
import { SliceNames } from '../const';

export const fetchCameras = createAsyncThunk<TCameraList, undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchCameras`,
  async (_, { extra: api }) => {
    const { data } = await api.get<TCameraList>('/cameras');
    return data;
  }
);

