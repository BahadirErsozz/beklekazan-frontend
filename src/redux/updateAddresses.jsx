import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const updateAddressesSlice = createSlice({
  name: "updateAddresses",
  initialState: {
    updateAddresses: 0,
  },
  reducers: {
    incrementupdateAddresses: (state, { payload }) => {
      state.updateAddresses += 1;
    },
  },
});

export const { incrementupdateAddresses } = updateAddressesSlice.actions;

export default updateAddressesSlice.reducer;
