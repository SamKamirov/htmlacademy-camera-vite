import { State } from '../../types/state';

export const getSorting = (state: State) => state.UserProccess.sorting;
export const getFilters = (state: State) => state.UserProccess.filters;
