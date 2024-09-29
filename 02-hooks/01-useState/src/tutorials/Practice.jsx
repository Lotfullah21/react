import { useState } from "react";

const Practice = () => {
	const [count, setCount] = useState(5);

	const handleClick = () => {
		setCount((prevCount) => {
			return prevCount + 1;
		}); // 6
		setCount((prevCount) => prevCount + 1); // 7
		setCount((prevCount) => prevCount + 1); // 8
	};

	return (
		<div>
			<button className="btn" onClick={handleClick}>
				click here
			</button>
			<h2>{count}</h2>
		</div>
	);
};
export default Practice;
