import { createSlice } from '@reduxjs/toolkit';
import { SliceName, OrderType, SortingType, Filter } from '../../const';
import {
	setCameraTypeFilter,
	setCategoryFilter,
	setLevelFilter,
	setPriceFilter,
	setSortingType,
} from '../action';
import { UserProccessInitialState } from '../../types/state';

const initialState: UserProccessInitialState = {
	sorting: {
		type: SortingType.ByPrice,
		order: OrderType.Ascending,
	},
	filters: {
		priceFilter: [0, 0],
		equipmentFilters: {
			category: Filter.Category.All,
			cameraType: [],
			level: [],
		},
	},
};

const userProccess = createSlice({
	name: SliceName.UserProccess,
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(setSortingType, (state, action) => {
				state.sorting = action.payload;
			})
			.addCase(setPriceFilter, (state, action) => {
				state.filters.equipmentFilters.category = action.payload;
			})
			.addCase(setCategoryFilter, (state, action) => {
				state.filters.equipmentFilters.category = action.payload;
			})
			.addCase(setCameraTypeFilter, (state, action) => {
				if (!state.filters.equipmentFilters.cameraType.includes(action.payload)) {
					state.filters.equipmentFilters.cameraType.push(action.payload);
				} else {
					const index = state.filters.equipmentFilters.cameraType.indexOf(
						action.payload
					);
					state.filters.equipmentFilters.cameraType.splice(index, 1);
				}
			})
			.addCase(setLevelFilter, (state, action) => {
				state.filters.equipmentFilters.category = action.payload;
			});
	},
});

export default userProccess.reducer;
