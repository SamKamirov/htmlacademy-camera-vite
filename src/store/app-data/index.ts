import { createSlice } from '@reduxjs/toolkit';
import { SliceNames } from '../../const';
import { fetchCameras } from '../../api/api-actions';
import { InitialState } from '../../types/state';
import { setModalIsOpen, setSelectedCamera } from '../action';

const initialState: InitialState = {
  cameras: null,
  isLoading: false,
  isModalOpen: false,
  selectedCamera: null
};

const appData = createSlice({
  name: SliceNames.AppData,
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
      .addCase(setSelectedCamera, (state, action) => {
        state.selectedCamera = action.payload;
      });

  },
});

export default appData.reducer;
