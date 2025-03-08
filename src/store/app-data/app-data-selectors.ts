import { createSelector } from '@reduxjs/toolkit';
import { SliceNames } from '../../const';
import { State } from '../../types/state';


const selectCameras = (state: State) => state[SliceNames.AppData].cameras;

export const getCameras = createSelector([selectCameras], (cameras) => cameras);
export const getIsLoading = (state: State) => state[SliceNames.AppData].isLoading;
export const getIsModalOpen = (state: State) => state[SliceNames.AppData].isModalOpen;
export const getSelectedCamera = (state: State) => state[SliceNames.AppData].selectedCamera;
