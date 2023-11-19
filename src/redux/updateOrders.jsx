import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const updateOrdersSlice = createSlice({
  name: "updateOrders",
  initialState: {
    updateOrders: 0,
  },
  reducers: {
    incrementupdateOrders: (state, { payload }) => {
      state.updateOrders += 1;
    },
  },
});

export const { incrementupdateOrders } = updateOrdersSlice.actions;

export default updateOrdersSlice.reducer;
