import { createSlice } from '@reduxjs/toolkit';
import { SliceName, OrderType, SortingType, Filter } from '../../const';
import {
  resetFilters,
  setCameraTypeFilter,
  setCategoryFilter,
  setLevelFilter,
  setMaxPriceFilter,
  setMinPriceFilter,
  setPriceFilter,
  setSortingType,
} from '../action';
import { UserProccessInitialState } from '../../types/state';
import { fetchCameras } from '../../api/api-actions';
import { setMaxPrice, setMinPrice } from '../../services/price';

const initialState: UserProccessInitialState = {
  sorting: {
    type: SortingType.ByPrice,
    order: OrderType.Ascending,
  },
  filters: {
    priceFilter: { minPrice: 0, maxPrice: 0 },
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
        state.filters.priceFilter = action.payload;
      })
      .addCase(setMinPriceFilter, (state, action) => {
        state.filters.priceFilter.minPrice = action.payload;
      })
      .addCase(setMaxPriceFilter, (state, action) => {
        state.filters.priceFilter.maxPrice = action.payload;
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
        if (!state.filters.equipmentFilters.level.includes(action.payload)) {
          state.filters.equipmentFilters.level.push(action.payload);
        } else {
          const index = state.filters.equipmentFilters.level.indexOf(
            action.payload
          );
          state.filters.equipmentFilters.level.splice(index, 1);
        }
      })
      .addCase(resetFilters, (state) => {
        state.filters = initialState.filters;
      })
      .addCase(fetchCameras.fulfilled, (state, action) => {
        const cameraWithMinPrice = action.payload.reduce((min, item) => item.price < min.price ? item : min);
        const cameraWithMaxPrice = action.payload.reduce((max, item) => item.price > max.price ? item : max);

        setMinPrice(cameraWithMinPrice.price.toString());
        setMaxPrice(cameraWithMaxPrice.price.toString());

        state.filters.priceFilter = {minPrice: cameraWithMinPrice.price, maxPrice: cameraWithMaxPrice.price};
      });
  },
});

export default userProccess.reducer;
