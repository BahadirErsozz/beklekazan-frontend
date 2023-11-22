import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const ordersSlice = createSlice({
  name: "orders",
  initialState: {
    orders: [],
  },
  reducers: {
    setOrders: (state, { payload }) => {
      state.orders = payload.orders
    },
  },
});

export const { setOrders } =
ordersSlice.actions;

export default ordersSlice.reducer;
