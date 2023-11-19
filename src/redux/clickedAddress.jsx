import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const clickedAddressSlice = createSlice({
  name: "clickedAddress",
  initialState: {
    clickedAddress: false,
  },
  reducers: {
    setclickedAddress: (state, { payload }) => {
      state.clickedAddress = payload.clickedAddress;
    },
  },
});

export const { setclickedAddress } = clickedAddressSlice.actions;

export default clickedAddressSlice.reducer;
