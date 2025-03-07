import { combineReducers } from '@reduxjs/toolkit';
import { SliceName } from '../const';
import appData from './app-data';

export const rootReducer = combineReducers({
  [SliceName.AppData]: appData,
});
