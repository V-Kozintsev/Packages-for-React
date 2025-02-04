import { createSlice } from "@reduxjs/toolkit";

export const productSlice = createSlice({
  name: "product",
  initialState: {
    product: [],
    selected: [],
  },
  reducers: {
    setProducts: (state, actions) => {
      state.product = actions.payload;
    },
    addToCart: (state, action) => {
      const index = state.selected.findIndex(
        (product) => product.id === action.payload.id,
      );
      if (index === -1) {
        state.selected.push({ ...action.payload, quantity: 1 });
      } else {
        state.selected[index].quantity = state.selected[index].quantity + 1;
      }
    },
    // productSlice.js
    remove: (state, action) => {
      const index = state.selected.findIndex(
        (product) => product.id === action.payload,
      );
      if (index !== -1) {
        if (state.selected[index].quantity > 1) {
          state.selected[index].quantity = state.selected[index].quantity - 1;
        } else {
          state.selected = state.selected.filter(
            (product) => product.id !== action.payload,
          );
        }
      }
    },
  },
});

export const { setProducts, addToCart, remove } = productSlice.actions; // Исправили экспорт
export default productSlice.reducer;
