import { createAction } from '@reduxjs/toolkit';
import { TCamera } from '../types/camera';
import { TSorting } from '../types/state';

export const setModalIsOpen = createAction<boolean>('app/setModalIsOpen');
export const setSelectedCamera = createAction<TCamera>('app/setSelectedCamera');

export const setSortingType = createAction<TSorting>('app/setSortingType');
