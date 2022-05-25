import { createSlice } from "@reduxjs/toolkit";

export let product = createSlice({
  name: "product",
  initialState: [],
  reducers: {
    changeCount(state, action) {
      let a = state.map((obj) => {
        return obj.id === action.payload ? obj.count++ : obj;
      });
    },
    pushProduct(state, action) {
      action.payload["count"] = 1;
      state.push(action.payload);
    },
  },
});

export let { changeCount, pushProduct } = product.actions;
