import { useState } from "react";
import { useRef } from "react";

const Counter = () => {
	const refValue = useRef();
	const [value, setValue] = useState(0);
	console.log(refValue);
	const handleIncrement = () => {
		refValue.current = setInterval(() => {
			setValue((prevState) => {
				return prevState + 1;
			});
		}, 1000);
	};

	const handleStop = () => {
		console.log(refValue.current);
		clearInterval(refValue.current);
	};
	return (
		<div>
			<h4>Count: {value}</h4>
			<button onClick={handleIncrement}>Start Increment</button>
			<button onClick={handleStop}>Stop</button>
			<button></button>
		</div>
	);
};
export default Counter;
