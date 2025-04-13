import { createSlice } from '@reduxjs/toolkit';
import { SliceNames, TSortingTypes } from '../../const';
import { setSortingType } from '../action';
import { UserProccessInitialState } from '../../types/state';

const PRIMARY_INDEX = 0;
const SECONDARY_INDEX = 0;

const initialState: UserProccessInitialState = {
  sortingType: [TSortingTypes.ByPrice, TSortingTypes.Ascending],
};

const userProccess = createSlice({
  name: SliceNames.UserProccess,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(setSortingType, (state, action) => {
        state.sortingType = action.payload;
      });
  },
});

export default userProccess.reducer;
