import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: null,
};

const tabSearch = createSlice({
  name: "search",
  initialState,
  reducers: {
    tabParams: (state, actions) => {
      state.tab = actions.payload;
    },
  },
});

export const { tabParams } = tabSearch.actions;

export default tabSearch.reducer;
