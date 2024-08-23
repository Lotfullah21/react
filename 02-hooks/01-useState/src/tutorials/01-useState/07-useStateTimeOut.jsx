import { useState } from "react";

const StateTimeOut = () => {
	const [count, setCount] = useState(0);
	const handleClick = () => {
		setTimeout(() => {
			setCount((currentState) => {
				return currentState + 1;
			});
		}, 3000);
	};

	return (
		<div>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				click here
			</button>
		</div>
	);
};
export default StateTimeOut;
