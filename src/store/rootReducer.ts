// rootReducer.ts

import {combineReducers} from '@reduxjs/toolkit';
import authSlice from './slices/authSlice';
const rootReducer = combineReducers({
  auth: authSlice,
  // Add more slices here if you have multiple slices in your app
});

export default rootReducer;
