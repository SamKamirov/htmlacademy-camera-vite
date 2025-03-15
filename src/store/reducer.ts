import { combineReducers } from '@reduxjs/toolkit';
import { SliceNames } from '../const';
import appData from './app-data/app-data';

export const rootReducer = combineReducers({
  [SliceNames.AppData]: appData,
});
