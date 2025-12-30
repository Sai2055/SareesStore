import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./slice/ProductSlice";

export const Store = configureStore({ reducer: ProductSlice });
