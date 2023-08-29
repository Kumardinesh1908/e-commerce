import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  products: [],
};

export const fetchProducts = createAsyncThunk('ecommerce/fetchProducts', async () => {
  try {
    const response = await axios.get('https://my-json-server.typicode.com/Kumardinesh1908/demo/products');
    return response.data;
  } catch (error) {
    throw error;
  }
});

export const ecommerceSlice = createSlice({
  name: 'ecommerce',
  initialState,
  reducers: {
    // Products Reducers Start Here
    addToCart: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload.title);
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((product) => product.title !== action.payload);
    },
    resetCart: (state) => {
      state.cart = [];
    },
    increaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload);
      product.quantity++;
    },
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload);
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        // Handle error state if needed
      });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteProduct, resetCart, decreaseQuantity, increaseQuantity } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;
