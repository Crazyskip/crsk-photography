import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.cartItems.push(action.payload);
    },
  },
});

export const { addItem } = cartSlice.actions;

export const selectTotalQuantity = (state) =>
  state.cart.cartItems.reduce(
    (accumulatedQuantity, cartItem) => accumulatedQuantity + cartItem.quantity,
    0
  );

export const selectCartItems = (state) => state.cart.cartItems;

export default cartSlice.reducer;
