import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const clickedLoginSlice = createSlice({
  name: "clickedLogin",
  initialState: {
    clickedLogin: false,
  },
  reducers: {
    setclickedLogin: (state, { payload }) => {
      state.clickedLogin = payload.clickedLogin;
    },
  },
});

export const { setclickedLogin } = clickedLoginSlice.actions;

export default clickedLoginSlice.reducer;
