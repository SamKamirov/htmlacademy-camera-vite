import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import appData from './app-data/app-data';
import userProcess from './user-proccess/user-process';

export const rootReducer = combineReducers({
  [SliceName.AppData]: appData,
  [SliceName.UserProccess]: userProcess,
});
