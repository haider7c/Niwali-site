import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  addedItems: [], // New state to track added items
};

export const cartItemSlice = createSlice({
  name: "cartItemSlice",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      if (state.cartItems.find((item) => item.id === action.payload.id)) {
        const item = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
        item.quantity += 1;
      } else {
        state.cartItems.push(action.payload);
        state.addedItems.push(action.payload.id); // Add item ID to addedItems
      }
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.addedItems = state.addedItems.filter(
        (id) => id !== action.payload.id
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (items) => items.id === action.payload.id
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.cartItems.find(
        (items) => items.id === action.payload.id
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartItemSlice.actions;
export default cartItemSlice.reducer;
