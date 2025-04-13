import { createAction } from '@reduxjs/toolkit';
import { TCamera } from '../types/camera';
import { TSortingTypes } from '../const';

export const setModalIsOpen = createAction<boolean>('app/setModalIsOpen');
export const setSelectedCamera = createAction<TCamera>('app/setSelectedCamera');

export const setSortingType = createAction<TSortingTypes[]>('app/setSortingType');
