import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { fetchCamera, fetchCameraReviews, fetchCameras } from '../../api/api-actions';
import { InitialState } from '../../types/state';
import { setModalIsOpen, setSelectedCamera, setSuccessModalOpen } from '../action';

const initialState: InitialState = {
  cameras: null,
  isLoading: false,
  isModalOpen: false,
  isSuccessModalOpen: false,
  selectedCamera: null,
  cameraReviews: null,
};

const appData = createSlice({
  name: SliceName.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.isLoading = true;
        state.cameras = null;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cameras = action.payload;
      })
      .addCase(fetchCameras.rejected, (state) => {
        state.isLoading = false;
        state.cameras = null;
      })
      .addCase(setModalIsOpen, (state, action) => {
        state.isModalOpen = action.payload;
      })
      .addCase(setSuccessModalOpen, (state, action) => {
        state.isSuccessModalOpen = action.payload;
      })
      .addCase(setSelectedCamera, (state, action) => {
        state.selectedCamera = action.payload;
      })
      .addCase(fetchCamera.pending, (state) => {
        state.isLoading = true;
        state.selectedCamera = null;
      })
      .addCase(fetchCamera.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCamera = action.payload;
      })
      .addCase(fetchCamera.rejected, (state) => {
        state.isLoading = false;
        state.selectedCamera = null;
      })
      .addCase(fetchCameraReviews.pending, (state) => {
        state.isLoading = true;
        state.cameraReviews = null;
      })
      .addCase(fetchCameraReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cameraReviews = action.payload;
      })
      .addCase(fetchCameraReviews.rejected, (state) => {
        state.isLoading = false;
        state.cameraReviews = null;
      });
  },
});

export default appData.reducer;
