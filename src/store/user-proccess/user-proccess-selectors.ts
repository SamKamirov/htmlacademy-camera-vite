import { State } from '../../types/state';

export const getSorting = (state: State) => state.UserProccess.sorting;
export const getFilters = (state: State) => state.UserProccess.filters;
export const getPriceFilter = (state: State) => state.UserProccess.filters.priceFilter;

export const getCardItems = (state: State) => state.UserProccess.card;
