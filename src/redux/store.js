import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cartReducer";
import productReducer from "./features/productSlice";

export const store = configureStore({
  reducer: {
    Cart: cartReducer,
    Products: productReducer,
  },
});
