import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../features/todoSlice/todoSlice";

const store = configureStore({
	reducer: {
		todoSlice: todoSlice,
	},
});

export default store;
