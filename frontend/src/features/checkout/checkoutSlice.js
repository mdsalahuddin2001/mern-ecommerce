import { createSlice } from "@reduxjs/toolkit";

// get shippingAddress From Local Storage
const shippingAddressFromStorage = localStorage.getItem("shippingAddress")
  ? JSON.parse(localStorage.getItem("shippingAddress"))
  : "";
// get payment method from local storage
const paymentMethodFromStorage = localStorage.getItem("paymentMethod")
  ? JSON.parse(localStorage.getItem("paymentMethod"))
  : "";

console.log(localStorage.getItem("paymentMethod"));
const initialState = {
  shippingAddress: shippingAddressFromStorage,
  paymentMethod: paymentMethodFromStorage,
};

const checkoutSlice = createSlice({
  name: "checkout",
  initialState,
  reducers: {
    updateShippingAddress: (state, action) => {
      state.shippingAddress = action.payload;
      localStorage.setItem("shippingAddress", JSON.stringify(action.payload));
    },
    updatePaymentMethod: (state, action) => {
      state.paymentMethod = action.payload;
      localStorage.setItem("paymentMethod", JSON.stringify(action.payload));
    },
  },
});

export const { updateShippingAddress, updatePaymentMethod } =
  checkoutSlice.actions;
export default checkoutSlice.reducer;
