import searchSlice from "./Search/searchSlice";
import themeSlice from "./theme/themeSlice";
import userSlice from "./user/userSlice";
import { combineReducers } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  user: userSlice,
  theme: themeSlice,
  search: searchSlice,
});

export default rootReducer;
