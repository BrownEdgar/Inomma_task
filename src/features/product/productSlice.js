import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  data: [],
  status: '',
};



export const productSlice = createSlice({
  name: 'product',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    getProducts: (state) => {
      state.value += 1;
    },
    addProducts: (state, action) => {
      console.log('action', action)
      state.data.push(...action.payload);
    },

  },

});

export const { getProducts, addProducts } = productSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
export const selectProducts = (state) => state.products.data;

// // We can also write thunks by hand, which may contain both sync and async logic.
// // Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd = (amount) => (dispatch, getState) => {
//   const currentValue = selectCount(getState());
//   if (currentValue % 2 === 1) {
//     dispatch(incrementByAmount(amount));
//   }
// };

export default productSlice.reducer;
