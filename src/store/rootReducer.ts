// rootReducer.ts

import { combineReducers } from "@reduxjs/toolkit";
import contactSlice from "./slices/contactSlice";
const rootReducer = combineReducers({
  contact: contactSlice,
  // Add more slices here if you have multiple slices in your app
});

export default rootReducer;
