import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const fetchProduct = createAsyncThunk("product/fetch", async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
});

export const fetchSigleProduct = createAsyncThunk(
  "product/fetchSingleProduct",
  async (id) => {
    const response = await axios.get("https://fakestoreapi.com/products/" + id);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState: { productList: [], status: "idle", error: null },
  initialState: {
    productList: [],
    productDetials: {},
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.productList = action.payload;
      })
      .addCase(fetchProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });

    builder
      .addCase(fetchSigleProduct.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSigleProduct.fulfilled, (state, action) => {
        state.status = "success";
        state.productDetials = action.payload;
      })
      .addCase(fetchSigleProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// fetchProduct
export const selectProductStatus = (state) => state.product.status;
export const selectProductList = (state) => state.product.productList;
export const selectProductError = (state) => state.product.error;

// fetchSigleProduct
export const selectSingleProductStatus = (state) => state.product.status;
export const selectSingleProductDetails = (state) =>
  state.product.productDetials;
export const selectSingleProductError = (state) => state.product.error;

export default productSlice.reducer;
