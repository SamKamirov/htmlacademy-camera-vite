import { createAsyncThunk } from '@reduxjs/toolkit';
import { TCamera, TCameraList } from '../types/camera';
import { TAsyncThunk } from '../types/state';
import { SliceNames } from '../const';
import { TReviewList } from '../types/review';

export const fetchCameras = createAsyncThunk<TCameraList, undefined, TAsyncThunk>(
  `${SliceNames.AppData}/fetchCameras`,
  async (_, { extra: api }) => {
    const { data } = await api.get<TCameraList>('/cameras');
    return data;
  }
);

export const fetchCamera = createAsyncThunk<TCamera, string, TAsyncThunk>(
  `${SliceNames.AppData}/fetchCamera`,
  async (id: string, { extra: api }) => {
    const { data } = await api.get<TCamera>(`/cameras/${id}`);
    return data;
  }
);

export const fetchCameraReviews = createAsyncThunk<TReviewList, string, TAsyncThunk>(
  `${SliceNames.AppData}/fetchCameraReviews`,
  async (id: string, { extra: api }) => {
    const { data } = await api.get<TReviewList>(`/cameras/${id}/reviews`);
    return data;
  }
);
