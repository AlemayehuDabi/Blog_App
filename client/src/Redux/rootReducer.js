import userSlice from "./userSlice/userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userSlice,
});

export default rootReducer;
