import { createSlice } from "@reduxjs/toolkit";
import cartData from "../../data";

const initialState = {
	cartItems: cartData,
	amount: 1,
	total: 0,
	isLoading: true,
};

const cartSlice = createSlice({
	// name of our slice
	name: "cart",
	initialState: initialState,
	reducers: {
		clearCart: (state) => {
			state.cartItems = [];
		},
		removeItem: (state, action) => {
			const id = action.payload;
			state.cartItems = state.cartItems.filter((item) => item.id != id);
			console.log("action", action);
		},
		increase: (state, action) => {
			const id = action.payload;
			const cartItem = state.cartItems.find((item) => item.id === id);
			cartItem.amount = cartItem.amount + 1;
		},
		decrease: (state, action) => {
			const id = action.payload;
			const cartItem = state.cartItems.find((item) => {
				return item.id === id;
			});
			cartItem.amount = cartItem.amount - 1;
		},
		calculateTotal: (state) => {
			let amount = 0;
			let total = 0;
			state.cartItems.forEach((item) => {
				amount = amount + item.amount;
				total = total + item.amount * item.price;
			});
			state.total = total;
			state.amount = amount;
		},
	},
});
export const { clearCart, removeItem, increase, decrease, calculateTotal } =
	cartSlice.actions;
console.log("cart slice", cartSlice);
// reducer lives inside the slice that manages the slices states.
export default cartSlice.reducer;
