import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
const getCartFromStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};
// initial state
const initialState = {
  cartItems: getCartFromStorage(),
  totalItems: 0,
  totalPrice: 0,
};

// cart slice
const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    /*____ Add Item To The Cart ____*/
    addToCart: (state, action) => {
      // check for if item is already in cart
      const cartExist = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      // If item already exists in cart just increase the item amount
      if (cartExist) {
        state.cartItems = state.cartItems.map((cartItem) => {
          if (cartItem._id === cartExist._id) {
            let newAmount = cartItem.amount + 1;
            // increase amount only if it is less than stock/max
            if (newAmount > cartItem.max) {
              newAmount = cartItem.max;
            }
            return { ...cartItem, amount: newAmount };
          } else {
            return cartItem;
          }
        });
      } else {
        // add to cart items array if not exists before
        state.cartItems.push({
          _id: action.payload._id,
          name: action.payload.name,
          image: action.payload.image,
          price: action.payload.price,
          amount: 1,
          max: action.payload.countInStock,
        });
      }
      toast.success("Item added to cart");
    },
    /*____ Remove Item From The Cart ____*/
    removeCartItem: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
    },
    /*____ INCREASE or DECREASE / Toggle item amount ____*/
    toggleItemAmount: (state, action) => {
      const { _id, todo } = action.payload;
      // calculate toggled amount
      state.cartItems = state.cartItems.map((item) => {
        // concern the desire item by checking id
        if (item._id === _id) {
          if (todo === "inc") {
            let newAmount = item.amount + 1;
            // amount shouldn'e be above max/stock
            if (newAmount > item.max) {
              newAmount = item.max;
            }
            return { ...item, amount: newAmount };
          } else if (todo === "dec") {
            // amount shouldn'e be less than 1
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        }
        return item;
      });
    },
    /*____ Clear Cart ____*/
    clearCart: (state) => {
      state.cartItems = [];
      // There, no need to reset other values.Because other values will calculate each time the cartItems change from ui by dispatching countTotal() action
    },
    /*____ Count total price and amount ____*/
    countTotal: (state, action) => {
      const { totalItems, totalPrice } = state.cartItems.reduce(
        (total, cartItem) => {
          const { amount, price } = cartItem;
          total.totalItems += amount;
          total.totalPrice += price * amount;
          return total;
        },
        { totalItems: 0, totalPrice: 0 }
      );
      state.totalItems = totalItems;
      state.totalPrice = totalPrice;
    },
  },
});

// export all the actions
export const {
  addToCart,
  removeCartItem,
  toggleItemAmount,
  clearCart,
  countTotal,
} = cartSlice.actions;
// export by default the reducer
export default cartSlice.reducer;
