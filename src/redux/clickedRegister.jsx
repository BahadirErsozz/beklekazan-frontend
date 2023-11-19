import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const clickedRegisterSlice = createSlice({
  name: "clickedRegister",
  initialState: {
    clickedRegister: false,
  },
  reducers: {
    setclickedRegister: (state, { payload }) => {
      state.clickedRegister = payload.clickedRegister;
    },
  },
});

export const { setclickedRegister } = clickedRegisterSlice.actions;

export default clickedRegisterSlice.reducer;
