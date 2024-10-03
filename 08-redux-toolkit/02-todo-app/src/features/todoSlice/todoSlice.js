import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	todo: [],
};

const todoSlice = createSlice({
	name: "todo",
	initialState: initialState,
	reducers: {
		addToList: (state, action) => {
			state.todo.push({ id: Date.now(), task: action.payload });
		},
		removeFromList: (state, action) => {
			state.todo = state.todo.filter((todo) => todo.id !== action.payload);
		},
		cleartodoList: (state) => {
			state.todo = [];
		},
	},
});

export const { addToList, removeFromList, cleartodoList } = todoSlice.actions;
export default todoSlice.reducer;
