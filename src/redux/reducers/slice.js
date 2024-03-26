import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "https://dummyjson.com/products";

export const fetchProducts = createAsyncThunk(
  "ProductSlice/fetchProducts",
  async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      return data.products;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
);

const productSlice = createSlice({
  name: "ProductSlice",
  initialState: {
    products: [],
    status: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state, action) => {
        state.status = false;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = true;
        state.products = action.payload;

        //retreve existing items products from localaStorage
        const existingProducts =
          JSON.parse(localStorage.getItem("products")) || [];

        //merge existing products with new products
        const updatedProducts = [...existingProducts, ...action.payload];

        // Store fetched data in localStorage
        localStorage.setItem("products", JSON.stringify(updatedProducts));
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = false;
      });
  },
});

const productReducers = productSlice.reducer;
export default productReducers;
