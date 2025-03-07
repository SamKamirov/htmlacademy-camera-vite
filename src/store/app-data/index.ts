import { createSlice } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { fetchCameras } from '../../api/api-actions';
import { InitialState } from '../../types/state';

const initialState: InitialState = {
  cameras: null,
  isLoading: false
};

const appData = createSlice({
  name: SliceName.AppData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchCameras.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        state.isLoading = false;
        state.cameras = action.payload;
      });
  },
});

export default appData.reducer;
