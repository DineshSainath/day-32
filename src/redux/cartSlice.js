import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    updateCart: (state, action) => {
      const { product, quantity } = action.payload;
      const existingProduct = state.cart.find((item) => item.id === product.id);
      if (existingProduct) {
        state.cart = state.cart.map((item) =>
          item.id === product.id ? { ...item, quantity } : item
        );
      } else {
        state.cart.push({ ...product, quantity });
      }
    },
    calculateTotal: (state) => {
      return state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const { updateCart, calculateTotal } = cartSlice.actions;
export default cartSlice.reducer;
