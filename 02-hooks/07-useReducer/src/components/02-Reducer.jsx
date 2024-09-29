import { useReducer } from "react";

const reducer = (state, action) => {
	switch (action.type) {
		case "BUY_BOOKS":
			console.log("action");
			return { ...state, money: state.money - 10 };
		case "ORDER_FOOD":
			return { ...state, money: state.money - 90 };
		case "SAVE_MONEY":
			return { ...state, money: state.money + 100 };
		default:
			return state;
	}
};

const ReducerApp = () => {
	const initialState = {
		money: 100,
	};

	const [state, dispatch] = useReducer(reducer, initialState);
	console.log("state", state, "dispatch", dispatch);

	const buyBooks = () => {
		dispatch({ type: "BUY_BOOKS" });
	};
	const orderFood = () => {
		dispatch({ type: "ORDER_FOOD" });
	};
	const saveMoney = () => {
		dispatch({ type: "SAVE_MONEY" });
	};

	return (
		<div>
			<h1>{state.money}</h1>
			<button onClick={buyBooks}>buy books</button>
			<button onClick={orderFood}>order food</button>
			<button onClick={saveMoney}>save money</button>
		</div>
	);
};
export default ReducerApp;
