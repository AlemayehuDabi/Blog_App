import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: null,
  isLoading: false,
  error: null,
  success: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userStart: (state) => {
      state.isLoading = true;
      state.currentUser = null;
      state.error = null;
      state.success = null;
    },
    userSuccess: (state, action) => {
      state.success = action.payload;
      state.isLoading = false;
    },
    userFailure: (state, action) => {
      state.isLoading = false;
      state.success = null;
      state.currentUser = null;
      state.error = action.payload;
    },
  },
});

export const { userStart, userFailure, userSuccess } = userSlice.actions;

export default userSlice.reducer;
