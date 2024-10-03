import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../features/counter/counterSlice";
const Counter = () => {
	const value = useSelector((state) => state.counterSlice.value);
	// const { value } = useSelector((state) => state.counterSlice);,;
	const dispatch = useDispatch();

	return (
		<div className="btn-container">
			<button className="btn" onClick={() => dispatch(increment())}>
				increment
			</button>
			<span className="value">{value}</span>
			<button className="btn" onClick={dispatch(decrement())}>
				decrement
			</button>
		</div>
	);
};
export default Counter;


## 