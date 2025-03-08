import { createAction } from '@reduxjs/toolkit';
import { TCamera } from '../types/camera';

export const setModalIsOpen = createAction<boolean>('app/setModalIsOpen');
export const setSelectedCamera = createAction<TCamera>('app/setSelectedCamera');
