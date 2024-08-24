import { useState, useReducer } from "react";
import universities from "../data/Data";

const defaultState = {
	colleges: universities,
};

const CLEAR_LIST = "CLEAR_LIST";
const RESET_LIST = "RESET_LIST";
const REMOVE_ITEM = "REMOVE_ITEM";

const reducer = (state, action) => {
	if (action.type == "CLEAR_LIST") {
		return { ...state, colleges: [] };
	}
	if (action.type === RESET_LIST) {
		return { ...state, colleges: universities };
	}

	if (action.type === REMOVE_ITEM) {
		let newColleges = state.colleges.filter(
			(college) => college.id !== action.payload.id
		);
		return { ...state, colleges: newColleges };
	}
	throw new Error(`No matching "${action.type}" action type`);
};

const RemoveCollegeUseReducer = () => {
	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleRemoveCollege = (id) => {
		dispatch({ type: REMOVE_ITEM, payload: { id } });
	};

	const resetHandle = () => {
		dispatch({ type: RESET_LIST });
	};

	const clearList = () => {
		dispatch({ type: CLEAR_LIST });
	};

	return (
		<div>
			{state.colleges.map((college) => {
				const { name, course, id } = college;
				return (
					<div key={id}>
						<h4>{name}</h4>
						<h5>{course}</h5>
						<button onClick={() => handleRemoveCollege(id)}>Remove</button>
					</div>
				);
			})}

			{state.colleges.length < 1 ? (
				<button onClick={() => resetHandle()}>reset</button>
			) : (
				<button onClick={() => clearList()}>clear</button>
			)}
		</div>
	);
};
export default RemoveCollegeUseReducer;
