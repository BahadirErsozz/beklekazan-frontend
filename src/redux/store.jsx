import { configureStore } from "@reduxjs/toolkit";
import shoppingCartReducer from "./shoppingCart";
import isLoggedInReducer from "./isLoggedIn";
import loggedInUserReducer from "./loggedInUser";
import clickedLoginReducer from "./clickedLogin";
import clickedRegisterReducer from "./clickedRegister";
import clickedAddressReducer from "./clickedAddress";
import selectedAddressReducer from "./selectedAddress";
import updateIsLoggedInReducer from "./updateIsLoggedIn";
import updateOrdersReducer from "./updateOrders";
import updateAddressesReducer from "./updateAddresses";
import productsReducer from "./products";
import addressesReducer from "./addresses";

export const store = configureStore({
  reducer: {
    shoppingCart: shoppingCartReducer,
    isLoggedIn: isLoggedInReducer,
    loggedInUser: loggedInUserReducer,
    clickedLogin: clickedLoginReducer,
    clickedRegister: clickedRegisterReducer,
    clickedAddress: clickedAddressReducer,
    selectedAddress: selectedAddressReducer,
    updateIsLoggedIn: updateIsLoggedInReducer,
    updateOrders: updateOrdersReducer,
    updateAddresses: updateAddressesReducer,
    products: productsReducer,
    addresses: addressesReducer
  },
});
