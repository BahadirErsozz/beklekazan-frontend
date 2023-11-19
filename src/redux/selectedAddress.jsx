import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const selectedAddressSlice = createSlice({
  name: "selectedAddress",
  initialState: {
    selectedAddress: 0,
  },
  reducers: {
    setselectedAddress: (state, { payload }) => {
      state.selectedAddress = payload.selectedAddress;
    },
  },
});

export const { setselectedAddress } = selectedAddressSlice.actions;

export default selectedAddressSlice.reducer;
