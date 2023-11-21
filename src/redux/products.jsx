import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
  },
  reducers: {
    addToProducts: (state, { payload }) => {
      state.products = [...state.products, payload.product]
    },
    resetProducts: (state, { payload }) => {
        state.products = []
    },
    getProductById: (state, { payload }) => {
        return state.products?.find((product) => product.id == payload.id)
    },
  },
});

export const { addToProducts, resetProducts, getProductById } =
productsSlice.actions;

export default productsSlice.reducer;
