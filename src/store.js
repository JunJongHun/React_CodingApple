import { configureStore } from "@reduxjs/toolkit";
import { product } from "./store/product.js";

export default configureStore({
  reducer: {
    product: product.reducer,
  },
});
