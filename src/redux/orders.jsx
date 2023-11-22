import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const addressesSlice = createSlice({
  name: "orders",
  initialState: {
    addresses: [],
  },
  reducers: {
    setAddresses: (state, { payload }) => {
      state.addresses = payload.address
    },
  },
});

export const { setAddresses } =
addressesSlice.actions;

export default addressesSlice.reducer;
