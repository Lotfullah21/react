import { useState } from "react";

const StateGotcha = () => {
	const [count, setCount] = useState(0);

	const updateCount = () => {
		setCount((prevState) => {
			const newState = prevState + 1;
			console.log(newState); // 1
			return newState;
		});
	};
	return (
		<div>
			<h1>{count}</h1>
			<button className="btn" onClick={updateCount}>
				click here
			</button>
		</div>
	);
};
export default StateGotcha;
