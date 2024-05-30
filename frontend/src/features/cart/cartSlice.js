import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { addToCart, deleteFromCart, fetchCart, updateCart } from "./cartAPI";

const initialState = {
  items: [],
  status: "idle",
};

export const addToCartAsync = createAsyncThunk(
  "counter/addToCart",
  async (item) => {
    const response = await addToCart(item);
    return response.data;
  }
);

export const fetchCartAsync = createAsyncThunk(
  "counter/fetchCart",
  async () => {
    const response = await fetchCart();
    return response.data;
  }
);
export const updateCartAsync = createAsyncThunk(
  "counter/updateCart",
  async (item) => {
    const response = await updateCart(item);
    return response.data;
  }
);
export const deleteCartAsync = createAsyncThunk(
  "counter/deleteCart",
  async (id) => {
    const response = await deleteFromCart(id);
    return response.data;
  }
);

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addToCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addToCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items.push(action.payload);
      })
      .addCase(fetchCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.items = action.payload;
      })
      .addCase(updateCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items[index] = action.payload;
      })
      .addCase(deleteCartAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteCartAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const index = state.items.findIndex(
          (item) => item._id === action.payload._id
        );
        state.items.splice(index, 1);
      });
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export const selectItems = (state) => state.cart.items;

export default counterSlice.reducer;
