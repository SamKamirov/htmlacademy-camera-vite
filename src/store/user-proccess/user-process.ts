import { createSlice } from '@reduxjs/toolkit';
import { SliceNames, TOrderTypes, TSortingTypes } from '../../const';
import { setSortingType } from '../action';
import { UserProccessInitialState } from '../../types/state';

const initialState: UserProccessInitialState = {
  sorting: {
    type: TSortingTypes.ByPrice,
    order: TOrderTypes.Ascending
  },
};

const userProccess = createSlice({
  name: SliceNames.UserProccess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setSortingType, (state, action) => {
        state.sorting = action.payload;
      });
  },
});

export default userProccess.reducer;
