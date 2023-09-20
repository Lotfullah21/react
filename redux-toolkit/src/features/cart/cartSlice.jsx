import { createSlice } from "@reduxjs/toolkit";
import Items from "../../data";

const initialState = {
  cartItems: Items,
  amount: 0,
  total: 0,
  isLoading: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      // using payload, we are having access to id.
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount + 1;
    },
    decrease: (state, { payload }) => {
      const cartItem = state.cartItems.find((item) => item.id === payload.id);
      cartItem.amount = cartItem.amount - 1;
    },
    calculateTotal: (state) => {
      let amount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        totalPrice = totalPrice + parseInt(item.price) * item.amount;
      });
      state.amount = amount;
      state.total = totalPrice;
    },
  },
});
// export this object from cartSlice.actions.
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
  cartSlice.actions;
export default cartSlice.reducer;
