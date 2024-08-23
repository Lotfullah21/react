import { useState, useEffect } from "react";

const MultipleEffect = () => {
	const [value, setValue] = useState(0);
	const [secondValue, setSecondValue] = useState(10);
	const [thirdValue, setThirdValue] = useState(100);

	useEffect(() => {
		console.log("Hello From first useEffect");
	}, [value]);

	useEffect(() => {
		console.log("From second useEffect");
		//   pass the dependencies as state values,that means whenever we update this value's state, the useEffect function is going to get invoked.
	}, []);

	return (
		<div className="container">
			<div>
				<h1>{value}</h1>
				<button
					onClick={() => {
						setValue(value + 1);
					}}
					className="btn">
					Increment
				</button>
			</div>

			<div>
				<h1>{secondValue}</h1>
				<button
					onClick={() => {
						setSecondValue(secondValue + 1);
					}}
					className="btn">
					Increment
				</button>
			</div>
		</div>
	);
};

export default MultipleEffect;
