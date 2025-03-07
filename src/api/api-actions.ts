import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCameraList } from '../types/camera';
import { TAsyncThunk } from '../types/state';
import { SliceName } from '../const';

export const fetchCameras = createAsyncThunk<TCameraList, undefined, TAsyncThunk>(
  `${SliceName.AppData}/fetchCameras`,
  async (_, { extra: api }) => {
    const { data } = await api.get<TCameraList>('/cameras');
    return data;
  }
);

