import { createAction } from '@reduxjs/toolkit';
import { TCamera, TPriceFilter } from '../types/camera';
import { TSorting } from '../types/state';

export const setModalIsOpen = createAction<boolean>('app/setModalIsOpen');
export const setSuccessModalOpen = createAction<boolean>('app/setSuccessModalOpen');
export const setSelectedCamera = createAction<TCamera>('app/setSelectedCamera');

export const setSortingType = createAction<TSorting>('user/setSortingType');

export const setCategoryFilter = createAction<string>('user/setCategoryFilter');
export const setCameraTypeFilter = createAction<string>('user/setCameraTypeFilter');
export const setLevelFilter = createAction<string>('user/setLevelFilter');
export const setPriceFilter = createAction<TPriceFilter>('user/setPriceFilter');
export const setMinPriceFilter = createAction<number>('user/setMinPriceFilter');
export const setMaxPriceFilter = createAction<number>('user/setMaxPriceFilter');
export const resetFilters = createAction('user/resetFilters');

export const addCardItem = createAction<TCamera>('user/addCardItem');
export const initCardItems = createAction<TCamera[]>('user/initCardItems');
export const deleteCardItem = createAction<TCamera>('user/deleteCardItem');
export const deleteAllItemsById = createAction<string>('user/deteleAllItemsById');
