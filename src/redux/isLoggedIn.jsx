import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const isLoggedInSlice = createSlice({
  name: "isLoggedIn",
  initialState: {
    isLoggedIn: false,
  },
  reducers: {
    setisLoggedIn: (state, { payload }) => {
      state.isLoggedIn = payload.isLoggedIn;
    },
  },
});

export const { setisLoggedIn } = isLoggedInSlice.actions;

export default isLoggedInSlice.reducer;
