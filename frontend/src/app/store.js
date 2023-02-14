import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import utilsReducer from "../features/utils/utilsSlice";
import { apiSlice } from "../features/api/apiSlice";
import cartReducer from "../features/cart/cartSlice";
import checkoutReducer from "../features/checkout/checkoutSlice";
const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    cart: cartReducer,
    checkout: checkoutReducer,
    auth: authReducer,
    utils: utilsReducer,
  },

  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddlewares) =>
    getDefaultMiddlewares().concat(apiSlice.middleware),
});

export default store;
