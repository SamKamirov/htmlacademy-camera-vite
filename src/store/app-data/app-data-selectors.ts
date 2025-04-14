import { createSelector } from '@reduxjs/toolkit';
import { SliceName } from '../../const';
import { State } from '../../types/state';


const selectCameras = (state: State) => state[SliceName.AppData].cameras;

export const getCameras = createSelector([selectCameras], (cameras) => cameras);
export const getIsLoading = (state: State) => state[SliceName.AppData].isLoading;
export const getIsModalOpen = (state: State) => state[SliceName.AppData].isModalOpen;
export const getSelectedCamera = (state: State) => state[SliceName.AppData].selectedCamera;
export const getReviews = (state: State) => state[SliceName.AppData].cameraReviews;
