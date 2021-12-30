import { createSlice } from "@reduxjs/toolkit";
import {
  addItemToCart,
  decrementItemFromCart,
  incrementItemFromCart,
  removeItemFromCart,
} from "./cart.utils";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
      };
    },
    decrementItem: (state, action) => {
      return {
        ...state,
        cartItems: decrementItemFromCart(state.cartItems, action.payload),
      };
    },
    incrementItem: (state, action) => {
      return {
        ...state,
        cartItems: incrementItemFromCart(state.cartItems, action.payload),
      };
    },
    removeItem: (state, action) => {
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload),
      };
    },
  },
});

export const { addItem, decrementItem, incrementItem, removeItem } =
  cartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
