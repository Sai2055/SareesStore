import { configureStore } from "@reduxjs/toolkit";
import ProductsReducer from "./slice/ProductSlice";

export const store = configureStore({
  reducer: {
    products: ProductsReducer,
  },
});
