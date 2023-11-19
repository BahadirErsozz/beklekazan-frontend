import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export const shoppingCartSlice = createSlice({
  name: "shoppingCart",
  initialState: {
    shoppingCart: [],
  },
  reducers: {
    addToShoppingCart: (state, { payload }) => {
      if (payload.itemExists) {
        const newShoppingCart = state.shoppingCart.map((obj) => {
          if (obj.id === payload.id) {
            return { ...obj, count: obj.count + 1 };
          }
          return obj;
        });
        state.shoppingCart = newShoppingCart;
      } else {
        state.shoppingCart = [
          ...state.shoppingCart,
          { ...payload.product, count: 1 },
        ];
      }
    },
    removeFromShoppingCart: (state, { payload }) => {
      const newShoppingCart = state.shoppingCart.map((obj) => {
        if (obj.id === payload.id) {
          return { ...obj, count: obj.count - 1 };
        }
        return obj;
      });
      state.shoppingCart = newShoppingCart.filter((obj) => obj.count > 0);
    },
  },
});

export const { addToShoppingCart, removeFromShoppingCart } =
  shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
