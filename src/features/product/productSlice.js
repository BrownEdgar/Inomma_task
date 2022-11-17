import { createSlice } from '@reduxjs/toolkit';
import selectRandomProduct from '../../components/utils/helpers/selectRandomProduct';

const RANDOM_PRODUCT_COUNT = 5;

const initialState = {
  data: []
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    addProducts: (state, action) => {
      state.data.push(...action.payload);
    },
    deleteProduct: (state, action) => {
      state.data = state.data.filter(product => product.id !== action.payload.id)
    },
  },
});

export const { getProducts, addProducts, deleteProduct } = productSlice.actions;

export const selectProducts = (state) => state.products.data;

export const selectRandomProducts = ({ products }) => selectRandomProduct(products.data, RANDOM_PRODUCT_COUNT);

export default productSlice.reducer;
