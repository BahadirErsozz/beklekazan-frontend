import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const updateIsLoggedInSlice = createSlice({
  name: "updateIsLoggedIn",
  initialState: {
    updateIsLoggedIn: 0,
  },
  reducers: {
    incrementupdateIsLoggedIn: (state, { payload }) => {
      state.updateIsLoggedIn += 1;
    },
  },
});

export const { incrementupdateIsLoggedIn } = updateIsLoggedInSlice.actions;

export default updateIsLoggedInSlice.reducer;
