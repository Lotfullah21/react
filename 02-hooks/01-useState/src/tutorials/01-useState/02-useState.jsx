import { useState } from "react";

const HelloState = () => {
	const [count, setCount] = useState(0);
	// to handle click.
	const handleClick = () => {
		setCount(count + 1);
	};

	return (
		<>
			<h2>Hello states</h2>
			<h1>{count}</h1>
			<button onClick={handleClick} className="btn">
				Increment
			</button>
		</>
	);
};

export default HelloState;
