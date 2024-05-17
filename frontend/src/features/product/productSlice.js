import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  fetchCategories,
  fetchColors,
  fetchProduct,
  fetchSizes,
} from "./productAPI";

const initialState = {
  products: [],
  colors: [],
  sizes: [],
  categories: [],
  status: "idle",
};

export const fetchProductsAsync = createAsyncThunk(
  "product/fetchProduct",
  async ({ filterSet, sort }) => {
    const response = await fetchProduct(filterSet, sort);
    return response.data;
  }
);

export const fetchColorsAsync = createAsyncThunk(
  "product/fetchColors",
  async () => {
    const response = await fetchColors();
    return response.data;
  }
);
export const fetchSizesAsync = createAsyncThunk(
  "product/fetchSizes",
  async () => {
    const response = await fetchSizes();
    return response.data;
  }
);
export const fetchCategoriesAsync = createAsyncThunk(
  "product/fetchCategories",
  async () => {
    const response = await fetchCategories();
    return response.data;
  }
);

export const productSlice = createSlice({
  name: "product",
  initialState,

  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.products = action.payload;
      })
      .addCase(fetchColorsAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchColorsAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.colors = action.payload;
      })
      .addCase(fetchSizesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSizesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.sizes = action.payload;
      })
      .addCase(fetchCategoriesAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCategoriesAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.categories = action.payload;
      });
  },
});

export const selectProducts = (state) => state.product.products;
export const selectColors = (state) => state.product.colors;
export const selectSizes = (state) => state.product.sizes;
export const selectCategories = (state) => state.product.categories;

export default productSlice.reducer;
