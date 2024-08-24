import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isLoading = true;
      state.currentUser = null;
      state.error = null;
    },
    userSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.isLoading = false;
      state.error = null;
    },
    userFailure: (state, action) => {
      state.isLoading = false;
      state.currentUser = null;
      state.error = action.payload;
    },
  },
});

export const { userStart, userFailure, userSuccess } = userSlice.actions;

export default userSlice.reducer;
