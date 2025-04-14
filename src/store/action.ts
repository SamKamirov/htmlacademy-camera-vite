import { createAction } from '@reduxjs/toolkit';
import { TCamera } from '../types/camera';
import { TSorting } from '../types/state';

export const setModalIsOpen = createAction<boolean>('app/setModalIsOpen');
export const setSelectedCamera = createAction<TCamera>('app/setSelectedCamera');

export const setSortingType = createAction<TSorting>('user/setSortingType');

export const setCategoryFilter = createAction<string>('user/setCategoryFilter');
export const setCameraTypeFilter = createAction<string>('user/setCameraTypeFilter');
export const setLevelFilter = createAction<string>('user/setLevelFilter');
export const setPriceFilter = createAction<string>('user/setPriceFilter');
