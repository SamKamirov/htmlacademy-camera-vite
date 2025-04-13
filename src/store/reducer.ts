import { combineReducers } from '@reduxjs/toolkit';
import { SliceNames } from '../const';
import appData from './app-data/app-data';
import userProcess from './user-proccess/user-process';

export const rootReducer = combineReducers({
  [SliceNames.AppData]: appData,
  [SliceNames.UserProccess]: userProcess,
});
