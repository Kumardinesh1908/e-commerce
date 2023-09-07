import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

// Define the initial state of the eCommerce slice
const initialState = {
  cart: [],       // Cart containing selected products
  products: [],   // List of products
  error: null,    // Error state for handling API errors
};

// Action creator to get all products
export const fetchProducts = createAsyncThunk('ecommerce/fetchProducts', async () => {
  const response = await axios.get('https://my-json-server.typicode.com/Kumardinesh1908/demo/products');
  return response.data;
});

// Action creator to add a new product
export const addProduct = createAsyncThunk('ecommerce/addProduct', async (newProduct) => {
  const response = await axios.post('https://my-json-server.typicode.com/Kumardinesh1908/demo/products', newProduct);
  return response.data;
});

// Action creator to update a product
export const updateProduct = createAsyncThunk('ecommerce/updateProduct', async (updatedProduct) => {
  const response = await axios.put(`https://my-json-server.typicode.com/Kumardinesh1908/demo/products/${updatedProduct.id}`, updatedProduct);
  return response.data;
});

// Define the eCommerce slice using createSlice
export const ecommerceSlice = createSlice({
  name: 'ecommerce',    // Name of the slice
  initialState,         // Initial state defined above
  reducers: {
    // Reducer function for adding a product to the cart
    addToCart: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload.title );
      if (product) {
        product.quantity += action.payload.quantity;
      } else {
        state.cart.push(action.payload);
      }
    },

     // Reducer function for deleting a product from the cart
    deleteProduct: (state, action) => {
      state.cart = state.cart.filter((product) => product.title !== action.payload);
    },

    // Reducer function for resetting the cart
    resetCart: (state) => {
      state.cart = [];
    },

    // Reducer function for increasing the quantity of a product in the cart
    increaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload);
      product.quantity++;
    },

    // Reducer function for decreasing the quantity of a product in the cart
    decreaseQuantity: (state, action) => {
      const product = state.cart.find((product) => product.title === action.payload);
      if (product.quantity === 1) {
        product.quantity = 1;
      } else {
        product.quantity--;
      }
    },

    // Reducer function to delete a product from the products array
    productDeleted: (state, action) => {
      state.products = state.products.filter(product => product.title !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addProduct.fulfilled, (state, action) => {
        state.products.push(action.payload);      // Add new product to products array if action fulfilled
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload;          // Set fetched products to products array if action fulfilled
      })
      .addCase(updateProduct.fulfilled, (state, action) => {
        // Find the updated product's index in products array and update it
        const updatedProduct = action.payload;
        const index = state.products.findIndex(product => product.id === updatedProduct.id);
        if (index !== -1) {
          state.products[index] = updatedProduct;
        }
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.error = action.error.message; // Set the error message in the state
      });
  },
});

// Action creators are generated for each case reducer function
export const { addToCart, deleteProduct, resetCart, decreaseQuantity, increaseQuantity, productDeleted } = ecommerceSlice.actions;

export default ecommerceSlice.reducer;

