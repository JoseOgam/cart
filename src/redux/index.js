import { configureStore } from "@reduxjs/toolkit";
import productReducers from "./reducers/slice";

const store = configureStore({
  reducer: {
    products: productReducers,
  },
});

export default store;
