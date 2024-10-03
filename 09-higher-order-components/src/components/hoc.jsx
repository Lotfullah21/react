import { useState } from "react";
const HigherOrderComponent = (Component) => {
	const updatedComponent = () => {
		const [count, setCount] = useState(0);
		const handleClick = () => {
			setCount(count + 10);
		};
		return <Component count={count} handleClick={handleClick}></Component>;
	};
	return updatedComponent;
};
export default HigherOrderComponent;
