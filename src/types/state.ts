import { AxiosInstance } from 'axios';
import { store } from '../store';
import { TCamera, TCameraList } from './camera';
import { Nullable } from 'vitest';
import { TReviewList } from './review';
import { OrderType, SortingType } from '../const';

export type AppDispatch = typeof store.dispatch;

export type State = ReturnType<typeof store.getState>;

export type TAsyncThunk = {
	dispatch: AppDispatch;
	state: State;
	extra: AxiosInstance;
};

export type InitialState = {
	cameras: Nullable<TCameraList>;
	isLoading: boolean;
	isModalOpen: boolean;
	selectedCamera: Nullable<TCamera>;
	cameraReviews: Nullable<TReviewList>;
};

export type TSorting = {
	type: SortingType;
	order: OrderType;
};

export type TFilters = {
	priceFilter: [number, number];
	equipmentFilters: {
		category: string;
		cameraType: string[];
		level: string[];
	};
};

export type UserProccessInitialState = {
	sorting: TSorting;
	filters: TFilters;
};
